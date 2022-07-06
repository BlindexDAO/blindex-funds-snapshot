import dotenv from 'dotenv';
import { CovalentService } from './covalent-service';
import { Fetcher } from './fetcher';
import { Web3Provider } from './web3Provider';
import lockedStakesWallets from './lockedStakesWallets.json';
import { IgnoreAddresses } from './consts';

dotenv.config();

async function main() {
  validateEnvVars();

  const rpcEndpoint = process.env.RPC_ENDPOINT!;
  const web3provider = new Web3Provider(rpcEndpoint);

  const covalentApiKey = process.env.COVALENTHQ_API_KEY!;
  const covalentService = new CovalentService(covalentApiKey);
  const bdxInWalletBalances = await covalentService.getBdxWalletHoldings();

  console.log(`BDX in ${Object.keys(bdxInWalletBalances).length} wallets: ${JSON.stringify(bdxInWalletBalances)}`);

  const allWallets = Array.from(
    new Set([...lockedStakesWallets.map(addr => addr.toLowerCase()), ...Object.keys(bdxInWalletBalances).map(addr => addr.toLowerCase())])
  ).filter(wallet => !IgnoreAddresses.includes(wallet));

  const fetcher = new Fetcher(web3provider, allWallets, bdxInWalletBalances);
  await fetcher.printTotalHoldings();
}

function validateEnvVars(): void {
  if (!process.env.RPC_ENDPOINT) {
    throw new Error('RPC_ENDPOINT is missing');
  }

  if (!process.env.COVALENTHQ_API_KEY) {
    throw new Error('COVALENTHQ_API_KEY is missing');
  }
}

main();
