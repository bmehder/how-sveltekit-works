<script>
	// Component prop
	export let text = ''
	
	const year = new Date().getFullYear()
</script>

<footer class="bg-dark">
	<div class="inner">© Copyright {year} {text} All rights reserved.</div>
</footer>

<style>
	div {
		text-align: center;
	}
</style>