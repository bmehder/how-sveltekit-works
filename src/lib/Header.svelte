<script>
	export let logo = 'Add Logo Prop!'
</script>

<header class="bg-accent">
	<div class="inner">		
		<div class="logo">
			<a href="/">{@html logo}</a>
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
		flex-wrap: wrap;
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