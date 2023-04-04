<script>
  import { AccordionPanel } from ".";
  import { faqItems } from "../utils/faqItems";
</script>

<section class="py-6">
  {#each faqItems as item (item.id)}
    <!-- accordion panel -->
    <AccordionPanel {item} />
  {/each}
</section>

<style>
</style>
