<script>
  import {
    FoodTable,
    Footer,
    RecipeSidebar,
    RecipeService,
    CreateAd,
  } from "../../components";
  import Layout from "../../components/Higher/Layout.svelte";
  import { onMount } from "svelte";
  import { searchRecipe } from "../../stores/recipeStore";
  let searchWord = "";
  import { inview } from "svelte-inview";
  import { animateComponent } from "../../utils/functions/animation";
  onMount(() => {
    searchRecipe("All");
  });

  // handle recipe search
  let handleRecipeSearch = async () => {
    searchRecipe(searchWord);
    searchWord = "";
  };
</script>

<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <h1
      use:inview
      on:inview_change={(e) => animateComponent(e, "fromRight")}
      class="font-bold font-[Roboto] text-[#a32389] relative right-0 text-3xl lg:text-4xl xl:text-[42px] text-center mt-5 mb-6"
    >
      Food & Recipe Browser
    </h1>

    <!-- Search input -->
    <form
      on:submit|preventDefault={handleRecipeSearch}
      class="mb-4 px-4 w-[244px]"
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

    <RecipeService />
    <CreateAd />
    <Footer />
  </section>
</Layout>
