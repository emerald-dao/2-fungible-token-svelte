import * as fcl from '@onflow/fcl';
import getSupplyScript from '../cadence/scripts/get_bsupply.cdc?raw';
import replaceWithProperImports from '$flow/utils/replaceWithProperImports';

async function getSupply(userAddress: string) {
	const result = await fcl.query({
		cadence: replaceWithProperImports(getSupplyScript),
		args: (arg, t) => [arg(userAddress, t.Address)]
	});

	return result;
}

export default getSupply;
