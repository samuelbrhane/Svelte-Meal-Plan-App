<script>
  import Layout from "../../components/Higher/Layout.svelte";
  import { useParams, Link } from "svelte-navigator";
  import { onMount, onDestroy } from "svelte";
  import Icon from "@iconify/svelte";
  import { baseRoute, recipeKeys } from "../../utils/routes/recipeRoute";
  import axios from "axios";
  import { Ingredients, RecipeIntro } from "../../components";
  const params = useParams();

  let recipeData;
  let id = "";
  let loading = true;
  let serving;

  // get id from params
  const unsubscribe = params.subscribe((value) => {
    id = value.id;
  });

  // get single detail recipe data
  const fetchData = async () => {
    loading = true;
    const randomIndex = Math.floor(Math.random() * recipeKeys.length);
    const { data } = await axios.get(
      `${baseRoute}/${id}?type=public&app_id=${recipeKeys[randomIndex].appId}&app_key=${recipeKeys[randomIndex].appKey}`
    );
    recipeData = data;
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
  <section class="mt-[80px] lg:mt-[100px] py-6">
    {#if loading}
      <!--Add Loader until data fetched  -->
      <div class="w-full flex justify-center py-20">
        <img src="/loader.gif" alt="loaderImage" class="w-[180px] h-[180px]" />
      </div>
    {:else}
      <!-- single recipe details -->
      <div class="max-w-6xl mx-auto px-3">
        <Link
          to="/recipe"
          class=" font-[Alkatra] text-lg flex items-center gap-1 hover:scale-105 hover:text-[#3467a5] w-[200px]"
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
          <div class="grid lg:grid-cols-2">
            <Ingredients {recipeData} {serving} />
          </div>
        </div>
      </div>
    {/if}
  </section>
</Layout>
