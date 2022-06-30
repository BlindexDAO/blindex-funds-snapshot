import dotenv from 'dotenv';
import { Fetcher } from './fetcher';
import { Web3Provider } from './web3Provider';

dotenv.config();

async function main() {
  validateEnvVars();

  const rpcEndpoint = process.env.RPC_ENDPOINT!;
  const web3provider = new Web3Provider(rpcEndpoint);
  const fetcher = new Fetcher(web3provider);
  const stakingWallets = await fetcher.fetchLockedStakingAddresses();
  console.log('Staking Wallets: ', Array.from(stakingWallets));
}

function validateEnvVars(): void {
  if (!process.env.RPC_ENDPOINT) {
    throw new Error('RPC_ENDPOINT is missing');
  }
}

main();
