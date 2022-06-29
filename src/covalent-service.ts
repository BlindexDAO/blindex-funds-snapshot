import axios from 'axios';
import {
  RskChainId,
  BdxContract,
  BDEU,
  BDUS,
  BDX_BDEUStakingReward,
  BDX_BDUSStakingReward,
  BDX_BGBPStakingReward,
  BDX_BXAUStakingReward,
  BGBP,
  BXAU,
  ETHs_BDXStakingReward,
  StakingRewardsDistributionContract,
  TeamLockingContract,
  TreasuryAddress,
  VestingContractAddress,
  WRBTC_BDXStakingReward
} from './consts';

const ignoreAddresses = [
  BDUS.toLowerCase(),
  BDEU.toLowerCase(),
  BXAU.toLowerCase(),
  BGBP.toLowerCase(),
  StakingRewardsDistributionContract.toLowerCase(),
  TeamLockingContract.toLowerCase(),
  TreasuryAddress.toLowerCase(),
  WRBTC_BDXStakingReward.toLowerCase(),
  ETHs_BDXStakingReward.toLowerCase(),
  BDX_BDEUStakingReward.toLowerCase(),
  BDX_BDUSStakingReward.toLowerCase(),
  BDX_BXAUStakingReward.toLowerCase(),
  BDX_BGBPStakingReward.toLowerCase(),
  VestingContractAddress.toLowerCase()
];

export class CovalentService {
  constructor(private apiKey: string) {}

  async getBdxWalletHoldings(): Promise<{ [address: string]: number }> {
    const res = await axios.get(
      `https://api.covalenthq.com/v1/${RskChainId}/tokens/${BdxContract}/token_holders/\?\&key\=${this.apiKey}&page-size=2000`
    );

    if (res.data.data.pagination.has_more) {
      throw new Error('There are more BDX holders, please increase page size');
    }

    const ignoreWallets = res.data.data.items.filter(holder => ignoreAddresses.includes(holder.address.toLowerCase()));
    const bdxToIgnore = ignoreWallets.reduce((bdxToIgnore, ignoreWallet) => (bdxToIgnore += Number(ignoreWallet.balance) / 10 ** 18), 0);
    console.log(`${bdxToIgnore} BDX in wallets to ignore`);

    const holdings = res.data.data.items
      .filter(holder => !ignoreAddresses.includes(holder.address.toLowerCase()))
      .map(holder => ({
        address: holder.address,
        balance: Number(holder.balance) / 10 ** 18
      }))
      .reduce((allHoldings, holder) => ({ ...allHoldings, [holder.address]: holder.balance }), {});

    return holdings;
  }
}
