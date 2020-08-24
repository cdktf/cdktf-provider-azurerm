// https://www.terraform.io/docs/providers/azurerm/r/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ImageConfig extends TerraformMetaArguments {
  readonly hyperVGeneration?: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sourceVirtualMachineId?: string;
  readonly tags?: { [key: string]: string };
  readonly zoneResilient?: boolean;
  /** data_disk block */
  readonly dataDisk?: ImageDataDisk[];
  /** os_disk block */
  readonly osDisk?: ImageOsDisk[];
  /** timeouts block */
  readonly timeouts?: ImageTimeouts;
}
export interface ImageDataDisk {
  readonly blobUri?: string;
  readonly caching?: string;
  readonly lun?: number;
  readonly managedDiskId?: string;
  readonly sizeGb?: number;
}
export interface ImageOsDisk {
  readonly blobUri?: string;
  readonly caching?: string;
  readonly managedDiskId?: string;
  readonly osState?: string;
  readonly osType?: string;
  readonly sizeGb?: number;
}
export interface ImageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Image extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ImageConfig) {
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
    this._hyperVGeneration = config.hyperVGeneration;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceVirtualMachineId = config.sourceVirtualMachineId;
    this._tags = config.tags;
    this._zoneResilient = config.zoneResilient;
    this._dataDisk = config.dataDisk;
    this._osDisk = config.osDisk;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hyper_v_generation - computed: false, optional: true, required: false
  private _hyperVGeneration?: string;
  public get hyperVGeneration() {
    return this._hyperVGeneration;
  }
  public set hyperVGeneration(value: string | undefined) {
    this._hyperVGeneration = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
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

  // source_virtual_machine_id - computed: false, optional: true, required: false
  private _sourceVirtualMachineId?: string;
  public get sourceVirtualMachineId() {
    return this._sourceVirtualMachineId;
  }
  public set sourceVirtualMachineId(value: string | undefined) {
    this._sourceVirtualMachineId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // zone_resilient - computed: false, optional: true, required: false
  private _zoneResilient?: boolean;
  public get zoneResilient() {
    return this._zoneResilient;
  }
  public set zoneResilient(value: boolean | undefined) {
    this._zoneResilient = value;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: ImageDataDisk[];
  public get dataDisk() {
    return this._dataDisk;
  }
  public set dataDisk(value: ImageDataDisk[] | undefined) {
    this._dataDisk = value;
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk?: ImageOsDisk[];
  public get osDisk() {
    return this._osDisk;
  }
  public set osDisk(value: ImageOsDisk[] | undefined) {
    this._osDisk = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ImageTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ImageTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hyper_v_generation: this._hyperVGeneration,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      source_virtual_machine_id: this._sourceVirtualMachineId,
      tags: this._tags,
      zone_resilient: this._zoneResilient,
      data_disk: this._dataDisk,
      os_disk: this._osDisk,
      timeouts: this._timeouts,
    };
  }
}
