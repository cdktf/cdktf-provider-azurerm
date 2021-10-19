// https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryDataFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#annotations DataFactoryDataFlow#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#data_factory_id DataFactoryDataFlow#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#description DataFactoryDataFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#folder DataFactoryDataFlow#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#script DataFactoryDataFlow#script}
  */
  readonly script: string;
  /**
  * sink block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#sink DataFactoryDataFlow#sink}
  */
  readonly sink: DataFactoryDataFlowSink[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#source DataFactoryDataFlow#source}
  */
  readonly source: DataFactoryDataFlowSource[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#timeouts DataFactoryDataFlow#timeouts}
  */
  readonly timeouts?: DataFactoryDataFlowTimeouts;
  /**
  * transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#transformation DataFactoryDataFlow#transformation}
  */
  readonly transformation?: DataFactoryDataFlowTransformation[];
}
export interface DataFactoryDataFlowSinkDataset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#parameters DataFactoryDataFlow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryDataFlowSinkDatasetToTerraform(struct?: DataFactoryDataFlowSinkDatasetOutputReference | DataFactoryDataFlowSinkDataset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryDataFlowSinkDatasetOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDataFlowSinkLinkedService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#parameters DataFactoryDataFlow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryDataFlowSinkLinkedServiceToTerraform(struct?: DataFactoryDataFlowSinkLinkedServiceOutputReference | DataFactoryDataFlowSinkLinkedService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryDataFlowSinkLinkedServiceOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDataFlowSinkSchemaLinkedService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#parameters DataFactoryDataFlow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryDataFlowSinkSchemaLinkedServiceToTerraform(struct?: DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference | DataFactoryDataFlowSinkSchemaLinkedService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDataFlowSink {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#description DataFactoryDataFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#dataset DataFactoryDataFlow#dataset}
  */
  readonly dataset?: DataFactoryDataFlowSinkDataset;
  /**
  * linked_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#linked_service DataFactoryDataFlow#linked_service}
  */
  readonly linkedService?: DataFactoryDataFlowSinkLinkedService;
  /**
  * schema_linked_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#schema_linked_service DataFactoryDataFlow#schema_linked_service}
  */
  readonly schemaLinkedService?: DataFactoryDataFlowSinkSchemaLinkedService;
}

function dataFactoryDataFlowSinkToTerraform(struct?: DataFactoryDataFlowSink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    dataset: dataFactoryDataFlowSinkDatasetToTerraform(struct!.dataset),
    linked_service: dataFactoryDataFlowSinkLinkedServiceToTerraform(struct!.linkedService),
    schema_linked_service: dataFactoryDataFlowSinkSchemaLinkedServiceToTerraform(struct!.schemaLinkedService),
  }
}

export interface DataFactoryDataFlowSourceDataset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#parameters DataFactoryDataFlow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryDataFlowSourceDatasetToTerraform(struct?: DataFactoryDataFlowSourceDatasetOutputReference | DataFactoryDataFlowSourceDataset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryDataFlowSourceDatasetOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDataFlowSourceLinkedService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#parameters DataFactoryDataFlow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryDataFlowSourceLinkedServiceToTerraform(struct?: DataFactoryDataFlowSourceLinkedServiceOutputReference | DataFactoryDataFlowSourceLinkedService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryDataFlowSourceLinkedServiceOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDataFlowSourceSchemaLinkedService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#parameters DataFactoryDataFlow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryDataFlowSourceSchemaLinkedServiceToTerraform(struct?: DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference | DataFactoryDataFlowSourceSchemaLinkedService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
  }
}

export class DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDataFlowSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#description DataFactoryDataFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#dataset DataFactoryDataFlow#dataset}
  */
  readonly dataset?: DataFactoryDataFlowSourceDataset;
  /**
  * linked_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#linked_service DataFactoryDataFlow#linked_service}
  */
  readonly linkedService?: DataFactoryDataFlowSourceLinkedService;
  /**
  * schema_linked_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#schema_linked_service DataFactoryDataFlow#schema_linked_service}
  */
  readonly schemaLinkedService?: DataFactoryDataFlowSourceSchemaLinkedService;
}

function dataFactoryDataFlowSourceToTerraform(struct?: DataFactoryDataFlowSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    dataset: dataFactoryDataFlowSourceDatasetToTerraform(struct!.dataset),
    linked_service: dataFactoryDataFlowSourceLinkedServiceToTerraform(struct!.linkedService),
    schema_linked_service: dataFactoryDataFlowSourceSchemaLinkedServiceToTerraform(struct!.schemaLinkedService),
  }
}

export interface DataFactoryDataFlowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#create DataFactoryDataFlow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#delete DataFactoryDataFlow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#read DataFactoryDataFlow#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#update DataFactoryDataFlow#update}
  */
  readonly update?: string;
}

function dataFactoryDataFlowTimeoutsToTerraform(struct?: DataFactoryDataFlowTimeoutsOutputReference | DataFactoryDataFlowTimeouts): any {
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

export class DataFactoryDataFlowTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface DataFactoryDataFlowTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#description DataFactoryDataFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html#name DataFactoryDataFlow#name}
  */
  readonly name: string;
}

function dataFactoryDataFlowTransformationToTerraform(struct?: DataFactoryDataFlowTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html azurerm_data_factory_data_flow}
*/
export class DataFactoryDataFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_data_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_data_flow.html azurerm_data_factory_data_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryDataFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryDataFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_data_flow',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._annotations = config.annotations;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._folder = config.folder;
    this._name = config.name;
    this._script = config.script;
    this._sink = config.sink;
    this._source = config.source;
    this._timeouts = config.timeouts;
    this._transformation = config.transformation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sink - computed: false, optional: false, required: true
  private _sink?: DataFactoryDataFlowSink[]; 
  public get sink() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sink') as any;
  }
  public set sink(value: DataFactoryDataFlowSink[]) {
    this._sink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkInput() {
    return this._sink
  }

  // source - computed: false, optional: false, required: true
  private _source?: DataFactoryDataFlowSource[]; 
  public get source() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: DataFactoryDataFlowSource[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryDataFlowTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryDataFlowTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryDataFlowTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation?: DataFactoryDataFlowTransformation[] | undefined; 
  public get transformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('transformation') as any;
  }
  public set transformation(value: DataFactoryDataFlowTransformation[] | undefined) {
    this._transformation = value;
  }
  public resetTransformation() {
    this._transformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      description: cdktf.stringToTerraform(this._description),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      script: cdktf.stringToTerraform(this._script),
      sink: cdktf.listMapper(dataFactoryDataFlowSinkToTerraform)(this._sink),
      source: cdktf.listMapper(dataFactoryDataFlowSourceToTerraform)(this._source),
      timeouts: dataFactoryDataFlowTimeoutsToTerraform(this._timeouts),
      transformation: cdktf.listMapper(dataFactoryDataFlowTransformationToTerraform)(this._transformation),
    };
  }
}
