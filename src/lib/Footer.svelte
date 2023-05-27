<script>
  import Colors from './Colors.svelte'

  // Component prop
  export let text = ''

  const year = new Date().getFullYear()
</script>

<footer class="bg-dark">
  <div class="inner">
    <p>© Copyright {year} {text} All rights reserved.</p>
    <div>
      <Colors />
    </div>
  </div>
</footer>

<style>
  .inner {
    display: flex;
		flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--size);
  }
  .inner > * {
    flex: 1;
    margin-inline: auto;
  }
</style>
