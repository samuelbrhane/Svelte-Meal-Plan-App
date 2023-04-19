<script>
  import { PrivateHeader, PrivateSidebar } from "..";
</script>

<section class="min-h-screen">
  <div class="fixed top-0 left-0 bottom-0 h-full hidden lg:inline">
    <PrivateSidebar />
  </div>
  <PrivateHeader />
  <main>
    <slot />
  </main>
</section>
