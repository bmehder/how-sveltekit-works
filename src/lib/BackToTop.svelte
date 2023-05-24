<script>
  import { fade } from 'svelte/transition'

  const scrollToTop = () => window.scrollTo(0, 0)

  export let color = 'black'
  export let icon = '&#8593;'
  export let threshold = 1000

  let scrollY
</script>

<svelte:window bind:scrollY />

{#if scrollY > threshold}
  <div
    style="background-color: {color}"
    transition:fade
    on:click={scrollToTop}
    on:keydown
  >
    <span>{@html icon}</span>
  </div>
{/if}

<style>
  div {
    display: grid;
    place-content: center;
    width: 4rem;
    aspect-ratio: 1;
    position: fixed;
    right: 2rem;
    bottom: 1rem;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    border: 0.25rem solid white;
    border-radius: 50%;
    box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.24);
    transition: scale 150ms ease;
    opacity: 0.8;
    cursor: pointer;
  }

  div:hover {
    scale: 0.95;
  }
</style>
