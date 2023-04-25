<script>
  import { inview } from "svelte-inview";
  import { animateComponent } from "../../utils/functions/animation";
</script>

<div
  class="max-w-6xl mx-auto px-3 flex flex-col lg:flex-row lg:gap-5 xl:gap-[30px] items-center py-4"
>
  <div
    class="lg:w-[55%] mt-4 relative left-0"
    use:inview
    on:inview_change={(e) => animateComponent(e, "fromLeft")}
  >
    <img src="/media/users.png" alt="featureImage" class="w-full" />
  </div>
  <div
    class="lg:w-[45%] relative right-0"
    use:inview
    on:inview_change={(e) => animateComponent(e, "fromRight")}
  >
    <h1
      class="text-xl font-semibold font-[Roboto] lg:text-4xl xl:text-[40px] mb-4"
    >
      We have more than thousand of worldwide happy customer.
    </h1>

    <div class="font-[Alkatra] flex flex-col gap-2">
      <p>
        Our meal planning application has thousands of happy users who have
        discovered a new level of convenience and control over their diets.
      </p>

      <p>
        With our fully customizable plans, users can set caloric and macro
        goals, choose their preferred foods, and even accommodate restrictions
        and allergies.
      </p>

      <p>
        We take pride in the positive feedback we receive from our users, who
        have reported increased energy, weight loss, and better overall health
        as a result of using our meal planning application.
      </p>
      <p>
        Join our community of happy users today and discover the benefits of
        taking control of your diet!
      </p>
    </div>
  </div>
</div>
