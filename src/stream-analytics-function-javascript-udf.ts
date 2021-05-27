// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsFunctionJavascriptUdfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#name StreamAnalyticsFunctionJavascriptUdf#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#script StreamAnalyticsFunctionJavascriptUdf#script}
  */
  readonly script: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * input block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#input StreamAnalyticsFunctionJavascriptUdf#input}
  */
  readonly input: StreamAnalyticsFunctionJavascriptUdfInput[];
  /**
  * output block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#output StreamAnalyticsFunctionJavascriptUdf#output}
  */
  readonly output: StreamAnalyticsFunctionJavascriptUdfOutput[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#timeouts StreamAnalyticsFunctionJavascriptUdf#timeouts}
  */
  readonly timeouts?: StreamAnalyticsFunctionJavascriptUdfTimeouts;
}
export interface StreamAnalyticsFunctionJavascriptUdfInput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#type StreamAnalyticsFunctionJavascriptUdf#type}
  */
  readonly type: string;
}

function streamAnalyticsFunctionJavascriptUdfInputToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StreamAnalyticsFunctionJavascriptUdfOutput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#type StreamAnalyticsFunctionJavascriptUdf#type}
  */
  readonly type: string;
}

function streamAnalyticsFunctionJavascriptUdfOutputToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StreamAnalyticsFunctionJavascriptUdfTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#create StreamAnalyticsFunctionJavascriptUdf#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#delete StreamAnalyticsFunctionJavascriptUdf#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#read StreamAnalyticsFunctionJavascriptUdf#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html#update StreamAnalyticsFunctionJavascriptUdf#update}
  */
  readonly update?: string;
}

function streamAnalyticsFunctionJavascriptUdfTimeoutsToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html azurerm_stream_analytics_function_javascript_udf}
*/
export class StreamAnalyticsFunctionJavascriptUdf extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html azurerm_stream_analytics_function_javascript_udf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsFunctionJavascriptUdfConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
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

  // script - computed: false, optional: false, required: true
  private _script: string;
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName
  }

  // input - computed: false, optional: false, required: true
  private _input: StreamAnalyticsFunctionJavascriptUdfInput[];
  public get input() {
    return this.interpolationForAttribute('input') as any;
  }
  public set input(value: StreamAnalyticsFunctionJavascriptUdfInput[]) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // output - computed: false, optional: false, required: true
  private _output: StreamAnalyticsFunctionJavascriptUdfOutput[];
  public get output() {
    return this.interpolationForAttribute('output') as any;
  }
  public set output(value: StreamAnalyticsFunctionJavascriptUdfOutput[]) {
    this._output = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsFunctionJavascriptUdfTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StreamAnalyticsFunctionJavascriptUdfTimeouts ) {
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
      script: cdktf.stringToTerraform(this._script),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      input: cdktf.listMapper(streamAnalyticsFunctionJavascriptUdfInputToTerraform)(this._input),
      output: cdktf.listMapper(streamAnalyticsFunctionJavascriptUdfOutputToTerraform)(this._output),
      timeouts: streamAnalyticsFunctionJavascriptUdfTimeoutsToTerraform(this._timeouts),
    };
  }
}
