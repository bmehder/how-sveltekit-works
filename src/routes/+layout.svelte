<script>
  import '$lib/app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import BackToTop from '../lib/BackToTop.svelte'
</script>

<div class="wrapper">
  <Header logo="SvelteKit Demo" />

  <main class="flow">
    <slot />
  </main>
  
  <Footer text="Anna Pollard." />
</div>

<BackToTop color="dodgerblue" />

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  main {
    width: 100%;
    max-width: var(--max-width);
    padding-block: calc(var(--size) * 4);
    padding-inline: calc(var(--size) * 2);
    margin-inline: auto;
    line-height: 1.5;
  }
</style>