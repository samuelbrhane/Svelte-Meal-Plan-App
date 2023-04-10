<script>
  import { Link } from "svelte-navigator";
  import { toast } from "@zerodevx/svelte-toast";
  import { fade } from "svelte/transition";
  import { onDestroy } from "svelte";
  import Icon from "@iconify/svelte";
  import { infoClasses, successClasses } from "../../utils/toast/toastCustom";
  import axios from "axios";
  import { registerRoute } from "../../utils/routes/authRoutes";
  let name = "";
  let email = "";
  let password = "";
  let errorMessage = "";
  let showPassword = false;
  let error = false;
  let timeout;

  // this will run whenever error changes
  $: if (error) {
    // set a timeout to clear the error after 3 seconds
    timeout = setTimeout(() => {
      error = false;
    }, 3000);
  }

  // clear the timeout when the component is destroyed
  onDestroy(() => {
    clearTimeout(timeout);
  });

  //   handle form submit
  const handleFormSubmit = async () => {
    errorMessage = "";
    try {
      // register user
      await axios.post(registerRoute, {
        email,
        name,
        password,
      });

      //user created successfully
      toast.push("User created successfully", { theme: successClasses });

      // check email to activate
      toast.push("Please check your email to activate your account!", {
        theme: infoClasses,
      });

      name = "";
      email = "";
      password = "";
    } catch (err) {
      // add error message
      error = true;
      errorMessage = err.response.data.email[0];
    }
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
      <div class="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          class="input"
          on:input={(e) => (password = e.target.value)}
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

    <!-- register failed error -->
    {#if error}
      <p transition:fade class="text-center my-1 text-sm text-[#a2329c]">
        {errorMessage}
      </p>
    {/if}

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
