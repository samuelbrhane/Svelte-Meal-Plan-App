<script>
  import Icon from "@iconify/svelte";
</script>

<main class="bg-[#f4f0f4]">
  <div class="max-w-6xl mx-auto px-3 grid md:grid-cols-2 items-center">
    <div>
      <h1 class="mb-5 text-xl md:text-2xl lg:text-3xl font-[Roboto] font-bold">
        Take Control Of Your Diet
      </h1>
      <p class="font-semibold font-[Alkatra] md:text-lg mb-2">
        Try Eat This Much for yourself, risk-free with our 30-day,
        no-questions-asked refund policy!
      </p>
      <p class="font-[Merriweather] font-semibold hidden lg:inline">
        Only $4.99/month or $49/year if you choose to subscribe.
      </p>
      <div class="flex flex-col gap-3 mt-4">
        <button class="flex px-4 py-2 bg-[#848284c1] w-[320px] gap-3 rounded">
          <h1
            class="text-lg font-bold border-gray-300 border-r-2 pr-2 text-white"
          >
            Get Our Mobile Application
          </h1>
          <Icon
            icon="material-symbols:arrow-right-alt"
            class="text-xl text-blue-200"
          />
        </button>
        <div class="flex gap-3">
          <img src="/app.png" alt="appImage" class="appImage" />
          <img src="/google.png" alt="appImage" class="appImage" />
        </div>
      </div>
    </div>
    <img src="/aboutBg.png" alt="foodImage" class="hidden md:inline" />
  </div>
</main>
