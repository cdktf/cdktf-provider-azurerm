// https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#auto_upgrade_minor_version VirtualMachineExtension#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#automatic_upgrade_enabled VirtualMachineExtension#automatic_upgrade_enabled}
  */
  readonly automaticUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#failure_suppression_enabled VirtualMachineExtension#failure_suppression_enabled}
  */
  readonly failureSuppressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#id VirtualMachineExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#name VirtualMachineExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#protected_settings VirtualMachineExtension#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#publisher VirtualMachineExtension#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#settings VirtualMachineExtension#settings}
  */
  readonly settings?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#tags VirtualMachineExtension#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#type VirtualMachineExtension#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#type_handler_version VirtualMachineExtension#type_handler_version}
  */
  readonly typeHandlerVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#virtual_machine_id VirtualMachineExtension#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * protected_settings_from_key_vault block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#protected_settings_from_key_vault VirtualMachineExtension#protected_settings_from_key_vault}
  */
  readonly protectedSettingsFromKeyVault?: VirtualMachineExtensionProtectedSettingsFromKeyVault;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#timeouts VirtualMachineExtension#timeouts}
  */
  readonly timeouts?: VirtualMachineExtensionTimeouts;
}
export interface VirtualMachineExtensionProtectedSettingsFromKeyVault {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#secret_url VirtualMachineExtension#secret_url}
  */
  readonly secretUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#source_vault_id VirtualMachineExtension#source_vault_id}
  */
  readonly sourceVaultId: string;
}

export function virtualMachineExtensionProtectedSettingsFromKeyVaultToTerraform(struct?: VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference | VirtualMachineExtensionProtectedSettingsFromKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
    source_vault_id: cdktf.stringToTerraform(struct!.sourceVaultId),
  }
}

export class VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineExtensionProtectedSettingsFromKeyVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUrl = this._secretUrl;
    }
    if (this._sourceVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVaultId = this._sourceVaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineExtensionProtectedSettingsFromKeyVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUrl = undefined;
      this._sourceVaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUrl = value.secretUrl;
      this._sourceVaultId = value.sourceVaultId;
    }
  }

  // secret_url - computed: false, optional: false, required: true
  private _secretUrl?: string; 
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }
  public set secretUrl(value: string) {
    this._secretUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUrlInput() {
    return this._secretUrl;
  }

  // source_vault_id - computed: false, optional: false, required: true
  private _sourceVaultId?: string; 
  public get sourceVaultId() {
    return this.getStringAttribute('source_vault_id');
  }
  public set sourceVaultId(value: string) {
    this._sourceVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVaultIdInput() {
    return this._sourceVaultId;
  }
}
export interface VirtualMachineExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#create VirtualMachineExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#delete VirtualMachineExtension#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#read VirtualMachineExtension#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension#update VirtualMachineExtension#update}
  */
  readonly update?: string;
}

export function virtualMachineExtensionTimeoutsToTerraform(struct?: VirtualMachineExtensionTimeoutsOutputReference | VirtualMachineExtensionTimeouts | cdktf.IResolvable): any {
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

export class VirtualMachineExtensionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualMachineExtensionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualMachineExtensionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension azurerm_virtual_machine_extension}
*/
export class VirtualMachineExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_virtual_machine_extension";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_machine_extension azurerm_virtual_machine_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_machine_extension',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.35.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._automaticUpgradeEnabled = config.automaticUpgradeEnabled;
    this._failureSuppressionEnabled = config.failureSuppressionEnabled;
    this._id = config.id;
    this._name = config.name;
    this._protectedSettings = config.protectedSettings;
    this._publisher = config.publisher;
    this._settings = config.settings;
    this._tags = config.tags;
    this._type = config.type;
    this._typeHandlerVersion = config.typeHandlerVersion;
    this._virtualMachineId = config.virtualMachineId;
    this._protectedSettingsFromKeyVault.internalValue = config.protectedSettingsFromKeyVault;
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

  // failure_suppression_enabled - computed: false, optional: true, required: false
  private _failureSuppressionEnabled?: boolean | cdktf.IResolvable; 
  public get failureSuppressionEnabled() {
    return this.getBooleanAttribute('failure_suppression_enabled');
  }
  public set failureSuppressionEnabled(value: boolean | cdktf.IResolvable) {
    this._failureSuppressionEnabled = value;
  }
  public resetFailureSuppressionEnabled() {
    this._failureSuppressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureSuppressionEnabledInput() {
    return this._failureSuppressionEnabled;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId?: string; 
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId;
  }

  // protected_settings_from_key_vault - computed: false, optional: true, required: false
  private _protectedSettingsFromKeyVault = new VirtualMachineExtensionProtectedSettingsFromKeyVaultOutputReference(this, "protected_settings_from_key_vault");
  public get protectedSettingsFromKeyVault() {
    return this._protectedSettingsFromKeyVault;
  }
  public putProtectedSettingsFromKeyVault(value: VirtualMachineExtensionProtectedSettingsFromKeyVault) {
    this._protectedSettingsFromKeyVault.internalValue = value;
  }
  public resetProtectedSettingsFromKeyVault() {
    this._protectedSettingsFromKeyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsFromKeyVaultInput() {
    return this._protectedSettingsFromKeyVault.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualMachineExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualMachineExtensionTimeouts) {
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
      failure_suppression_enabled: cdktf.booleanToTerraform(this._failureSuppressionEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protected_settings: cdktf.stringToTerraform(this._protectedSettings),
      publisher: cdktf.stringToTerraform(this._publisher),
      settings: cdktf.stringToTerraform(this._settings),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      type_handler_version: cdktf.stringToTerraform(this._typeHandlerVersion),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      protected_settings_from_key_vault: virtualMachineExtensionProtectedSettingsFromKeyVaultToTerraform(this._protectedSettingsFromKeyVault.internalValue),
      timeouts: virtualMachineExtensionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
