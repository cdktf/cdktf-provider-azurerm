// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_images.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermImagesConfig extends cdktf.TerraformMetaArguments {
  readonly resourceGroupName: string;
  readonly tagsFilter?: { [key: string]: string };
  /** timeouts block */
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
    return this.interpolationForAttribute('os_disk') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // zone_resilient - computed: true, optional: false, required: false
  public get zoneResilient() {
    return this.getBooleanAttribute('zone_resilient');
  }
}
export interface DataAzurermImagesTimeouts {
  readonly read?: string;
}

function dataAzurermImagesTimeoutsToTerraform(struct?: DataAzurermImagesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermImages extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: { [key: string]: string };
  public get tagsFilter() {
    return this.interpolationForAttribute('tags_filter') as any;
  }
  public set tagsFilter(value: { [key: string]: string } ) {
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
  private _timeouts?: DataAzurermImagesTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermImagesTimeouts ) {
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
