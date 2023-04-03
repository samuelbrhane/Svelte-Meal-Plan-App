<script>
  import { Link } from "svelte-routing";
  import Icon from "@iconify/svelte";
  import { Sidebar } from ".";
  let isSidebarOpen = false;
</script>

<header
  class="w-full fixed left-0 top-0 h-[80px] lg:h-[100px] bg-[#3c2e3d] z-50 shadow"
>
  <nav class="max-w-6xl mx-auto px-3 h-full flex justify-between items-center">
    <!-- Logo -->
    <Link to="/" class="flex items-center gap-2">
      <img src="/title.png" alt="Logo" class="w-10 h-10 md:w-12 md:h-12" />
      <h1
        class="text-xl sm:text-2xl font-bold text-[#bbe2f9] md:text-3xl uppercase"
      >
        Plate plan
      </h1>
    </Link>

    <!-- Links -->
    <ul class="lg:flex items-center lg:gap-8 text-[16px] hidden">
      <Link to="/" class="link">Welcome</Link>
      <Link to="/recipe" class="link">Recipe</Link>
      <Link to="/about" class="link">About</Link>
      <Link to="/faq" class="link">FAQ</Link>
    </ul>

    <!-- Authentication links -->
    <div class="lg:flex flex-col items-center hidden">
      <Link
        to="/register"
        class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md"
        >Register</Link
      >
      <div class="text-sm mt-1 flex items-center gap-[6px]">
        <p class="text-white">Already a member?</p>
        <Link to="/login" class="link">Sign In</Link>
      </div>
    </div>

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
  class={`fixed lg:hidden top-[80px] bottom-0 ld:top-[100px] w-[200px] ease-in-out bg-[#3c2e3d] ${
    isSidebarOpen ? "left-0 duration-[0.8s]" : "left-[-999px] duration-[1.5s]"
  }`}
>
  <Sidebar />
</div>
