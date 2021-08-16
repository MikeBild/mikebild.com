<svelte:head>
  <title>mikebild.com</title>
</svelte:head>

<div class="h-full flex flex-col justify-center text-center my-auto mx-auto">
  <p class="text-base text-gray-400 md:text-xl">Welcome!</p>
  <h2 class="headline tracking-tight leading-10 font-extrabold text-white mt-3 md:mt-10">
    <a href="https://github.com/mikebild" class="leading-6 text-blue-500 hover:text-blue-300"> coding </a>
    <br class="xl:hidden" />
    inspirations
  </h2>
  <p class="mt-3 md:mt-10 text-base text-gray-400 md:text-xl">teaching yourself any skill</p>
  <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
    <div class="rounded-md">
      <a
        href="/blog"
        class="w-full flex items-center justify-center px-8 py-3 border-4 border-blue-500 text-base text-black leading-6 font-medium rounded-md bg-blue-500 hover:bg-black hover:text-blue-500 focus:outline-none focus:ring-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
      >
        Blog
      </a>
    </div>
    <div class="rounded-md mt-3 md:ml-3 md:mt-0">
      <a
        href="/about"
        class="w-full flex items-center justify-center px-8 py-3 border-4 text-base leading-6 font-medium rounded-md text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-black focus:outline-none focus:ring-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
      >
        About
      </a>
    </div>
  </div>
</div>

<style lang="postcss">
  .headline {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    .headline {
      font-size: 5rem;
    }
  }
</style>
