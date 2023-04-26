<script>
  import { Link } from "svelte-navigator";
  import Icon from "@iconify/svelte";
  import dietAllergiesStore from "../../stores/dietAllergiesStore";
  import { allergies } from "../../utils/allergies";
  let allergiesArray = [];

  //  handle allergies store
  const handleAllergies = (type) => {
    if (allergiesArray.includes(type)) {
      let index = allergiesArray.indexOf(type);

      //   remove allergy if it exists
      allergiesArray.splice(index, 1);
    } else {
      //  add allergy it not exists
      allergiesArray.push(type);
    }
    dietAllergiesStore.update((dietStore) => {
      return { ...dietStore, allergies: allergiesArray };
    });
  };
</script>

<section class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <!-- meal image -->
  <div
    class="bg-[#f5f0f3] lg:flex flex-col py-4 justify-center gap-8 items-center hidden"
  >
    <img src="/media/create2.png" alt="foodImage" class="h-[300px]" />
    <img src="/media/create1.png" alt="foodImage" class="h-[300px]" />
  </div>
  <div
    class="flex flex-col items-center py-8 lg:py-4 2xl:py-12 bg-[#ecf4ed] font-[Alkatra] relative"
  >
    <!-- back -->
    <Link
      to="/diet-type"
      class="absolute top-4 left-3 flex items-center gap-1 hover:scale-105 hover:text-[#3467a5]"
    >
      <Icon icon="ic:baseline-arrow-back" class="text-lg" />
      Back
    </Link>
    <h1
      class="text-2xl 2xl:text-4xl font-bold text-[#7db9db] md:text-3xl uppercase mt-4"
    >
      Plate plan
    </h1>

    <img
      src="/media/title.png"
      alt="Logo"
      class="w-12 h-12 2xl:w-14 2xl:h-14 lg:hidden 2xl:inline"
    />

    <h1
      class="text-center font-semibold text-2xl 2xl:text-4xl mt-6 mb-3 font-[Alkatra]"
    >
      Any Allergies?
    </h1>

    <!-- list of diet types -->
    {#each allergies as item (item.id)}
      <button
        class={` min-w-[350px] mb-3 py-2 rounded flex items-center justify-between px-4 ${
          $dietAllergiesStore.allergies.includes(item.title)
            ? "bg-[#5a8012] text-white"
            : "bg-[#dbdbd9]"
        }`}
        on:click={() => handleAllergies(item.title)}
      >
        <span class="text-lg">{item.title}</span>
      </button>
    {/each}

    <!-- link to register page -->
    <Link
      to="/register"
      class="w-[350px] bg-[#258ebb] text-white text-center hover:scale-[1.01] py-2 rounded"
      >Continue</Link
    >
  </div>
</section>
