// https://www.terraform.io/docs/providers/azurerm/r/network_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends TerraformMetaArguments {
  readonly dnsServers?: string[];
  readonly enableAcceleratedNetworking?: boolean;
  readonly enableIpForwarding?: boolean;
  readonly internalDnsNameLabel?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** ip_configuration block */
  readonly ipConfiguration: NetworkInterfaceIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: NetworkInterfaceTimeouts;
}
export interface NetworkInterfaceIpConfiguration {
  readonly name: string;
  readonly primary?: boolean;
  readonly privateIpAddress?: string;
  readonly privateIpAddressAllocation: string;
  readonly privateIpAddressVersion?: string;
  readonly publicIpAddressId?: string;
  readonly subnetId?: string;
}
export interface NetworkInterfaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetworkInterface extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsServers = config.dnsServers;
    this._enableAcceleratedNetworking = config.enableAcceleratedNetworking;
    this._enableIpForwarding = config.enableIpForwarding;
    this._internalDnsNameLabel = config.internalDnsNameLabel;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._ipConfiguration = config.ipConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_dns_servers - computed: true, optional: false, required: false
  public get appliedDnsServers() {
    return this.getListAttribute('applied_dns_servers');
  }

  // dns_servers - computed: true, optional: true, required: false
  private _dnsServers?: string[];
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers
  }

  // enable_accelerated_networking - computed: false, optional: true, required: false
  private _enableAcceleratedNetworking?: boolean;
  public get enableAcceleratedNetworking() {
    return this.getBooleanAttribute('enable_accelerated_networking');
  }
  public set enableAcceleratedNetworking(value: boolean ) {
    this._enableAcceleratedNetworking = value;
  }
  public resetEnableAcceleratedNetworking() {
    this._enableAcceleratedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceleratedNetworkingInput() {
    return this._enableAcceleratedNetworking
  }

  // enable_ip_forwarding - computed: false, optional: true, required: false
  private _enableIpForwarding?: boolean;
  public get enableIpForwarding() {
    return this.getBooleanAttribute('enable_ip_forwarding');
  }
  public set enableIpForwarding(value: boolean ) {
    this._enableIpForwarding = value;
  }
  public resetEnableIpForwarding() {
    this._enableIpForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpForwardingInput() {
    return this._enableIpForwarding
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_dns_name_label - computed: true, optional: true, required: false
  private _internalDnsNameLabel?: string;
  public get internalDnsNameLabel() {
    return this.getStringAttribute('internal_dns_name_label');
  }
  public set internalDnsNameLabel(value: string) {
    this._internalDnsNameLabel = value;
  }
  public resetInternalDnsNameLabel() {
    this._internalDnsNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDnsNameLabelInput() {
    return this._internalDnsNameLabel
  }

  // internal_domain_name_suffix - computed: true, optional: false, required: false
  public get internalDomainNameSuffix() {
    return this.getStringAttribute('internal_domain_name_suffix');
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

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
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

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
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

  // virtual_machine_id - computed: true, optional: false, required: false
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }

  // ip_configuration - computed: false, optional: false, required: true
  private _ipConfiguration: NetworkInterfaceIpConfiguration[];
  public get ipConfiguration() {
    return this.interpolationForAttribute('ip_configuration') as any;
  }
  public set ipConfiguration(value: NetworkInterfaceIpConfiguration[]) {
    this._ipConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkInterfaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkInterfaceTimeouts ) {
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
      dns_servers: this._dnsServers,
      enable_accelerated_networking: this._enableAcceleratedNetworking,
      enable_ip_forwarding: this._enableIpForwarding,
      internal_dns_name_label: this._internalDnsNameLabel,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      ip_configuration: this._ipConfiguration,
      timeouts: this._timeouts,
    };
  }
}
