<script>
  const handleFormSubmit = () => {};
  let email = "";
  let message = "";
  import { inview } from "svelte-inview";
  import { animateComponent } from "../../utils/functions/animation";
</script>

<section class="relative w-full min-h-[500px] lg:h-[550px] pb-[200px]">
  <!-- background image -->
  <img
    src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="foodImage"
    class="w-full min-h-[500px] lg:h-[550px]"
  />

  <!--Question content -->
  <div class="absolute top-0 left-0 w-full bottom-0 bg-[#eae8e8ef] py-4">
    <div
      class="max-w-6xl mx-auto px-3 grid grid-cols-1 h-full lg:grid-cols-2 gap-6 lg:gap-20 items-center"
    >
      <div class="relative left-0">
        <h1
          class="font-bold text-[#a32389] text-2xl md:text-3xl lg:text-4xl font-[Roboto] mb-6"
        >
          Questions?
        </h1>
        <p class="font-[Alkatra]">
          Personal service is one of the things we pride ourselves on most. If
          you have questions, comments, or would just like to chat, we&#39;re
          always here. You can get in touch by filling out the form below.
          We&#39;re here weekdays from 9-5 Mountain time. If you send a message
          outside of business hours we&#39;ll do our best to get back to you
          within 12 hours.
        </p>
      </div>

      <!-- Question form -->
      <div
        class="bg-white rounded-xl shadow py-4 px-6 md:py-8 lg:py-12 relative right-0"
        use:inview
        on:inview_change={(e) => animateComponent(e, "fromRight")}
      >
        <form
          on:submit|preventDefault={handleFormSubmit}
          class="font-[Alkatra]"
        >
          <!-- email -->

          <input
            type="email"
            id="email"
            placeholder="Email"
            class="input mb-3"
            bind:value={email}
          />

          <textarea
            rows="10"
            bind:value={message}
            placeholder="Message..."
            class="input"
          />

          <!-- login -->
          <div class="flex justify-center mt-4">
            <button
              type="submit"
              class="px-12 hover:scale-[1.03] font-[Roboto] py-2 text-xl bg-[#7db9db] rounded-lg text-white font-semibold"
              >Send Message</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
