// https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryTriggerTumblingWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#activated DataFactoryTriggerTumblingWindow#activated}
  */
  readonly activated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#additional_properties DataFactoryTriggerTumblingWindow#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#annotations DataFactoryTriggerTumblingWindow#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#data_factory_id DataFactoryTriggerTumblingWindow#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#delay DataFactoryTriggerTumblingWindow#delay}
  */
  readonly delay?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#description DataFactoryTriggerTumblingWindow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#end_time DataFactoryTriggerTumblingWindow#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#frequency DataFactoryTriggerTumblingWindow#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#interval DataFactoryTriggerTumblingWindow#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#max_concurrency DataFactoryTriggerTumblingWindow#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#name DataFactoryTriggerTumblingWindow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#start_time DataFactoryTriggerTumblingWindow#start_time}
  */
  readonly startTime: string;
  /**
  * pipeline block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#pipeline DataFactoryTriggerTumblingWindow#pipeline}
  */
  readonly pipeline: DataFactoryTriggerTumblingWindowPipeline;
  /**
  * retry block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#retry DataFactoryTriggerTumblingWindow#retry}
  */
  readonly retry?: DataFactoryTriggerTumblingWindowRetry;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#timeouts DataFactoryTriggerTumblingWindow#timeouts}
  */
  readonly timeouts?: DataFactoryTriggerTumblingWindowTimeouts;
  /**
  * trigger_dependency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#trigger_dependency DataFactoryTriggerTumblingWindow#trigger_dependency}
  */
  readonly triggerDependency?: DataFactoryTriggerTumblingWindowTriggerDependency[];
}
export interface DataFactoryTriggerTumblingWindowPipeline {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#name DataFactoryTriggerTumblingWindow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#parameters DataFactoryTriggerTumblingWindow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryTriggerTumblingWindowPipelineToTerraform(struct?: DataFactoryTriggerTumblingWindowPipelineOutputReference | DataFactoryTriggerTumblingWindowPipeline): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryTriggerTumblingWindowPipelineOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }
}
export interface DataFactoryTriggerTumblingWindowRetry {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#count DataFactoryTriggerTumblingWindow#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#interval DataFactoryTriggerTumblingWindow#interval}
  */
  readonly interval?: number;
}

function dataFactoryTriggerTumblingWindowRetryToTerraform(struct?: DataFactoryTriggerTumblingWindowRetryOutputReference | DataFactoryTriggerTumblingWindowRetry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DataFactoryTriggerTumblingWindowRetryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number | undefined; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number | undefined) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }
}
export interface DataFactoryTriggerTumblingWindowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#create DataFactoryTriggerTumblingWindow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#delete DataFactoryTriggerTumblingWindow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#read DataFactoryTriggerTumblingWindow#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#update DataFactoryTriggerTumblingWindow#update}
  */
  readonly update?: string;
}

function dataFactoryTriggerTumblingWindowTimeoutsToTerraform(struct?: DataFactoryTriggerTumblingWindowTimeoutsOutputReference | DataFactoryTriggerTumblingWindowTimeouts): any {
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

export class DataFactoryTriggerTumblingWindowTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryTriggerTumblingWindowTriggerDependency {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#offset DataFactoryTriggerTumblingWindow#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#size DataFactoryTriggerTumblingWindow#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html#trigger_name DataFactoryTriggerTumblingWindow#trigger_name}
  */
  readonly triggerName?: string;
}

function dataFactoryTriggerTumblingWindowTriggerDependencyToTerraform(struct?: DataFactoryTriggerTumblingWindowTriggerDependency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.stringToTerraform(struct!.offset),
    size: cdktf.stringToTerraform(struct!.size),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html azurerm_data_factory_trigger_tumbling_window}
*/
export class DataFactoryTriggerTumblingWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_trigger_tumbling_window";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_tumbling_window.html azurerm_data_factory_trigger_tumbling_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryTriggerTumblingWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryTriggerTumblingWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_trigger_tumbling_window',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activated = config.activated;
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._dataFactoryId = config.dataFactoryId;
    this._delay = config.delay;
    this._description = config.description;
    this._endTime = config.endTime;
    this._frequency = config.frequency;
    this._interval = config.interval;
    this._maxConcurrency = config.maxConcurrency;
    this._name = config.name;
    this._startTime = config.startTime;
    this._pipeline = config.pipeline;
    this._retry = config.retry;
    this._timeouts = config.timeouts;
    this._triggerDependency = config.triggerDependency;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: false, optional: true, required: false
  private _activated?: boolean | cdktf.IResolvable | undefined; 
  public get activated() {
    return this.getBooleanAttribute('activated') as any;
  }
  public set activated(value: boolean | cdktf.IResolvable | undefined) {
    this._activated = value;
  }
  public resetActivated() {
    this._activated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get additionalProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[] | undefined; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string | undefined; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string | undefined; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number | undefined; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number | undefined) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline?: DataFactoryTriggerTumblingWindowPipeline; 
  private __pipelineOutput = new DataFactoryTriggerTumblingWindowPipelineOutputReference(this as any, "pipeline", true);
  public get pipeline() {
    return this.__pipelineOutput;
  }
  public putPipeline(value: DataFactoryTriggerTumblingWindowPipeline) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: DataFactoryTriggerTumblingWindowRetry | undefined; 
  private __retryOutput = new DataFactoryTriggerTumblingWindowRetryOutputReference(this as any, "retry", true);
  public get retry() {
    return this.__retryOutput;
  }
  public putRetry(value: DataFactoryTriggerTumblingWindowRetry | undefined) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryTriggerTumblingWindowTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryTriggerTumblingWindowTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryTriggerTumblingWindowTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // trigger_dependency - computed: false, optional: true, required: false
  private _triggerDependency?: DataFactoryTriggerTumblingWindowTriggerDependency[] | undefined; 
  public get triggerDependency() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('trigger_dependency') as any;
  }
  public set triggerDependency(value: DataFactoryTriggerTumblingWindowTriggerDependency[] | undefined) {
    this._triggerDependency = value;
  }
  public resetTriggerDependency() {
    this._triggerDependency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDependencyInput() {
    return this._triggerDependency
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activated: cdktf.booleanToTerraform(this._activated),
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      delay: cdktf.stringToTerraform(this._delay),
      description: cdktf.stringToTerraform(this._description),
      end_time: cdktf.stringToTerraform(this._endTime),
      frequency: cdktf.stringToTerraform(this._frequency),
      interval: cdktf.numberToTerraform(this._interval),
      max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
      name: cdktf.stringToTerraform(this._name),
      start_time: cdktf.stringToTerraform(this._startTime),
      pipeline: dataFactoryTriggerTumblingWindowPipelineToTerraform(this._pipeline),
      retry: dataFactoryTriggerTumblingWindowRetryToTerraform(this._retry),
      timeouts: dataFactoryTriggerTumblingWindowTimeoutsToTerraform(this._timeouts),
      trigger_dependency: cdktf.listMapper(dataFactoryTriggerTumblingWindowTriggerDependencyToTerraform)(this._triggerDependency),
    };
  }
}
