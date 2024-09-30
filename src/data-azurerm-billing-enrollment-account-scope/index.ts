// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBillingEnrollmentAccountScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}
  */
  readonly billingAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}
  */
  readonly enrollmentAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope#id DataAzurermBillingEnrollmentAccountScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope#timeouts DataAzurermBillingEnrollmentAccountScope#timeouts}
  */
  readonly timeouts?: DataAzurermBillingEnrollmentAccountScopeTimeouts;
}
export interface DataAzurermBillingEnrollmentAccountScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope#read DataAzurermBillingEnrollmentAccountScope#read}
  */
  readonly read?: string;
}

export function dataAzurermBillingEnrollmentAccountScopeTimeoutsToTerraform(struct?: DataAzurermBillingEnrollmentAccountScopeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermBillingEnrollmentAccountScopeTimeoutsToHclTerraform(struct?: DataAzurermBillingEnrollmentAccountScopeTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermBillingEnrollmentAccountScopeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermBillingEnrollmentAccountScopeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope azurerm_billing_enrollment_account_scope}
*/
export class DataAzurermBillingEnrollmentAccountScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_billing_enrollment_account_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermBillingEnrollmentAccountScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermBillingEnrollmentAccountScope to import
  * @param importFromId The id of the existing DataAzurermBillingEnrollmentAccountScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermBillingEnrollmentAccountScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_billing_enrollment_account_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/billing_enrollment_account_scope azurerm_billing_enrollment_account_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBillingEnrollmentAccountScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBillingEnrollmentAccountScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_billing_enrollment_account_scope',
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
    this._enrollmentAccountName = config.enrollmentAccountName;
    this._id = config.id;
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

  // enrollment_account_name - computed: false, optional: false, required: true
  private _enrollmentAccountName?: string; 
  public get enrollmentAccountName() {
    return this.getStringAttribute('enrollment_account_name');
  }
  public set enrollmentAccountName(value: string) {
    this._enrollmentAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentAccountNameInput() {
    return this._enrollmentAccountName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermBillingEnrollmentAccountScopeTimeouts) {
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
      enrollment_account_name: cdktf.stringToTerraform(this._enrollmentAccountName),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataAzurermBillingEnrollmentAccountScopeTimeoutsToTerraform(this._timeouts.internalValue),
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
      enrollment_account_name: {
        value: cdktf.stringToHclTerraform(this._enrollmentAccountName),
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
      timeouts: {
        value: dataAzurermBillingEnrollmentAccountScopeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermBillingEnrollmentAccountScopeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
