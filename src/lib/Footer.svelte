<script>
  import Colors from './Colors.svelte'

  // Component prop
  export let text = ''

  const year = new Date().getFullYear()
</script>

<footer class="bg-dark">
  <div class="inner">
    <div>
      <Colors />
    </div>
    <p>© Copyright {year} {text} All rights reserved.</p>
  </div>
</footer>

<style>
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: calc(var(--size) * 2);
  }
  .inner > * {
    text-align: center;
  }
  @media (min-width: 48.1em) {
    .inner {
      flex-direction: row;
      align-items: center;
    }
    .inner > * {
      flex: 1;
      text-align: initial;
    }
    .inner div {
      order: 2;
    }
    .inner p {
      order: 1;
    }
  }
</style>
