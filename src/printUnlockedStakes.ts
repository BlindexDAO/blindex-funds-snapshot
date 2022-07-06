import dotenv from 'dotenv';
import { Fetcher } from './fetcher';
import { Web3Provider } from './web3Provider';
import lockedStakesWallets from './lockedStakesWallets.json';

dotenv.config();

async function main() {
  validateEnvVars();

  const rpcEndpoint = process.env.RPC_ENDPOINT!;
  const web3provider = new Web3Provider(rpcEndpoint);

  const allWallets = Array.from(new Set([...lockedStakesWallets.map(addr => addr.toLowerCase())]));
  const fetcher = new Fetcher(web3provider, allWallets);
  await fetcher.printUnlockedStakes();
}

function validateEnvVars(): void {
  if (!process.env.RPC_ENDPOINT) {
    throw new Error('RPC_ENDPOINT is missing');
  }
}

main();
