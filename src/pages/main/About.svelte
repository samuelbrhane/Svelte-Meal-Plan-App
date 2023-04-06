<script>
  import {
    CreateAd,
    HowItWorks,
    OurService,
    OurStory,
    WhoAreWe,
    WhyWeDo,
  } from "../../components";
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

        <!-- how it works -->
        <HowItWorks />

        <!-- Why people love plate plan -->
        <div class="max-w-6xl mx-auto px-3 mb-8 text-center">
          <h1
            class="mb-3 font-bold text-xl md:text-2xl lg:text-3xl font-[Roboto]"
          >
            Why people love Plate Plan
          </h1>
          <p class="mb-6 font-[Merriweather] text-light text-gray-500">
            If they love it, they'll actually use it.
          </p>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12 xl:gap-20"
          >
            <!-- save time -->
            <div class="text-center">
              <h1 class="font-bold text-xl font-[Roboto] ld:text-2xl mb-1">
                It saves them time
              </h1>
              <p class="text-sm font-[Alkatra]">
                From shopping, to cooking, to deciding 'whats for dinner', Plate
                Plan is a common sense way to save time and make life easier.
                Ask us how.
              </p>
            </div>

            <!-- It's fun, then healthy -->
            <div class="text-center">
              <h1 class="font-bold text-xl font-[Roboto] ld:text-2xl mb-1">
                It's fun, then healthy
              </h1>
              <p class="text-sm font-[Alkatra]">
                A non-clinical, personalized, ease and experience-focused tool,
                Plate Plan makes healthy eating the path of least resistance.
              </p>
            </div>

            <!--  -->
            <div class="text-center">
              <h1 class="font-bold text-xl font-[Roboto] ld:text-2xl mb-1">
                It saves them money
              </h1>
              <p class="text-sm font-[Alkatra]">
                Plate Plan's recipes and algorithms work in tandem to
                efficiently create meal plans that reduce food waste and keep
                grocery bills as low as you want them.
              </p>
            </div>
          </div>
        </div>

        <!-- Who Are We -->
        <WhoAreWe />

        <!-- Create account -->
        <CreateAd />
      </div>
    </div>
  </section>
</Layout>
