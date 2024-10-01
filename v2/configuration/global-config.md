# Configuration

## Global Configuration 

The table below outlines the key global parameters used within the Weft protocol, including their descriptions and current values.

| **Parameter**| **Description** | **Current Value** |
|--------------|-----------------|-------------------|
| **MaxCdpPosition**| To avoid "state bomb" where transaction fees become too high due to excessive state loading, the maximum number of positions allowed in a Wefty is limited.    | 10 |
| **PriceExpirationPeriod**| The duration (in seconds) for which a fetched asset price remains valid. This represents the maximum accepted keep-alive period from price feeds.|  14400<br/> (4 hours) |
| **PriceCacheMode**| Price data from Oracles is cached to save on transaction fees. The two caching modes are: **Hash** (cached per transaction) and **Debounce** (cached within a period). | Hash           |


## Lending pools configuration

| **Parameter**| **Description** | **Current Value** |
|--------------|-----------------|-------------------|
|**FlashLoanAmountLimit**| Define the maximum amount that can be borrowing a flash loan. It'as an optional parameter, but if defined, It can be in two ways: Fix amount, or a ratio of current total supply |SupplyRatio: 20%|
|**DepositLimit**|Define the maximum amount of an asset that can be deposited into a lending pool. It is defined in similar ways of the FlashLoanAmountLimit|SupplyRatio: 50%|
|**UtilizationLimit**|Maximum allowed pool usage. Meaning the max ratio between total borrowed asset and the total deposited assets| 100% (Not defined)|
|**InterestUpdatePeriod**|Define (in seconds) the period of interest accrual update and protocol fee calculation| 86400 (1 day)|

## Protocol Fee Configuration 

To maintain the sustainability of the protocol, Weft charges transaction fees for certain operations. Please note that not all fees are fixed, and some may have a 0% rate. Refer to the protocol configuration for specific details.

| **Fee Type**                  | **Description**                                                                                                                                              | **Current Setting**                        | **Protocol Share** |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------------------|
| **CDP Creation Fee**          | A fixed fee charged each time a Weft CDP (Collateralized Debt Position) is created. This acts as a Sybil resistance mechanism.                               | 0 XRD                                     | 0%                  |
| **Borrowing Fee**             | When users take out a loan, a portion of the borrowed amount is collected by the protocol as income.                                                         | 0%                                        | 0%                  |
| **Borrowing Interest Fee**     | When users repay loan interest, a percentage of the total interest is allocated to the protocol as income.                                                   | Depends pool usage                                      | 20%                  |
| **Liquidation Fee**           | If a user's CDP becomes unhealthy and is liquidated, a percentage of the liquidation bonus is collected by the protocol as income.                           | 5% to 15% (depending on asset risk)      | 10%                  |
| **Flash Loan Fee**            | For flash loans, a small percentage of the loan amount is collected by the protocol as income.                                                                | 0.1%                                      | 10%                  |

