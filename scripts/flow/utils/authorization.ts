import * as fcl from '@onflow/fcl';
import { SHA3 } from 'sha3';
import { ec as EC } from 'elliptic';
import { EXAMPLE_TOKEN_CONTRACT_ADDRESS } from '../config';

const sign = (message) => {
	let ec = new EC('p256');
	const key = ec.keyFromPrivate(Buffer.from(process.env.PRIVATE_KEY, 'hex'));
	const sig = key.sign(hash(message)); // hashMsgHex -> hash
	const n = 32;
	const r = sig.r.toArrayLike(Buffer, 'be', n);
	const s = sig.s.toArrayLike(Buffer, 'be', n);
	return Buffer.concat([r, s]).toString('hex');
};

const hash = (message) => {
	const sha = new SHA3(256);
	sha.update(Buffer.from(message, 'hex'));
	return sha.digest();
};

export const serverAuthorization = async (account) => {
	const addr = EXAMPLE_TOKEN_CONTRACT_ADDRESS;
	const keyId = 0;

	return {
		...account,
		tempId: `${addr}-${keyId}`,
		addr: fcl.sansPrefix(addr),
		keyId: Number(keyId),
		signingFunction: async (signable) => {
			return {
				addr: fcl.withPrefix(addr),
				keyId: Number(keyId),
				signature: sign(signable.message)
			};
		}
	};
};
