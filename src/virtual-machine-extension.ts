// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualMachineExtensionConfig extends TerraformMetaArguments {
  readonly autoUpgradeMinorVersion?: boolean;
  readonly name: string;
  readonly protectedSettings?: string;
  readonly publisher: string;
  readonly settings?: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  readonly typeHandlerVersion: string;
  readonly virtualMachineId: string;
  /** timeouts block */
  readonly timeouts?: VirtualMachineExtensionTimeouts;
}
export interface VirtualMachineExtensionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualMachineExtension extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualMachineExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_extension',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._name = config.name;
    this._protectedSettings = config.protectedSettings;
    this._publisher = config.publisher;
    this._settings = config.settings;
    this._tags = config.tags;
    this._type = config.type;
    this._typeHandlerVersion = config.typeHandlerVersion;
    this._virtualMachineId = config.virtualMachineId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_upgrade_minor_version - computed: false, optional: true, required: false
  private _autoUpgradeMinorVersion?: boolean;
  public get autoUpgradeMinorVersion() {
    return this._autoUpgradeMinorVersion;
  }
  public set autoUpgradeMinorVersion(value: boolean | undefined) {
    this._autoUpgradeMinorVersion = value;
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

  // protected_settings - computed: false, optional: true, required: false
  private _protectedSettings?: string;
  public get protectedSettings() {
    return this._protectedSettings;
  }
  public set protectedSettings(value: string | undefined) {
    this._protectedSettings = value;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher: string;
  public get publisher() {
    return this._publisher;
  }
  public set publisher(value: string) {
    this._publisher = value;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string;
  public get settings() {
    return this._settings;
  }
  public set settings(value: string | undefined) {
    this._settings = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // type_handler_version - computed: false, optional: false, required: true
  private _typeHandlerVersion: string;
  public get typeHandlerVersion() {
    return this._typeHandlerVersion;
  }
  public set typeHandlerVersion(value: string) {
    this._typeHandlerVersion = value;
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this._virtualMachineId;
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineExtensionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualMachineExtensionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_upgrade_minor_version: this._autoUpgradeMinorVersion,
      name: this._name,
      protected_settings: this._protectedSettings,
      publisher: this._publisher,
      settings: this._settings,
      tags: this._tags,
      type: this._type,
      type_handler_version: this._typeHandlerVersion,
      virtual_machine_id: this._virtualMachineId,
      timeouts: this._timeouts,
    };
  }
}
