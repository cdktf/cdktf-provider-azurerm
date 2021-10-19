// https://www.terraform.io/docs/providers/azurerm/d/private_link_service_endpoint_connections.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPrivateLinkServiceEndpointConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service_endpoint_connections.html#resource_group_name DataAzurermPrivateLinkServiceEndpointConnections#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service_endpoint_connections.html#service_id DataAzurermPrivateLinkServiceEndpointConnections#service_id}
  */
  readonly serviceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service_endpoint_connections.html#timeouts DataAzurermPrivateLinkServiceEndpointConnections#timeouts}
  */
  readonly timeouts?: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts;
}
export class DataAzurermPrivateLinkServiceEndpointConnectionsPrivateEndpointConnections extends cdktf.ComplexComputedList {

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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service_endpoint_connections.html#read DataAzurermPrivateLinkServiceEndpointConnections#read}
  */
  readonly read?: string;
}

function dataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsToTerraform(struct?: DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference | DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service_endpoint_connections.html azurerm_private_link_service_endpoint_connections}
*/
export class DataAzurermPrivateLinkServiceEndpointConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_private_link_service_endpoint_connections";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/private_link_service_endpoint_connections.html azurerm_private_link_service_endpoint_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPrivateLinkServiceEndpointConnectionsConfig
  */
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
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
  private _timeouts?: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermPrivateLinkServiceEndpointConnectionsTimeouts | undefined) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_id: cdktf.stringToTerraform(this._serviceId),
      timeouts: dataAzurermPrivateLinkServiceEndpointConnectionsTimeoutsToTerraform(this._timeouts),
    };
  }
}
