<script>
  import { Link } from "svelte-navigator";
  import Icon from "@iconify/svelte";
  let email = "";
  let password = "";
  let showPassword = false;

  //   handle form submit
  const handleFormSubmit = () => {
    console.log("email: " + email);
    console.log("password: " + password);
  };

  const handlePasswordChange = (e) => {
    password = e.target.value;
  };
</script>

<section
  class="bg-white w-full md:w-[500px] lg:w-[450px] xl:w-[550px] md:py-8 md:px-12 xl:py-12 xl:px-20 p-3 mt-10 rounded-xl shadow"
>
  <h1 class="text-center font-semibold text-4xl mb-4 font-[Alkatra]">Log In</h1>

  <!-- Login form -->
  <form on:submit|preventDefault={handleFormSubmit}>
    <!-- email -->
    <div class="mb-4">
      <label for="email">Email</label>
      <input type="email" id="email" class="input" bind:value={email} />
    </div>

    <!-- password -->
    <div class="mb-2">
      <label for="password">Password</label>
      <div class="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          class="input"
          on:input={handlePasswordChange}
        />
        <button
          type="button"
          class="password"
          on:click={() => (showPassword = !showPassword)}
        >
          <Icon
            icon="zondicons:view-show"
            class={`${
              showPassword ? "hidden" : "inline"
            } duration-150 ease-in-out`}
          />
          <Icon
            icon="ant-design:eye-invisible-filled"
            class={`${
              !showPassword ? "hidden" : "inline"
            } duration-150 ease-in-out`}
          />
        </button>
      </div>
    </div>

    <!-- forget password -->
    <button class="hover:scale-105 hover:text-[#26648b]">
      <Link to="/reset-password">Forget password?</Link>
    </button>

    <!-- login -->
    <div class="flex justify-center mt-4">
      <button
        type="submit"
        class="px-16 hover:scale-[1.03] py-2 text-xl bg-[#7db9db] rounded-lg text-white font-semibold"
        >Login</button
      >
    </div>
  </form>
</section>

<!-- link to register -->
<div class="mt-3 flex items-center gap-2 w-full justify-center">
  <p>New to Plate Plan?</p>
  <Link to="/register" class="hover:scale-105 hover:text-[#26648b]"
    >Register</Link
  >
</div>
