<!-- This is the layout file that is used by all the routes. -->
<script>
  import '$lib/app.css'
  import menuItems from '$lib/Header/menuItems'
  import Header from '$lib/Header/Header.svelte'
  import MobileHeader from '$lib/Header/MobileHeader.svelte'
  import Footer from '$lib/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'

  const mobileThreshold = 767

  // Component State
  let innerWidth  
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
  {#if innerWidth > mobileThreshold}
    <Header logo="SvelteKit Demo" {menuItems} />
  {:else}
    <MobileHeader logo="SvelteKit" {menuItems} />
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
