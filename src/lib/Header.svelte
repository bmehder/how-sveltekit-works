<script>
	export let logo = "Fallback"
</script>

<header class="bg-accent">
	<div class="inner">		
		<div class="logo">
			<a href="/">{logo}</a>
		</div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/gallery">Gallery</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size);
	}
	
	.logo {
		font-size: 2rem;
		font-weight: bold;
	}
			
	ul {
		display: flex;
		gap: var(--size);
		list-style: none;
	}
</style>