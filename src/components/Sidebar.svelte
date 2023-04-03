<script>
  import { Link } from "svelte-routing";
</script>

<section class="py-8 flex flex-col items-center justify-between h-full">
  <!-- Links -->
  <ul class="flex items-center flex-col gap-5 text-[16px]">
    <Link to="/" class="link">Welcome</Link>
    <Link to="/recipe" class="link">Recipe</Link>
    <Link to="/about" class="link">About</Link>
    <Link to="/faq" class="link">FAQ</Link>
  </ul>

  <!-- Authentication links -->
  <div class="flex flex-col items-center">
    <Link
      to="/register"
      class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md"
      >Register</Link
    >
    <div class="text-sm mt-3 flex items-center gap-[6px]">
      <p class="text-white">Already a member?</p>
      <Link to="/login" class="link">Sign In</Link>
    </div>
  </div>
</section>
