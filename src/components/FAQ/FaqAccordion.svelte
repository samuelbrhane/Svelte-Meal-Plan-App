<script>
  import { faqItems } from "../../utils/faqItems";
  import AccordionPanel from "./AccordionPanel.svelte";
</script>

<section class="py-6">
  {#each faqItems as item (item.id)}
    <!-- accordion panel -->
    <AccordionPanel {item} />
  {/each}
</section>
