<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    const res = await fetch('/about.json');
    if (res.ok) {
      return {
        props: {
          projects: await res.json(),
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load about.json`),
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
  <div class="content w-full text-xl leading-normal text-white" style="font-family: Georgia, serif;">
    <div style="height: 60vh;">
      <!--Title-->
      <div class="font-sans">
        <h1
          class="font-sans break-normal text-white pt-6 
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

<!--/container-->
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
