<script>
  import { Link } from "svelte-routing";
  let name = "";
  let email = "";
  let password = "";

  //   handle form submit
  const handleFormSubmit = () => {
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("password: " + password);
  };
</script>

<section
  class="bg-white w-full md:w-[500px] lg:w-[450px] xl:w-[550px] md:py-8 md:px-12 xl:py-12 xl:px-20 p-3 mt-10 rounded-xl shadow"
>
  <h1 class="text-center font-semibold text-4xl mb-4 font-[Alkatra]">
    Register
  </h1>

  <!-- Login form -->
  <form on:submit|preventDefault={handleFormSubmit}>
    <!-- email -->
    <div class="mb-4">
      <label for="name">Full Name</label>
      <input type="text" id="name" class="input" bind:value={name} />
    </div>

    <!-- email -->
    <div class="mb-4">
      <label for="email">Email</label>
      <input type="email" id="email" class="input" bind:value={email} />
    </div>

    <!-- password -->
    <div class="mb-2">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        class="input"
        bind:value={password}
      />
    </div>

    <!-- register -->
    <div class="flex justify-center mt-4">
      <button
        type="submit"
        class="px-16 hover:scale-[1.03] py-2 text-xl bg-[#7db9db] rounded-lg text-white font-semibold"
        >Register</button
      >
    </div>
  </form>
</section>

<!-- link to register -->
<div class="mt-3 flex items-center gap-2 w-full justify-center">
  <p>Already have an account?</p>
  <Link to="/login" class="hover:scale-105 hover:text-[#26648b]">Log In</Link>
</div>
