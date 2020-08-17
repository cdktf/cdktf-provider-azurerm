// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_private_link_service_endpoint_connections.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermPrivateLinkServiceEndpointConnectionsConfig extends TerraformMetaArguments {
  readonly resourceGroupName: string;
  readonly serviceId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts;
}
export class DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections extends ComplexComputedList {

  // action_required - computed: true, optional: false, required: true
  public get actionRequired() {
    return this.getStringAttribute('action_required');
  }

  // connection_id - computed: true, optional: false, required: true
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_name - computed: true, optional: false, required: true
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // private_endpoint_id - computed: true, optional: false, required: true
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // private_endpoint_name - computed: true, optional: false, required: true
  public get privateEndpointName() {
    return this.getStringAttribute('private_endpoint_name');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermPrivateLinkServiceEndpointConnections extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermPrivateLinkServiceEndpointConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_link_service_endpoint_connections',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceGroupName = config.resourceGroupName;
    this._serviceId = config.serviceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // private_endpoint_connections - computed: true, optional: false, required: true
  public privateEndpointConnections(index: string) {
    return new DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections(this, 'private_endpoint_connections', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId: string;
  public get serviceId() {
    return this._serviceId;
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_group_name: this._resourceGroupName,
      service_id: this._serviceId,
      timeouts: this._timeouts,
    };
  }
}
