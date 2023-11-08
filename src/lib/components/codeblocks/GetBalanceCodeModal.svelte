<script lang="ts">
	import getBalance from '$flow/actions/getBalance?raw';
	import CodeBlockModal from './CodeBlockModal.svelte';
	import getBalanceScript from '$lib/flow/cadence/scripts/get_balance.cdc?raw';

	const codeBlocks = [
		{
			codeTitle: 'getBalance.ts',
			code: `${getBalance}`,
			lang: 'javascript'
		},
		{
			codeTitle: 'get_balance.cdc',
			code: `${getBalanceScript}`,
			lang: 'cadence'
		}
	];
</script>

<CodeBlockModal id="get-balance-script" {codeBlocks} codeBlockType="script">
	<div class="column-2">
		<h3 class="large"><strong>getBalance</strong> script</h3>
		<p class="small">
			This is the FCL code that fetches the balance from the connected user's vault.
		</p>
	</div>
</CodeBlockModal>

<style lang="scss">
	div {
		padding-bottom: var(--space-6);
		position: sticky;
		top: 0;
		background-color: var(--clr-surface-secondary);
		z-index: 1;

		h3 {
			font-size: var(--font-size-3);
		}
	}
</style>
