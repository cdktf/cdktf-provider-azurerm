// https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedImageVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#exclude_from_latest SharedImageVersion#exclude_from_latest}
  */
  readonly excludeFromLatest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#gallery_name SharedImageVersion#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#image_name SharedImageVersion#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#location SharedImageVersion#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#managed_image_id SharedImageVersion#managed_image_id}
  */
  readonly managedImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#name SharedImageVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}
  */
  readonly osDiskSnapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#resource_group_name SharedImageVersion#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#tags SharedImageVersion#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * target_region block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#target_region SharedImageVersion#target_region}
  */
  readonly targetRegion: SharedImageVersionTargetRegion[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#timeouts SharedImageVersion#timeouts}
  */
  readonly timeouts?: SharedImageVersionTimeouts;
}
export interface SharedImageVersionTargetRegion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#name SharedImageVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#regional_replica_count SharedImageVersion#regional_replica_count}
  */
  readonly regionalReplicaCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#storage_account_type SharedImageVersion#storage_account_type}
  */
  readonly storageAccountType?: string;
}

function sharedImageVersionTargetRegionToTerraform(struct?: SharedImageVersionTargetRegion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regional_replica_count: cdktf.numberToTerraform(struct!.regionalReplicaCount),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
  }
}

export interface SharedImageVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#create SharedImageVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#delete SharedImageVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#read SharedImageVersion#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html#update SharedImageVersion#update}
  */
  readonly update?: string;
}

function sharedImageVersionTimeoutsToTerraform(struct?: SharedImageVersionTimeoutsOutputReference | SharedImageVersionTimeouts): any {
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

export class SharedImageVersionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html azurerm_shared_image_version}
*/
export class SharedImageVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_shared_image_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version.html azurerm_shared_image_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedImageVersionConfig
  */
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
    this._osDiskSnapshotId = config.osDiskSnapshotId;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._targetRegion = config.targetRegion;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_from_latest - computed: false, optional: true, required: false
  private _excludeFromLatest?: boolean | cdktf.IResolvable | undefined; 
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest') as any;
  }
  public set excludeFromLatest(value: boolean | cdktf.IResolvable | undefined) {
    this._excludeFromLatest = value;
  }
  public resetExcludeFromLatest() {
    this._excludeFromLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLatestInput() {
    return this._excludeFromLatest
  }

  // gallery_name - computed: false, optional: false, required: true
  private _galleryName?: string; 
  public get galleryName() {
    return this.getStringAttribute('gallery_name');
  }
  public set galleryName(value: string) {
    this._galleryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryNameInput() {
    return this._galleryName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // managed_image_id - computed: false, optional: true, required: false
  private _managedImageId?: string | undefined; 
  public get managedImageId() {
    return this.getStringAttribute('managed_image_id');
  }
  public set managedImageId(value: string | undefined) {
    this._managedImageId = value;
  }
  public resetManagedImageId() {
    this._managedImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedImageIdInput() {
    return this._managedImageId
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

  // os_disk_snapshot_id - computed: false, optional: true, required: false
  private _osDiskSnapshotId?: string | undefined; 
  public get osDiskSnapshotId() {
    return this.getStringAttribute('os_disk_snapshot_id');
  }
  public set osDiskSnapshotId(value: string | undefined) {
    this._osDiskSnapshotId = value;
  }
  public resetOsDiskSnapshotId() {
    this._osDiskSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSnapshotIdInput() {
    return this._osDiskSnapshotId
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_region - computed: false, optional: false, required: true
  private _targetRegion?: SharedImageVersionTargetRegion[]; 
  public get targetRegion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('target_region') as any;
  }
  public set targetRegion(value: SharedImageVersionTargetRegion[]) {
    this._targetRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SharedImageVersionTimeouts | undefined; 
  private __timeoutsOutput = new SharedImageVersionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SharedImageVersionTimeouts | undefined) {
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
      exclude_from_latest: cdktf.booleanToTerraform(this._excludeFromLatest),
      gallery_name: cdktf.stringToTerraform(this._galleryName),
      image_name: cdktf.stringToTerraform(this._imageName),
      location: cdktf.stringToTerraform(this._location),
      managed_image_id: cdktf.stringToTerraform(this._managedImageId),
      name: cdktf.stringToTerraform(this._name),
      os_disk_snapshot_id: cdktf.stringToTerraform(this._osDiskSnapshotId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_region: cdktf.listMapper(sharedImageVersionTargetRegionToTerraform)(this._targetRegion),
      timeouts: sharedImageVersionTimeoutsToTerraform(this._timeouts),
    };
  }
}
