<script>
  import Icon from "@iconify/svelte";
</script>

<section class="relative text-black py-3">
  <!-- background image -->
  <img
    src="/media/add.jpeg"
    alt="createBg"
    class="w-full h-[48vh] md:h-[30vh] lg:h-[40vh] object-center"
  />
  <div class="w-full h-full absolute left-0 top-0 bg-[#eae8e8cd] flex py-6">
    <div
      class="max-w-6xl mx-auto px-3 grid grid-cols-1 lg:grid-cols-2 gap-3 items-center lg:gap-8 xl:gap-12"
    >
      <!-- create account -->
      <div class="">
        <h1
          class="text-xl font-bold mb-3 md:text-2xl xl:text-3xl font-[Merriweather]"
        >
          Create Your Account Today
        </h1>
        <p class="font-semibold font-[Alkatra] md:text-lg mb-2">
          Try Eat This Much for yourself, risk-free with our 30-day,
          no-questions-asked refund policy!
        </p>
        <p class="font-[Merriweather] font-semibold">
          Only $4.99/month or $49/year if you choose to subscribe.
        </p>
      </div>

      <!-- mobile application -->
      <div class="flex flex-col items-center gap-3">
        <button
          class="flex items-center justify-center px-4 py-2 bg-[#848284c1] w-[320px] gap-3 rounded"
        >
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
        <div class="flex items-center gap-3 justify-center">
          <img src="/media/app.png" alt="appImage" class="appImage" />
          <img src="/media/google.png" alt="appImage" class="appImage" />
        </div>
      </div>
    </div>
  </div>
</section>
