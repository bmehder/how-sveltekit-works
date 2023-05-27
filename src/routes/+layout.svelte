<!-- This is the layout file that is used by all the routes. -->
<script>
  import '$lib/app.css'
  import Header from '$lib/Header.svelte'
  import MobileHeader from '$lib/MobileHeader.svelte'
  import Footer from '$lib/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'

  // Component State
  let innerWidth
  
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
  {#if innerWidth > 767}
    <Header logo="SvelteKit Demo" />
  {:else}
    <MobileHeader logo="SvelteKit" />
  {/if}

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
    padding: calc(var(--size) * 3);
    margin-inline: auto;
    line-height: 1.5;
  }
</style>
