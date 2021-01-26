// https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorAutoscaleSettingConfig extends cdktf.TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly targetResourceId: string;
  /** notification block */
  readonly notification?: MonitorAutoscaleSettingNotification[];
  /** profile block */
  readonly profile: MonitorAutoscaleSettingProfile[];
  /** timeouts block */
  readonly timeouts?: MonitorAutoscaleSettingTimeouts;
}
export interface MonitorAutoscaleSettingNotificationEmail {
  readonly customEmails?: string[];
  readonly sendToSubscriptionAdministrator?: boolean;
  readonly sendToSubscriptionCoAdministrator?: boolean;
}

function monitorAutoscaleSettingNotificationEmailToTerraform(struct?: MonitorAutoscaleSettingNotificationEmail): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.customEmails),
    send_to_subscription_administrator: cdktf.booleanToTerraform(struct!.sendToSubscriptionAdministrator),
    send_to_subscription_co_administrator: cdktf.booleanToTerraform(struct!.sendToSubscriptionCoAdministrator),
  }
}

export interface MonitorAutoscaleSettingNotificationWebhook {
  readonly properties?: { [key: string]: string };
  readonly serviceUri: string;
}

function monitorAutoscaleSettingNotificationWebhookToTerraform(struct?: MonitorAutoscaleSettingNotificationWebhook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
  }
}

export interface MonitorAutoscaleSettingNotification {
  /** email block */
  readonly email?: MonitorAutoscaleSettingNotificationEmail[];
  /** webhook block */
  readonly webhook?: MonitorAutoscaleSettingNotificationWebhook[];
}

function monitorAutoscaleSettingNotificationToTerraform(struct?: MonitorAutoscaleSettingNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.listMapper(monitorAutoscaleSettingNotificationEmailToTerraform)(struct!.email),
    webhook: cdktf.listMapper(monitorAutoscaleSettingNotificationWebhookToTerraform)(struct!.webhook),
  }
}

export interface MonitorAutoscaleSettingProfileCapacity {
  readonly default: number;
  readonly maximum: number;
  readonly minimum: number;
}

function monitorAutoscaleSettingProfileCapacityToTerraform(struct?: MonitorAutoscaleSettingProfileCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}

export interface MonitorAutoscaleSettingProfileFixedDate {
  readonly end: string;
  readonly start: string;
  readonly timezone?: string;
}

function monitorAutoscaleSettingProfileFixedDateToTerraform(struct?: MonitorAutoscaleSettingProfileFixedDate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}

export interface MonitorAutoscaleSettingProfileRecurrence {
  readonly days: string[];
  readonly hours: number[];
  readonly minutes: number[];
  readonly timezone?: string;
}

function monitorAutoscaleSettingProfileRecurrenceToTerraform(struct?: MonitorAutoscaleSettingProfileRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.days),
    hours: cdktf.listMapper(cdktf.numberToTerraform)(struct!.hours),
    minutes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.minutes),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}

export interface MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions {
  readonly name: string;
  readonly operator: string;
  readonly values: string[];
}

function monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorAutoscaleSettingProfileRuleMetricTrigger {
  readonly metricName: string;
  readonly metricNamespace?: string;
  readonly metricResourceId: string;
  readonly operator: string;
  readonly statistic: string;
  readonly threshold: number;
  readonly timeAggregation: string;
  readonly timeGrain: string;
  readonly timeWindow: string;
  /** dimensions block */
  readonly dimensions?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[];
}

function monitorAutoscaleSettingProfileRuleMetricTriggerToTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_resource_id: cdktf.stringToTerraform(struct!.metricResourceId),
    operator: cdktf.stringToTerraform(struct!.operator),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    time_aggregation: cdktf.stringToTerraform(struct!.timeAggregation),
    time_grain: cdktf.stringToTerraform(struct!.timeGrain),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
    dimensions: cdktf.listMapper(monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface MonitorAutoscaleSettingProfileRuleScaleAction {
  readonly cooldown: string;
  readonly direction: string;
  readonly type: string;
  readonly value: number;
}

function monitorAutoscaleSettingProfileRuleScaleActionToTerraform(struct?: MonitorAutoscaleSettingProfileRuleScaleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cooldown: cdktf.stringToTerraform(struct!.cooldown),
    direction: cdktf.stringToTerraform(struct!.direction),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface MonitorAutoscaleSettingProfileRule {
  /** metric_trigger block */
  readonly metricTrigger: MonitorAutoscaleSettingProfileRuleMetricTrigger[];
  /** scale_action block */
  readonly scaleAction: MonitorAutoscaleSettingProfileRuleScaleAction[];
}

function monitorAutoscaleSettingProfileRuleToTerraform(struct?: MonitorAutoscaleSettingProfileRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_trigger: cdktf.listMapper(monitorAutoscaleSettingProfileRuleMetricTriggerToTerraform)(struct!.metricTrigger),
    scale_action: cdktf.listMapper(monitorAutoscaleSettingProfileRuleScaleActionToTerraform)(struct!.scaleAction),
  }
}

export interface MonitorAutoscaleSettingProfile {
  readonly name: string;
  /** capacity block */
  readonly capacity: MonitorAutoscaleSettingProfileCapacity[];
  /** fixed_date block */
  readonly fixedDate?: MonitorAutoscaleSettingProfileFixedDate[];
  /** recurrence block */
  readonly recurrence?: MonitorAutoscaleSettingProfileRecurrence[];
  /** rule block */
  readonly rule?: MonitorAutoscaleSettingProfileRule[];
}

function monitorAutoscaleSettingProfileToTerraform(struct?: MonitorAutoscaleSettingProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    capacity: cdktf.listMapper(monitorAutoscaleSettingProfileCapacityToTerraform)(struct!.capacity),
    fixed_date: cdktf.listMapper(monitorAutoscaleSettingProfileFixedDateToTerraform)(struct!.fixedDate),
    recurrence: cdktf.listMapper(monitorAutoscaleSettingProfileRecurrenceToTerraform)(struct!.recurrence),
    rule: cdktf.listMapper(monitorAutoscaleSettingProfileRuleToTerraform)(struct!.rule),
  }
}

export interface MonitorAutoscaleSettingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function monitorAutoscaleSettingTimeoutsToTerraform(struct?: MonitorAutoscaleSettingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MonitorAutoscaleSetting extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorAutoscaleSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_autoscale_setting',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._targetResourceId = config.targetResourceId;
    this._notification = config.notification;
    this._profile = config.profile;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
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

  // notification - computed: false, optional: true, required: false
  private _notification?: MonitorAutoscaleSettingNotification[];
  public get notification() {
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: MonitorAutoscaleSettingNotification[] ) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification
  }

  // profile - computed: false, optional: false, required: true
  private _profile: MonitorAutoscaleSettingProfile[];
  public get profile() {
    return this.interpolationForAttribute('profile') as any;
  }
  public set profile(value: MonitorAutoscaleSettingProfile[]) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorAutoscaleSettingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorAutoscaleSettingTimeouts ) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      notification: cdktf.listMapper(monitorAutoscaleSettingNotificationToTerraform)(this._notification),
      profile: cdktf.listMapper(monitorAutoscaleSettingProfileToTerraform)(this._profile),
      timeouts: monitorAutoscaleSettingTimeoutsToTerraform(this._timeouts),
    };
  }
}
