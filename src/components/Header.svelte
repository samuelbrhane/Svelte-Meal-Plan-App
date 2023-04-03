<script>
  import { Link } from "svelte-routing";
  import Icon from "@iconify/svelte";
</script>

<header class="w-full fixed left-0 top-0 h-[80px] lg:h-[100px] bg-white shadow">
  <nav class="max-w-6xl mx-auto h-full flex justify-between items-center px-3">
    <!-- Logo -->
    <Link to="/" class="flex items-center gap-2">
      <img src="/title.png" alt="Logo" class="w-10 h-10 md:w-12 md:h-12" />
      <h1
        class="text-xl sm:text-2xl font-bold text-[#427fa3c1] md:text-3xl uppercase"
      >
        Plate plan
      </h1>
    </Link>

    <!-- Links -->
    <ul class="lg:flex items-center lg:gap-8 text-[16px] hidden">
      <Link to="/" class="link">Welcome</Link>
      <Link to="/recipe" class="link">Recipe</Link>
      <Link to="/about" class="link">About</Link>
      <Link to="/faq" class="link">FAQ</Link>
    </ul>

    <!-- Authentication links -->
    <div class="lg:flex flex-col items-center hidden">
      <Link
        to="/register"
        class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md"
        >Register</Link
      >
      <div class="text-sm mt-1 flex items-center gap-[6px]">
        <p>Already a member?</p>
        <Link to="/login" class="link">Sign In</Link>
      </div>
    </div>

    <!-- menu links for small screen -->
    <Icon
      icon="ic:outline-menu"
      class="text-2xl text-[#427fa3] cursor-pointer"
    />
  </nav>
</header>
