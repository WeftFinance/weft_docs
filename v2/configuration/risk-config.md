<!-- ## Lending pools configuration

| **Parameter**| **Description** | **Current Value** |
|--------------|-----------------|-------------------|
|**FlashLoanAmountLimit**| Define the maximum amount that can be borrowing a flash loan. It'as an optional parameter, but if defined, It can be in two ways: Fix amount, or a ratio of current total supply |SupplyRatio: 20%|
|**DepositLimit**|Define the maximum amount of an asset that can be deposited into a lending pool. It is defined in similar ways of the FlashLoanAmountLimit|SupplyRatio: 50%|
|**UtilizationLimit**|Maximum allowed pool usage. Meaning the max ratio between total borrowed asset and the total deposited assets| 100% (Not defined)|
|**InterestUpdatePeriod**|Define (in seconds) the period of interest accrual update and protocol fee calculation| 86400 (1 day)| -->

# Risk parameters

## Lending pools limits

| **Parameter**| **Description** | **Current Value** |
|--------------|-----------------|-------------------|
|**FlashLoanAmountLimit**| Define the maximum amount that can be borrowing a flash loan. It'as an optional parameter, but if defined, It can be in two ways: Fix amount, or a ratio of current total supply |SupplyRatio: 20%|
|**DepositLimit**|Define the maximum amount of an asset that can be deposited into a lending pool. It is defined in similar ways of the FlashLoanAmountLimit|SupplyRatio: 50%|
|**UtilizationLimit**|Maximum allowed pool usage. Meaning the max ratio between total borrowed asset and the total deposited assets| 100% (Not defined)|
|**InterestUpdatePeriod**|Define (in seconds) the period of interest accrual update and protocol fee calculation| 86400 (1 day)|


## Loan resource config

| **ID**| **Description** | **borrowMaxRiskIndex** |**loanCloseFactor** |**loanValueFactor** |
|-------|-------|--------|--------|--------|
|O|XRD derivatives|3|0.5|1|
|1|Bridged Stable coin|2|0.5|1|
|2|Bridged Volatile asset|1|0.5|1|

## LTV and Liquidation threshold

| **ID**| **Description** | **Max Loan-To-Value Ratio** |**Liquidation Threshold** |**Liquidation Bonus Rate** |Associated resources|
|-------|-------|--------|--------|--------|--------|
|O|XRD derivatives|0.75|0.8|10%|XRD LSULP|
|1|Bridged Volatile asset|0.75|0.8|10%|xwBTC xETH|
|2|Bridged Stable asset|0.65|0.75|10%|xUSDC xUSDT|
|3|dApp utility Tokens|0.35|0.5|15%||
|4|Meme coins|0.3|0.5|15%||
|5|Default Efficiency Config (Same resources in the pair)|0.95|0.95|5%|-|
|6|Efficiency XRD / XRD derivatives|0.9|0.9|10%|-|

## Collateral isolation parameters

| **ID**| **Description** | **Risk Index** |**Isolation Mode** |
|-------|-------|--------|--------|
|0|Ecosystem low risk assets|0|Loose|
|1|Bridge low risk assets|1|Loose|
|2|dApp utility tokens|2|Loose|
|3|Meme coins|3|Strict|