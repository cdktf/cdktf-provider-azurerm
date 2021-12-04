// https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelAlertRuleScheduledConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}
  */
  readonly alertRuleTemplateGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#description SentinelAlertRuleScheduled#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#display_name SentinelAlertRuleScheduled#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#enabled SentinelAlertRuleScheduled#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#name SentinelAlertRuleScheduled#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#query SentinelAlertRuleScheduled#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#query_frequency SentinelAlertRuleScheduled#query_frequency}
  */
  readonly queryFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#query_period SentinelAlertRuleScheduled#query_period}
  */
  readonly queryPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#severity SentinelAlertRuleScheduled#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#suppression_duration SentinelAlertRuleScheduled#suppression_duration}
  */
  readonly suppressionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}
  */
  readonly suppressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#tactics SentinelAlertRuleScheduled#tactics}
  */
  readonly tactics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#trigger_operator SentinelAlertRuleScheduled#trigger_operator}
  */
  readonly triggerOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}
  */
  readonly triggerThreshold?: number;
  /**
  * event_grouping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#event_grouping SentinelAlertRuleScheduled#event_grouping}
  */
  readonly eventGrouping?: SentinelAlertRuleScheduledEventGrouping;
  /**
  * incident_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#incident_configuration SentinelAlertRuleScheduled#incident_configuration}
  */
  readonly incidentConfiguration?: SentinelAlertRuleScheduledIncidentConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#timeouts SentinelAlertRuleScheduled#timeouts}
  */
  readonly timeouts?: SentinelAlertRuleScheduledTimeouts;
}
export interface SentinelAlertRuleScheduledEventGrouping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#aggregation_method SentinelAlertRuleScheduled#aggregation_method}
  */
  readonly aggregationMethod: string;
}

export function sentinelAlertRuleScheduledEventGroupingToTerraform(struct?: SentinelAlertRuleScheduledEventGroupingOutputReference | SentinelAlertRuleScheduledEventGrouping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_method: cdktf.stringToTerraform(struct!.aggregationMethod),
  }
}

export class SentinelAlertRuleScheduledEventGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SentinelAlertRuleScheduledEventGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationMethod) {
      hasAnyValues = true;
      internalValueResult.aggregationMethod = this._aggregationMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledEventGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationMethod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationMethod = value.aggregationMethod;
    }
  }

  // aggregation_method - computed: false, optional: false, required: true
  private _aggregationMethod?: string; 
  public get aggregationMethod() {
    return this.getStringAttribute('aggregation_method');
  }
  public set aggregationMethod(value: string) {
    this._aggregationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationMethodInput() {
    return this._aggregationMethod;
  }
}
export interface SentinelAlertRuleScheduledIncidentConfigurationGrouping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#enabled SentinelAlertRuleScheduled#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#entity_matching_method SentinelAlertRuleScheduled#entity_matching_method}
  */
  readonly entityMatchingMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#group_by SentinelAlertRuleScheduled#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#lookback_duration SentinelAlertRuleScheduled#lookback_duration}
  */
  readonly lookbackDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#reopen_closed_incidents SentinelAlertRuleScheduled#reopen_closed_incidents}
  */
  readonly reopenClosedIncidents?: boolean | cdktf.IResolvable;
}

export function sentinelAlertRuleScheduledIncidentConfigurationGroupingToTerraform(struct?: SentinelAlertRuleScheduledIncidentConfigurationGroupingOutputReference | SentinelAlertRuleScheduledIncidentConfigurationGrouping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entity_matching_method: cdktf.stringToTerraform(struct!.entityMatchingMethod),
    group_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupBy),
    lookback_duration: cdktf.stringToTerraform(struct!.lookbackDuration),
    reopen_closed_incidents: cdktf.booleanToTerraform(struct!.reopenClosedIncidents),
  }
}

