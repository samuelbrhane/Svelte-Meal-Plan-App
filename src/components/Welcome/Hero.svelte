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
      <h1>Powerful, Fast</h1>
      <h1 class="my-2">Meal Planning To</h1>
      <h1>Level Up Your Business</h1>
    </div>

    <p class="mb-8 lg:mb-3 xl:mb-10 font-light font-[Roboto] italic">
      Eat This Much Pro lets fitness and health professionals expand their
      services and provide even more value to their clients without eating into
      everyone’s busy schedule.
    </p>
    <p class="font-semibold font-[Alkatra] md:text-lg mb-2">
      Try Eat This Much for yourself, risk-free with our 30-day,
      no-questions-asked refund policy!
    </p>
    <p class="font-[Merriweather] font-semibold my-6">
      Only $4.99/month or $49/year if you choose to subscribe.
    </p>
    <button
      class="flex items-center justify-center px-4 py-3 bg-[#848284c1] w-[320px] gap-3 rounded"
    >
      <h1
        class="text-[16px] font-bold border-gray-300 border-r-2 pr-2 whitespace-nowrap text-white"
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
    src="./heroImg1.png"
    alt="heroImage"
    class="hidden md:inline md:mt-[-80px] lg:mt-0 w-full"
  />
</section>
