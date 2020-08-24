// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_shared_image_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermSharedImageVersionConfig extends TerraformMetaArguments {
  readonly galleryName: string;
  readonly imageName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSharedImageVersionTimeouts;
}
export class DataAzurermSharedImageVersionTargetRegion extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // regional_replica_count - computed: true, optional: false, required: true
  public get regionalReplicaCount() {
    return this.getNumberAttribute('regional_replica_count');
  }

  // storage_account_type - computed: true, optional: false, required: true
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
}
export interface DataAzurermSharedImageVersionTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermSharedImageVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSharedImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image_version',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._galleryName = config.galleryName;
    this._imageName = config.imageName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_from_latest - computed: true, optional: false, required: true
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest');
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName: string;
  public get galleryName() {
    return this._galleryName;
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName: string;
  public get imageName() {
    return this._imageName;
  }
  public set imageName(value: string) {
    this._imageName = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // managed_image_id - computed: true, optional: false, required: true
  public get managedImageId() {
    return this.getStringAttribute('managed_image_id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // target_region - computed: true, optional: false, required: true
  public targetRegion(index: string) {
    return new DataAzurermSharedImageVersionTargetRegion(this, 'target_region', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSharedImageVersionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermSharedImageVersionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gallery_name: this._galleryName,
      image_name: this._imageName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
