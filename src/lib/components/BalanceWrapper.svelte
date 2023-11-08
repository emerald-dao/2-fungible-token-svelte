<script lang="ts">
	export let balance: string = '';
</script>

<div class="balance-wrapper">
	<span class="small w-medium">Current Balance:</span>
	{#if balance}
		<span class="small">{Number(balance).toFixed(2)}</span>
	{:else}
		<span class="small">No balance yet</span>
	{/if}
</div>

<style lang="scss">
	.balance-wrapper {
		border: 1px solid var(--clr-primary-main);
		background-color: var(--clr-primary-badge);
		border-radius: var(--radius-1);
		padding: var(--space-3);

		span {
			&:first-child {
				color: var(--clr-primary-main);
			}
		}
	}
</style>
