// https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermStreamAnalyticsJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job.html#name DataAzurermStreamAnalyticsJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job.html#resource_group_name DataAzurermStreamAnalyticsJob#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job.html#timeouts DataAzurermStreamAnalyticsJob#timeouts}
  */
  readonly timeouts?: DataAzurermStreamAnalyticsJobTimeouts;
}
export interface DataAzurermStreamAnalyticsJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job.html#read DataAzurermStreamAnalyticsJob#read}
  */
  readonly read?: string;
}

function dataAzurermStreamAnalyticsJobTimeoutsToTerraform(struct?: DataAzurermStreamAnalyticsJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job.html azurerm_stream_analytics_job}
*/
export class DataAzurermStreamAnalyticsJob extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/stream_analytics_job.html azurerm_stream_analytics_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermStreamAnalyticsJobConfig
  */
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

  // compatibility_level - computed: true, optional: false, required: false
  public get compatibilityLevel() {
    return this.getStringAttribute('compatibility_level');
  }

  // data_locale - computed: true, optional: false, required: false
  public get dataLocale() {
    return this.getStringAttribute('data_locale');
  }

  // events_late_arrival_max_delay_in_seconds - computed: true, optional: false, required: false
  public get eventsLateArrivalMaxDelayInSeconds() {
    return this.getNumberAttribute('events_late_arrival_max_delay_in_seconds');
  }

  // events_out_of_order_max_delay_in_seconds - computed: true, optional: false, required: false
  public get eventsOutOfOrderMaxDelayInSeconds() {
    return this.getNumberAttribute('events_out_of_order_max_delay_in_seconds');
  }

  // events_out_of_order_policy - computed: true, optional: false, required: false
  public get eventsOutOfOrderPolicy() {
    return this.getStringAttribute('events_out_of_order_policy');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // output_error_policy - computed: true, optional: false, required: false
  public get outputErrorPolicy() {
    return this.getStringAttribute('output_error_policy');
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

  // streaming_units - computed: true, optional: false, required: false
  public get streamingUnits() {
    return this.getNumberAttribute('streaming_units');
  }

  // transformation_query - computed: true, optional: false, required: false
  public get transformationQuery() {
    return this.getStringAttribute('transformation_query');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermStreamAnalyticsJobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermStreamAnalyticsJobTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermStreamAnalyticsJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
