<script>
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
        <div
          class="bg-[#d7d9d9] h-[400px] mt-10 md:mt-20 mb-20 font-[Alkatra] para"
        >
          <div
            class="max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 h-full gap-12 lg:gap-20 xl:gap-24 items-center"
          >
            <div class="">
              <h1 class="title">Why we do it.</h1>
              <p>
                Our physical and emotional health is directly tied to what we
                eat, and the best way to ensure we are getting the highest
                quality food is to prepare it at home.
              </p>
              <p>
                Without a system to organize recipes, plan menus, and compile
                shopping lists, our kitchens will lack the ingredients we need
                to prepare our meals.
              </p>
              Our hope is that Plan to Eat will equip you to prepare delicious, wholesome
              food at home that nourishes both body and soul.
              <p />
            </div>

            <div class="relative h-full">
              <img
                src="/about1.jpeg"
                alt="aboutImage"
                class="absolute -top-[50px] h-[320px] md:h-[500px] mb:8 w-full rounded shadow"
              />
            </div>
          </div>
        </div>

        <!-- Why we do it -->
        <div class="font-[Alkatra] para mb-10 bg-green-400]">
          <div class="max-w-2xl mx-auto px-3 md:py-20 pb-10 pt-[180px]">
            <h1 class="text-center title">
              We make your meal planning services easy…
            </h1>
            <p>
              Trainers, coaches, and nutrition experts all understand the
              importance of diet when it comes to their clients hitting fitness
              and health goals.
            </p>
            <p>
              With Eat This Much, you can create nutritious meal plans in
              minutes. No more choosing foods one at a time or juggling messy
              spreadsheets.
            </p>
            <p>
              You have the ability to customize each plan to individual needs of
              your clients. And you can give them direct access to our app to
              select foods, see nutrition info, and access shopping lists.
            </p>
          </div>
        </div>

        <div
          class="bg-[#d7d9d9] min-h-[400px] mt-10 md:mt-20 mb-20 font-[Alkatra] para"
        >
          <div
            class="max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 h-full gap-12 lg:gap-20 xl:gap-24 items-center min-h-[400px]"
          >
            <div class="relative h-full">
              <img
                src="/about1.jpeg"
                alt="aboutImage"
                class="absolute -top-[50px] h-[320px] md:h-[500px] mb:8 w-full rounded shadow"
              />
            </div>
            <div
              class="pt-[250px] md:pt-0 pb-4 h-full flex flex-col items-center justify-center"
            >
              <h1 class="title">Why we do it.</h1>
              <p>
                Our physical and emotional health is directly tied to what we
                eat, and the best way to ensure we are getting the highest
                quality food is to prepare it at home.
              </p>
              <p>
                Without a system to organize recipes, plan menus, and compile
                shopping lists, our kitchens will lack the ingredients we need
                to prepare our meals.
              </p>
              Our hope is that Plan to Eat will equip you to prepare delicious, wholesome
              food at home that nourishes both body and soul.
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</Layout>
