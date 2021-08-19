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

<div>
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
    Contact me if you're a cooperative and you are having problems that others potentially share.    
    <br />
    Personally I'm quite interested in Travel, Bikepacking, MTB and Gravel biking, ski touring and also in SUP, surfing and sailing. 
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