
# Extra features

Weft makes available some extra features

## Pools configuration versioning 

Weft V2 introduces configuration auto versioning by keeping a history of configuration each time there is a change in risk parameters like LTV and risk index. In addition to that, the current configuration version is kept in CDP NFT metadata on each operation. The allow CDP position to be linked to active configuration during their last edit. So even if there is a configuration change, the previous configuration will be kept for the CDP help checking process until the user updates his positions.

As some change can be driven by issues, In case of a critical change, configuration can have an expiry set by governance.

## Flash loan

A flash loan is a type of loan where a user borrows assets with no upfront collateral and returns the borrowed assets within the same ledger transaction. Weft makes available flash loans on all lending pools.


## Collateral flash operations

Inspired by flash loan, flash collateral operation allows users to remove fungible or non-fungible collaterals from a CDP without checking its health upfront. Instead, the health is checked once the user instructs the protocol to do so. In that case, the only important state is a healthy CDP, if that is the case, the transaction will go through  otherwise the transaction will fail. 

This feature enables interesting use cases. One is Collateral swap, as there is no flash loan on collateral pools, flash collateral operation may come handy for collateral swap without repaying attached loan.

Another use case is about NFT Collateral. A staking receipt could be flash withdrawn to increase or reduce current stake and add back to the CDP all without repaying bounded loans.
