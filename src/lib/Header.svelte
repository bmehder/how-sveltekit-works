<script>
  import menuItem from '$lib/menuItems'
	
  // Component prop
  export let logo = 'Add Logo Prop!'
</script>

<header class="bg-accent">
  <div class="inner">
    <div class="logo">
      <a href="/">{@html logo}</a>
    </div>
    <nav>
      <ul>
        {#each menuItem as { name, url }}
          <li><a href={url}>{name}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--size);
  }

  .logo {
    font-size: 2rem;
    font-weight: bold;
  }

  ul {
    display: flex;
    gap: var(--size);
    list-style: none;
  }
</style>
