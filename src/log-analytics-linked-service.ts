// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsLinkedServiceConfig extends cdktf.TerraformMetaArguments {
  readonly linkedServiceName?: string;
  readonly readAccessId?: string;
  readonly resourceGroupName: string;
  readonly resourceId?: string;
  readonly tags?: { [key: string]: string };
  readonly workspaceId?: string;
  readonly workspaceName?: string;
  readonly writeAccessId?: string;
  /** timeouts block */
  readonly timeouts?: LogAnalyticsLinkedServiceTimeouts;
}
export interface LogAnalyticsLinkedServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function logAnalyticsLinkedServiceTimeoutsToTerraform(struct?: LogAnalyticsLinkedServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogAnalyticsLinkedService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _linkedServiceName?: string;
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
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
  private _readAccessId?: string;
  public get readAccessId() {
    return this.getStringAttribute('read_access_id');
  }
  public set readAccessId(value: string) {
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

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
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

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string;
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
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
  private _workspaceName?: string;
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
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
  private _writeAccessId?: string;
  public get writeAccessId() {
    return this.getStringAttribute('write_access_id');
  }
  public set writeAccessId(value: string ) {
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
  private _timeouts?: LogAnalyticsLinkedServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsLinkedServiceTimeouts ) {
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
