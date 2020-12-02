// https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_delimited_text.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataFactoryDatasetDelimitedTextConfig extends TerraformMetaArguments {
  readonly additionalProperties?: { [key: string]: string };
  readonly annotations?: string[];
  readonly columnDelimiter?: string;
  readonly dataFactoryName: string;
  readonly description?: string;
  readonly encoding?: string;
  readonly escapeCharacter?: string;
  readonly firstRowAsHeader?: boolean;
  readonly folder?: string;
  readonly linkedServiceName: string;
  readonly name: string;
  readonly nullValue?: string;
  readonly parameters?: { [key: string]: string };
  readonly quoteCharacter?: string;
  readonly resourceGroupName: string;
  readonly rowDelimiter?: string;
  /** azure_blob_storage_location block */
  readonly azureBlobStorageLocation?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation[];
  /** http_server_location block */
  readonly httpServerLocation?: DataFactoryDatasetDelimitedTextHttpServerLocation[];
  /** schema_column block */
  readonly schemaColumn?: DataFactoryDatasetDelimitedTextSchemaColumn[];
  /** timeouts block */
  readonly timeouts?: DataFactoryDatasetDelimitedTextTimeouts;
}
export interface DataFactoryDatasetDelimitedTextAzureBlobStorageLocation {
  readonly container: string;
  readonly filename: string;
  readonly path: string;
}
export interface DataFactoryDatasetDelimitedTextHttpServerLocation {
  readonly filename: string;
  readonly path: string;
  readonly relativeUrl: string;
}
export interface DataFactoryDatasetDelimitedTextSchemaColumn {
  readonly description?: string;
  readonly name: string;
  readonly type?: string;
}
export interface DataFactoryDatasetDelimitedTextTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class DataFactoryDatasetDelimitedText extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataFactoryDatasetDelimitedTextConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_dataset_delimited_text',
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
    this._columnDelimiter = config.columnDelimiter;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._encoding = config.encoding;
    this._escapeCharacter = config.escapeCharacter;
    this._firstRowAsHeader = config.firstRowAsHeader;
    this._folder = config.folder;
    this._linkedServiceName = config.linkedServiceName;
    this._name = config.name;
    this._nullValue = config.nullValue;
    this._parameters = config.parameters;
    this._quoteCharacter = config.quoteCharacter;
    this._resourceGroupName = config.resourceGroupName;
    this._rowDelimiter = config.rowDelimiter;
    this._azureBlobStorageLocation = config.azureBlobStorageLocation;
    this._httpServerLocation = config.httpServerLocation;
    this._schemaColumn = config.schemaColumn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // column_delimiter - computed: false, optional: true, required: false
  private _columnDelimiter?: string;
  public get columnDelimiter() {
    return this.getStringAttribute('column_delimiter');
  }
  public set columnDelimiter(value: string ) {
    this._columnDelimiter = value;
  }
  public resetColumnDelimiter() {
    this._columnDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDelimiterInput() {
    return this._columnDelimiter
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
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

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string;
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string ) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // escape_character - computed: false, optional: true, required: false
  private _escapeCharacter?: string;
  public get escapeCharacter() {
    return this.getStringAttribute('escape_character');
  }
  public set escapeCharacter(value: string ) {
    this._escapeCharacter = value;
  }
  public resetEscapeCharacter() {
    this._escapeCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharacterInput() {
    return this._escapeCharacter
  }

  // first_row_as_header - computed: false, optional: true, required: false
  private _firstRowAsHeader?: boolean;
  public get firstRowAsHeader() {
    return this.getBooleanAttribute('first_row_as_header');
  }
  public set firstRowAsHeader(value: boolean ) {
    this._firstRowAsHeader = value;
  }
  public resetFirstRowAsHeader() {
    this._firstRowAsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstRowAsHeaderInput() {
    return this._firstRowAsHeader
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string ) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName: string;
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName
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

  // null_value - computed: false, optional: true, required: false
  private _nullValue?: string;
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }
  public set nullValue(value: string ) {
    this._nullValue = value;
  }
  public resetNullValue() {
    this._nullValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValueInput() {
    return this._nullValue
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // quote_character - computed: false, optional: true, required: false
  private _quoteCharacter?: string;
  public get quoteCharacter() {
    return this.getStringAttribute('quote_character');
  }
  public set quoteCharacter(value: string ) {
    this._quoteCharacter = value;
  }
  public resetQuoteCharacter() {
    this._quoteCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharacterInput() {
    return this._quoteCharacter
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

  // row_delimiter - computed: false, optional: true, required: false
  private _rowDelimiter?: string;
  public get rowDelimiter() {
    return this.getStringAttribute('row_delimiter');
  }
  public set rowDelimiter(value: string ) {
    this._rowDelimiter = value;
  }
  public resetRowDelimiter() {
    this._rowDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowDelimiterInput() {
    return this._rowDelimiter
  }

  // azure_blob_storage_location - computed: false, optional: true, required: false
  private _azureBlobStorageLocation?: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation[];
  public get azureBlobStorageLocation() {
    return this.interpolationForAttribute('azure_blob_storage_location') as any;
  }
  public set azureBlobStorageLocation(value: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation[] ) {
    this._azureBlobStorageLocation = value;
  }
  public resetAzureBlobStorageLocation() {
    this._azureBlobStorageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageLocationInput() {
    return this._azureBlobStorageLocation
  }

  // http_server_location - computed: false, optional: true, required: false
  private _httpServerLocation?: DataFactoryDatasetDelimitedTextHttpServerLocation[];
  public get httpServerLocation() {
    return this.interpolationForAttribute('http_server_location') as any;
  }
  public set httpServerLocation(value: DataFactoryDatasetDelimitedTextHttpServerLocation[] ) {
    this._httpServerLocation = value;
  }
  public resetHttpServerLocation() {
    this._httpServerLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerLocationInput() {
    return this._httpServerLocation
  }

  // schema_column - computed: false, optional: true, required: false
  private _schemaColumn?: DataFactoryDatasetDelimitedTextSchemaColumn[];
  public get schemaColumn() {
    return this.interpolationForAttribute('schema_column') as any;
  }
  public set schemaColumn(value: DataFactoryDatasetDelimitedTextSchemaColumn[] ) {
    this._schemaColumn = value;
  }
  public resetSchemaColumn() {
    this._schemaColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaColumnInput() {
    return this._schemaColumn
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryDatasetDelimitedTextTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryDatasetDelimitedTextTimeouts ) {
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
      additional_properties: this._additionalProperties,
      annotations: this._annotations,
      column_delimiter: this._columnDelimiter,
      data_factory_name: this._dataFactoryName,
      description: this._description,
      encoding: this._encoding,
      escape_character: this._escapeCharacter,
      first_row_as_header: this._firstRowAsHeader,
      folder: this._folder,
      linked_service_name: this._linkedServiceName,
      name: this._name,
      null_value: this._nullValue,
      parameters: this._parameters,
      quote_character: this._quoteCharacter,
      resource_group_name: this._resourceGroupName,
      row_delimiter: this._rowDelimiter,
      azure_blob_storage_location: this._azureBlobStorageLocation,
      http_server_location: this._httpServerLocation,
      schema_column: this._schemaColumn,
      timeouts: this._timeouts,
    };
  }
}
