<script lang="ts">
	import setupVault from '$lib/flow/actions/setupVault?raw';
	import CodeBlockModal from './CodeBlockModal.svelte';
	import setupVaultTx from '$lib/flow/cadence/transactions/setup_vault.cdc?raw';

	const codeBlocks = [
		{
			codeTitle: 'setupVault.ts',
			code: `${setupVault}`,
			lang: 'javascript'
		},
		{
			codeTitle: 'setup_vault.cdc',
			code: `${setupVaultTx}`,
			lang: 'cadence'
		}
	];
</script>

<CodeBlockModal id="setup-vault-transaction" {codeBlocks} codeBlockType="transaction">
	<div class="column-2">
		<h3><strong>setupVault</strong> transaction</h3>
		<p class="small">
			This is the FCL code that runs a transaction to setup a vault for the connected user.
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
