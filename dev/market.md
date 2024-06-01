
## Create lending pool <Badge type="tip" text="admin" />

As a lending market is a collection of lending pools, the `create_lending_pool` function is use to create a lending pool.

### Parameters
- `price_oracle_comp_address` (Type: `ComponentAddress`): The address of the price oracle component used for this lending pool.
- `pool_res_address` (Type: `ResourceAddress`): The address of the resource that users will deposit to and withdraw from this lending pool.
- `pool_config` (Type: `PoolConfig`): Configuration settings for the lending pool.
- `interest_options_break_points` (Type: `IndexMap<u8, Vec<ISBreakPoint>>`): A map of [interest option](/description#interest-option-and-strategy) indices to corresponding interest rate breakpoints.
- `liquidation_threshold` (Type: `LiquidationThreshold`): The liquidation threshold for this lending pool.

::: code-group
```rs [Scrypto]
create_lending_pool(
    price_oracle_comp_address: ComponentAddress,
    pool_res_address: ResourceAddress,
    pool_config: PoolConfig,
    interest_options_break_points: IndexMap<u8, Vec<ISBreakPoint>>,
    liquidation_threshold: LiquidationThreshold,
);
```
:::


## Supply fee reserve <Badge type="tip" text="admin" />
Allows the administrator to supply funds to the fee reserve. this fee reserve is used to pay for the fees of some operations in the lending market.

### Parameters
- `fee_subsid` (Type: `Bucket`): The bucket of fee subsidy to be supplied to the fee reserve.

::: code-group
```rs [Scrypto]
supply_fee_reserve(
    fee_subsid: Bucket
);
```
:::


## Create cdp
Create a Collateralized Debt Position (CDP) NFT for a user.

### Parameters
- `name` (Type: `Option<String>`): An optional name for the CDP NFT.
- `description` (Type: `Option<String>`): An optional description for the CDP NFT.

### Return Value
- `Bucket`: a bucket of the newly created CDP NFT.

::: code-group
```rs [Scrypto]
create_cdp(
    name: Option<String>, 
    description: Option<String>
) -> Bucket;
```
:::


## Create delegatee cdp
This section documents the `create_delegatee_cdp` function, which is used to create a delegatee CDP.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `max_loan_value` (Type: `Option<Decimal>`): An optional maximum loan value for the delegatee CDP.
- `max_loan_value_ratio` (Type: `Option<Decimal>`): An optional maximum loan value ratio for the delegatee CDP.
- `name` (Type: `Option<String>`): An optional name for the delegatee CDP.
- `description` (Type: `Option<String>`): An optional description for the delegatee CDP.

### Return Value
- `Bucket`: The newly created delegatee CDP represented as a bucket.
::: code-group
```rs [Scrypto]
create_delegatee_cdp(
    cdp_proof: Proof,
    max_loan_value: Option<Decimal>,
    max_loan_value_ratio: Option<Decimal>,
    name: Option<String>,
    description: Option<String>,
) -> Bucket;
```
:::


## Link cdp
This section documents the `link_cdp` function, which is used to link a CDP to a delegatee CDP.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `delegatee_cdp_proof` (Type: `Proof`): Proof of the delegatee CDP's existence.
- `max_loan_value` (Type: `Option<Decimal>`): An optional maximum loan value for the delegatee CDP.
- `max_loan_value_ratio` (Type: `Option<Decimal>`): An optional maximum loan value ratio for the delegatee CDP.

::: code-group
```rs [Scrypto]
link_cdp(
    cdp_proof: Proof,
    delegatee_cdp_proof: Proof,
    max_loan_value: Option<Decimal>,
    max_loan_value_ratio: Option<Decimal>,
);
```
:::


## Unlink cdp
This section documents the `unlink_cdp` function, which is used to unlink a CDP from a delegatee CDP.
### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `delegatee_cdp_id` (Type: `NonFungibleLocalId`): The ID of the delegatee CDP to unlink.

::: code-group
```rs [Scrypto]
unlink_cdp(
    cdp_proof: Proof,
    delegatee_cdp_id: NonFungibleLocalId
);
```
:::


## Update cdp

This section documents the `update_cdp` function, which is used to update the details of a CDP.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `name` (Type: `Option<String>`): An optional new name for the CDP.
- `description` (Type: `Option<String>`): An optional new description for the CDP.

::: code-group
```rs [Scrypto]
update_cdp(
    cdp_proof: Proof,
    name: Option<String>,
    description: Option<String>,
);
```
:::


## Update Delegatee CDP

This section documents the `update_delegatee_cdp` function, which is used to update the details of a delegatee CDP.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `delegatee_cdp_id` (Type: `NonFungibleLocalId`): The ID of the delegatee CDP to update.
- `max_loan_value` (Type: `Option<Decimal>`): An optional new maximum loan value for the delegatee CDP.
- `max_loan_value_ratio` (Type: `Option<Decimal>`): An optional new maximum loan value ratio for the delegatee CDP.

::: code-group
```rs [Scrypto]
update_delegatee_cdp(
    cdp_proof: Proof,
    delegatee_cdp_id: NonFungibleLocalId,
    max_loan_value: Option<Decimal>,
    max_loan_value_ratio: Option<Decimal>,
);
```
:::


## Batch Flashloan

This section documents the batch flashloan functionality, which includes taking and repaying multiple flashloans in a batch.

### Take Batch Flashloan

This function allows taking multiple flashloans in a batch.

#### Parameters
- `loan_amounts` (Type: `IndexMap<ResourceAddress, Decimal>`): A map of resource addresses to loan amounts.

#### Return Value
- `(Vec<Bucket>, Bucket)`: A tuple containing a vector of buckets for borrowed assets and a bucket for the batch loan term.

### Repay Batch Flashloan

This function allows repaying multiple flashloans in a batch.

#### Parameters
- `payments` (Type: `Vec<Bucket>`): A vector of buckets representing payments for the flashloans.
- `batch_loan_term` (Type: `Bucket`): The bucket representing the batch loan term.

#### Return Value
- `Vec<Bucket>`: A vector of buckets representing the result of repaying the batch flashloans.

::: code-group
```rs [Scrypto]
take_batch_flashloan(
    &self,
    loan_amounts: IndexMap<ResourceAddress, Decimal>,
) -> (Vec<Bucket>, Bucket);

...

repay_batch_flashloan(
    &self,
    payments: Vec<Bucket>,
    batch_loan_term: Bucket,
) -> Vec<Bucket>;
```
:::

## Deposit

This section documents the `deposit` function, which is used to deposit assets into a CDP.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `deposits` (Type: `Vec<Bucket>`): A vector of buckets representing the assets to deposit into the CDP.

::: code-group
```rs [Scrypto]
deposit(
    cdp_proof: Proof,
    deposits: Vec<Bucket>
);
```
:::

## Withdraw

This section documents the `withdraw` function, which is used to withdraw assets from a CDP.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `withdraws` (Type: `Vec<(ResourceAddress, Decimal, bool)>`): A vector of tuples representing withdrawal instructions (resource address, amount, and whether it's a full withdrawal).

::: code-group
```rs [Scrypto]
withdraw(
    cdp_proof: Proof,
    withdraws: Vec<(ResourceAddress, Decimal, bool)>,
) -> Vec<Bucket>;
```
:::

## Borrow

This section documents the `borrow` function, which is used to borrow assets from a CDP.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `borrows` (Type: `Vec<(ResourceAddress, Decimal, u8)>`): A vector of tuples representing borrowing instructions (resource address, amount, and interest option index).

#### Return Value
- `Vec<Bucket>`: A vector of buckets representing the result of the borrowing operation.


::: code-group
```rs [Scrypto]
borrow(
    cdp_proof: Proof,
    borrows: Vec<(ResourceAddress, Decimal, u8)>,
) -> Vec<Bucket>;
```
:::


## Change interest option
This section documents the `change_interest_option` function, which is used to change the interest option for a loan.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `loan_res_address` (Type: `ResourceAddress`): The resource address of the loan.
- `unit_amount` (Type: `Decimal`): The unit amount for the interest change.
- `interest_option` (Type: `u8`): The current interest option index.
- `new_interest_option` (Type: `u8`): The new interest option index.

::: code-group
```rs [Scrypto]
change_interest_option(
    cdp_proof: Proof,
    loan_res_address: ResourceAddress,
    unit_amount: Decimal,
    interest_option: u8,
    new_interest_option: u8,
);
```
:::


## Repay

This section documents the `repay` function, which is used to repay a loan.

### Parameters
- `cdp_proof` (Type: `Proof`): Proof of the CDP's existence.
- `delegatee_cdp_id` (Type: `Option<NonFungibleLocalId>`): An optional delegatee CDP ID if repaying a delegatee CDP loan.
- `payments` (Type: `Vec<(Bucket, u8)>`): A vector of tuples representing loan payments (bucket and interest option).

#### Return Value
- `Vec<Bucket>`: A vector of buckets representing the result of the repayment operation.

::: code-group
```rs [Scrypto]
repay(
    cdp_proof: Proof,
    delegatee_cdp_id: Option<NonFungibleLocalId>,
    payments: Vec<(Bucket, u8)>,
) -> Vec<Bucket>;
```
:::



## Liquidate

This section documents the `liquidate` function, which is used to liquidate a CDP.

### Parameters
- `cdp_id` (Type: `NonFungibleLocalId`): The ID of the CDP to be liquidated.
- `payments` (Type: `Vec<(Bucket, u8)>`): A vector of tuples representing loan payments (bucket and interest option).
- `callateral_res_addresses` (Type: `Option<IndexMap<ResourceAddress, Decimal>>`): An optional map of collateral resource addresses to liquidation amounts.

## Liquidate

This section documents the `liquidate` function, which is used to liquidate a CDP.

### Parameters
- `cdp_id` (Type: `NonFungibleLocalId`): The ID of the CDP to be liquidated.
- `payments` (Type: `Vec<(Bucket, u8)>`): A vector of tuples representing loan payments (bucket and interest option).
- `callateral_res_addresses` (Type: `Option<IndexMap<ResourceAddress, Decimal>>`): An optional map of collateral resource addresses to liquidation amounts.

#### Return Value
- `(Vec<Bucket>, Vec<Bucket>)`: A tuple containing vectors of buckets representing the result of the liquidation operation (collateral and loan payments).

::: code-group
```rs [Scrypto]
liquidate(
    cdp_id: NonFungibleLocalId,
    payments: Vec<(Bucket, u8)>,
    callateral_res_addresses: Option<IndexMap<ResourceAddress, Decimal>>,
) -> (Vec<Bucket>, Vec<Bucket>);

```

## Refinance

This section documents the `refinance` function, which is used to refinance a loan.

### Parameters
- `cdp_id` (Type: `NonFungibleLocalId`): The ID of the CDP.
- `payments` (Type: `Vec<(Bucket, u8)>`): A vector of tuples representing loan payments (bucket and interest option).

#### Return Value
- `Vec<Bucket>`: A vector of buckets representing the result of the refinance operation.


::: code-group
```rs [Scrypto]
refinance(
    cdp_id: NonFungibleLocalId,
    payments: Vec<(Bucket, u8)>
) -> Vec<Bucket>;
```
:::

