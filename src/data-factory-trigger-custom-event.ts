// https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryTriggerCustomEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#activated DataFactoryTriggerCustomEvent#activated}
  */
  readonly activated?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#additional_properties DataFactoryTriggerCustomEvent#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#annotations DataFactoryTriggerCustomEvent#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#data_factory_id DataFactoryTriggerCustomEvent#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#description DataFactoryTriggerCustomEvent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#eventgrid_topic_id DataFactoryTriggerCustomEvent#eventgrid_topic_id}
  */
  readonly eventgridTopicId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#events DataFactoryTriggerCustomEvent#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#name DataFactoryTriggerCustomEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#subject_begins_with DataFactoryTriggerCustomEvent#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#subject_ends_with DataFactoryTriggerCustomEvent#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
  /**
  * pipeline block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#pipeline DataFactoryTriggerCustomEvent#pipeline}
  */
  readonly pipeline: DataFactoryTriggerCustomEventPipeline[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#timeouts DataFactoryTriggerCustomEvent#timeouts}
  */
  readonly timeouts?: DataFactoryTriggerCustomEventTimeouts;
}
export interface DataFactoryTriggerCustomEventPipeline {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#name DataFactoryTriggerCustomEvent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#parameters DataFactoryTriggerCustomEvent#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

function dataFactoryTriggerCustomEventPipelineToTerraform(struct?: DataFactoryTriggerCustomEventPipeline): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export interface DataFactoryTriggerCustomEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#create DataFactoryTriggerCustomEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#delete DataFactoryTriggerCustomEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#read DataFactoryTriggerCustomEvent#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html#update DataFactoryTriggerCustomEvent#update}
  */
  readonly update?: string;
}

function dataFactoryTriggerCustomEventTimeoutsToTerraform(struct?: DataFactoryTriggerCustomEventTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html azurerm_data_factory_trigger_custom_event}
*/
export class DataFactoryTriggerCustomEvent extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_trigger_custom_event.html azurerm_data_factory_trigger_custom_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryTriggerCustomEventConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryTriggerCustomEventConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_trigger_custom_event',
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
    this._description = config.description;
    this._eventgridTopicId = config.eventgridTopicId;
    this._events = config.events;
    this._name = config.name;
    this._subjectBeginsWith = config.subjectBeginsWith;
    this._subjectEndsWith = config.subjectEndsWith;
    this._pipeline = config.pipeline;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: false, optional: true, required: false
  private _activated?: boolean;
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean ) {
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
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } ) {
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

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId: string;
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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // eventgrid_topic_id - computed: false, optional: false, required: true
  private _eventgridTopicId: string;
  public get eventgridTopicId() {
    return this.getStringAttribute('eventgrid_topic_id');
  }
  public set eventgridTopicId(value: string) {
    this._eventgridTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicIdInput() {
    return this._eventgridTopicId
  }

  // events - computed: false, optional: false, required: true
  private _events: string[];
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events
  }

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

  // subject_begins_with - computed: false, optional: true, required: false
  private _subjectBeginsWith?: string;
  public get subjectBeginsWith() {
    return this.getStringAttribute('subject_begins_with');
  }
  public set subjectBeginsWith(value: string ) {
    this._subjectBeginsWith = value;
  }
  public resetSubjectBeginsWith() {
    this._subjectBeginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectBeginsWithInput() {
    return this._subjectBeginsWith
  }

  // subject_ends_with - computed: false, optional: true, required: false
  private _subjectEndsWith?: string;
  public get subjectEndsWith() {
    return this.getStringAttribute('subject_ends_with');
  }
  public set subjectEndsWith(value: string ) {
    this._subjectEndsWith = value;
  }
  public resetSubjectEndsWith() {
    this._subjectEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectEndsWithInput() {
    return this._subjectEndsWith
  }

  // pipeline - computed: false, optional: false, required: true
  private _pipeline: DataFactoryTriggerCustomEventPipeline[];
  public get pipeline() {
    return this.interpolationForAttribute('pipeline') as any;
  }
  public set pipeline(value: DataFactoryTriggerCustomEventPipeline[]) {
    this._pipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryTriggerCustomEventTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryTriggerCustomEventTimeouts ) {
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
      activated: cdktf.booleanToTerraform(this._activated),
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      eventgrid_topic_id: cdktf.stringToTerraform(this._eventgridTopicId),
      events: cdktf.listMapper(cdktf.stringToTerraform)(this._events),
      name: cdktf.stringToTerraform(this._name),
      subject_begins_with: cdktf.stringToTerraform(this._subjectBeginsWith),
      subject_ends_with: cdktf.stringToTerraform(this._subjectEndsWith),
      pipeline: cdktf.listMapper(dataFactoryTriggerCustomEventPipelineToTerraform)(this._pipeline),
      timeouts: dataFactoryTriggerCustomEventTimeoutsToTerraform(this._timeouts),
    };
  }
}
