<script>
  import { Features, Hero, Outcome, Service } from "../../components";
  import Layout from "../../components/Higher/Layout.svelte";
</script>

<!-- max-w-6xl mx-auto px-3 -->
<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <Hero />
    <Service />
    <Outcome />
    <Features />
  </section>
</Layout>
