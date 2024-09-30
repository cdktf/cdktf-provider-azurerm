// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsFunctionJavascriptUdfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#id StreamAnalyticsFunctionJavascriptUdf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#name StreamAnalyticsFunctionJavascriptUdf#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#resource_group_name StreamAnalyticsFunctionJavascriptUdf#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#script StreamAnalyticsFunctionJavascriptUdf#script}
  */
  readonly script: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#stream_analytics_job_name StreamAnalyticsFunctionJavascriptUdf#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#input StreamAnalyticsFunctionJavascriptUdf#input}
  */
  readonly input: StreamAnalyticsFunctionJavascriptUdfInput[] | cdktf.IResolvable;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#output StreamAnalyticsFunctionJavascriptUdf#output}
  */
  readonly output: StreamAnalyticsFunctionJavascriptUdfOutput;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#timeouts StreamAnalyticsFunctionJavascriptUdf#timeouts}
  */
  readonly timeouts?: StreamAnalyticsFunctionJavascriptUdfTimeouts;
}
export interface StreamAnalyticsFunctionJavascriptUdfInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#configuration_parameter StreamAnalyticsFunctionJavascriptUdf#configuration_parameter}
  */
  readonly configurationParameter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}
  */
  readonly type: string;
}

export function streamAnalyticsFunctionJavascriptUdfInputToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_parameter: cdktf.booleanToTerraform(struct!.configurationParameter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function streamAnalyticsFunctionJavascriptUdfInputToHclTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.configurationParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamAnalyticsFunctionJavascriptUdfInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StreamAnalyticsFunctionJavascriptUdfInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationParameter = this._configurationParameter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsFunctionJavascriptUdfInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationParameter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationParameter = value.configurationParameter;
      this._type = value.type;
    }
  }

  // configuration_parameter - computed: false, optional: true, required: false
  private _configurationParameter?: boolean | cdktf.IResolvable; 
  public get configurationParameter() {
    return this.getBooleanAttribute('configuration_parameter');
  }
  public set configurationParameter(value: boolean | cdktf.IResolvable) {
    this._configurationParameter = value;
  }
  public resetConfigurationParameter() {
    this._configurationParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationParameterInput() {
    return this._configurationParameter;
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
    return this._type;
  }
}

export class StreamAnalyticsFunctionJavascriptUdfInputList extends cdktf.ComplexList {
  public internalValue? : StreamAnalyticsFunctionJavascriptUdfInput[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StreamAnalyticsFunctionJavascriptUdfInputOutputReference {
    return new StreamAnalyticsFunctionJavascriptUdfInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamAnalyticsFunctionJavascriptUdfOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#type StreamAnalyticsFunctionJavascriptUdf#type}
  */
  readonly type: string;
}

export function streamAnalyticsFunctionJavascriptUdfOutputToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfOutputOutputReference | StreamAnalyticsFunctionJavascriptUdfOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function streamAnalyticsFunctionJavascriptUdfOutputToHclTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfOutputOutputReference | StreamAnalyticsFunctionJavascriptUdfOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamAnalyticsFunctionJavascriptUdfOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamAnalyticsFunctionJavascriptUdfOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsFunctionJavascriptUdfOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
    return this._type;
  }
}
export interface StreamAnalyticsFunctionJavascriptUdfTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#create StreamAnalyticsFunctionJavascriptUdf#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#delete StreamAnalyticsFunctionJavascriptUdf#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#read StreamAnalyticsFunctionJavascriptUdf#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#update StreamAnalyticsFunctionJavascriptUdf#update}
  */
  readonly update?: string;
}

export function streamAnalyticsFunctionJavascriptUdfTimeoutsToTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function streamAnalyticsFunctionJavascriptUdfTimeoutsToHclTerraform(struct?: StreamAnalyticsFunctionJavascriptUdfTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamAnalyticsFunctionJavascriptUdfTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsFunctionJavascriptUdfTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf azurerm_stream_analytics_function_javascript_udf}
*/
export class StreamAnalyticsFunctionJavascriptUdf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_stream_analytics_function_javascript_udf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamAnalyticsFunctionJavascriptUdf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamAnalyticsFunctionJavascriptUdf to import
  * @param importFromId The id of the existing StreamAnalyticsFunctionJavascriptUdf that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamAnalyticsFunctionJavascriptUdf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_stream_analytics_function_javascript_udf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/stream_analytics_function_javascript_udf azurerm_stream_analytics_function_javascript_udf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsFunctionJavascriptUdfConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsFunctionJavascriptUdfConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_function_javascript_udf',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._script = config.script;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._input.internalValue = config.input;
    this._output.internalValue = config.output;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
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
    return this._resourceGroupName;
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
    return this._script;
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
    return this._streamAnalyticsJobName;
  }

  // input - computed: false, optional: false, required: true
  private _input = new StreamAnalyticsFunctionJavascriptUdfInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: StreamAnalyticsFunctionJavascriptUdfInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // output - computed: false, optional: false, required: true
  private _output = new StreamAnalyticsFunctionJavascriptUdfOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: StreamAnalyticsFunctionJavascriptUdfOutput) {
    this._output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamAnalyticsFunctionJavascriptUdfTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamAnalyticsFunctionJavascriptUdfTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      script: cdktf.stringToTerraform(this._script),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      input: cdktf.listMapper(streamAnalyticsFunctionJavascriptUdfInputToTerraform, true)(this._input.internalValue),
      output: streamAnalyticsFunctionJavascriptUdfOutputToTerraform(this._output.internalValue),
      timeouts: streamAnalyticsFunctionJavascriptUdfTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_analytics_job_name: {
        value: cdktf.stringToHclTerraform(this._streamAnalyticsJobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: cdktf.listMapperHcl(streamAnalyticsFunctionJavascriptUdfInputToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamAnalyticsFunctionJavascriptUdfInputList",
      },
      output: {
        value: streamAnalyticsFunctionJavascriptUdfOutputToHclTerraform(this._output.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamAnalyticsFunctionJavascriptUdfOutputList",
      },
      timeouts: {
        value: streamAnalyticsFunctionJavascriptUdfTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamAnalyticsFunctionJavascriptUdfTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
