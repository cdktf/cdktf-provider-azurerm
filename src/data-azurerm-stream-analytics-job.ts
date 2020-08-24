// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_stream_analytics_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermStreamAnalyticsJobConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermStreamAnalyticsJobTimeouts;
}
export interface DataAzurermStreamAnalyticsJobTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermStreamAnalyticsJob extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermStreamAnalyticsJobConfig) {
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatibility_level - computed: true, optional: false, required: true
  public get compatibilityLevel() {
    return this.getStringAttribute('compatibility_level');
  }

  // data_locale - computed: true, optional: false, required: true
  public get dataLocale() {
    return this.getStringAttribute('data_locale');
  }

  // events_late_arrival_max_delay_in_seconds - computed: true, optional: false, required: true
  public get eventsLateArrivalMaxDelayInSeconds() {
    return this.getNumberAttribute('events_late_arrival_max_delay_in_seconds');
  }

  // events_out_of_order_max_delay_in_seconds - computed: true, optional: false, required: true
  public get eventsOutOfOrderMaxDelayInSeconds() {
    return this.getNumberAttribute('events_out_of_order_max_delay_in_seconds');
  }

  // events_out_of_order_policy - computed: true, optional: false, required: true
  public get eventsOutOfOrderPolicy() {
    return this.getStringAttribute('events_out_of_order_policy');
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

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // output_error_policy - computed: true, optional: false, required: true
  public get outputErrorPolicy() {
    return this.getStringAttribute('output_error_policy');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // streaming_units - computed: true, optional: false, required: true
  public get streamingUnits() {
    return this.getNumberAttribute('streaming_units');
  }

  // transformation_query - computed: true, optional: false, required: true
  public get transformationQuery() {
    return this.getStringAttribute('transformation_query');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStreamAnalyticsJobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermStreamAnalyticsJobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
