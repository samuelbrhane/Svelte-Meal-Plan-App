<script>
  import Icon from "@iconify/svelte";
  import { Link } from "svelte-navigator";
  let email = "";

  //   handle form submit
  const handleFormSubmit = () => {
    console.log("email: " + email);
  };
</script>

<section class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <!-- form  -->
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

    <h1 class="text-center font-semibold text-4xl mt-10 mb-4 font-[Alkatra]">
      Reset Your Password
    </h1>

    <!-- Password change form -->
    <div class="px-4 w-full flex justify-center items-center flex-col">
      <form on:submit|preventDefault={handleFormSubmit}>
        <!-- email -->
        <div class="mb-4">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="input"
            required
            bind:value={email}
          />
        </div>

        <!-- resent reset password email -->
        <div class="flex justify-center mt-4">
          <button
            type="submit"
            class="px-16 hover:scale-[1.03] py-2 text-xl bg-[#7db9db] rounded-lg text-white font-semibold"
            >Send Reset Email</button
          >
        </div>
      </form>
    </div>
  </div>

  <!-- forget password images  -->
  <div class="bg-[#f5f2f7] lg:flex items-center hidden">
    <img src="/forget1.jpg" alt="login" class="w-full" />
  </div>
</section>
