<script>
  import Icon from "@iconify/svelte";
</script>

<section
  class="bg-gradient-to-tr rounded-br-[100px] md:rounded-br-[150px] lg:rounded-br-[250px] via-[#e3e2e0] from-[#d6d7d4] to-[#92dce6] grid lg:grid-cols-2 md:gap-0 gap-12 lg:gap-20 min-h-[calc(100vh-100px)]"
>
  <!-- Hero text -->
  <div
    class="pl-3 md:pl-[40px] lg:pl-[20px] xl:pl-[100px] 2xl:pl-[180px] py-10 xl:py-20"
  >
    <div
      class="mb-8 lg:mb-3 xl:mb-10 text-3xl md:text-4xl lg:text-3xl xl:text-[50px] font-semibold font-[Roboto]"
    >
      <h1 class="text-[#a32389]">Easy, Fast Meal</h1>
      <h1 class="my-4 text-[#a32389]">Planning To Improve</h1>
      <h1 class="text-[#a32389]">Your Lifestyle</h1>
    </div>

    <p class="mb-8 lg:mb-3 xl:mb-10 font-light font-[Roboto] italic">
      With Plate Plan, fitness and health professionals can provide more
      services and increase their value to their clients without wasting too
      much time from everyone&#39;s busy schedule
    </p>
    <p class="font-semibold font-[Alkatra] md:text-lg mb-2 text-[#a32389]">
      Give Plate Plan a try, without any risk with our 30-day, hassle-free
      refund policy!
    </p>
    <p class="font-[Alkatra] font-semibold my-6 text-[#6923a3]">
      Only $9.99/month or $99/year if you choose to subscribe.
    </p>
    <button
      class="flex items-center justify-center px-4 py-3 bg-[#848284c1] w-[320px] gap-3 rounded"
    >
      <h1
        class="text-[16px] font-bold border-gray-300 border-r-2 pr-2 whitespace-nowrap text-white font-[Alkatra]"
      >
        Try the 1 month free trail now
      </h1>
      <Icon
        icon="material-symbols:arrow-right-alt"
        class="text-xl text-blue-200"
      />
    </button>
  </div>

  <!-- Hero image -->
  <img
    src="/media/heroImg1.png"
    alt="heroImage"
    class="hidden md:inline md:mt-[-80px] lg:mt-0 w-full"
  />
</section>
