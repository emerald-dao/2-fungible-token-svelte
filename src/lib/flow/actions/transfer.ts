import * as fcl from '@onflow/fcl';
import transferTx from '../cadence/transactions/transfer.cdc?raw';

async function transfer(recipient: string, amount: number) {
	const transactionId = await fcl.mutate({
		cadence: transferTx,
		args: (arg, t) => [
			arg(recipient, t.Address),
			arg(amount.toFixed(2), t.UFix64)
		],
		proposer: fcl.authz,
		payer: fcl.authz,
		authorizations: [fcl.authz],
		limit: 999
	});

	console.log('Transaction Id', transactionId);

	return transactionId;
}

export default transfer;
