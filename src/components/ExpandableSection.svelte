<script lang="ts">
  import { Button, ExpandableTile } from "carbon-components-svelte";
  import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte"
 
 type Item = {
  props: any,
  component: any
  
 }

  export let items: Item[] = [];
  // export let component:any;  
  export let title: string = "Show more";
  export let itemsAbove: number = 2;

  
let displayedItems = items.slice(0,itemsAbove)
let hiddenItems = items.slice(itemsAbove)
</script>

<ExpandableTile tileExpandedLabel="View less" tileCollapsedLabel={title}>
  <div slot="above">
    <!-- add a number of items to the slot above
    add the rest of the items to the slot below -->
        
    {#each displayedItems as item}
    <div><svelte:component this = {item.component} {...item.props}/></div>
    {/each}
    <button>{title} <ChevronDown/> </button>
  </div>
 
  <div slot="below">
    {#each hiddenItems as item}
    <div><svelte:component this = {item.component} {...item.props}/></div>
    {/each}
  </div>
  
</ExpandableTile>

<style>
 button {
  background-color: white;
  border-radius: 4px;
border: 2px solid var(--foundation-primary-primary-600, #8E24D7);

color: var(--foundation-primary-primary-600, #8E24D7);
font-size: 18px;
font-style: normal;
font-weight: 500;
padding: 0.5rem;
margin: 1rem;
 }
</style>