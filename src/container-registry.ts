// https://www.terraform.io/docs/providers/azurerm/r/container_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ContainerRegistryConfig extends TerraformMetaArguments {
  readonly adminEnabled?: boolean;
  readonly georeplicationLocations?: string[];
  readonly location: string;
  readonly name: string;
  readonly networkRuleSet?: ContainerRegistryNetworkRuleSet[];
  readonly resourceGroupName: string;
  readonly sku?: string;
  readonly storageAccountId?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: ContainerRegistryTimeouts;
}
export interface ContainerRegistryNetworkRuleSetIpRule {
  readonly action?: string;
  readonly ipRange?: string;
}
export interface ContainerRegistryNetworkRuleSetVirtualNetwork {
  readonly action?: string;
  readonly subnetId?: string;
}
export interface ContainerRegistryNetworkRuleSet {
  readonly defaultAction?: string;
  readonly ipRule?: ContainerRegistryNetworkRuleSetIpRule[];
  readonly virtualNetwork?: ContainerRegistryNetworkRuleSetVirtualNetwork[];
}
export interface ContainerRegistryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ContainerRegistry extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminEnabled = config.adminEnabled;
    this._georeplicationLocations = config.georeplicationLocations;
    this._location = config.location;
    this._name = config.name;
    this._networkRuleSet = config.networkRuleSet;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean;
  public get adminEnabled() {
    return this._adminEnabled;
  }
  public set adminEnabled(value: boolean | undefined) {
    this._adminEnabled = value;
  }

  // admin_password - computed: true, optional: false, required: true
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: true
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // georeplication_locations - computed: false, optional: true, required: false
  private _georeplicationLocations?: string[];
  public get georeplicationLocations() {
    return this._georeplicationLocations;
  }
  public set georeplicationLocations(value: string[] | undefined) {
    this._georeplicationLocations = value;
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

  // login_server - computed: true, optional: false, required: true
  public get loginServer() {
    return this.getStringAttribute('login_server');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_rule_set - computed: true, optional: true, required: false
  private _networkRuleSet?: ContainerRegistryNetworkRuleSet[]
  public get networkRuleSet(): ContainerRegistryNetworkRuleSet[] | undefined {
    return this._networkRuleSet; // Getting the computed value is not yet implemented
  }
  public set networkRuleSet(value: ContainerRegistryNetworkRuleSet[] | undefined) {
    this._networkRuleSet = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this._storageAccountId;
  }
  public set storageAccountId(value: string | undefined) {
    this._storageAccountId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerRegistryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerRegistryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_enabled: this._adminEnabled,
      georeplication_locations: this._georeplicationLocations,
      location: this._location,
      name: this._name,
      network_rule_set: this._networkRuleSet,
      resource_group_name: this._resourceGroupName,
      sku: this._sku,
      storage_account_id: this._storageAccountId,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
