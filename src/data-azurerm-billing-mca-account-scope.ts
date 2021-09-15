// https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBillingMcaAccountScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}
  */
  readonly billingAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}
  */
  readonly billingProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}
  */
  readonly invoiceSectionName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#timeouts DataAzurermBillingMcaAccountScope#timeouts}
  */
  readonly timeouts?: DataAzurermBillingMcaAccountScopeTimeouts;
}
export interface DataAzurermBillingMcaAccountScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html#read DataAzurermBillingMcaAccountScope#read}
  */
  readonly read?: string;
}

function dataAzurermBillingMcaAccountScopeTimeoutsToTerraform(struct?: DataAzurermBillingMcaAccountScopeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html azurerm_billing_mca_account_scope}
*/
export class DataAzurermBillingMcaAccountScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_billing_mca_account_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope.html azurerm_billing_mca_account_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBillingMcaAccountScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBillingMcaAccountScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_billing_mca_account_scope',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccountName = config.billingAccountName;
    this._billingProfileName = config.billingProfileName;
    this._invoiceSectionName = config.invoiceSectionName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_name - computed: false, optional: false, required: true
  private _billingAccountName: string;
  public get billingAccountName() {
    return this.getStringAttribute('billing_account_name');
  }
  public set billingAccountName(value: string) {
    this._billingAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountNameInput() {
    return this._billingAccountName
  }

  // billing_profile_name - computed: false, optional: false, required: true
  private _billingProfileName: string;
  public get billingProfileName() {
    return this.getStringAttribute('billing_profile_name');
  }
  public set billingProfileName(value: string) {
    this._billingProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProfileNameInput() {
    return this._billingProfileName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoice_section_name - computed: false, optional: false, required: true
  private _invoiceSectionName: string;
  public get invoiceSectionName() {
    return this.getStringAttribute('invoice_section_name');
  }
  public set invoiceSectionName(value: string) {
    this._invoiceSectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invoiceSectionNameInput() {
    return this._invoiceSectionName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermBillingMcaAccountScopeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermBillingMcaAccountScopeTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account_name: cdktf.stringToTerraform(this._billingAccountName),
      billing_profile_name: cdktf.stringToTerraform(this._billingProfileName),
      invoice_section_name: cdktf.stringToTerraform(this._invoiceSectionName),
      timeouts: dataAzurermBillingMcaAccountScopeTimeoutsToTerraform(this._timeouts),
    };
  }
}
