// https://www.terraform.io/docs/providers/azurerm/r/container_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#admin_enabled ContainerRegistry#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#encryption ContainerRegistry#encryption}
  */
  readonly encryption?: ContainerRegistryEncryption[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#georeplication_locations ContainerRegistry#georeplication_locations}
  */
  readonly georeplicationLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#georeplications ContainerRegistry#georeplications}
  */
  readonly georeplications?: ContainerRegistryGeoreplications[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#location ContainerRegistry#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#name ContainerRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#network_rule_set ContainerRegistry#network_rule_set}
  */
  readonly networkRuleSet?: ContainerRegistryNetworkRuleSet[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#public_network_access_enabled ContainerRegistry#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}
  */
  readonly quarantinePolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#resource_group_name ContainerRegistry#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#retention_policy ContainerRegistry#retention_policy}
  */
  readonly retentionPolicy?: ContainerRegistryRetentionPolicy[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#sku ContainerRegistry#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#storage_account_id ContainerRegistry#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#tags ContainerRegistry#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#trust_policy ContainerRegistry#trust_policy}
  */
  readonly trustPolicy?: ContainerRegistryTrustPolicy[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}
  */
  readonly zoneRedundancyEnabled?: boolean | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#identity ContainerRegistry#identity}
  */
  readonly identity?: ContainerRegistryIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#timeouts ContainerRegistry#timeouts}
  */
  readonly timeouts?: ContainerRegistryTimeouts;
}
export interface ContainerRegistryEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#enabled ContainerRegistry#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#identity_client_id ContainerRegistry#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#key_vault_key_id ContainerRegistry#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
}

function containerRegistryEncryptionToTerraform(struct?: ContainerRegistryEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identity_client_id: cdktf.stringToTerraform(struct!.identityClientId),
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
  }
}

export interface ContainerRegistryGeoreplications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#location ContainerRegistry#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#tags ContainerRegistry#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}
  */
  readonly zoneRedundancyEnabled?: boolean | cdktf.IResolvable;
}

function containerRegistryGeoreplicationsToTerraform(struct?: ContainerRegistryGeoreplications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    zone_redundancy_enabled: cdktf.booleanToTerraform(struct!.zoneRedundancyEnabled),
  }
}

export interface ContainerRegistryNetworkRuleSetIpRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#action ContainerRegistry#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#ip_range ContainerRegistry#ip_range}
  */
  readonly ipRange?: string;
}

function containerRegistryNetworkRuleSetIpRuleToTerraform(struct?: ContainerRegistryNetworkRuleSetIpRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    ip_range: struct!.ipRange === undefined ? null : cdktf.stringToTerraform(struct!.ipRange),
  }
}

export interface ContainerRegistryNetworkRuleSetVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#action ContainerRegistry#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#subnet_id ContainerRegistry#subnet_id}
  */
  readonly subnetId?: string;
}

function containerRegistryNetworkRuleSetVirtualNetworkToTerraform(struct?: ContainerRegistryNetworkRuleSetVirtualNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    subnet_id: struct!.subnetId === undefined ? null : cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface ContainerRegistryNetworkRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#default_action ContainerRegistry#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#ip_rule ContainerRegistry#ip_rule}
  */
  readonly ipRule?: ContainerRegistryNetworkRuleSetIpRule[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#virtual_network ContainerRegistry#virtual_network}
  */
  readonly virtualNetwork?: ContainerRegistryNetworkRuleSetVirtualNetwork[];
}

function containerRegistryNetworkRuleSetToTerraform(struct?: ContainerRegistryNetworkRuleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_action: struct!.defaultAction === undefined ? null : cdktf.stringToTerraform(struct!.defaultAction),
    ip_rule: struct!.ipRule === undefined ? null : cdktf.listMapper(containerRegistryNetworkRuleSetIpRuleToTerraform)(struct!.ipRule),
    virtual_network: struct!.virtualNetwork === undefined ? null : cdktf.listMapper(containerRegistryNetworkRuleSetVirtualNetworkToTerraform)(struct!.virtualNetwork),
  }
}

