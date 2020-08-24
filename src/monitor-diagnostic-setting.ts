// https://www.terraform.io/docs/providers/azurerm/r/monitor_diagnostic_setting.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorDiagnosticSettingConfig extends TerraformMetaArguments {
  readonly eventhubAuthorizationRuleId?: string;
  readonly eventhubName?: string;
  readonly logAnalyticsDestinationType?: string;
  readonly logAnalyticsWorkspaceId?: string;
  readonly name: string;
  readonly storageAccountId?: string;
  readonly targetResourceId: string;
  /** log block */
  readonly log?: MonitorDiagnosticSettingLog[];
  /** metric block */
  readonly metric?: MonitorDiagnosticSettingMetric[];
  /** timeouts block */
  readonly timeouts?: MonitorDiagnosticSettingTimeouts;
}
export interface MonitorDiagnosticSettingLogRetentionPolicy {
  readonly days?: number;
  readonly enabled: boolean;
}
export interface MonitorDiagnosticSettingLog {
  readonly category: string;
  readonly enabled?: boolean;
  /** retention_policy block */
  readonly retentionPolicy: MonitorDiagnosticSettingLogRetentionPolicy[];
}
export interface MonitorDiagnosticSettingMetricRetentionPolicy {
  readonly days?: number;
  readonly enabled: boolean;
}
export interface MonitorDiagnosticSettingMetric {
  readonly category: string;
  readonly enabled?: boolean;
  /** retention_policy block */
  readonly retentionPolicy: MonitorDiagnosticSettingMetricRetentionPolicy[];
}
export interface MonitorDiagnosticSettingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MonitorDiagnosticSetting extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _eventhubAuthorizationRuleId?: string;
  public get eventhubAuthorizationRuleId() {
    return this._eventhubAuthorizationRuleId;
  }
  public set eventhubAuthorizationRuleId(value: string | undefined) {
    this._eventhubAuthorizationRuleId = value;
  }

  // eventhub_name - computed: false, optional: true, required: false
  private _eventhubName?: string;
  public get eventhubName() {
    return this._eventhubName;
  }
  public set eventhubName(value: string | undefined) {
    this._eventhubName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // log_analytics_destination_type - computed: false, optional: true, required: false
  private _logAnalyticsDestinationType?: string;
  public get logAnalyticsDestinationType() {
    return this._logAnalyticsDestinationType;
  }
  public set logAnalyticsDestinationType(value: string | undefined) {
    this._logAnalyticsDestinationType = value;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string;
  public get logAnalyticsWorkspaceId() {
    return this._logAnalyticsWorkspaceId;
  }
  public set logAnalyticsWorkspaceId(value: string | undefined) {
    this._logAnalyticsWorkspaceId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this._storageAccountId;
  }
  public set storageAccountId(value: string | undefined) {
    this._storageAccountId = value;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
  public get targetResourceId() {
    return this._targetResourceId;
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }

  // log - computed: false, optional: true, required: false
  private _log?: MonitorDiagnosticSettingLog[];
  public get log() {
    return this._log;
  }
  public set log(value: MonitorDiagnosticSettingLog[] | undefined) {
    this._log = value;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: MonitorDiagnosticSettingMetric[];
  public get metric() {
    return this._metric;
  }
  public set metric(value: MonitorDiagnosticSettingMetric[] | undefined) {
    this._metric = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorDiagnosticSettingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitorDiagnosticSettingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eventhub_authorization_rule_id: this._eventhubAuthorizationRuleId,
      eventhub_name: this._eventhubName,
      log_analytics_destination_type: this._logAnalyticsDestinationType,
      log_analytics_workspace_id: this._logAnalyticsWorkspaceId,
      name: this._name,
      storage_account_id: this._storageAccountId,
      target_resource_id: this._targetResourceId,
      log: this._log,
      metric: this._metric,
      timeouts: this._timeouts,
    };
  }
}
