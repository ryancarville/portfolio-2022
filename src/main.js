import './app.css'
import App from './App.svelte'

// only server the home page
// if path contains anything more than the domain redirect to the domain
const { origin, href, hash, pathname } = window.location;
console.log(pathname)
if (!hash && pathname.length) window.location.href = origin + '/#' + pathname;

const app = new App({
  target: document.getElementById('app')
})

export default app
