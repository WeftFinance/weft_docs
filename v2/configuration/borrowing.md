
# Borrowing configuration

Following parameters form the risk management framework within the Weft protocol, ensuring that borrowing and collateralization activities are managed safely and efficiently.

## Global Configuration 

The table below outlines the key global parameters used within the Weft protocol, including their descriptions and current values.

| **Parameter**| **Description** | **Current Value** |
|--------------|-----------------|-------------------|
| **MaxCdpPosition**| To avoid "state bomb" where transaction fees become too high due to excessive state loading, the maximum number of positions allowed in a Wefty is limited.    | 10 |
| **PriceExpirationPeriod**| The duration (in seconds) for which a fetched asset price remains valid. This represents the maximum accepted keep-alive period from price feeds.|  14400<br/> (4 hours) |
| **PriceCacheMode**| Price data from Oracles is cached to save on transaction fees. The two caching modes are: **Hash** (cached per transaction) and **Debounce** (cached within a period). | Hash           |
|**MaxClaimNftValue**|Maximum value in XRD of an unstaking Claim NFT allowed in a CDP|10000000|


## LTV and Liquidation Threshold

These parameters determine when a collateral asset is considered sufficient to cover a loan or when it becomes eligible for liquidation:

- **Max Loan-To-Value Ratio**: The highest percentage of a collateral's value that can be used to secure loans.
- **Liquidation Threshold**: The LTV level at which the collateral is deemed under-secured, triggering potential liquidation.
- **Liquidation Bonus Rate**: The additional percentage given to liquidators as a reward for liquidating an under-collateralized position.

| **ID** | **Description**                 | **Max Loan-To-Value Ratio** | **Liquidation Threshold** | **Liquidation Bonus Rate** | **Associated Resources**                     |
|--------|---------------------------------|-----------------------------|---------------------------|----------------------------|----------------------------------------------|
| O      | XRD derivatives                 | 0.75                        | 0.8                       | 10%                        | XRD (With All LSU), LSULP                    |
| 1      | Bridged Volatile Asset          | 0.75                        | 0.8                       | 10%                        | xwBTC, xETH                                  |
| 2      | Bridged Stable Asset            | 0.65                        | 0.75                      | 10%                        | xUSDC, xUSDT                                 |
| 3      | dApp Utility Tokens             | 0.25                        | 0.5                       | 15%                        | (TBD)        |
| 4      | Meme Coins                      | 0.15                        | 0.3                       | 15%                        | (TBD)                                 |
| 5      | Default Efficiency Config       | 0.95                        | 0.95                      | 5%                         | (Same resources in the pair)                 |
| 6      | Default Correlation Group       | 0.9                         | 0.9                       | 10%                        | (Use for all efficiency groups)                 |

## Correlation Groups

Groups of assets that are closely related, enabling more favorable borrowing terms under certain conditions. Each correlation group is linked to an LTV and liquidation configuration.

| **ID** | **Description**          | **LTV Config ID**                   | **Associated Resources**                   |
|--------|--------------------------|-------------------------------------|--------------------------------------------|
| 0      | XRD/LSU and XRD derivatives  | 6 (Default Correlation Group Efficiency) | XRD (With All LSU), LSULP                   |
| 1      | USD Stable Coins         | 6 (Default Correlation Group Efficiency) | xUSDC, xUSDT                                 |

## Collateral Isolation Groups

These groups categorize different collateral types based on their risk levels, ensuring that assets with varying risk profiles are managed independently.

| **ID** | **Description**              | **Associated Resources**                         |
|--------|------------------------------|-------------------------------------------------|
| 0      | Default (no isolation)       | XRD (With All LSU), xUSDC, xUSDT, xETH, xwBTC, LSULP |
| 1      | Ecosystem dApp Tokens        | (TBD)          |
| 2      | Meme Coins                   |   (TBD)                                            | 

## Loan Resource Config

This configuration defines the borrowing terms for different assets:

- **loanCloseFactor**: The maximum portion of a loan that can be repaid during a liquidation process.
- **loanValueFactor**: A multiplier used to adjust the impact of a loan position, potentially increasing its weight to address certain risk factors.

| **ID** | **Description** | **loanCloseFactor** | **loanValueFactor** | **Associated Resources**       |
|--------|-----------------|---------------------|---------------------|--------------------------------|
| O      | Default         | 0.5                 | 1                   | XRD, xUSDC, xUSDT, xETH, xwBTC  |
