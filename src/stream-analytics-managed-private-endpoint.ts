// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsManagedPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#name StreamAnalyticsManagedPrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}
  */
  readonly streamAnalyticsClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}
  */
  readonly subresourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#timeouts StreamAnalyticsManagedPrivateEndpoint#timeouts}
  */
  readonly timeouts?: StreamAnalyticsManagedPrivateEndpointTimeouts;
}
export interface StreamAnalyticsManagedPrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#create StreamAnalyticsManagedPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#delete StreamAnalyticsManagedPrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html#read StreamAnalyticsManagedPrivateEndpoint#read}
  */
  readonly read?: string;
}

function streamAnalyticsManagedPrivateEndpointTimeoutsToTerraform(struct?: StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference | StreamAnalyticsManagedPrivateEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html azurerm_stream_analytics_managed_private_endpoint}
*/
export class StreamAnalyticsManagedPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_stream_analytics_managed_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint.html azurerm_stream_analytics_managed_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsManagedPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsManagedPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_managed_private_endpoint',
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
    this._streamAnalyticsClusterName = config.streamAnalyticsClusterName;
    this._subresourceName = config.subresourceName;
    this._targetResourceId = config.targetResourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // stream_analytics_cluster_name - computed: false, optional: false, required: true
  private _streamAnalyticsClusterName?: string; 
  public get streamAnalyticsClusterName() {
    return this.getStringAttribute('stream_analytics_cluster_name');
  }
  public set streamAnalyticsClusterName(value: string) {
    this._streamAnalyticsClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsClusterNameInput() {
    return this._streamAnalyticsClusterName
  }

  // subresource_name - computed: false, optional: false, required: true
  private _subresourceName?: string; 
  public get subresourceName() {
    return this.getStringAttribute('subresource_name');
  }
  public set subresourceName(value: string) {
    this._subresourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subresourceNameInput() {
    return this._subresourceName
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsManagedPrivateEndpointTimeouts | undefined; 
  private __timeoutsOutput = new StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StreamAnalyticsManagedPrivateEndpointTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stream_analytics_cluster_name: cdktf.stringToTerraform(this._streamAnalyticsClusterName),
      subresource_name: cdktf.stringToTerraform(this._subresourceName),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      timeouts: streamAnalyticsManagedPrivateEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
