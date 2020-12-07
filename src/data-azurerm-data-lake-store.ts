// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_data_lake_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermDataLakeStoreConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDataLakeStoreTimeouts;
}
export interface DataAzurermDataLakeStoreTimeouts {
  readonly read?: string;
}

function dataAzurermDataLakeStoreTimeoutsToTerraform(struct?: DataAzurermDataLakeStoreTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermDataLakeStore extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermDataLakeStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_lake_store',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_state - computed: true, optional: false, required: false
  public get encryptionState() {
    return this.getStringAttribute('encryption_state');
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // firewall_allow_azure_ips - computed: true, optional: false, required: false
  public get firewallAllowAzureIps() {
    return this.getStringAttribute('firewall_allow_azure_ips');
  }

  // firewall_state - computed: true, optional: false, required: false
  public get firewallState() {
    return this.getStringAttribute('firewall_state');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataLakeStoreTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermDataLakeStoreTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermDataLakeStoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
