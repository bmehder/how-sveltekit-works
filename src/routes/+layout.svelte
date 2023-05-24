<script>
  import '$lib/app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<div class="wrapper">
  <Header logo="SvelteKit Demo" />
  <main class="flow">
    <slot />
  </main>
  <Footer text="Anna Pollard." />
</div>

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  main {
    width: 100%;
    max-width: 64em;
    padding-block: 6em;
    padding-inline: 3em;
    margin-inline: auto;
    line-height: 1.5;
  }
</style>