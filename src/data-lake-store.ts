// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataLakeStoreConfig extends TerraformMetaArguments {
  readonly encryptionState?: string;
  readonly encryptionType?: string;
  readonly firewallAllowAzureIps?: string;
  readonly firewallState?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly tier?: string;
  /** timeouts block */
  readonly timeouts?: DataLakeStoreTimeouts;
}
export interface DataLakeStoreTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataLakeStore extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataLakeStoreConfig) {
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
    this._encryptionState = config.encryptionState;
    this._encryptionType = config.encryptionType;
    this._firewallAllowAzureIps = config.firewallAllowAzureIps;
    this._firewallState = config.firewallState;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._tier = config.tier;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_state - computed: false, optional: true, required: false
  private _encryptionState?: string;
  public get encryptionState() {
    return this._encryptionState;
  }
  public set encryptionState(value: string | undefined) {
    this._encryptionState = value;
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string;
  public get encryptionType() {
    return this._encryptionType ?? this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string | undefined) {
    this._encryptionType = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // firewall_allow_azure_ips - computed: false, optional: true, required: false
  private _firewallAllowAzureIps?: string;
  public get firewallAllowAzureIps() {
    return this._firewallAllowAzureIps;
  }
  public set firewallAllowAzureIps(value: string | undefined) {
    this._firewallAllowAzureIps = value;
  }

  // firewall_state - computed: false, optional: true, required: false
  private _firewallState?: string;
  public get firewallState() {
    return this._firewallState;
  }
  public set firewallState(value: string | undefined) {
    this._firewallState = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string | undefined) {
    this._tier = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeStoreTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataLakeStoreTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_state: this._encryptionState,
      encryption_type: this._encryptionType,
      firewall_allow_azure_ips: this._firewallAllowAzureIps,
      firewall_state: this._firewallState,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      tier: this._tier,
      timeouts: this._timeouts,
    };
  }
}
