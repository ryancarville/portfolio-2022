<script>
  import {link} from 'svelte-spa-router';
</script>
<div class={'notFoundWraper'}>
  <h1>Opps! This page was not found.</h1>
  <a href={'/'} use:link>Go Home</a>
</div>

<style>
  .notFoundWraper {
    width: 100%;
    height: 100vh;
    display: grid;
    align-content: center;
    justify-content: center;
  }
</style>