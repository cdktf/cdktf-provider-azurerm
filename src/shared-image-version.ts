// https://www.terraform.io/docs/providers/azurerm/r/shared_image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedImageVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}
  */
  readonly endOfLifeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}
  */
  readonly excludeFromLatest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#gallery_name SharedImageVersion#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#id SharedImageVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#image_name SharedImageVersion#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#location SharedImageVersion#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}
  */
  readonly managedImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#name SharedImageVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}
  */
  readonly osDiskSnapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#replication_mode SharedImageVersion#replication_mode}
  */
  readonly replicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#tags SharedImageVersion#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * target_region block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#target_region SharedImageVersion#target_region}
  */
  readonly targetRegion: SharedImageVersionTargetRegion[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#timeouts SharedImageVersion#timeouts}
  */
  readonly timeouts?: SharedImageVersionTimeouts;
}
export interface SharedImageVersionTargetRegion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#name SharedImageVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}
  */
  readonly regionalReplicaCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}
  */
  readonly storageAccountType?: string;
}

export function sharedImageVersionTargetRegionToTerraform(struct?: SharedImageVersionTargetRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_set_id: cdktf.stringToTerraform(struct!.diskEncryptionSetId),
    name: cdktf.stringToTerraform(struct!.name),
    regional_replica_count: cdktf.numberToTerraform(struct!.regionalReplicaCount),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
  }
}

export class SharedImageVersionTargetRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SharedImageVersionTargetRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionSetId = this._diskEncryptionSetId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regionalReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalReplicaCount = this._regionalReplicaCount;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionTargetRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionSetId = undefined;
      this._name = undefined;
      this._regionalReplicaCount = undefined;
      this._storageAccountType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionSetId = value.diskEncryptionSetId;
      this._name = value.name;
      this._regionalReplicaCount = value.regionalReplicaCount;
      this._storageAccountType = value.storageAccountType;
    }
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string; 
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId;
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
    return this._name;
  }

  // regional_replica_count - computed: false, optional: false, required: true
  private _regionalReplicaCount?: number; 
  public get regionalReplicaCount() {
    return this.getNumberAttribute('regional_replica_count');
  }
  public set regionalReplicaCount(value: number) {
    this._regionalReplicaCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalReplicaCountInput() {
    return this._regionalReplicaCount;
  }

  // storage_account_type - computed: false, optional: true, required: false
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  public resetStorageAccountType() {
    this._storageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }
}

export class SharedImageVersionTargetRegionList extends cdktf.ComplexList {
  public internalValue? : SharedImageVersionTargetRegion[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SharedImageVersionTargetRegionOutputReference {
    return new SharedImageVersionTargetRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharedImageVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#create SharedImageVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#delete SharedImageVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#read SharedImageVersion#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version#update SharedImageVersion#update}
  */
  readonly update?: string;
}

export function sharedImageVersionTimeoutsToTerraform(struct?: SharedImageVersionTimeoutsOutputReference | SharedImageVersionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SharedImageVersionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedImageVersionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version azurerm_shared_image_version}
*/
export class SharedImageVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_shared_image_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/shared_image_version azurerm_shared_image_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: SharedImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image_version',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.13.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endOfLifeDate = config.endOfLifeDate;
    this._excludeFromLatest = config.excludeFromLatest;
    this._galleryName = config.galleryName;
    this._id = config.id;
    this._imageName = config.imageName;
    this._location = config.location;
    this._managedImageId = config.managedImageId;
    this._name = config.name;
    this._osDiskSnapshotId = config.osDiskSnapshotId;
    this._replicationMode = config.replicationMode;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._targetRegion.internalValue = config.targetRegion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_of_life_date - computed: false, optional: true, required: false
  private _endOfLifeDate?: string; 
  public get endOfLifeDate() {
    return this.getStringAttribute('end_of_life_date');
  }
  public set endOfLifeDate(value: string) {
    this._endOfLifeDate = value;
  }
  public resetEndOfLifeDate() {
    this._endOfLifeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endOfLifeDateInput() {
    return this._endOfLifeDate;
  }

  // exclude_from_latest - computed: false, optional: true, required: false
  private _excludeFromLatest?: boolean | cdktf.IResolvable; 
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest');
  }
  public set excludeFromLatest(value: boolean | cdktf.IResolvable) {
    this._excludeFromLatest = value;
  }
  public resetExcludeFromLatest() {
    this._excludeFromLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLatestInput() {
    return this._excludeFromLatest;
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
    return this._galleryName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._imageName;
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
    return this._location;
  }

  // managed_image_id - computed: false, optional: true, required: false
  private _managedImageId?: string; 
  public get managedImageId() {
    return this.getStringAttribute('managed_image_id');
  }
  public set managedImageId(value: string) {
    this._managedImageId = value;
  }
  public resetManagedImageId() {
    this._managedImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedImageIdInput() {
    return this._managedImageId;
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
    return this._name;
  }

  // os_disk_snapshot_id - computed: false, optional: true, required: false
  private _osDiskSnapshotId?: string; 
  public get osDiskSnapshotId() {
    return this.getStringAttribute('os_disk_snapshot_id');
  }
  public set osDiskSnapshotId(value: string) {
    this._osDiskSnapshotId = value;
  }
  public resetOsDiskSnapshotId() {
    this._osDiskSnapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSnapshotIdInput() {
    return this._osDiskSnapshotId;
  }

  // replication_mode - computed: false, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
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
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_region - computed: false, optional: false, required: true
  private _targetRegion = new SharedImageVersionTargetRegionList(this, "target_region", false);
  public get targetRegion() {
    return this._targetRegion;
  }
  public putTargetRegion(value: SharedImageVersionTargetRegion[] | cdktf.IResolvable) {
    this._targetRegion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SharedImageVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SharedImageVersionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_of_life_date: cdktf.stringToTerraform(this._endOfLifeDate),
      exclude_from_latest: cdktf.booleanToTerraform(this._excludeFromLatest),
      gallery_name: cdktf.stringToTerraform(this._galleryName),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      location: cdktf.stringToTerraform(this._location),
      managed_image_id: cdktf.stringToTerraform(this._managedImageId),
      name: cdktf.stringToTerraform(this._name),
      os_disk_snapshot_id: cdktf.stringToTerraform(this._osDiskSnapshotId),
      replication_mode: cdktf.stringToTerraform(this._replicationMode),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_region: cdktf.listMapper(sharedImageVersionTargetRegionToTerraform)(this._targetRegion.internalValue),
      timeouts: sharedImageVersionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
