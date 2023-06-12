<!-- This is the layout file that is used by all the routes. -->
<script>
  import { page } from '$app/stores';
  import '$lib/app.css'
  import menuItems from '$lib/Header/menuItems'
  import Header from '$lib/Header/Header.svelte'
  import MobileHeader from '$lib/Header/MobileHeader.svelte'
  import Footer from '$lib/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'
  import Popover from '$lib/Popover.svelte'

  const mobileThreshold = 768

  // Component State
  let innerWidth = 769
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
  {#if innerWidth > mobileThreshold}
    <Header logo="SvelteKit Demo" {menuItems} />
  {:else}
    <MobileHeader logo="SvelteKit" {menuItems} />
  {/if}

  {#if $page.route.id === '/'}
    <img src="https://picsum.photos/1200/600" alt="placeholder">
  {/if}

  <main class="flow">
    <slot />
  </main>

  <Footer text="Anna Pollard." />
</div>

<BackToTop color="dodgerblue" />

<Popover delay="2000">
  <h2>My content</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nam dignissimos asperiores, neque eaque sequi pariatur ex blanditiis accusantium iusto eveniet dolor nihil molestias autem soluta dicta doloribus eius voluptates officia rerum placeat mollitia deleniti ab facilis? Quam mollitia exercitationem officia, perspiciatis nihil iste fugiat eum tenetur nemo debitis magni.</p>
</Popover>

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  main {
    width: 100%;
    max-width: var(--max-width);
    padding-block: calc(var(--size) * 2);
    padding-inline: calc(var(--size) * 3);
    margin-inline: auto;
    line-height: 1.5;
  }
</style>
