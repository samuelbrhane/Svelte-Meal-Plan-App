<script>
  let active = false;
  import Icon from "@iconify/svelte";
  export let item = {};
</script>

<button
  on:click={() => (active = !active)}
  class={`text-[#444] font-[Merriweather] mb-1 cursor-pointer p-3 rounded-md w-full flex items-center justify-between text-left outline-none hover:bg-gray-100 duration-200`}
>
  {item?.title}
  <Icon icon="material-symbols:add" class={`${active ? "hidden" : "inline"}`} />
  <Icon
    icon="ic:baseline-minus"
    class={`${active ? "inline" : "hidden"}`}
  /></button
>
<div
  class={`bg-white block h-0  duration-[1s] overflow-y-scroll ease-in-out ${
    active && "h-[140px] md:h-[120px] py-2"
  }`}
>
  <p class="px-3 text-sm ">{item?.content}</p>
</div>
