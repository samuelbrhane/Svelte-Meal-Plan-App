<script>
  import { Link } from "svelte-navigator";

  // set active page
  const activeRoute = (route) => {
    return location.pathname === route;
  };
</script>

<section class="py-8 flex flex-col items-center justify-between h-full z-40">
  <!-- Links -->
  <ul class="flex items-center flex-col gap-5 text-[16px]">
    <a href="/" class:selected={activeRoute("/")} class="link">Welcome</a>
    <a href="/recipe" class:selected={activeRoute("/recipe")} class="link"
      >Recipe</a
    >
    <a href="/about" class:selected={activeRoute("/about")} class="link"
      >About</a
    >
    <a href="/faq" class:selected={activeRoute("/faq")} class="link">FAQ</a>
  </ul>

  <!-- Authentication links -->
  <div class="flex flex-col items-center">
    <Link
      to="/register"
      class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md hover:scale-[1.06]"
      >Register</Link
    >
    <div class="text-sm mt-3 flex items-center gap-[6px]">
      <p class="text-white">Already a member?</p>
      <Link to="/login" class="link mt-1">Sign In</Link>
    </div>
  </div>
</section>
