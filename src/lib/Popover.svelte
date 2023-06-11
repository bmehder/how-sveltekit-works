<script>
  export let delay = 0

  const openModal = (elem, ms) => setTimeout(() => elem.showPopover(), ms)
  const hideModal = evt => evt.target.parentElement.hidePopover()
</script> 
 
<div use:openModal="{delay}" popover>
	<slot>Fallback content</slot>
	<button on:click={hideModal}>Close</button>
</div>

<style>
	div:popover-open {
		width: clamp(16em, 32em, 80%);
		display: grid;
		place-content: center;
		gap: 1.5rem;
		margin: auto;
    padding: calc(var(--size) * 2);
		line-height: 1.5;
    border-radius: 0.5rem;
		animation-delay: 400ms;
		animation: slideDown 400ms;
	}
	
	div::backdrop {
		background-color: black;
		opacity: 0.8;
		animation: fade 200ms;
	}
	
	@keyframes fade { 
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.8;
		}
	}
	
	@keyframes slideDown { 
		0% {
			transform: translateY(-500%);
		}
		100% {
			transform: translateY(0%);
		} 
	}
</style>