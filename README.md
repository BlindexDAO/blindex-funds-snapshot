# blindex-funds-snapshot

This repository contains the scripts for calculating the total funds holdings in Blindex.

# Environment variables
Create `.env` file with the following keys:
```
RPC_ENDPOINT = ENTER_YOUR_RPC_ENDPOINT_URL
COVALENTHQ_API_KEY = ENTER_YOUR_COVALENTHQ_API_KEY
```

# Install
```
npm i
```

# Print list of wallets which locked their stakings
```
npm run print-staking-wallets
```

# Print the total funds holdings

First, we will need to set the updated list of wallets who locked stakes from the previous script and set it in `const lockedStakesWallets` (`print-total-holdings.ts` - line 9) 

Then we can run:
```
npm run print-total-holdings
```

This script will calculate the total holdings of each user who holds BDX and/or locked his stakes in Blindex and each user's share of the total funds
