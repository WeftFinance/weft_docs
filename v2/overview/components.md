# External Components 

To evaluate fungible and non-fungible resources involved in lending and collateral pools, Weft relies on two main external components NFT validator and Price Feed (or Price Oracle)


## Price Feeds

Real-time and accurate asset prices are crucial to determine the Borrowing power. A Price Feed is an on-ledger component exposing a method to get resources price data. However, there are two special cases for price feed. The first one is the Price Feed configured for deposit units used as collateral. in that case, the protocol uses the price feed configured for the underlying with the deposit unit redeemable value. The second case is the Liquid Stake Unit, as LSU is a native asset of the Radix network, we can reliably get LSU redeemable value at any time without relying on an external component.


## NFT Valuator 

NFT Collateral are accepted only when they can be redeemed for underlying resources that are accepted as collateral, however, Weft Lending protocol needs a way to get the amount of underlying assets for a given NFT ID to be able to perform its borrowing Po contribution evaluation. These details are provided by an on ledger component specifically designed for that purpose and deployed prior creation of the collateral pool. 
