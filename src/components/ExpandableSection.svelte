<script lang="ts">
  import { Button, ExpandableTile } from "carbon-components-svelte";
  export let items: any[] = [];
  export let component:any;  
  export let title: string = "Show more";
  export let itemsAbove: number = 2;

  
let displayedItems = items.slice(0,itemsAbove)
let hiddenItems = items.slice(itemsAbove)
</script>

<ExpandableTile>
  <div slot="above">
    <!-- add a number of items to the slot above
    add the rest of the items to the slot below -->
        
    {#each displayedItems as item}
    <svelte:component this = {component} {item}/>
    {/each}
    <Button>{title}</Button>
  </div>
  <div slot="below">
    {#each hiddenItems as item}
    <svelte:component this = {component} {item}/>
    {/each}
  </div>
</ExpandableTile>