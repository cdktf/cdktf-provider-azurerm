// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_key_vault_access_policy_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultAccessPolicyAConfig extends TerraformMetaArguments {
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKeyVaultAccessPolicyTimeouts;
}
export interface DataAzurermKeyVaultAccessPolicyTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKeyVaultAccessPolicyA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultAccessPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_permissions - computed: true, optional: false, required: true
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_permissions - computed: true, optional: false, required: true
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // secret_permissions - computed: true, optional: false, required: true
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultAccessPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermKeyVaultAccessPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
