// https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#activities_json DataFactoryPipeline#activities_json}
  */
  readonly activitiesJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#annotations DataFactoryPipeline#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#concurrency DataFactoryPipeline#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#data_factory_name DataFactoryPipeline#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#description DataFactoryPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#folder DataFactoryPipeline#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#moniter_metrics_after_duration DataFactoryPipeline#moniter_metrics_after_duration}
  */
  readonly moniterMetricsAfterDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#name DataFactoryPipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#parameters DataFactoryPipeline#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#resource_group_name DataFactoryPipeline#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#variables DataFactoryPipeline#variables}
  */
  readonly variables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#timeouts DataFactoryPipeline#timeouts}
  */
  readonly timeouts?: DataFactoryPipelineTimeouts;
}
export interface DataFactoryPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#create DataFactoryPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#delete DataFactoryPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#read DataFactoryPipeline#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#update DataFactoryPipeline#update}
  */
  readonly update?: string;
}

function dataFactoryPipelineTimeoutsToTerraform(struct?: DataFactoryPipelineTimeoutsOutputReference | DataFactoryPipelineTimeouts): any {
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

export class DataFactoryPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html azurerm_data_factory_pipeline}
*/
export class DataFactoryPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html azurerm_data_factory_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activitiesJson = config.activitiesJson;
    this._annotations = config.annotations;
    this._concurrency = config.concurrency;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._folder = config.folder;
    this._moniterMetricsAfterDuration = config.moniterMetricsAfterDuration;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._variables = config.variables;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activities_json - computed: false, optional: true, required: false
  private _activitiesJson?: string | undefined; 
  public get activitiesJson() {
    return this.getStringAttribute('activities_json');
  }
  public set activitiesJson(value: string | undefined) {
    this._activitiesJson = value;
  }
  public resetActivitiesJson() {
    this._activitiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitiesJsonInput() {
    return this._activitiesJson
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

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number | undefined; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number | undefined) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
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

  // moniter_metrics_after_duration - computed: false, optional: true, required: false
  private _moniterMetricsAfterDuration?: string | undefined; 
  public get moniterMetricsAfterDuration() {
    return this.getStringAttribute('moniter_metrics_after_duration');
  }
  public set moniterMetricsAfterDuration(value: string | undefined) {
    this._moniterMetricsAfterDuration = value;
  }
  public resetMoniterMetricsAfterDuration() {
    this._moniterMetricsAfterDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moniterMetricsAfterDurationInput() {
    return this._moniterMetricsAfterDuration
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
    return this._resourceGroupName
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get variables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('variables') as any;
  }
  public set variables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryPipelineTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryPipelineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryPipelineTimeouts | undefined) {
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
      activities_json: cdktf.stringToTerraform(this._activitiesJson),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      concurrency: cdktf.numberToTerraform(this._concurrency),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      folder: cdktf.stringToTerraform(this._folder),
      moniter_metrics_after_duration: cdktf.stringToTerraform(this._moniterMetricsAfterDuration),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
      timeouts: dataFactoryPipelineTimeoutsToTerraform(this._timeouts),
    };
  }
}
