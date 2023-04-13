<script>
  import { Link, useLocation } from "svelte-navigator";
  import authStore from "../stores/authStore";
  import Icon from "@iconify/svelte";
  import { Sidebar } from ".";
  let isSidebarOpen = false;

  import { onMount, onDestroy } from "svelte";
  import { logout } from "../utils/functions/logout";

  let location = useLocation();

  let pathname = "";

  let locationUnsubscribe;

  onMount(() => {
    locationUnsubscribe = location.subscribe((value) => {
      pathname = value.pathname;
    });
  });

  onDestroy(() => {
    locationUnsubscribe();
  });

  const isActive = (url) => {
    return pathname === url;
  };

  // set active page
</script>

<header
  class="w-full fixed left-0 top-0 h-[80px] lg:h-[100px] bg-[#3c2e3d] z-50 shadow"
>
  <nav class="max-w-6xl mx-auto px-3 h-full flex justify-between items-center">
    <!-- Logo -->
    <Link to="/" class="flex items-center gap-2">
      <img
        src="/media/title.png"
        alt="Logo"
        class="w-10 h-10 md:w-12 md:h-12"
      />
      <h1
        class="text-xl sm:text-2xl font-bold text-[#bbe2f9] md:text-3xl uppercase font-[Alkatra]"
      >
        Plate plan
      </h1>
    </Link>

    <!-- Links -->
    <ul class="lg:flex items-center lg:gap-8 text-[16px] hidden">
      <li
        on:select={() => isActive("/")}
        class={` ${pathname === "/" && "active"} link`}
      >
        <Link to="/">Welcome</Link>
      </li>
      <li
        on:select={() => isActive("/recipe")}
        class={` ${pathname === "/recipe" && "active"} link`}
      >
        <Link to="/recipe">Recipe</Link>
      </li>
      <li
        on:select={() => isActive("/about")}
        class={` ${pathname === "/about" && "active"} link`}
      >
        <Link to="/about">About</Link>
      </li>
      <li
        on:select={() => isActive("/faq")}
        class={` ${pathname === "/faq" && "active"} link`}
      >
        <Link to="/faq">FAQ</Link>
      </li>
    </ul>

    {#if $authStore.isAuthenticated}
      <div class="hidden lg:flex flex-col items-center">
        <button
          on:click={logout}
          class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md hover:scale-[1.06]"
          >Logout</button
        >
        <div class="text-sm mt-1 flex items-center gap-[6px]">
          <p class="text-white">Create meal plan?</p>
          <Link to="/login" class="link mt-1">Dashboard</Link>
        </div>
      </div>
    {:else}
      <!-- Authentication links -->
      <div class="hidden lg:flex flex-col items-center">
        <Link
          to="/register"
          class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md hover:scale-[1.06]"
          >Register</Link
        >
        <div class="text-sm mt-1 flex items-center gap-[6px]">
          <p class="text-white">Already a member?</p>
          <Link to="/login" class="link mt-1">Sign In</Link>
        </div>
      </div>
    {/if}

    <!-- menu links for small screen -->
    <button
      on:click={() => (isSidebarOpen = !isSidebarOpen)}
      class="text-2xl text-[#73b8e0] cursor-pointer lg:hidden hover:scale-110"
    >
      <Icon icon="ic:outline-menu" />
    </button>
  </nav>
</header>

<!-- Sidebar component for small screen devices -->
<div
  class={`fixed lg:hidden top-[80px] z-40 bottom-0 ld:top-[100px] w-[200px] ease-in-out bg-[#3c2e3d] ${
    isSidebarOpen ? "left-0 duration-[0.8s]" : "left-[-999px] duration-[1.5s]"
  }`}
>
  <Sidebar />
</div>
