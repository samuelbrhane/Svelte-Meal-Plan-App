<script>
  import { Loader, PrivateLayout } from "../../components";
  import authStore from "../../stores/authStore";
  import { onMount } from "svelte";
  import { mainMealRoute } from "../../utils/routes/mealRoutes";
  import { toast } from "@zerodevx/svelte-toast";
  import { errorClasses } from "../../utils/toast/toastCustom";

  let userMeals = [];
  let loading = false;

  // fetch user's meal data
  onMount(async () => {
    loading = true;
    const response = await fetch(`${mainMealRoute}user/${$authStore.userId}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${$authStore.token.access}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      userMeals = data;
    } else {
      toast.push("Failed to fetch meals", { theme: errorClasses });
    }
    loading = false;
  });
</script>

<PrivateLayout>
  <section class="lg:ml-[250px]">
    <div class="px-4 md:px-8 lg:px-12">
      {#if loading}
        <Loader />
      {:else}
        <p>Data</p>
      {/if}
    </div>
  </section>
</PrivateLayout>
