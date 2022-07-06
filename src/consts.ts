export const StakingRewardABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'secs',
        type: 'uint256'
      }
    ],
    name: 'ExistingStakeLocked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'Recovered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256'
      }
    ],
    name: 'RewardPaid',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'RewardVested',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newDuration',
        type: 'uint256'
      }
    ],
    name: 'RewardsDurationUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address'
      }
    ],
    name: 'RewardsPeriodRenewed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'secs',
        type: 'uint256'
      }
    ],
    name: 'StakeLocked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'Staked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'Withdrawn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'kek_id',
        type: 'bytes32'
      }
    ],
    name: 'WithdrawnLocked',
    type: 'event'
  },
  {
    inputs: [],
    name: 'LOCK_MULTIPLIER_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'REWARD_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'boostedBalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'earned',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getRewardForDuration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'greylist',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_stakingToken',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_stakingRewardsDistribution',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: '_isTrueBdPool',
        type: 'bool'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'isTrueBdPool',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'lastTimeRewardApplicable',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'lastUpdateTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'yearsNo',
        type: 'uint256'
      }
    ],
    name: 'lockExistingStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'lockedBalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'lockedStakesOf',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'kek_id',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'start_timestamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'ending_timestamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'multiplier_LOCK_MULTIPLIER_PRECISION',
            type: 'uint256'
          }
        ],
        internalType: 'struct StakingRewards.LockedStake[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'yearsNo',
        type: 'uint256'
      }
    ],
    name: 'lockedStakingMultiplier_LOCK_MULTIPLIER_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'periodFinish',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256'
      }
    ],
    name: 'recoverERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'immediatelyReleasedReward',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'vestedReward',
        type: 'uint256'
      }
    ],
    name: 'releaseReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renewIfApplicable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'rewardPerToken',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'rewardPerTokenStored_REWARD_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'rewards',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'rewardsDurationSeconds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_address',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'isGraylisted',
        type: 'bool'
      }
    ],
    name: 'setIsAddressGraylisted',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_new_owner',
        type: 'address'
      }
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_rewardsDurationSeconds',
        type: 'uint256'
      }
    ],
    name: 'setRewardsDuration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'yearsNo',
        type: 'uint256'
      }
    ],
    name: 'stakeLocked',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'stakingDecimals',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'stakingToken',
    outputs: [
      {
        internalType: 'contract ERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'toggleUnlockStakes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalBoostedSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'unlockedBalanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'unlockedStakes',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'updateUserReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'userRewardPerTokenPaid_REWARD_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'kek_id',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: 'from',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'to',
        type: 'uint256'
      }
    ],
    name: 'withdrawLocked',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

export const VestingContractAddress = '0xda200269A55c1bD65124A9b9Cb54D30f62Cf50c3';
export const VestingABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      }
    ],
    name: 'Upgraded',
    type: 'event'
  },
  {
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address'
      }
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'RewardClaimed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'ScheduleCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vestingTimeInSeconds',
        type: 'uint256'
      }
    ],
    name: 'VestingTimeInSecondsSet',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'from',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'to',
        type: 'uint256'
      }
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'fundsProvider',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'vestingStartedTimeStamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vestingEndTimeStamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalVestedAmount_d18',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'releasedAmount_d18',
            type: 'uint256'
          }
        ],
        internalType: 'struct Vesting.VestingSchedule',
        name: '_schedule',
        type: 'tuple'
      }
    ],
    name: 'getAvailableReward',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vestedTokenAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_vestingScheduler',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_fundsProvider',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_vestingTimeInSeconds',
        type: 'uint256'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'vestingStartedTimeStamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vestingEndTimeStamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalVestedAmount_d18',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'releasedAmount_d18',
            type: 'uint256'
          }
        ],
        internalType: 'struct Vesting.VestingSchedule',
        name: '_schedule',
        type: 'tuple'
      }
    ],
    name: 'isFullyVested',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount_d18',
        type: 'uint256'
      }
    ],
    name: 'schedule',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_fundsProvider',
        type: 'address'
      }
    ],
    name: 'setFundsProvider',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vestingScheduler',
        type: 'address'
      }
    ],
    name: 'setVestingScheduler',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_vestingTimeInSeconds',
        type: 'uint256'
      }
    ],
    name: 'setVestingTimeInSeconds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address'
      }
    ],
    name: 'userVestingSchedulesCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vestedToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vestingScheduler',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'vestingSchedules',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vestingStartedTimeStamp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'vestingEndTimeStamp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalVestedAmount_d18',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'releasedAmount_d18',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'vestingSchedulesOf',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'vestingStartedTimeStamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'vestingEndTimeStamp',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'totalVestedAmount_d18',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'releasedAmount_d18',
            type: 'uint256'
          }
        ],
        internalType: 'struct Vesting.VestingSchedule[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vestingTimeInSeconds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialLogic',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'initialAdmin',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    stateMutability: 'payable',
    type: 'constructor'
  }
];

