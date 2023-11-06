<script lang="ts">
  import { Grid, Row, Button, Column, Tag, Theme} from "carbon-components-svelte";
 
  import Header from './components/Header.svelte'

  const shelters = [
    {id: '01', name: 'Almost Home', location:'Moira', url:'https://www.almosthome-ni.org/'},
{id: '02', name: 'Mid Antrim Animal Sanctuary', location:'Antrim', url:'https://midantrim.org/'},
{id: '03', name: 'Assisi Animal Sanctuary', location:'Bangor', url:'https://www.assisi-ni.org/'},
{id: '04', name: 'Crosskennan Lane Animal Sanctuary', location:'Antrim', url:'https://www.crosskennanlane.co.uk/'}
]
</script>

<!-- https://carbondesignsystem.com/components/button/style -->
<Theme
  theme="white"
  tokens={{
    // "interactive-primary":"#C3ACD0",
    // "hover-primary": "#C3ACD0",
    // "active-primary": "#C3ACD0",
    // "button-primary":"#C3ACD0",
    // 'text-on-color': '#C3ACD0'
    "interactive-01": "#B0578D",
    "hover-primary": "#D988B9",
    "text-on-color": "#9f1853",
  }}
/>


<Header/>
<h1>Hello World!!!</h1>

<Grid>
  <Row padding>
    {#each shelters as shelter }
    <Column class="card"  sm={4} md={4} lg={4}><img src="https://img.freepik.com/free-vector/different-pets-concept_23-2148509081.jpg?size=626&ext=jpg" alt="pet shelter"/><Tag>Pets</Tag><p>Name: {shelter.name}</p><p>Location: {shelter.location}<Button class="card-button" href={shelter.url} size="small">Visit their website</Button></Column>
    {/each}
  </Row>
</Grid>

<style lang="scss">
 
  $font-stack: Helvetica, sans-serif;
  $primary-color: #C3ACD0;

  h1 {
  font: 100% $font-stack 500;
  color: $primary-color;
};
 
 img {
    width: 100%;
  }




</style>





  


