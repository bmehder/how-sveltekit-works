<script>
  export let delay = 0

  const openModal = (elem, ms) => setTimeout(() => elem.showPopover(), ms)
</script> 
 
<div id="modal" use:openModal="{delay}" popover>
	<p>I am a Modal!</p>
</div>

<style>
	#modal:popover-open {
    width: 32%;
    min-width: 16em;
    aspect-ratio: 1;
		display: grid;
		place-items: center;
		gap: 1rem;
		margin: auto;
    padding: var(--size);
    border-radius: 0.5rem;
		animation: slideDown 600ms;
	}
	
	#modal::backdrop {
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
			width: 0%;
			transform: translateY(-500%);
		}
		100% {
			width: 32%;
			transform: translateY(0%);
		} 
	}
</style>