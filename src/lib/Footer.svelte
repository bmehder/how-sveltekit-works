<script>
  import Colors from './Colors.svelte'

  const colors = {
    '--accent': '#ff6347', // tomato
    '--darker': '#161616',
    '--dark': '#323232',
    '--light': '#ffffff', // white
  }

  export let text = ''

  const year = new Date().getFullYear()
</script>

<footer class="bg-dark">
  <div class="inner">
    <div>
      <Colors {colors} />
    </div>
    <p>© Copyright {year} {text} All rights reserved.</p>
  </div>
</footer>

<style>
  .inner {
    display: flex;
    flex-direction: column;
    gap: calc(var(--size) * 1.5);
    text-align: center;
  }
  .inner > * {
    flex: 1;
  }
  @media (min-width: 48em) {
    .inner {
      flex-direction: row;
      align-items: center;
      text-align: initial;
    }
    .inner :first-child {
      order: 2;
    }
    .inner :last-child {
      order: 1;
    }
  }
</style>
