
# **Isolation**

In the Weft protocol, each collateral is assigned an Isolation Group that represents its risk level, going beyond standard metrics such as volatility or liquidity. This Isolation Group is used together with the **Excluded Isolation Groups** designated for each lending pool to effectively isolate different levels of risk. The aim is to ensure that assets with varying risk levels are managed separately. In simple terms, only collateral with the same Isolation Group can be combined, and loans can only be taken out if the requested resources do not belong to an excluded Isolation Group. The isolation process involves two main steps:

## **1. Evaluating the CDP's Isolation Group**

The Isolation Group for a **Collateralized Debt Position (CDP)** is determined by considering all available collateral. The evaluation follows a straightforward rule: all collaterals in the CDP must belong to the same Isolation Group. If multiple Isolation Groups are present, the CDP fails validation.

## **2. Comparing with Loan Excluded Isolation Groups**

After establishing the CDP's Isolation Group, it is checked against the **Excluded Isolation Groups** for the loan being requested or already held. If the CDP's Isolation Group is excluded by any of the loan positions, the request is denied. This ensures that high-risk collateral does not back loans intended for lower-risk pools.

<!-- 
## **Example Scenarios**

To illustrate how this process works, let's consider two scenarios involving different types of collateral and loan conditions.

### **Scenario 1: Rejected Loan Request**

**Setup:**
- **Collateral 1:** 50,000 XRD (Radix tokens)  
  - Value: $0.10 per XRD  
  - Loose Risk Index: 4
- **Collateral 2:** 1 xETH (tokenized Ethereum)  
  - Value: $2,000 per xETH  
  - Strict Risk Index: 8
- **Loan Requested:** 5,000 xUSDC (stablecoin)  
  - Value: $1 per xUSDC  
  - Max Collateral Risk Index: 4

**Step-by-Step Process:**
1. **Evaluation of the CDP Risk Index:**
   - Collateral Value of XRD: 50,000 XRD * $0.10 = $5,000
   - Collateral Value of xETH: 1 xETH * $2,000 = $2,000
   - Since xETH has a Strict Risk Index, the CDP risk index becomes **8** (the strict risk value).

2. **Comparison with Loan Max Collateral Risk Index:**
   - The CDP Risk Index (8) is compared to the loan’s Max Collateral Risk Index (4).
   - Since the CDP Risk Index is higher than the Max Collateral Risk Index, the loan request for 5,000 xUSDC is **rejected**.

---

### **Scenario 2: Approved Loan Request**

**Setup:**
- **Collateral 1:** 50,000 XRD (Radix tokens)  
  - Value: $0.10 per XRD  
  - Loose Risk Index: 4
- **Collateral 2:** 0.2 xBTC (tokenized Bitcoin)  
  - Value: $20,000 per xBTC  
  - Loose Risk Index: 5
- **Loan Requested:** 5,000 xUSDT (stablecoin)  
  - Value: $1 per xUSDT  
  - Max Collateral Risk Index: 4.5

**Step-by-Step Process:**
1. **Evaluation of the CDP Risk Index:**
   - Collateral Value of XRD: 50,000 XRD * $0.10 = $5,000
   - Collateral Value of xBTC: 0.2 xBTC * $20,000 = $4,000
   - Since both collaterals have Loose Risk Indexes, the CDP Risk Index is calculated as the weighted average:
     - **Weighted Risk Index Calculation:**  
       (5,000 * 4 + 4,000 * 5) / (5,000 + 4,000)  
       = (20,000 + 20,000) / 9,000  
       = **4.44**

2. **Comparison with Loan Max Collateral Risk Index:**
   - The CDP Risk Index (4.44) is compared to the loan’s Max Collateral Risk Index (4.5).
   - Since the CDP Risk Index is lower than the Max Collateral Risk Index, the loan request for 5,000 xUSDT is **approved**.
 -->
