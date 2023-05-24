<script>
  export let data
  console.log(data)
</script>

<h1>{data.post.title}</h1>
<img src="{data.post.featured_image}" alt="{data.post.title}">
<div>{@html data.post.excerpt}</div>