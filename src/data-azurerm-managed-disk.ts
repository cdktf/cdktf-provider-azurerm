// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_managed_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermManagedDiskConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly zones?: string[];
  /** timeouts block */
  readonly timeouts?: DataAzurermManagedDiskTimeouts;
}
export interface DataAzurermManagedDiskTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermManagedDisk extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermManagedDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_managed_disk',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._zones = config.zones;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_option - computed: true, optional: false, required: true
  public get createOption() {
    return this.getStringAttribute('create_option');
  }

  // disk_encryption_set_id - computed: true, optional: false, required: true
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }

  // disk_iops_read_write - computed: true, optional: false, required: true
  public get diskIopsReadWrite() {
    return this.getNumberAttribute('disk_iops_read_write');
  }

  // disk_mbps_read_write - computed: true, optional: false, required: true
  public get diskMbpsReadWrite() {
    return this.getNumberAttribute('disk_mbps_read_write');
  }

  // disk_size_gb - computed: true, optional: false, required: true
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // os_type - computed: true, optional: false, required: true
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // source_resource_id - computed: true, optional: false, required: true
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }

  // source_uri - computed: true, optional: false, required: true
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }

  // storage_account_id - computed: true, optional: false, required: true
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }

  // storage_account_type - computed: true, optional: false, required: true
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones ?? this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermManagedDiskTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermManagedDiskTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      zones: this._zones,
      timeouts: this._timeouts,
    };
  }
}
