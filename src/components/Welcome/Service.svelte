<script>
  import { services } from "../../utils/services";
</script>

<section class="py-8">
  <div class="max-w-6xl mx-auto px-3">
    <h1
      class="text-center font-semibold font-[Roboto] mb-3 text-2xl md:text-3xl lg:text-4xl xl:text-[42px]"
    >
      Build a healthier, happier organization
    </h1>
    <h2 class="text-center font-semibold text-gray-500 font-[Merriweather]">
      Give your employees free access to Plate Plan Pro and unlock the power of
      healthy eating
    </h2>

    <!--services  -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6 md:gap-8 lg:gap-2 xl:gap-6"
    >
      {#each services as service (service.id)}
        <div class="shadow hover:scale-[1.03]">
          <img
            src={service.image}
            alt="serviceImage"
            class="h-[220px] w-full md:w-[400px] rounded bg-red-400"
          />
          <div class="px-3 py-2">
            <h1 class="font-semibold font-[Merriweather] mb-2">
              {service.title}
            </h1>
            <p class="text-sm font-[Alkatra]">{service.content}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
