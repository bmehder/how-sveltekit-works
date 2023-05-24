<script>
  import Card from '$lib/Card.svelte'
  export let data
</script>

<h1>Gallery</h1>

<ul class="auto-grid">
  {#each data.posts.posts as post}
    <Card {post} buttonText="More"/>
  {/each}
</ul>