<script>
  import { browser } from '$app/environment'

  export let colors = {}

  const setCustomProperty = ([key, val], elem) => elem.style.setProperty(key, val)

  const setColor = color => setCustomProperty(color, document.body)

  $: browser && Object.entries(colors).forEach(setColor)
</script>

<aside class="auto-grid">
  {#each Object.entries(colors) as [key]}
    <div>
      <label for={key}>{key.substring(2)}</label>
      <input type="color" name={key} bind:value={colors[key]} />
    </div>
  {/each}
</aside>

<style>
  aside {
    --min: 3em;
    gap: var(--size);
    padding: var(--size);
    background-color: #161616;
    color: white;
    border-radius: 1rem;
    box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.32);
    opacity: 0.8;
  }
  div {
    display: grid;
    place-items: center;
    gap: calc(var(--size) / 4);
  }
  label {
    text-transform: capitalize;
  }
  input {
    cursor: pointer;
  }
</style>
