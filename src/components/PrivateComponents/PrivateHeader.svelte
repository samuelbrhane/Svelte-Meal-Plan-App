<script>
  import Icon from "@iconify/svelte";
  import { PrivateSidebar } from "..";
  import { Link } from "svelte-navigator";
  let isSidebarOpen = false;
</script>

<section class="flex w-full bg-[rgb(246,246,217)] py-4 lg:pl-[220px]">
  <div class="px-4 md:px-8 lg:px-12 flex items-center justify-between w-full">
    <!-- Add site title -->
    <Link to="/" class="flex items-center gap-2">
      <img src="/media/title.png" alt="Logo" class="w-12 h-12" />
      <h1 class="text-xl font-bold text-[#3789b9] uppercase">Plate plan</h1>
    </Link>

    <!-- menu button -->
    <button
      class="lg:hidden text-2xl hover:scale-110 text-[#3789b9]"
      on:click={() => (isSidebarOpen = !isSidebarOpen)}
    >
      <Icon icon="ic:round-menu" />
    </button>

    <!-- sidebar for small screen devices -->
    <div
      class={`lg:hidden fixed top-0 bottom-0 ${
        isSidebarOpen ? "left-0 duration-700" : "left-[-999px] duration-[1.3s]"
      } ease-in-out z-20`}
    >
      <PrivateSidebar />
    </div>
  </div>
</section>
