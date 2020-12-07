// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLakeStoreConfig extends cdktf.TerraformMetaArguments {
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

function dataLakeStoreTimeoutsToTerraform(struct?: DataLakeStoreTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataLakeStore extends cdktf.TerraformResource {

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
    return this.getStringAttribute('encryption_state');
  }
  public set encryptionState(value: string ) {
    this._encryptionState = value;
  }
  public resetEncryptionState() {
    this._encryptionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionStateInput() {
    return this._encryptionState
  }

  // encryption_type - computed: true, optional: true, required: false
  private _encryptionType?: string;
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // firewall_allow_azure_ips - computed: false, optional: true, required: false
  private _firewallAllowAzureIps?: string;
  public get firewallAllowAzureIps() {
    return this.getStringAttribute('firewall_allow_azure_ips');
  }
  public set firewallAllowAzureIps(value: string ) {
    this._firewallAllowAzureIps = value;
  }
  public resetFirewallAllowAzureIps() {
    this._firewallAllowAzureIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAllowAzureIpsInput() {
    return this._firewallAllowAzureIps
  }

  // firewall_state - computed: false, optional: true, required: false
  private _firewallState?: string;
  public get firewallState() {
    return this.getStringAttribute('firewall_state');
  }
  public set firewallState(value: string ) {
    this._firewallState = value;
  }
  public resetFirewallState() {
    this._firewallState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallStateInput() {
    return this._firewallState
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string ) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLakeStoreTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLakeStoreTimeouts ) {
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
      encryption_state: cdktf.stringToTerraform(this._encryptionState),
      encryption_type: cdktf.stringToTerraform(this._encryptionType),
      firewall_allow_azure_ips: cdktf.stringToTerraform(this._firewallAllowAzureIps),
      firewall_state: cdktf.stringToTerraform(this._firewallState),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      timeouts: dataLakeStoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
