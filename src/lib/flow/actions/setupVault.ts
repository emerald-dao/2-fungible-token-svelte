import * as fcl from '@onflow/fcl';
import setupVaultTx from '../cadence/transactions/setup_vault.cdc?raw';
import replaceWithProperImports from '$flow/utils/replaceWithProperImports';

async function setupVault() {
	const transactionId = await fcl.mutate({
		cadence: replaceWithProperImports(setupVaultTx),
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
