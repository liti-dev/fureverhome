<script lang="ts">
   import {Button, Column, Tag} from 'carbon-components-svelte';
   export let item: any;
   console.log(item)
</script>

  <div class="card" >
    <img src="https://img.freepik.com/free-vector/different-pets-concept_23-2148509081.jpg?size=626&ext=jpg" alt="pet shelter"/>
    <Tag>Pets</Tag>
    <p>Name: {item.name}</p>
    <p>Location: {item.location}
      <Button class="card-button" href={item.url} size="small">Visit their website</Button>
    </div>
 
<style lang="scss">
 
 
 img {
    width: 100%;
  }

</style>