export const BdxContract = '0x6542a10E68cEAc1Fa0641ec0D799a7492795AAC1';
export const RskChainId = 30;

export const StakingRewardsDistributionContract = '0xadad428152d284d18b603db7cf87928495bc252e';
export const BDUS = '0xb450ff06d950efa9a9c0ad63790c51971c1be885';
export const BDEU = '0x99ac494Badd0CBa26143bd423E39A088591C7B09';
export const BXAU = '0xA4A8Fb98A26E5314397170e5D12Da8B73Dc2CEB5';
export const BGBP = '0x2415E222755fD1F07B0A565eB4F036e410852eE0';
export const TeamLockingContract = '0x4292Ef0D3AfA1052605e2D706349dFe3A481cDcF';
export const TreasuryAddress = '0x18bc35c3b74b35c70cff0ec14ad62f4a8c2e679c';
export const DevTreasuryAddress = '0x48e2b176db179d81135052f4bee7fb1129f270dd';
export const WRBTC_BDXStakingReward = '0x15f2F01159a73A56a7149096942Ae4e2c019cbEf';
export const ETHs_BDXStakingReward = '0x3e64c5DC35546D6feF70346A395ed8E21C4A5247';
export const BDX_BDEUStakingReward = '0x2a5DC95E2F3150Ed52D69aD885EF6844dBED75C8';
export const BDX_BDUSStakingReward = '0x39Eb6A2601aC29526E37EA60a531223AB0679873';
export const BDX_BXAUStakingReward = '0x236cAdE820cdDb99BBD1bBb00A1F317e986C3ee9';
export const BDX_BGBPStakingReward = '0x1fe5C659a893D0bFd3A3758963602A84216665a8';

export const StakingRewardsAddresses = [
  '0xDaA561E04D0e73808B1A430FB360d3e497DE52c2',
  '0x6a804de5D61fD6CFf8061214aBbc8Ce75463cf5b',
  '0x4d97F81C75a28763e858a109AC19933027aF3684',
  '0xeFaCb88E4f5bF53F13F74D267E853099CE89ac4C',
  '0x67E795c3ebCd0d26225cD1582af90B590f5Ade54',
  '0x314cb69F6463e1289F0dB95A525B1a6D1eE4e428',
  '0x051c9D1E376a7e4230562656D19DF6AD12900E5f',
  '0xC237ccD60b386617CAF5EF4ca415CD789461Dec0',
  '0x4b9A981B32904C3B5e0A468528035B7DE4461cdf',
  '0x750159AC3854ebb58bcE36c3Acbb4148eF7bE14A',
  '0x8e9E851136534BF9B3C91B723Adf900e9e3474cf',
  '0x892511BB403150e01587Bc194aCC0342590530Ec',
  '0xEAB5B0774D0288724aFD44E6042aC32079Ed99e8',
  '0x08b4580f9262aB46aff69fa1d45BD4a290737c75',
  '0x2Dfa7eC7655c373Ae1Fc6E8b96B5710bD88bD31D'
];

export const IgnoreAddresses = [
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
