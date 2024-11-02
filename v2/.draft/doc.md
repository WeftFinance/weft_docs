# Weft V2: Time to Scale


# Overview


## What is Weft?

Weft is a decentralized lending platform that harnesses the capabilities of Radix DLT to provide a fast, secure, and innovative approach to borrowing and lending assets. With Weft, users can easily create and manage collateralize debt positions (CDPs) encapsulated within NFTs called Wefties. The platform allows users to lend digital assets, earn yields, lock collateral, and access loans, all while prioritizing security through a unique method of storing and managing loan and deposit-related states.

The Weft Finance lending market went live on November 30, 2020. So far it’s playing a quite useful role in the Radix Ecosystem allowing users to leverage their XRD, LSULP, or xUSDC to get xUSDC or XRD liquidity without losing their exposition. But we know that 6 assets offer quite narrow possibilities and we believe it’s time to go the extra mile.

The Radix ecosystem is growing on digital assets, we have a wide range of digital assets boasting value for their holders with various utilities. Blue ship dApps like CaviarNine, Ociswap, and DefiPlaza cover needs for tokens trading, At Weft, we believe it’s time to add a bigger contribution to the lending landscape. We aim to provide options for Radix ecosystem asset holders to leverage on the value they hold and get liquidity not only in XRD and xUSDC but also in many other quality assets with decent liquidity.

To do so we are bringing important improvements to the Weft Lending Market to be released in the v2 protocol upgrade.


## What's new in Weft V2

The current version of Weft uses a fine-grain loan-to-value ratio to evaluate CDP position’s health. to put it simply, Each collateral asset has an LTV defined for each loan asset. The approach allows very flexible risk management. For example, the setup allows borrowing up to 85% of collateral value if the collateral is LSULP and the loan is in XRD, but the LTV changes to 80% if the loan assets are xUSDC. Another example is the fact that borrowing using the same asset as collateral is not allowed by setting LTV to 0% if the borrowed asset is the same as the asset used as collateral. This offers powerful possibilities but introduces complexity in the context of multiple assets listed. This complexity translates to rapidly growing transaction fees the more we have assets listed.

Weft V2 introduce 3 key improvements to to allow support of a high amount of asset reliably:



* More efficient positions health checking
* Isolation and efficiency mode
* Advance Collateral management allowing listing of NFT as collateral

The feature section will give more details on these features.


## The “Unit” Concept

Before describing the features of Weft Lending dApp, we would like to explore some key concepts used under the hood.

Weft utilizes mechanics similar to Pool Units introduced by the Radix team for tracking shares of pooled liquidity. When users deposit assets into the pool, they receive Deposit Units that represent their proportion of the pool and entitle them to a share of the interest collected from borrowers. Deposit Units are interest-bearing assets that the user can redeem from the pool at any time.

Similarly, borrowed amounts are tracked using the Loan Unit concept. The protocol monitors the total amount of assets borrowed from the pool. When a user borrows assets, they receive Loan Units stored in a CDP, reflecting their share of debt obligation in the total borrowed amount, including the interest to be paid back. The loan unit and the loan-to-unit ratio (analogous to the deposit-to-unit ratio) are used to calculate how much a user must repay to the pool.


# Lending Market Features

Weft V2 features are organized into four main categories: Lending Operations, Borrowing Operations, Liquidation, and some extra features.


## Lending

In decentralized finance (DeFi), lending digital assets to borrowers is a common way to earn additional yield. When you lend your assets, borrowers must pay interest on the borrowed amount. As a lender, you receive this interest as a reward for providing your funds.


### Lending Pools

Lending Pools allow suppliers to earn interest through deposits and withdraw assets at any time. Borrowers have access to these assets by providing collateral to secure their loans. Over time, borrowers will be charged with interest that will be paid to lenders. 


### Deposit Units

Weft tokenizes assets supplied to the lending pools as Weft Deposit Units (wAssets). These units, similar to Radix Pool Units, are interest-bearing fungible resources that represent proof of deposit and allow the claiming of deposited assets. They also enable the creation of secondary markets for constructing positions without direct interaction with the underlying lending pool, facilitating the development of derivative products that include debt obligations.


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
* Collateral 2: 0.2 xwBTC (tokenized Bitcoin)
    * Value: $20,000 per xwBTC
    * Loose Risk Index: 5
* Loan: 5,000 xUSDT (stablecoin)
    * Value: $1 per xUSDC
    * Max Collateral Risk Index: 4.5

1. Evaluation of the CDP Risk Index:



* Collateral Value of XRD:
    * 50,000 XRD * $0.10 = $5,000
* Collateral Value of xwBTC:
    * 0.2 xwBTC * $20,000 = $4,000

Since both collaterals have Loose Risk Indexes, the CDP Risk Index is the weighted average of the loose risk indexes.



* Weighted Risk Index Calculation:
    * (5,000∗4)+(4,000∗5)(5,000∗4)+(4,000∗5) / 5,000+4,0005,000+4,000
    * (20,000 + 20,000) / 9,000 = 4.44
