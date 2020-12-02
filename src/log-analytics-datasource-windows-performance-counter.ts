// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogAnalyticsDatasourceWindowsPerformanceCounterConfig extends TerraformMetaArguments {
  readonly counterName: string;
  readonly instanceName: string;
  readonly intervalSeconds: number;
  readonly name: string;
  readonly objectName: string;
  readonly resourceGroupName: string;
  readonly workspaceName: string;
  /** timeouts block */
  readonly timeouts?: LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts;
}
export interface LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogAnalyticsDatasourceWindowsPerformanceCounter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogAnalyticsDatasourceWindowsPerformanceCounterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_datasource_windows_performance_counter',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._counterName = config.counterName;
    this._instanceName = config.instanceName;
    this._intervalSeconds = config.intervalSeconds;
    this._name = config.name;
    this._objectName = config.objectName;
    this._resourceGroupName = config.resourceGroupName;
    this._workspaceName = config.workspaceName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // counter_name - computed: false, optional: false, required: true
  private _counterName: string;
  public get counterName() {
    return this.getStringAttribute('counter_name');
  }
  public set counterName(value: string) {
    this._counterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get counterNameInput() {
    return this._counterName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName: string;
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName
  }

  // interval_seconds - computed: false, optional: false, required: true
  private _intervalSeconds: number;
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds
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

  // object_name - computed: false, optional: false, required: true
  private _objectName: string;
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName
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
  private _timeouts?: LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts ) {
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
      counter_name: this._counterName,
      instance_name: this._instanceName,
      interval_seconds: this._intervalSeconds,
      name: this._name,
      object_name: this._objectName,
      resource_group_name: this._resourceGroupName,
      workspace_name: this._workspaceName,
      timeouts: this._timeouts,
    };
  }
}
