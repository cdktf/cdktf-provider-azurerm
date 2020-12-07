// https://www.terraform.io/docs/providers/azurerm/r/integration_service_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationServiceEnvironmentConfig extends cdktf.TerraformMetaArguments {
  readonly accessEndpointType: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly skuName?: string;
  readonly tags?: { [key: string]: string };
  readonly virtualNetworkSubnetIds: string[];
  /** timeouts block */
  readonly timeouts?: IntegrationServiceEnvironmentTimeouts;
}
export interface IntegrationServiceEnvironmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function integrationServiceEnvironmentTimeoutsToTerraform(struct?: IntegrationServiceEnvironmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class IntegrationServiceEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IntegrationServiceEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_integration_service_environment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessEndpointType = config.accessEndpointType;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._virtualNetworkSubnetIds = config.virtualNetworkSubnetIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint_type - computed: false, optional: false, required: true
  private _accessEndpointType: string;
  public get accessEndpointType() {
    return this.getStringAttribute('access_endpoint_type');
  }
  public set accessEndpointType(value: string) {
    this._accessEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointTypeInput() {
    return this._accessEndpointType
  }

  // connector_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get connectorEndpointIpAddresses() {
    return this.getListAttribute('connector_endpoint_ip_addresses');
  }

  // connector_outbound_ip_addresses - computed: true, optional: false, required: false
  public get connectorOutboundIpAddresses() {
    return this.getListAttribute('connector_outbound_ip_addresses');
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

  // sku_name - computed: false, optional: true, required: false
  private _skuName?: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string ) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
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

  // virtual_network_subnet_ids - computed: false, optional: false, required: true
  private _virtualNetworkSubnetIds: string[];
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds
  }

  // workflow_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get workflowEndpointIpAddresses() {
    return this.getListAttribute('workflow_endpoint_ip_addresses');
  }

  // workflow_outbound_ip_addresses - computed: true, optional: false, required: false
  public get workflowOutboundIpAddresses() {
    return this.getListAttribute('workflow_outbound_ip_addresses');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IntegrationServiceEnvironmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IntegrationServiceEnvironmentTimeouts ) {
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
      access_endpoint_type: cdktf.stringToTerraform(this._accessEndpointType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._virtualNetworkSubnetIds),
      timeouts: integrationServiceEnvironmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
