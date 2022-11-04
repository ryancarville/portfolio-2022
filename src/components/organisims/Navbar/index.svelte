<script>
  import ContactDetails from '../../atoms/ContactDetails/index.svelte';

  let isCopied = false;
  const handleCopy = () => {
    const copyText = document.getElementById("email");
    navigator.clipboard.writeText(copyText.textContent);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 2000)
  }
  const handleTopScroll = () => window.scrollTo(0, 0);
</script>
<nav>
  <p on:click={handleTopScroll} on:keyup={handleTopScroll} title="Scroll to top">Ryan Carville</p>
  <span>
    <ContactDetails />
  </span>
</nav>

<style>
  nav {
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    max-height: 7vh;
    padding: 1em;
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0em 0em 2em rgb(225, 224, 224);
    border-radius: 0em 0em 1em 1em;
    font-size: 1.1em;
  }
  p {
    cursor: pointer;
  }
  
  span {
    display: none;
  }


  @media only screen and (min-width: 700px) {
    nav {
      justify-content: space-between;
    }
    span {
      display: block;
      width: 40%;
    }
  }
</style>