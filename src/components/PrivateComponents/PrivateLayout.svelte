<script>
  import { PrivateHeader, PrivateSidebar } from "..";
</script>

<section>
  <div class="fixed top-0 left-0 bottom-0 bg-red-400 hidden lg:inline">
    <PrivateSidebar />
  </div>
  <PrivateHeader />
  <main>
    <slot />
  </main>
</section>
