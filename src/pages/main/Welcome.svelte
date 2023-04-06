<script>
  import {
    Features,
    Footer,
    Hero,
    Outcome,
    Pricing,
    Service,
    Testimonial,
    Users,
  } from "../../components";
  import Layout from "../../components/Higher/Layout.svelte";
</script>

<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <Hero />
    <Service />
    <Outcome />
    <Features />
    <Users />
    <Pricing />
    <Testimonial />
    <Footer />
  </section>
</Layout>
