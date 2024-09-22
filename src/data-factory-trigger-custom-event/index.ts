// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryTriggerCustomEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#activated DataFactoryTriggerCustomEvent#activated}
  */
  readonly activated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#additional_properties DataFactoryTriggerCustomEvent#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#annotations DataFactoryTriggerCustomEvent#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#description DataFactoryTriggerCustomEvent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}
  */
  readonly eventgridTopicId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#events DataFactoryTriggerCustomEvent#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#id DataFactoryTriggerCustomEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#pipeline DataFactoryTriggerCustomEvent#pipeline}
  */
  readonly pipeline: DataFactoryTriggerCustomEventPipeline[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#timeouts DataFactoryTriggerCustomEvent#timeouts}
  */
  readonly timeouts?: DataFactoryTriggerCustomEventTimeouts;
}
export interface DataFactoryTriggerCustomEventPipeline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#name DataFactoryTriggerCustomEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#parameters DataFactoryTriggerCustomEvent#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

export function dataFactoryTriggerCustomEventPipelineToTerraform(struct?: DataFactoryTriggerCustomEventPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
  }
}


export function dataFactoryTriggerCustomEventPipelineToHclTerraform(struct?: DataFactoryTriggerCustomEventPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryTriggerCustomEventPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFactoryTriggerCustomEventPipeline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryTriggerCustomEventPipeline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}

export class DataFactoryTriggerCustomEventPipelineList extends cdktf.ComplexList {
  public internalValue? : DataFactoryTriggerCustomEventPipeline[] | cdktf.IResolvable

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
  public get(index: number): DataFactoryTriggerCustomEventPipelineOutputReference {
    return new DataFactoryTriggerCustomEventPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFactoryTriggerCustomEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#create DataFactoryTriggerCustomEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#delete DataFactoryTriggerCustomEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#read DataFactoryTriggerCustomEvent#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#update DataFactoryTriggerCustomEvent#update}
  */
  readonly update?: string;
}

export function dataFactoryTriggerCustomEventTimeoutsToTerraform(struct?: DataFactoryTriggerCustomEventTimeouts | cdktf.IResolvable): any {
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


export function dataFactoryTriggerCustomEventTimeoutsToHclTerraform(struct?: DataFactoryTriggerCustomEventTimeouts | cdktf.IResolvable): any {
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

export class DataFactoryTriggerCustomEventTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryTriggerCustomEventTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFactoryTriggerCustomEventTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event azurerm_data_factory_trigger_custom_event}
*/
export class DataFactoryTriggerCustomEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_trigger_custom_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFactoryTriggerCustomEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryTriggerCustomEvent to import
  * @param importFromId The id of the existing DataFactoryTriggerCustomEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryTriggerCustomEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_trigger_custom_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_factory_trigger_custom_event azurerm_data_factory_trigger_custom_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryTriggerCustomEventConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryTriggerCustomEventConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_trigger_custom_event',
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
    this._activated = config.activated;
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._eventgridTopicId = config.eventgridTopicId;
    this._events = config.events;
    this._id = config.id;
    this._name = config.name;
    this._subjectBeginsWith = config.subjectBeginsWith;
    this._subjectEndsWith = config.subjectEndsWith;
    this._pipeline.internalValue = config.pipeline;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: false, optional: true, required: false
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  public resetActivated() {
    this._activated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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
    return this._dataFactoryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // eventgrid_topic_id - computed: false, optional: false, required: true
  private _eventgridTopicId?: string; 
  public get eventgridTopicId() {
    return this.getStringAttribute('eventgrid_topic_id');
  }
  public set eventgridTopicId(value: string) {
    this._eventgridTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicIdInput() {
    return this._eventgridTopicId;
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

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

  // subject_begins_with - computed: false, optional: true, required: false
  private _subjectBeginsWith?: string; 
  public get subjectBeginsWith() {
    return this.getStringAttribute('subject_begins_with');
  }
  public set subjectBeginsWith(value: string) {
    this._subjectBeginsWith = value;
  }
  public resetSubjectBeginsWith() {
    this._subjectBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectBeginsWithInput() {
    return this._subjectBeginsWith;
  }

  // subject_ends_with - computed: false, optional: true, required: false
  private _subjectEndsWith?: string; 
  public get subjectEndsWith() {
    return this.getStringAttribute('subject_ends_with');
  }
  public set subjectEndsWith(value: string) {
    this._subjectEndsWith = value;
  }
  public resetSubjectEndsWith() {
    this._subjectEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectEndsWithInput() {
    return this._subjectEndsWith;
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline = new DataFactoryTriggerCustomEventPipelineList(this, "pipeline", true);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: DataFactoryTriggerCustomEventPipeline[] | cdktf.IResolvable) {
    this._pipeline.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryTriggerCustomEventTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryTriggerCustomEventTimeouts) {
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
      activated: cdktf.booleanToTerraform(this._activated),
      additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._annotations),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      eventgrid_topic_id: cdktf.stringToTerraform(this._eventgridTopicId),
      events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      subject_begins_with: cdktf.stringToTerraform(this._subjectBeginsWith),
      subject_ends_with: cdktf.stringToTerraform(this._subjectEndsWith),
      pipeline: cdktf.listMapper(dataFactoryTriggerCustomEventPipelineToTerraform, true)(this._pipeline.internalValue),
      timeouts: dataFactoryTriggerCustomEventTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activated: {
        value: cdktf.booleanToHclTerraform(this._activated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      annotations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._annotations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_factory_id: {
        value: cdktf.stringToHclTerraform(this._dataFactoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventgrid_topic_id: {
        value: cdktf.stringToHclTerraform(this._eventgridTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      subject_begins_with: {
        value: cdktf.stringToHclTerraform(this._subjectBeginsWith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_ends_with: {
        value: cdktf.stringToHclTerraform(this._subjectEndsWith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline: {
        value: cdktf.listMapperHcl(dataFactoryTriggerCustomEventPipelineToHclTerraform, true)(this._pipeline.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFactoryTriggerCustomEventPipelineList",
      },
      timeouts: {
        value: dataFactoryTriggerCustomEventTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryTriggerCustomEventTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
