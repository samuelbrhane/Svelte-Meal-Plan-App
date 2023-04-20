<script>
  import { PrivateLayout, Report, Title } from "../../components";
  import { DateInput } from "date-picker-svelte";
  import authStore from "../../stores/authStore";
  import { fetchSingleMeal } from "../../utils/functions/fetchSingleMeal";
  let selectedDate = new Date();

  let formattedDate;

  let loading;
  let userMeal;
  let errorMessage;

  $: {
    let day = selectedDate.getDate().toString().padStart(2, "0");
    let month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    let year = selectedDate.getFullYear().toString().slice(-2);
    formattedDate = `${day}-${month}-${year}`;
    fetchSingleMeal(formattedDate, $authStore.token.access).then((response) => {
      loading = response.loading;
      userMeal = response.userMeal;
      errorMessage = response.errorMessage;
    });
  }
</script>

<PrivateLayout>
  <section class="lg:ml-[250px]">
    <div class="px-4 md:px-12 lg:px-20">
      <!-- title and date picker -->
      <div class="flex justify-between pt-4">
        <Title title="Management" subtitle="Manage your meal plan" />
        <!-- data picker  -->
        <div>
          <h1 class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]">
            Select The Date
          </h1>

          <!-- week start -->
          <div
            class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a]"
          >
            <h1 class="text-lg">Selected Date:</h1>
            <DateInput bind:value={selectedDate} />
          </div>
        </div>
      </div>

      <!--  -->
      {#if errorMessage}
        <div class="flex flex-col text-xl gap-2 font-bold font-[Alkatra] mt-4">
          <p class="text-[#35a1a3]">{errorMessage}</p>
          <p class="text-[#a33589]">
            Please Go To Meal Planner And Create A Meal First.
          </p>
        </div>
      {:else}
        <p>update meal</p>
      {/if}
    </div>
  </section></PrivateLayout
>
