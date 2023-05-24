<script>
  export let data
</script>

<h1>Gallery</h1>

<div>
  {#each data.posts.posts as post}
    <a href="/gallery/{post.slug}"><h2>{post.title}</h2></a>
    <p>{@html post.excerpt}</p>
  {/each}
</div>
