<script>
  import Layout from "../../components/Higher/Layout.svelte";
  import { useParams, Link } from "svelte-navigator";
  import { onMount, onDestroy } from "svelte";
  import Icon from "@iconify/svelte";
  import { baseRoute, recipeKeys } from "../../utils/routes/recipeRoute";
  import axios from "axios";
  import {
    CreateAd,
    Footer,
    Ingredients,
    Nutrients,
    RecipeIntro,
    RelatedRecipe,
  } from "../../components";
  const params = useParams();

  let recipeData;
  let relatedRecipe;
  let id = "";
  let loading = true;
  let serving;

  // get id from params
  $: unsubscribe = params.subscribe((value) => {
    id = value.id;
    fetchData();
  });

  // change random index
  const changeIndex = (index) => {
    if (index == 0) return 1;
    else if (index == 1) return 2;
    else return 0;
  };

  // get single detail recipe data and related recipes
  const fetchData = async () => {
    loading = true;
    const randomIndex = Math.floor(Math.random() * recipeKeys.length);
    // get single recipe data
    const { data } = await axios.get(
      `${baseRoute}/${id}?type=public&app_id=${recipeKeys[randomIndex].appId}&app_key=${recipeKeys[randomIndex].appKey}`
    );

    recipeData = data;
    if (recipeData) {
      // get related recipes
      const response = await fetch(
        `${baseRoute}?type=public&q=${recipeData.recipe.label}&app_id=${
          recipeKeys[changeIndex(randomIndex)].appId
        }&app_key=${recipeKeys[changeIndex(randomIndex)].appKey}`
      );
      relatedRecipe = await response.json();
    }

    loading = false;
  };

  // get on mount
  onMount(fetchData);

  // unsubscribe on destroy
  onDestroy(() => {
    unsubscribe();
  });
</script>

<Layout>
  <section class="mt-[80px] lg:mt-[100px] pt-6">
    {#if loading}
      <!--Add Loader until data fetched  -->
      <div class="w-full flex justify-center py-20">
        <img src="/loader.gif" alt="loaderImage" class="w-[180px] h-[180px]" />
      </div>
    {:else}
      <div>
        <!-- single recipe details -->
        <div class="max-w-6xl mx-auto px-3 mb-5">
          <Link
            to="/recipe"
            class="font-[Alkatra] text-lg flex items-center gap-1 hover:scale-105 hover:text-[#3467a5] w-[200px]"
          >
            <Icon icon="ic:baseline-arrow-back" class="text-lg" />
            Back to recipe table
          </Link>

          <div class="bg-white shadow mt-4 py-8 px-10">
            <!-- Recipe Intro -->
            <RecipeIntro
              {recipeData}
              {serving}
              on:changeServing={(e) => (serving = e.detail)}
            />

            <!-- Ingredients and Nutrients  -->
            <div
              class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20"
            >
              <Ingredients {recipeData} {serving} />
              <Nutrients {recipeData} {serving} />
            </div>
          </div>

          <!-- Related Recipes -->
          {#if relatedRecipe.hits.length >= 2}
            <div class="mt-5">
              <h1 class="font-bold font-[Roboto] text-3xl mb-3">
                If you liked this recipe, check these out!
              </h1>
              <RelatedRecipe {relatedRecipe} />
            </div>
          {/if}
        </div>

        <!-- Footer and CreateAd components -->
        <CreateAd />
        <Footer />
      </div>
    {/if}
  </section>
</Layout>
