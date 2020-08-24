// https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataFactoryTriggerScheduleConfig extends TerraformMetaArguments {
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

// Resource

export class DataFactoryTriggerSchedule extends TerraformResource {

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
    return this._annotations;
  }
  public set annotations(value: string[] | undefined) {
    this._annotations = value;
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this._dataFactoryName;
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this._endTime;
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string;
  public get frequency() {
    return this._frequency;
  }
  public set frequency(value: string | undefined) {
    this._frequency = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number;
  public get interval() {
    return this._interval;
  }
  public set interval(value: number | undefined) {
    this._interval = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName: string;
  public get pipelineName() {
    return this._pipelineName;
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }

  // pipeline_parameters - computed: false, optional: true, required: false
  private _pipelineParameters?: { [key: string]: string };
  public get pipelineParameters() {
    return this._pipelineParameters;
  }
  public set pipelineParameters(value: { [key: string]: string } | undefined) {
    this._pipelineParameters = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this._startTime ?? this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryTriggerScheduleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataFactoryTriggerScheduleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: this._annotations,
      data_factory_name: this._dataFactoryName,
      end_time: this._endTime,
      frequency: this._frequency,
      interval: this._interval,
      name: this._name,
      pipeline_name: this._pipelineName,
      pipeline_parameters: this._pipelineParameters,
      resource_group_name: this._resourceGroupName,
      start_time: this._startTime,
      timeouts: this._timeouts,
    };
  }
}
