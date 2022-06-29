export interface UserHoldings {
  [userWallet: string]: { lockedStakesUsd: number; bdxHoldingsInUsd: number; totalUserHoldingsUsd: number; userShare: number };
}
