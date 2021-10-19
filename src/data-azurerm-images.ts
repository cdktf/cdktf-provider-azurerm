// https://www.terraform.io/docs/providers/azurerm/d/images.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/images.html#resource_group_name DataAzurermImages#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/images.html#tags_filter DataAzurermImages#tags_filter}
  */
  readonly tagsFilter?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/images.html#timeouts DataAzurermImages#timeouts}
  */
  readonly timeouts?: DataAzurermImagesTimeouts;
}
export class DataAzurermImagesImagesDataDisk extends cdktf.ComplexComputedList {

  // blob_uri - computed: true, optional: false, required: false
  public get blobUri() {
    return this.getStringAttribute('blob_uri');
  }

  // caching - computed: true, optional: false, required: false
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // managed_disk_id - computed: true, optional: false, required: false
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}
export class DataAzurermImagesImagesOsDisk extends cdktf.ComplexComputedList {

  // blob_uri - computed: true, optional: false, required: false
  public get blobUri() {
    return this.getStringAttribute('blob_uri');
  }

  // caching - computed: true, optional: false, required: false
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // managed_disk_id - computed: true, optional: false, required: false
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }

  // os_state - computed: true, optional: false, required: false
  public get osState() {
    return this.getStringAttribute('os_state');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}
export class DataAzurermImagesImages extends cdktf.ComplexComputedList {

  // data_disk - computed: true, optional: false, required: false
  public get dataDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('data_disk') as any;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_disk - computed: true, optional: false, required: false
  public get osDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('os_disk') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }

  // zone_resilient - computed: true, optional: false, required: false
  public get zoneResilient() {
    return this.getBooleanAttribute('zone_resilient') as any;
  }
}
export interface DataAzurermImagesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/images.html#read DataAzurermImages#read}
  */
  readonly read?: string;
}

function dataAzurermImagesTimeoutsToTerraform(struct?: DataAzurermImagesTimeoutsOutputReference | DataAzurermImagesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermImagesTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/images.html azurerm_images}
*/
export class DataAzurermImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_images";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/images.html azurerm_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermImagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_images',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceGroupName = config.resourceGroupName;
    this._tagsFilter = config.tagsFilter;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // images - computed: true, optional: false, required: false
  public images(index: string) {
    return new DataAzurermImagesImages(this, 'images', index);
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
  private _timeouts?: DataAzurermImagesTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermImagesTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermImagesTimeouts | undefined) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags_filter: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsFilter),
      timeouts: dataAzurermImagesTimeoutsToTerraform(this._timeouts),
    };
  }
}
