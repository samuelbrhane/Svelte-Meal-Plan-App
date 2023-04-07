<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let recipeData;
  export let dataPerPage;
  export let currentPage;
  let pages = [];

  for (let i = 1; i <= Math.ceil(recipeData.length / dataPerPage); i++) {
    pages.push(i);
  }
</script>

<div class="flex items-center justify-center gap-4 py-2">
  {#each pages as page}
    <button
      on:click={() => dispatch("changePage", page)}
      class={`w-8 h-8 rounded-full bg-[#2496b6] flex items-center justify-center text-white font-[Roboto] hover:scale-[1.03] ${
        currentPage === page && "!bg-[#123e74]"
      }`}>{page}</button
    >
  {/each}
</div>
