<script>
  import Icon from "@iconify/svelte";
  import { Link } from "svelte-navigator";
  import { LoginForm } from "../../components";
</script>

<main class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <!-- auth images  -->
  <div class="bg-[#f5f2f7] lg:flex items-center hidden">
    <img src="/login.png" alt="login" class="w-full" />
  </div>

  <!-- authentication forms -->
  <div
    class="flex flex-col items-center py-20 lg:py-8 bg-[#ecf4ed] font-[Alkatra] relative"
  >
    <!-- back to homepage -->
    <Link
      to="/"
      class="absolute top-4 left-3 flex items-center gap-1 hover:scale-105 hover:text-[#3467a5]"
    >
      <Icon icon="ic:baseline-arrow-back" class="text-lg" />
      Back to homepage
    </Link>

    <h1 class="text-4xl font-bold text-[#7db9db] md:text-3xl uppercase mt-12">
      Plate plan
    </h1>
    <img src="/title.png" alt="Logo" class="w-16 h-16" />

    <!-- Login form -->
    <div class="px-4 w-full flex justify-center items-center flex-col">
      <LoginForm />
    </div>
  </div>
</main>
