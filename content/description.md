# Description and core concepts

Weft is a decentralized multi-asset lending dApp that allows users to lend and borrow various digital assets. Weft loans are over-collateralized to mitigate the risk taken by lenders. Meaning that borrowers will deposit more collateral than the value of the loan taken. Weft also supports delegated lending, which enables users to delegate their borrowing power to other users enabling them to take loans without depositing collateral.

## Deposit Units
Weft uses mechanics similar to Pool Units introduced by the Radix team in their native Pools for tracking shares of pooled liquidity. When a user deposits assets into the pool, they receive pool units — that we call Deposit Units — that represent their proportion of the pool and entitle them to a share of the interest collected from borrowers. A deposit-to-unit ratio is calculated at each deposit and determines how many assets a user can withdraw from the pool at any time.

### Calculation of Deposit Units:

- Initial Scenario: The pool currently has 150 assets, which corresponds to 90 deposit units.
- Your deposit: You’re adding 100 assets. To determine how many deposit units this is worth, we calculate:

```
(Your deposit x Existing deposit Units)/ Assets In the Pool before your deposit
```

Plugging in the numbers: `(100 x 90) / 150 = 60 units`

- So, you receive 60 deposit units for your contribution. After your deposit, the pool contains a total of 250 assets, which corresponds to 150 deposit units (the initial 90 units plus the 60 units you just added).

### Redemption of Deposit Units:

- Pool’s new state: the pool has grown to 340 assets (due to earned interest)
- Your share is calculated as 

```
(Your Deposit Units x Total Pool Assets)/ Total Deposit Units
```

Plugging in the numbers: `60 x 340 / 150 = 136 assets`

- Thus, by redeeming your 60 deposit units, you would receive 136 assets

Is this fair? Let’s check: I got 36 more assets than I deposited, which is 40% of the interest earned by the pool while my assets were in it. 40% is exactly the fraction of the pool that I owned when I joined (100 / 250), so it seems fair. If the pool is empty, then the initial deposit-to-unit ratio is one, meaning that each asset I deposit equals one unit, as I am the only depositor.

## Loan Units

Similarly, borrowed amounts are tracked using the Loan Unit concept. The protocol keeps track of the total amount of assets borrowed from the pool and when a user borrows assets from the pool, they receive loan units that reflect their share of debt obligation in the total amount borrowed from the lending pool with interest to payback. The loan unit and the loan-to-unit ratio (analogous to the deposit-to-unit ratio) are used to calculate how many assets a user has to repay to the pool. 

### Calculation of Loan Units:

- Initial Scenario: The current amount borrowed from the, including interest to payback, is 0 assets, which corresponds to 0 loan units.
- Alice wants to take 100 assets as a loan: As she is the first to borrow. She will receive 100 Loan units
- Loan state after 1 year: Let us take 5% as the interest rate. As Alice took 100 assets,  the new amount borrowed, including interest to payback, is 100 plus 5% interest making it 105 assets. The total amount of loan units is still 100 (Alice loan units).
- Bob wants to take 84 assets as a loan: The loan units of Bob will be calculated as follows: 

```
(Loan Amount x Existing Loan Units)/ Total Borrowed Assets with interest
```
Plugging in the numbers: `84 x 100 / 105 = 80 loan Units`

So the total loan unit will now be 180 and the total borrowed amount 189 ( 105 plus 84)
Loan state after 1 more year: We will keep the 5% interest rate for the sake of simplicity. So the total borrowed amount is now 189 + 5% = 198.45, and the total loan unit is still 180. 

### Redemption of Deposit Units:

Now how do we know the amount Alice and Bob have to repay:
    
`(Your Loan Units x Total Borrowed Assets with  interest)/ Total Loan Units`

Plugging in the numbers:

`Alice: 100 x 198.45  / 180 = 110.25 Assets`

`Bob: 80 x 198.45  / 180 = 88.2 Assets`

That it make sense? Let's check. 
Alice borrowed 100 assets for 2 years with a 5% interest rate so she had to repay 100 x 1.05 after the first year and 100 x 1.05 x1.05 after the second year. That is exactly 110.25.

Bob borrowed 84 assets for 1 year with 5% interest. so he had to repay 84 x 1.05. That is exactly 88.2. 

So we can effectively track each listed asset state by tracking the total amount borrowed and loan units for each borrower with the corresponding total loan units.

## Reprenseting Units 
As mentioned above, Deposit and Loan Units remain constant over time until the next interaction of the user. That gives two ways to be represented:

- The first one is minting a fungible asset in an equal amount of units, we chose this option for deposit units.
The second option is storing the value in a persisting data structure like NFT metadata with strong enforcement on how this data can be changed. We chose this option for loan units.
- The approach of using fungible tokens for deposit units and NFTs for collaterals and loan units is innovative.

 This "dual structure" ensures that deposits and loans are accurately and fairly represented, capturing all necessary information:

- Fungible Deposit Units: Easily tradable, sellable, or usable in other DeFi protocols.
- Non-Fungible Loan Units: Capable of capturing the nuances and unique terms of each mix of collateral and loan.

This structure offers flexibility, accuracy, and several possibilities to build DeFi services on top of Weft.
Loan collateralization approach
On Weft, collaterals are deposit units. So locking collateral means depositing previously acquired deposit units in a pool and getting back an NFT with metadata reflecting the amount of deposit units locked as collateral. In the case of direct deposit of assets as collateral, Weft is designed to perform the deposit under the hood and then lock the obtained deposit units using the process described above. This approach gives the ability to earn interest on collateral even if they are locked.

## Loan collateralization approach

On Weft, collaterals are deposit units. So locking collateral means depositing previously acquired deposit units in a pool and getting back an NFT with metadata reflecting the amount of deposit units locked as collateral. In the case of direct deposit of assets as collateral, Weft is designed to perform the deposit under the hood and then lock the obtained deposit units using the process described above. This approach gives the ability to earn interest on collateral even if they are locked.

## Liquidation threshold
As mentioned in the introduction, Weft is an over-collateralized lending dApp. The liquidation threshold is the predefined upper limit for the ratio between the value of a loan and the corresponding collateral. Beyond this threshold, the loan becomes categorized as under-collateralized, signifying that the collateral's value is insufficient to adequately cover the outstanding loan amount.

For better risk management, Weft does not use a single value for the liquidation threshold. Instead, it defines four levels based on the relationship between the collateral and the borrowed assets: same asset category ID, specific asset pair based on resource addresses, specific asset category ID pair, and a default value. This fine-grained approach allows for more features and flexibility in the risk management framework. Another key aspect of this approach is the specificity of borrowing power. Weft borrowing power does not depend only on available collateral, but also on the borrowed asset.

## Interest Option and Strategy

An interest strategy is a function that takes a listed asset state as input and returns an interest rate as output. 
An interest option is a defined type of interest available for the user to choose — Like stable and variable interest rates. Each listed asset has a set of interest strategies mapped to it supported interest options. 