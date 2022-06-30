import { JsonRpcProvider, StaticJsonRpcProvider, Log } from '@ethersproject/providers';
import { BigNumber, Contract, ethers } from 'ethers';
import { StakingRewardABI, VestingABI, VestingContractAddress } from '../consts';

export class Web3Provider {
  public instance: JsonRpcProvider;
  private readonly stakingRewardInterface: ethers.utils.Interface;

  constructor(rpcEndpoint: string) {
    this.instance = new StaticJsonRpcProvider(rpcEndpoint);
    this.stakingRewardInterface = new ethers.utils.Interface(StakingRewardABI);
  }

  async getBlockNumber(): Promise<number> {
    return this.instance.getBlockNumber();
  }

  async getLockedStakes(stakingRewardAddress: string, userWallet: string, blockNumber: number) {
    const stakingRewardContract = new Contract(stakingRewardAddress, StakingRewardABI, this.instance);
    const lockedStakes = await stakingRewardContract.lockedStakesOf(userWallet.toLowerCase(), { blockTag: blockNumber });
    return lockedStakes;
  }

  async getRewardedBdx(stakingRewardAddress: string, userWallet: string, blockNumber: number): Promise<BigNumber> {
    const stakingRewardContract = new Contract(stakingRewardAddress, StakingRewardABI, this.instance);
    const availableBdxRewards = await stakingRewardContract.earned(userWallet.toLowerCase(), { blockTag: blockNumber });
    return availableBdxRewards;
  }

  async getBdxInVesting(userWallet: string, blockNumber: number): Promise<number> {
    const vestingContract = new Contract(VestingContractAddress, VestingABI, this.instance);
    const vestingSchedules = await vestingContract.vestingSchedulesOf(userWallet, { blockTag: blockNumber });

    return vestingSchedules
      .map(
        vestingSchedule =>
          Number(vestingSchedule.totalVestedAmount_d18.toString()) / 10 ** 18 - Number(vestingSchedule.releasedAmount_d18.toString()) / 10 ** 18
      )
      .reduce((accumulator, curr) => accumulator + curr, 0);
  }

  async fetchStakingRewardEvents(fromBlock: number, toBlock: number, stakingRewardAddress: string): Promise<Log[]> {
    const logs = await this.instance.getLogs({ address: stakingRewardAddress, fromBlock, toBlock });
    return logs;
  }

  fetchWalletAddressFromStakingRewardEvent(logs: Log[]): string[] {
    const walletAddresses = logs.reduce((walletAddresses, log) => {
      const event = this.stakingRewardInterface.parseLog(log);
      if (['Staked', 'StakeLocked'].includes(event.name)) {
        const walletAddress = event.args[0];
        walletAddresses.push(walletAddress);
      }

      return walletAddresses;
    }, [] as string[]);

    return walletAddresses;
  }
}
