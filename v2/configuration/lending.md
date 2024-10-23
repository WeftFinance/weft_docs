# Lending configuration

<!-- Weft's lending interest rates are determined by the Utilization Rate of resource pools, reflecting the availability of capital. The interest model helps manage liquidity risk by incentivizing users to keep liquidity at healthy levels:

- **When capital is abundant:** Low interest rates are applied to encourage borrowing.
- **When capital is scarce:** High interest rates incentivize debt repayment and attract new capital deposits.

## Interest Model Overview

The interest rate model operates in three distinct phases based on the utilization of the pool: **Normal Demand, High Demand,** and **Max Utilization.** Each phase has specific thresholds and responds to the level of capital usage in the pool:

1. **Normal Demand (0-70% usage):** When the pool usage is below 70%, the interest rate remains relatively low to incentivize more borrowing. This phase ensures that liquidity remains active and accessible.

2. **High Demand (70-90% usage):** At this stage, the pool is experiencing higher demand for resources. The interest rate begins to increase more significantly as the utilization approaches 90%, signaling that capital is becoming limited.

3. **Max Utilization (90-100% usage):** When usage exceeds 90%, the pool is considered to be at a critical level. In this phase, interest rates rise sharply to deter new borrowing and strongly encourage repayments, as further borrowing could destabilize the pool's liquidity.

## Interest Rate Curves

Weft uses three different interest rate curves for various loan profiles, each tailored to the nature of the assets being lent:

1. **Stablecoin Interest Curve:** Lending and borrowing of stablecoins are incentivized with less aggressive interest rate increases in the High Demand phase, allowing for more flexibility when demand rises. However, the Max Utilization phase still imposes steep rates to avoid overuse.

2. **XRD Interest Curve:** Although XRD is a volatile asset, lending it is encouraged due to its role in high-yield strategies. However, in the Max Utilization phase, interest rates climb aggressively to reduce risk and discourage further borrowing when the pool is nearing its capacity.

3. **Volatile Asset Curve:** For highly volatile assets, borrowing is generally discouraged. The interest rates start higher than those for stablecoins or XRD and exhibit a much steeper climb in the Max Utilization phase, reflecting the increased risk associated with these assets. -->

## Interest rate curves

The table below details the interest rate progression for each type of asset across the three phases:

| ID | Asset Type          | Normal Demand<br/>0%-70% | High Demand<br/>70%-90% | Max Utilization<br/>90%-100%|Associated resources|
|----------|---------------------|----------------------|-----------------------|------------------------|----------|
| 0        | Stablecoin           | 0% to 4%             | 4% to 50%              | 50% to 500%            |xSUDC, xUSDT|
| 1        | XRD                  | 0% to 5%             | 5% to 100%             | 100% to 1000%          |XRD|
| 2        | Volatile Assets      | 0% to 6%             | 6% to 150%             | 100% to 1500%          |xwBTC,xETH|

These breakpoints ensure that interest rates reflect the varying levels of risk and demand associated with different types of assets, allowing Weft to manage liquidity effectively while optimizing returns for lenders.

![Interest Rate Curves (Log Scale)](/interest-rate-curves.png "Interest Rate Curves (Log Scale)")

## Lending pools limits

| **Parameter**| **Description** | **Current Value** |
|--------------|-----------------|-------------------|
|**FlashLoanAmountLimit**| Define the maximum amount that can be borrowing a flash loan. It'as an optional parameter, but if defined, It can be in two ways: Fix amount, or a ratio of current total supply |SupplyRatio: 20%|
|**DepositLimit**|Define the maximum amount of an asset that can be deposited into a lending pool. It is defined in similar ways of the FlashLoanAmountLimit|SupplyRatio: 50%|
|**UtilizationLimit**|Maximum allowed pool usage. Meaning the max ratio between total borrowed asset and the total deposited assets| 100% (Not defined)|
|**InterestUpdatePeriod**|Define (in seconds) the period of interest accrual update and protocol fee calculation| 86400 (1 day)|