export interface ContainerRegistryRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#days ContainerRegistry#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#enabled ContainerRegistry#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function containerRegistryRetentionPolicyToTerraform(struct?: ContainerRegistryRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: struct!.days === undefined ? null : cdktf.numberToTerraform(struct!.days),
    enabled: struct!.enabled === undefined ? null : cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ContainerRegistryTrustPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#enabled ContainerRegistry#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function containerRegistryTrustPolicyToTerraform(struct?: ContainerRegistryTrustPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: struct!.enabled === undefined ? null : cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ContainerRegistryIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#identity_ids ContainerRegistry#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#type ContainerRegistry#type}
  */
  readonly type: string;
}

function containerRegistryIdentityToTerraform(struct?: ContainerRegistryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerRegistryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#create ContainerRegistry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#delete ContainerRegistry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#read ContainerRegistry#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#update ContainerRegistry#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html azurerm_container_registry}
*/
export class ContainerRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_container_registry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html azurerm_container_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRegistryConfig
  */
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
    this._encryption = config.encryption;
    this._georeplicationLocations = config.georeplicationLocations;
    this._georeplications = config.georeplications;
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
    this._zoneRedundancyEnabled = config.zoneRedundancyEnabled;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable;
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable ) {
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

  // encryption - computed: true, optional: true, required: false
  private _encryption?: ContainerRegistryEncryption[]
  public get encryption(): ContainerRegistryEncryption[] {
    return this.interpolationForAttribute('encryption') as any; // Getting the computed value is not yet implemented
  }
  public set encryption(value: ContainerRegistryEncryption[]) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption
  }

  // georeplication_locations - computed: true, optional: true, required: false
  private _georeplicationLocations?: string[];
  public get georeplicationLocations() {
    return this.getListAttribute('georeplication_locations');
  }
  public set georeplicationLocations(value: string[]) {
    this._georeplicationLocations = value;
  }
  public resetGeoreplicationLocations() {
    this._georeplicationLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get georeplicationLocationsInput() {
    return this._georeplicationLocations
  }

  // georeplications - computed: true, optional: true, required: false
  private _georeplications?: ContainerRegistryGeoreplications[]
  public get georeplications(): ContainerRegistryGeoreplications[] {
    return this.interpolationForAttribute('georeplications') as any; // Getting the computed value is not yet implemented
  }
  public set georeplications(value: ContainerRegistryGeoreplications[]) {
    this._georeplications = value;
  }
  public resetGeoreplications() {
    this._georeplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get georeplicationsInput() {
    return this._georeplications
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
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable ) {
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
  private _quarantinePolicyEnabled?: boolean | cdktf.IResolvable;
  public get quarantinePolicyEnabled() {
    return this.getBooleanAttribute('quarantine_policy_enabled');
  }
  public set quarantinePolicyEnabled(value: boolean | cdktf.IResolvable ) {
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

  // zone_redundancy_enabled - computed: false, optional: true, required: false
  private _zoneRedundancyEnabled?: boolean | cdktf.IResolvable;
  public get zoneRedundancyEnabled() {
    return this.getBooleanAttribute('zone_redundancy_enabled');
  }
  public set zoneRedundancyEnabled(value: boolean | cdktf.IResolvable ) {
    this._zoneRedundancyEnabled = value;
  }
  public resetZoneRedundancyEnabled() {
    this._zoneRedundancyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRedundancyEnabledInput() {
    return this._zoneRedundancyEnabled
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ContainerRegistryIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ContainerRegistryIdentity[] ) {
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
      encryption: cdktf.listMapper(containerRegistryEncryptionToTerraform)(this._encryption),
      georeplication_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._georeplicationLocations),
      georeplications: cdktf.listMapper(containerRegistryGeoreplicationsToTerraform)(this._georeplications),
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
      zone_redundancy_enabled: cdktf.booleanToTerraform(this._zoneRedundancyEnabled),
      identity: cdktf.listMapper(containerRegistryIdentityToTerraform)(this._identity),
      timeouts: containerRegistryTimeoutsToTerraform(this._timeouts),
    };
  }
}
