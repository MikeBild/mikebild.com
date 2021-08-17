<script context="module" lang="ts">
  import allProjects from '$lib/projects';

  export async function load({ page, fetch }: any) {
    return {
      props: {
        projects: allProjects.filter((project: any) => !project.isDraft),
      },
    };
  }
</script>

<script lang="ts">
  import Project from '$lib/Project.svelte';
  export let projects;
</script>

<svelte:head>
  <title>About Mike Bild</title>
</svelte:head>

<div class="content-grid">
  <div class="content w-full text-xl leading-normal text-white">
    <div style="height: 60vh;">
      <div>
        <h1
          class="break-normal text-white pt-6 
          pb-2 text-3xl md:text-4xl"
        >
          About me
        </h1>
      </div>
      <p class="py-6">
        I'm a software developer who thinks of programming as a form of craft, engineering and art! I want to make software to facilitate the creation and running of cooperatives.
        <br />
        <br />
        I'm quite interested in MTB and Gravel biking and also in surfing and sailing. Contact me if you're a cooperative and you are having problems that others potentially share.
        <br />
        <br />
        info at mikebild dot com
        <br />

        <br />
        {#if projects.length}
          Here is my portfolio
        {/if}
      </p>
    </div>
    {#each projects as project}
      <Project {project} />
    {/each}
  </div>
</div>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 15vw auto 15vw;
    grid-template-rows: 10vh minmax(30vh, auto) 10vh;
    grid-template-areas:
      '. . .'
      '. content .'
      '. . .';
  }

  .content {
    grid-area: content;
  }
</style>
