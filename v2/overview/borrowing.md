

# Borrowing

Assets provided to lending pools are available for borrowers. The Weft Lending Protocol is over-collateralized, meaning borrowers must deposit collateral to borrow.


## User Positions NFT

“Wefty” is the NFT used by Weft to house users’ collateral and loan positions. Leveraging the capabilities of Scrypto and the Radix Engine, Weft ensures secure operations related to Wefties. Wefties’ metadata stores two types of data: collateral positions and loan positions.




## Collateral Pools

Collateral Pools enable borrowers to deposit collateral and obtain borrowing capacity. Weft offers three types of collateral pools:



1. Asset Collateral Pools: Suppliers do not earn interest.
2. Deposit Unit Collateral Pool: Suppliers can provide Deposit Units obtained after supplying assets to lending pools, earning interest while leveraging assets for borrowing power.
3. Liquid Stacking Unit Collateral Pool: Suppliers can provide listed Validator LSU as collateral and continue earning network emissions.

## NFT Collateral Pool. 

Under certain conditions, a non-fungible resource could be listed to be used as collateral. If The non-fungible can be redeemed for fungible resources already listed as collateral, it can be configured as accepted as collateral with a dedicated NFT Collateral Pool. 

NFT Collateral borrowing power are evaluated in to stages: 



1. First, the protocol determines the amount of redeemable fungible resources
2. Evaluate borrowing power contributions as normal fungible collateral based on collateral pools LTV. 

This feature can come in handy to leverage value locks under non-fungible resources like liquidity providing receipts or staking receipts without losing exposure to expected yield. 


## Borrowing Power

To control the ratio of assets that can be borrowed using a collateral asset, Weft uses a parameter called the Loan-to-Value (LTV) Ratio for each supported collateral. For example, if you deposit 10,000 XRD into a Collateral Pool with an XRD price of $0.10 and an LTV of 70%, you can borrow up to 70% of your XRD value, which equals $700. The LTV ratio is usually below 1.

Your borrowing power depends on the sum of each collateral value multiplied by its LTV. The maximum value of all borrowed assets must be lower than the borrowing power. Any attempt to borrow beyond this limit will be rejected by the protocol.

### **Example Scenarios**

Let's use an example to illustrate calculation of the Borrowing Power:

* Collateral: 10,000 XRD
* Current XRD price: $0.10
* Loan: 500 xUSDC
* Liquidation Threshold (LT) for XRD: 75%
* Loan-to-Value (LTV) ratio for XRD: 70%

First, we calculate the value of the collateral:



* Collateral Value: 10,000 XRD * $0.10 = $1,000

Next, we calculate the borrowing power using the LTV ratio:



* Borrowing Power: $1,000 * 70% = $700

This means you can borrow up to $700 worth of assets using the 10,000 XRD as collateral. In this case, since you have already borrowed 500 xUSDC:



* Current Loan Value: 500 xUSDC = $500

To determine how much more you can borrow, subtract the current loan value from the borrowing power:



* Remaining Borrowing Power: $700 - $500 = $200

Thus, with 10,000 XRD as collateral, and considering the already borrowed 500 xUSDC, you can borrow up to an additional $200 worth of assets. Any attempt to borrow beyond this limit will be rejected by the protocol.



## Efficient Borrowing

Weft offers an efficiency mode for borrowing when highly correlated collateral and loan resources are used. In this mode, borrowers benefit from higher Loan-to-Value (LTV) ratios, allowing for greater borrowing power.

Each loan and collateral resource can be assigned to a correlation group if applicable. For example, xUSDT and xUSDC may belong to the same correlation group. Weft enables automatic efficiency for any Collateralized Debt Position (CDP) that includes only one correlation group based on the collateral and loan resources present. The LTV ratio specified for that correlation group is then applied to all the collateral within the CDP.

However, efficiency mode is disabled if multiple correlation groups are detected within a CDP. Since CDPs are represented as simple NFTs, users can create as many as they wish to optimize their collateral distribution and take advantage of available correlation groups.

In addition to Correlation Groups, Weft allows for the configuration of a default LTV that applies when the borrowed resource matches the collateral resource. However, this setting is only effective for CDPs that contain a single loan position and resulting LTV as priority over Correlation Groups LTV.
