<script>
  import Navbar from '../components/organisims/Navbar/index.svelte';
  import Content from '../components/organisims/Content/index.svelte';
  import Footer from '../components/organisims/Footer/index.svelte';
  import About from '../components/molecules/About/index.svelte';
  import Skills from '../components/molecules/Skills/index.svelte';
  import ProjectCard from '../components/molecules/ProjectCard/index.svelte';
  import CookieBanner from '../components/atoms/CookiesBanner/index.svelte';
  import { allProjects } from '../staticData/projects';
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
