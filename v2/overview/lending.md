
# Lending

In decentralized finance (DeFi), lending digital assets to borrowers is a common way to earn additional yield. When you lend your assets, borrowers must pay interest on the borrowed amount. As a lender, you receive this interest as a reward for providing your funds.


## Lending Pools

Lending Pools allow suppliers to earn interest through deposits and withdraw assets at any time. Borrowers have access to these assets by providing collateral to secure their loans. Over time, borrowers will be charged with interest that will be paid to lenders. 


## Deposit Units

Weft tokenizes assets supplied to the lending pools as Weft Deposit Units - also called w2-Assets: w2-XRD, w2-xUSDC, ... - These units, similar to Radix Pool Units, are interest-bearing fungible resources that represent proof of deposit and allow the claiming of deposited assets. They also enable the creation of secondary markets for constructing positions without direct interaction with the underlying lending pool, facilitating the development of derivative products that include debt obligations.

## Interest Rate

Interest paid by borrowers to lenders is dynamically determined by an interest strategy curve. This curve functions by taking the lending pool usage as input and returning an interest rate as output, following the principles of supply and demand — the interest rate increases as the pool usage grows.

The interest strategy curve is made up of multiple linear segments defined by breakpoints. While Weft’s interest strategy can have various breakpoints, we use a trilinear model with three breakpoints to effectively cover the most common scenarios.

