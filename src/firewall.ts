// https://www.terraform.io/docs/providers/azurerm/r/firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#dns_servers Firewall#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#firewall_policy_id Firewall#firewall_policy_id}
  */
  readonly firewallPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#location Firewall#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#name Firewall#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#private_ip_ranges Firewall#private_ip_ranges}
  */
  readonly privateIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#resource_group_name Firewall#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#sku_name Firewall#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#sku_tier Firewall#sku_tier}
  */
  readonly skuTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#tags Firewall#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#threat_intel_mode Firewall#threat_intel_mode}
  */
  readonly threatIntelMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#zones Firewall#zones}
  */
  readonly zones?: string[];
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#ip_configuration Firewall#ip_configuration}
  */
  readonly ipConfiguration?: FirewallIpConfiguration[];
  /**
  * management_ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#management_ip_configuration Firewall#management_ip_configuration}
  */
  readonly managementIpConfiguration?: FirewallManagementIpConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#timeouts Firewall#timeouts}
  */
  readonly timeouts?: FirewallTimeouts;
  /**
  * virtual_hub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#virtual_hub Firewall#virtual_hub}
  */
  readonly virtualHub?: FirewallVirtualHub;
}
export interface FirewallIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#name Firewall#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#public_ip_address_id Firewall#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#subnet_id Firewall#subnet_id}
  */
  readonly subnetId?: string;
}

function firewallIpConfigurationToTerraform(struct?: FirewallIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface FirewallManagementIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#name Firewall#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#public_ip_address_id Firewall#public_ip_address_id}
  */
  readonly publicIpAddressId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#subnet_id Firewall#subnet_id}
  */
  readonly subnetId: string;
}

function firewallManagementIpConfigurationToTerraform(struct?: FirewallManagementIpConfigurationOutputReference | FirewallManagementIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class FirewallManagementIpConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // public_ip_address_id - computed: false, optional: false, required: true
  private _publicIpAddressId?: string; 
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }
  public set publicIpAddressId(value: string) {
    this._publicIpAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressIdInput() {
    return this._publicIpAddressId
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }
}
export interface FirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#create Firewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#delete Firewall#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#read Firewall#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#update Firewall#update}
  */
  readonly update?: string;
}

function firewallTimeoutsToTerraform(struct?: FirewallTimeoutsOutputReference | FirewallTimeouts): any {
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

export class FirewallTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface FirewallVirtualHub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#public_ip_count Firewall#public_ip_count}
  */
  readonly publicIpCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html#virtual_hub_id Firewall#virtual_hub_id}
  */
  readonly virtualHubId: string;
}

function firewallVirtualHubToTerraform(struct?: FirewallVirtualHubOutputReference | FirewallVirtualHub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip_count: cdktf.numberToTerraform(struct!.publicIpCount),
    virtual_hub_id: cdktf.stringToTerraform(struct!.virtualHubId),
  }
}

export class FirewallVirtualHubOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // public_ip_count - computed: false, optional: true, required: false
  private _publicIpCount?: number | undefined; 
  public get publicIpCount() {
    return this.getNumberAttribute('public_ip_count');
  }
  public set publicIpCount(value: number | undefined) {
    this._publicIpCount = value;
  }
  public resetPublicIpCount() {
    this._publicIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpCountInput() {
    return this._publicIpCount
  }

  // virtual_hub_id - computed: false, optional: false, required: true
  private _virtualHubId?: string; 
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string) {
    this._virtualHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html azurerm_firewall}