export class SentinelAlertRuleScheduledIncidentConfigurationGroupingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SentinelAlertRuleScheduledIncidentConfigurationGrouping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entityMatchingMethod) {
      hasAnyValues = true;
      internalValueResult.entityMatchingMethod = this._entityMatchingMethod;
    }
    if (this._groupBy) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._lookbackDuration) {
      hasAnyValues = true;
      internalValueResult.lookbackDuration = this._lookbackDuration;
    }
    if (this._reopenClosedIncidents) {
      hasAnyValues = true;
      internalValueResult.reopenClosedIncidents = this._reopenClosedIncidents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledIncidentConfigurationGrouping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._entityMatchingMethod = undefined;
      this._groupBy = undefined;
      this._lookbackDuration = undefined;
      this._reopenClosedIncidents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._entityMatchingMethod = value.entityMatchingMethod;
      this._groupBy = value.groupBy;
      this._lookbackDuration = value.lookbackDuration;
      this._reopenClosedIncidents = value.reopenClosedIncidents;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entity_matching_method - computed: false, optional: true, required: false
  private _entityMatchingMethod?: string; 
  public get entityMatchingMethod() {
    return this.getStringAttribute('entity_matching_method');
  }
  public set entityMatchingMethod(value: string) {
    this._entityMatchingMethod = value;
  }
  public resetEntityMatchingMethod() {
    this._entityMatchingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityMatchingMethodInput() {
    return this._entityMatchingMethod;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // lookback_duration - computed: false, optional: true, required: false
  private _lookbackDuration?: string; 
  public get lookbackDuration() {
    return this.getStringAttribute('lookback_duration');
  }
  public set lookbackDuration(value: string) {
    this._lookbackDuration = value;
  }
  public resetLookbackDuration() {
    this._lookbackDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackDurationInput() {
    return this._lookbackDuration;
  }

  // reopen_closed_incidents - computed: false, optional: true, required: false
  private _reopenClosedIncidents?: boolean | cdktf.IResolvable; 
  public get reopenClosedIncidents() {
    return this.getBooleanAttribute('reopen_closed_incidents') as any;
  }
  public set reopenClosedIncidents(value: boolean | cdktf.IResolvable) {
    this._reopenClosedIncidents = value;
  }
  public resetReopenClosedIncidents() {
    this._reopenClosedIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reopenClosedIncidentsInput() {
    return this._reopenClosedIncidents;
  }
}
export interface SentinelAlertRuleScheduledIncidentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#create_incident SentinelAlertRuleScheduled#create_incident}
  */
  readonly createIncident: boolean | cdktf.IResolvable;
  /**
  * grouping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#grouping SentinelAlertRuleScheduled#grouping}
  */
  readonly grouping: SentinelAlertRuleScheduledIncidentConfigurationGrouping;
}

export function sentinelAlertRuleScheduledIncidentConfigurationToTerraform(struct?: SentinelAlertRuleScheduledIncidentConfigurationOutputReference | SentinelAlertRuleScheduledIncidentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_incident: cdktf.booleanToTerraform(struct!.createIncident),
    grouping: sentinelAlertRuleScheduledIncidentConfigurationGroupingToTerraform(struct!.grouping),
  }
}

export class SentinelAlertRuleScheduledIncidentConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SentinelAlertRuleScheduledIncidentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createIncident) {
      hasAnyValues = true;
      internalValueResult.createIncident = this._createIncident;
    }
    if (this._grouping?.internalValue) {
      hasAnyValues = true;
      internalValueResult.grouping = this._grouping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledIncidentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createIncident = undefined;
      this._grouping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createIncident = value.createIncident;
      this._grouping.internalValue = value.grouping;
    }
  }

  // create_incident - computed: false, optional: false, required: true
  private _createIncident?: boolean | cdktf.IResolvable; 
  public get createIncident() {
    return this.getBooleanAttribute('create_incident') as any;
  }
  public set createIncident(value: boolean | cdktf.IResolvable) {
    this._createIncident = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createIncidentInput() {
    return this._createIncident;
  }

  // grouping - computed: false, optional: false, required: true
  private _grouping = new SentinelAlertRuleScheduledIncidentConfigurationGroupingOutputReference(this as any, "grouping", true);
  public get grouping() {
    return this._grouping;
  }
  public putGrouping(value: SentinelAlertRuleScheduledIncidentConfigurationGrouping) {
    this._grouping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingInput() {
    return this._grouping.internalValue;
  }
}
export interface SentinelAlertRuleScheduledTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#create SentinelAlertRuleScheduled#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#delete SentinelAlertRuleScheduled#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#read SentinelAlertRuleScheduled#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html#update SentinelAlertRuleScheduled#update}
  */
  readonly update?: string;
}

