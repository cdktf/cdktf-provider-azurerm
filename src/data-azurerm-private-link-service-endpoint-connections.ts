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

  // action_required - computed: true, optional: false, required: false
  public get actionRequired() {
    return this.getStringAttribute('action_required');
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // private_endpoint_name - computed: true, optional: false, required: false
  public get privateEndpointName() {
    return this.getStringAttribute('private_endpoint_name');
  }

  // status - computed: true, optional: false, required: false
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // private_endpoint_connections - computed: true, optional: false, required: false
  public privateEndpointConnections(index: string) {
    return new DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections(this, 'private_endpoint_connections', index);
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId: string;
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts ) {
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
      resource_group_name: this._resourceGroupName,
      service_id: this._serviceId,
      timeouts: this._timeouts,
    };
  }
}
