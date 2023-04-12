<script>
  import Icon from "@iconify/svelte";
  import { outcomes } from "../../utils/outcomes";
</script>

<section class="my-4">
  <div
    class="max-w-6xl mx-auto px-3 grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center"
  >
    <img
      src="/media/outcome1.jpeg"
      alt="outcomeImage"
      class="w-full rounded-md max-h-[500px]"
    />

    <!-- outcomes -->
    <div class="mt-6 lg:mt-0">
      <h1
        class="text-3xl lg:text-4xl xl:text-[50px] font-bold font-[Roboto] mb-3 lg:mb-6"
      >
        Life changing Outcomes
      </h1>

      {#each outcomes as outcome (outcome.id)}
        <div class="flex gap-4 lg:gap-6 xl:gap-8 mb-3 lg:mb-1">
          <Icon
            icon={outcome.icon}
            class="text-[120px] hover:scale-110 cursor-pointer text-[#5baddc]"
          />
          <div>
            <h1 class="text-xl font-semibold font-[Merriweather] mb-1">
              {outcome.title}
            </h1>
            <p class="text-gray-700 font-[Alkatra]">
              {outcome.content}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
