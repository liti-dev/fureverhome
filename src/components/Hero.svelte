<script lang="ts">
  import { Grid, Row, Button, Column, Tag, Theme} from "carbon-components-svelte";
 
</script>

<div class="hero-background">
  <div class="hero-text-container">
    <p>Struggling to find the perfect gift for an animal lover?</p>
    <p>Adopt rather than buy!</p>
    <div><Button class="hero-button" href="#shelters">Learn more</Button></div>
  </div> 
            
    </div>
  

<style lang="scss">
  .hero-background {
    width:full;
    height:100vh;  
    background-image:url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-pets-make-good-gift-1563986298.jpg);
    background-size: cover;
    background-position:center}
  
  .hero-text-container {
    margin: auto ;
    width: 80%;
    padding: 5rem;
    p {
      font-size: xx-large;
      color:beige;
      text-shadow: 1px 1px gray;
    }
   

  }
  
</style>