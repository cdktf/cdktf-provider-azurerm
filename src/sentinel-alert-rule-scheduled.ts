// https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SentinelAlertRuleScheduledConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly displayName: string;
  readonly enabled?: boolean;
  readonly logAnalyticsWorkspaceId: string;
  readonly name: string;
  readonly query: string;
  readonly queryFrequency?: string;
  readonly queryPeriod?: string;
  readonly severity: string;
  readonly suppressionDuration?: string;
  readonly suppressionEnabled?: boolean;
  readonly tactics?: string[];
  readonly triggerOperator?: string;
  readonly triggerThreshold?: number;
  /** timeouts block */
  readonly timeouts?: SentinelAlertRuleScheduledTimeouts;
}
export interface SentinelAlertRuleScheduledTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SentinelAlertRuleScheduled extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SentinelAlertRuleScheduledConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_alert_rule_scheduled',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._query = config.query;
    this._queryFrequency = config.queryFrequency;
    this._queryPeriod = config.queryPeriod;
    this._severity = config.severity;
    this._suppressionDuration = config.suppressionDuration;
    this._suppressionEnabled = config.suppressionEnabled;
    this._tactics = config.tactics;
    this._triggerOperator = config.triggerOperator;
    this._triggerThreshold = config.triggerThreshold;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId: string;
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
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

  // query - computed: false, optional: false, required: true
  private _query: string;
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // query_frequency - computed: false, optional: true, required: false
  private _queryFrequency?: string;
  public get queryFrequency() {
    return this.getStringAttribute('query_frequency');
  }
  public set queryFrequency(value: string ) {
    this._queryFrequency = value;
  }
  public resetQueryFrequency() {
    this._queryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrequencyInput() {
    return this._queryFrequency
  }

  // query_period - computed: false, optional: true, required: false
  private _queryPeriod?: string;
  public get queryPeriod() {
    return this.getStringAttribute('query_period');
  }
  public set queryPeriod(value: string ) {
    this._queryPeriod = value;
  }
  public resetQueryPeriod() {
    this._queryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPeriodInput() {
    return this._queryPeriod
  }

  // severity - computed: false, optional: false, required: true
  private _severity: string;
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity
  }

  // suppression_duration - computed: false, optional: true, required: false
  private _suppressionDuration?: string;
  public get suppressionDuration() {
    return this.getStringAttribute('suppression_duration');
  }
  public set suppressionDuration(value: string ) {
    this._suppressionDuration = value;
  }
  public resetSuppressionDuration() {
    this._suppressionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionDurationInput() {
    return this._suppressionDuration
  }

  // suppression_enabled - computed: false, optional: true, required: false
  private _suppressionEnabled?: boolean;
  public get suppressionEnabled() {
    return this.getBooleanAttribute('suppression_enabled');
  }
  public set suppressionEnabled(value: boolean ) {
    this._suppressionEnabled = value;
  }
  public resetSuppressionEnabled() {
    this._suppressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionEnabledInput() {
    return this._suppressionEnabled
  }

  // tactics - computed: false, optional: true, required: false
  private _tactics?: string[];
  public get tactics() {
    return this.getListAttribute('tactics');
  }
  public set tactics(value: string[] ) {
    this._tactics = value;
  }
  public resetTactics() {
    this._tactics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticsInput() {
    return this._tactics
  }

  // trigger_operator - computed: false, optional: true, required: false
  private _triggerOperator?: string;
  public get triggerOperator() {
    return this.getStringAttribute('trigger_operator');
  }
  public set triggerOperator(value: string ) {
    this._triggerOperator = value;
  }
  public resetTriggerOperator() {
    this._triggerOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerOperatorInput() {
    return this._triggerOperator
  }

  // trigger_threshold - computed: false, optional: true, required: false
  private _triggerThreshold?: number;
  public get triggerThreshold() {
    return this.getNumberAttribute('trigger_threshold');
  }
  public set triggerThreshold(value: number ) {
    this._triggerThreshold = value;
  }
  public resetTriggerThreshold() {
    this._triggerThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerThresholdInput() {
    return this._triggerThreshold
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SentinelAlertRuleScheduledTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelAlertRuleScheduledTimeouts ) {
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
      description: this._description,
      display_name: this._displayName,
      enabled: this._enabled,
      log_analytics_workspace_id: this._logAnalyticsWorkspaceId,
      name: this._name,
      query: this._query,
      query_frequency: this._queryFrequency,
      query_period: this._queryPeriod,
      severity: this._severity,
      suppression_duration: this._suppressionDuration,
      suppression_enabled: this._suppressionEnabled,
      tactics: this._tactics,
      trigger_operator: this._triggerOperator,
      trigger_threshold: this._triggerThreshold,
      timeouts: this._timeouts,
    };
  }
}