*/
export class Firewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_firewall";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/firewall.html azurerm_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsServers = config.dnsServers;
    this._firewallPolicyId = config.firewallPolicyId;
    this._location = config.location;
    this._name = config.name;
    this._privateIpRanges = config.privateIpRanges;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._skuTier = config.skuTier;
    this._tags = config.tags;
    this._threatIntelMode = config.threatIntelMode;
    this._zones = config.zones;
    this._ipConfiguration = config.ipConfiguration;
    this._managementIpConfiguration = config.managementIpConfiguration;
    this._timeouts = config.timeouts;
    this._virtualHub = config.virtualHub;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[] | undefined; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[] | undefined) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers
  }

  // firewall_policy_id - computed: false, optional: true, required: false
  private _firewallPolicyId?: string | undefined; 
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }
  public set firewallPolicyId(value: string | undefined) {
    this._firewallPolicyId = value;
  }
  public resetFirewallPolicyId() {
    this._firewallPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyIdInput() {
    return this._firewallPolicyId
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

  // private_ip_ranges - computed: false, optional: true, required: false
  private _privateIpRanges?: string[] | undefined; 
  public get privateIpRanges() {
    return this.getListAttribute('private_ip_ranges');
  }
  public set privateIpRanges(value: string[] | undefined) {
    this._privateIpRanges = value;
  }
  public resetPrivateIpRanges() {
    this._privateIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpRangesInput() {
    return this._privateIpRanges
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

  // sku_name - computed: true, optional: true, required: false
  private _skuName?: string | undefined; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string | undefined) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // sku_tier - computed: true, optional: true, required: false
  private _skuTier?: string | undefined; 
  public get skuTier() {
    return this.getStringAttribute('sku_tier');
  }
  public set skuTier(value: string | undefined) {
    this._skuTier = value;
  }
  public resetSkuTier() {
    this._skuTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuTierInput() {
    return this._skuTier
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

  // threat_intel_mode - computed: false, optional: true, required: false
  private _threatIntelMode?: string | undefined; 
  public get threatIntelMode() {
    return this.getStringAttribute('threat_intel_mode');
  }
  public set threatIntelMode(value: string | undefined) {
    this._threatIntelMode = value;
  }
  public resetThreatIntelMode() {
    this._threatIntelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelModeInput() {
    return this._threatIntelMode
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: FirewallIpConfiguration[] | undefined; 
  public get ipConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_configuration') as any;
  }
  public set ipConfiguration(value: FirewallIpConfiguration[] | undefined) {
    this._ipConfiguration = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration
  }

  // management_ip_configuration - computed: false, optional: true, required: false
  private _managementIpConfiguration?: FirewallManagementIpConfiguration | undefined; 
  private __managementIpConfigurationOutput = new FirewallManagementIpConfigurationOutputReference(this as any, "management_ip_configuration", true);
  public get managementIpConfiguration() {
    return this.__managementIpConfigurationOutput;
  }
  public putManagementIpConfiguration(value: FirewallManagementIpConfiguration | undefined) {
    this._managementIpConfiguration = value;
  }
  public resetManagementIpConfiguration() {
    this._managementIpConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpConfigurationInput() {
    return this._managementIpConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallTimeouts | undefined; 
  private __timeoutsOutput = new FirewallTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FirewallTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // virtual_hub - computed: false, optional: true, required: false
  private _virtualHub?: FirewallVirtualHub | undefined; 
  private __virtualHubOutput = new FirewallVirtualHubOutputReference(this as any, "virtual_hub", true);
  public get virtualHub() {
    return this.__virtualHubOutput;
  }
  public putVirtualHub(value: FirewallVirtualHub | undefined) {
    this._virtualHub = value;
  }
  public resetVirtualHub() {
    this._virtualHub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubInput() {
    return this._virtualHub
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
      firewall_policy_id: cdktf.stringToTerraform(this._firewallPolicyId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      private_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIpRanges),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      sku_tier: cdktf.stringToTerraform(this._skuTier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      threat_intel_mode: cdktf.stringToTerraform(this._threatIntelMode),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      ip_configuration: cdktf.listMapper(firewallIpConfigurationToTerraform)(this._ipConfiguration),
      management_ip_configuration: firewallManagementIpConfigurationToTerraform(this._managementIpConfiguration),
      timeouts: firewallTimeoutsToTerraform(this._timeouts),
      virtual_hub: firewallVirtualHubToTerraform(this._virtualHub),
    };
  }
}
