// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_billing_enrollment_account_scope.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBillingEnrollmentAccountScopeConfig extends cdktf.TerraformMetaArguments {
  readonly billingAccountName: string;
  readonly enrollmentAccountName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermBillingEnrollmentAccountScopeTimeouts;
}
export interface DataAzurermBillingEnrollmentAccountScopeTimeouts {
  readonly read?: string;
}

function dataAzurermBillingEnrollmentAccountScopeTimeoutsToTerraform(struct?: DataAzurermBillingEnrollmentAccountScopeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermBillingEnrollmentAccountScope extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // enrollment_account_name - computed: false, optional: false, required: true
  private _enrollmentAccountName: string;
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
  private _timeouts?: DataAzurermBillingEnrollmentAccountScopeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermBillingEnrollmentAccountScopeTimeouts ) {
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
