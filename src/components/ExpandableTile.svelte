<script lang="ts">
  // import { Button, ExpandableTile } from "carbon-components-svelte";
  import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte"
 
 type Item = {
  props: any,
  component: any
  
 }

  export let items: Item[] = [];
  export let title: string = "Show more";
  export let itemsAbove: number = 2;
  
// let displayedItems = items.slice(0,itemsAbove)
// let hiddenItems = items.slice(itemsAbove)
</script>

<div class="expandable-container">
  
    <!-- add a number of items to the slot above
    add the rest of the items to the slot below -->
        
    {#each items.slice(0, itemsAbove) as item}
    <div class="expandable-item"><svelte:component this = {item.component} {...item.props}/></div>
    {/each} 
    
  
</div>
{#if itemsAbove < items.length}
    <button
		on:click={() => itemsAbove = itemsAbove + 2}
    type="button">{title}<span><ChevronDown/></span>
  </button>
{/if}

<style>

 button {
  display:block;
  width:100%;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: white;
  border-radius: 4px;
  border: 2px solid var(--foundation-primary-primary-600, #8E24D7);
  color: var(--foundation-primary-primary-600, #8E24D7);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

 }

  span {
  margin: 1rem;
 }

 .expandable-container {
 display:flex;
 flex-direction: row;
 flex-wrap:wrap;
}
.expandable-item {
  margin: 1rem;
  width: 30%;
}

@media (max-width: 600px) {
  .expandable-container {flex-direction: column;}
  .expandable-item {
    width: 100%;
  }
}

</style>