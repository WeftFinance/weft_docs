
## Update Pool Config
::: code-group
```rs [Scrypto]
update_config(
    pool_config: UpdatePoolConfigInput
)
```
:::

## Update liquidation threshold
::: code-group
```rs [Scrypto]
update_liquidation_threshold(
    value: UpdateLiquidationThresholdInput
) 
```
:::

## Update interest strategies
::: code-group
```rs [Scrypto]
update_interest_strategies(
    &mut self,
    interest_options_break_points: IndexMap<u8, Vec<ISBreakPoint>>,
)
```
:::

## Flashloan
::: code-group
```rs [Scrypto]
take_flashloan(
    loan_amount: Decimal
) -> (Bucket, Bucket)

repay_flashloan(
    loan_repayment: Bucket,
    loan_terms: Bucket
) -> Bucket
```
:::

## Contribute
::: code-group
```rs [Scrypto]
contribute(
    assets: Bucket
) -> Bucket 
```
:::


## Redeem
::: code-group
```rs [Scrypto]
redeem(
    pool_units: Bucket
) -> Bucket
:::
