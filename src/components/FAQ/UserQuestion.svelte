<script>
  let email = "";
  let message = "";
</script>

<!-- users' additional question form -->
<section class="bg-[#eae8e8cd] py-7">
  <div class="max-w-6xl mx-auto px-3">
    <h1 class="font-semibold font-[Merriweather] text-xl lg:text-2xl mb-3">
      Have a different question?
    </h1>
    <p>
      At the core of our values is providing exceptional personalized assistance
      to each and every one of our clients. Should you require further
      clarification, feel free to peruse our extensive repository of knowledge
      at the Plan to Eat Knowledge Base. Alternatively, you may reach out to us
      through the messaging function below for a casual chat. Our team is
      available on weekdays from 9 to 5 Mountain time, and we are committed to
      responding to your queries within 12 hours, even if they are sent beyond
      our usual working hours.
    </p>

    <!-- form -->
    <form class="mt-4">
      <input
        type="email"
        placeholder="Enter Your Email"
        bind:value={email}
        class="block mb-3 input"
      />
      <textarea
        rows="12"
        placeholder="Your Message..."
        class="w-full input"
        bind:value={message}
      />
      <div class="flex justify-center mt-4">
        <button
          type="submit"
          class="px-12 hover:scale-[1.03] font-[Roboto] py-2 text-xl bg-[#7db9db] rounded-lg text-white font-semibold"
          >Send Message</button
        >
      </div>
    </form>
  </div>
</section>
