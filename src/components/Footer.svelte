<script>
  import { Link, useLocation } from "svelte-navigator";
  import Icon from "@iconify/svelte";
  import { onMount, onDestroy } from "svelte";

  let location = useLocation();

  let pathname = "";

  let unsubscribe;

  onMount(() => {
    unsubscribe = location.subscribe((value) => {
      pathname = value.pathname;
    });
  });

  onDestroy(() => {
    unsubscribe();
  });

  const isActive = (url) => {
    return pathname === url;
  };
</script>

<footer class="bg-[#eae8e8cd] py-5">
  <div class="max-w-6xl mx-auto px-3">
    <!-- Intro -->
    <div class="flex items-end gap-4">
      <!-- Logo -->
      <Link to="/">
        <h1
          class="text-xl sm:text-2xl font-bold text-[#90caec] md:text-3xl uppercase font-[Alkatra] whitespace-nowrap"
        >
          Plate plan
        </h1>
      </Link>
      <div class="line mb-2" />
    </div>

    <!-- Footer contents -->
    <div
      class="grid grid-cols-2 md:grid-cols-4 py-6 gap-4 text-[#253a3a] lg:items-center"
    >
      <!-- mobile apps -->
      <div>
        <div class="flex items-center gap-2 mb-3">
          <Icon
            icon="ion:logo-apple"
            class="text-xl hover:scale-110 cursor-pointer text-[#5baddc]"
          />
          <p class="cursor-pointer hover:underline text-sm font-[Alkatra]">
            Get our iOS app from the App Store
          </p>
        </div>

        <div class="flex items-center gap-2">
          <Icon
            icon="ri:android-fill"
            class="text-xl hover:scale-110 cursor-pointer text-[#5baddc]"
          />
          <p class="cursor-pointer hover:underline text-sm font-[Alkatra]">
            Get our Android app on Google Play
          </p>
        </div>
      </div>

      <!-- Links -->
      <div class="flex md:justify-center">
        <div>
          <h1 class="uppercase text-xl mb-2 font-[Roboto]">Navigation</h1>
          <ul class="flex flex-col font-[Alkatra] gap-2">
            <li
              on:select={() => isActive("/")}
              class={` ${pathname === "/" && "active"}`}
            >
              <Link to="/">Welcome</Link>
            </li>
            <li
              on:select={() => isActive("/recipe")}
              class={` ${pathname === "/recipe" && "active"} `}
            >
              <Link to="/recipe">Recipe</Link>
            </li>
            <li
              on:select={() => isActive("/about")}
              class={` ${pathname === "/about" && "active"}`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              on:select={() => isActive("/faq")}
              class={` ${pathname === "/faq" && "active"}`}
            >
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <!-- social -->
      <div class="flex md:justify-center">
        <div>
          <h1 class="uppercase text-xl mb-2 font-[Roboto]">Social</h1>
          <ul class="lg:flex flex-col font-[Alkatra] gap-2">
            <li class="flex items-center gap-2 cursor-pointer">
              <Icon icon="ic:round-facebook" class="footerIcon" />Facebook
            </li>
            <li class="flex items-center gap-2 cursor-pointer">
              <Icon icon="ph:instagram-logo-fill" class="footerIcon" />Instagram
            </li>
            <li class="flex items-center gap-2 cursor-pointer">
              <Icon icon="mdi:twitter" class="footerIcon" />Twitter
            </li>
            <li class="flex items-center gap-2 cursor-pointer">
              <Icon icon="ic:baseline-email" class="footerIcon" />Email
            </li>
          </ul>
        </div>
      </div>

      <!-- Privacy -->
      <div class="flex md:justify-center">
        <div>
          <h1 class="uppercase text-xl mb-2 font-[Roboto]">
            Privacy & Security
          </h1>
          <ul class="lg:flex flex-col font-[Alkatra] gap-2">
            <li class="flex items-center gap-2 cursor-pointer">Latest Issue</li>
            <li class="flex items-center gap-2 cursor-pointer">
              Privacy Policy
            </li>
            <li class="flex items-center gap-2 cursor-pointer">
              Terms of Service
            </li>
            <li class="flex items-center gap-2 cursor-pointer">
              Customer Service
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="line mb-2" />

    <!-- copyright -->
    <p class="font-[Alkatra] mt-2">© 2023 Plate Plan Meal Planning Inc</p>
  </div>
</footer>
