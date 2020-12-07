// https://www.terraform.io/docs/providers/azurerm/r/application_insights_web_test.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsWebTestConfig extends cdktf.TerraformMetaArguments {
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

function applicationInsightsWebTestTimeoutsToTerraform(struct?: ApplicationInsightsWebTestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApplicationInsightsWebTest extends cdktf.TerraformResource {

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
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration: string;
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: number;
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number ) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // geo_locations - computed: false, optional: false, required: true
  private _geoLocations: string[];
  public get geoLocations() {
    return this.getListAttribute('geo_locations');
  }
  public set geoLocations(value: string[]) {
    this._geoLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationsInput() {
    return this._geoLocations
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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

  // retry_enabled - computed: false, optional: true, required: false
  private _retryEnabled?: boolean;
  public get retryEnabled() {
    return this.getBooleanAttribute('retry_enabled');
  }
  public set retryEnabled(value: boolean ) {
    this._retryEnabled = value;
  }
  public resetRetryEnabled() {
    this._retryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryEnabledInput() {
    return this._retryEnabled
  }

  // synthetic_monitor_id - computed: true, optional: false, required: false
  public get syntheticMonitorId() {
    return this.getStringAttribute('synthetic_monitor_id');
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsWebTestTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApplicationInsightsWebTestTimeouts ) {
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
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      configuration: cdktf.stringToTerraform(this._configuration),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.numberToTerraform(this._frequency),
      geo_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._geoLocations),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      retry_enabled: cdktf.booleanToTerraform(this._retryEnabled),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      timeouts: applicationInsightsWebTestTimeoutsToTerraform(this._timeouts),
    };
  }
}
