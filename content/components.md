

![Weft components on Radix](https://res.cloudinary.com/daisvxhyu/image/upload/v1692811847/Radix/weft-components.png)

The Weft lending platform is structured around two primary blueprints: the Lending Pool and the Lending Market. Additionally, a Non-Fungible Resource is employed to represent and store pertinent information related to collateral and loan positions and a Fungipble resource (token) is used as insurance for more security of lent assets.


## Lending Pool Component

The Lending Pool holds assets deposited by lenders, acting as a reserve for borrowers. Each lending pool caters to a singular asset type, like XRD. A Deposit Unit asset is associated with each lending pool, minted to signify the contributor’s share of the pool. Furthermore, it maintains the ongoing loan state.

Lending pools offer an array of methods accessible through Weft’s main component, the Lending Market. A robust security apparatus, including badges and predefined security rules, oversees these interactions, assuring the overall security and integrity of the lending platform. This arrangement allows the majority of user-facing features to be implemented within the lending market components.

An added feature of lending pools is the incorporation of flash loans. These loans are obtained and repaid within the same transaction. This DeFi-specific characteristic holds intriguing potential applications like capitalizing on arbitrage without having any found available.
Lending Market

## The Lending Market Component

acts as the conduit for interactions between lenders and borrowers, facilitated through lending pools. As described in the core concepts section, a lending pool practically enables users to deposit assets or deposit units as collateral. The Lending Market facilitates borrowing assets from lending pools, repaying loans, withdrawing collateral, or altering positions through swaps are all facilitated by the Lending Market. 

## Wefty: A User Positions NFT

“Wefty” represents the designated NFT employed by Weft to house users’ collateral and loan positions. Leveraging the capabilities offered by Scrypto and the Radix Engine, Weft ensures secure execution of operations tied to Wefties.

Primarily, minting, burning, and metadata updates of Wefties are safeguarded by an immutable rule: the lending market’s global caller badge. This badge strictly limits mutations to Wefties’ metadata, confining such actions solely to the Lending Market component. Within Wefties’ metadata, two types of data are stored: collateral positions and loan positions.

**Collateral Positions**: A collateral position constitutes a data structure housed within a Wefty. These positions are organized based on addresses of lending pool components of the  asset used as collateral. This enables users to possess multiple collateral positions within a single Wefty. The deposit unit amount associated with each collateral position is stored in pair with the position asset associated with the lending pool component address.

**Loan Positions**: Paralleling collateral positions, loan positions oversee the state of loans for distinct asset types. As for collateral positions, Loan positions are categorized by lending pool component addresses. Given that lending pools offer varying interest options, a secondary level of grouping is introduced in loan positions. Here, loan units are stored in pairs, coupled with the utilized interest option.

![Weft NFT metadata structure](https://res.cloudinary.com/daisvxhyu/image/upload/v1692812827/Radix/wefty-data-structure.jpg)


## The WEFT Token
Lending Pools rely on over-collateralization and liquidation to ensure their stability. While these mechanisms offer strong protection, there may be rare instances where critical situations arise, leaving limited time for adequate reaction. To address this concern, we introduce the WEFT token. An asset designed to enhance the security within the Weft ecosystem. You can find more detail on the WEFT token [here](/token).
