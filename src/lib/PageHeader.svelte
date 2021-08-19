<script>
  import Tag from '$lib/Tag.svelte';
  export let title;
  export let tags;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<!--Title-->
<div class="mb-10">
  <h1 class="break-normal text-white pt-6 pb-2 text-3xl md:text-4xl">
    {title}
  </h1>
  <p class="text-sm font-normal text-gray-500">
    Tags: {#each tags as tag}
      <Tag {tag} />
    {/each}
  </p>
</div>
