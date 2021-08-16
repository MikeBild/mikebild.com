<script lang="ts" context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    };
  }
</script>

<script lang="ts">
  export let status;
  export let error;
</script>

<div class="h-full flex flex-col justify-center text-center my-auto mx-auto">
  <div class="text-white">
    <h1>{status}</h1>
    <p>{error.message}</p>
  </div>
</div>

<style>
  h1,
  p {
    @apply mx-auto my-0;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
