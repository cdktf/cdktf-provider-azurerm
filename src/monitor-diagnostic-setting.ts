// https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorDiagnosticSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}
  */
  readonly eventhubAuthorizationRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#eventhub_name MonitorDiagnosticSetting#eventhub_name}
  */
  readonly eventhubName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}
  */
  readonly logAnalyticsDestinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#name MonitorDiagnosticSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#storage_account_id MonitorDiagnosticSetting#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#target_resource_id MonitorDiagnosticSetting#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * log block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#log MonitorDiagnosticSetting#log}
  */
  readonly log?: MonitorDiagnosticSettingLog[];
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#metric MonitorDiagnosticSetting#metric}
  */
  readonly metric?: MonitorDiagnosticSettingMetric[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#timeouts MonitorDiagnosticSetting#timeouts}
  */
  readonly timeouts?: MonitorDiagnosticSettingTimeouts;
}
export interface MonitorDiagnosticSettingLogRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#days MonitorDiagnosticSetting#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#enabled MonitorDiagnosticSetting#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function monitorDiagnosticSettingLogRetentionPolicyToTerraform(struct?: MonitorDiagnosticSettingLogRetentionPolicyOutputReference | MonitorDiagnosticSettingLogRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MonitorDiagnosticSettingLogRetentionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // days - computed: false, optional: true, required: false
  private _days?: number | undefined; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number | undefined) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface MonitorDiagnosticSettingLog {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#category MonitorDiagnosticSetting#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#enabled MonitorDiagnosticSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#retention_policy MonitorDiagnosticSetting#retention_policy}
  */
  readonly retentionPolicy?: MonitorDiagnosticSettingLogRetentionPolicy;
}

function monitorDiagnosticSettingLogToTerraform(struct?: MonitorDiagnosticSettingLog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_policy: monitorDiagnosticSettingLogRetentionPolicyToTerraform(struct!.retentionPolicy),
  }
}

export interface MonitorDiagnosticSettingMetricRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#days MonitorDiagnosticSetting#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#enabled MonitorDiagnosticSetting#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function monitorDiagnosticSettingMetricRetentionPolicyToTerraform(struct?: MonitorDiagnosticSettingMetricRetentionPolicyOutputReference | MonitorDiagnosticSettingMetricRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class MonitorDiagnosticSettingMetricRetentionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // days - computed: false, optional: true, required: false
  private _days?: number | undefined; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number | undefined) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface MonitorDiagnosticSettingMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#category MonitorDiagnosticSetting#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#enabled MonitorDiagnosticSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#retention_policy MonitorDiagnosticSetting#retention_policy}
  */
  readonly retentionPolicy?: MonitorDiagnosticSettingMetricRetentionPolicy;
}

function monitorDiagnosticSettingMetricToTerraform(struct?: MonitorDiagnosticSettingMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_policy: monitorDiagnosticSettingMetricRetentionPolicyToTerraform(struct!.retentionPolicy),
  }
}

export interface MonitorDiagnosticSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#create MonitorDiagnosticSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#delete MonitorDiagnosticSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#read MonitorDiagnosticSetting#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html#update MonitorDiagnosticSetting#update}
  */
  readonly update?: string;
}

function monitorDiagnosticSettingTimeoutsToTerraform(struct?: MonitorDiagnosticSettingTimeoutsOutputReference | MonitorDiagnosticSettingTimeouts): any {
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

export class MonitorDiagnosticSettingTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html azurerm_monitor_diagnostic_setting}
*/
export class MonitorDiagnosticSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_diagnostic_setting";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html azurerm_monitor_diagnostic_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorDiagnosticSettingConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorDiagnosticSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_diagnostic_setting',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubAuthorizationRuleId = config.eventhubAuthorizationRuleId;
    this._eventhubName = config.eventhubName;
    this._logAnalyticsDestinationType = config.logAnalyticsDestinationType;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._storageAccountId = config.storageAccountId;
    this._targetResourceId = config.targetResourceId;
    this._log = config.log;
    this._metric = config.metric;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_authorization_rule_id - computed: false, optional: true, required: false
  private _eventhubAuthorizationRuleId?: string | undefined; 
  public get eventhubAuthorizationRuleId() {
    return this.getStringAttribute('eventhub_authorization_rule_id');
  }
  public set eventhubAuthorizationRuleId(value: string | undefined) {
    this._eventhubAuthorizationRuleId = value;
  }
  public resetEventhubAuthorizationRuleId() {
    this._eventhubAuthorizationRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubAuthorizationRuleIdInput() {
    return this._eventhubAuthorizationRuleId
  }

  // eventhub_name - computed: false, optional: true, required: false
  private _eventhubName?: string | undefined; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string | undefined) {
    this._eventhubName = value;
  }
  public resetEventhubName() {
    this._eventhubName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_destination_type - computed: false, optional: true, required: false
  private _logAnalyticsDestinationType?: string | undefined; 
  public get logAnalyticsDestinationType() {
    return this.getStringAttribute('log_analytics_destination_type');
  }
  public set logAnalyticsDestinationType(value: string | undefined) {
    this._logAnalyticsDestinationType = value;
  }
  public resetLogAnalyticsDestinationType() {
    this._logAnalyticsDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsDestinationTypeInput() {
    return this._logAnalyticsDestinationType
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string | undefined; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string | undefined) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
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

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string | undefined; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string | undefined) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
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

  // log - computed: false, optional: true, required: false
  private _log?: MonitorDiagnosticSettingLog[] | undefined; 
  public get log() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('log') as any;
  }
  public set log(value: MonitorDiagnosticSettingLog[] | undefined) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: MonitorDiagnosticSettingMetric[] | undefined; 
  public get metric() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metric') as any;
  }
  public set metric(value: MonitorDiagnosticSettingMetric[] | undefined) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorDiagnosticSettingTimeouts | undefined; 
  private __timeoutsOutput = new MonitorDiagnosticSettingTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MonitorDiagnosticSettingTimeouts | undefined) {
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
      eventhub_authorization_rule_id: cdktf.stringToTerraform(this._eventhubAuthorizationRuleId),
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      log_analytics_destination_type: cdktf.stringToTerraform(this._logAnalyticsDestinationType),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      log: cdktf.listMapper(monitorDiagnosticSettingLogToTerraform)(this._log),
      metric: cdktf.listMapper(monitorDiagnosticSettingMetricToTerraform)(this._metric),
      timeouts: monitorDiagnosticSettingTimeoutsToTerraform(this._timeouts),
    };
  }
}
