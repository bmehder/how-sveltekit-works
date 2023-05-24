<script>
	export let post
	export let buttonText = "Something"
	
	const { featured_image, title, excerpt } = post
</script>

<li class="bg-light">
	<a href="/gallery/{post.slug}">
		<img class="square" src="{featured_image}" alt="placeholder">
	</a>
	<div class="content flow">
		<h2>
			<a href="/gallery/{post.slug}">{@html title}</a>
		</h2>
		<div>{@html excerpt}</div>
		<a class="button" href="/gallery/{post.slug}">{buttonText}</a>
	</div>
</li>

<style>		
	.content {
		padding: 1.5em;
	}

	.content div :global(* + *) {
    margin-block-start: 1.5rem;
  }
</style>

  