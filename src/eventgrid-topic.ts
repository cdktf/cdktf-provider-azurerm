// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridTopicConfig extends cdktf.TerraformMetaArguments {
  readonly inputSchema?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** input_mapping_default_values block */
  readonly inputMappingDefaultValues?: EventgridTopicInputMappingDefaultValues[];
  /** input_mapping_fields block */
  readonly inputMappingFields?: EventgridTopicInputMappingFields[];
  /** timeouts block */
  readonly timeouts?: EventgridTopicTimeouts;
}
export interface EventgridTopicInputMappingDefaultValues {
  readonly dataVersion?: string;
  readonly eventType?: string;
  readonly subject?: string;
}

function eventgridTopicInputMappingDefaultValuesToTerraform(struct?: EventgridTopicInputMappingDefaultValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}

export interface EventgridTopicInputMappingFields {
  readonly dataVersion?: string;
  readonly eventTime?: string;
  readonly eventType?: string;
  readonly id?: string;
  readonly subject?: string;
  readonly topic?: string;
}

function eventgridTopicInputMappingFieldsToTerraform(struct?: EventgridTopicInputMappingFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_time: cdktf.stringToTerraform(struct!.eventTime),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    id: cdktf.stringToTerraform(struct!.id),
    subject: cdktf.stringToTerraform(struct!.subject),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface EventgridTopicTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function eventgridTopicTimeoutsToTerraform(struct?: EventgridTopicTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class EventgridTopic extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventgridTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_topic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._inputSchema = config.inputSchema;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._inputMappingDefaultValues = config.inputMappingDefaultValues;
    this._inputMappingFields = config.inputMappingFields;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string;
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string ) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // input_mapping_default_values - computed: false, optional: true, required: false
  private _inputMappingDefaultValues?: EventgridTopicInputMappingDefaultValues[];
  public get inputMappingDefaultValues() {
    return this.interpolationForAttribute('input_mapping_default_values') as any;
  }
  public set inputMappingDefaultValues(value: EventgridTopicInputMappingDefaultValues[] ) {
    this._inputMappingDefaultValues = value;
  }
  public resetInputMappingDefaultValues() {
    this._inputMappingDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingDefaultValuesInput() {
    return this._inputMappingDefaultValues
  }

  // input_mapping_fields - computed: false, optional: true, required: false
  private _inputMappingFields?: EventgridTopicInputMappingFields[];
  public get inputMappingFields() {
    return this.interpolationForAttribute('input_mapping_fields') as any;
  }
  public set inputMappingFields(value: EventgridTopicInputMappingFields[] ) {
    this._inputMappingFields = value;
  }
  public resetInputMappingFields() {
    this._inputMappingFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingFieldsInput() {
    return this._inputMappingFields
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridTopicTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventgridTopicTimeouts ) {
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
      input_schema: cdktf.stringToTerraform(this._inputSchema),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      input_mapping_default_values: cdktf.listMapper(eventgridTopicInputMappingDefaultValuesToTerraform)(this._inputMappingDefaultValues),
      input_mapping_fields: cdktf.listMapper(eventgridTopicInputMappingFieldsToTerraform)(this._inputMappingFields),
      timeouts: eventgridTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
