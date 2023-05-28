<script>
	// Component props
	export let post
	export let buttonText = "Something"
	
	// Object destructuring
	const { featured_image, title, excerpt, slug } = post
</script>

<li class="bg-light">
	<a href="/gallery/{slug}">
		<img class="square" src="{featured_image}" alt="placeholder">
	</a>
	<div class="content flow">
		<h2>
			<a href="/gallery/{slug}">{@html title}</a>
		</h2>
		<div>{@html excerpt}</div>
		<a class="button" href="/gallery/{slug}">{buttonText}</a>
	</div>
</li>

<style>		
	.content {
		padding: var(--size);
	}

	.content div :global(* + *) {
    margin-block-start: var(--size);
  }
</style>

  