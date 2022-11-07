<script>
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import {routes} from './routes';
  // only server the home page
  // if path contains anything more than the domain reriedct to the domain
  onMount(() => {
    const url = window.location.href;
    if (url.length > window.location.origin.length + 1) {
      window.location.href = window.location.origin + '/';
    }
  });

</script>
<Router {routes} />
