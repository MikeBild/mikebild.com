<script context="module" lang="ts">
  const postFiles = import.meta.glob('./*.md');

  let body = [];

  for (const path in postFiles) {
    body.push(postFiles[path]().then(({ metadata }) => metadata));
  }

  export async function load({ page, fetch }) {
    const result = await Promise.all(body);
    return {
      props: {
        posts: result,
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

<!--Title-->
<div>
  <h1 class="break-normal text-white pt-6 pb-2 text-3xl md:text-4xl">Recent posts</h1>

  <ul class="list-none">
    {#each posts as { title, tags, outline, slug }}
      <li class="list-none">
        <a class="text-blue-500 space-y-3 no-underline hover:no-underline" rel="prefetch" href="blog/{slug}">
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
      </li>
    {/each}
  </ul>
</div>
