<script>
  import OurService from "../../components/About/OurService.svelte";
  import OurStory from "../../components/About/OurStory.svelte";
  import WhyWeDo from "../../components/About/WhyWeDo.svelte";
  import Layout from "../../components/Higher/Layout.svelte";
</script>

<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <div class="w-full relative">
      <!-- bg-image -->
      <img src="/meeting1.jpeg" alt="faqImage" class="w-full object-cover" />

      <!-- Quote -->
      <div
        class="flex justify-center w-full top-[20vh] h-[20vh] md:h-[16vh] lg:top-[50vh] lg:h-[28vh] absolute left-0 z-20"
      >
        <div
          class="bg-[#d7d9d9] text-black max-w-6xl mx-auto font-bold h-full font-[Merriweather] py-8 px-8 md:py-10 md:px-20 lg:px-30 xl:px-40 text-xl md:text-3xl xl:text-4xl"
        >
          <h1 class="mb-4">It's not just about cooking...</h1>
          <h1 class="text-center">it's about connection.</h1>
        </div>
      </div>

      <div
        class="w-full bg-white text-black top-[30vh] lg:top-[64vh] absolute left-0"
      >
        <!-- Intro Text -->
        <div
          class="mx-auto px-3 pt-[12vh] lg:pt-[18vh] text-center max-w-3xl pb-8"
        >
          <h1 class="lg:text-3xl text-2xl font-[Roboto] mb-3 font-semibold">
            We simplify the meal-planning process.
          </h1>
          <p class="font-[Alkatra] md:text-lg">
            Our tools equip households to eat better food, eat together, save
            money at the grocery store, and have a less stressful cooking
            experience.
          </p>
        </div>

        <!-- About Content -->
        <!-- Our Story -->
        <OurStory />

        <!-- service -->
        <OurService />

        <!-- Why we do it -->
        <WhyWeDo />

        <div />
      </div>
    </div>
  </section>
</Layout>
