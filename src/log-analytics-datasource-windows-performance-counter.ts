// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsDatasourceWindowsPerformanceCounterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}
  */
  readonly counterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}
  */
  readonly intervalSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}
  */
  readonly objectName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}
  */
  readonly workspaceName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#timeouts LogAnalyticsDatasourceWindowsPerformanceCounter#timeouts}
  */
  readonly timeouts?: LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts;
}
export interface LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#create LogAnalyticsDatasourceWindowsPerformanceCounter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#delete LogAnalyticsDatasourceWindowsPerformanceCounter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#read LogAnalyticsDatasourceWindowsPerformanceCounter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html#update LogAnalyticsDatasourceWindowsPerformanceCounter#update}
  */
  readonly update?: string;
}

function logAnalyticsDatasourceWindowsPerformanceCounterTimeoutsToTerraform(struct?: LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference | LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts): any {
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

export class LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html azurerm_log_analytics_datasource_windows_performance_counter}
*/
export class LogAnalyticsDatasourceWindowsPerformanceCounter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_log_analytics_datasource_windows_performance_counter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_datasource_windows_performance_counter.html azurerm_log_analytics_datasource_windows_performance_counter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsDatasourceWindowsPerformanceCounterConfig
  */
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
  private _counterName?: string; 
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
  private _instanceName?: string; 
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
  private _intervalSeconds?: number; 
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

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
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

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName?: string; 
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
  private _timeouts?: LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts | undefined; 
  private __timeoutsOutput = new LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts | undefined) {
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
      counter_name: cdktf.stringToTerraform(this._counterName),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      interval_seconds: cdktf.numberToTerraform(this._intervalSeconds),
      name: cdktf.stringToTerraform(this._name),
      object_name: cdktf.stringToTerraform(this._objectName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      workspace_name: cdktf.stringToTerraform(this._workspaceName),
      timeouts: logAnalyticsDatasourceWindowsPerformanceCounterTimeoutsToTerraform(this._timeouts),
    };
  }
}
