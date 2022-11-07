import Home from './routes/Home/index.svelte';
import NotFound from './routes/NotFound/index.svelte';

export const routes = {
  '/': Home,
  '*': NotFound,
};
