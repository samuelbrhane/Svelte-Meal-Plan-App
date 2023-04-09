<script>
  import Icon from "@iconify/svelte";
  import { Link, useParams } from "svelte-navigator";

  const params = useParams();
  const uid = $params.uid;
  const token = $params.token;

  //   activate account
  const activateAccount = () => {
    console.log("uid: " + uid);
    console.log("token: " + token);
  };
</script>

<section class="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
  <!-- activate account image  -->
  <div class="bg-[#daeaef] lg:flex items-center hidden">
    <img src="/activate.png" alt="login" class="w-full" />
  </div>

  <div
    class="flex flex-col items-center py-20 lg:py-8 bg-[#ecf4ed] font-[Alkatra] relative"
  >
    <h1 class="text-4xl font-bold text-[#7db9db] md:text-3xl uppercase mt-12">
      Plate plan
    </h1>

    <img src="/title.png" alt="Logo" class="w-16 h-16" />

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
