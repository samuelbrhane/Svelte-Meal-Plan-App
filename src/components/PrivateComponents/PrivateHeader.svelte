<script>
  import Icon from "@iconify/svelte";
  import { PrivateSidebar } from "..";
  import { Link } from "svelte-navigator";
  let isSidebarOpen = false;
  import authStore from "../../stores/authStore";
</script>

<section class="flex w-full bg-[#47153e] py-4 lg:pl-[250px]">
  <div class="px-4 md:px-12 lg:px-20 flex items-center justify-between w-full">
    <h1 class="font-[Alkatra] italic text-2xl text-[#97e2e9]">
      Hello, {$authStore.userName}
    </h1>

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
