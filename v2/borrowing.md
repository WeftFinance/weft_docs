

## Borrowing

Assets provided to lending pools are available for borrowers. The Weft Lending Protocol is over-collateralize, meaning borrowers must deposit collateral to borrow.


### User Positions NFT

“Wefty” is the NFT used by Weft to house users’ collateral and loan positions. Leveraging the capabilities of Scrypto and the Radix Engine, Weft ensures secure operations related to Wefties. Wefties’ metadata stores two types of data: collateral positions and loan positions.



* Collateral Positions: Organized based on the addresses of assets used as collateral and the deposited collateral amount. Users can have multiple collateral positions within a single Wefty.
* Loan Positions: These oversee the state of loans for different asset types associated with the amount borrowed. Loan positions are categorized by borrowed asset addresses, similar to collateral positions.


### Collateral Pools

Collateral Pools enable borrowers to deposit collateral and obtain borrowing capacity. Weft offers three types of collateral pools:



1. Asset Collateral Pools: Suppliers do not earn interest.
2. Deposit Unit Collateral Pool: Suppliers can provide Deposit Units obtained after supplying assets to lending pools, earning interest while leveraging assets for borrowing power.
3. Liquid Stacking Unit Collateral Pool: Suppliers can provide listed Validator LSU as collateral and continue earning network emissions.


### Borrowing Power

To control the ratio of coins that can be borrowed using a collateral coin, Weft uses a parameter called the Loan-to-Value (LTV) Ratio for each supported collateral. For example, if you deposit 10,000 XRD into a Collateral Pool with an XRD price of $0.10 and an LTV of 70%, you can borrow up to 70% of your XRD value, which equals $700. The LTV ratio is usually below 1.

Your borrowing power depends on the sum of each collateral value multiplied by its LTV. The maximum value of all borrowed assets must be lower than the borrowing power. Any attempt to borrow beyond this limit will be rejected by the protocol.

Let's use the previous example with the following inputs:



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


### NFT Collateral Pool. 

Under certain conditions, a non-fungible resource could be listed to be used as collateral. If The non-fungible can be redeemed for fungible resources already listed as collateral, it can be configured as accepted as collateral with a dedicated NFT Collateral Pool. 

NFT Collateral borrowing power are evaluated in to stages: 



1. First, the protocol determines the amount of redeemable fungible resources
2. Evaluate borrowing power contributions as normal fungible collateral based on collateral pools LTV. 

This feature can come in handy to leverage value locks under non-fungible resources like liquidity providing receipts or staking receipts without losing exposure to expected yield. 


### Borrowing with efficiency 

Weft makes available efficiency mode under specific conditions on collateral and loan resources. Under this mode , borrowers can take advantage of higher LTV lending to higher borrowing power. 

Specifically, Weft enables automatic efficiency on any CDP with only ONE loan position. So if there specific loan to value ratio defined as efficiency parameters in one or many collateral, they will be used systematically. 

On the other hand, efficiency mode is disabled if there is more than one loan position. As CDP are simple NFT, the user can create as many as he would like to have and optimize his collateral distribution to take advantage of available efficiency pairs configured. 


### Risk Index and Isolation

In addition to the LTV, each collateral has a risk index indicating its risk level beyond classic metrics like volatility or liquidity. This risk index is used in conjunction with a Max Collateral Risk Index associated with each lending pool. These parameters apply effective isolation of collateral based on the accepted risk level for each lending pool, in two steps:



1. Evaluation of the CDP Risk Index: This is based on all available collateral. There are two ways to define a collateral risk index: Loose and Strict. If there is collateral with a Strict risk index, the CDP risk index is the maximum of all Strict risk indexes. Otherwise, the CDP risk index is the average of the loose risk indexes, weighted by the value of the collaterals.
2. Comparison with Loan Max Collateral Risk Index: The CDP risk index is checked against the Max Collateral Risk Index of each loan. If a loan has a Max Collateral Risk Index lower than the CDP risk index, the request will be rejected. This can occur when attempting to borrow an asset that does not accept a risky collateral present in the CDP or trying to add a collateral too risky for a loan already present in the CDP.

The result of the described process is an effective isolation based on risk index configuration with the ability to control how strict this isolation can be.

To illustrate how Risk Index and Isolation work within the Weft protocol, let's consider an example involving different types of collateral and a single loan.

Scenario Setup 1:



* Collateral 1: 50,000 XRD (Radix tokens)
    * Value: $0.10 per XRD
    * Loose Risk Index: 4
* Collateral 2: 1 xETH (tokenized Ethereum)
    * Value: $2,000 per xETH
    * Strict Risk Index: 8
* Loan: 5,000 xUSDC (stablecoin)
    * Value: $1 per xUSDC
    * Max Collateral Risk Index: 4

Step-by-Step Process:

1. Evaluation of the CDP Risk Index:



* Collateral Value of XRD:
    * 50,000 XRD * $0.10 = $5,000
* Collateral Value of xETH:
    * 1 xETH * $2,000 = $2,000

Since xETH has a Strict Risk Index, the CDP risk index is determined by the maximum of all Strict risk indexes.



* CDP Risk Index: 8 (as xETH has a Strict Risk Index of 8)

2. Comparison with Loan Max Collateral Risk Index:



* The CDP Risk Index (8) is compared against the Max Collateral Risk Index of the loan (4).

Since the CDP Risk Index (8) is higher than the Max Collateral Risk Index of the loan (4), the request to borrow 5,000 xUSDC is rejected by the protocol even if the collateral value is enough to cover the loan.

Scenario Setup 2:


* Collateral 1: 50,000 XRD (Radix tokens)
    * Value: $0.10 per XRD
    * Loose Risk Index: 4
* Collateral 2: 0.2 xBTC (tokenized Bitcoin)
    * Value: $20,000 per xBTC
    * Loose Risk Index: 5
* Loan: 5,000 xUSDT (stablecoin)
    * Value: $1 per xUSDC
    * Max Collateral Risk Index: 4.5

1. Evaluation of the CDP Risk Index:



* Collateral Value of XRD:
    * 50,000 XRD * $0.10 = $5,000
* Collateral Value of xBTC:
    * 0.2 xBTC * $20,000 = $4,000

Since both collaterals have Loose Risk Indexes, the CDP Risk Index is the weighted average of the loose risk indexes.



* Weighted Risk Index Calculation:
    * (5,000∗4)+(4,000∗5)(5,000∗4)+(4,000∗5) / 5,000+4,0005,000+4,000
    * (20,000 + 20,000) / 9,000 = 4.44
* CDP Risk Index: 4.44

2. Comparison with Loan Max Collateral Risk Index:



* The CDP Risk Index (4.44) is compared against the Max Collateral Risk Index of the  loan (4.5).

Since the CDP Risk Index (4.44) is lower than the Max Collateral Risk Index of the loan (4.5), the request to borrow 5,000 xUSDT is accepted by the protocol.
