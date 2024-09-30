# The “Unit” Concept

Before describing the features of Weft Lending dApp, we would like to explore some key concepts used under the hood.

Weft utilizes mechanics similar to Pool Units introduced by the Radix team for tracking shares of pooled liquidity. When users deposit assets into the pool, they receive Deposit Units that represent their proportion of the pool and entitle them to a share of the interest collected from borrowers. Deposit Units are interest-bearing assets that the user can redeem from the pool at any time.

Similarly, borrowed amounts are tracked using the Loan Unit concept. The protocol monitors the total amount of assets borrowed from the pool. When a user borrows assets, they receive Loan Units stored in a CDP, reflecting their share of debt obligation in the total borrowed amount, including the interest to be paid back. The loan unit and the loan-to-unit ratio (analogous to the deposit-to-unit ratio) are used to calculate how much a user must repay to the pool.

