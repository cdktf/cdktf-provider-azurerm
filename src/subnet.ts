// https://www.terraform.io/docs/providers/azurerm/r/subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#address_prefix Subnet#address_prefix}
  */
  readonly addressPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#address_prefixes Subnet#address_prefixes}
  */
  readonly addressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#enforce_private_link_endpoint_network_policies Subnet#enforce_private_link_endpoint_network_policies}
  */
  readonly enforcePrivateLinkEndpointNetworkPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#enforce_private_link_service_network_policies Subnet#enforce_private_link_service_network_policies}
  */
  readonly enforcePrivateLinkServiceNetworkPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#name Subnet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#resource_group_name Subnet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}
  */
  readonly serviceEndpointPolicyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#service_endpoints Subnet#service_endpoints}
  */
  readonly serviceEndpoints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#virtual_network_name Subnet#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * delegation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#delegation Subnet#delegation}
  */
  readonly delegation?: SubnetDelegation[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#timeouts Subnet#timeouts}
  */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetDelegationServiceDelegation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#actions Subnet#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#name Subnet#name}
  */
  readonly name: string;
}

function subnetDelegationServiceDelegationToTerraform(struct?: SubnetDelegationServiceDelegation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface SubnetDelegation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#name Subnet#name}
  */
  readonly name: string;
  /**
  * service_delegation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#service_delegation Subnet#service_delegation}
  */
  readonly serviceDelegation: SubnetDelegationServiceDelegation[];
}

function subnetDelegationToTerraform(struct?: SubnetDelegation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_delegation: cdktf.listMapper(subnetDelegationServiceDelegationToTerraform)(struct!.serviceDelegation),
  }
}

export interface SubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#create Subnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#delete Subnet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#read Subnet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html#update Subnet#update}
  */
  readonly update?: string;
}

function subnetTimeoutsToTerraform(struct?: SubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html azurerm_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_subnet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/subnet.html azurerm_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
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
    this._serviceEndpointPolicyIds = config.serviceEndpointPolicyIds;
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
  private _enforcePrivateLinkEndpointNetworkPolicies?: boolean | cdktf.IResolvable;
  public get enforcePrivateLinkEndpointNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_endpoint_network_policies');
  }
  public set enforcePrivateLinkEndpointNetworkPolicies(value: boolean | cdktf.IResolvable ) {
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
  private _enforcePrivateLinkServiceNetworkPolicies?: boolean | cdktf.IResolvable;
  public get enforcePrivateLinkServiceNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_service_network_policies');
  }
  public set enforcePrivateLinkServiceNetworkPolicies(value: boolean | cdktf.IResolvable ) {
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

  // service_endpoint_policy_ids - computed: false, optional: true, required: false
  private _serviceEndpointPolicyIds?: string[];
  public get serviceEndpointPolicyIds() {
    return this.getListAttribute('service_endpoint_policy_ids');
  }
  public set serviceEndpointPolicyIds(value: string[] ) {
    this._serviceEndpointPolicyIds = value;
  }
  public resetServiceEndpointPolicyIds() {
    this._serviceEndpointPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointPolicyIdsInput() {
    return this._serviceEndpointPolicyIds
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
      address_prefix: cdktf.stringToTerraform(this._addressPrefix),
      address_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._addressPrefixes),
      enforce_private_link_endpoint_network_policies: cdktf.booleanToTerraform(this._enforcePrivateLinkEndpointNetworkPolicies),
      enforce_private_link_service_network_policies: cdktf.booleanToTerraform(this._enforcePrivateLinkServiceNetworkPolicies),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_endpoint_policy_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._serviceEndpointPolicyIds),
      service_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(this._serviceEndpoints),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      delegation: cdktf.listMapper(subnetDelegationToTerraform)(this._delegation),
      timeouts: subnetTimeoutsToTerraform(this._timeouts),
    };
  }
}
