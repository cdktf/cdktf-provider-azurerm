// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_data_export_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogAnalyticsDataExportRuleConfig extends TerraformMetaArguments {
  readonly destinationResourceId: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tableNames: string[];
  readonly workspaceResourceId: string;
  /** timeouts block */
  readonly timeouts?: LogAnalyticsDataExportRuleTimeouts;
}
export interface LogAnalyticsDataExportRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogAnalyticsDataExportRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogAnalyticsDataExportRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_data_export_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationResourceId = config.destinationResourceId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tableNames = config.tableNames;
    this._workspaceResourceId = config.workspaceResourceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_resource_id - computed: false, optional: false, required: true
  private _destinationResourceId: string;
  public get destinationResourceId() {
    return this.getStringAttribute('destination_resource_id');
  }
  public set destinationResourceId(value: string) {
    this._destinationResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationResourceIdInput() {
    return this._destinationResourceId
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // export_rule_id - computed: true, optional: false, required: false
  public get exportRuleId() {
    return this.getStringAttribute('export_rule_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // table_names - computed: false, optional: false, required: true
  private _tableNames: string[];
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames
  }

  // workspace_resource_id - computed: false, optional: false, required: true
  private _workspaceResourceId: string;
  public get workspaceResourceId() {
    return this.getStringAttribute('workspace_resource_id');
  }
  public set workspaceResourceId(value: string) {
    this._workspaceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceResourceIdInput() {
    return this._workspaceResourceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsDataExportRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsDataExportRuleTimeouts ) {
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
      destination_resource_id: this._destinationResourceId,
      enabled: this._enabled,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      table_names: this._tableNames,
      workspace_resource_id: this._workspaceResourceId,
      timeouts: this._timeouts,
    };
  }
}
