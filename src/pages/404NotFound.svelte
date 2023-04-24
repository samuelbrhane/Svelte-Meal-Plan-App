<script>
  import { Link } from "svelte-navigator";
</script>

<section
  class="flex font-[Alkatra] flex-col items-center justify-center min-h-screen"
>
  <h1 class="text-[80px] font-bold font-[Roboto] text-[#9631a6]">Oops!</h1>
  <h2 class="text-3xl my-2 text-[#3156a6]">404 - Page Not Found</h2>
  <p class="text-xl">The page you are looking for might have been removed</p>
  <p class="text-xl">had it's name changed or is temporarily unavailable.</p>
  <Link to="/" class="bg-[#2385a8] px-12 py-2 rounded-xl mt-4 text-white "
    >Go To Homepage</Link
  >
</section>
