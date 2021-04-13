// https://www.terraform.io/docs/providers/azurerm/r/container_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  readonly adminEnabled?: boolean;
  readonly georeplicationLocations?: string[];
  readonly location: string;
  readonly name: string;
  readonly networkRuleSet?: ContainerRegistryNetworkRuleSet[];
  readonly publicNetworkAccessEnabled?: boolean;
  readonly quarantinePolicyEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly retentionPolicy?: ContainerRegistryRetentionPolicy[];
  readonly sku?: string;
  readonly storageAccountId?: string;
  readonly tags?: { [key: string]: string };
  readonly trustPolicy?: ContainerRegistryTrustPolicy[];
  /** timeouts block */
  readonly timeouts?: ContainerRegistryTimeouts;
}
export interface ContainerRegistryNetworkRuleSetIpRule {
  readonly action?: string;
  readonly ipRange?: string;
}

function containerRegistryNetworkRuleSetIpRuleToTerraform(struct?: ContainerRegistryNetworkRuleSetIpRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
  }
}

export interface ContainerRegistryNetworkRuleSetVirtualNetwork {
  readonly action?: string;
  readonly subnetId?: string;
}

function containerRegistryNetworkRuleSetVirtualNetworkToTerraform(struct?: ContainerRegistryNetworkRuleSetVirtualNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ContainerRegistryNetworkRuleSet {
  readonly defaultAction?: string;
  readonly ipRule?: ContainerRegistryNetworkRuleSetIpRule[];
  readonly virtualNetwork?: ContainerRegistryNetworkRuleSetVirtualNetwork[];
}

function containerRegistryNetworkRuleSetToTerraform(struct?: ContainerRegistryNetworkRuleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rule: cdktf.listMapper(containerRegistryNetworkRuleSetIpRuleToTerraform)(struct!.ipRule),
    virtual_network: cdktf.listMapper(containerRegistryNetworkRuleSetVirtualNetworkToTerraform)(struct!.virtualNetwork),
  }
}

export interface ContainerRegistryRetentionPolicy {
  readonly days?: number;
  readonly enabled?: boolean;
}

function containerRegistryRetentionPolicyToTerraform(struct?: ContainerRegistryRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ContainerRegistryTrustPolicy {
  readonly enabled?: boolean;
}

function containerRegistryTrustPolicyToTerraform(struct?: ContainerRegistryTrustPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ContainerRegistryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function containerRegistryTimeoutsToTerraform(struct?: ContainerRegistryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ContainerRegistry extends cdktf.TerraformResource {

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
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._quarantinePolicyEnabled = config.quarantinePolicyEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionPolicy = config.retentionPolicy;
    this._sku = config.sku;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._trustPolicy = config.trustPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean;
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean ) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // georeplication_locations - computed: false, optional: true, required: false
  private _georeplicationLocations?: string[];
  public get georeplicationLocations() {
    return this.getListAttribute('georeplication_locations');
  }
  public set georeplicationLocations(value: string[] ) {
    this._georeplicationLocations = value;
  }
  public resetGeoreplicationLocations() {
    this._georeplicationLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get georeplicationLocationsInput() {
    return this._georeplicationLocations
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

  // login_server - computed: true, optional: false, required: false
  public get loginServer() {
    return this.getStringAttribute('login_server');
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

  // network_rule_set - computed: true, optional: true, required: false
  private _networkRuleSet?: ContainerRegistryNetworkRuleSet[]
  public get networkRuleSet(): ContainerRegistryNetworkRuleSet[] {
    return this.interpolationForAttribute('network_rule_set') as any; // Getting the computed value is not yet implemented
  }
  public set networkRuleSet(value: ContainerRegistryNetworkRuleSet[]) {
    this._networkRuleSet = value;
  }
  public resetNetworkRuleSet() {
    this._networkRuleSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleSetInput() {
    return this._networkRuleSet
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean ) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // quarantine_policy_enabled - computed: false, optional: true, required: false
  private _quarantinePolicyEnabled?: boolean;
  public get quarantinePolicyEnabled() {
    return this.getBooleanAttribute('quarantine_policy_enabled');
  }
  public set quarantinePolicyEnabled(value: boolean ) {
    this._quarantinePolicyEnabled = value;
  }
  public resetQuarantinePolicyEnabled() {
    this._quarantinePolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantinePolicyEnabledInput() {
    return this._quarantinePolicyEnabled
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

  // retention_policy - computed: true, optional: true, required: false
  private _retentionPolicy?: ContainerRegistryRetentionPolicy[]
  public get retentionPolicy(): ContainerRegistryRetentionPolicy[] {
    return this.interpolationForAttribute('retention_policy') as any; // Getting the computed value is not yet implemented
  }
  public set retentionPolicy(value: ContainerRegistryRetentionPolicy[]) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string ) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string ) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
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

  // trust_policy - computed: true, optional: true, required: false
  private _trustPolicy?: ContainerRegistryTrustPolicy[]
  public get trustPolicy(): ContainerRegistryTrustPolicy[] {
    return this.interpolationForAttribute('trust_policy') as any; // Getting the computed value is not yet implemented
  }
  public set trustPolicy(value: ContainerRegistryTrustPolicy[]) {
    this._trustPolicy = value;
  }
  public resetTrustPolicy() {
    this._trustPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustPolicyInput() {
    return this._trustPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerRegistryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerRegistryTimeouts ) {
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
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      georeplication_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._georeplicationLocations),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_rule_set: cdktf.listMapper(containerRegistryNetworkRuleSetToTerraform)(this._networkRuleSet),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      quarantine_policy_enabled: cdktf.booleanToTerraform(this._quarantinePolicyEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retention_policy: cdktf.listMapper(containerRegistryRetentionPolicyToTerraform)(this._retentionPolicy),
      sku: cdktf.stringToTerraform(this._sku),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      trust_policy: cdktf.listMapper(containerRegistryTrustPolicyToTerraform)(this._trustPolicy),
      timeouts: containerRegistryTimeoutsToTerraform(this._timeouts),
    };
  }
}
