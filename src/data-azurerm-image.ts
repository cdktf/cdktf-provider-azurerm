// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermImageConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly nameRegex?: string;
  readonly resourceGroupName: string;
  readonly sortDescending?: boolean;
  /** timeouts block */
  readonly timeouts?: DataAzurermImageTimeouts;
}
export class DataAzurermImageDataDisk extends ComplexComputedList {

  // blob_uri - computed: true, optional: false, required: true
  public get blobUri() {
    return this.getStringAttribute('blob_uri');
  }

  // caching - computed: true, optional: false, required: true
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // lun - computed: true, optional: false, required: true
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // managed_disk_id - computed: true, optional: false, required: true
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }

  // size_gb - computed: true, optional: false, required: true
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}
export class DataAzurermImageOsDisk extends ComplexComputedList {

  // blob_uri - computed: true, optional: false, required: true
  public get blobUri() {
    return this.getStringAttribute('blob_uri');
  }

  // caching - computed: true, optional: false, required: true
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // managed_disk_id - computed: true, optional: false, required: true
  public get managedDiskId() {
    return this.getStringAttribute('managed_disk_id');
  }

  // os_state - computed: true, optional: false, required: true
  public get osState() {
    return this.getStringAttribute('os_state');
  }

  // os_type - computed: true, optional: false, required: true
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // size_gb - computed: true, optional: false, required: true
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}
export interface DataAzurermImageTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermImage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermImageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_image',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._resourceGroupName = config.resourceGroupName;
    this._sortDescending = config.sortDescending;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_disk - computed: true, optional: false, required: true
  public dataDisk(index: string) {
    return new DataAzurermImageDataDisk(this, 'data_disk', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string;
  public get nameRegex() {
    return this._nameRegex;
  }
  public set nameRegex(value: string | undefined) {
    this._nameRegex = value;
  }

  // os_disk - computed: true, optional: false, required: true
  public osDisk(index: string) {
    return new DataAzurermImageOsDisk(this, 'os_disk', index);
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // sort_descending - computed: false, optional: true, required: false
  private _sortDescending?: boolean;
  public get sortDescending() {
    return this._sortDescending;
  }
  public set sortDescending(value: boolean | undefined) {
    this._sortDescending = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // zone_resilient - computed: true, optional: false, required: true
  public get zoneResilient() {
    return this.getBooleanAttribute('zone_resilient');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermImageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermImageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      name_regex: this._nameRegex,
      resource_group_name: this._resourceGroupName,
      sort_descending: this._sortDescending,
      timeouts: this._timeouts,
    };
  }
}
