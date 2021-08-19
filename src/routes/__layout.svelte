<script lang="ts">
  import '../global.css';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let loaded = false;
  onMount(async () => {
    loaded = true;
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" as="style" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
</svelte:head>

{#if !loaded}
  <section class="overflow-x-hidden w-screen relative">
    <div class="fade-in h-screen flex flex-col items-center justify-center">
      <h1 class="text-white sm:text-xl lg:text-3xl">CODING</h1>
      <div class="lds-heart"><div /></div>
    </div>
  </section>
{:else}
  <div class="grid">
    <nav class="nav">
      <Nav path={$page.path} />
    </nav>

    <main class="main h-full text-white">
      <div class="main-grid">
        <div class="content w-full text-xl leading-normal text-white">
          <slot />
        </div>
      </div>
    </main>

    <footer class="footer">
      <Footer />
    </footer>
  </div>
{/if}

<style>
  .grid {
    display: grid;
    grid-template-rows: minmax(10vh, auto) minmax(60vh, auto) 10vh;
    grid-template-areas:
      'nav'
      'main'
      'footer';
  }

  .nav {
    grid-area: nav;
  }

  .main {
    grid-area: main;
  }

  .footer {
    grid-area: footer;
  }

  .main-grid {
    display: grid;
    grid-template-columns: 15vw 70vw 15vw;
    grid-template-rows: 0 minmax(60vh, auto) 5vh;
    grid-template-areas:
      '. . .'
      '. content .'
      '. . .';
  }

  .content {
    grid-area: content;
  }
</style>
