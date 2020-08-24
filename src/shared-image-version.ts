// https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SharedImageVersionConfig extends TerraformMetaArguments {
  readonly excludeFromLatest?: boolean;
  readonly galleryName: string;
  readonly imageName: string;
  readonly location: string;
  readonly managedImageId: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** target_region block */
  readonly targetRegion: SharedImageVersionTargetRegion[];
  /** timeouts block */
  readonly timeouts?: SharedImageVersionTimeouts;
}
export interface SharedImageVersionTargetRegion {
  readonly name: string;
  readonly regionalReplicaCount: number;
  readonly storageAccountType?: string;
}
export interface SharedImageVersionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SharedImageVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SharedImageVersionConfig) {
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
    this._excludeFromLatest = config.excludeFromLatest;
    this._galleryName = config.galleryName;
    this._imageName = config.imageName;
    this._location = config.location;
    this._managedImageId = config.managedImageId;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._targetRegion = config.targetRegion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_from_latest - computed: false, optional: true, required: false
  private _excludeFromLatest?: boolean;
  public get excludeFromLatest() {
    return this._excludeFromLatest;
  }
  public set excludeFromLatest(value: boolean | undefined) {
    this._excludeFromLatest = value;
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

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // managed_image_id - computed: false, optional: false, required: true
  private _managedImageId: string;
  public get managedImageId() {
    return this._managedImageId;
  }
  public set managedImageId(value: string) {
    this._managedImageId = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_region - computed: false, optional: false, required: true
  private _targetRegion: SharedImageVersionTargetRegion[];
  public get targetRegion() {
    return this._targetRegion;
  }
  public set targetRegion(value: SharedImageVersionTargetRegion[]) {
    this._targetRegion = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SharedImageVersionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SharedImageVersionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_from_latest: this._excludeFromLatest,
      gallery_name: this._galleryName,
      image_name: this._imageName,
      location: this._location,
      managed_image_id: this._managedImageId,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      target_region: this._targetRegion,
      timeouts: this._timeouts,
    };
  }
}
