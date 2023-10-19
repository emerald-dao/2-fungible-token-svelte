import { config } from '@onflow/fcl';
import flowJson from '../../flow.json';

export const network: 'mainnet' | 'testnet' | 'emulator' = process.env.PUBLIC_FLOW_NETWORK as
	| 'mainnet'
	| 'testnet'
	| 'emulator';

export const EXAMPLE_TOKEN_CONTRACT_ADDRESS = flowJson.contracts.ExampleToken.aliases[network];
export const FUNGIBLE_TOKEN_CONTRACT_ADDRESS = flowJson.contracts.FungibleToken.aliases[network];

const fclConfigInfo = {
	emulator: {
		accessNode: 'http://127.0.0.1:8888'
	},
	testnet: {
		accessNode: 'https://rest-testnet.onflow.org'
	},
	mainnet: {
		accessNode: 'https://rest-mainnet.onflow.org'
	}
};

config({
	'flow.network': network,
	'accessNode.api': fclConfigInfo[network].accessNode
});
