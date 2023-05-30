<script>
  import { browser } from '$app/environment';

  export let colors = {}

  const setCustomPropertyOnBody = ([key, val]) => document.body.style.setProperty(key, val)

  $: browser && Object.entries(colors).forEach(setCustomPropertyOnBody)
</script>

<aside>
  {#each Object.entries(colors) as [key]}
    <div>
      <label for="{key}">{key.replace('--', '')}</label>
      <input type="color" name="{key}" bind:value={colors[key]} />
    </div>
  {/each}
</aside>

<style>
  aside {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3em, 1fr));
    gap: var(--size);
    padding: var(--size);
    background-color: #161616;
    color: white;
    border-radius: 1rem;
    box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.32);
    opacity: 0.8;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--size) / 4);
  }
  label {
    text-transform: capitalize;
  }
  input {
    cursor: pointer;
  }
</style>
