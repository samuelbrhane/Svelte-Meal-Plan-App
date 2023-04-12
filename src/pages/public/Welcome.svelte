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
  import Loader from "../../components/Loader.svelte";

  let queryParams = new URLSearchParams(window.location.search);
  let code = queryParams.get("code");
  let state = queryParams.get("state");
  let loading;
  if (code && state) loading = true;
</script>

{#if loading}
  <Loader />
{:else}
  <Layout>
    <section class="pt-[80px] lg:pt-[100px] overflow-x-hidden">
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
{/if}
