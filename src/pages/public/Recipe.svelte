<script>
  import { RecipeSidebar } from "../../components";
  import Layout from "../../components/Higher/Layout.svelte";
</script>

<!-- max-w-6xl mx-auto px-3  -->
<Layout>
  <section class="pt-[80px] lg:pt-[100px]">
    <h1
      class="font-bold font-[Roboto] text-3xl md:text-4xl text-center mt-5 mb-6"
    >
      Food & Recipe Browser
    </h1>

    <!-- Recipe content -->
    <div class="px-4 flex">
      <RecipeSidebar />
    </div>
  </section>
</Layout>
