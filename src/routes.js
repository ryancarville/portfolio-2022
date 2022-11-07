import Home from './routes/Home.svelte';
import NotFound from './routes/index.svelte';

export const routes = {
  '/': Home,
  '*': NotFound,
};
