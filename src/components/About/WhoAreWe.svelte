<script>
  import { animateComponent } from "../../utils/functions/animation";
  import { teams } from "../../utils/teams";
  import { inview } from "svelte-inview";
</script>

<section class="max-w-6xl mx-auto px-3 text-center">
  <h1
    use:inview
    on:inview_change={(e) => animateComponent(e, "fromRight")}
    class="mb-3 font-bold relative right-0 text-[#a32389] text-2xl md:text-3xl lg:text-4xl font-[Roboto]"
  >
    Who we are.
  </h1>
  <div
    class="max-w-3xl mx-auto text-left font-[Alkatra] relative left-0"
    use:inview
    on:inview_change={(e) => animateComponent(e, "fromLeft")}
  >
    <p>
      We created Plate Plan with a simple goal in mind, help you create
      healthier eating habits by making it easy and enjoyable to manage your
      diet.
    </p>
    <p class="my-2">
      Our small but mighty team is obsessed with making Plate Plan better and
      we're constantly working on exciting new ways to help you get the most out
      of the product.
    </p>
    <p>
      As an independent, founder-led business, we deeply appreciate all of our
      loyal customers, and we're always open to feedback. If you have questions
      or suggestions, please don't hesitate to reach out!
    </p>
  </div>

  <!-- Team -->
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-3">
    {#each teams as person (person.id)}
      <div
        class="flex flex-col justify-center items-center mb-8 hover:scale-[1.01]"
      >
        <img
          src={person.image}
          alt="personImage"
          class="w-[150px] h-[140px] md:w-[200px] md:h-[200px] rounded"
        />
        <h1 class="font-[Roboto] mt-1 text-xl italic text-[#3d8494]">
          {person.name}
        </h1>
        <p class="text-sm font-[Alkatra] italic uppercase text-[#232b28]">
          {person.job}
        </p>
      </div>
    {/each}
  </div>
</section>
