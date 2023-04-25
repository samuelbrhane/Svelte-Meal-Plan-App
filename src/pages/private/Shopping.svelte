<script>
  import mealStore from "../../stores/mealStore";
  import { fetchUserMeals } from "../../utils/functions/fetchUserMeals";
  import authStore from "../../stores/authStore";
  import {
    IngredientsCard,
    PrivateLayout,
    ShoppingList,
    Title,
  } from "../../components";
  import { DateInput } from "date-picker-svelte";
  import { onMount } from "svelte";
  import Loader from "../../components/Loader.svelte";
  import { slide } from "svelte/transition";

  let currentDate = new Date();
  let loading = false;
  let userMeals = [];
  let selectedDayData;

  onMount(async () => {
    const response = await fetchUserMeals(
      $authStore.userId,
      $authStore.token.access
    );
    loading = response.loading;
    userMeals = response.userMeals;
  });
  $: day = currentDate.getDate().toString().padStart(2, "0");
  $: month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  $: year = currentDate.getFullYear().toString().slice(-2);
  $: formattedDate = `${day}-${month}-${year}`;
  $: {
    selectedDayData;
    selectedDayData = userMeals.find(
      (mealData) => mealData.selectedDate == formattedDate
    );
  }
</script>

<PrivateLayout>
  <section class="lg:ml-[250px]">
    <div class="px-4 md:px-12 py-4 lg:px-20">
      {#if loading}
        <Loader />
      {:else}
        <div>
          <div class="flex justify-between">
            <Title title="Shopping" subtitle="Ingredients and shopping list" />
            <!-- data picker  -->
            <div>
              <h1
                class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]"
              >
                Select The Date
              </h1>

              <!-- week start -->
              <div
                class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a]"
              >
                <h1 class="text-lg">Selected Date:</h1>
                <DateInput bind:value={currentDate} />
              </div>
            </div>
          </div>

          <!-- ingredients -->
          <div>
            <h1 class="text-3xl font-[Roboto] text-[#348da3] mt-6 mb-3">
              Ingredients
            </h1>
            {#if !selectedDayData}
              <p class="font-[Alkatra] mt-1 font-light">
                No Meal Plan Is Created For The Selected Day.
              </p>
            {:else}
              <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8 mb-6">
                <!-- breakfast -->
                <div class="mealType">
                  <h1 class="labelText">Breakfast</h1>
                  {#each selectedDayData.breakfast as mealItem, index}
                    <div in:slide>
                      <IngredientsCard {mealItem} {index} />
                    </div>
                  {/each}
                </div>

                <!-- lunch -->
                <div class="mealType">
                  <h1 class="labelText">Lunch</h1>
                  {#each selectedDayData.lunch as mealItem, index}
                    <div in:slide>
                      <IngredientsCard {mealItem} index={index + 2} />
                    </div>
                  {/each}
                </div>

                <!-- snack -->
                <div class="mealType">
                  <h1 class="labelText">Snack</h1>
                  {#each selectedDayData.snack as mealItem, index}
                    <IngredientsCard {mealItem} {index} />
                  {/each}
                </div>

                <!-- dinner -->
                <div class="mealType">
                  <h1 class="labelText">Dinner</h1>
                  {#each selectedDayData.dinner as mealItem, index}
                    <IngredientsCard {mealItem} index={index + 2} />
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>

        <!-- shopping list -->
        <div>
          <h1 class="text-3xl font-[Roboto] text-[#348da3] mt-6">
            Shopping List
          </h1>
          {#if selectedDayData}
            <ShoppingList {selectedDayData} />
          {:else}
            <p class="font-[Alkatra] mt-1 font-light">
              No Shopping List For The Selected Day.
            </p>
          {/if}
        </div>
      {/if}
    </div>
  </section>
</PrivateLayout>
