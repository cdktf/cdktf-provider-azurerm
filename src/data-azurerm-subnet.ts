// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermSubnetConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly virtualNetworkName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSubnetTimeouts;
}
export interface DataAzurermSubnetTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermSubnet extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSubnetConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._virtualNetworkName = config.virtualNetworkName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefix - computed: true, optional: false, required: true
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }

  // enforce_private_link_endpoint_network_policies - computed: true, optional: false, required: true
  public get enforcePrivateLinkEndpointNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_endpoint_network_policies');
  }

  // enforce_private_link_service_network_policies - computed: true, optional: false, required: true
  public get enforcePrivateLinkServiceNetworkPolicies() {
    return this.getBooleanAttribute('enforce_private_link_service_network_policies');
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

  // network_security_group_id - computed: true, optional: false, required: true
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // route_table_id - computed: true, optional: false, required: true
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // service_endpoints - computed: true, optional: false, required: true
  public get serviceEndpoints() {
    return this.getListAttribute('service_endpoints');
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName: string;
  public get virtualNetworkName() {
    return this._virtualNetworkName;
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSubnetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermSubnetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      virtual_network_name: this._virtualNetworkName,
      timeouts: this._timeouts,
    };
  }
}
