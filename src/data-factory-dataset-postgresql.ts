// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_postgresql.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataFactoryDatasetPostgresqlConfig extends TerraformMetaArguments {
  readonly additionalProperties?: { [key: string]: string };
  readonly annotations?: string[];
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly folder?: string;
  readonly linkedServiceName: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly resourceGroupName: string;
  readonly tableName?: string;
  /** schema_column block */
  readonly schemaColumn?: DataFactoryDatasetPostgresqlSchemaColumn[];
  /** timeouts block */
  readonly timeouts?: DataFactoryDatasetPostgresqlTimeouts;
}
export interface DataFactoryDatasetPostgresqlSchemaColumn {
  readonly description?: string;
  readonly name: string;
  readonly type?: string;
}
export interface DataFactoryDatasetPostgresqlTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataFactoryDatasetPostgresql extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryDatasetPostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._folder = config.folder;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._tableName = config.tableName;
    this._schemaColumn = config.schemaColumn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this._additionalProperties;
  }
  public set additionalProperties(value: { [key: string]: string } | undefined) {
    this._additionalProperties = value;
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string;
  public get folder() {
    return this._folder;
  }
  public set folder(value: string | undefined) {
    this._folder = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName: string;
  public get linkedServiceName() {
    return this._linkedServiceName;
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this._tableName;
  }
  public set tableName(value: string | undefined) {
    this._tableName = value;
  }

  // schema_column - computed: false, optional: true, required: false
  private _schemaColumn?: DataFactoryDatasetPostgresqlSchemaColumn[];
  public get schemaColumn() {
    return this._schemaColumn;
  }
  public set schemaColumn(value: DataFactoryDatasetPostgresqlSchemaColumn[] | undefined) {
    this._schemaColumn = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryDatasetPostgresqlTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataFactoryDatasetPostgresqlTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_properties: this._additionalProperties,
      annotations: this._annotations,
      data_factory_name: this._dataFactoryName,
      description: this._description,
      folder: this._folder,
      linked_service_name: this._linkedServiceName,
      name: this._name,
      parameters: this._parameters,
      resource_group_name: this._resourceGroupName,
      table_name: this._tableName,
      schema_column: this._schemaColumn,
      timeouts: this._timeouts,
    };
  }
}
