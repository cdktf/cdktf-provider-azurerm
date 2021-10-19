// https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryCustomDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#additional_properties DataFactoryCustomDataset#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#annotations DataFactoryCustomDataset#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#data_factory_id DataFactoryCustomDataset#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#description DataFactoryCustomDataset#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#folder DataFactoryCustomDataset#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#name DataFactoryCustomDataset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#parameters DataFactoryCustomDataset#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#schema_json DataFactoryCustomDataset#schema_json}
  */
  readonly schemaJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#type DataFactoryCustomDataset#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#type_properties_json DataFactoryCustomDataset#type_properties_json}
  */
  readonly typePropertiesJson: string;
  /**
  * linked_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#linked_service DataFactoryCustomDataset#linked_service}
  */
  readonly linkedService: DataFactoryCustomDatasetLinkedService;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#timeouts DataFactoryCustomDataset#timeouts}
  */
  readonly timeouts?: DataFactoryCustomDatasetTimeouts;
}
export interface DataFactoryCustomDatasetLinkedService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#name DataFactoryCustomDataset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#parameters DataFactoryCustomDataset#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryCustomDatasetLinkedServiceToTerraform(struct?: DataFactoryCustomDatasetLinkedServiceOutputReference | DataFactoryCustomDatasetLinkedService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryCustomDatasetLinkedServiceOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryCustomDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#create DataFactoryCustomDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#delete DataFactoryCustomDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#read DataFactoryCustomDataset#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html#update DataFactoryCustomDataset#update}
  */
  readonly update?: string;
}

function dataFactoryCustomDatasetTimeoutsToTerraform(struct?: DataFactoryCustomDatasetTimeoutsOutputReference | DataFactoryCustomDatasetTimeouts): any {
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

export class DataFactoryCustomDatasetTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html azurerm_data_factory_custom_dataset}
*/
export class DataFactoryCustomDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_custom_dataset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_custom_dataset.html azurerm_data_factory_custom_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryCustomDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryCustomDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_custom_dataset',
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
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._folder = config.folder;
    this._name = config.name;
    this._parameters = config.parameters;
    this._schemaJson = config.schemaJson;
    this._type = config.type;
    this._typePropertiesJson = config.typePropertiesJson;
    this._linkedService = config.linkedService;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // folder - computed: false, optional: true, required: false
  private _folder?: string | undefined; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string | undefined) {
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

  // schema_json - computed: false, optional: true, required: false
  private _schemaJson?: string | undefined; 
  public get schemaJson() {
    return this.getStringAttribute('schema_json');
  }
  public set schemaJson(value: string | undefined) {
    this._schemaJson = value;
  }
  public resetSchemaJson() {
    this._schemaJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaJsonInput() {
    return this._schemaJson
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

  // type_properties_json - computed: false, optional: false, required: true
  private _typePropertiesJson?: string; 
  public get typePropertiesJson() {
    return this.getStringAttribute('type_properties_json');
  }
  public set typePropertiesJson(value: string) {
    this._typePropertiesJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typePropertiesJsonInput() {
    return this._typePropertiesJson
  }

  // linked_service - computed: false, optional: false, required: true
  private _linkedService?: DataFactoryCustomDatasetLinkedService; 
  private __linkedServiceOutput = new DataFactoryCustomDatasetLinkedServiceOutputReference(this as any, "linked_service", true);
  public get linkedService() {
    return this.__linkedServiceOutput;
  }
  public putLinkedService(value: DataFactoryCustomDatasetLinkedService) {
    this._linkedService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceInput() {
    return this._linkedService
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryCustomDatasetTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryCustomDatasetTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryCustomDatasetTimeouts | undefined) {
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
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      schema_json: cdktf.stringToTerraform(this._schemaJson),
      type: cdktf.stringToTerraform(this._type),
      type_properties_json: cdktf.stringToTerraform(this._typePropertiesJson),
      linked_service: dataFactoryCustomDatasetLinkedServiceToTerraform(this._linkedService),
      timeouts: dataFactoryCustomDatasetTimeoutsToTerraform(this._timeouts),
    };
  }
}
