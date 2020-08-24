// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EventgridDomainConfig extends TerraformMetaArguments {
  readonly inputSchema?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** input_mapping_default_values block */
  readonly inputMappingDefaultValues?: EventgridDomainInputMappingDefaultValues[];
  /** input_mapping_fields block */
  readonly inputMappingFields?: EventgridDomainInputMappingFields[];
  /** timeouts block */
  readonly timeouts?: EventgridDomainTimeouts;
}
export interface EventgridDomainInputMappingDefaultValues {
  readonly dataVersion?: string;
  readonly eventType?: string;
  readonly subject?: string;
}
export interface EventgridDomainInputMappingFields {
  readonly dataVersion?: string;
  readonly eventTime?: string;
  readonly eventType?: string;
  readonly id?: string;
  readonly subject?: string;
  readonly topic?: string;
}
export interface EventgridDomainTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class EventgridDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventgridDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_domain',
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

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string;
  public get inputSchema() {
    return this._inputSchema;
  }
  public set inputSchema(value: string | undefined) {
    this._inputSchema = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // primary_access_key - computed: true, optional: false, required: true
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // secondary_access_key - computed: true, optional: false, required: true
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // input_mapping_default_values - computed: false, optional: true, required: false
  private _inputMappingDefaultValues?: EventgridDomainInputMappingDefaultValues[];
  public get inputMappingDefaultValues() {
    return this._inputMappingDefaultValues;
  }
  public set inputMappingDefaultValues(value: EventgridDomainInputMappingDefaultValues[] | undefined) {
    this._inputMappingDefaultValues = value;
  }

  // input_mapping_fields - computed: false, optional: true, required: false
  private _inputMappingFields?: EventgridDomainInputMappingFields[];
  public get inputMappingFields() {
    return this._inputMappingFields;
  }
  public set inputMappingFields(value: EventgridDomainInputMappingFields[] | undefined) {
    this._inputMappingFields = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridDomainTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EventgridDomainTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      input_schema: this._inputSchema,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      input_mapping_default_values: this._inputMappingDefaultValues,
      input_mapping_fields: this._inputMappingFields,
      timeouts: this._timeouts,
    };
  }
}
