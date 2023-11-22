<script lang="ts">
  import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte"
  import ChevronUp from "carbon-icons-svelte/lib/ChevronUp.svelte"
 
 type Item = {
  props: any,
  component: any  
 }

  export let items: Item[] = [];
  export let title: string = "Show more";
  export let itemsAbove: number = 2;
  
  let displayedItems = items.slice(0,itemsAbove)
  let hiddenItems = items.slice(itemsAbove)
  let isExpanded = false
</script>

<div class="expandable-container">
  
    <!-- add a number of items to the slot above
    add the rest of the items to the slot below -->
        
    {#each displayedItems as item}
    <div class="expandable-item"><svelte:component this = {item.component} {...item.props}/></div>
    {/each} 

    {#if itemsAbove < items.length}
      {#if isExpanded}    
      {#each hiddenItems as item}
        <div class="expandable-item"><svelte:component this = {item.component} {...item.props}/></div>
      {/each}         
      {/if}
        <button class:hidden = {isExpanded}
        on:click={() => isExpanded = !isExpanded}
        type="button">{title}<span><ChevronDown/></span>
      </button>      
      <button class:hidden = {!isExpanded}
      on:click={() => isExpanded = !isExpanded}
      type="button">Show less<span><ChevronUp/></span>
    </button>
    {/if}
      
</div>


<style>
 button {
  display:block;
  width:50%;
  margin: 1rem 0;
  /* padding: 0.5rem; */
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
  align-items: center;
  justify-content: center;
}
.expandable-item {
  width: 50%;
}

.hidden {
  display:none;
}

@media (max-width: 600px) {
  button {
    width:100%;
  }
  .expandable-container {
    flex-direction: column;
    padding: 1rem;
  }
  .expandable-item {
    width: 100%;
  }
}

</style>