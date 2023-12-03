import * as fcl from '@onflow/fcl';
import getSupplyScript from '../cadence/scripts/get_supply.cdc?raw';

async function getSupply(userAddress: string) {
	const result = await fcl.query({
		cadence: getSupplyScript,
		args: (arg, t) => [arg(userAddress, t.Address)]
	});

	return result;
}

export default getSupply;
