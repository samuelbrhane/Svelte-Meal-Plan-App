<script>
  import Icon from "@iconify/svelte";
  import { Link } from "svelte-navigator";
  let password = "";
  let password2 = "";

  let showPassword = false;
  let showPassword2 = false;

  //   handle form submit
  const handleFormSubmit = () => {
    console.log("password: " + password);
    console.log("password2: " + password2);
  };
</script>

<section class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <!-- form  -->
  <div
    class="flex flex-col items-center py-20 lg:py-8 bg-[#ecf4ed] font-[Alkatra] relative"
  >
    <h1 class="text-4xl font-bold text-[#7db9db] md:text-3xl uppercase mt-12">
      Plate plan
    </h1>

    <img src="/title.png" alt="Logo" class="w-16 h-16" />

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
    <img src="/forget2.png" alt="login" class="w-full" />
  </div>
</section>
