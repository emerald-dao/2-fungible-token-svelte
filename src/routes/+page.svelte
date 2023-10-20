<script type="ts">
	import getBalance from '$flow/actions/getBalance';
	import setupVault from '$flow/actions/setupVault';
	import transferTokens from '$flow/actions/transferTokens';
	import executeTransaction from '$flow/utils/executeTransaction';
	import dappData from '$lib/config/dappData';
	import { user } from '$stores/UserStore';
	import { RefreshCcw } from 'lucide-svelte';	
	
	let balance:number = 0.00;
	let address:string ="";
	let amount: number;

	$: {
		if (!$user?.loggedIn) {
			balance = 0.00;
		}
 	 }

	const handleGetBalance = async () => {
		if ($user) {
			balance = await getBalance($user.addr);
		}
	};
</script>



<section>
	<span>Welcome to</span>
	<h1>{dappData.title}</h1>
	<p>{dappData.description}</p>
	<p>Crafted by {dappData.author}</p>
</section>
<div style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; ">
	<div style="padding-top:10px; padding-left:10px; text-align: center;">
		{#if $user?.loggedIn}
			<button class="button" on:click={() => executeTransaction(() => setupVault())}>Setup Vault</button>
		{/if}
	</div>
	<div class="container-address" style="text-align: center;">
		<h3 style="color: #38E8C6; font-size:20px; padding-right: 4px">Address:</h3>
		{#if $user?.loggedIn}
			<h3 class="address-box">{$user.addr}</h3>
		{:else}
			<h3 class="address-box">Please connect wallet</h3>
		{/if}
	</div>
	<div style="display: flex; align-items: center; text-align: center; gap: 4px; padding-right: 10px; justify-content: center;">
		{#if $user?.loggedIn}
			<p style="color: #38E8C6;">Balance:</p>
			<p style="color:#38E8C6;">{balance}</p>
			<div on:click={handleGetBalance}>
				<RefreshCcw color="#38E8C6" style="padding-right: 10px; height: 2.0rem; width: 2.0rem;" />
			</div>
		{/if}
	</div>
</div>

<div style="padding:60px;">
	<div class="container">
		<div class="header">
		  <h1 style="font-size: x-large;">Transfer Tokens</h1>
		  <img src="/planee.png" style="width: 3.0rem; height: 3.0rem" alt="plane" />
		</div>
	  
		<div class="input-container">
		  <label for="" class="label">Address</label>
		  <input type="text" placeholder="Recipient address" class="input" bind:value={address}  />
		</div>
	  
		<div class="input-container">
		  <label for="" class="label">Amount</label>
		  <input type="text" placeholder="Amount" class="input" bind:value={amount} />
		</div>
	  
		<button on:click={() => executeTransaction(() => transferTokens(amount, address))} class="button">
			Transfer Tokens
		</button>
	</div>
</div>

<style type="scss">
	.container {
		display: flex;
		background-color: #222; /* Cambia esto al color de fondo que desees */
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 20px;
		flex-direction: column;
		gap: 1rem;
		width: 33.333%; /* Ancho del contenedor, ajusta según tus necesidades */
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header h1 {
		font-size: 1.125rem;
		font-weight: bold;
		color: #38E8C6;
		margin-bottom: 0.5rem;
	}

	.header img {
		width: 20px; /* Ajusta el tamaño de la imagen */
	}

	.label {
		font-size: 0.875rem;
		color: #38E8C6;
	}

	.input {
		padding: 8px;
		outline: none;
		border: 2px solid #38E8C6;
		background-color: #222;
		border-radius: 8px;
		color: white;
	}

	.button {
		border: none;
		border-radius: 8px;
		padding: 8px 16px;
		font-size: 0.875rem;
		font-weight: bold;
		color: #222;
		background-color: #38E8C6;
	}
	.container-address {
		padding-top: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.address-box {
		border: 1px solid #38E8C6;
		padding: 7px;
		text-align: center;
		color: #38E8C6;
		font-size: 16px;
		border-radius: 1rem;
	}
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