* CDP Risk Index: 4.44

2. Comparison with Loan Max Collateral Risk Index:



* The CDP Risk Index (4.44) is compared against the Max Collateral Risk Index of the  loan (4.5).

Since the CDP Risk Index (4.44) is lower than the Max Collateral Risk Index of the loan (4.5), the request to borrow 5,000 xUSDT is accepted by the protocol.


## Interest Rate

Interest paid by borrowers to lenders is dynamically determined by an interest strategy curve. This curve functions by taking the lending pool usage as input and returning an interest rate as output, following the principles of supply and demand — the interest rate increases as the pool usage grows.


### Interest Strategy Curve

The interest strategy curve is made up of multiple linear segments defined by breakpoints. While Weft’s interest strategy can have various breakpoints, we use a trilinear model with three breakpoints to effectively cover the most common scenarios.


### Types of Interest Strategy

There are two major types of interest strategy:



1.  Incentivize Borrowing: \
Use Case: Often applied to stable assets. \
Characteristics: This strategy is relatively flat at the beginning but grows quickly as it approaches high utilization levels.
2. Volatile Asset: \
Use Case: Applied to volatile assets. \
Characteristics: This strategy has steeper increases and a higher maximum interest rate at higher usage levels, designed to prevent excessive risky borrowing on volatile assets.


## Liquidation

Liquidation is the process that occurs when the collateral value of a Collateralize Debt Position (CDP) no longer adequately covers its loan or debt positions. This can happen if the collateral decreases in value or the borrowed debt increases in value relative to the collateral. When this occurs, the protocol allows anyone (referred to as the liquidator) to repay part of the debt in exchange for the collateral. To ensure all positions remain over-collateralize, liquidated collateral is returned with a liquidation bonus, making the process attractive to potential liquidators.


### Liquidation Threshold

To determine if a CDP can be liquidated, we assess its health using a parameter called the liquidation threshold, which is associated with each collateral pool. This parameter, similar to the Loan-to-Value (LTV) ratio, defines the maximum allowable fluctuation in collateral value. While the LTV ratio defines the maximum loan value against collateral at the time of user action, the liquidation threshold defines the maximum loan value against collateral value due to market fluctuations.


### Health Factor

The health factor of a CDP is calculated as the total loan value of the CDP divided by the sum of all collateral values, each multiplied by their respective liquidation thresholds. This index indicates how close a CDP is to being liquidated. A health factor greater than 1 means the CDP is at risk of liquidation, while a health factor of 0 means there is no loan and thus no risk of liquidation. This design ensures that the CDP remains over-collateralize.

Let's consider an example where a user has a CDP containing XRD as collateral and xUSDC as the loan.



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


## Extra features


### Pools configuration versioning 

Weft V2 introduces configuration auto versioning by keeping a history of configuration each time there is a change in risk parameters like LTV and risk index. In addition to that, the current configuration version is kept in CDP NFT metadata on each operation. The allow CDP position to be linked to active configuration during their last edit. So even if there is a configuration change, the previous configuration will be kept for the CDP help checking process until the user updates his positions.

As some change can be driven by issues, In case of a critical change, configuration can have an expert set by governance.


### Flash loan

A flash loan is a type of loan where a user borrows assets with no upfront collateral and returns the borrowed assets within the same ledger transaction. Weft makes available flash loans on all lending pools.


### Collateral flash operations

Inspired by flash loan, flash collateral operation allows users to remove fungible or non-fungible collaterals from a CDP without checking its health upfront. Instead, the health is checked once the user instructs the protocol to do so. In that case, the only important state is a healthy CDP, if that is the case, the transaction will go through  otherwise the transaction will fail. 

This feature enables interesting use cases. One is Collateral swap, as there is no flash loan on collateral pools, flash collateral operation may come handy for collateral swap without repaying attached loan.

Another use case is about NFT Collateral. A staking receipt could be flash withdrawn to increase or reduce current stake and add back to the CDP all without repaying bounded loans.


# External Components 

To evaluate fungible and non-fungible resources involved in lending and collateral pools, Weft relies on two main external components NFT validator and Price Feed (or Price Oracle)


## Price Feeds

Real-time and accurate asset prices are crucial to determine the Borrowing power. A Price Feed is an on-ledger component exposing a method to get resources price data. However, there are two special cases for price feed. The first one is the Price Feed configured for deposit units used as collateral. in that case, the protocol uses the price feed configured for the underlying with the deposit unit redeemable value. The second case is the Liquid Stake Unit, as LSU is a native asset of the Radix network, we can reliably get LSU redeemable value at any time without relying on an external component.


## NFT Valuator 

NFT Collateral are accepted only when they can be redeemed for underlying resources that are accepted as collateral, however, Weft Lending protocol needs a way to get the amount of underlying assets for a given NFT ID to be able to perform its borrowing Po contribution evaluation. These details are provided by an on ledger component specifically designed for that purpose and deployed prior creation of the collateral pool. 
