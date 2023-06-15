<!-- This is the layout file that is used by all the routes. -->
<script>
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import { page } from '$app/stores'
  import menuItems from '$lib/Header/menuItems'
  import Header from '$lib/Header/Header.svelte'
  import MobileHeader from '$lib/Header/MobileHeader.svelte'
  import Hero from '$lib/Hero.svelte'
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
    <Hero image="/hero.jpg">
      <h2>Welcome to my website!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Hero>
  {/if}

  <main class="flow">
    <slot />
  </main>

  <Footer text="Anna Pollard." />
</div>

<BackToTop color="dodgerblue" />

<Popover delay="2000">
  <h2>My content</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nam dignissimos
    asperiores, neque eaque sequi pariatur ex blanditiis accusantium iusto eveniet dolor
    nihil molestias autem soluta dicta doloribus eius voluptates officia rerum placeat
    mollitia deleniti ab facilis? Quam mollitia exercitationem officia, perspiciatis nihil
    iste fugiat eum tenetur nemo debitis magni.
  </p>
</Popover>

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  main {
    width: var(--width);
    max-width: var(--max-width);
    padding-block-start: var(--double-size);
    padding-block-end: var(--triple-size);
    margin-inline: auto;
    line-height: 1.5;
  }
</style>

