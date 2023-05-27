<script>
  import { onMount } from 'svelte'

  let document
  let accent = '#ff6347'
  let darker = '#161616'
  let dark = '#323232'
  let light = '#ffffff'

  $: document?.body?.style.setProperty('--accent', accent)
  $: document?.body?.style.setProperty('--darker', darker)
  $: document?.body?.style.setProperty('--dark', dark)
  $: document?.body?.style.setProperty('--light', light)

  onMount(() => (document = window.document))
</script>

<aside>
  <div>
    <label for="accent">Accent</label>
    <input type="color" name="accent" bind:value={accent} />
  </div>

  <div>
    <label for="body">Body</label>
    <input type="color" name="body" bind:value={darker} />
  </div>

  <div>
    <label for="text">Text</label>
    <input type="color" name="text" bind:value={light} />
  </div>

  <div>
    <label for="footer">Footer</label>
    <input type="color" name="footer" bind:value={dark} />
  </div>
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
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.32);
    opacity: 0.8;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--size) / 4);
  }
  input {
    cursor: pointer;
  }
</style>
