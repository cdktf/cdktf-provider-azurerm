// https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorScheduledQueryRulesAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}
  */
  readonly authorizedResourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}
  */
  readonly autoMitigationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#description MonitorScheduledQueryRulesAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#enabled MonitorScheduledQueryRulesAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#frequency MonitorScheduledQueryRulesAlert#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#location MonitorScheduledQueryRulesAlert#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#name MonitorScheduledQueryRulesAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#query MonitorScheduledQueryRulesAlert#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#query_type MonitorScheduledQueryRulesAlert#query_type}
  */
  readonly queryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#severity MonitorScheduledQueryRulesAlert#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#tags MonitorScheduledQueryRulesAlert#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#throttling MonitorScheduledQueryRulesAlert#throttling}
  */
  readonly throttling?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#time_window MonitorScheduledQueryRulesAlert#time_window}
  */
  readonly timeWindow: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#action MonitorScheduledQueryRulesAlert#action}
  */
  readonly action: MonitorScheduledQueryRulesAlertAction[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#timeouts MonitorScheduledQueryRulesAlert#timeouts}
  */
  readonly timeouts?: MonitorScheduledQueryRulesAlertTimeouts;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#trigger MonitorScheduledQueryRulesAlert#trigger}
  */
  readonly trigger: MonitorScheduledQueryRulesAlertTrigger[];
}
export interface MonitorScheduledQueryRulesAlertAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#action_group MonitorScheduledQueryRulesAlert#action_group}
  */
  readonly actionGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#custom_webhook_payload MonitorScheduledQueryRulesAlert#custom_webhook_payload}
  */
  readonly customWebhookPayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#email_subject MonitorScheduledQueryRulesAlert#email_subject}
  */
  readonly emailSubject?: string;
}

function monitorScheduledQueryRulesAlertActionToTerraform(struct?: MonitorScheduledQueryRulesAlertAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_group: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actionGroup),
    custom_webhook_payload: cdktf.stringToTerraform(struct!.customWebhookPayload),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
  }
}

export interface MonitorScheduledQueryRulesAlertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#create MonitorScheduledQueryRulesAlert#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#delete MonitorScheduledQueryRulesAlert#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#read MonitorScheduledQueryRulesAlert#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#update MonitorScheduledQueryRulesAlert#update}
  */
  readonly update?: string;
}

function monitorScheduledQueryRulesAlertTimeoutsToTerraform(struct?: MonitorScheduledQueryRulesAlertTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface MonitorScheduledQueryRulesAlertTriggerMetricTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#metric_column MonitorScheduledQueryRulesAlert#metric_column}
  */
  readonly metricColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#metric_trigger_type MonitorScheduledQueryRulesAlert#metric_trigger_type}
  */
  readonly metricTriggerType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#operator MonitorScheduledQueryRulesAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#threshold MonitorScheduledQueryRulesAlert#threshold}
  */
  readonly threshold: number;
}

function monitorScheduledQueryRulesAlertTriggerMetricTriggerToTerraform(struct?: MonitorScheduledQueryRulesAlertTriggerMetricTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_column: cdktf.stringToTerraform(struct!.metricColumn),
    metric_trigger_type: cdktf.stringToTerraform(struct!.metricTriggerType),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}

export interface MonitorScheduledQueryRulesAlertTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#operator MonitorScheduledQueryRulesAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#threshold MonitorScheduledQueryRulesAlert#threshold}
  */
  readonly threshold: number;
  /**
  * metric_trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html#metric_trigger MonitorScheduledQueryRulesAlert#metric_trigger}
  */
  readonly metricTrigger?: MonitorScheduledQueryRulesAlertTriggerMetricTrigger[];
}

function monitorScheduledQueryRulesAlertTriggerToTerraform(struct?: MonitorScheduledQueryRulesAlertTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    metric_trigger: cdktf.listMapper(monitorScheduledQueryRulesAlertTriggerMetricTriggerToTerraform)(struct!.metricTrigger),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html azurerm_monitor_scheduled_query_rules_alert}
*/
export class MonitorScheduledQueryRulesAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_scheduled_query_rules_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_alert.html azurerm_monitor_scheduled_query_rules_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorScheduledQueryRulesAlertConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorScheduledQueryRulesAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_scheduled_query_rules_alert',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizedResourceIds = config.authorizedResourceIds;
    this._autoMitigationEnabled = config.autoMitigationEnabled;
    this._dataSourceId = config.dataSourceId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._location = config.location;
    this._name = config.name;
    this._query = config.query;
    this._queryType = config.queryType;
    this._resourceGroupName = config.resourceGroupName;
    this._severity = config.severity;
    this._tags = config.tags;
    this._throttling = config.throttling;
    this._timeWindow = config.timeWindow;
    this._action = config.action;
    this._timeouts = config.timeouts;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_resource_ids - computed: false, optional: true, required: false
  private _authorizedResourceIds?: string[];
  public get authorizedResourceIds() {
    return this.getListAttribute('authorized_resource_ids');
  }
  public set authorizedResourceIds(value: string[] ) {
    this._authorizedResourceIds = value;
  }
  public resetAuthorizedResourceIds() {
    this._authorizedResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedResourceIdsInput() {
    return this._authorizedResourceIds
  }

  // auto_mitigation_enabled - computed: false, optional: true, required: false
  private _autoMitigationEnabled?: boolean | cdktf.IResolvable;
  public get autoMitigationEnabled() {
    return this.getBooleanAttribute('auto_mitigation_enabled');
  }
  public set autoMitigationEnabled(value: boolean | cdktf.IResolvable ) {
    this._autoMitigationEnabled = value;
  }
  public resetAutoMitigationEnabled() {
    this._autoMitigationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMitigationEnabledInput() {
    return this._autoMitigationEnabled
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId: string;
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId
  }

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency: number;
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string;
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string ) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType
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

  // severity - computed: false, optional: true, required: false
  private _severity?: number;
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number ) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // throttling - computed: false, optional: true, required: false
  private _throttling?: number;
  public get throttling() {
    return this.getNumberAttribute('throttling');
  }
  public set throttling(value: number ) {
    this._throttling = value;
  }
  public resetThrottling() {
    this._throttling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingInput() {
    return this._throttling
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow: number;
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow
  }

  // action - computed: false, optional: false, required: true
  private _action: MonitorScheduledQueryRulesAlertAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: MonitorScheduledQueryRulesAlertAction[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorScheduledQueryRulesAlertTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorScheduledQueryRulesAlertTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger: MonitorScheduledQueryRulesAlertTrigger[];
  public get trigger() {
    return this.interpolationForAttribute('trigger') as any;
  }
  public set trigger(value: MonitorScheduledQueryRulesAlertTrigger[]) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizedResourceIds),
      auto_mitigation_enabled: cdktf.booleanToTerraform(this._autoMitigationEnabled),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.numberToTerraform(this._frequency),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      query_type: cdktf.stringToTerraform(this._queryType),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      severity: cdktf.numberToTerraform(this._severity),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      throttling: cdktf.numberToTerraform(this._throttling),
      time_window: cdktf.numberToTerraform(this._timeWindow),
      action: cdktf.listMapper(monitorScheduledQueryRulesAlertActionToTerraform)(this._action),
      timeouts: monitorScheduledQueryRulesAlertTimeoutsToTerraform(this._timeouts),
      trigger: cdktf.listMapper(monitorScheduledQueryRulesAlertTriggerToTerraform)(this._trigger),
    };
  }
}
