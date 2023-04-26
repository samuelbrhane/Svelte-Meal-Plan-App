<script>
  import { pricing } from "../../utils/pricing";
  import Icon from "@iconify/svelte";
</script>

<section id="Pricing" class="px-4 relative lg:px-20 xl:px-30 py-12">
  <h1
    class="text-center relative top-0 font-semibold text-[#a32389] text-3xl lg:text-4xl xl:text-[42px] font-[Roboto]"
  >
    Pricing Plan
  </h1>
  <h1 class="text-center font-bold text-xl mt-2 mb-6 font-[Merriweather]">
    Choose your pricing policy
  </h1>

  <!-- pricing card -->
  <div class="grid grid-cols md:grid-cols-2 xl:grid-cols-3 md:gap-4 lg:gap-8">
    {#each pricing as item (item.id)}
      <div class="flex relative justify-center mb-4 md:px-4 xl:px-8">
        <div
          class="flex flex-col justify-between shadow-sm h-[500px] w-full hover:scale-[1.01] py-10 px-6 rounded-lg"
        >
          <div class="">
            <h1 class="mb-3 font-bold text-xl md:text-2xl font-[Roboto]">
              {item.name}
            </h1>

            <!-- price plan features -->
            {#each item.features as feature}
              <div
                class="flex items-center gap-1 mb-3 font-[Alkatra] text-gray-500"
              >
                <Icon icon="mdi:hand-pointing-right" class="footerIcon" />
                <p>{feature}</p>
              </div>
            {/each}
          </div>

          <!-- Price and create account -->
          <div class="flex flex-col items-center">
            <p class="text-3xl font-semibold">
              {#if item.price == 0}
                Free
              {:else}
                ${item.price} <span class="font-light text-lg">/Month</span>
              {/if}
            </p>
            <button
              class="bg-[#427fa3] font-bold text-white px-12 py-3 rounded-md hover:scale-[1.06] mt-3"
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
