# Guide for Building a Liquidation Bot for Weft V2
This guide provides a detailed roadmap for creating a liquidation bot for Weft V2. The bot's primary function is to monitor undercollateralized loans and automate liquidation when necessary, ensuring the platform remains stable and efficient.


## 1. Key Concepts
Understanding the foundational elements of the liquidation process is critical for building an effective bot. Below are the core concepts:

### Liquidation Requirements  
1. Fungible Collateral Liquidation  
   - Manage standard assets like tokens. These assets are straightforward to liquidate as their value is uniform and widely accepted.

2. Deposit Units Liquidation  
   - Handle the liquidation of lending pool shares used as collateral. These represent fractional ownership of pooled assets.

3. NFT Liquidation  
   - Manage unique assets like Non-Fungible Tokens (NFTs). Due to their non-standardized nature, NFT liquidation involves additional complexity and specific rules.

4. LSU Liquidation  
   - Liquidate Liquid Staking Units (LSUs). Liquidators may need to provide additional XRD to cover certain scenarios, making LSU liquidation resource-intensive.

### Key Condition for Liquidation  
- Liquidation is triggered when the liquidation_ltv (Loan-to-Value ratio for liquidation) exceeds 1. This threshold indicates an undercollateralized position.



## 2. Monitoring CDP Health  
Monitoring the health of Collateralized Debt Positions (CDPs) is crucial to preempt liquidation opportunities.  

### Key Methods for Monitoring  
1. `get_cdp` Method  
   - Fetches the current state of one or more CDPs.  
   - Signature:  
     ```rust
     pub fn get_cdp(&mut self, cdp_ids: IndexSet<NonFungibleLocalId>) -> IndexMap<NonFungibleLocalId, CDPHealthChecker>
     ```

2. `get_nft_value` Method *(for NFTs only)*  
   - Retrieves valuation details of NFTs used as collateral.  
   - Signature:  
     ```rust
     pub fn get_nft_value(
         &mut self,
         cdp_id: NonFungibleLocalId,
     ) -> Option<IndexMap<ResourceAddress, IndexMap<NonFungibleLocalId, NFTLiquidationValue>>>
     ```

### Returned Data Structures  




- CollateralPositionData: Provides details about the collateral, including price, value, and liquidation metrics. 
```rust
pub struct CollateralPositionData {
  pub price: Decimal,
  pub amount: Decimal,
  pub value: Decimal,
  pub health_value: Decimal,
  pub liquidation_value: Decimal,
  pub discounted_value: Decimal,
  pub config: CollateralConfig,
  pub config_version: CollateralConfigVersion,
  pub resource_config: CollateralResourceConfig,
  pub is_from_nft: bool,
  pub resource_type: RegisteredResourceType,
}
```

- LoanPositionData: Represents loan-related details, including adjusted values and configurations.  

```rust
pub struct LoanPositionData {
  pub price: Decimal,
  pub units: Decimal,
  pub amount: Decimal,
  pub value: Decimal,
  pub adjusted_value: Decimal,
  pub config: LoanConfig,
  pub config_version: u64,
  pub resource_config: LoanResourceConfig,
}
```

- NFTCollateralPositionData: Offers NFT-specific liquidation metrics and constraints.  

```rust
pub struct NFTCollateralPositionData {
  pub underlying_positions: IndexMap<ResourceAddress, CollateralPositionData>,
  pub value: NFTLiquidationValue,
  pub max_allowed_discounted_value: Decimal,
}
```


- NFTLiquidationValue: Includes key metrics like discounted values and liquidation fees.  

```rust
pub struct NFTLiquidationValue {
  pub value: Decimal,
  pub discounted_value: Decimal,
  pub loan_payment_value: Decimal,
  pub compensation_value: Decimal,
  pub liquidation_fee: Decimal,
  pub resource_type: RegisteredNFTResourceType,
}
```

- CDPHealthChecker: Aggregates and analyzes CDP health metrics, including total loan values, collateral values, and LTV ratios.

```rust
pub struct CDPHealthChecker {
  pub total_loan_value: Decimal,
  pub total_adjusted_loan_value: Decimal,

  pub total_collateral_value: Decimal,
  pub total_health_collateral_value: Decimal,
  pub total_liquidation_collateral_value: Decimal,

  pub collateral_isolation_groups: IndexSet<u16>,
  pub loan_excluded_isolation_groups: IndexSet<u16>,

  pub health_ltv: Decimal,
  pub liquidation_ltv: Decimal,

  pub discounted_nft_collateral_value: Decimal,
  pub discounted_collateral_value: Decimal,

  pub loan_positions: IndexMap<ResourceAddress, LoanPositionData>,
  pub collateral_positions: IndexMap<ResourceAddress, CollateralPositionData>,
  pub nft_collateral_positions: IndexMap<ResourceAddress, IndexMap<NonFungibleLocalId, NFTCollateralPositionData>>,
}

```

