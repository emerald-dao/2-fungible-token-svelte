<script lang="ts">
	import { user } from '$stores/UserStore';
	import * as Card from '$lib/components/Card';
	import { Button } from '@emerald-dao/component-library';
	import executeTransaction from '$flow/utils/executeTransaction';
	import transfer from '$flow/actions/transfer';
	import TransferCodeModal from './codeblocks/TransferCodeModal.svelte';
	import BalanceWrapper from './BalanceWrapper.svelte';

	export let balance: string = '';

	let recipient: string;
	let amount: number;

	$: {
		if (!$user?.loggedIn) {
			recipient = '';
			amount = NaN;
		}
	}
</script>

<Card.Root>
	{#if $user?.addr}
		<Card.Section>
			<BalanceWrapper {balance} />
		</Card.Section>
		{#if balance}
			<Card.Section>
				<span class="w-medium small">Transfer</span>
				<div class="column-2">
					<input
						class="input-field"
						type="text"
						placeholder="Insert wallet address"
						bind:value={recipient}
					/>
					<input class="input-field" type="number" placeholder="Amount" bind:value={amount} />
					<div class="row-2">
						<Button
							size="small"
							on:click={() => executeTransaction(() => transfer(recipient, amount))}
							>Transfer</Button
						>
						<TransferCodeModal />
					</div>
				</div>
			</Card.Section>
		{/if}
	{:else}
		<Card.Section>
			<span class="small"><em>Connect wallet to see your collection</em></span>
		</Card.Section>
	{/if}
</Card.Root>
