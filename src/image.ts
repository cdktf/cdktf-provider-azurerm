// https://www.terraform.io/docs/providers/azurerm/r/image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
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

function imageDataDiskToTerraform(struct?: ImageDataDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob_uri: cdktf.stringToTerraform(struct!.blobUri),
    caching: cdktf.stringToTerraform(struct!.caching),
    lun: cdktf.numberToTerraform(struct!.lun),
    managed_disk_id: cdktf.stringToTerraform(struct!.managedDiskId),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}

export interface ImageOsDisk {
  readonly blobUri?: string;
  readonly caching?: string;
  readonly managedDiskId?: string;
  readonly osState?: string;
  readonly osType?: string;
  readonly sizeGb?: number;
}

function imageOsDiskToTerraform(struct?: ImageOsDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    blob_uri: cdktf.stringToTerraform(struct!.blobUri),
    caching: cdktf.stringToTerraform(struct!.caching),
    managed_disk_id: cdktf.stringToTerraform(struct!.managedDiskId),
    os_state: cdktf.stringToTerraform(struct!.osState),
    os_type: cdktf.stringToTerraform(struct!.osType),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}

export interface ImageTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function imageTimeoutsToTerraform(struct?: ImageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Image extends cdktf.TerraformResource {

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
    return this.getStringAttribute('hyper_v_generation');
  }
  public set hyperVGeneration(value: string ) {
    this._hyperVGeneration = value;
  }
  public resetHyperVGeneration() {
    this._hyperVGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperVGenerationInput() {
    return this._hyperVGeneration
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // source_virtual_machine_id - computed: false, optional: true, required: false
  private _sourceVirtualMachineId?: string;
  public get sourceVirtualMachineId() {
    return this.getStringAttribute('source_virtual_machine_id');
  }
  public set sourceVirtualMachineId(value: string ) {
    this._sourceVirtualMachineId = value;
  }
  public resetSourceVirtualMachineId() {
    this._sourceVirtualMachineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVirtualMachineIdInput() {
    return this._sourceVirtualMachineId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zone_resilient - computed: false, optional: true, required: false
  private _zoneResilient?: boolean;
  public get zoneResilient() {
    return this.getBooleanAttribute('zone_resilient');
  }
  public set zoneResilient(value: boolean ) {
    this._zoneResilient = value;
  }
  public resetZoneResilient() {
    this._zoneResilient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneResilientInput() {
    return this._zoneResilient
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: ImageDataDisk[];
  public get dataDisk() {
    return this.interpolationForAttribute('data_disk') as any;
  }
  public set dataDisk(value: ImageDataDisk[] ) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk
  }

  // os_disk - computed: false, optional: true, required: false
  private _osDisk?: ImageOsDisk[];
  public get osDisk() {
    return this.interpolationForAttribute('os_disk') as any;
  }
  public set osDisk(value: ImageOsDisk[] ) {
    this._osDisk = value;
  }
  public resetOsDisk() {
    this._osDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ImageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ImageTimeouts ) {
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
      hyper_v_generation: cdktf.stringToTerraform(this._hyperVGeneration),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_virtual_machine_id: cdktf.stringToTerraform(this._sourceVirtualMachineId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      zone_resilient: cdktf.booleanToTerraform(this._zoneResilient),
      data_disk: cdktf.listMapper(imageDataDiskToTerraform)(this._dataDisk),
      os_disk: cdktf.listMapper(imageOsDiskToTerraform)(this._osDisk),
      timeouts: imageTimeoutsToTerraform(this._timeouts),
    };
  }
}
