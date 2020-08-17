// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StreamAnalyticsFunctionJavascriptUdfConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly script: string;
  readonly streamAnalyticsJobName: string;
  /** input block */
  readonly input: StreamAnalyticsFunctionJavascriptUdfInput[];
  /** output block */
  readonly output: StreamAnalyticsFunctionJavascriptUdfOutput[];
  /** timeouts block */
  readonly timeouts?: StreamAnalyticsFunctionJavascriptUdfTimeouts;
}
export interface StreamAnalyticsFunctionJavascriptUdfInput {
  readonly type: string;
}
export interface StreamAnalyticsFunctionJavascriptUdfOutput {
  readonly type: string;
}
export interface StreamAnalyticsFunctionJavascriptUdfTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class StreamAnalyticsFunctionJavascriptUdf extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StreamAnalyticsFunctionJavascriptUdfConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_function_javascript_udf',
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
    this._script = config.script;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._input = config.input;
    this._output = config.output;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // script - computed: false, optional: false, required: true
  private _script: string;
  public get script() {
    return this._script;
  }
  public set script(value: string) {
    this._script = value;
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this._streamAnalyticsJobName;
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }

  // input - computed: false, optional: false, required: true
  private _input: StreamAnalyticsFunctionJavascriptUdfInput[];
  public get input() {
    return this._input;
  }
  public set input(value: StreamAnalyticsFunctionJavascriptUdfInput[]) {
    this._input = value;
  }

  // output - computed: false, optional: false, required: true
  private _output: StreamAnalyticsFunctionJavascriptUdfOutput[];
  public get output() {
    return this._output;
  }
  public set output(value: StreamAnalyticsFunctionJavascriptUdfOutput[]) {
    this._output = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsFunctionJavascriptUdfTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StreamAnalyticsFunctionJavascriptUdfTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      script: this._script,
      stream_analytics_job_name: this._streamAnalyticsJobName,
      input: this._input,
      output: this._output,
      timeouts: this._timeouts,
    };
  }
}
