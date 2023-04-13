<script>
  import { onDestroy, onMount } from "svelte";
  import authStore from "../../stores/authStore";
  import { Link, useLocation } from "svelte-navigator";

  let userName;
  let userEmail;
  let unsubscribeStore;
  let location = useLocation();
  let pathname = "";
  let unsubscribeLocation;

  //   subscribe to auth store
  onMount(() => {
    unsubscribeStore = authStore.subscribe((value) => {
      userName = value.userName;
      userEmail = value.userEmail;
    });
  });
  onDestroy(() => {
    unsubscribeStore();
  });

  onMount(() => {
    unsubscribeLocation = location.subscribe((value) => {
      pathname = value.pathname;
    });
  });

  onDestroy(() => {
    unsubscribeLocation();
  });

  const isActive = (url) => {
    return pathname === url;
  };
</script>

<main class="bg-[rgb(246,246,217)] w-[220px] h-full py-6 px-4">
  <!-- Add site title -->
  <!-- <div class="flex flex-col items-center gap-2">
    <img src="/media/title.png" alt="Logo" class="w-12 h-12" />
    <h1 class="text-xl font-bold text-[#7db9db] uppercase">Plate plan</h1>
  </div> -->

  <!-- customer data -->
  <div class="flex flex-col items-center mb-6 gap-2">
    <img
      src="/media/team/person1.webp"
      alt="customerImage"
      class="w-16 h-16 rounded-full"
    />
    <h1 class="font-[Alkatra] italic">Hello, {userName}</h1>
  </div>

  <!-- pages -->
  <Link to="/dashboard" class="font-bold font-[Roboto] text-2xl">Dashboard</Link
  >
  <!-- Links -->
  <ul class="flex flex-col items-center gap-4 text-[16px] mt-2">
    <li
      on:select={() => isActive("/overview")}
      class={` ${pathname === "/overview" && "active"} privateLinks`}
    >
      <Link to="/overview">Overview</Link>
    </li>
    <li
      on:select={() => isActive("/mealPlanner")}
      class={` ${pathname === "/mealPlanner" && "active"} privateLinks`}
    >
      <Link to="/mealPlanner">Meal Planner</Link>
    </li>
    <li
      on:select={() => isActive("/shopping")}
      class={` ${pathname === "/shopping" && "active"} privateLinks`}
    >
      <Link to="/shopping">Shopping</Link>
    </li>
    <li
      on:select={() => isActive("/profile")}
      class={` ${pathname === "/profile" && "active"} privateLinks`}
    >
      <Link to="/profile">Profile</Link>
    </li>
  </ul>
</main>
