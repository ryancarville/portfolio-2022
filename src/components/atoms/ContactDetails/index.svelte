<script>
  let isCopied = false;
  const handleCopy = () => {
    const copyText = document.getElementById("email");
    navigator.clipboard.writeText(copyText.textContent);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 2000)
  }
</script>
<div class={'contactDetailsWrapper'}>
  <a
    href={"https://linkedin.com/in/ryancarville"}
    target={'_blank'}
    rel={'noopener'}
    title={'LinkedIn | Ryan Carville'}
  >
    LinkedIn
  </a>
  <a
    href={"https://github.com/ryancarville"}
    target={'_blank'}
    rel={'noopener'}
    title={'GitHub | Ryan Carville'}
  >
    GitHub
  </a>
  <a
    href={"images/ryancarville2022.pdf"}
    download
    title={'Ryan Carville CV'}
  >
    CV
  </a>
  {#if isCopied}
    <span class={'emailToolTip'}>Copied to clipboard</span>
  {:else}
    <span id={'email'} on:click={handleCopy} on:keyup={handleCopy}>ryancarville@gmail.com</span>
  {/if}
  <span>+41(79)156 23 29</span>
</div>

<style>
  .contactDetailsWrapper {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 40em;
    width: 100%;
  }
  #email {
    cursor: pointer;
    color: #646cff;
  }
  #email:hover {
    color: #222ceb;
  }
  .emailToolTip {
    position: relative;
  }
</style>