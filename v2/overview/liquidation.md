

# Liquidation

Liquidation is the process that occurs when the collateral value of a Collateralize Debt Position (CDP) no longer adequately covers its loan or debt positions. This can happen if the collateral decreases in value or the borrowed debt increases in value relative to the collateral. When this occurs, the protocol allows anyone (referred to as the liquidator) to repay part of the debt in exchange for the collateral. To ensure all positions remain over-collateralize, liquidated collateral is returned with a liquidation bonus, making the process attractive to potential liquidators.


## Liquidation Threshold

To determine if a CDP can be liquidated, we assess its health using a parameter called the liquidation threshold, which is associated with each collateral pool. This parameter, similar to the Loan-to-Value (LTV) ratio, defines the maximum allowable fluctuation in collateral value. While the LTV ratio defines the maximum loan value against collateral at the time of user action, the liquidation threshold defines the maximum loan value against collateral value due to market fluctuations.


## Health Factor

The health factor of a CDP is calculated as the total loan value of the CDP divided by the sum of all collateral values, each multiplied by their respective liquidation thresholds. This index indicates how close a CDP is to being liquidated. A health factor greater than 1 means the CDP is at risk of liquidation, while a health factor of 0 means there is no loan and thus no risk of liquidation. This design ensures that the CDP remains over-collateralize.

Let's consider an example where a user has a CDP containing XRD as collateral and xUSDC as the loan.

## Example Scenarios

* Collateral: 10,000 XRD
* Current XRD price: $0.10
* Loan: 500 xUSDC
* Liquidation Threshold (LT) for XRD: 75%
* Loan-to-Value (LTV) ratio for XRD: 70%

First, we calculate the value of the collateral and the loan:



* Collateral Value: 10,000 XRD * $0.10 = $1,000
* Loan Value: 500 xUSDC = $500

Next, we calculate the health factor using the liquidation threshold:



* Liquidation Value of Collateral: $1,000 * 75% = $750
* Health Factor: $500 (Loan Value) / $750 (Liquidation Value) = 0.67

Since the health factor is less than 1, the CDP is currently safe from liquidation. If the value of XRD drops or the value of xUSDC increases such that the health factor exceeds 1, the CDP will be at risk of liquidation.

For instance, if the price of XRD drops to $0.05:



* New Collateral Value: 10,000 XRD * $0.05 = $500
* New Liquidation Value of Collateral: $500 * 75% = $375
* New Health Factor: $500 (Loan Value) / $375 (Liquidation Value) = 1.33

In this scenario, the health factor exceeds 1, indicating that the CDP is now under-collateralize and subject to liquidation. A liquidator could repay the debt and claim the collateral, plus a liquidation bonus.

## Liquidation of NFT Collateral
(//TODO)
