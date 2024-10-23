
# **Isolation**

In the Weft protocol, each collateral is assigned an Isolation Group that represents its risk level, going beyond standard metrics such as volatility or liquidity. This Isolation Group is used together with the **Excluded Isolation Groups** designated for each lending pool to effectively isolate different levels of risk. The aim is to ensure that assets with varying risk levels are managed separately. In simple terms, only collateral with the same Isolation Group can be combined, and loans can only be taken out if the requested resources do not belong to an excluded Isolation Group. The isolation process involves two main steps:

## **1. Evaluating the CDP's Isolation Group**

The Isolation Group for a **Collateralized Debt Position (CDP)** is determined by considering all available collateral. The evaluation follows a straightforward rule: all collaterals in the CDP must belong to the same Isolation Group. If multiple Isolation Groups are present, the CDP fails validation.

## **2. Comparing with Loan Excluded Isolation Groups**

After establishing the CDP's Isolation Group, it is checked against the **Excluded Isolation Groups** for the loan being requested or already held. If the CDP's Isolation Group is excluded by any of the loan positions, the request is denied. This ensures that high-risk collateral does not back loans intended for lower-risk pools.

