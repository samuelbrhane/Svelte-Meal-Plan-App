<script>
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { Link } from "svelte-navigator";
  export let relatedRecipe;

  let scrollPosition = 0;
  let scrollableWidth = 0;
  let scrollableContainer;

  //   scroll left
  const scrollLeft = () => {
    if (scrollPosition > 0) {
      scrollPosition -= scrollableContainer.clientWidth / 2;
      scrollableContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  //   scroll right
  const scrollRight = () => {
    if (scrollPosition < scrollableWidth - scrollableContainer.clientWidth) {
      scrollPosition += scrollableContainer.clientWidth / 2;
      scrollableContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  onMount(() => {
    scrollableWidth = scrollableContainer.scrollWidth;
  });
</script>

<section>
  <div class="scrollable-container" bind:this={scrollableContainer}>
    {#each relatedRecipe.hits.slice(1) as item}
      <!-- related recipes -->
      <Link
        to={`/recipeDetail/${item.recipe.uri.split("_")[1]}`}
        class="overflow-hidden scrollItem min-w-[200px] max-w-[200px] h-[220px] bg-white border-[#1d99b9] border-[0.5px] mr-[8px] rounded p-3"
      >
        <img
          src={item.recipe.image}
          alt="foodImage"
          class="w-full h-[140px] rounded-md"
        />
        <p class="text-sm font-[Alkatra] text-center mt-2">
          {item.recipe.label}
        </p>
      </Link>
    {/each}
  </div>

  <!-- scroll left and right buttons -->
  <div class="flex justify-center items-center mt-2 gap-4">
    <button on:click={scrollLeft} class="scrollBtn"
      ><Icon icon="material-symbols:chevron-left" /></button
    >
    <button on:click={scrollRight} class="scrollBtn"
      ><Icon icon="material-symbols:chevron-right" /></button
    >
  </div>
</section>
