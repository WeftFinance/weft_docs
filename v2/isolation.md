
# **Risk Index and Isolation**

In addition to the Loan-to-Value (LTV) ratio, each collateral in the Weft protocol has a **risk index** that indicates its risk level, which goes beyond standard metrics like volatility or liquidity. This risk index is used in combination with the **Max Collateral Risk Index** assigned to each lending pool. The purpose of these parameters is to apply effective isolation of collateral, ensuring that assets with different risk levels are managed separately. The isolation process happens in two main steps:

## **1. Evaluation of the CDP Risk Index**

The **Collateralized Debt Position (CDP)** risk index is determined based on all available collateral. There are two ways to define a collateral risk index:

- **Loose Risk Index**: If the collateral is assigned a loose risk index, the CDP risk index will be the weighted average of all loose indexes, weighted by the value of each collateral.
- **Strict Risk Index**: If any collateral in the CDP has a strict risk index, the CDP risk index becomes the highest strict index of all collaterals in the position. This ensures that strict risk collaterals have priority in determining the overall risk.

## **2. Comparison with Loan Max Collateral Risk Index**

Once the CDP risk index is evaluated, it is compared against the **Max Collateral Risk Index** of the loan being requested. If the CDP risk index exceeds the loan’s Max Collateral Risk Index, the borrowing request will be denied. This ensures that high-risk collateral does not secure loans that are intended for low-risk pools. For example, if a loan does not accept risky collateral, the protocol will reject the request to borrow if the collateral includes high-risk assets.


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

