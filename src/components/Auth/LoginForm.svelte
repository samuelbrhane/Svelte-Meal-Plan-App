<script>
  import { Link, navigate } from "svelte-navigator";
  import authStore from "../../stores/authStore";
  import Icon from "@iconify/svelte";
  import axios from "axios";
  import { loginRoute, verifyTokenRoute } from "../../utils/routes/authRoutes";
  import { fade } from "svelte/transition";
  import { onDestroy } from "svelte";
  import Loader from "../Loader.svelte";
  import { getGoogleAuthorization } from "../../utils/auth2/googleAuth";

  let error = false;
  let timeout;
  let loading = false;

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

  let email = "";
  let password = "";
  let errorMessage = "";
  let showPassword = false;

  //   handle form submit
  const handleFormSubmit = async () => {
    errorMessage = "";
    loading = true;
    try {
      // Login user
      let { data } = await axios.post(loginRoute, {
        email,
        password,
      });

      // safe token in local storage
      localStorage.setItem("platePlanToken", JSON.stringify(data));
      let { data: response } = await axios.get(verifyTokenRoute, {
        headers: { Authorization: `JWT ${data.access}` },
      });

      // update authStore
      authStore.update((authData) => {
        authData.loading = false;
        authData.isAuthenticated = true;
        authData.token = data;
        authData.userName = response.first_name + " " + response.last_name;
        authData.userEmail = response.email;
        authData.userId = response.id;
        return authData;
      });

      // navigate to private home page
      navigate("/dashboard");
    } catch (err) {
      // set error if login failed
      error = true;
      errorMessage = "Incorrect Email or Password";
    }

    loading = false;
  };

  async function redirectToGoogle() {
    const response = await fetch("http:localhost:8000/api/google-login/");
    const data = await response.json();
    window.location.href = data.url;
  }
</script>

<!-- add loader when submitting form -->
{#if loading}
  <Loader />
{/if}
<section
  class="bg-white w-full md:w-[500px] lg:w-[450px] xl:w-[550px] md:py-8 lg:py-3 md:px-12 xl:py-12 xl:px-20 2xl:py-10 p-3 mt-10 lg:mt-4 xl:mt-8 rounded-xl shadow"
>
  <h1 class="text-center font-semibold text-4xl mb-4 font-[Alkatra]">Log In</h1>

  <!-- Login form -->
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

    <!-- password -->
    <div class="mb-2">
      <label for="password">Password</label>
      <div class="relative">
        <input
          required
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

    <!-- login failed error -->
    {#if error}
      <p transition:fade class="text-center my-1 text-sm text-[#a2329c]">
        {errorMessage}
      </p>
    {/if}

    <!-- forget password -->
    <button class="hover:scale-105 hover:text-[#26648b]">
      <Link to="/reset-password">Forget password?</Link>
    </button>

    <!-- login -->
    <div class="flex justify-center mt-4 w-full">
      <button
        type="submit"
        class="w-full hover:scale-[1.03] py-2 text-lg bg-[#7db9db] rounded-lg text-white font-semibold"
        >Login</button
      >
    </div>

    <!-- login with google -->
    <div class="flex justify-center mt-2">
      <button
        on:click={getGoogleAuthorization}
        type="button"
        class="w-full flex items-center justify-center gap-4 hover:scale-[1.03] py-2 text-lg bg-[#db7dd3] rounded-lg text-white font-semibold"
        ><Icon icon="logos:google-icon" /> Continue with google</button
      >
    </div>
  </form>
</section>

<!-- link to diet type -->
<div class="mt-3 flex items-center gap-2 w-full justify-center">
  <p>New to Plate Plan?</p>
  <Link to="/diet-type" class="hover:scale-105 hover:text-[#26648b]"
    >Get Started</Link
  >
</div>
