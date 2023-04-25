<script>
  import { inview } from "svelte-inview";
  import { animateComponent } from "../../utils/functions/animation";
</script>

<div class="bg-[#d7d9d9] min-h-[400px] md:mt-20 md:mb-28 font-[Alkatra] para">
  <div
    class="max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 h-full gap-12 lg:gap-20 xl:gap-24 items-center min-h-[400px]"
  >
    <div
      class="relative h-full left-0"
      use:inview
      on:inview_change={(e) => animateComponent(e, "fromLeft")}
    >
      <img
        src="https://images.pexels.com/photos/8518667/pexels-photo-8518667.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="aboutImage"
        class="absolute -top-[50px] h-[320px] md:h-[500px] mb:8 w-full rounded shadow"
      />
    </div>
    <div
      class="pt-[250px] md:pt-0 pb-4 h-full flex flex-col items-center justify-center"
    >
      <h1
        class="title relative right-0"
        use:inview
        on:inview_change={(e) => animateComponent(e, "fromRight")}
      >
        Why we do it.
      </h1>
      <p>
        Our app is designed to simplify the process by providing personalized
        meal plans that are tailored to meet individual dietary requirements and
        preferences.
      </p>
      <p>
        Our mission is to make meal planning effortless, fun and enjoyable,
        while encouraging our users to take control of their health and
        wellbeing. With Plate Plan, you can save time, reduce food waste and
        grocery costs, and feel confident that you are providing your body with
        the nourishment it needs.
      </p>
      We believe that healthy eating is not a diet, but a lifestyle, and we are committed
      to helping our users cultivate healthy habits that will last a lifetime.
      <p />
    </div>
  </div>
</div>
