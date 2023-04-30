<script>
  import { onDestroy, onMount } from "svelte";
  import authStore from "../../stores/authStore";
  import { Link, navigate, useLocation } from "svelte-navigator";
  import Icon from "@iconify/svelte";
  import { logout } from "../../utils/functions/logout";

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

<main class="bg-[#47153e] text-white w-[250px] h-full flex flex-col">
  <div class="py-2">
    <!-- Add site title -->
    <Link to="/" class="flex items-center gap-2 px-5">
      <img src="/media/title.png" alt="Logo" class="w-10 h-10" />
      <h1 class="text-xl font-bold text-[#3789b9] uppercase">Plate plan</h1>
    </Link>
  </div>

  <div class="p-4 flex flex-col justify-between flex-grow">
    <div>
      <!-- dashboard total overview -->
      <div class="mb-2">
        <Link to="/dashboard" class="font-bold font-[Roboto] text-2xl"
          >Overview</Link
        >

        <ul class="flex flex-col items-center gap-3 text-[16px] mt-2 px-3">
          <li
            on:select={() => isActive("/dashboard")}
            class={` ${pathname === "/dashboard" && "activeLink"} privateLinks`}
          >
            <Link to="/dashboard" class="flex items-center px-2 gap-2">
              <Icon icon="material-symbols:dashboard" class="text-xl" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            on:select={() => isActive("/meal-planner")}
            class={` ${
              pathname === "/meal-planner" && "activeLink"
            } privateLinks`}
          >
            <Link to="/meal-planner" class="flex items-center px-2 gap-2">
              <Icon icon="game-icons:hot-meal" class="text-xl" />
              <span>Meal Planner</span>
            </Link>
          </li>
          <li
            on:select={() => isActive("/shopping")}
            class={` ${pathname === "/shopping" && "activeLink"} privateLinks`}
          >
            <Link to="/shopping" class="flex items-center px-2 gap-2">
              <Icon
                icon="material-symbols:shopping-bag-sharp"
                class="text-xl"
              />
              <span>Shopping</span>
            </Link>
          </li>
          <li
            on:select={() => isActive("/management")}
            class={` ${
              pathname === "/management" && "activeLink"
            } privateLinks`}
          >
            <Link to="/management" class="flex items-center px-2 gap-2">
              <Icon icon="eos-icons:cluster-management" class="text-xl" />
              <span>Management</span>
            </Link>
          </li>
        </ul>
      </div>

      <!-- nutrients chart -->
      <div>
        <Link to="/dashboard" class="font-bold font-[Roboto] text-2xl"
          >Nutrients</Link
        >
        <!-- Links -->
        <ul class="flex flex-col items-center gap-3 text-[16px] mt-2 px-3">
          <li
            on:select={() => isActive("/calories")}
            class={` ${pathname === "/calories" && "activeLink"} privateLinks`}
          >
            <Link to="/calories" class="flex items-center px-2 gap-2">
              <Icon icon="fluent:food-fish-24-filled" class="text-xl" />
              <span>Calories</span>
            </Link>
          </li>
          <li
            on:select={() => isActive("/protein")}
            class={` ${pathname === "/protein" && "activeLink"} privateLinks`}
          >
            <Link to="/protein" class="flex items-center px-2 gap-2">
              <Icon icon="ic:baseline-fastfood" class="text-xl" />
              <span>Protein</span>
            </Link>
          </li>
          <li
            on:select={() => isActive("/fats")}
            class={` ${pathname === "/fats" && "activeLink"} privateLinks`}
          >
            <Link to="/fats" class="flex items-center px-2 gap-2">
              <Icon icon="fluent:food-pizza-20-filled" class="text-xl" />
              <span>Fats</span>
            </Link>
          </li>
          <li
            on:select={() => isActive("/carbs")}
            class={` ${pathname === "/carbs" && "activeLink"} privateLinks`}
          >
            <Link to="/carbs" class="flex items-center px-2 gap-2">
              <Icon icon="fluent:food-grains-20-filled" class="text-xl" />
              <span>Carbs</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <!-- user sign out -->
    <button
      on:click={() => {
        logout();
        navigate("/");
      }}
      class="bg-[#427fa3] font-bold text-white px-12 py-2 rounded-md hover:scale-[1.06]"
      >Sign Out</button
    >
  </div>
</main>
