// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#expire_after KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#expire_after}
  */
  readonly expireAfter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#managed_hsm_key_id KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#managed_hsm_key_id}
  */
  readonly managedHsmKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_after_creation KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_after_creation}
  */
  readonly timeAfterCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#time_before_expiry KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#time_before_expiry}
  */
  readonly timeBeforeExpiry?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#timeouts KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#timeouts}
  */
  readonly timeouts?: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts;
}
export interface KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#create KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#delete KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#read KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#update KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy#update}
  */
  readonly update?: string;
}

export function keyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsToTerraform(struct?: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts | cdktf.IResolvable): any {
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


export function keyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsToHclTerraform(struct?: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy azurerm_key_vault_managed_hardware_security_module_key_rotation_policy}
*/
export class KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_managed_hardware_security_module_key_rotation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy to import
  * @param importFromId The id of the existing KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleKeyRotationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault_managed_hardware_security_module_key_rotation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key_rotation_policy azurerm_key_vault_managed_hardware_security_module_key_rotation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_managed_hardware_security_module_key_rotation_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expireAfter = config.expireAfter;
    this._id = config.id;
    this._managedHsmKeyId = config.managedHsmKeyId;
    this._timeAfterCreation = config.timeAfterCreation;
    this._timeBeforeExpiry = config.timeBeforeExpiry;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expire_after - computed: false, optional: false, required: true
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
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

  // managed_hsm_key_id - computed: false, optional: false, required: true
  private _managedHsmKeyId?: string; 
  public get managedHsmKeyId() {
    return this.getStringAttribute('managed_hsm_key_id');
  }
  public set managedHsmKeyId(value: string) {
    this._managedHsmKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedHsmKeyIdInput() {
    return this._managedHsmKeyId;
  }

  // time_after_creation - computed: false, optional: true, required: false
  private _timeAfterCreation?: string; 
  public get timeAfterCreation() {
    return this.getStringAttribute('time_after_creation');
  }
  public set timeAfterCreation(value: string) {
    this._timeAfterCreation = value;
  }
  public resetTimeAfterCreation() {
    this._timeAfterCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAfterCreationInput() {
    return this._timeAfterCreation;
  }

  // time_before_expiry - computed: false, optional: true, required: false
  private _timeBeforeExpiry?: string; 
  public get timeBeforeExpiry() {
    return this.getStringAttribute('time_before_expiry');
  }
  public set timeBeforeExpiry(value: string) {
    this._timeBeforeExpiry = value;
  }
  public resetTimeBeforeExpiry() {
    this._timeBeforeExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBeforeExpiryInput() {
    return this._timeBeforeExpiry;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts) {
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
      expire_after: cdktf.stringToTerraform(this._expireAfter),
      id: cdktf.stringToTerraform(this._id),
      managed_hsm_key_id: cdktf.stringToTerraform(this._managedHsmKeyId),
      time_after_creation: cdktf.stringToTerraform(this._timeAfterCreation),
      time_before_expiry: cdktf.stringToTerraform(this._timeBeforeExpiry),
      timeouts: keyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expire_after: {
        value: cdktf.stringToHclTerraform(this._expireAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_hsm_key_id: {
        value: cdktf.stringToHclTerraform(this._managedHsmKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_after_creation: {
        value: cdktf.stringToHclTerraform(this._timeAfterCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_before_expiry: {
        value: cdktf.stringToHclTerraform(this._timeBeforeExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: keyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyVaultManagedHardwareSecurityModuleKeyRotationPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
