// https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryTriggerScheduleConfig extends cdktf.TerraformMetaArguments {
  readonly annotations?: string[];
  readonly dataFactoryName: string;
  readonly endTime?: string;
  readonly frequency?: string;
  readonly interval?: number;
  readonly name: string;
  readonly pipelineName: string;
  readonly pipelineParameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly startTime?: string;
  /** timeouts block */
  readonly timeouts?: DataFactoryTriggerScheduleTimeouts;
}
export interface DataFactoryTriggerScheduleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function dataFactoryTriggerScheduleTimeoutsToTerraform(struct?: DataFactoryTriggerScheduleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataFactoryTriggerSchedule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryTriggerScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_trigger_schedule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._annotations = config.annotations;
    this._dataFactoryName = config.dataFactoryName;
    this._endTime = config.endTime;
    this._frequency = config.frequency;
    this._interval = config.interval;
    this._name = config.name;
    this._pipelineName = config.pipelineName;
    this._pipelineParameters = config.pipelineParameters;
    this._resourceGroupName = config.resourceGroupName;
    this._startTime = config.startTime;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[];
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] ) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string ) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string ) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number;
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number ) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
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

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName: string;
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName
  }

  // pipeline_parameters - computed: false, optional: true, required: false
  private _pipelineParameters?: { [key: string]: string };
  public get pipelineParameters() {
    return this.interpolationForAttribute('pipeline_parameters') as any;
  }
  public set pipelineParameters(value: { [key: string]: string } ) {
    this._pipelineParameters = value;
  }
  public resetPipelineParameters() {
    this._pipelineParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParametersInput() {
    return this._pipelineParameters
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryTriggerScheduleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryTriggerScheduleTimeouts ) {
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
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      end_time: cdktf.stringToTerraform(this._endTime),
      frequency: cdktf.stringToTerraform(this._frequency),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      pipeline_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._pipelineParameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      start_time: cdktf.stringToTerraform(this._startTime),
      timeouts: dataFactoryTriggerScheduleTimeoutsToTerraform(this._timeouts),
    };
  }
}
