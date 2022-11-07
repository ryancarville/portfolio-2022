import './app.css'
import App from './App.svelte'

// only server the home page
// if path contains anything more than the domain redirect to the domain
const { origin, href } = window.location;
if (href.length > origin.length + 1) {
  window.location.href = window.location.origin + '/';
}

const app = new App({
  target: document.getElementById('app')
})

export default app
