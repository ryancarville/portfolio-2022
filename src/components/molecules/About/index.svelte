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
    <img src={'images/ryanCarville.jpg'} alt={"Ryan Carville"} />
    <p>
      Accomplished problem solver and creative expert with five years experience building full-stack platforms, scaling projects/platforms, as well as creating and deploying commercial imagery as content. Providing thought partnership, leading with expertise to advise and deliver for clients and employers. Demonstrating high learning agility, changing careers while remaining focused on using the existing mastery of skills in new and different contexts. Comfortable with high levels of ambiguity and self-motivating. Enjoy working in fast-paced environments, am focused on delivering results, and am excited by new and complex challenges.
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
    padding: 1em;
  }
  h2 {
    margin: 0 0 1em 0;
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
      font-size: 1.2em;
      align-items: flex-end;
    }
    .inforWrapper {
      flex-direction: row;
      margin: 0 auto 0 auto;
      width: 80%;
    }
    img {
      max-width: 15vw;
      float: left;
      margin: 0 2em 0 0;
    }

  }
</style>