import axios from 'axios';
import { RskChainId, BdxContract, IgnoreAddresses } from './consts';

export class CovalentService {
  constructor(private apiKey: string) {}

  async getTokenHolders(tokenAddress: string) {
    const res = await axios.get(
      `https://api.covalenthq.com/v1/${RskChainId}/tokens/${tokenAddress}/token_holders/\?\&key\=${this.apiKey}&page-size=2000`
    );

    if (res.data.data.pagination.has_more) {
      throw new Error('There are more BDX holders, please increase page size');
    }

    return res;
  }

  async getBdxWalletHoldings(): Promise<{ [address: string]: number }> {
    const res = await this.getTokenHolders(BdxContract);

    const ignoreWallets = res.data.data.items.filter(holder => IgnoreAddresses.includes(holder.address.toLowerCase()));
    const bdxToIgnore = ignoreWallets.reduce((bdxToIgnore, ignoreWallet) => (bdxToIgnore += Number(ignoreWallet.balance) / 10 ** 18), 0);
    console.log(`${bdxToIgnore} BDX in wallets to ignore`);

    const holdings = res.data.data.items
      .filter(holder => !IgnoreAddresses.includes(holder.address.toLowerCase()))
      .map(holder => ({
        address: holder.address,
        balance: Number(holder.balance) / 10 ** 18
      }))
      .reduce((allHoldings, holder) => ({ ...allHoldings, [holder.address]: holder.balance }), {});

    return holdings;
  }
}
