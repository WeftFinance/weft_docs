# Configuration

## Global Configuration 

The table below outlines the key global parameters used within the Weft protocol, including their descriptions and current values.

| **Parameter**| **Description** | **Current Value** |
|--------------|-----------------|-------------------|
| **MaxCdpPosition**| To avoid "state bomb" where transaction fees become too high due to excessive state loading, the maximum number of positions allowed in a Wefty is limited.    | 10 |
| **PriceExpirationPeriod**| The duration (in seconds) for which a fetched asset price remains valid. This represents the maximum accepted keep-alive period from price feeds.|  14400<br/> (4 hours) |
| **PriceCacheMode**| Price data from Oracles is cached to save on transaction fees. The two caching modes are: **Hash** (cached per transaction) and **Debounce** (cached within a period). | Hash           |
|**MaxClaimNftValue**|Maximum value in XRD of an unstaking Claim NFT allowed in a CDP|10000000|



## Protocol Fee Configuration 

To maintain the sustainability of the protocol, Weft charges transaction fees for certain operations. Please note that not all fees are fixed, and some may have a 0% rate. Refer to the protocol configuration for specific details.

| **Fee Type**                  | **Description**                                                                                                                                              | **Current Setting**                        | **Protocol Share** |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------------------|
| **CDPCreationFee**          | A fixed fee charged each time a Weft CDP (Collateralized Debt Position) is created. This acts as a Sybil resistance mechanism.                               | 0 XRD                                     | 100%                  |
| **BorrowingFee**             | When users take out a loan, a portion of the borrowed amount is collected by the protocol as income.                                                         | 0%                                        | 20%                  |
| **BorrowingInterestFee**     | When users repay loan interest, a percentage of the total interest is allocated to the protocol as income.                                                   | Depends on pool usage                                      | 20%                  |
| **LiquidationFee**           | If a user's CDP becomes unhealthy and is liquidated, a percentage of the liquidation bonus is collected by the protocol as income.                           | 5% to 15% (depending on asset risk)      | 10%                  |
| **FlashLoanFee**            | For flash loans, a small percentage of the loan amount is collected by the protocol as income.                                                                | 0.1%                                      | 50%                  |

