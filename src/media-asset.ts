// https://www.terraform.io/docs/providers/azurerm/r/media_asset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaAssetConfig extends cdktf.TerraformMetaArguments {
  readonly alternateId?: string;
  readonly container?: string;
  readonly description?: string;
  readonly mediaServicesAccountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly storageAccountName?: string;
  /** timeouts block */
  readonly timeouts?: MediaAssetTimeouts;
}
export interface MediaAssetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mediaAssetTimeoutsToTerraform(struct?: MediaAssetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MediaAsset extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MediaAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_asset',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alternateId = config.alternateId;
    this._container = config.container;
    this._description = config.description;
    this._mediaServicesAccountName = config.mediaServicesAccountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountName = config.storageAccountName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_id - computed: false, optional: true, required: false
  private _alternateId?: string;
  public get alternateId() {
    return this.getStringAttribute('alternate_id');
  }
  public set alternateId(value: string ) {
    this._alternateId = value;
  }
  public resetAlternateId() {
    this._alternateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateIdInput() {
    return this._alternateId
  }

  // container - computed: true, optional: true, required: false
  private _container?: string;
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
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

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MediaAssetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MediaAssetTimeouts ) {
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
      alternate_id: cdktf.stringToTerraform(this._alternateId),
      container: cdktf.stringToTerraform(this._container),
      description: cdktf.stringToTerraform(this._description),
      media_services_account_name: cdktf.stringToTerraform(this._mediaServicesAccountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      timeouts: mediaAssetTimeoutsToTerraform(this._timeouts),
    };
  }
}
