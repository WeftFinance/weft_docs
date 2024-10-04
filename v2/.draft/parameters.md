Global parameters
    maxCdpPosition: 10,
    priceExpirationPeriod: 60 * 60 * 4, 
    priceCacheMode: { type: 'Hash' },
    CdpCreationFee: 0,
    LiquidationBonusFeeRate: 0.20
    LoanFeeRate: 0,
    InterestFeeRate: 0.20,
    FlashLoanFeeRate: 0.20,
    defaultEfficiencyConfigId: 5,

Resource pool config 
    interestUpdatePeriod: 60 * 60 * 24, // 1 day
    loanFeeRate: 0,
    flashLoanFeeRate: 0.001,
    depositLimit: {
        type: 'SupplyRatio',
        ratio: 0.5
    },
    utilizationLimit: undefined,
    flashLoanAmountLimit: {
        type: 'SupplyRatio',
        ratio: 0.2
    },

Interest Strategies
    Id 0
        description: "Volatile assets: Incentivize Borrow +--",
        breakPoints: [
            { usage: 0.60, interestRate: 0.06 },
            { usage: 0.90, interestRate: 1.50 },
            { usage: 1.00, interestRate: 15.00 },
        ]

    Id 1
        description: "Volatile assets: Incentivize Borrow ++-",
        breakPoints: [
            { usage: 0.70, interestRate: 0.05, },
            { usage: 0.90, interestRate: 1.00, },
            { usage: 1.00, interestRate: 10.00 },
        ]

    Id 2 
        description: "Stable assets: Incentivize Borrow +++",
        breakPoints: [
            { usage: 0.80, interestRate: 0.04, },
            { usage: 0.90, interestRate: 0.50, },
            { usage: 1.00, interestRate: 5.00 },
        ]


LoanConfigs

    Config id 0
        description: "Ecosystem market mover (XRD)",
        borrowMaxRiskIndex: 3,
        loanValueFactor: 1,
        loanCloseFactor: 0.5

    Config id 1
        description: "Stable coin (USDC, USDT ...)",
        borrowMaxRiskIndex: 2,
        loanValueFactor: 1,
        loanCloseFactor: 0.5

    Config id 2
        description: "Global Market Mover (BTC, ETH ...)",
        borrowMaxRiskIndex: 1,
        loanValueFactor: 1,
        loanCloseFactor: 0.5


CollateralConfigs
    Id 0
        description: "Ecosystem market mover",
        loanToValueRatio: 0.75,
        liquidationThresholdSpread: 0.05,
        liquidationBonusRate: 0.1,
    Id 1 
        description: "Global Market Mover",
        loanToValueRatio: 0.75,
        liquidationThresholdSpread: 0.05,
        liquidationBonusRate: 0.1,

   Id 2 
        description: "Stable coin",
        loanToValueRatio: 0.65,
        liquidationThresholdSpread: 0.10,
        liquidationBonusRate: 0.10,
   
    Id 3 
        description: "Volatile assets 1 (Project Tokens)",
        loanToValueRatio: 0.35,
        liquidationThresholdSpread: 0.15,
        liquidationBonusRate: 0.15,
    
    Id 4 
        description: "Volatile assets 2 (Culture Coins)",
        loanToValueRatio: 0.30,
        liquidationThresholdSpread: 0.20,
        liquidationBonusRate: 0.15,

    Id 5 
        description: "Default Efficiency Config (Same resources in the pair)",
        loanToValueRatio: 0.94,
        liquidationThresholdSpread: 0.0,
        liquidationBonusRate: 0.05,
    
    Id 6
        description: "Efficiency XRD derivatives",
        loanToValueRatio: 0.90,
        liquidationThresholdSpread: 0.0,
        liquidationBonusRate: 0.05,
   
    Id 7 
        description: "Efficiency LSU",
        loanToValueRatio: 0.92,
        liquidationThresholdSpread: 0.0,
        liquidationBonusRate: 0.05,


IsolationConfig[] =
    [
        // 0 =>
        {
            description: "Low risk: native assets",
            riskIndex: 0,
            isolationMode: { type: "Loose" },
        },
        // 1 =>
        {
            description: "Low risk: bridged assets",
            riskIndex: 1,
            isolationMode: { type: "Loose" },
        },
        // 2 =>
        {
            description: "Medium risk: project tokens",
            riskIndex: 2,
            isolationMode: { type: "Loose" },
        },
        // 3 =>
        {
            description: "Medium risk: established meme coins",
            riskIndex: 3,
            isolationMode: { type: "Strict" },
        }
    ]