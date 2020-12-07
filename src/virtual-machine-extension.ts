// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineExtensionConfig extends cdktf.TerraformMetaArguments {
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

function virtualMachineExtensionTimeoutsToTerraform(struct?: VirtualMachineExtensionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class VirtualMachineExtension extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('auto_upgrade_minor_version');
  }
  public set autoUpgradeMinorVersion(value: boolean ) {
    this._autoUpgradeMinorVersion = value;
  }
  public resetAutoUpgradeMinorVersion() {
    this._autoUpgradeMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeMinorVersionInput() {
    return this._autoUpgradeMinorVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // protected_settings - computed: false, optional: true, required: false
  private _protectedSettings?: string;
  public get protectedSettings() {
    return this.getStringAttribute('protected_settings');
  }
  public set protectedSettings(value: string ) {
    this._protectedSettings = value;
  }
  public resetProtectedSettings() {
    this._protectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsInput() {
    return this._protectedSettings
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher: string;
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string;
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string ) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // type_handler_version - computed: false, optional: false, required: true
  private _typeHandlerVersion: string;
  public get typeHandlerVersion() {
    return this.getStringAttribute('type_handler_version');
  }
  public set typeHandlerVersion(value: string) {
    this._typeHandlerVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHandlerVersionInput() {
    return this._typeHandlerVersion
  }

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualMachineExtensionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualMachineExtensionTimeouts ) {
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
      auto_upgrade_minor_version: cdktf.booleanToTerraform(this._autoUpgradeMinorVersion),
      name: cdktf.stringToTerraform(this._name),
      protected_settings: cdktf.stringToTerraform(this._protectedSettings),
      publisher: cdktf.stringToTerraform(this._publisher),
      settings: cdktf.stringToTerraform(this._settings),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      type_handler_version: cdktf.stringToTerraform(this._typeHandlerVersion),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      timeouts: virtualMachineExtensionTimeoutsToTerraform(this._timeouts),
    };
  }
}
