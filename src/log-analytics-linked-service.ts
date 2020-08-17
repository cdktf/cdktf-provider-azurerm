// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_linked_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogAnalyticsLinkedServiceConfig extends TerraformMetaArguments {
  readonly linkedServiceName?: string;
  readonly resourceGroupName: string;
  readonly resourceId: string;
  readonly tags?: { [key: string]: string };
  readonly workspaceName: string;
  /** timeouts block */
  readonly timeouts?: LogAnalyticsLinkedServiceTimeouts;
}
export interface LogAnalyticsLinkedServiceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogAnalyticsLinkedService extends TerraformResource {

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
    this._resourceGroupName = config.resourceGroupName;
    this._resourceId = config.resourceId;
    this._tags = config.tags;
    this._workspaceName = config.workspaceName;
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

  // linked_service_name - computed: false, optional: true, required: false
  private _linkedServiceName?: string;
  public get linkedServiceName() {
    return this._linkedServiceName;
  }
  public set linkedServiceName(value: string | undefined) {
    this._linkedServiceName = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName: string;
  public get workspaceName() {
    return this._workspaceName;
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsLinkedServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LogAnalyticsLinkedServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      linked_service_name: this._linkedServiceName,
      resource_group_name: this._resourceGroupName,
      resource_id: this._resourceId,
      tags: this._tags,
      workspace_name: this._workspaceName,
      timeouts: this._timeouts,
    };
  }
}
