// https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSharedImageVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html#gallery_name DataAzurermSharedImageVersions#gallery_name}
  */
  readonly galleryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html#image_name DataAzurermSharedImageVersions#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html#resource_group_name DataAzurermSharedImageVersions#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html#tags_filter DataAzurermSharedImageVersions#tags_filter}
  */
  readonly tagsFilter?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html#timeouts DataAzurermSharedImageVersions#timeouts}
  */
  readonly timeouts?: DataAzurermSharedImageVersionsTimeouts;
}
export class DataAzurermSharedImageVersionsImagesTargetRegion extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // regional_replica_count - computed: true, optional: false, required: false
  public get regionalReplicaCount() {
    return this.getNumberAttribute('regional_replica_count');
  }

  // storage_account_type - computed: true, optional: false, required: false
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
}
export class DataAzurermSharedImageVersionsImages extends cdktf.ComplexComputedList {

  // exclude_from_latest - computed: true, optional: false, required: false
  public get excludeFromLatest() {
    return this.getBooleanAttribute('exclude_from_latest') as any;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // managed_image_id - computed: true, optional: false, required: false
  public get managedImageId() {
    return this.getStringAttribute('managed_image_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }

  // target_region - computed: true, optional: false, required: false
  public get targetRegion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('target_region') as any;
  }
}
export interface DataAzurermSharedImageVersionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html#read DataAzurermSharedImageVersions#read}
  */
  readonly read?: string;
}

function dataAzurermSharedImageVersionsTimeoutsToTerraform(struct?: DataAzurermSharedImageVersionsTimeoutsOutputReference | DataAzurermSharedImageVersionsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermSharedImageVersionsTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html azurerm_shared_image_versions}
*/
export class DataAzurermSharedImageVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_shared_image_versions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/shared_image_versions.html azurerm_shared_image_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermSharedImageVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermSharedImageVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image_versions',
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
    this._resourceGroupName = config.resourceGroupName;
    this._tagsFilter = config.tagsFilter;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // images - computed: true, optional: false, required: false
  public images(index: string) {
    return new DataAzurermSharedImageVersionsImages(this, 'images', index);
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

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_filter') as any;
  }
  public set tagsFilter(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsFilter = value;
  }
  public resetTagsFilter() {
    this._tagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsFilterInput() {
    return this._tagsFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSharedImageVersionsTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermSharedImageVersionsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermSharedImageVersionsTimeouts | undefined) {
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
      gallery_name: cdktf.stringToTerraform(this._galleryName),
      image_name: cdktf.stringToTerraform(this._imageName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags_filter: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsFilter),
      timeouts: dataAzurermSharedImageVersionsTimeoutsToTerraform(this._timeouts),
    };
  }
}
