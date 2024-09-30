# Weft Finance: Lending and Borrowing on Radix

## What is Weft?

Weft is a decentralized lending platform that harnesses the capabilities of Radix DLT to provide a fast, secure, and innovative approach to borrowing and lending assets. With Weft, users can easily create and manage collateralize debt positions (CDPs) encapsulated within NFTs called Wefties. The platform allows users to lend digital assets, earn yields, lock collateral, and access loans, all while prioritizing security through a unique method of storing and managing loan and deposit-related states.

The Weft Finance lending market went live on November 30, 2024. So far it’s playing a quite useful role in the Radix Ecosystem allowing users to leverage their XRD, LSULP, or xUSDC to get xUSDC or XRD liquidity without losing their exposition. But we know that 6 assets offer quite narrow possibilities and we believe it’s time to go the extra mile.

The Radix ecosystem is growing on digital assets, we have a wide range of digital assets boasting value for their holders with various utilities. Blue ship dApps like CaviarNine, Ociswap, and DefiPlaza cover needs for tokens trading, At Weft, we believe it’s time to add a bigger contribution to the lending landscape. We aim to provide options for Radix ecosystem asset holders to leverage on the value they hold and get liquidity not only in XRD and xUSDC but also in many other quality assets with decent liquidity.

To do so we are bringing important improvements to the Weft Lending Market to be released in the v2 protocol upgrade.


## What's new in Weft V2

The current version of Weft uses a fine-grain loan-to-value ratio to evaluate CDP position’s health. to put it simply, Each collateral asset has an LTV defined for each loan asset. The approach allows very flexible risk management. For example, the setup allows borrowing up to 85% of collateral value if the collateral is LSULP and the loan is in XRD, but the LTV changes to 80% if the loan assets are xUSDC. Another example is the fact that borrowing using the same asset as collateral is not allowed by setting LTV to 0% if the borrowed asset is the same as the asset used as collateral. This offers powerful possibilities but introduces complexity in the context of multiple assets listed. This complexity translates to rapidly growing transaction fees the more we have assets listed.

Weft V2 introduce 3 key improvements to to allow support of a high amount of asset reliably:



* More efficient positions health checking
* Isolation and efficiency mode
* Advance Collateral management allowing listing of NFT as collateral

The feature section will give more details on these features.

## What is Radix DLT

[Radix](https://www.radixdlt.com/full-stack) is a decentralized network designed to provide a complete stack for building and deploying DeFi applications. Radix empowers developers to create fast, secure, and scalable solutions and stands out from other DeFi platforms due to its four key components:
- **Cerberus**: A scalable consensus algorithm that offers low latency, quick finality, and infinite scalability, enabling the network to handle high demand efficiently.
- **Radix Engine**: A virtual machine that runs Scrypto code, enforcing the network's rules while ensuring the security and correctness of DeFi applications with its built-in asset management, composability, and security features.
- **Scrypto**: A purpose-built programming language for DeFi that leverages the capabilities of the Radix Engine. Scrypto’s asset-oriented design makes developing DeFi applications easier and more secure.
- **Radix Wallet**: A user-friendly wallet that connects users to the Radix network, providing seamless interaction with DeFi applications.

With these components, Radix aims to transform the future of decentralized finance, making it scalable and secure enough for mainstream adoption.

