// https://www.terraform.io/docs/providers/azurerm/r/firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FirewallConfig extends TerraformMetaArguments {
  readonly dnsServers?: string[];
  readonly firewallPolicyId?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly skuName?: string;
  readonly skuTier?: string;
  readonly tags?: { [key: string]: string };
  readonly threatIntelMode?: string;
  readonly zones?: string[];
  /** ip_configuration block */
  readonly ipConfiguration?: FirewallIpConfiguration[];
  /** management_ip_configuration block */
  readonly managementIpConfiguration?: FirewallManagementIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: FirewallTimeouts;
  /** virtual_hub block */
  readonly virtualHub?: FirewallVirtualHub[];
}
export interface FirewallIpConfiguration {
  readonly name: string;
  readonly publicIpAddressId: string;
  readonly subnetId?: string;
}
export interface FirewallManagementIpConfiguration {
  readonly name: string;
  readonly publicIpAddressId: string;
  readonly subnetId: string;
}
export interface FirewallTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface FirewallVirtualHub {
  readonly publicIpCount?: number;
  readonly virtualHubId: string;
}

// Resource

export class Firewall extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _dnsServers?: string[];
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[] ) {
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
  private _firewallPolicyId?: string;
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }
  public set firewallPolicyId(value: string ) {
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

  // sku_name - computed: true, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
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
  private _skuTier?: string;
  public get skuTier() {
    return this.getStringAttribute('sku_tier');
  }
  public set skuTier(value: string) {
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

  // threat_intel_mode - computed: false, optional: true, required: false
  private _threatIntelMode?: string;
  public get threatIntelMode() {
    return this.getStringAttribute('threat_intel_mode');
  }
  public set threatIntelMode(value: string ) {
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
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
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
  private _ipConfiguration?: FirewallIpConfiguration[];
  public get ipConfiguration() {
    return this.interpolationForAttribute('ip_configuration') as any;
  }
  public set ipConfiguration(value: FirewallIpConfiguration[] ) {
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
  private _managementIpConfiguration?: FirewallManagementIpConfiguration[];
  public get managementIpConfiguration() {
    return this.interpolationForAttribute('management_ip_configuration') as any;
  }
  public set managementIpConfiguration(value: FirewallManagementIpConfiguration[] ) {
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
  private _timeouts?: FirewallTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirewallTimeouts ) {
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
  private _virtualHub?: FirewallVirtualHub[];
  public get virtualHub() {
    return this.interpolationForAttribute('virtual_hub') as any;
  }
  public set virtualHub(value: FirewallVirtualHub[] ) {
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
      dns_servers: this._dnsServers,
      firewall_policy_id: this._firewallPolicyId,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      sku_tier: this._skuTier,
      tags: this._tags,
      threat_intel_mode: this._threatIntelMode,
      zones: this._zones,
      ip_configuration: this._ipConfiguration,
      management_ip_configuration: this._managementIpConfiguration,
      timeouts: this._timeouts,
      virtual_hub: this._virtualHub,
    };
  }
}
