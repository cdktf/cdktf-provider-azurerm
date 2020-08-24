// https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApplicationInsightsWebTestConfig extends TerraformMetaArguments {
  readonly applicationInsightsId: string;
  readonly configuration: string;
  readonly description?: string;
  readonly enabled?: boolean;
  readonly frequency?: number;
  readonly geoLocations: string[];
  readonly kind: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly retryEnabled?: boolean;
  readonly tags?: { [key: string]: string };
  readonly timeout?: number;
  /** timeouts block */
  readonly timeouts?: ApplicationInsightsWebTestTimeouts;
}
export interface ApplicationInsightsWebTestTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApplicationInsightsWebTest extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApplicationInsightsWebTestConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights_web_test',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationInsightsId = config.applicationInsightsId;
    this._configuration = config.configuration;
    this._description = config.description;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._geoLocations = config.geoLocations;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._retryEnabled = config.retryEnabled;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId: string;
  public get applicationInsightsId() {
    return this._applicationInsightsId;
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration: string;
  public get configuration() {
    return this._configuration;
  }
  public set configuration(value: string) {
    this._configuration = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number;
  public get frequency() {
    return this._frequency;
  }
  public set frequency(value: number | undefined) {
    this._frequency = value;
  }

  // geo_locations - computed: false, optional: false, required: true
  private _geoLocations: string[];
  public get geoLocations() {
    return this._geoLocations;
  }
  public set geoLocations(value: string[]) {
    this._geoLocations = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this._kind;
  }
  public set kind(value: string) {
    this._kind = value;
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

  // retry_enabled - computed: false, optional: true, required: false
  private _retryEnabled?: boolean;
  public get retryEnabled() {
    return this._retryEnabled;
  }
  public set retryEnabled(value: boolean | undefined) {
    this._retryEnabled = value;
  }

  // synthetic_monitor_id - computed: true, optional: false, required: true
  public get syntheticMonitorId() {
    return this.getStringAttribute('synthetic_monitor_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsWebTestTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApplicationInsightsWebTestTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_insights_id: this._applicationInsightsId,
      configuration: this._configuration,
      description: this._description,
      enabled: this._enabled,
      frequency: this._frequency,
      geo_locations: this._geoLocations,
      kind: this._kind,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      retry_enabled: this._retryEnabled,
      tags: this._tags,
      timeout: this._timeout,
      timeouts: this._timeouts,
    };
  }
}
