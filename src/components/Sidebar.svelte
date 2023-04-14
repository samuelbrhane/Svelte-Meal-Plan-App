<script>
  import { Link, useLocation } from "svelte-navigator";
  import authStore from "../stores/authStore";
  import { onMount, onDestroy } from "svelte";
  import { logout } from "../utils/functions/logout";

  let location = useLocation();

  let pathname = "";

  let unsubscribe;

  onMount(() => {
    unsubscribe = location.subscribe((value) => {
      pathname = value.pathname;
    });
  });

  onDestroy(() => {
    unsubscribe();
  });

  // set active page
  const isActive = (url) => {
    return pathname === url;
  };
</script>

<section class="py-8 flex flex-col items-center justify-between h-full z-40">
  <!-- Links -->
  <ul class="flex items-center flex-col gap-5 text-[16px]">
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
    <div class="flex flex-col items-center">
      <button
        on:click={logout}
        class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md hover:scale-[1.06]"
        >Sign Out</button
      >
      <div class="text-sm mt-1 flex items-center gap-[6px]">
        <p class="text-white">Create meal plan?</p>
        <Link to="/login" class="link mt-1">Dashboard</Link>
      </div>
    </div>
  {:else}
    <!-- Authentication links -->
    <div class="flex flex-col items-center">
      <Link
        to="/register"
        class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md hover:scale-[1.06]"
        >Register</Link
      >
      <div class="text-sm mt-3 flex items-center gap-[6px]">
        <p class="text-white">Already a member?</p>
        <Link to="/login" class="link mt-1">Sign In</Link>
      </div>
    </div>
  {/if}
</section>
