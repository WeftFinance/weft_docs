# Risks of Using Weft

As with any DeFi protocol, using Weft carries risks that should be carefully considered before depositing assets. This list is not comprehensive, and new risks may arise over time.

<Badge type="warning" text='IMPORTANT: THE SYSTEM IS PROVIDED "AS IS," AND ALL RISKS ASSOCIATED WITH ASSET PROVISION ARE BORNE ENTIRELY BY THE USER.' />



## Protocol-Related Risks

These risks stem from Weft's internal operations and the functionality of its smart contracts:

- **Smart Contract Risk**: There is a possibility that Weft's smart contracts could be exploited, resulting in the theft or permanent freezing of funds. Although risks cannot be entirely eliminated, they can be reduced through robust design, security audits, and adherence to best practices.

- **Oracle Risk**: Weft relies on an internal price feed because a suitable Oracle Network is not available on the Radix network. While an Aggregate Multi-Source Strategy is used to prevent reliance on a single source, there is still a risk that multiple sources could provide incorrect prices simultaneously, leading to erroneous liquidations.

- **Slashing or Staking Risk**: Weft allows staked assets or liquid staking derivatives to be used as collateral. Consequently, there is a risk of slashing (penalties imposed on validators) or other staking-related losses, which could reduce the collateral's value and affect the security of loans.

- **Cross-Protocol Risk**: If Weft integrates with or interacts with other DeFi platforms, vulnerabilities in those external protocols could impact Weft, potentially leading to losses or disruptions.

## Base Layer 1-Related Risks

These risks are related to the Radix decentralized ledger, the Layer 1 network on which Weft operates:

- **Bridging Risk**: Assets bridged to the Radix Network carry higher risk compared to their native forms.

- **Infrastructure Risk**: The Radix network could experience failures, bugs, or exploitation by hackers.

- **Wallet Provider Risk**: Weft supports Radix-compatible wallets such as Radix Wallet and Zeus Wallet. If any of these wallets have vulnerabilities, users' assets could be at risk.

## General Risks

These risks are common across the DeFi space and can affect Weft in similar ways to other protocols:

- **Regulatory Risk**: The legal status of Weft, $WEFT tokens, and distributed ledger technology remains uncertain in many regions. Regulatory changes could negatively affect Weft's operations or even force it to cease activities in certain areas due to legal or business constraints.

- **Risk of Insufficient Information**: Weft is still in development, and its design, algorithms, and technical details continue to evolve. Despite efforts to share the latest information, the Weft Project Contributors may not always be able to disclose updates, resulting in information gaps.

- **Competitive Risk**: The DeFi sector is rapidly growing, and new networks or applications could emerge using similar protocols or technology as Weft. This could increase competition, potentially impacting Weft's market position and the value of $WEFT.

- **Risk of Failure to Develop**: Development may not proceed as planned due to market conditions, technical challenges, or funding shortages, possibly resulting in the project's incomplete execution or implementation.

- **Liquidity Risk**: There may be times when liquidity for certain assets or markets on Weft is low, making it difficult for users to withdraw or liquidate positions. Low liquidity can also cause slippage or delays, especially in volatile market conditions.

- **Key Management Risk**: Users are responsible for safeguarding their private keys. Losing, forgetting, or having keys stolen may lead to permanent loss of funds on Weft. Insecure storage methods can also expose users to hacking or phishing attacks.

- **Market Risk**: The digital asset market is highly volatile. Significant price fluctuations could affect collateral values or loaned assets on Weft, potentially triggering liquidation events or making loan repayments challenging. 

This summary highlights the key risks, but users should conduct their own due diligence to fully understand the potential hazards.