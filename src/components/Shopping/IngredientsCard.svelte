<script>
  import axios from "axios";
  import Loader from "../Loader.svelte";
  import {
    InstructionUrl,
    instructionKey,
  } from "../../utils/routes/recipeRoute";

  export let mealItem = {};
  let loading = false;
  export let index;

  let instruction = [];
  $: {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": instructionKey[index].appKey,
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    // fetch instruction
    const fetchInstruction = async () => {
      loading = true;
      const response = await fetch(
        `${InstructionUrl}${mealItem.title.split(" ")[0]}`,
        options
      );
      const json = await response.json();
      if (
        json.results &&
        json.results.length > 0 &&
        json.results[0].recipes &&
        json.results[0].recipes.length > 0 &&
        json.results[0].recipes[0].instructions
      ) {
        instruction = json.results[0].recipes[0].instructions;
      }

      loading = false;
    };

    fetchInstruction();
  }
</script>

{#if loading}
  <Loader />
{:else}
  <div class="mb-6">
    <h1 class="text-xl font-bold font-[Roboto]">
      Meal: <span class="text-[#a93592]">{mealItem.title}</span>
    </h1>

    <h2 class="font-semibold font-[Merriweather] mb-2 text-lg text-[#44acc1]">
      Ingredient Lines
    </h2>
    <div
      class="grid grid-cols-3 xl:grid-cols-2 gap-2 font-[Alkatra] text-[13px]"
    >
      {#each mealItem.ingredients as item}
        <!-- ingredients -->
        <div class="shadow rounded flex gap-4 hover:scale-[1.01]">
          <img src={item.image} alt="foodImage" class="w-20 h-full rounded" />
          <div class="flex flex-col justify-center">
            <p class="text-[#6541b3]">{item.food}</p>
            <p class="text-[#71983f] text-[11px]">
              Category: {item.foodCategory}
            </p>
            <p class="text-[12px] text-[#b436ac]">
              {item.quantity}
              {item.measure}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- instructions -->
    {#if instruction.length > 0}
      <h2
        class="font-semibold font-[Merriweather] mb-2 mt-4 text-lg text-[#44acc1]"
      >
        Instructions
      </h2>
      <div>
        {#each instruction as item, index}
          <p class="font-[Alkatra] text-[12px] text-[#323132] pb-1">
            {index + 1}. {item.display_text}
          </p>
        {/each}
      </div>
    {/if}
  </div>
{/if}
