import * as fcl from '@onflow/fcl';
import transferTokensTx from '../cadence/transactions/transfer_tokens.cdc?raw';
import replaceWithProperImports from '$flow/utils/replaceWithProperImports';

async function transferTokens(amount, recipient) {
	const transactionId = await fcl.mutate({
		cadence: replaceWithProperImports(transferTokensTx),
		args: (arg, t) => [arg(parseFloat(amount).toFixed(2), t.UFix64), arg(recipient, t.Address)],
		proposer: fcl.authz,
		payer: fcl.authz,
		authorizations: [fcl.authz],
		limit: 999
	});

	console.log('Transaction Id', transactionId);

	return transactionId;
}

export default transferTokens;
