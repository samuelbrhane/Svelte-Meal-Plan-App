<script>
  import Icon from "@iconify/svelte";
</script>

<main class="bg-[#f4f0f4] py-10">
  <div class="max-w-6xl mx-auto px-3 grid md:grid-cols-2 items-center">
    <div>
      <h1
        class="mb-5 text-xl md:text-2xl text-[#a32389] lg:text-3xl font-[Roboto] font-bold"
      >
        Take Control Of Your Diet
      </h1>
      <p class="font-semibold font-[Alkatra] md:text-lg mb-2">
        Give Plate Plan a try, without any risk with our 30-day, hassle-free
        refund policy!
      </p>
      <p class="font-[Alkatra] font-semibold hidden lg:inline">
        Only $9.99/month or $99/year if you choose to subscribe.
      </p>
      <div class="flex flex-col gap-3 mt-4">
        <button class="flex px-4 py-2 bg-[#4d4c4dc1] w-[320px] gap-3 rounded">
          <h1
            class="text-lg font-bold border-gray-300 border-r-2 pr-2 text-white font-[Alkatra]"
          >
            Get Our Mobile Application
          </h1>
          <Icon
            icon="material-symbols:arrow-right-alt"
            class="text-2xl text-blue-200"
          />
        </button>
        <div class="flex gap-3">
          <img src="/media/app.png" alt="appImage" class="appImage" />
          <img src="/media/google.png" alt="appImage" class="appImage" />
        </div>
      </div>
    </div>
    <img src="/media/ad.png" alt="foodImage" class="hidden md:inline" />
  </div>
</main>
