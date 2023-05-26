<script>
  import Hamburger from './Hamburger.svelte'
  import Close from './Close.svelte'

	// Component prop
	export let logo = 'Add Logo Prop!'

	let isOpen = false

	const toggleMenu = () => isOpen = !isOpen
	const closeMenu = () => isOpen = false

	let innerWidth

	$: if (innerWidth > 768) isOpen = false
</script>

<svelte:window bind:innerWidth />

<header class="bg-accent">
	<div class="inner">		
		<div class="logo">
			<a href="/">{@html logo}</a>
		</div>
		<span on:click={toggleMenu} on:keydown>
			{#if isOpen}
				<Close />
			{:else}
				<Hamburger />
			{/if}
		</span>
		<nav>
			<ul class:isOpen>
				<li><a on:click={closeMenu} href="/">Home</a></li>
				<li><a on:click={closeMenu} href="/about">About</a></li>
				<li><a on:click={closeMenu} href="/gallery">Gallery</a></li>
				<li><a on:click={closeMenu} href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	div {
		position: relative;
	}
	
	.logo {
		font-size: 2rem;
		font-weight: bold;
	}

	span {
		position: absolute;
		top: 3rem;
		right: 3rem;
	}
	
	ul {
		display: none;
		flex-direction: column;
		gap: var(--size);
		margin-block-start: 1.5rem;
		list-style: none;
	}
	
	.isOpen {
		display: flex;
		min-height: 100dvh;
	}

	@media (min-width: 48em) {
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			gap: var(--size);
		}

		span {
			display: none;
		}
		
		ul {
			display: flex;
			flex-direction: row;
			margin-block-start: initial;
		}
	}
</style>