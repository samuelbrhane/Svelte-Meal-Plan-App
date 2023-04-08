<script>
  import { useParams } from "svelte-navigator";
  import { onMount } from "svelte";

  const { id } = useParams();
  import { baseRoute, recipeKeys } from "../../utils/routes/recipeRoute";

  let data;
  console.log("id", id);

  onMount(async () => {
    const randomIndex = Math.floor(Math.random() * recipeKeys.length);
    const response = await fetch(
      `${baseRoute}/${id}?type=public&app_id=${recipeKeys[randomIndex].appId}&app_key=${recipeKeys[randomIndex].appKey}`
    );
    const responseData = await response.json();
    data.set(responseData);
    console.log("data", data);
  });
</script>

<section class="mt-[120px]">Recipe Details {id}</section>
