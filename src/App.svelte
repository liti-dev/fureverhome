<script lang="ts">
  import {Button, Column,  Grid, Row, Tag, Theme} from "carbon-components-svelte"; 
  // import ExpandableSection from "./components/ExpandableSection.svelte";
  import ExpandableTile from "./components/ExpandableTile.svelte";
  import Hero from './components/Hero.svelte'
  import ShelterCard from "./components/ShelterCard.svelte"
  

//   const shelters = [
//     {id: '01', name: 'Almost Home', location:'Moira', url:'https://www.almosthome-ni.org/'},
// {id: '02', name: 'Mid Antrim Animal Sanctuary', location:'Antrim', url:'https://midantrim.org/'},
// {id: '03', name: 'Assisi Animal Sanctuary', location:'Bangor', url:'https://www.assisi-ni.org/'},
// {id: '04', name: 'Crosskennan Lane Animal Sanctuary', location:'Antrim', url:'https://www.crosskennanlane.co.uk/'},
// {id: '05', name: 'Play for Strays', location:'Antrim', url:'https://playforstrays.org.uk/'},
// {id: '06', name: 'Paws and People', location:'Banbridge', url:'https://pawsandpeople.wixsite.com/pawsandpeopleni'},

// ]
const items = [
  {
    component: ShelterCard,
    props:{item:{id: '01', name: 'Almost Home', location:'Moira', url:'https://www.almosthome-ni.org/'},
  }},
  {
    component: ShelterCard,
    props:{item:{id: '02', name: 'Almost Home 2', location:'Moira', url:'https://www.almosthome-ni.org/'},
  }},
  
  {
    component: ShelterCard,
    props:{item:{id: '03', name: 'Almost Home 3', location:'Moira', url:'https://www.almosthome-ni.org/'},
  }},
  {
    component: ShelterCard,
    props:{item:{id: '04', name: 'Almost Home 4', location:'Moira', url:'https://www.almosthome-ni.org/'},
  }},
  {
    component: ShelterCard,
    props:{item:{id: '05', name: 'Almost Home 5', location:'Moira', url:'https://www.almosthome-ni.org/'},
  }},
  {
    component: ShelterCard,
    props:{item:{id: '06', name: 'Almost Home 6', location:'Moira', url:'https://www.almosthome-ni.org/'},
  }},
   
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

<Hero/>
<ExpandableTile itemsAbove={2} title={"More shelters"} items={items}/>

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





  


