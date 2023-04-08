<script>
  import { IngredientCard } from "..";

  export let recipeData = {};
  export let serving = 1;
</script>

<section class="">
  <h1 class="font-[Roboto] font-semibold text-2xl mb-3">Ingredients</h1>
  {#each recipeData.recipe.ingredients as ingredient}
    <IngredientCard {ingredient} {serving} />
  {/each}
</section>
