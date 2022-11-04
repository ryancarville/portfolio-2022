<script>
  export let title;
  export let imgUrl;
  export let imgAlt;
  export let contentText;
  export let urlPath;
  export let repoUrl;
  export let techStack;
</script>

<div class={'cardWrapper'}>
  <div>
    <h2>{title}</h2>
    <p>{contentText}</p>
  </div>
  <img src={imgUrl} alt={imgAlt} />
  <div class={'techStack'}>
    <h4>Tech Stack</h4>
    <ul>
      {#each techStack as tech}
        <li>
          <img src={tech.logoPath} alt={tech.name} />
          {tech.name}
        </li>
      {/each}
    </ul>
  </div>
  <span>
    <a target={"_blank"} rel="noopener" href={urlPath}>Live Site</a>
    {#if repoUrl}
      <a target={"_blank"} rel="noopener" href={repoUrl}>Repository</a>
    {/if}
  </span>
</div>

<style>
  .cardWrapper {
    width: 100%;
    border-radius: 2em;
    padding: 2em;
    box-shadow: 0em 0.5em 1em 0.5em rgb(241, 240, 240);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .techStack {
    width: auto;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  img {
    max-width: 100%;
    max-height: 25em;
    object-fit: cover;
    border: 1px solid rgb(213, 213, 213);
    border-radius: 1em;
    padding: 0.5em
  }
  h2 {
    margin: 0;
  }

  h4 {
    margin: 0;
  }
  ul  {
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto 0.5em auto;
    padding: 1em 0 0 0;
  }
  li {
    margin: 0em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  li img {
    max-width: 2em;
    border: none;
    border-radius: 0;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span a {
    margin: 1em;
  }
  @media only screen and (min-width: 700px) {
    .cardWrapper {
      max-width: 20vw;
    }
  }
</style>