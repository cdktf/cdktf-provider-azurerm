// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualMachineScaleSetExtensionAConfig extends TerraformMetaArguments {
  readonly autoUpgradeMinorVersion?: boolean;
  readonly forceUpdateTag?: string;
  readonly name: string;
  readonly protectedSettings?: string;
  readonly provisionAfterExtensions?: string[];
  readonly publisher: string;
  readonly settings?: string;
  readonly type: string;
  readonly typeHandlerVersion: string;
  readonly virtualMachineScaleSetId: string;
  /** timeouts block */
  readonly timeouts?: VirtualMachineScaleSetExtensionTimeouts;
}
export interface VirtualMachineScaleSetExtensionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualMachineScaleSetExtensionA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualMachineScaleSetExtensionAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_scale_set_extension',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._forceUpdateTag = config.forceUpdateTag;
    this._name = config.name;
    this._protectedSettings = config.protectedSettings;
    this._provisionAfterExtensions = config.provisionAfterExtensions;
    this._publisher = config.publisher;
    this._settings = config.settings;
    this._type = config.type;
    this._typeHandlerVersion = config.typeHandlerVersion;
    this._virtualMachineScaleSetId = config.virtualMachineScaleSetId;
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

  // force_update_tag - computed: false, optional: true, required: false
  private _forceUpdateTag?: string;
  public get forceUpdateTag() {
    return this._forceUpdateTag;
  }
  public set forceUpdateTag(value: string | undefined) {
    this._forceUpdateTag = value;
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

  // provision_after_extensions - computed: false, optional: true, required: false
  private _provisionAfterExtensions?: string[];
  public get provisionAfterExtensions() {
    return this._provisionAfterExtensions;
  }
  public set provisionAfterExtensions(value: string[] | undefined) {
    this._provisionAfterExtensions = value;
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

  // virtual_machine_scale_set_id - computed: false, optional: false, required: true
  private _virtualMachineScaleSetId: string;
  public get virtualMachineScaleSetId() {
    return this._virtualMachineScaleSetId;
  }
  public set virtualMachineScaleSetId(value: string) {
    this._virtualMachineScaleSetId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineScaleSetExtensionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VirtualMachineScaleSetExtensionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_upgrade_minor_version: this._autoUpgradeMinorVersion,
      force_update_tag: this._forceUpdateTag,
      name: this._name,
      protected_settings: this._protectedSettings,
      provision_after_extensions: this._provisionAfterExtensions,
      publisher: this._publisher,
      settings: this._settings,
      type: this._type,
      type_handler_version: this._typeHandlerVersion,
      virtual_machine_scale_set_id: this._virtualMachineScaleSetId,
      timeouts: this._timeouts,
    };
  }
}
