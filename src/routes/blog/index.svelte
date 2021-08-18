<script context="module" lang="ts">
  const postFiles = import.meta.glob('./*.md');

  let body = [];

  for (const path in postFiles) {
    body.push(postFiles[path]().then(({ metadata }) => metadata));
  }

  export async function load({ page, fetch }) {
    const posts = await Promise.all(body);

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import Tag from '$lib/Tag.svelte';
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div>
  <h1 class="break-normal text-white pt-6 pb-2 text-3xl md:text-4xl">Recent posts</h1>
  <ul class="list-none">
    {#each posts as { title, tags, outline, slug, is_draft }}
      <li class="list-none">
        {#if !is_draft}
          <a class="text-yellow-500 space-y-3 no-underline hover:no-underline" rel="prefetch" href="blog/{slug}">
            <h2>
              {title}
            </h2>

            <p class="text-white text-base">
              {outline}
            </p>

            <p class="text-sm font-normal text-gray-500">
              Tags: {#each tags as tag}
                <Tag {tag} />
              {/each}
            </p>
          </a>
        {:else}
          <a class="text-gray-500 space-y-3 no-underline hover:no-underline" href="/blog">
            <h2>
              {title}
            </h2>

            <p class="text-white text-base">
              {outline}
            </p>

            <p class="text-sm font-normal text-gray-500">
              Tags: <Tag tag={{ name: 'Comming soon!' }} />
              {#each tags as tag}
                <Tag {tag} />
              {/each}
            </p>
          </a>
        {/if}
      </li>
    {/each}
  </ul>
</div>
