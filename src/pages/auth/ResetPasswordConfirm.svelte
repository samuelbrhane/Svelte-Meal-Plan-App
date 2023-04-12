<script>
  import Icon from "@iconify/svelte";
  import { Loader } from "../../components";
  import { fade } from "svelte/transition";
  import { toast } from "@zerodevx/svelte-toast";
  import axios from "axios";
  import { resetPasswordConfirmRoute } from "../../utils/routes/authRoutes";
  import { navigate, useParams } from "svelte-navigator";
  import { onDestroy, onMount } from "svelte";
  import { errorClasses, successClasses } from "../../utils/toast/toastCustom";
  let password = "";
  let password2 = "";
  let loading = false;
  let error = false;
  let errorMessage = "";
  let uid;
  let token;
  let unsubscribe;
  let timeout;

  // this will run whenever error changes
  $: if (error) {
    // set a timeout to clear the error after 3 seconds
    timeout = setTimeout(() => {
      error = false;
    }, 3000);
  }

  let showPassword = false;
  let showPassword2 = false;

  const params = useParams();

  onMount(() => {
    unsubscribe = params.subscribe((value) => {
      uid = value.uid;
      token = value.token;
    });
  });

  onDestroy(() => {
    unsubscribe();
    clearTimeout(timeout);
  });

  //   handle form submit
  const handleFormSubmit = async () => {
    loading = true;
    error = false;

    // check if password is the same as confirm password
    if (password !== password2) {
      error = true;
      errorMessage = "Password and Confirm Password are not the same";
    } else {
      try {
        // reset password
        await axios.post(resetPasswordConfirmRoute, {
          uid,
          token,
          new_password: password,
          re_new_password: password2,
        });

        password = "";
        password2 = "";
        navigate("/login");

        // toast reset password success
        toast.push("Password changed successfully!", {
          theme: successClasses,
        });
      } catch (error) {
        // toast reset password error
        toast.push("Can't reset password!", {
          theme: errorClasses,
        });
      }
    }
    loading = false;
  };
</script>

{#if loading}
  <!-- add loader when form submitted -->
  <Loader />
{/if}
<section class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <!-- form  -->
  <div
    class="flex flex-col items-center py-20 lg:py-8 bg-[#ecf4ed] font-[Alkatra] relative"
  >
    <h1 class="text-4xl font-bold text-[#7db9db] md:text-3xl uppercase mt-12">
      Plate plan
    </h1>

    <img src="/media/title.png" alt="Logo" class="w-16 h-16" />

    <h1 class="text-center font-semibold text-4xl mt-10 mb-4 font-[Alkatra]">
      Change Your Password
    </h1>

    <!-- Confirm password change form -->
    <div class="px-4 w-full flex justify-center items-center flex-col">
      <form on:submit|preventDefault={handleFormSubmit}>
        <!-- password -->
        <div class="mb-2">
          <label for="password">Password</label>
          <div class="relative">
            <input
              required
              value={password}
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

        <!-- confirm password -->
        <div class="mb-2">
          <label for="password">Confirm Password</label>
          <div class="relative">
            <input
              value={password2}
              required
              type={showPassword2 ? "text" : "password"}
              id="password"
              class="input"
              on:input={(e) => (password2 = e.target.value)}
            />
            <button
              type="button"
              class="password"
              on:click={() => (showPassword2 = !showPassword2)}
            >
              <Icon
                icon="zondicons:view-show"
                class={`${
                  showPassword2 ? "hidden" : "inline"
                } duration-150 ease-in-out`}
              />
              <Icon
                icon="ant-design:eye-invisible-filled"
                class={`${
                  !showPassword2 ? "hidden" : "inline"
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

        <!-- Change password -->
        <div class="flex justify-center mt-4">
          <button
            type="submit"
            class="px-16 hover:scale-[1.03] py-2 text-xl bg-[#7db9db] rounded-lg text-white font-semibold"
            >Change Password</button
          >
        </div>
      </form>
    </div>
  </div>

  <!-- forget password images  -->
  <div class="bg-[#cfecf3] lg:flex items-center hidden">
    <img src="/media/forget2.png" alt="login" class="w-full" />
  </div>
</section>
