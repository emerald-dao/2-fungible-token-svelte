<script type="ts">
	import executeTransaction from '$flow/utils/executeTransaction';
	import * as Card from '$lib/components/Card';
	import { user } from '$stores/UserStore';
	import { Button } from '@emerald-dao/component-library';
	import setupVault from '$flow/actions/setupVault';
	import SetupVaultCodeModal from '$lib/components/codeblocks/SetupVaultCodeModal.svelte';
	import getBalance from '$flow/actions/getBalance';
	import GetBalanceCodeModal from '$lib/components/codeblocks/GetBalanceCodeModal.svelte';
	import Vault from '$lib/components/Vault.svelte';

	let balance: string = '';

	$: {
		if (!$user?.loggedIn) {
			balance = '';
		}
	}

	const handleSetupVault = async () => {
		if ($user) {
			await executeTransaction(() => setupVault());
		} else {
			alert('Please connect your wallet first');
		}
	};

	const handleGetBalance = async () => {
		if ($user) {
			balance = await getBalance($user.addr);
		} else {
			alert('Please connect your wallet first');
		}
	};
</script>

<Card.Root maxWidth="80ch">
	<Card.Section>
		<span class="w-medium small">Fungible Token DApp</span>
	</Card.Section>
	<Card.Section>
		<span class="w-medium small">1. Setup Your Vault</span>
		<span class="small">In order to receive tokens you must first setup a vault.</span>
		<div class="row-2">
			<Button size="small" on:click={handleSetupVault}>Setup Vault</Button>
			<SetupVaultCodeModal />
		</div>
	</Card.Section>
	<Card.Section>
		<span class="w-medium small">2. Mint Tokens to Your Account</span>
		<span class="small">
			Time to go back to your terminal! Look for the scripts directory and execute the
			<code>mint</code>
			function.
		</span>
	</Card.Section>
	<Card.Section>
		<span class="w-medium small">3. Get Balance</span>
		<span class="small">
			Now, we are going to run a script to get the tokens stored in your vault.
		</span>
		<div class="row-2">
			<Button size="small" on:click={handleGetBalance}>Get Balance</Button>
			<GetBalanceCodeModal />
		</div>
	</Card.Section>
	<Card.Section>
		<span class="w-medium small">4. Your Vault</span>
		<span class="small">
			Bellow, you can see your token balance. Feel free to transfer them other wallets!
		</span>
		<Vault {balance} />
	</Card.Section>
</Card.Root>
