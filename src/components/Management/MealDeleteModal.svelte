<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let deleteModalOpened;
</script>

<section
  class={`bg-[#181f1bb2] flex items-center justify-center py-12 fixed left-0 right-0 ${
    deleteModalOpened ? "top-0 bottom-0" : "top-[-999px] bottom-[999px]"
  } ease-in-out duration-700`}
>
  <div class="bg-white py-6 px-8 rounded font-[Alkatra]">
    <h1 class="font-bold font-[Roboto] text-3xl text-center">Are you sure,</h1>
    <h1 class="text-center">you want to delete this meal plan?</h1>
    <div class="flex justify-between items-center mt-3 gap-6">
      <!-- delete meal plan -->
      <button
        on:click={() => dispatch("deleteMeal")}
        class="w-[120px] py-2 bg-[#a234a3] rounded text-white">Yes</button
      >

      <!-- close the modal with out deleting meal plan -->
      <button
        on:click={() => dispatch("closeModal")}
        class="w-[120px] py-2 bg-[#34a39f] rounded text-white">Cancel</button
      >
    </div>
  </div>
</section>
