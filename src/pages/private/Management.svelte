<script>
  import { PrivateLayout, Report, Title } from "../../components";
  import { DateInput } from "date-picker-svelte";
  let currentDate = new Date();
</script>

<PrivateLayout>
  <section class="lg:ml-[250px]">
    <div class="px-4 md:px-12 lg:px-20">
      <div class="flex justify-between pt-4">
        <Title title="Management" subtitle="Manage your meal plan" />
        <!-- data picker  -->
        <div>
          <h1 class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]">
            Select The Date
          </h1>

          <!-- week start -->
          <div
            class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a]"
          >
            <h1 class="text-lg">Selected Date:</h1>
            <DateInput bind:value={currentDate} />
          </div>
        </div>
      </div>
    </div>
  </section></PrivateLayout
>
