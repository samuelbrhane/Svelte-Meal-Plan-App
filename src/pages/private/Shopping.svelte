<script>
  import mealStore from "../../stores/mealStore";
  import {
    IngredientsCard,
    PrivateLayout,
    ShoppingList,
  } from "../../components";
  import { DateInput } from "date-picker-svelte";

  let currentDate = new Date();
</script>

<PrivateLayout>
  <section class="lg:ml-[250px]">
    <div
      class="px-4 md:px-8 py-4 lg:px-12 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 2xl:gap-20"
    >
      <div>
        <!-- data picker  -->
        <div>
          <h1 class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]">
            Selected The Date
          </h1>

          <!-- week start -->
          <div
            class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a]"
          >
            <h1 class="text-lg">Selected Date:</h1>
            <DateInput bind:value={currentDate} />
          </div>
        </div>

        <!-- ingredients -->
        <div>
          <h1 class="text-3xl font-[Roboto] text-[#348da3] mt-6">
            Ingredients
          </h1>
          {#if $mealStore.breakfast.length == 0 && $mealStore.lunch.length == 0 && $mealStore.snack.length == 0 && $mealStore.dinner.length == 0}
            <p class="font-[Alkatra] mt-1 font-light">
              No Meal Plan Is Created For The Selected Day.
            </p>
          {:else}
            <!-- breakfast -->
            <div>
              <h1 class="text-[#a343a3] text-xl font-[Alkatra] mt-3 uppercase">
                Breakfast
              </h1>
              {#each $mealStore.breakfast as mealItem}
                <IngredientsCard {mealItem} />
              {/each}
            </div>

            <!-- lunch -->
            <div>
              <h1 class="text-[#a343a3] text-xl font-[Alkatra] mt-3 uppercase">
                Lunch
              </h1>
              {#each $mealStore.lunch as mealItem}
                <IngredientsCard {mealItem} />
              {/each}
            </div>

            <!-- snack -->
            <div>
              <h1 class="text-[#a343a3] text-xl font-[Alkatra] mt-3 uppercase">
                Snack
              </h1>
              {#each $mealStore.snack as mealItem}
                <IngredientsCard {mealItem} />
              {/each}
            </div>

            <!-- dinner -->
            <div>
              <h1 class="text-[#a343a3] text-xl font-[Alkatra] mt-3 uppercase">
                Dinner
              </h1>
              {#each $mealStore.dinner as mealItem}
                <IngredientsCard {mealItem} />
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <!-- shopping list -->
      <div>
        <img src="/media/shoppingImg.jpg" alt="" class="w-full" />
        <h1 class="text-3xl font-[Roboto] text-[#348da3] mt-6">
          Shopping List
        </h1>
        <ShoppingList {currentDate} />
      </div>
    </div>
  </section>
</PrivateLayout>
