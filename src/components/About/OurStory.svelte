<script>
  import { inview } from "svelte-inview";
  import { animateComponent } from "../../utils/functions/animation";
</script>

<div class="bg-[#d7d9d9] h-[400px] mt-10 md:mt-20 mb-20 font-[Alkatra] para">
  <div
    class="max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 h-full gap-12 lg:gap-20 xl:gap-24 items-center"
  >
    <div
      class="relative bottom-0"
      use:inview
      on:inview_change={(e) => animateComponent(e, "fromBottom")}
    >
      <h1 class="title">Our Story.</h1>
      <p>
        Our story began with a group of health enthusiasts who were frustrated
        with the lack of options when it came to meal planning apps.
      </p>
      <p>
        We saw a need for a more personalized and user-friendly approach to meal
        planning that would help people stay on track with their health goals
        without sacrificing taste or convenience.
      </p>
      Today, Plate Plan is proud to be one of the leading meal planning apps on the
      market. Our app is designed to be intuitive and easy-to-use, with features
      that cater to individual dietary needs, preferences, and goals.
      <p />
    </div>

    <div
      class="relative h-full right-0"
      use:inview
      on:inview_change={(e) => animateComponent(e, "fromRight")}
    >
      <img
        src="https://images.pexels.com/photos/5638643/pexels-photo-5638643.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="aboutImage"
        class="absolute -top-[50px] h-[320px] md:h-[500px] mb:8 w-full rounded shadow"
      />
    </div>
  </div>
</div>
