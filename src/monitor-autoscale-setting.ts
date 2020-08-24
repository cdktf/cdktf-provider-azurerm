// https://www.terraform.io/docs/providers/azurerm/r/monitor_autoscale_setting.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorAutoscaleSettingConfig extends TerraformMetaArguments {
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
export interface MonitorAutoscaleSettingNotificationWebhook {
  readonly properties?: { [key: string]: string };
  readonly serviceUri: string;
}
export interface MonitorAutoscaleSettingNotification {
  /** email block */
  readonly email?: MonitorAutoscaleSettingNotificationEmail[];
  /** webhook block */
  readonly webhook?: MonitorAutoscaleSettingNotificationWebhook[];
}
export interface MonitorAutoscaleSettingProfileCapacity {
  readonly default: number;
  readonly maximum: number;
  readonly minimum: number;
}
export interface MonitorAutoscaleSettingProfileFixedDate {
  readonly end: string;
  readonly start: string;
  readonly timezone?: string;
}
export interface MonitorAutoscaleSettingProfileRecurrence {
  readonly days: string[];
  readonly hours: number[];
  readonly minutes: number[];
  readonly timezone?: string;
}
export interface MonitorAutoscaleSettingProfileRuleMetricTrigger {
  readonly metricName: string;
  readonly metricResourceId: string;
  readonly operator: string;
  readonly statistic: string;
  readonly threshold: number;
  readonly timeAggregation: string;
  readonly timeGrain: string;
  readonly timeWindow: string;
}
export interface MonitorAutoscaleSettingProfileRuleScaleAction {
  readonly cooldown: string;
  readonly direction: string;
  readonly type: string;
  readonly value: number;
}
export interface MonitorAutoscaleSettingProfileRule {
  /** metric_trigger block */
  readonly metricTrigger: MonitorAutoscaleSettingProfileRuleMetricTrigger[];
  /** scale_action block */
  readonly scaleAction: MonitorAutoscaleSettingProfileRuleScaleAction[];
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
export interface MonitorAutoscaleSettingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MonitorAutoscaleSetting extends TerraformResource {

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
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId: string;
  public get targetResourceId() {
    return this._targetResourceId;
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: MonitorAutoscaleSettingNotification[];
  public get notification() {
    return this._notification;
  }
  public set notification(value: MonitorAutoscaleSettingNotification[] | undefined) {
    this._notification = value;
  }

  // profile - computed: false, optional: false, required: true
  private _profile: MonitorAutoscaleSettingProfile[];
  public get profile() {
    return this._profile;
  }
  public set profile(value: MonitorAutoscaleSettingProfile[]) {
    this._profile = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorAutoscaleSettingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitorAutoscaleSettingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      target_resource_id: this._targetResourceId,
      notification: this._notification,
      profile: this._profile,
      timeouts: this._timeouts,
    };
  }
}
