<script>
  import ContactDetails from '../../atoms/ContactDetails/index.svelte';
  let innerWidth = window.innerWidth;
  let isMobile = window.innerWidth < 700 ? true : false;
  const handleIsMobile = () => {
    if (innerWidth > 700) isMobile = false;
    else { isMobile = true; }
  }
</script>

<svelte:window
  on:resize={handleIsMobile}
	bind:innerWidth
/>
<footer>
  {#if isMobile}
    <ContactDetails />
  {/if}
  <span>©Ryan Carville 2022</span>
</footer>

<style>
  footer {
    min-height: 10vh;
    bottom: 0;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #BADA55;
    color: white;
  }
  span{
    margin-top: 1em;
  }
</style>