### Steps to Monitor CDP Health  
1. Call preview of `get_cdp` with the IDs of the CDPs to track.  
2. Review the `liquidation_ltv` field in the `CDPHealthChecker` output for each CDP.  
3. Assets liquidation requirements with other data available from `CDPHealthChecker`
4. Trigger liquidation when `liquidation_ltv > 1`.



## 3. Handling Liquidations  
Liquidation execution varies based on the type of collateral. Below are the key considerations:  

### Types of Liquidations  
1. NFT Liquidation  
   - Requires liquidating one NFT per call.  
   - If the NFT’s value exceeds the loan, the liquidator must compensate for the difference in XRD.  
   - The liquidator also pays a bonus in XRD for NFTs.

   [View Sample NFT Liquidation Transaction](#)  

2. LSU Liquidation  
   - Involves Liquid Staking Units, requiring additional XRD to cover specific conditions.  

   [View Sample LSU Liquidation Transaction](#)  

3. Fungible Collateral Liquidation  
   - Handles tokens or other fungible assets.  

   [View Sample Fungible Collateral Liquidation Transaction](#)  

4. Deposit Unit Liquidation  
   - Involves liquidating shares from lending pools.  

   [View Sample Deposit Unit Liquidation Transaction](#)  



## 4. Using Flash Loans for Liquidations  
Flash loans can be a critical tool for funding liquidations, particularly when the liquidator does not have sufficient XRD or other resources readily available. Weft V2 is non-agnostic to the flash loan provider, meaning you can use any flash loan source, including the one provided by the Weft Lending Pool.  

### Key Flash Loan Methods  
1. `take_flash_loan`  
   - Initiates a flash loan to borrow the necessary assets.  
   - Signature:  
     ```rust
     pub fn take_flash_loan(&mut self, loan_amounts: IndexMap<ResourceAddress, Decimal>) -> (Vec<FungibleBucket>, NonFungibleBucket)
     ```  
   - Parameters:  
     - `loan_amounts`: Specifies the resources and their respective amounts to borrow.  
   - Returns:  
     - A vector of fungible assets and a non-fungible bucket representing the loan terms.

2. `repay_flash_loan`  
   - Repays the flash loan after executing the liquidation.  
   - Signature:  
     ```rust
     pub fn repay_flash_loan(
         &mut self,
         payments: Vec<FungibleBucket>,
         loan_terms: NonFungibleBucket,
     ) -> (Vec<FungibleBucket>, Option<NonFungibleBucket>)
     ```  
   - Parameters:  
     - `payments`: The resources used to repay the loan.  
     - `loan_terms`: The non-fungible token representing the loan agreement.  
   - Returns:  
     - Any leftover resources and, optionally, the loan terms if the loan is not fully repaid.

### Workflow for Flash Loan-Based Liquidation  
1. Initiate a Flash Loan  
   - Call `take_flash_loan` with the required resources for the liquidation.  

2. Execute Liquidation  
   - Use the borrowed resources to execute the liquidation transaction.  

3. Repay the Flash Loan  
   - Call `repay_flash_loan` with the liquidation proceeds and any additional resources required to meet the loan terms.  

4. Handle Surplus or Shortfall  
   - Retain any surplus from the liquidation proceeds. If there is a shortfall, ensure additional funds are available to complete the repayment.



## 5. Implementation Steps for the Bot  
Below is a high-level workflow to guide your bot development:  

### Step 1: Fetch CDP Health Regularly  
- Schedule periodic calls to `get_cdp` to monitor CDP states.  

### Step 2: Evaluate Liquidation Opportunities  
- Check `liquidation_ltv` for all monitored CDPs.  
- Filter CDPs by collateral type and available resources.

### Step 3: Use Flash Loans if Required  
- Determine if additional resources are needed for liquidation.  
- Integrate flash loan calls into the bot workflow to fund the process.

### Step 4: Automate Liquidation Transactions  
- Use the [sample transactions](#) to construct liquidation calls for various collateral types.

### Step 5: Manage Resources  
- Continuously monitor the liquidator’s XRD balance to ensure smooth operations.

### Step 6: Logging and Alerts  
- Log all liquidation actions for traceability.  
- Set up alerts for failed transactions or unusual scenarios.  
