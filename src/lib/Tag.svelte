<script>
  export let tag;
</script>

<a href={tag.link} target="_blank">
  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 text-yellow-500 border-2 border-yellow-500 mx-1 my-1 hover:bg-yellow-500 hover:text-black">
    {tag.name}
  </span>
</a>
