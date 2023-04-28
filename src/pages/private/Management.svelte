<script>
  import {
    Loader,
    Meals,
    PrivateLayout,
    Title,
    UpdatePlan,
    UserMealsTable,
  } from "../../components";
  import authStore from "../../stores/authStore";
  import { onMount } from "svelte";
  import { fetchUserMeals } from "../../utils/functions/fetchUserMeals";
  import { searchRecipe } from "../../stores/recipeStore";
  import userMealStore from "../../stores/userMealStore";
  import { dietMeals } from "../../utils/functions/dietMeals";

  let loading = true;
  // let errorMessage;

  // fetch user's meal and recipe
  onMount(() => {
    fetchUserMeals($authStore.userId, $authStore.token.access).then(
      (response) => {
        loading = response.loading;
        $userMealStore.userMeals = response.userMeals;
      }
    );

    // get recommended diets
    let searchWord = dietMeals($authStore.dietType);

    searchRecipe(searchWord);
  });
</script>

<PrivateLayout>
  {#if loading}
    <Loader />
  {:else}
    <section class="lg:ml-[250px]">
      <div class="px-4 md:px-12 lg:px-20 py-4">
        <!-- title -->
        <Title title="Management" subtitle="Manage your meal plan" />

        <!-- check user meal length -->
        {#if $userMealStore.userMeals.length == 0}
          <div
            class="flex flex-col text-xl gap-2 font-bold font-[Alkatra] mt-4"
          >
            <p class="text-[#35a1a3]">
              No Meal Plan Is Created At This Moment.
            </p>
            <p class="text-[#a33589]">
              Please Go To Meal Planner And Create A Meal First.
            </p>
          </div>
        {:else}
          <!-- show user meals -->
          <div>
            <UserMealsTable />
          </div>

          <!-- update meals -->
          <div
            class="flex flex-col xl:flex-row mt-4 py-3 gap-4 md:gap-8 lg:gap-12 xl:gap-16 border-t-2 border-[#86116d] border-dashed"
          >
            <!-- meals -->
            <div class="xl:w-[65%]">
              <Meals page="Management" />
            </div>

            <!-- update meal plan cart -->
            <div class="xl:w-[35%]">
              <UpdatePlan />
            </div>
          </div>
        {/if}
      </div>
    </section>
  {/if}
</PrivateLayout>
