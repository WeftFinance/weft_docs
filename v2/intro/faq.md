# FAQ Section for Weft Finance

## General Information

**What is Weft?**  
Weft is a decentralized lending platform built on the Radix DLT, enabling users to create and manage collateralized debt positions (CDPs) using NFTs called Wefties. It allows for lending digital assets, earning yields, and accessing loans securely.

**When did Weft Finance launch?**  
The Weft Finance lending market went live on November 30, 2023.

## Features and Functionality

**What improvements does Weft V2 introduce?**  
Weft V2 enhances the platform with:
- More efficient position health checking
- Isolation and efficiency modes
- Advanced collateral management, including the ability to list NFTs as collateral

**How does the interest rate model work?**  
Interest rates are determined by the utilization rate of resource pools:
- **Normal Demand (0-70% usage):** Low interest rates to encourage borrowing.
- **High Demand (70-90% usage):** Increasing interest rates as demand rises.
- **Max Utilization (90-100% usage):** High interest rates to deter further borrowing and encourage repayments.

## Lending and Borrowing

**What are Lending Pools?**  
Lending Pools allow users to deposit assets and earn interest while borrowers can access these assets by providing collateral.

**How does borrowing work on Weft?**  
Borrowers must deposit collateral to borrow assets. The amount they can borrow is determined by the Loan-to-Value (LTV) ratio associated with their collateral.

## Collateral Management

**What types of collateral pools are available?**  
Weft offers three types of collateral pools:
1. Asset Collateral Pools: No interest earned.
2. Deposit Unit Collateral Pools: Earn interest while leveraging assets.
3. Liquid Stacking Unit Collateral Pools: Use listed Validator LSU as collateral while earning network emissions.

**What is a "Wefty"?**  
A "Wefty" is an NFT that houses users’ collateral and loan positions, ensuring secure operations related to CDPs.

## Liquidation Process

**What is liquidation in the context of Weft?**  
Liquidation occurs when a CDP's collateral value no longer covers its loan. If this happens, liquidators can repay part of the debt in exchange for the collateral, which includes a liquidation bonus.

**How is the health factor of a CDP calculated?**  
The health factor is calculated as the total loan value divided by the sum of all collateral values multiplied by their respective liquidation thresholds. A health factor greater than 1 indicates risk of liquidation.

## Additional Features

**What are flash loans?**  
Flash loans allow users to borrow assets without upfront collateral, provided they return the borrowed amount within the same transaction.

**What is the purpose of price feeds in Weft?**  
Price feeds provide real-time asset prices essential for determining borrowing power and evaluating resources in lending and collateral pools.
