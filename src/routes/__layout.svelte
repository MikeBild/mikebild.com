<script lang="ts">
  import '../global.css';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
  import { onMount } from 'svelte';

  let loaded = false;

  import { page } from '$app/stores';
  onMount(async () => {
    loaded = true;
  });
</script>

{#if !loaded}
  <section class="overflow-x-hidden w-screen relative">
    <div class="fade-in h-screen flex flex-col items-center justify-center">
      <h1 class="font-sans text-white sm:text-xl lg:text-3xl">CODING</h1>
      <div class="lds-heart"><div /></div>
    </div>
  </section>
{:else}
  <div class="grid">
    <nav class="nav">
      <Nav path={$page.path} />
    </nav>

    <main class="main h-full text-white font-sans">
      <slot />
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
</style>
