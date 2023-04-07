<script>
  import { howItWorks } from "../../utils/howItWorks";
</script>

<section
  class="z-20 max-w-6xl mx-auto bg-[#3c2e3d] text-white py-4 px-3 md:py-8 md:px-12 lg:px-20 xl:px-40 my-12 lg:rounded-[40px] rounded-[20px]"
>
  <h1
    class="text-center text-2xl lg:text-3xl xl:text-4xl font-bold font-[Roboto] mb-4"
  >
    How It Works
  </h1>

  <!-- Contents -->
  {#each howItWorks as item (item.id)}
    <div class="flex gap-3 md:gap-8 mb-4">
      <div>
        <p
          class="rounded-full h-[40px] w-[40px] flex items-center justify-center bg-white text-lg md:text-xl xl:text-2xl font-bold text-[#2a234a]"
        >
          {item.id}
        </p>
      </div>

      <div>
        <p class="font-bold text-xl md:text-2xl font-[Merriweather] mb-2">
          {item.title}
        </p>
        <p class="font-[Alkatra] text-sm">
          {item.content}
        </p>
      </div>
    </div>
  {/each}
</section>
