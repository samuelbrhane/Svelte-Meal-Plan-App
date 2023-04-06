<script>
  import { onMount } from "svelte";
  import { interval } from "rxjs";
  import { map } from "rxjs/operators";
  import { testimonials } from "../../utils/testimonials";

  const items = testimonials;
  let containerWidth = 0;

  onMount(() => {
    containerWidth = items.length * 400;

    interval(40)
      .pipe(
        map(() => {
          const container = document.querySelector(".container");
          const scrollLeft = container.scrollLeft;
          const visibleWidth = container.offsetWidth;
          const totalWidth = container.scrollWidth;

          if (scrollLeft + visibleWidth >= totalWidth) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 1;
          }
        })
      )
      .subscribe();
  });
</script>

<div
  class="container mt-[30px] flex overflow-x-scroll"
  style="width: {containerWidth}px "
>
  {#each items as item}
    <div class="item w-[350px] minh-[300px] mr-5">
      {#each item as data (data.id)}
        <div class="mb-4 bg-white px-8 py-10">
          <p class="font-[Alkatra] italic">"{data.text}"</p>

          <div class="flex gap-4 mt-4">
            <div>
              <div
                class="rounded-full h-[70px] w-[70px] flex items-center justify-center bg-white text-2xl font-bold text-[#2a234a]"
              >
                <img
                  src={data.image}
                  alt="personImage"
                  class="w-full h-full rounded-full"
                />
              </div>
            </div>

            <div>
              <p class="text-[#409b9b] font-semibold">{data.name}</p>
              <p class="text-sm font-light text-[#7e1e6d]">{data.email}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<!-- App.svelte -->

<style>
  .container {
    -webkit-overflow-scrolling: touch;
  }

  .item {
    flex-shrink: 0;
  }
</style>
