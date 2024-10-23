# Weft Finance: Lending and Borrowing on Radix

## What is Weft?

Weft is a decentralized lending platform that harnesses the capabilities of Radix DLT to provide a fast, secure, and innovative approach to borrowing and lending assets. With Weft, users can easily create and manage collateralize debt positions (CDPs) encapsulated within NFTs called Wefties. The platform allows users to lend digital assets, earn yields, lock collateral, and access loans, all while prioritizing security through a unique method of storing and managing loan and deposit-related states.

The Weft Finance lending market went live on November 30, 2023. So far it’s playing a quite useful role in the Radix Ecosystem allowing users to leverage their XRD, LSULP, or xUSDC to get xUSDC or XRD liquidity without losing their exposition. But we know that 3 assets offer quite narrow possibilities and we believe it’s time to go the extra mile.

The Radix ecosystem is growing on digital assets, we have a wide range of digital assets boasting value for their holders with various utilities. Blue ship dApps like CaviarNine, Ociswap, and DefiPlaza cover needs for tokens trading, At Weft, we believe it’s time to add a bigger contribution to the lending landscape. We aim to provide options for Radix ecosystem asset holders to leverage on the value they hold and get liquidity not only in XRD and xUSDC but also in many other quality assets with decent liquidity.

To do so we are bringing important improvements to the Weft Lending Market to be released in the v2 protocol upgrade.


## What's new in Weft V2

The first version of Weft uses a fine-grain loan-to-value ratio to evaluate CDP position’s health. to put it simply, Each collateral asset has an LTV defined for each loan asset. The approach allows very flexible risk management. For example, the setup allows borrowing up to 85% of collateral value if the collateral is LSULP and the loan is in XRD, but the LTV changes to 80% if the loan assets are xUSDC. Another example is the fact that borrowing using the same asset as collateral is not allowed by setting LTV to 0% if the borrowed asset is the same as the asset used as collateral. This offers powerful possibilities but introduces complexity in the context of multiple assets listed. This complexity translates to rapidly growing transaction fees the more we have assets listed.

Weft V2 introduce 3 key improvements to to allow support of a high amount of asset reliably:

* More efficient positions health checking
* Isolation and efficiency mode
* Advance Collateral management allowing listing of NFT as collateral

## What is Radix DLT

