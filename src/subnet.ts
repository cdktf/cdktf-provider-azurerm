// https://www.terraform.io/docs/providers/azurerm/r/subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SubnetConfig extends TerraformMetaArguments {
  readonly addressPrefix?: string;
  readonly addressPrefixes?: string[];
  readonly enforcePrivateLinkEndpointNetworkPolicies?: boolean;
  readonly enforcePrivateLinkServiceNetworkPolicies?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serviceEndpoints?: string[];
  readonly virtualNetworkName: string;
  /** delegation block */
  readonly delegation?: SubnetDelegation[];
  /** timeouts block */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetDelegationServiceDelegation {
  readonly actions?: string[];
  readonly name: string;
}
export interface SubnetDelegation {
  readonly name: string;
  /** service_delegation block */
  readonly serviceDelegation: SubnetDelegationServiceDelegation[];
}
export interface SubnetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Subnet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressPrefix = config.addressPrefix;
    this._addressPrefixes = config.addressPrefixes;
    this._enforcePrivateLinkEndpointNetworkPolicies = config.enforcePrivateLinkEndpointNetworkPolicies;
    this._enforcePrivateLinkServiceNetworkPolicies = config.enforcePrivateLinkServiceNetworkPolicies;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceEndpoints = config.serviceEndpoints;
    this._virtualNetworkName = config.virtualNetworkName;
    this._delegation = config.delegation;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: true, optional: true, required: false
  private _addressPrefix?: string;
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }
  public resetAddressPrefix() {
    this._addressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixInput() {
    return this._addressPrefix
  }

  // address_prefixes - computed: true, optional: true, required: false
  private _addressPrefixes?: string[];
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  public resetAddressPrefixes() {
    this._addressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes
  }

  // enforce_private_link_endpoint_network_policies - computed: false, optional: true, required: false
  private _enforcePrivateLinkEndpointNetworkPolicies?: boolean;
  public get enforcePrivateLinkEndpointNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_endpoint_network_policies');
  }
  public set enforcePrivateLinkEndpointNetworkPolicies(value: boolean ) {
    this._enforcePrivateLinkEndpointNetworkPolicies = value;
  }
  public resetEnforcePrivateLinkEndpointNetworkPolicies() {
    this._enforcePrivateLinkEndpointNetworkPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePrivateLinkEndpointNetworkPoliciesInput() {
    return this._enforcePrivateLinkEndpointNetworkPolicies
  }

  // enforce_private_link_service_network_policies - computed: false, optional: true, required: false
  private _enforcePrivateLinkServiceNetworkPolicies?: boolean;
  public get enforcePrivateLinkServiceNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_service_network_policies');
  }
  public set enforcePrivateLinkServiceNetworkPolicies(value: boolean ) {
    this._enforcePrivateLinkServiceNetworkPolicies = value;
  }
  public resetEnforcePrivateLinkServiceNetworkPolicies() {
    this._enforcePrivateLinkServiceNetworkPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePrivateLinkServiceNetworkPoliciesInput() {
    return this._enforcePrivateLinkServiceNetworkPolicies
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_endpoints - computed: false, optional: true, required: false
  private _serviceEndpoints?: string[];
  public get serviceEndpoints() {
    return this.getListAttribute('service_endpoints');
  }
  public set serviceEndpoints(value: string[] ) {
    this._serviceEndpoints = value;
  }
  public resetServiceEndpoints() {
    this._serviceEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointsInput() {
    return this._serviceEndpoints
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName: string;
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation?: SubnetDelegation[];
  public get delegation() {
    return this.interpolationForAttribute('delegation') as any;
  }
  public set delegation(value: SubnetDelegation[] ) {
    this._delegation = value;
  }
  public resetDelegation() {
    this._delegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SubnetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SubnetTimeouts ) {
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
      address_prefix: this._addressPrefix,
      address_prefixes: this._addressPrefixes,
      enforce_private_link_endpoint_network_policies: this._enforcePrivateLinkEndpointNetworkPolicies,
      enforce_private_link_service_network_policies: this._enforcePrivateLinkServiceNetworkPolicies,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      service_endpoints: this._serviceEndpoints,
      virtual_network_name: this._virtualNetworkName,
      delegation: this._delegation,
      timeouts: this._timeouts,
    };
  }
}
