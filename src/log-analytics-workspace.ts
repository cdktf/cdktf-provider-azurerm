// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogAnalyticsWorkspaceConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly retentionInDays?: number;
  readonly sku: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: LogAnalyticsWorkspaceTimeouts;
}
export interface LogAnalyticsWorkspaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogAnalyticsWorkspace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogAnalyticsWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionInDays = config.retentionInDays;
    this._sku = config.sku;
    this._tags = config.tags;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // portal_url - computed: true, optional: false, required: true
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // primary_shared_key - computed: true, optional: false, required: true
  public get primarySharedKey() {
    return this.getStringAttribute('primary_shared_key');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this._retentionInDays ?? this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number | undefined) {
    this._retentionInDays = value;
  }

  // secondary_shared_key - computed: true, optional: false, required: true
  public get secondarySharedKey() {
    return this.getStringAttribute('secondary_shared_key');
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this._sku;
  }
  public set sku(value: string) {
    this._sku = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // workspace_id - computed: true, optional: false, required: true
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsWorkspaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LogAnalyticsWorkspaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      retention_in_days: this._retentionInDays,
      sku: this._sku,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
