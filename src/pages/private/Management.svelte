<script>
  import {
    Loader,
    PrivateLayout,
    Report,
    Title,
    UserMealsTable,
  } from "../../components";
  import authStore from "../../stores/authStore";
  import { onMount } from "svelte";
  import { fetchUserMeals } from "../../utils/functions/fetchUserMeals";

  let loading;
  let userMeals = [];
  // let errorMessage;

  // fetch user's meal data
  onMount(() => {
    fetchUserMeals($authStore.userId, $authStore.token.access).then(
      (response) => {
        loading = response.loading;
        userMeals = response.userMeals;
      }
    );
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
        {#if userMeals && userMeals.length == 0}
          <div
            class="flex flex-col text-xl gap-2 font-bold font-[Alkatra] mt-4"
          >
            <p class="text-[#35a1a3]">No Meal Is Created For This Date.</p>
            <p class="text-[#a33589]">
              Please Go To Meal Planner And Create A Meal First.
            </p>
          </div>
        {:else}
          <!-- show user meals -->
          <div>
            <UserMealsTable {userMeals} />
          </div>
        {/if}
      </div>
    </section>
  {/if}
</PrivateLayout>
