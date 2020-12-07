// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsJobConfig extends cdktf.TerraformMetaArguments {
  readonly compatibilityLevel?: string;
  readonly dataLocale?: string;
  readonly eventsLateArrivalMaxDelayInSeconds?: number;
  readonly eventsOutOfOrderMaxDelayInSeconds?: number;
  readonly eventsOutOfOrderPolicy?: string;
  readonly location: string;
  readonly name: string;
  readonly outputErrorPolicy?: string;
  readonly resourceGroupName: string;
  readonly streamingUnits: number;
  readonly tags?: { [key: string]: string };
  readonly transformationQuery: string;
  /** timeouts block */
  readonly timeouts?: StreamAnalyticsJobTimeouts;
}
export interface StreamAnalyticsJobTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function streamAnalyticsJobTimeoutsToTerraform(struct?: StreamAnalyticsJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StreamAnalyticsJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamAnalyticsJobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_job',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compatibilityLevel = config.compatibilityLevel;
    this._dataLocale = config.dataLocale;
    this._eventsLateArrivalMaxDelayInSeconds = config.eventsLateArrivalMaxDelayInSeconds;
    this._eventsOutOfOrderMaxDelayInSeconds = config.eventsOutOfOrderMaxDelayInSeconds;
    this._eventsOutOfOrderPolicy = config.eventsOutOfOrderPolicy;
    this._location = config.location;
    this._name = config.name;
    this._outputErrorPolicy = config.outputErrorPolicy;
    this._resourceGroupName = config.resourceGroupName;
    this._streamingUnits = config.streamingUnits;
    this._tags = config.tags;
    this._transformationQuery = config.transformationQuery;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatibility_level - computed: true, optional: true, required: false
  private _compatibilityLevel?: string;
  public get compatibilityLevel() {
    return this.getStringAttribute('compatibility_level');
  }
  public set compatibilityLevel(value: string) {
    this._compatibilityLevel = value;
  }
  public resetCompatibilityLevel() {
    this._compatibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityLevelInput() {
    return this._compatibilityLevel
  }

  // data_locale - computed: true, optional: true, required: false
  private _dataLocale?: string;
  public get dataLocale() {
    return this.getStringAttribute('data_locale');
  }
  public set dataLocale(value: string) {
    this._dataLocale = value;
  }
  public resetDataLocale() {
    this._dataLocale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocaleInput() {
    return this._dataLocale
  }

  // events_late_arrival_max_delay_in_seconds - computed: false, optional: true, required: false
  private _eventsLateArrivalMaxDelayInSeconds?: number;
  public get eventsLateArrivalMaxDelayInSeconds() {
    return this.getNumberAttribute('events_late_arrival_max_delay_in_seconds');
  }
  public set eventsLateArrivalMaxDelayInSeconds(value: number ) {
    this._eventsLateArrivalMaxDelayInSeconds = value;
  }
  public resetEventsLateArrivalMaxDelayInSeconds() {
    this._eventsLateArrivalMaxDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsLateArrivalMaxDelayInSecondsInput() {
    return this._eventsLateArrivalMaxDelayInSeconds
  }

  // events_out_of_order_max_delay_in_seconds - computed: false, optional: true, required: false
  private _eventsOutOfOrderMaxDelayInSeconds?: number;
  public get eventsOutOfOrderMaxDelayInSeconds() {
    return this.getNumberAttribute('events_out_of_order_max_delay_in_seconds');
  }
  public set eventsOutOfOrderMaxDelayInSeconds(value: number ) {
    this._eventsOutOfOrderMaxDelayInSeconds = value;
  }
  public resetEventsOutOfOrderMaxDelayInSeconds() {
    this._eventsOutOfOrderMaxDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsOutOfOrderMaxDelayInSecondsInput() {
    return this._eventsOutOfOrderMaxDelayInSeconds
  }

  // events_out_of_order_policy - computed: false, optional: true, required: false
  private _eventsOutOfOrderPolicy?: string;
  public get eventsOutOfOrderPolicy() {
    return this.getStringAttribute('events_out_of_order_policy');
  }
  public set eventsOutOfOrderPolicy(value: string ) {
    this._eventsOutOfOrderPolicy = value;
  }
  public resetEventsOutOfOrderPolicy() {
    this._eventsOutOfOrderPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsOutOfOrderPolicyInput() {
    return this._eventsOutOfOrderPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // output_error_policy - computed: false, optional: true, required: false
  private _outputErrorPolicy?: string;
  public get outputErrorPolicy() {
    return this.getStringAttribute('output_error_policy');
  }
  public set outputErrorPolicy(value: string ) {
    this._outputErrorPolicy = value;
  }
  public resetOutputErrorPolicy() {
    this._outputErrorPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputErrorPolicyInput() {
    return this._outputErrorPolicy
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

  // streaming_units - computed: false, optional: false, required: true
  private _streamingUnits: number;
  public get streamingUnits() {
    return this.getNumberAttribute('streaming_units');
  }
  public set streamingUnits(value: number) {
    this._streamingUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingUnitsInput() {
    return this._streamingUnits
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

  // transformation_query - computed: false, optional: false, required: true
  private _transformationQuery: string;
  public get transformationQuery() {
    return this.getStringAttribute('transformation_query');
  }
  public set transformationQuery(value: string) {
    this._transformationQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationQueryInput() {
    return this._transformationQuery
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsJobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StreamAnalyticsJobTimeouts ) {
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
      compatibility_level: cdktf.stringToTerraform(this._compatibilityLevel),
      data_locale: cdktf.stringToTerraform(this._dataLocale),
      events_late_arrival_max_delay_in_seconds: cdktf.numberToTerraform(this._eventsLateArrivalMaxDelayInSeconds),
      events_out_of_order_max_delay_in_seconds: cdktf.numberToTerraform(this._eventsOutOfOrderMaxDelayInSeconds),
      events_out_of_order_policy: cdktf.stringToTerraform(this._eventsOutOfOrderPolicy),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      output_error_policy: cdktf.stringToTerraform(this._outputErrorPolicy),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      streaming_units: cdktf.numberToTerraform(this._streamingUnits),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transformation_query: cdktf.stringToTerraform(this._transformationQuery),
      timeouts: streamAnalyticsJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
