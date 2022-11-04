<script>
  import { skills } from '../../../staticData/skills';
</script>
<div>
  <h2>Skills</h2>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>

<style>
  div {
    max-width: 100vw;
    margin: 0 auto 0 auto;
    text-align: center;
    padding: 0 1em 0 1em;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 2em;
  }
  @media only screen and (min-width: 700px) {
    div {
      text-align: left;
    }
    h2 {
      text-align: center;
    }
    ul {
      grid-template-columns: repeat(5, auto);
      max-width: 100vw;
    }
  }
</style>