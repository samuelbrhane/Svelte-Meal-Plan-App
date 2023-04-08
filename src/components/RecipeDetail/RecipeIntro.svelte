<script>
  export let recipeData = {};
  export let serving;
  import Icon from "@iconify/svelte";

  const preparationTime = [2, 3, 4, 5, 6, 8, 10];
  const cookingTime = [5, 10, 15, 20, 25, 30, 40];
  let ratingValue = 4;

  const randomIndex = Math.floor(Math.random() * preparationTime.length);
</script>

<section class="bg-white shadow mt-4 py-8 px-10">
  <h1 class="text-center mb-5 font-[Roboto] font-bold text-3xl xl:text-4xl">
    {recipeData.recipe.label}
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-3 items-center">
    <!-- Image -->
    <div>
      <img
        src={recipeData.recipe.image || recipeData.recipe.images.REGULAR.url}
        alt="foodImage"
        class="w-[300px] h-[250px] rounded"
      />
    </div>

    <!-- Preparation and cooking time -->
    <div>
      <div class="mb-8 font-[Alkatra]">
        <Icon icon="mdi:food-variant" class="footerIcon text-3xl mb-1" />
        <p>
          {preparationTime[randomIndex]} mins to prepare ingredients
        </p>
      </div>

      <div class="font-[Alkatra]">
        <Icon icon="zondicons:location-food" class="footerIcon text-3xl mb-1" />
        <p>{cookingTime[randomIndex] * serving} mins to cook</p>
      </div>
    </div>

    <!-- Number of  serving-->
    <div class="font-[Alkatra]">
      <p>Amount of serving</p>
      <input
        type="number"
        bind:value={serving}
        class="input mt-3 max-w-[130px]"
      />
    </div>
  </div>
</section>
