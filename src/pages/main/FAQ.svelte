<script>
  import { FaqAccordion, UserQuestion } from "../../components";
  import Layout from "../../components/Higher/Layout.svelte";
</script>

<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <div class="w-full relative bg-red-400">
      <!-- bg-image -->
      <img src="/faq.jpg" alt="faqImage" class="w-full object-cover" />

      <!-- frequently asked question content -->
      <div
        class="absolute top-[30vh] lg:top-[60vh] bg-white z-20 w-full min-h-screen"
      >
        <div class="max-w-6xl mx-auto px-3">
          <!-- faq -->
          <h1
            class="font-semibold font-[Merriweather] mt-8 text-xl md:text-2xl lg:text-3xl"
          >
            Frequently Asked Questions
          </h1>

          <!-- accordion -->
          <FaqAccordion />
        </div>

        <!-- users question form -->
        <UserQuestion />
      </div>
    </div>
  </section>
</Layout>
