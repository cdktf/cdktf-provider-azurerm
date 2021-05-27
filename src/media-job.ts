// https://www.terraform.io/docs/providers/azurerm/r/media_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#description MediaJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#media_services_account_name MediaJob#media_services_account_name}
  */
  readonly mediaServicesAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#name MediaJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#priority MediaJob#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#resource_group_name MediaJob#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#transform_name MediaJob#transform_name}
  */
  readonly transformName: string;
  /**
  * input_asset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#input_asset MediaJob#input_asset}
  */
  readonly inputAsset: MediaJobInputAsset[];
  /**
  * output_asset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#output_asset MediaJob#output_asset}
  */
  readonly outputAsset: MediaJobOutputAsset[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#timeouts MediaJob#timeouts}
  */
  readonly timeouts?: MediaJobTimeouts;
}
export interface MediaJobInputAsset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#label MediaJob#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#name MediaJob#name}
  */
  readonly name: string;
}

function mediaJobInputAssetToTerraform(struct?: MediaJobInputAsset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface MediaJobOutputAsset {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#label MediaJob#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#name MediaJob#name}
  */
  readonly name: string;
}

function mediaJobOutputAssetToTerraform(struct?: MediaJobOutputAsset): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface MediaJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#create MediaJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#delete MediaJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#read MediaJob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html#update MediaJob#update}
  */
  readonly update?: string;
}

function mediaJobTimeoutsToTerraform(struct?: MediaJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html azurerm_media_job}
*/
export class MediaJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/media_job.html azurerm_media_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaJobConfig
  */
  public constructor(scope: Construct, id: string, config: MediaJobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_job',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._priority = config.priority;
    this._resourceGroupName = config.resourceGroupName;
    this._transformName = config.transformName;
    this._inputAsset = config.inputAsset;
    this._outputAsset = config.outputAsset;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // media_services_account_name - computed: false, optional: false, required: true
  private _mediaServicesAccountName: string;
  public get mediaServicesAccountName() {
    return this.getStringAttribute('media_services_account_name');
  }
  public set mediaServicesAccountName(value: string) {
    this._mediaServicesAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaServicesAccountNameInput() {
    return this._mediaServicesAccountName
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

  // priority - computed: false, optional: true, required: false
  private _priority?: string;
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
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

  // transform_name - computed: false, optional: false, required: true
  private _transformName: string;
  public get transformName() {
    return this.getStringAttribute('transform_name');
  }
  public set transformName(value: string) {
    this._transformName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNameInput() {
    return this._transformName
  }

  // input_asset - computed: false, optional: false, required: true
  private _inputAsset: MediaJobInputAsset[];
  public get inputAsset() {
    return this.interpolationForAttribute('input_asset') as any;
  }
  public set inputAsset(value: MediaJobInputAsset[]) {
    this._inputAsset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputAssetInput() {
    return this._inputAsset
  }

  // output_asset - computed: false, optional: false, required: true
  private _outputAsset: MediaJobOutputAsset[];
  public get outputAsset() {
    return this.interpolationForAttribute('output_asset') as any;
  }
  public set outputAsset(value: MediaJobOutputAsset[]) {
    this._outputAsset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAssetInput() {
    return this._outputAsset
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaJobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaJobTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.stringToTerraform(this._priority),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      transform_name: cdktf.stringToTerraform(this._transformName),
      input_asset: cdktf.listMapper(mediaJobInputAssetToTerraform)(this._inputAsset),
      output_asset: cdktf.listMapper(mediaJobOutputAssetToTerraform)(this._outputAsset),
      timeouts: mediaJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
