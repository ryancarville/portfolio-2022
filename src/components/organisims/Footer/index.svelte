<script>
  import ContactDetails from '../../atoms/ContactDetails/index.svelte';
</script>
<footer>
  <ContactDetails />
  <span>©Ryan Carville 2022</span>
</footer>

<style>
  footer {
    min-height: 10vh;
    bottom: 0;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
</style>