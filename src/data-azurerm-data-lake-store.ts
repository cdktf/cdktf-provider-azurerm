// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_data_lake_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermDataLakeStoreConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermDataLakeStoreTimeouts;
}
export interface DataAzurermDataLakeStoreTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermDataLakeStore extends TerraformDataSource {

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

  // encryption_state - computed: true, optional: false, required: true
  public get encryptionState() {
    return this.getStringAttribute('encryption_state');
  }

  // encryption_type - computed: true, optional: false, required: true
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // firewall_allow_azure_ips - computed: true, optional: false, required: true
  public get firewallAllowAzureIps() {
    return this.getStringAttribute('firewall_allow_azure_ips');
  }

  // firewall_state - computed: true, optional: false, required: true
  public get firewallState() {
    return this.getStringAttribute('firewall_state');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // tier - computed: true, optional: false, required: true
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermDataLakeStoreTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermDataLakeStoreTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
