<script>
  import { FoodTable, RecipeSidebar } from "../../components";
  import Layout from "../../components/Higher/Layout.svelte";
  import Icon from "@iconify/svelte";
  let searchWord = "";
  // handle recipe search
  let handleRecipeSearch = async () => {};
</script>

<!-- max-w-6xl mx-auto px-3  -->
<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <h1
      class="font-bold font-[Roboto] text-3xl md:text-4xl text-center mt-5 mb-6"
    >
      Food & Recipe Browser
    </h1>

    <form
      on:submit|preventDefault={handleRecipeSearch}
      class="mb-4 px-4 w-[270px]"
    >
      <input
        type="text"
        placeholder="Search..."
        bind:value={searchWord}
        class="input shadow"
      />
    </form>

    <!-- Recipe content -->

    <div class="px-4 xl:flex mb-6 relative">
      <RecipeSidebar />
      <FoodTable />
    </div>
  </section>
</Layout>
