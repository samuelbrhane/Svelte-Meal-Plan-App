<script>
  import { navigate, useParams } from "svelte-navigator";
  import axios from "axios";
  import { toast } from "@zerodevx/svelte-toast";
  import { activateAccountRoute } from "../../utils/routes/authRoutes";
  import { errorClasses, successClasses } from "../../utils/toast/toastCustom";
  import { Loader } from "../../components";
  import { onDestroy, onMount } from "svelte";

  const params = useParams();
  let loading = false;

  let uid;
  let token;
  let unsubscribe;

  onMount(() => {
    unsubscribe = params.subscribe((value) => {
      uid = value.uid;
      token = value.token;
    });
  });

  onDestroy(() => {
    unsubscribe();
  });

  // activate account
  const activateAccount = async () => {
    loading = true;

    try {
      await axios.post(activateAccountRoute, {
        uid,
        token,
      });
      // add error for activation error
      toast.push("Account activated successfully!", {
        theme: successClasses,
      });
      navigate("/login");
    } catch (error) {
      // add error for activation error
      toast.push("Error: Can't activate your account!", {
        theme: errorClasses,
      });
    }

    loading = false;
  };
</script>

<!-- add loader when button clicked -->
{#if loading}
  <Loader />
{/if}

<section class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <!-- activate account image  -->
  <div class="bg-[#daeaef] lg:flex items-center hidden">
    <img src="/media/activate.png" alt="login" class="w-full" />
  </div>

  <div
    class="flex flex-col items-center py-20 lg:py-8 bg-[#ecf4ed] font-[Alkatra] relative"
  >
    <h1 class="text-4xl font-bold text-[#7db9db] md:text-3xl uppercase mt-12">
      Plate plan
    </h1>

    <img src="/media/title.png" alt="Logo" class="w-16 h-16" />

    <h1 class="text-center font-semibold text-4xl mt-10 mb-4 font-[Alkatra]">
      Activate Your Account
    </h1>

    <div class="px-4 w-full flex justify-center items-center flex-col">
      <!-- activate account -->
      <div class="flex justify-center mt-4">
        <button
          on:click={activateAccount}
          type="submit"
          class="px-16 hover:scale-[1.03] py-2 text-xl bg-[#7db9db] rounded-lg text-white font-semibold"
          >Activate</button
        >
      </div>
    </div>
  </div>
</section>
