import { JsonRpcProvider, StaticJsonRpcProvider, Block, BlockTag, Log } from '@ethersproject/providers';
import { BigNumber, Contract, ethers } from 'ethers';
import { ERC20ABI, StakingRewardABI, VestingABI, VestingContractAddress } from '../consts';

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

  async getBlock(blockHashOrBlockTag: BlockTag | Promise<BlockTag>): Promise<Block> {
    return this.instance.getBlock(blockHashOrBlockTag);
  }

  async getERC20TotalSupply(tokenAddress: string): Promise<BigNumber> {
    const erc20Contract = new Contract(tokenAddress, ERC20ABI, this.instance);
    const totalSupply = await erc20Contract.totalSupply();
    return totalSupply;
  }

  async getLockedStakes(stakingRewardAddress: string, userWallet: string) {
    const stakingRewardContract = new Contract(stakingRewardAddress, StakingRewardABI, this.instance);
    const lockedStakes = await stakingRewardContract.lockedStakesOf(userWallet.toLowerCase());
    return lockedStakes;
  }

  async getRewardedBdx(stakingRewardAddress: string, userWallet: string): Promise<BigNumber> {
    const stakingRewardContract = new Contract(stakingRewardAddress, StakingRewardABI, this.instance);
    const availableBdxRewards = await stakingRewardContract.earned(userWallet.toLowerCase());
    return availableBdxRewards;
  }

  async getBdxInVesting(userWallet: string): Promise<number> {
    const vestingContract = new Contract(VestingContractAddress, VestingABI, this.instance);
    const vestingSchedules = await vestingContract.vestingSchedulesOf(userWallet);

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
