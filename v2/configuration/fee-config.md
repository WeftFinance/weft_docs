# Protocol Fee Configuration 

To maintain the sustainability of the protocol, Weft charges transaction fees for certain operations. Please note that not all fees are fixed, and some may have a 0% rate. Refer to the protocol configuration for specific details.

## Lending Fee Configuration 

| **Fee Type**                  | **Description**                                                                                                                                             | **Current Setting**                       | **Protocol Share**  |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------------------|
| **BorrowingFee**              | When users take out a loan, a portion of the borrowed amount is collected by the protocol as income.                                                        | 0%                                        | 50%                 |
| **FlashLoanFee**              | For flash loans, a small percentage of the loan amount is collected by the protocol as income.                                                              | 0.1%                                      | 50%                 |
| **Interest**      | When users repay loan interest, a percentage of the total interest is allocated to the protocol as income.                                                  | Depends on pool usage                     | 20%                 |



## Borrowing Fee Configuration 
| **Fee Type**                  | **Description**                                                                                                                                              | **Current Setting**                        | **Protocol Share** |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|---------------------|
| **CDPCreationFee**            | A fixed fee charged each time a Weft CDP (Collateralized Debt Position) is created. This acts as a Sybil resistance mechanism.                               | 0 XRD                                     | 100%                  |
| **LiquidationFee**            | If a user's CDP becomes unhealthy and is liquidated, a percentage of the liquidation bonus is collected by the protocol as income.                           | 3% to 10% (depending on asset risk)      | 20%                  |

