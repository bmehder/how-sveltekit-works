<script>
  export let data

  const { title, featured_image, excerpt } = data.post
</script>

<h1>{title}</h1>

<img src={featured_image} alt={title} />

<div>{@html excerpt}</div>

<style>
  div :global(* + *) {
    margin-block-start: var(--size);
  }
</style>