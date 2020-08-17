// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_data_disk_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualMachineDataDiskAttachmentConfig extends TerraformMetaArguments {
  readonly caching: string;
  readonly createOption?: string;
  readonly lun: number;
  readonly managedDiskId: string;
  readonly virtualMachineId: string;
  readonly writeAcceleratorEnabled?: boolean;
  /** timeouts block */
  readonly timeouts?: VirtualMachineDataDiskAttachmentTimeouts;
}
export interface VirtualMachineDataDiskAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualMachineDataDiskAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualMachineDataDiskAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_data_disk_attachment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._caching = config.caching;
    this._createOption = config.createOption;
    this._lun = config.lun;
    this._managedDiskId = config.managedDiskId;
    this._virtualMachineId = config.virtualMachineId;
    this._writeAcceleratorEnabled = config.writeAcceleratorEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caching - computed: false, optional: false, required: true
  private _caching: string;
  public get caching() {
    return this._caching;
  }
  public set caching(value: string) {
    this._caching = value;
  }

  // create_option - computed: false, optional: true, required: false
  private _createOption?: string;
  public get createOption() {
    return this._createOption;
  }
  public set createOption(value: string | undefined) {
    this._createOption = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lun - computed: false, optional: false, required: true
  private _lun: number;
  public get lun() {
    return this._lun;
  }
  public set lun(value: number) {
    this._lun = value;
  }

  // managed_disk_id - computed: false, optional: false, required: true
  private _managedDiskId: string;
  public get managedDiskId() {
    return this._managedDiskId;
  }
  public set managedDiskId(value: string) {
    this._managedDiskId = value;
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this._virtualMachineId;
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }

  // write_accelerator_enabled - computed: false, optional: true, required: false
  private _writeAcceleratorEnabled?: boolean;
  public get writeAcceleratorEnabled() {
    return this._writeAcceleratorEnabled;
  }
  public set writeAcceleratorEnabled(value: boolean | undefined) {
    this._writeAcceleratorEnabled = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineDataDiskAttachmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualMachineDataDiskAttachmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      caching: this._caching,
      create_option: this._createOption,
      lun: this._lun,
      managed_disk_id: this._managedDiskId,
      virtual_machine_id: this._virtualMachineId,
      write_accelerator_enabled: this._writeAcceleratorEnabled,
      timeouts: this._timeouts,
    };
  }
}
