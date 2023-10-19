<script type="ts">
	import getBalance from '$flow/actions/getBalance';
	import setupVault from '$flow/actions/setupVault';
	import transferTokens from '$flow/actions/transferTokens';
	import executeTransaction from '$flow/utils/executeTransaction';
	import dappData from '$lib/config/dappData';
	import { user } from '$stores/UserStore';

	let balance;
	let address;
	let amount;

	const handleGetGreeting = async () => {
		if ($user) {
			balance = await getBalance($user.addr);
		}
	};
</script>

<section class="container">
	<span>Welcome to</span>
	<h1>{dappData.title}</h1>
	<p>{dappData.description}</p>
	<p>Crafted by {dappData.author}</p>

	<button on:click={() => executeTransaction(() => setupVault())}>Setup Vault</button>
	<div>
		<button>Balance :</button>
		<h2>{balance}</h2>
		<button on:click={handleGetGreeting}>Spinner</button>
	</div>

	<div style="background-color:antiquewhite;">
		<input type="text" style="color: black;" bind:value={address} />
		<input type="text" style="color: black;" bind:value={amount} />
		<button on:click={() => executeTransaction(() => transferTokens(amount, address))}
			>Transfer Tokens</button
		>
	</div>
</section>

<style type="scss">
	section {
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);

		h1,
		p {
			text-align: center;
		}

		h1 {
			color: var(--clr-primary-main);
		}
	}
</style>
