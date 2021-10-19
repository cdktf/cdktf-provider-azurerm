// https://www.terraform.io/docs/providers/azurerm/d/billing_enrollment_account_scope.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBillingEnrollmentAccountScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_enrollment_account_scope.html#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}
  */
  readonly billingAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_enrollment_account_scope.html#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}
  */
  readonly enrollmentAccountName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_enrollment_account_scope.html#timeouts DataAzurermBillingEnrollmentAccountScope#timeouts}
  */
  readonly timeouts?: DataAzurermBillingEnrollmentAccountScopeTimeouts;
}
export interface DataAzurermBillingEnrollmentAccountScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_enrollment_account_scope.html#read DataAzurermBillingEnrollmentAccountScope#read}
  */
  readonly read?: string;
}

function dataAzurermBillingEnrollmentAccountScopeTimeoutsToTerraform(struct?: DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference | DataAzurermBillingEnrollmentAccountScopeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/billing_enrollment_account_scope.html azurerm_billing_enrollment_account_scope}
*/
export class DataAzurermBillingEnrollmentAccountScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_billing_enrollment_account_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/billing_enrollment_account_scope.html azurerm_billing_enrollment_account_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBillingEnrollmentAccountScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBillingEnrollmentAccountScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_billing_enrollment_account_scope',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccountName = config.billingAccountName;
    this._enrollmentAccountName = config.enrollmentAccountName;
    this._timeouts = config.timeouts;
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
    return this._billingAccountName
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
    return this._enrollmentAccountName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermBillingEnrollmentAccountScopeTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermBillingEnrollmentAccountScopeTimeouts | undefined) {
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
      enrollment_account_name: cdktf.stringToTerraform(this._enrollmentAccountName),
      timeouts: dataAzurermBillingEnrollmentAccountScopeTimeoutsToTerraform(this._timeouts),
    };
  }
}
