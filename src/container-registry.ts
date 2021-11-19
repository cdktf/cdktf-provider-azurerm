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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}
  */
  readonly anonymousPullEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}
  */
  readonly dataEndpointEnabled?: boolean | cdktf.IResolvable;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}
  */
  readonly networkRuleBypassOption?: string;
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
  readonly identity?: ContainerRegistryIdentity;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry.html#regional_endpoint_enabled ContainerRegistry#regional_endpoint_enabled}
  */
  readonly regionalEndpointEnabled?: boolean | cdktf.IResolvable;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    regional_endpoint_enabled: cdktf.booleanToTerraform(struct!.regionalEndpointEnabled),
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function containerRegistryIdentityToTerraform(struct?: ContainerRegistryIdentityOutputReference | ContainerRegistryIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ContainerRegistryIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
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

function containerRegistryTimeoutsToTerraform(struct?: ContainerRegistryTimeoutsOutputReference | ContainerRegistryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ContainerRegistryTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
    this._anonymousPullEnabled = config.anonymousPullEnabled;
    this._dataEndpointEnabled = config.dataEndpointEnabled;
    this._encryption = config.encryption;
    this._georeplicationLocations = config.georeplicationLocations;
    this._georeplications = config.georeplications;
    this._location = config.location;
    this._name = config.name;
    this._networkRuleBypassOption = config.networkRuleBypassOption;
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
  private _adminEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled') as any;
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable | undefined) {
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

  // anonymous_pull_enabled - computed: false, optional: true, required: false
  private _anonymousPullEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get anonymousPullEnabled() {
    return this.getBooleanAttribute('anonymous_pull_enabled') as any;
  }
  public set anonymousPullEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._anonymousPullEnabled = value;
  }
  public resetAnonymousPullEnabled() {
    this._anonymousPullEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousPullEnabledInput() {
    return this._anonymousPullEnabled
  }

  // data_endpoint_enabled - computed: false, optional: true, required: false
  private _dataEndpointEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dataEndpointEnabled() {
    return this.getBooleanAttribute('data_endpoint_enabled') as any;
  }
  public set dataEndpointEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dataEndpointEnabled = value;
  }
  public resetDataEndpointEnabled() {
    this._dataEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEndpointEnabledInput() {
    return this._dataEndpointEnabled
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: ContainerRegistryEncryption[] | undefined; 
  public get encryption() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('encryption') as any;
  }
  public set encryption(value: ContainerRegistryEncryption[] | undefined) {
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
  private _georeplicationLocations?: string[] | undefined; 
  public get georeplicationLocations() {
    return this.getListAttribute('georeplication_locations');
  }
  public set georeplicationLocations(value: string[] | undefined) {
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
  private _georeplications?: ContainerRegistryGeoreplications[] | undefined; 
  public get georeplications() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('georeplications') as any;
  }
  public set georeplications(value: ContainerRegistryGeoreplications[] | undefined) {
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
  private _location?: string; 
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
  private _name?: string; 
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

  // network_rule_bypass_option - computed: false, optional: true, required: false
  private _networkRuleBypassOption?: string | undefined; 
  public get networkRuleBypassOption() {
    return this.getStringAttribute('network_rule_bypass_option');
  }
  public set networkRuleBypassOption(value: string | undefined) {
    this._networkRuleBypassOption = value;
  }
  public resetNetworkRuleBypassOption() {
    this._networkRuleBypassOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleBypassOptionInput() {
    return this._networkRuleBypassOption
  }

  // network_rule_set - computed: true, optional: true, required: false
  private _networkRuleSet?: ContainerRegistryNetworkRuleSet[] | undefined; 
  public get networkRuleSet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_rule_set') as any;
  }
  public set networkRuleSet(value: ContainerRegistryNetworkRuleSet[] | undefined) {
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
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _quarantinePolicyEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get quarantinePolicyEnabled() {
    return this.getBooleanAttribute('quarantine_policy_enabled') as any;
  }
  public set quarantinePolicyEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _resourceGroupName?: string; 
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
  private _retentionPolicy?: ContainerRegistryRetentionPolicy[] | undefined; 
  public get retentionPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('retention_policy') as any;
  }
  public set retentionPolicy(value: ContainerRegistryRetentionPolicy[] | undefined) {
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
  private _sku?: string | undefined; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // storage_account_id - computed: true, optional: true, required: false
  private _storageAccountId?: string | undefined; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string | undefined) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _trustPolicy?: ContainerRegistryTrustPolicy[] | undefined; 
  public get trustPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trust_policy') as any;
  }
  public set trustPolicy(value: ContainerRegistryTrustPolicy[] | undefined) {
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
  private _zoneRedundancyEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get zoneRedundancyEnabled() {
    return this.getBooleanAttribute('zone_redundancy_enabled') as any;
  }
  public set zoneRedundancyEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _identity?: ContainerRegistryIdentity | undefined; 
  private __identityOutput = new ContainerRegistryIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: ContainerRegistryIdentity | undefined) {
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
  private _timeouts?: ContainerRegistryTimeouts | undefined; 
  private __timeoutsOutput = new ContainerRegistryTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ContainerRegistryTimeouts | undefined) {
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
      anonymous_pull_enabled: cdktf.booleanToTerraform(this._anonymousPullEnabled),
      data_endpoint_enabled: cdktf.booleanToTerraform(this._dataEndpointEnabled),
      encryption: cdktf.listMapper(containerRegistryEncryptionToTerraform)(this._encryption),
      georeplication_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._georeplicationLocations),
      georeplications: cdktf.listMapper(containerRegistryGeoreplicationsToTerraform)(this._georeplications),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network_rule_bypass_option: cdktf.stringToTerraform(this._networkRuleBypassOption),
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
      identity: containerRegistryIdentityToTerraform(this._identity),
      timeouts: containerRegistryTimeoutsToTerraform(this._timeouts),
    };
  }
}
