// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StreamAnalyticsJobConfig extends TerraformMetaArguments {
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

// Resource

export class StreamAnalyticsJob extends TerraformResource {

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
    return this._compatibilityLevel ?? this.getStringAttribute('compatibility_level');
  }
  public set compatibilityLevel(value: string | undefined) {
    this._compatibilityLevel = value;
  }

  // data_locale - computed: true, optional: true, required: false
  private _dataLocale?: string;
  public get dataLocale() {
    return this._dataLocale ?? this.getStringAttribute('data_locale');
  }
  public set dataLocale(value: string | undefined) {
    this._dataLocale = value;
  }

  // events_late_arrival_max_delay_in_seconds - computed: false, optional: true, required: false
  private _eventsLateArrivalMaxDelayInSeconds?: number;
  public get eventsLateArrivalMaxDelayInSeconds() {
    return this._eventsLateArrivalMaxDelayInSeconds;
  }
  public set eventsLateArrivalMaxDelayInSeconds(value: number | undefined) {
    this._eventsLateArrivalMaxDelayInSeconds = value;
  }

  // events_out_of_order_max_delay_in_seconds - computed: false, optional: true, required: false
  private _eventsOutOfOrderMaxDelayInSeconds?: number;
  public get eventsOutOfOrderMaxDelayInSeconds() {
    return this._eventsOutOfOrderMaxDelayInSeconds;
  }
  public set eventsOutOfOrderMaxDelayInSeconds(value: number | undefined) {
    this._eventsOutOfOrderMaxDelayInSeconds = value;
  }

  // events_out_of_order_policy - computed: false, optional: true, required: false
  private _eventsOutOfOrderPolicy?: string;
  public get eventsOutOfOrderPolicy() {
    return this._eventsOutOfOrderPolicy;
  }
  public set eventsOutOfOrderPolicy(value: string | undefined) {
    this._eventsOutOfOrderPolicy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // job_id - computed: true, optional: false, required: true
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // output_error_policy - computed: false, optional: true, required: false
  private _outputErrorPolicy?: string;
  public get outputErrorPolicy() {
    return this._outputErrorPolicy;
  }
  public set outputErrorPolicy(value: string | undefined) {
    this._outputErrorPolicy = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // streaming_units - computed: false, optional: false, required: true
  private _streamingUnits: number;
  public get streamingUnits() {
    return this._streamingUnits;
  }
  public set streamingUnits(value: number) {
    this._streamingUnits = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transformation_query - computed: false, optional: false, required: true
  private _transformationQuery: string;
  public get transformationQuery() {
    return this._transformationQuery;
  }
  public set transformationQuery(value: string) {
    this._transformationQuery = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsJobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamAnalyticsJobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compatibility_level: this._compatibilityLevel,
      data_locale: this._dataLocale,
      events_late_arrival_max_delay_in_seconds: this._eventsLateArrivalMaxDelayInSeconds,
      events_out_of_order_max_delay_in_seconds: this._eventsOutOfOrderMaxDelayInSeconds,
      events_out_of_order_policy: this._eventsOutOfOrderPolicy,
      location: this._location,
      name: this._name,
      output_error_policy: this._outputErrorPolicy,
      resource_group_name: this._resourceGroupName,
      streaming_units: this._streamingUnits,
      tags: this._tags,
      transformation_query: this._transformationQuery,
      timeouts: this._timeouts,
    };
  }
}
