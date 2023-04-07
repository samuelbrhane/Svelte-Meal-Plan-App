<script>
  import { howItWorks } from "../../utils/howItWorks";
</script>

<section
  class="z-20 max-w-6xl mx-auto bg-[#0b4862] mt-10 text-white py-4 px-3 md:py-8 md:px-12 my-12 rounded-[80px]"
>
  <h1
    class="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-[Roboto] mb-4"
  >
    How It Works
  </h1>

  <!-- Contents -->
  {#each howItWorks as item (item.id)}
    <div class="flex gap-4 md:gap-8 mb-4">
      <div>
        <p
          class="rounded-full h-[50px] w-[50px] flex items-center justify-center bg-white text-2xl font-bold text-[#2a234a]"
        >
          {item.id}
        </p>
      </div>

      <div>
        <p class="font-bold text-2xl font-[Merriweather] mb-2">
          {item.title}
        </p>
        <p class="font-[Alkatra]">
          {item.content}
        </p>
      </div>
    </div>
  {/each}
</section>
