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
<div class={'aboutWrapper'}>
  <h2>About</h2>
  <span class={'inforWrapper'}>
    <img src={'/ryanCarville.jpg'} alt={"Ryan Carville"} />
    <p>
      Accomplished problem solver and creative expert with extensive experience building full stack platforms, scaling projects/platforms, as well as creating and deploying commercial imagery as content. Providing thought partnership, leading with expertise to advise and deliver for clients and employers. Demonstrating high learning agility, changing career while remaining focused on using existing mastery of skills in new and different contexts. Comfortable with high levels of ambiguity and self motivating. Enjoy working in fast paced environments, focused on delivering results, and excited by new and complex challenges.
    </p>
  </span>
  {#if isMobile}
    <ContactDetails />
  {/if}
</div>

<style>
  .aboutWrapper {
    max-width: 100vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  h2 {
    text-align: center;
  }
  .inforWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  img {
    max-width: 70vw;
    border-radius: 50%;
    margin: 0 auto 0 auto;
  }
  @media only screen and (min-width: 700px) {
    .aboutWrapper {
      padding: 3em;
    }
    .inforWrapper {
      flex-direction: row;
    }
    img {
      max-width: 15vw;
      float: left;
      margin: 0 2em 0 0;
    }
    p {
      margin: auto 0 auto 0;
    }
  }
</style>