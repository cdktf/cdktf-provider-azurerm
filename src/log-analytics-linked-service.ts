// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsLinkedServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#linked_service_name LogAnalyticsLinkedService#linked_service_name}
  */
  readonly linkedServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#read_access_id LogAnalyticsLinkedService#read_access_id}
  */
  readonly readAccessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#resource_group_name LogAnalyticsLinkedService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#resource_id LogAnalyticsLinkedService#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#tags LogAnalyticsLinkedService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#workspace_id LogAnalyticsLinkedService#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#workspace_name LogAnalyticsLinkedService#workspace_name}
  */
  readonly workspaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#write_access_id LogAnalyticsLinkedService#write_access_id}
  */
  readonly writeAccessId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#timeouts LogAnalyticsLinkedService#timeouts}
  */
  readonly timeouts?: LogAnalyticsLinkedServiceTimeouts;
}
export interface LogAnalyticsLinkedServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#create LogAnalyticsLinkedService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#delete LogAnalyticsLinkedService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#read LogAnalyticsLinkedService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html#update LogAnalyticsLinkedService#update}
  */
  readonly update?: string;
}

function logAnalyticsLinkedServiceTimeoutsToTerraform(struct?: LogAnalyticsLinkedServiceTimeoutsOutputReference | LogAnalyticsLinkedServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LogAnalyticsLinkedServiceTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html azurerm_log_analytics_linked_service}
*/
export class LogAnalyticsLinkedService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_log_analytics_linked_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html azurerm_log_analytics_linked_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsLinkedServiceConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsLinkedServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_linked_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._linkedServiceName = config.linkedServiceName;
    this._readAccessId = config.readAccessId;
    this._resourceGroupName = config.resourceGroupName;
    this._resourceId = config.resourceId;
    this._tags = config.tags;
    this._workspaceId = config.workspaceId;
    this._workspaceName = config.workspaceName;
    this._writeAccessId = config.writeAccessId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_service_name - computed: true, optional: true, required: false
  private _linkedServiceName?: string | undefined; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string | undefined) {
    this._linkedServiceName = value;
  }
  public resetLinkedServiceName() {
    this._linkedServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_access_id - computed: true, optional: true, required: false
  private _readAccessId?: string | undefined; 
  public get readAccessId() {
    return this.getStringAttribute('read_access_id');
  }
  public set readAccessId(value: string | undefined) {
    this._readAccessId = value;
  }
  public resetReadAccessId() {
    this._readAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAccessIdInput() {
    return this._readAccessId
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

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string | undefined; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string | undefined) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string | undefined; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string | undefined) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId
  }

  // workspace_name - computed: true, optional: true, required: false
  private _workspaceName?: string | undefined; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string | undefined) {
    this._workspaceName = value;
  }
  public resetWorkspaceName() {
    this._workspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName
  }

  // write_access_id - computed: false, optional: true, required: false
  private _writeAccessId?: string | undefined; 
  public get writeAccessId() {
    return this.getStringAttribute('write_access_id');
  }
  public set writeAccessId(value: string | undefined) {
    this._writeAccessId = value;
  }
  public resetWriteAccessId() {
    this._writeAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAccessIdInput() {
    return this._writeAccessId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsLinkedServiceTimeouts | undefined; 
  private __timeoutsOutput = new LogAnalyticsLinkedServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogAnalyticsLinkedServiceTimeouts | undefined) {
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
      linked_service_name: cdktf.stringToTerraform(this._linkedServiceName),
      read_access_id: cdktf.stringToTerraform(this._readAccessId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      workspace_name: cdktf.stringToTerraform(this._workspaceName),
      write_access_id: cdktf.stringToTerraform(this._writeAccessId),
      timeouts: logAnalyticsLinkedServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
