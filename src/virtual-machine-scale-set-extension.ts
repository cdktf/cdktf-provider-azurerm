// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineScaleSetExtensionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#auto_upgrade_minor_version VirtualMachineScaleSetExtensionA#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#automatic_upgrade_enabled VirtualMachineScaleSetExtensionA#automatic_upgrade_enabled}
  */
  readonly automaticUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#force_update_tag VirtualMachineScaleSetExtensionA#force_update_tag}
  */
  readonly forceUpdateTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#id VirtualMachineScaleSetExtensionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#name VirtualMachineScaleSetExtensionA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#protected_settings VirtualMachineScaleSetExtensionA#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#provision_after_extensions VirtualMachineScaleSetExtensionA#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#publisher VirtualMachineScaleSetExtensionA#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#settings VirtualMachineScaleSetExtensionA#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#type VirtualMachineScaleSetExtensionA#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#type_handler_version VirtualMachineScaleSetExtensionA#type_handler_version}
  */
  readonly typeHandlerVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#virtual_machine_scale_set_id VirtualMachineScaleSetExtensionA#virtual_machine_scale_set_id}
  */
  readonly virtualMachineScaleSetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#timeouts VirtualMachineScaleSetExtensionA#timeouts}
  */
  readonly timeouts?: VirtualMachineScaleSetExtensionTimeouts;
}
export interface VirtualMachineScaleSetExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#create VirtualMachineScaleSetExtensionA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#delete VirtualMachineScaleSetExtensionA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#read VirtualMachineScaleSetExtensionA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension#update VirtualMachineScaleSetExtensionA#update}
  */
  readonly update?: string;
}

export function virtualMachineScaleSetExtensionTimeoutsToTerraform(struct?: VirtualMachineScaleSetExtensionTimeoutsOutputReference | VirtualMachineScaleSetExtensionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VirtualMachineScaleSetExtensionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineScaleSetExtensionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineScaleSetExtensionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension azurerm_virtual_machine_scale_set_extension}
*/
export class VirtualMachineScaleSetExtensionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_machine_scale_set_extension";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_scale_set_extension azurerm_virtual_machine_scale_set_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineScaleSetExtensionAConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineScaleSetExtensionAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_scale_set_extension',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.11.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._automaticUpgradeEnabled = config.automaticUpgradeEnabled;
    this._forceUpdateTag = config.forceUpdateTag;
    this._id = config.id;
    this._name = config.name;
    this._protectedSettings = config.protectedSettings;
    this._provisionAfterExtensions = config.provisionAfterExtensions;
    this._publisher = config.publisher;
    this._settings = config.settings;
    this._type = config.type;
    this._typeHandlerVersion = config.typeHandlerVersion;
    this._virtualMachineScaleSetId = config.virtualMachineScaleSetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_upgrade_minor_version - computed: false, optional: true, required: false
  private _autoUpgradeMinorVersion?: boolean | cdktf.IResolvable; 
  public get autoUpgradeMinorVersion() {
    return this.getBooleanAttribute('auto_upgrade_minor_version');
  }
  public set autoUpgradeMinorVersion(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeMinorVersion = value;
  }
  public resetAutoUpgradeMinorVersion() {
    this._autoUpgradeMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeMinorVersionInput() {
    return this._autoUpgradeMinorVersion;
  }

  // automatic_upgrade_enabled - computed: false, optional: true, required: false
  private _automaticUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get automaticUpgradeEnabled() {
    return this.getBooleanAttribute('automatic_upgrade_enabled');
  }
  public set automaticUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._automaticUpgradeEnabled = value;
  }
  public resetAutomaticUpgradeEnabled() {
    this._automaticUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeEnabledInput() {
    return this._automaticUpgradeEnabled;
  }

  // force_update_tag - computed: false, optional: true, required: false
  private _forceUpdateTag?: string; 
  public get forceUpdateTag() {
    return this.getStringAttribute('force_update_tag');
  }
  public set forceUpdateTag(value: string) {
    this._forceUpdateTag = value;
  }
  public resetForceUpdateTag() {
    this._forceUpdateTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateTagInput() {
    return this._forceUpdateTag;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protected_settings - computed: false, optional: true, required: false
  private _protectedSettings?: string; 
  public get protectedSettings() {
    return this.getStringAttribute('protected_settings');
  }
  public set protectedSettings(value: string) {
    this._protectedSettings = value;
  }
  public resetProtectedSettings() {
    this._protectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsInput() {
    return this._protectedSettings;
  }

  // provision_after_extensions - computed: false, optional: true, required: false
  private _provisionAfterExtensions?: string[]; 
  public get provisionAfterExtensions() {
    return this.getListAttribute('provision_after_extensions');
  }
  public set provisionAfterExtensions(value: string[]) {
    this._provisionAfterExtensions = value;
  }
  public resetProvisionAfterExtensions() {
    this._provisionAfterExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionAfterExtensionsInput() {
    return this._provisionAfterExtensions;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_handler_version - computed: false, optional: false, required: true
  private _typeHandlerVersion?: string; 
  public get typeHandlerVersion() {
    return this.getStringAttribute('type_handler_version');
  }
  public set typeHandlerVersion(value: string) {
    this._typeHandlerVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHandlerVersionInput() {
    return this._typeHandlerVersion;
  }

  // virtual_machine_scale_set_id - computed: false, optional: false, required: true
  private _virtualMachineScaleSetId?: string; 
  public get virtualMachineScaleSetId() {
    return this.getStringAttribute('virtual_machine_scale_set_id');
  }
  public set virtualMachineScaleSetId(value: string) {
    this._virtualMachineScaleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineScaleSetIdInput() {
    return this._virtualMachineScaleSetId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineScaleSetExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineScaleSetExtensionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_upgrade_minor_version: cdktf.booleanToTerraform(this._autoUpgradeMinorVersion),
      automatic_upgrade_enabled: cdktf.booleanToTerraform(this._automaticUpgradeEnabled),
      force_update_tag: cdktf.stringToTerraform(this._forceUpdateTag),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protected_settings: cdktf.stringToTerraform(this._protectedSettings),
      provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform)(this._provisionAfterExtensions),
      publisher: cdktf.stringToTerraform(this._publisher),
      settings: cdktf.stringToTerraform(this._settings),
      type: cdktf.stringToTerraform(this._type),
      type_handler_version: cdktf.stringToTerraform(this._typeHandlerVersion),
      virtual_machine_scale_set_id: cdktf.stringToTerraform(this._virtualMachineScaleSetId),
      timeouts: virtualMachineScaleSetExtensionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
