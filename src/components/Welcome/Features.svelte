<script>
  import Icon from "@iconify/svelte";
  import { features } from "../../utils/features";
</script>

<section class="bg-[#d7d9d9]">
  <div class="max-w-6xl mx-auto px-3 py-6">
    <h1
      class="text-center text-2xl md:text-3xl lg:text-4xl font-bold font-[Roboto] mb-6"
    >
      Plate Plan Features
    </h1>

    <!-- features -->
    <div class="grid md:grid-cols-2 gap-4 lg:gap-8 xl:gap-12">
      {#each features as feature (feature.id)}
        <div class="mb-4 flex gap-4 items-center">
          <div>
            <Icon
              icon={feature.icon}
              class={`text-[60px] ${feature.background} hover:scale-110 cursor-pointer text-white  px-4 w-[80px] h-[80px] rounded-3xl`}
            />
          </div>

          <div>
            <h1
              class="text-lg lg:text-xl font-semibold font-[Merriweather] mb-1"
            >
              {feature.title}
            </h1>
            <p class="text-gray-700 font-[Alkatra]">
              {feature.content}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
