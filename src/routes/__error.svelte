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

<script>
  export let status;
  export let error;
</script>

<div style="color: white">
  <h1>{status}</h1>

  <p>{error.message}</p>

  <pre>{JSON.stringify(error, null, 4)}</pre>
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
