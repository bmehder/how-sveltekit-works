<script>
  export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
  <div class="inner flow">
    <slot>Fallback content</slot>
  </div>
</div>

<style>
  .hero {
    padding-block: calc(var(--size) * 10);
    background-position: center;
    background-size: cover;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  .inner {
    width: clamp(16em, 32em, 80%);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: var(--size);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  }
</style>
