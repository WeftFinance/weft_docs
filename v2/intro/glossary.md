# Weft V2: Glossary of Important Terms

1. **Weft**: A decentralized lending platform built on Radix DLT that allows users to create and manage collateralized debt positions (CDPs) using NFTs called Wefties.
   
2. **Collateralized Debt Position (CDP)**: A loan structure where the borrower locks up collateral to secure a loan. In Weft, these are encapsulated in Wefty NFTs.

3. **Wefty**: An NFT representing a user's collateral and loan positions within the Weft platform, managing collateral and debt.

4. **Lending Pools**: Mechanism where users deposit assets to earn interest, with the pool being available to borrowers upon depositing collateral.

5. **Deposit Units (wAssets)**: Interest-bearing tokens representing deposits in the Weft Lending Pools. They can be used in secondary markets or as collateral for loans.

6. **Loan Units**: Tokens representing the debt obligation when borrowing assets from the pool. Loan Units track the share of the borrowed assets and interest.

7. **Loan-to-Value (LTV) Ratio**: A percentage used to define how much can be borrowed against a specific collateral. A lower LTV generally means lower borrowing power.

8. **Liquidation**: The process that occurs when the value of collateral in a CDP falls below the threshold necessary to cover the loan, allowing the liquidation of the collateral to repay the debt.

9. **Health Factor**: An index indicating the risk of liquidation for a CDP. It compares the loan value to the collateral's liquidation threshold.

10. **Liquidation Threshold (LT)**: The maximum value a loan can reach against collateral before liquidation is triggered, defined for each collateral pool.

11. **Flash Loan**: A loan that requires no upfront collateral and must be repaid within the same transaction.

12. **Risk Index**: A measure used to indicate the riskiness of a collateral. It can be loose or strict and determines whether collateral is suitable for a loan.

13. **Efficiency Mode**: A feature allowing higher LTV for single loan positions within a CDP, enabling borrowers to gain more borrowing power under certain conditions.

14. **Isolation Mode**: A mechanism that isolates risky collateral types based on their risk index and limits the use of risky assets as collateral for loans.

15. **NFT Validator**: An on-ledger component that determines the redeemable value of NFT collateral used in the Weft lending protocol.

16. **Price Feed**: An on-ledger oracle component that provides real-time asset prices for determining the borrowing power of collateral and the health of CDPs.
