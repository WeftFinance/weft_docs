
# Lending

In decentralized finance (DeFi), lending digital assets to borrowers is a common way to earn additional yield. When you lend your assets, borrowers must pay interest on the borrowed amount. As a lender, you receive this interest as a reward for providing your funds.


## Lending Pools

Lending Pools allow suppliers to earn interest through deposits and withdraw assets at any time. Borrowers have access to these assets by providing collateral to secure their loans. Over time, borrowers will be charged with interest that will be paid to lenders. 


## Deposit Units

Weft tokenizes assets supplied to the lending pools as Weft Deposit Units - also called w2-Assets: w2-XRD, w2-xUSDC, ... - These units, similar to Radix Pool Units, are interest-bearing fungible resources that represent proof of deposit and allow the claiming of deposited assets. They also enable the creation of secondary markets for constructing positions without direct interaction with the underlying lending pool, facilitating the development of derivative products that include debt obligations.

## Interest Rate


Weft's lending interest rates are determined by the Utilization Rate of resource pools, reflecting the availability of capital. The interest model helps manage liquidity risk by incentivizing users to keep liquidity at healthy levels:

- **When capital is abundant:** Low interest rates are applied to encourage borrowing.
- **When capital is scarce:** High interest rates incentivize debt repayment and attract new capital deposits.


The interest rate model operates in three distinct phases based on the utilization of the pool: **Normal Demand, High Demand,** and **Max Utilization.** Each phase has specific thresholds and responds to the level of capital usage in the pool:

1. **Normal Demand (0-70% usage):** When the pool usage is below 70%, the interest rate remains relatively low to incentivize more borrowing. This phase ensures that liquidity remains active and accessible.

2. **High Demand (70-90% usage):** At this stage, the pool is experiencing higher demand for resources. The interest rate begins to increase more significantly as the utilization approaches 90%, signaling that capital is becoming limited.

3. **Max Utilization (90-100% usage):** When usage exceeds 90%, the pool is considered to be at a critical level. In this phase, interest rates rise sharply to deter new borrowing and strongly encourage repayments, as further borrowing could destabilize the pool's liquidity.