[Radix](https://www.radixdlt.com/full-stack) is a decentralized network designed to provide a complete stack for building and deploying DeFi applications. Radix empowers developers to create fast, secure, and scalable solutions and stands out from other DeFi platforms due to its four key components:
- **Cerberus**: A scalable consensus algorithm that offers low latency, quick finality, and infinite scalability, enabling the network to handle high demand efficiently.
- **Radix Engine**: A virtual machine that runs Scrypto code, enforcing the network's rules while ensuring the security and correctness of DeFi applications with its built-in asset management, composability, and security features.
- **Scrypto**: A purpose-built programming language for DeFi that leverages the capabilities of the Radix Engine. Scrypto’s asset-oriented design makes developing DeFi applications easier and more secure.
- **Radix Wallet**: A user-friendly wallet that connects users to the Radix network, providing seamless interaction with DeFi applications.

With these components, Radix aims to transform the future of decentralized finance, making it scalable and secure enough for mainstream adoption.




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


# **Isolation**

In the Weft protocol, each collateral is assigned an Isolation Group that represents its risk level, going beyond standard metrics such as volatility or liquidity. This Isolation Group is used together with the **Excluded Isolation Groups** designated for each lending pool to effectively isolate different levels of risk. The aim is to ensure that assets with varying risk levels are managed separately. In simple terms, only collateral with the same Isolation Group can be combined, and loans can only be taken out if the requested resources do not belong to an excluded Isolation Group. The isolation process involves two main steps:

## **1. Evaluating the CDP's Isolation Group**

The Isolation Group for a **Collateralized Debt Position (CDP)** is determined by considering all available collateral. The evaluation follows a straightforward rule: all collaterals in the CDP must belong to the same Isolation Group. If multiple Isolation Groups are present, the CDP fails validation.

## **2. Comparing with Loan Excluded Isolation Groups**

After establishing the CDP's Isolation Group, it is checked against the **Excluded Isolation Groups** for the loan being requested or already held. If the CDP's Isolation Group is excluded by any of the loan positions, the request is denied. This ensures that high-risk collateral does not back loans intended for lower-risk pools.




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


# Extra features

Weft makes available some extra features

## Native Support for LSU and Unstaking NFTs

Weft provides native support for all current and future Liquid Staking Units (LSUs) on the Radix Network. Since LSUs are integrated directly into the Radix ledger, there is always an option to redeem them for their corresponding XRD value. To keep things straightforward, LSU risk configurations match those of XRD, meaning that LSUs are treated similarly to XRD when checking Collateralized Debt Position (CDP) health. Although LSUs use the XRD configuration, their value is actually based on redeemable XRD.

When an LSU is unstaked, a cooldown period of approximately 7 days applies. During this time, the unstaker receives a Claim NFT, which can be used to claim the underlying XRD once the cooldown is over. Weft also supports this Claim NFT natively, just as it does with LSUs, because the Radix ledger provides all the necessary information to access the underlying XRD value.

## Pools configuration versioning 

Weft V2 introduces configuration auto versioning by keeping a history of configuration each time there is a change in risk parameters like LTV and risk index. In addition to that, the current configuration version is kept in CDP NFT metadata on each operation. The allow CDP position to be linked to active configuration during their last edit. So even if there is a configuration change, the previous configuration will be kept for the CDP help checking process until the user updates his positions.

As some change can be driven by issues, In case of a critical change, configuration can have an expiry set by governance.

## Flash loan

A flash loan is a type of loan where a user borrows assets with no upfront collateral and returns the borrowed assets within the same ledger transaction. Weft makes available flash loans on all lending pools.


## Collateral flash operations

Inspired by flash loan, flash collateral operation allows users to remove fungible or non-fungible collaterals from a CDP without checking its health upfront. Instead, the health is checked once the user instructs the protocol to do so. In that case, the only important state is a healthy CDP, if that is the case, the transaction will go through  otherwise the transaction will fail. 

This feature enables interesting use cases. One is Collateral swap, as there is no flash loan on collateral pools, flash collateral operation may come handy for collateral swap without repaying attached loan.

Another use case is about NFT Collateral. A staking receipt could be flash withdrawn to increase or reduce current stake and add back to the CDP all without repaying bounded loans.

# External Components 

To evaluate fungible and non-fungible resources involved in lending and collateral pools, Weft relies on two main external components NFT validator and Price Feed (or Price Oracle)


## Price Feeds

Real-time and accurate asset prices are crucial to determine the Borrowing power. A Price Feed is an on-ledger component exposing a method to get resources price data. However, there are two special cases for price feed. The first one is the Price Feed configured for deposit units used as collateral. in that case, the protocol uses the price feed configured for the underlying with the deposit unit redeemable value. The second case is the Liquid Stake Unit, as LSU is a native asset of the Radix network, we can reliably get LSU redeemable value at any time without relying on an external component.


## NFT Valuator 

NFT Collateral are accepted only when they can be redeemed for underlying resources that are accepted as collateral, however, Weft Lending protocol needs a way to get the amount of underlying assets for a given NFT ID to be able to perform its borrowing Po contribution evaluation. These details are provided by an on ledger component specifically designed for that purpose and deployed prior creation of the collateral pool. 


# Revenue Streams

Weft generates income through various activities, with revenue shared among Liquidity Providers (LPs), Liquidators, and the Weft treasury. Each group earns fees based on their specific role within the platform.

## Liquidity Providers (LPs)

Liquidity providers, who supply assets to the lending pools, earn income from three main sources:

- **Borrowing Fee**: LPs receive a portion of the fee that users pay when borrowing assets from the lending pool.
- **Interest**: LPs earn a share of the interest paid by borrowers on their outstanding loans. The longer the loan remains active, the more interest LPs accrue.
- **Flash Loan Fee**: LPs are entitled to part of the fee charged for flash loan transactions, which are loans repaid within the same transaction without requiring upfront collateral.

## Liquidators

Liquidators help maintain the system’s stability by closing under-collateralized positions. They are compensated through:

- **Liquidation Bonus**: When a user's CDP (Collateralized Debt Position) is liquidated due to insufficient collateral, liquidators earn a percentage of the liquidated assets as a reward for managing risky positions.

## Weft Treasury

The Weft treasury collects revenue from different activities on the platform to ensure the long-term sustainability of the protocol. The treasury's income is essential for covering operational costs, maintaining security, funding future development, and providing resources for governance decisions. Its income streams include:

- **CDP Creation Fee**: A fixed fee charged whenever a new CDP is created, which is fully allocated to the Weft treasury.
- **Share of Borrowing Fee**: The Weft treasury receives a portion of the fee charged when users borrow assets.
- **Share of Interest**: A percentage of the interest paid by borrowers is directed to the Weft treasury.
- **Share of Flash Loan Fee**: The Weft treasury earns a portion of the fee generated from flash loan transactions.
- **Share of Liquidation Bonus**: Alongside the liquidator's reward, the Weft treasury also takes a percentage of the liquidation bonus when a CDP is liquidated.

By collecting revenue through these streams, the Weft treasury is able to support the ongoing development and security of the platform, ensuring that the protocol remains stable, well-maintained, and adaptable to future changes.

