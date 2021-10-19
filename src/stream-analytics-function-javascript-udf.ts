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
  readonly output: StreamAnalyticsFunctionJavascriptUdfOutput;
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function streamAnalyticsFunctionJavascriptUdfOutputToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfOutputOutputReference | StreamAnalyticsFunctionJavascriptUdfOutput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StreamAnalyticsFunctionJavascriptUdfOutputOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
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

function streamAnalyticsFunctionJavascriptUdfTimeoutsToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference | StreamAnalyticsFunctionJavascriptUdfTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_function_javascript_udf.html azurerm_stream_analytics_function_javascript_udf}
*/
export class StreamAnalyticsFunctionJavascriptUdf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_stream_analytics_function_javascript_udf";

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
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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
  private _script?: string; 
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
  private _streamAnalyticsJobName?: string; 
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
  private _input?: StreamAnalyticsFunctionJavascriptUdfInput[]; 
  public get input() {
    // Getting the computed value is not yet implemented
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
  private _output?: StreamAnalyticsFunctionJavascriptUdfOutput; 
  private __outputOutput = new StreamAnalyticsFunctionJavascriptUdfOutputOutputReference(this as any, "output", true);
  public get output() {
    return this.__outputOutput;
  }
  public putOutput(value: StreamAnalyticsFunctionJavascriptUdfOutput) {
    this._output = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsFunctionJavascriptUdfTimeouts | undefined; 
  private __timeoutsOutput = new StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StreamAnalyticsFunctionJavascriptUdfTimeouts | undefined) {
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
      output: streamAnalyticsFunctionJavascriptUdfOutputToTerraform(this._output),
      timeouts: streamAnalyticsFunctionJavascriptUdfTimeoutsToTerraform(this._timeouts),
    };
  }
}
