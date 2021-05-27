// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsDatasourceWindowsEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#event_log_name LogAnalyticsDatasourceWindowsEvent#event_log_name}
  */
  readonly eventLogName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#event_types LogAnalyticsDatasourceWindowsEvent#event_types}
  */
  readonly eventTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#name LogAnalyticsDatasourceWindowsEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#resource_group_name LogAnalyticsDatasourceWindowsEvent#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#workspace_name LogAnalyticsDatasourceWindowsEvent#workspace_name}
  */
  readonly workspaceName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#timeouts LogAnalyticsDatasourceWindowsEvent#timeouts}
  */
  readonly timeouts?: LogAnalyticsDatasourceWindowsEventTimeouts;
}
export interface LogAnalyticsDatasourceWindowsEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#create LogAnalyticsDatasourceWindowsEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#delete LogAnalyticsDatasourceWindowsEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#read LogAnalyticsDatasourceWindowsEvent#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html#update LogAnalyticsDatasourceWindowsEvent#update}
  */
  readonly update?: string;
}

function logAnalyticsDatasourceWindowsEventTimeoutsToTerraform(struct?: LogAnalyticsDatasourceWindowsEventTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html azurerm_log_analytics_datasource_windows_event}
*/
export class LogAnalyticsDatasourceWindowsEvent extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_event.html azurerm_log_analytics_datasource_windows_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsDatasourceWindowsEventConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsDatasourceWindowsEventConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_datasource_windows_event',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventLogName = config.eventLogName;
    this._eventTypes = config.eventTypes;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._workspaceName = config.workspaceName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_log_name - computed: false, optional: false, required: true
  private _eventLogName: string;
  public get eventLogName() {
    return this.getStringAttribute('event_log_name');
  }
  public set eventLogName(value: string) {
    this._eventLogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogNameInput() {
    return this._eventLogName
  }

  // event_types - computed: false, optional: false, required: true
  private _eventTypes: string[];
  public get eventTypes() {
    return this.getListAttribute('event_types');
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes
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

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName: string;
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsDatasourceWindowsEventTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsDatasourceWindowsEventTimeouts ) {
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
      event_log_name: cdktf.stringToTerraform(this._eventLogName),
      event_types: cdktf.listMapper(cdktf.stringToTerraform)(this._eventTypes),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      workspace_name: cdktf.stringToTerraform(this._workspaceName),
      timeouts: logAnalyticsDatasourceWindowsEventTimeoutsToTerraform(this._timeouts),
    };
  }
}
