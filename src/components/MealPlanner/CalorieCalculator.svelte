<script>
  import Icon from "@iconify/svelte";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();
  export let showCalculatorModal;
  let selectedGender = "";
  let selectedPlan = "";
  let errorMessage = "";
  let age = "";
  let weight = "";
  let height = "";

  //   calculate the number of calories
  const calculateCalories = () => {
    if (selectedPlan == "") errorMessage = "Please select your plan";
    else if (selectedGender == "") errorMessage = "Please select a gender";
    else {
      let min;
      let max;
      //   average calories for female
      if (selectedGender == "Female") {
        min = 200;
        max = 220;
      } else {
        // average calories for male
        min = 250;
        max = 270;
      }
      let reducedCalories = (min * 10) / 100;
      //   reduce 20%
      if (selectedPlan == "Lose Weight") {
        min = min - reducedCalories;
        max = max - reducedCalories;

        // add 20%
      } else if (selectedPlan == "Build Muscle") {
        min = min + reducedCalories;
        max = max + reducedCalories;
      }

      const calorieNumber =
        Math.floor(Math.random() * (max - min + 1) + min) * 10;
      dispatch("addCalorie", calorieNumber);
      dispatch("closeModal");
      selectedGender = "";
      selectedPlan = "";
      min = 0;
      max = 0;
      age = "";
      weight = "";
      height = "";
    }
  };
</script>

<section
  class={`bg-[#181f1b87] flex items-center justify-center py-12 fixed left-0 right-0 ${
    showCalculatorModal ? "top-0 bottom-0" : "top-[-999px] bottom-[999px]"
  } ease-in-out duration-700`}
>
  <div class="bg-white pt-4 pb-10 px-8 rounded">
    <!-- title and close modal icon -->
    <div class="flex items-center justify-between mb-4">
      <h1 class="font-bold font-[Roboto] text-3xl">Calories Calculator</h1>
      <button on:click={() => dispatch("closeModal")}
        ><Icon icon="material-symbols:close-rounded" /></button
      >
    </div>

    <form
      on:submit|preventDefault={calculateCalories}
      class="flex flex-col gap-4"
    >
      <!-- body plan -->
      <div class="modalCate">
        <p class="w-[100px]">I want to</p>
        <div class="border-gray-300 border-[0.4px] rounded">
          <button
            type="button"
            class={`modalBtn ${
              selectedPlan == "Lose Weight" && "bg-[#347ba2] text-white"
            }`}
            on:click={() => (selectedPlan = "Lose Weight")}>Lose Weight</button
          >
          <button
            type="button"
            class={`modalBtn ${
              selectedPlan == "Maintain" && "bg-[#347ba2] text-white"
            }`}
            on:click={() => (selectedPlan = "Maintain")}>Maintain</button
          >
          <button
            type="button"
            class={`modalBtn ${
              selectedPlan == "Build Muscle" && "bg-[#347ba2] text-white"
            }`}
            on:click={() => (selectedPlan = "Build Muscle")}
            >Build Muscle</button
          >
        </div>
      </div>

      <!-- gender -->
      <div class="modalCate">
        <p class="w-[100px]">I am</p>
        <div class="border-gray-300 border-[0.4px] rounded">
          <button
            type="button"
            class={`modalBtn !w-[180px] ${
              selectedGender == "Male" && "bg-[#347ba2] text-white"
            }`}
            on:click={() => (selectedGender = "Male")}>Male</button
          >
          <button
            type="button"
            class={`modalBtn !w-[180px] ${
              selectedGender == "Female" && "bg-[#347ba2] text-white"
            }`}
            on:click={() => (selectedGender = "Female")}>Female</button
          >
        </div>
      </div>

      <!-- height -->
      <div class="modalCate">
        <p class="w-[100px]">Height</p>
        <div class="flex items-center gap-1">
          <input type="number" class="input" required bind:value={height} />
          <p>cm</p>
        </div>
      </div>

      <!-- weight -->
      <div class="modalCate">
        <p class="w-[100px]">Weight</p>
        <div class="flex items-center gap-1">
          <input type="number" class="input" required bind:value={weight} />
          <p>kgs</p>
        </div>
      </div>

      <!-- age -->
      <div class="modalCate">
        <p class="w-[100px]">Age</p>
        <div class="flex items-center gap-1">
          <input type="number" class="input" required bind:value={age} />
          <p>years</p>
        </div>
      </div>

      <!-- log error -->
      {#if errorMessage}
        <p transition:fade class="text-center text-sm text-[#a2329c]">
          {errorMessage}
        </p>
      {/if}

      <button
        type="submit"
        class="w-full bg-[#24a1a3] mt-3 rounded py-2 text-white font-semibod font-[Alkatra] text-xl"
        >Calculate</button
      >
    </form>
  </div>
</section>
