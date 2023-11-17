import * as fcl from '@onflow/fcl';
import setupVaultTx from '../cadence/transactions/setup_vault.cdc?raw';

async function setupVault() {
	const transactionId = await fcl.mutate({
		cadence: setupVaultTx,
		args: (arg, t) => [],
		proposer: fcl.authz,
		payer: fcl.authz,
		authorizations: [fcl.authz],
		limit: 999
	});

	console.log('Transaction Id', transactionId);

	return transactionId;
}

export default setupVault;
