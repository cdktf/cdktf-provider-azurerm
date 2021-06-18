// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#compatibility_level StreamAnalyticsJob#compatibility_level}
  */
  readonly compatibilityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#data_locale StreamAnalyticsJob#data_locale}
  */
  readonly dataLocale?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}
  */
  readonly eventsLateArrivalMaxDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}
  */
  readonly eventsOutOfOrderMaxDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}
  */
  readonly eventsOutOfOrderPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#location StreamAnalyticsJob#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#name StreamAnalyticsJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#output_error_policy StreamAnalyticsJob#output_error_policy}
  */
  readonly outputErrorPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#resource_group_name StreamAnalyticsJob#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#streaming_units StreamAnalyticsJob#streaming_units}
  */
  readonly streamingUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#tags StreamAnalyticsJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#transformation_query StreamAnalyticsJob#transformation_query}
  */
  readonly transformationQuery: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#identity StreamAnalyticsJob#identity}
  */
  readonly identity?: StreamAnalyticsJobIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#timeouts StreamAnalyticsJob#timeouts}
  */
  readonly timeouts?: StreamAnalyticsJobTimeouts;
}
export interface StreamAnalyticsJobIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#type StreamAnalyticsJob#type}
  */
  readonly type: string;
}

function streamAnalyticsJobIdentityToTerraform(struct?: StreamAnalyticsJobIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StreamAnalyticsJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#create StreamAnalyticsJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#delete StreamAnalyticsJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#read StreamAnalyticsJob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html#update StreamAnalyticsJob#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html azurerm_stream_analytics_job}
*/
export class StreamAnalyticsJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_job.html azurerm_stream_analytics_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsJobConfig
  */
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
    this._identity = config.identity;
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

  // identity - computed: false, optional: true, required: false
  private _identity?: StreamAnalyticsJobIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: StreamAnalyticsJobIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
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
      identity: cdktf.listMapper(streamAnalyticsJobIdentityToTerraform)(this._identity),
      timeouts: streamAnalyticsJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
