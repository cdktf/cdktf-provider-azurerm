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
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#resource_group_name DataFactoryPipeline#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html#variables DataFactoryPipeline#variables}
  */
  readonly variables?: { [key: string]: string };
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

function dataFactoryPipelineTimeoutsToTerraform(struct?: DataFactoryPipelineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_pipeline.html azurerm_data_factory_pipeline}
*/
export class DataFactoryPipeline extends cdktf.TerraformResource {

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
  private _activitiesJson?: string;
  public get activitiesJson() {
    return this.getStringAttribute('activities_json');
  }
  public set activitiesJson(value: string ) {
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

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number;
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number ) {
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

  // moniter_metrics_after_duration - computed: false, optional: true, required: false
  private _moniterMetricsAfterDuration?: string;
  public get moniterMetricsAfterDuration() {
    return this.getStringAttribute('moniter_metrics_after_duration');
  }
  public set moniterMetricsAfterDuration(value: string ) {
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

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string };
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }
  public set variables(value: { [key: string]: string } ) {
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
  private _timeouts?: DataFactoryPipelineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryPipelineTimeouts ) {
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
