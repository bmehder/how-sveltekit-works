<script>
  import menuItem from '$lib/menuItems'
  import { slide } from 'svelte/transition'
  import Hamburger from './Hamburger.svelte'
  import Close from './Close.svelte'

  // Component prop
  export let logo = 'Add Logo Prop!'

  // Component State
  let isOpen = false

  const toggleMenu = () => (isOpen = !isOpen)
  const closeMenu = () => (isOpen = false)
</script>

<header class="bg-accent">
  <div class="inner">
    <div class="top">
      <div class="logo">
        <a href="/">{@html logo}</a>
      </div>
      <div class="trigger" on:click={toggleMenu} on:keypress>
        {#if isOpen}
          <Close />
        {:else}
          <Hamburger />
        {/if}
      </div>
    </div>
    {#if isOpen}
      <nav transition:slide>
        <ul>
          {#each menuItem as { name, url }}
            <li><a on:click={closeMenu} href={url}>{name}</a></li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</header>

<style>
  .top {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;
  }

  ul {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    gap: var(--size);
    padding-block-start: var(--size);
    font-size: var(--size);
    list-style: none;
  }
</style>
