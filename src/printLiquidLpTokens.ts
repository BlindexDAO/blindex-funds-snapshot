import dotenv from 'dotenv';
import { DevTreasuryAddress, StakingRewardsAddresses, TreasuryAddress } from './consts';
import { CovalentService } from './covalent-service';
import { Fetcher } from './fetcher';
import { Web3Provider } from './web3Provider';

dotenv.config();

async function main() {
  validateEnvVars();

  const rpcEndpoint = process.env.RPC_ENDPOINT!;
  const web3provider = new Web3Provider(rpcEndpoint);

  const covalentApiKey = process.env.COVALENTHQ_API_KEY!;
  const covalentService = new CovalentService(covalentApiKey);

  const fetcher = new Fetcher(web3provider);
  const lpTokenAddresses = await fetcher.getLpTokens();

  const lowerCaseStakingRewardsAddresses = StakingRewardsAddresses.map(stakingRewardsAddress => stakingRewardsAddress.toLowerCase());
  for (let index = 0; index < lpTokenAddresses.length; index++) {
    const { address, priceUsd } = lpTokenAddresses[index];
    const res = await covalentService.getTokenHolders(address);
    console.log(
      address,
      res.data.data.items
        .filter(
          item =>
            ![...lowerCaseStakingRewardsAddresses, TreasuryAddress.toLowerCase(), DevTreasuryAddress.toLowerCase()].includes(
              item.address.toLowerCase()
            )
        )
        .map(item => ({ ...item, totalPrice: (item.balance / 10 ** 18) * priceUsd }))
    );
  }
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