export function sentinelAlertRuleScheduledTimeoutsToTerraform(struct?: SentinelAlertRuleScheduledTimeoutsOutputReference | SentinelAlertRuleScheduledTimeouts): any {
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

export class SentinelAlertRuleScheduledTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SentinelAlertRuleScheduledTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAlertRuleScheduledTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html azurerm_sentinel_alert_rule_scheduled}
*/
export class SentinelAlertRuleScheduled extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sentinel_alert_rule_scheduled";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_scheduled.html azurerm_sentinel_alert_rule_scheduled} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAlertRuleScheduledConfig
  */
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
    this._alertRuleTemplateGuid = config.alertRuleTemplateGuid;
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
    this._eventGrouping.internalValue = config.eventGrouping;
    this._incidentConfiguration.internalValue = config.incidentConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_template_guid - computed: false, optional: true, required: false
  private _alertRuleTemplateGuid?: string; 
  public get alertRuleTemplateGuid() {
    return this.getStringAttribute('alert_rule_template_guid');
  }
  public set alertRuleTemplateGuid(value: string) {
    this._alertRuleTemplateGuid = value;
  }
  public resetAlertRuleTemplateGuid() {
    this._alertRuleTemplateGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateGuidInput() {
    return this._alertRuleTemplateGuid;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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
    return this._name;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_frequency - computed: false, optional: true, required: false
  private _queryFrequency?: string; 
  public get queryFrequency() {
    return this.getStringAttribute('query_frequency');
  }
  public set queryFrequency(value: string) {
    this._queryFrequency = value;
  }
  public resetQueryFrequency() {
    this._queryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrequencyInput() {
    return this._queryFrequency;
  }

  // query_period - computed: false, optional: true, required: false
  private _queryPeriod?: string; 
  public get queryPeriod() {
    return this.getStringAttribute('query_period');
  }
  public set queryPeriod(value: string) {
    this._queryPeriod = value;
  }
  public resetQueryPeriod() {
    this._queryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPeriodInput() {
    return this._queryPeriod;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // suppression_duration - computed: false, optional: true, required: false
  private _suppressionDuration?: string; 
  public get suppressionDuration() {
    return this.getStringAttribute('suppression_duration');
  }
  public set suppressionDuration(value: string) {
    this._suppressionDuration = value;
  }
  public resetSuppressionDuration() {
    this._suppressionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionDurationInput() {
    return this._suppressionDuration;
  }

  // suppression_enabled - computed: false, optional: true, required: false
  private _suppressionEnabled?: boolean | cdktf.IResolvable; 
  public get suppressionEnabled() {
    return this.getBooleanAttribute('suppression_enabled') as any;
  }
  public set suppressionEnabled(value: boolean | cdktf.IResolvable) {
    this._suppressionEnabled = value;
  }
  public resetSuppressionEnabled() {
    this._suppressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionEnabledInput() {
    return this._suppressionEnabled;
  }

  // tactics - computed: false, optional: true, required: false
  private _tactics?: string[]; 
  public get tactics() {
    return this.getListAttribute('tactics');
  }
  public set tactics(value: string[]) {
    this._tactics = value;
  }
  public resetTactics() {
    this._tactics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacticsInput() {
    return this._tactics;
  }

  // trigger_operator - computed: false, optional: true, required: false
  private _triggerOperator?: string; 
  public get triggerOperator() {
    return this.getStringAttribute('trigger_operator');
  }
  public set triggerOperator(value: string) {
    this._triggerOperator = value;
  }
  public resetTriggerOperator() {
    this._triggerOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerOperatorInput() {
    return this._triggerOperator;
  }

  // trigger_threshold - computed: false, optional: true, required: false
  private _triggerThreshold?: number; 
  public get triggerThreshold() {
    return this.getNumberAttribute('trigger_threshold');
  }
  public set triggerThreshold(value: number) {
    this._triggerThreshold = value;
  }
  public resetTriggerThreshold() {
    this._triggerThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerThresholdInput() {
    return this._triggerThreshold;
  }

  // event_grouping - computed: false, optional: true, required: false
  private _eventGrouping = new SentinelAlertRuleScheduledEventGroupingOutputReference(this as any, "event_grouping", true);
  public get eventGrouping() {
    return this._eventGrouping;
  }
  public putEventGrouping(value: SentinelAlertRuleScheduledEventGrouping) {
    this._eventGrouping.internalValue = value;
  }
  public resetEventGrouping() {
    this._eventGrouping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventGroupingInput() {
    return this._eventGrouping.internalValue;
  }

  // incident_configuration - computed: false, optional: true, required: false
  private _incidentConfiguration = new SentinelAlertRuleScheduledIncidentConfigurationOutputReference(this as any, "incident_configuration", true);
  public get incidentConfiguration() {
    return this._incidentConfiguration;
  }
  public putIncidentConfiguration(value: SentinelAlertRuleScheduledIncidentConfiguration) {
    this._incidentConfiguration.internalValue = value;
  }
  public resetIncidentConfiguration() {
    this._incidentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConfigurationInput() {
    return this._incidentConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelAlertRuleScheduledTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelAlertRuleScheduledTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_rule_template_guid: cdktf.stringToTerraform(this._alertRuleTemplateGuid),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      query_frequency: cdktf.stringToTerraform(this._queryFrequency),
      query_period: cdktf.stringToTerraform(this._queryPeriod),
      severity: cdktf.stringToTerraform(this._severity),
      suppression_duration: cdktf.stringToTerraform(this._suppressionDuration),
      suppression_enabled: cdktf.booleanToTerraform(this._suppressionEnabled),
      tactics: cdktf.listMapper(cdktf.stringToTerraform)(this._tactics),
      trigger_operator: cdktf.stringToTerraform(this._triggerOperator),
      trigger_threshold: cdktf.numberToTerraform(this._triggerThreshold),
      event_grouping: sentinelAlertRuleScheduledEventGroupingToTerraform(this._eventGrouping.internalValue),
      incident_configuration: sentinelAlertRuleScheduledIncidentConfigurationToTerraform(this._incidentConfiguration.internalValue),
      timeouts: sentinelAlertRuleScheduledTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
