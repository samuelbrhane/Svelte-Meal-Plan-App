<script>
  import { Link } from "svelte-navigator";
  import Icon from "@iconify/svelte";
  import { dietTypes } from "../../utils/dietTypes";
  import dietAllergiesStore from "../../stores/dietAllergiesStore";
</script>

<section class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <div
    class="flex flex-col items-center py-8 lg:py-4 2xl:py-12 bg-[#ecf4ed] font-[Alkatra] relative"
  >
    <!-- back to homepage -->
    <Link
      to="/"
      class="absolute top-4 left-3 flex items-center gap-1 hover:scale-105 hover:text-[#3467a5]"
    >
      <Icon icon="ic:baseline-arrow-back" class="text-lg" />
      Back to homepage
    </Link>
    <h1
      class="text-2xl 2xl:text-4xl font-bold text-[#7db9db] md:text-3xl uppercase mt-12"
    >
      Plate plan
    </h1>

    <img
      src="/media/title.png"
      alt="Logo"
      class="w-12 h-12 2xl:w-14 2xl:h-14 lg:hidden 2xl:inline"
    />

    <h1
      class="text-center text-2xl 2xl:text-4xl font-semibold mt-6 mb-3 font-[Alkatra]"
    >
      Pick Your Diet
    </h1>

    <!-- list of diet types -->
    {#each dietTypes as item (item.id)}
      <button
        on:click={() => ($dietAllergiesStore.dietType = item.title)}
        class={` min-w-[350px] mb-3 py-2 rounded flex items-center justify-between px-4 ${
          $dietAllergiesStore.dietType == item.title
            ? "bg-[#5a8012] text-white"
            : "bg-[#dbdbd9]"
        }`}
      >
        <span class="text-lg">{item.title}</span>
        <span class="text-sm text-[#e47adf]">{item.subtitle}</span>
      </button>
    {/each}

    <!-- link to allergies page -->
    <Link
      to="/allergies"
      class="w-[350px] bg-[#258ebb] text-white text-center hover:scale-[1.01] py-2 rounded"
      >Continue</Link
    >
  </div>

  <!-- meal image -->
  <div class="bg-[#f5f0f3] lg:flex py-4 justify-center items-center hidden">
    <img src="/media/create1.png" alt="foodImage" />
  </div>
</section>
