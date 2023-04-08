<script>
  export let ingredient = {};
  export let serving;

  $: quantity = ingredient.quantity * serving;
  $: weight = ingredient.weight * serving;
</script>

<div
  class="flex items-center gap-6 mb-2 p-2 font-[Alkatra] italic font-light border-[0.3px] border-[#7bc3e7] rounded hover:scale-[1.02]"
>
  <div class="w-[60px] h-[60px]">
    <img
      src={ingredient.image}
      alt="ingredientImage"
      class="w-full h-full rounded"
    />
  </div>

  <div class="flex-grow grid grid-cols-2">
    <div>
      <h2 class="mb-1">
        Name: <span class="text-[#2343a3]">{ingredient.food}</span>
      </h2>
      <p>
        Category: <span class="text-[#cf54b7]">{ingredient.foodCategory}</span>
      </p>
    </div>

    <div>
      <p class="mb-1">
        Quantity: <span class="text-[#2343a3]">{quantity.toFixed(2)}</span>
      </p>
      <p>
        Weight: <span class="text-[#cf54b7]"
          >{weight.toFixed(2)}
          {ingredient.measure || "gram"}</span
        >
      </p>
    </div>
  </div>
</div>
