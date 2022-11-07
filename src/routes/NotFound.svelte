<script>
  import {link} from 'svelte-spa-router';
</script>

<div class={'notFoundWraper'}>
  <div class={'logo'}>
    <span class={'red'}>4</span>
    <span class={'black'}>0</span>
    <span class={'redLast'}>4</span>
  </div>
  <span id={'text'}>
    <h2>Opps! This page was not found.</h2>
    <a href={'/'} use:link>Go Home</a>
  </span>
</div>

<style>
  #text {
    margin-top: 1.5em;
  }
  .notFoundWraper {
    width: 100vw;
    height: 100vh;
    display: grid;
    align-content: center;
    justify-content: center;
    white-space: pre-wrap;
    line-height: 1.8em;
    padding: 2em;
    text-align: center;
  }
  .logo {
    display: flex;
    margin-bottom: 0;
  }
  .red {
    color: red;
    font-size: 10em;
    font-weight: 900;
    animation: 2.5s ease-in-out 1s 1 forwards fourHinge;
    margin: 0;
  }
  .redLast {
    color: red;
    font-size: 10em;
    animation: 2.5s ease-in-out 3.4s 1 forwards lastFourHinge;
    font-weight: 900;
    margin: 0;
  }
  .black {
    animation: 0.7s ease-in-out 3.1s 1 forwards hinge;
    font-size: 10em;
    font-weight: 900;
  }

  @keyframes fourHinge {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(53deg);
    }
  }

  @keyframes lastFourHinge {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(50deg) translateX(100vh);
    }
  }

  @keyframes hinge {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(80deg) translateX(20px);
    }
  }
</style>