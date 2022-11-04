<script>
  import Navbar from '../src/components/organisims/Navbar/index.svelte';
  import Content from '../src/components/organisims/Content/index.svelte';
  import Footer from '../src/components/organisims/Footer/index.svelte';
  import About from '../src/components/molecules/About/index.svelte';
  import Skills from '../src/components/molecules/Skills/index.svelte';
  import ProjectCard from './components/molecules/ProjectCard/index.svelte';
  import CookieBanner from '../src/components/atoms/CookiesBanner/index.svelte';
  import { allProjects } from './staticData/projects';
</script>

<main>
  <Navbar />
  <h2>Projects</h2>
  <Content>
    {#each allProjects as proj}
    <ProjectCard
      title={proj.title}
      imgAlt={proj.imgAlt}
      contentText={proj.contentText}
      imgUrl={proj.imgUrl}
      urlPath={proj.urlPath}
      repoUrl={proj.repoUrl}
      techStack={proj.techStack}
    />
    {/each}
  </Content>
  <Content>
    <About />
  </Content>
  <Content>
    <Skills />
  </Content>
  <Footer />
  <CookieBanner />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
  h2 {
    text-align: center;
    /* margin: 1.5em 0 0 0; */
  }
</style>
