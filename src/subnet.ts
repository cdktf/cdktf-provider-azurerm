// https://www.terraform.io/docs/providers/azurerm/r/subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SubnetConfig extends TerraformMetaArguments {
  readonly addressPrefix: string;
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

  // address_prefix - computed: false, optional: false, required: true
  private _addressPrefix: string;
  public get addressPrefix() {
    return this._addressPrefix;
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }

  // enforce_private_link_endpoint_network_policies - computed: false, optional: true, required: false
  private _enforcePrivateLinkEndpointNetworkPolicies?: boolean;
  public get enforcePrivateLinkEndpointNetworkPolicies() {
    return this._enforcePrivateLinkEndpointNetworkPolicies;
  }
  public set enforcePrivateLinkEndpointNetworkPolicies(value: boolean | undefined) {
    this._enforcePrivateLinkEndpointNetworkPolicies = value;
  }

  // enforce_private_link_service_network_policies - computed: false, optional: true, required: false
  private _enforcePrivateLinkServiceNetworkPolicies?: boolean;
  public get enforcePrivateLinkServiceNetworkPolicies() {
    return this._enforcePrivateLinkServiceNetworkPolicies;
  }
  public set enforcePrivateLinkServiceNetworkPolicies(value: boolean | undefined) {
    this._enforcePrivateLinkServiceNetworkPolicies = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_endpoints - computed: false, optional: true, required: false
  private _serviceEndpoints?: string[];
  public get serviceEndpoints() {
    return this._serviceEndpoints;
  }
  public set serviceEndpoints(value: string[] | undefined) {
    this._serviceEndpoints = value;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName: string;
  public get virtualNetworkName() {
    return this._virtualNetworkName;
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation?: SubnetDelegation[];
  public get delegation() {
    return this._delegation;
  }
  public set delegation(value: SubnetDelegation[] | undefined) {
    this._delegation = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SubnetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SubnetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address_prefix: this._addressPrefix,
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
