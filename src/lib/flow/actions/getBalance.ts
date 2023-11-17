import * as fcl from '@onflow/fcl';
import getBalanceScript from '../cadence/scripts/get_balance.cdc?raw';

async function getBalance(userAddress: string) {
	const result = await fcl.query({
		cadence: getBalanceScript,
		args: (arg, t) => [arg(userAddress, t.Address)]
	});

	return result;
}

export default getBalance;
