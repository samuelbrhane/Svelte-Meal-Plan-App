<script>
  import { onDestroy, onMount } from "svelte";
  import authStore from "../../stores/authStore";
  import { Link, useLocation } from "svelte-navigator";
  import Icon from "@iconify/svelte";

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
      on:select={() => isActive("/dashboard")}
      class={` ${pathname === "/dashboard" && "activeLink"} privateLinks`}
    >
      <Link to="/dashboard" class="flex items-center px-2 gap-2">
        <Icon icon="material-symbols:dashboard" class="text-xl" />
        <span>Overview</span>
      </Link>
    </li>
    <li
      on:select={() => isActive("/mealPlanner")}
      class={` ${pathname === "/mealPlanner" && "activeLink"} privateLinks`}
    >
      <Link to="/mealPlanner" class="flex items-center px-2 gap-2">
        <Icon icon="game-icons:hot-meal" class="text-xl" />
        <span>Meal Planner</span>
      </Link>
    </li>
    <li
      on:select={() => isActive("/shopping")}
      class={` ${pathname === "/shopping" && "activeLink"} privateLinks`}
    >
      <Link to="/shopping" class="flex items-center px-2 gap-2">
        <Icon icon="material-symbols:shopping-bag-sharp" class="text-xl" />
        <span>Shopping</span>
      </Link>
    </li>
    <li
      on:select={() => isActive("/profile")}
      class={` ${pathname === "/profile" && "activeLink"} privateLinks`}
    >
      <Link to="/profile" class="flex items-center px-2 gap-2">
        <Icon icon="healthicons:ui-user-profile-negative" class="text-xl" />
        <span>Profile</span>
      </Link>
    </li>
  </ul>
</main>
