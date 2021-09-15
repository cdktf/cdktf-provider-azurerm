// https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLakeStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#encryption_state DataLakeStore#encryption_state}
  */
  readonly encryptionState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#encryption_type DataLakeStore#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#firewall_allow_azure_ips DataLakeStore#firewall_allow_azure_ips}
  */
  readonly firewallAllowAzureIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#firewall_state DataLakeStore#firewall_state}
  */
  readonly firewallState?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#location DataLakeStore#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#name DataLakeStore#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#resource_group_name DataLakeStore#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#tags DataLakeStore#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#tier DataLakeStore#tier}
  */
  readonly tier?: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#identity DataLakeStore#identity}
  */
  readonly identity?: DataLakeStoreIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#timeouts DataLakeStore#timeouts}
  */
  readonly timeouts?: DataLakeStoreTimeouts;
}
export interface DataLakeStoreIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#type DataLakeStore#type}
  */
  readonly type: string;
}

function dataLakeStoreIdentityToTerraform(struct?: DataLakeStoreIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DataLakeStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#create DataLakeStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#delete DataLakeStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#read DataLakeStore#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html#update DataLakeStore#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html azurerm_data_lake_store}
*/
export class DataLakeStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_lake_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_lake_store.html azurerm_data_lake_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLakeStoreConfig
  */
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
    this._identity = config.identity;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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

  // identity - computed: false, optional: true, required: false
  private _identity?: DataLakeStoreIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: DataLakeStoreIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
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
      identity: cdktf.listMapper(dataLakeStoreIdentityToTerraform)(this._identity),
      timeouts: dataLakeStoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
