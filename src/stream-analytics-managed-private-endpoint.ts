// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsManagedPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}
  */
  readonly streamAnalyticsClusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}
  */
  readonly subresourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#timeouts StreamAnalyticsManagedPrivateEndpoint#timeouts}
  */
  readonly timeouts?: StreamAnalyticsManagedPrivateEndpointTimeouts;
}
export interface StreamAnalyticsManagedPrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}
  */
  readonly read?: string;
}

export function streamAnalyticsManagedPrivateEndpointTimeoutsToTerraform(struct?: StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference | StreamAnalyticsManagedPrivateEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamAnalyticsManagedPrivateEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsManagedPrivateEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint azurerm_stream_analytics_managed_private_endpoint}
*/
export class StreamAnalyticsManagedPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_stream_analytics_managed_private_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_managed_private_endpoint azurerm_stream_analytics_managed_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsManagedPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsManagedPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_managed_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._streamAnalyticsClusterName = config.streamAnalyticsClusterName;
    this._subresourceName = config.subresourceName;
    this._targetResourceId = config.targetResourceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
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
    return this._resourceGroupName;
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
    return this._streamAnalyticsClusterName;
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
    return this._subresourceName;
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
    return this._targetResourceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamAnalyticsManagedPrivateEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stream_analytics_cluster_name: cdktf.stringToTerraform(this._streamAnalyticsClusterName),
      subresource_name: cdktf.stringToTerraform(this._subresourceName),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      timeouts: streamAnalyticsManagedPrivateEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
