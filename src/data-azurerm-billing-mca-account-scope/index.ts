// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBillingMcaAccountScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}
  */
  readonly billingAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}
  */
  readonly billingProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}
  */
  readonly invoiceSectionName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope#timeouts DataAzurermBillingMcaAccountScope#timeouts}
  */
  readonly timeouts?: DataAzurermBillingMcaAccountScopeTimeouts;
}
export interface DataAzurermBillingMcaAccountScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}
  */
  readonly read?: string;
}

export function dataAzurermBillingMcaAccountScopeTimeoutsToTerraform(struct?: DataAzurermBillingMcaAccountScopeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermBillingMcaAccountScopeTimeoutsToHclTerraform(struct?: DataAzurermBillingMcaAccountScopeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermBillingMcaAccountScopeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermBillingMcaAccountScopeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermBillingMcaAccountScopeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope azurerm_billing_mca_account_scope}
*/
export class DataAzurermBillingMcaAccountScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_billing_mca_account_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermBillingMcaAccountScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermBillingMcaAccountScope to import
  * @param importFromId The id of the existing DataAzurermBillingMcaAccountScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermBillingMcaAccountScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_billing_mca_account_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_mca_account_scope azurerm_billing_mca_account_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBillingMcaAccountScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBillingMcaAccountScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_billing_mca_account_scope',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingAccountName = config.billingAccountName;
    this._billingProfileName = config.billingProfileName;
    this._id = config.id;
    this._invoiceSectionName = config.invoiceSectionName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_name - computed: false, optional: false, required: true
  private _billingAccountName?: string; 
  public get billingAccountName() {
    return this.getStringAttribute('billing_account_name');
  }
  public set billingAccountName(value: string) {
    this._billingAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountNameInput() {
    return this._billingAccountName;
  }

  // billing_profile_name - computed: false, optional: false, required: true
  private _billingProfileName?: string; 
  public get billingProfileName() {
    return this.getStringAttribute('billing_profile_name');
  }
  public set billingProfileName(value: string) {
    this._billingProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProfileNameInput() {
    return this._billingProfileName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invoice_section_name - computed: false, optional: false, required: true
  private _invoiceSectionName?: string; 
  public get invoiceSectionName() {
    return this.getStringAttribute('invoice_section_name');
  }
  public set invoiceSectionName(value: string) {
    this._invoiceSectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invoiceSectionNameInput() {
    return this._invoiceSectionName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermBillingMcaAccountScopeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermBillingMcaAccountScopeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account_name: cdktf.stringToTerraform(this._billingAccountName),
      billing_profile_name: cdktf.stringToTerraform(this._billingProfileName),
      id: cdktf.stringToTerraform(this._id),
      invoice_section_name: cdktf.stringToTerraform(this._invoiceSectionName),
      timeouts: dataAzurermBillingMcaAccountScopeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_account_name: {
        value: cdktf.stringToHclTerraform(this._billingAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_profile_name: {
        value: cdktf.stringToHclTerraform(this._billingProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoice_section_name: {
        value: cdktf.stringToHclTerraform(this._invoiceSectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermBillingMcaAccountScopeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermBillingMcaAccountScopeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
