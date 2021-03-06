import axios from 'axios';
import { BigNumber } from 'ethers';
import { StakingRewardsAddresses } from '../consts';
import { sleep } from '../utils';
import { Web3Provider } from '../web3Provider';
import { UserHoldings } from './types';

export class Fetcher {
  private stakingContracts: {
    [stakingContractAddress: string]: {
      symbol: string;
      lpTokenAddress: string;
      priceUsd: number;
      lockedLpTokens: BigNumber;
      unlockedLpTokens: BigNumber;
    };
  };

  constructor(
    private web3provider: Web3Provider,
    private userWallets: string[] = [],
    private bdxInWalletBalances: { [address: string]: number } = {}
  ) {}

  private async loadStakingContracts() {
    const lpTokenPrices = await this.getLpTokensUsdValue();

    this.stakingContracts = {
      '0xDaA561E04D0e73808B1A430FB360d3e497DE52c2': {
        symbol: 'BDEU_BDUS',
        lpTokenAddress: '0xdc7F0077E1921dBBCf8D042EE49184716301EDFE',
        priceUsd: lpTokenPrices['BDEU_BDUS'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x6a804de5D61fD6CFf8061214aBbc8Ce75463cf5b': {
        symbol: 'BDX_BDEU',
        lpTokenAddress: '0x2a5DC95E2F3150Ed52D69aD885EF6844dBED75C8',
        priceUsd: lpTokenPrices['BDX_BDEU'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x4d97F81C75a28763e858a109AC19933027aF3684': {
        symbol: 'BDX_BDUS',
        lpTokenAddress: '0x39Eb6A2601aC29526E37EA60a531223AB0679873',
        priceUsd: lpTokenPrices['BDX_BDUS'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0xeFaCb88E4f5bF53F13F74D267E853099CE89ac4C': {
        symbol: 'ETHs_BDEU',
        lpTokenAddress: '0xAB53CC054Ac0722aB0cBF346495E64c8C8e0c346',
        priceUsd: lpTokenPrices['ETHs_BDEU'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x67E795c3ebCd0d26225cD1582af90B590f5Ade54': {
        symbol: 'ETHs_BDUS',
        lpTokenAddress: '0x4B481D8024B55263455AD3329e8be62C03A3F315',
        priceUsd: lpTokenPrices['ETHs_BDUS'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x314cb69F6463e1289F0dB95A525B1a6D1eE4e428': {
        symbol: 'ETHs_BDX',
        lpTokenAddress: '0x3e64c5DC35546D6feF70346A395ed8E21C4A5247',
        priceUsd: lpTokenPrices['ETHs_BDX'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x051c9D1E376a7e4230562656D19DF6AD12900E5f': {
        symbol: 'WRBTC_BDEU',
        lpTokenAddress: '0x00ffA27B58312A06dbc4aEd883d5F2EA924b2F89',
        priceUsd: lpTokenPrices['WRBTC_BDEU'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0xC237ccD60b386617CAF5EF4ca415CD789461Dec0': {
        symbol: 'WRBTC_BDUS',
        lpTokenAddress: '0x6a11d6af629bBbf310B82312E5fbd2dcc997a781',
        priceUsd: lpTokenPrices['WRBTC_BDUS'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x4b9A981B32904C3B5e0A468528035B7DE4461cdf': {
        symbol: 'WRBTC_BDX',
        lpTokenAddress: '0x15f2F01159a73A56a7149096942Ae4e2c019cbEf',
        priceUsd: lpTokenPrices['WRBTC_BDX'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x750159AC3854ebb58bcE36c3Acbb4148eF7bE14A': {
        symbol: 'BDUS_XUSD',
        lpTokenAddress: '0x2De59550090353D89fE36c50482234D9B7DB2e3B',
        priceUsd: lpTokenPrices['BDUS_XUSD'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x8e9E851136534BF9B3C91B723Adf900e9e3474cf': {
        symbol: 'WRBTC_bXAU',
        lpTokenAddress: '0xDE9F2989cF0dE460D45535a326b267C61caeC3f6',
        priceUsd: lpTokenPrices['WRBTC_bXAU'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x892511BB403150e01587Bc194aCC0342590530Ec': {
        symbol: 'BDX_bXAU',
        lpTokenAddress: '0x236cAdE820cdDb99BBD1bBb00A1F317e986C3ee9',
        priceUsd: lpTokenPrices['BDX_bXAU'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0xEAB5B0774D0288724aFD44E6042aC32079Ed99e8': {
        symbol: 'bGBP_WRBTC',
        lpTokenAddress: '0xAd495208bb25c8f587ec8477Ebf771893ceA8D59',
        priceUsd: lpTokenPrices['bGBP_WRBTC'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x08b4580f9262aB46aff69fa1d45BD4a290737c75': {
        symbol: 'bGBP_BDX',
        lpTokenAddress: '0x1fe5C659a893D0bFd3A3758963602A84216665a8',
        priceUsd: lpTokenPrices['bGBP_BDX'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      },
      '0x2Dfa7eC7655c373Ae1Fc6E8b96B5710bD88bD31D': {
        symbol: 'BDUS_DOC',
        lpTokenAddress: '0xfcbf64Ed39436111116F79f3E23BD3966BfE655e',
        priceUsd: lpTokenPrices['BDUS_DOC'].price,
        lockedLpTokens: BigNumber.from(0),
        unlockedLpTokens: BigNumber.from(0)
      }
    };
  }

  private async getLockedStakesValueUsd(userWallet: string, blockNumber: number): Promise<number> {
    const stakingContractsAddresses = Object.keys(this.stakingContracts);

    let userTotalUsdValue = 0;

    for (let index = 0; index < stakingContractsAddresses.length; index++) {
      const stakingRewardAddress = stakingContractsAddresses[index];
      const { symbol, priceUsd, lockedLpTokens } = this.stakingContracts[stakingRewardAddress];
      const lockedStakes = await this.web3provider.getLockedStakes(stakingRewardAddress, userWallet, blockNumber);
      const amount = lockedStakes.reduce(
        (totalAmount: BigNumber, lockedStake: { amount: BigNumber }) => totalAmount.add(lockedStake.amount),
        BigNumber.from(0)
      );
      console.log(`${symbol} | ${amount} locked LP tokens`);

      // Accumulate total locked LP tokens
      this.stakingContracts[stakingRewardAddress] = {
        ...this.stakingContracts[stakingRewardAddress],
        lockedLpTokens: lockedLpTokens.add(amount)
      };

      const decimalAmount = Number(amount.toString()) / 10 ** 18;
      userTotalUsdValue += priceUsd * decimalAmount;
    }

    return userTotalUsdValue;
  }

  private async getUnlockedStakesValueUsd(userWallet: string, blockNumber: number): Promise<number> {
    const stakingContractsAddresses = Object.keys(this.stakingContracts);

    let userTotalUsdValue = 0;

    for (let index = 0; index < stakingContractsAddresses.length; index++) {
      const stakingRewardAddress = stakingContractsAddresses[index];
      const { symbol, priceUsd, unlockedLpTokens } = this.stakingContracts[stakingRewardAddress];
      const unlockedBalance = await this.web3provider.getUnlockedStakes(stakingRewardAddress, userWallet, blockNumber);
      console.log(`${symbol} | ${unlockedBalance} unlocked LP tokens`);

      // Accumulate total unlocked LP tokens
      this.stakingContracts[stakingRewardAddress] = {
        ...this.stakingContracts[stakingRewardAddress],
        unlockedLpTokens: unlockedLpTokens.add(unlockedBalance)
      };

      const decimalAmount = Number(unlockedBalance.toString()) / 10 ** 18;
      userTotalUsdValue += priceUsd * decimalAmount;
    }

    return userTotalUsdValue;
  }

  private async getLpTokensUsdValue(): Promise<{ [pair: string]: { price: number } }> {
    const res = await axios.get('https://api.blindex.io/data/lpTokensValues/usd');
    return res.data;
  }

  private async getBdxPrice(): Promise<number> {
    const res = await axios.get('https://api.blindex.io/data/dashboardData?chartName=BDX_PRICE&chartPeriod=LAST_WEEK');
    return res.data.values[0].val;
  }

  private async calcUserHoldings(): Promise<{
    userHoldings: UserHoldings;
    totalHoldingsUsd: number;
    totalBdx: number;
  }> {
    const userHoldings: UserHoldings = {};
    let totalLockedStakesValueUsd = 0;
    let totalBdxHoldingsUsd = 0;
    let totalBdx = 0;

    const currentBlockNumber = await this.web3provider.getBlockNumber();
    const bdxPrice = await this.getBdxPrice();

    for (let index = 0; index < this.userWallets.length; index++) {
      const userWallet = this.userWallets[index];
      console.log(`\n${index + 1} | Fetch locked stakes for user ${userWallet}`);
      const lockedStakesUsd = await this.getLockedStakesValueUsd(userWallet, currentBlockNumber);
      totalLockedStakesValueUsd += lockedStakesUsd;

      const bdxInContracts = await this.getUserBdxHoldingsInContracts(userWallet, currentBlockNumber);
      const bdxInWallet = this.bdxInWalletBalances[userWallet] || 0;
      console.log('BDX in wallet', bdxInWallet);
      const userTotalBdx = bdxInContracts + bdxInWallet;

      const bdxHoldingsUsd = userTotalBdx * bdxPrice;
      console.log(`User ${userWallet} has ${userTotalBdx} BDX ($${bdxHoldingsUsd})`);

      const totalUserHoldingsUsd = lockedStakesUsd + bdxHoldingsUsd;
      console.log(`User ${userWallet} has $${totalUserHoldingsUsd} holdings`);

      userHoldings[userWallet] = { lockedStakesUsd, bdxHoldingsInUsd: bdxHoldingsUsd, totalUserHoldingsUsd, userShare: 0 };

      totalBdxHoldingsUsd += bdxHoldingsUsd;
      totalBdx += userTotalBdx;

      await sleep(250);
    }

    this.printTotalLockedLPTokens();

    const totalHoldingsUsd = totalLockedStakesValueUsd + totalBdxHoldingsUsd;

    return { userHoldings: this.calcUserShareInHoldings(userHoldings, totalHoldingsUsd), totalHoldingsUsd, totalBdx };
  }

  private printTotalLockedLPTokens() {
    console.log('Total Locked LP Tokens:');
    Object.values(this.stakingContracts).forEach(stakingContract =>
      console.log(`${stakingContract.symbol} - ${stakingContract.lockedLpTokens.toString()}`)
    );
  }

  private printTotalUnlockedLPTokens() {
    console.log('\nTotal Unlocked LP Tokens:');
    Object.values(this.stakingContracts).forEach(stakingContract =>
      console.log(`${stakingContract.symbol} - ${stakingContract.unlockedLpTokens.toString()}`)
    );
  }

  private calcUserShareInHoldings(userHoldings: UserHoldings, totalHoldingsUsd: number): UserHoldings {
    return Object.entries(userHoldings).reduce(
      (resolvedHoldings, [userWallet, holding]) => ({
        ...resolvedHoldings,
        [userWallet]: { ...holding, userShare: holding.totalUserHoldingsUsd / totalHoldingsUsd }
      }),
      {} as UserHoldings
    );
  }

  private async getUserBdxHoldingsInContracts(userWallet: string, blockNumber: number): Promise<number> {
    const contracts = Object.keys(this.stakingContracts);

    let totalBdxRewarded = 0;
    for (let index = 0; index < contracts.length; index++) {
      const addr = contracts[index];
      const availableBdxRewards = await this.web3provider.getRewardedBdx(addr, userWallet, blockNumber);
      totalBdxRewarded += Number(availableBdxRewards.toString()) / 10 ** 18;
    }
    console.log('BDX rewards', totalBdxRewarded);

    const bdxInVesting = await this.web3provider.getBdxInVesting(userWallet, blockNumber);
    console.log('BDX in vesting', bdxInVesting);

    const totalBdx = totalBdxRewarded + bdxInVesting;
    return totalBdx;
  }

  async fetchLockedStakingAddresses(firstBlock = 3980000, blockPerIteration = 10000) {
    try {
      console.log(`Running the scheduled job.`);
      const lastBlockNumber = await this.web3provider.getBlockNumber();
      console.log('Block number', lastBlockNumber);

      let from = firstBlock;

      while (from < lastBlockNumber) {
        for (let index = 0; index < StakingRewardsAddresses.length; index++) {
          const stakingRewardsContract = StakingRewardsAddresses[index];
          console.log(`\nFetch ${stakingRewardsContract} from ${from}`);
          const logs = await this.web3provider.fetchStakingRewardEvents(
            from,
            Math.min(from + blockPerIteration, lastBlockNumber),
            stakingRewardsContract
          );
          console.log(`Found ${logs.length} logs`);
          const walletAddresses = this.web3provider.fetchWalletAddressFromStakingRewardEvent(logs);
          console.log(`Found ${walletAddresses.length} wallet addresses`);

          this.userWallets.push(...walletAddresses);

          console.log('sleep...');
          await sleep(2000);
        }

        from += blockPerIteration;
      }

      return new Set(this.userWallets);
    } catch (err) {
      console.error('Failed to run scheduled job: ' + err);
      throw new Error(err);
    }
  }

  async printTotalHoldings() {
    await this.loadStakingContracts();
    const totalHoldings = await this.calcUserHoldings();

    console.log('\n\ntotalHoldings', totalHoldings);
  }

  async printUnlockedStakes() {
    await this.loadStakingContracts();

    const currentBlockNumber = await this.web3provider.getBlockNumber();
    let totalUnlockedStakesValueUsd = 0;
    const usersWithUnlockedStakes: { [userWallet: string]: number }[] = [];

    for (let index = 0; index < this.userWallets.length; index++) {
      const userWallet = this.userWallets[index];
      console.log(`\n${index + 1} | Fetch unlocked stakes for user ${userWallet}`);
      const unlockedStakesUsd = await this.getUnlockedStakesValueUsd(userWallet, currentBlockNumber);

      if (unlockedStakesUsd) {
        console.log('User unlocked stakes USD', unlockedStakesUsd);
        totalUnlockedStakesValueUsd += unlockedStakesUsd;
        usersWithUnlockedStakes.push({ [userWallet]: unlockedStakesUsd });
      }
      await sleep(250);
    }

    this.printTotalUnlockedLPTokens();

    console.log(`\nTotal Unlocked Stakes: $${totalUnlockedStakesValueUsd} by ${usersWithUnlockedStakes.length} users`);

    console.log(usersWithUnlockedStakes);
  }

  async printLpTokensPrice() {
    await this.loadStakingContracts();
    Object.entries(this.stakingContracts).forEach(([stakingAddress, stakingContract]) =>
      console.log(`${stakingContract.symbol} (${stakingAddress}) - $${stakingContract.priceUsd.toFixed(2)}`)
    );
  }

  async getLpTokens(): Promise<{ address: string; priceUsd: number }[]> {
    await this.loadStakingContracts();

    return Object.values(this.stakingContracts).map(stakingContract => ({
      address: stakingContract.lpTokenAddress,
      priceUsd: stakingContract.priceUsd
    }));
  }
}
