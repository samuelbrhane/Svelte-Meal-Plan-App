<script>
  import { FoodTable, RecipeSidebar } from "../../components";
  import Layout from "../../components/Higher/Layout.svelte";
  import Icon from "@iconify/svelte";
  let openRecipeSidebar = false;
</script>

<!-- max-w-6xl mx-auto px-3  -->
<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <h1
      class="font-bold font-[Roboto] text-3xl md:text-4xl text-center mt-5 mb-6"
    >
      Food & Recipe Browser
    </h1>

    <!-- Recipe content -->
    <button
      class="px-5 flex items-center gap-1 font-[Alkatra] mb-2 lg:hidden"
      on:click={() => (openRecipeSidebar = !openRecipeSidebar)}
    >
      <Icon icon="ic:baseline-arrow-back" class="text-lg" />
      Open Sidebar</button
    >
    <div class="px-4 flex mb-6 relative">
      <div class="hidden lg:inline">
        <RecipeSidebar />
      </div>
      <div
        class={`absolute top-0 bottom-0 lg:hidden ease-in-out bg-white z-20 ${
          openRecipeSidebar
            ? "left-0 duration-700 "
            : "left-[-999px] duration-1000"
        }`}
      >
        <RecipeSidebar />
      </div>

      <FoodTable />
    </div>
  </section>
</Layout>
