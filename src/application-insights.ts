// https://www.terraform.io/docs/providers/azurerm/r/application_insights.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApplicationInsightsConfig extends TerraformMetaArguments {
  readonly applicationType: string;
  readonly dailyDataCapInGb?: number;
  readonly dailyDataCapNotificationsDisabled?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly retentionInDays?: number;
  readonly samplingPercentage?: number;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: ApplicationInsightsTimeouts;
}
export interface ApplicationInsightsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApplicationInsights extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApplicationInsightsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationType = config.applicationType;
    this._dailyDataCapInGb = config.dailyDataCapInGb;
    this._dailyDataCapNotificationsDisabled = config.dailyDataCapNotificationsDisabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._retentionInDays = config.retentionInDays;
    this._samplingPercentage = config.samplingPercentage;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: true
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // application_type - computed: false, optional: false, required: true
  private _applicationType: string;
  public get applicationType() {
    return this._applicationType;
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }

  // daily_data_cap_in_gb - computed: true, optional: true, required: false
  private _dailyDataCapInGb?: number;
  public get dailyDataCapInGb() {
    return this._dailyDataCapInGb ?? this.getNumberAttribute('daily_data_cap_in_gb');
  }
  public set dailyDataCapInGb(value: number | undefined) {
    this._dailyDataCapInGb = value;
  }

  // daily_data_cap_notifications_disabled - computed: true, optional: true, required: false
  private _dailyDataCapNotificationsDisabled?: boolean;
  public get dailyDataCapNotificationsDisabled() {
    return this._dailyDataCapNotificationsDisabled ?? this.getBooleanAttribute('daily_data_cap_notifications_disabled');
  }
  public set dailyDataCapNotificationsDisabled(value: boolean | undefined) {
    this._dailyDataCapNotificationsDisabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instrumentation_key - computed: true, optional: false, required: true
  public get instrumentationKey() {
    return this.getStringAttribute('instrumentation_key');
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

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this._retentionInDays;
  }
  public set retentionInDays(value: number | undefined) {
    this._retentionInDays = value;
  }

  // sampling_percentage - computed: false, optional: true, required: false
  private _samplingPercentage?: number;
  public get samplingPercentage() {
    return this._samplingPercentage;
  }
  public set samplingPercentage(value: number | undefined) {
    this._samplingPercentage = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApplicationInsightsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_type: this._applicationType,
      daily_data_cap_in_gb: this._dailyDataCapInGb,
      daily_data_cap_notifications_disabled: this._dailyDataCapNotificationsDisabled,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      retention_in_days: this._retentionInDays,
      sampling_percentage: this._samplingPercentage,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
