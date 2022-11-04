<script>
  import { fly } from 'svelte/transition'
  const getCookie = (name) => {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return true;
  }
  let showBanner = getCookie('cookieBanner') === "false" ? false : true;
  const handleShowBanner = () => {
    showBanner = !showBanner;
    document.cookie = 'cookieBanner=false'
  }
</script>

{#if showBanner}
  <div transition:fly="{{ y: 200, duration: 2000 }}">
    <span>
      <button type="button" on:click={handleShowBanner}>X</button>
      <p>This website uses cookies, but at no time will it sotre any personal data.</p>
    </span>
  </div>
{/if}

<style>
  div {
    width: 100vw;
    height: auto;
    color: white;
    bottom: 0;
    position: sticky;
    border-radius: 1em 1em 0 0;
    text-align: center;
    margin: 0 auto 0 auto;
  }
  span {
    width: 100%;
    background-color: blue;
    padding: 1em;
    color: white;
    bottom: 0;
    position: absolute;
    border-radius: 1em 1em 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    left: auto;
    right: auto;
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
    font-weight: 800;
    font-size: 1.5em;
    cursor: pointer;
  }
  @media only screen and (min-width: 700px) {
    div {
      width: 40vw;
    }
    span > p {
      text-align: center;
      width: 100%;
      margin: 0;
    }
  }
</style>