// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultManagedHardwareSecurityModuleKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#curve KeyVaultManagedHardwareSecurityModuleKey#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#expiration_date KeyVaultManagedHardwareSecurityModuleKey#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#id KeyVaultManagedHardwareSecurityModuleKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#key_opts KeyVaultManagedHardwareSecurityModuleKey#key_opts}
  */
  readonly keyOpts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#key_size KeyVaultManagedHardwareSecurityModuleKey#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#key_type KeyVaultManagedHardwareSecurityModuleKey#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#managed_hsm_id KeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}
  */
  readonly managedHsmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#name KeyVaultManagedHardwareSecurityModuleKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#not_before_date KeyVaultManagedHardwareSecurityModuleKey#not_before_date}
  */
  readonly notBeforeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#tags KeyVaultManagedHardwareSecurityModuleKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#timeouts KeyVaultManagedHardwareSecurityModuleKey#timeouts}
  */
  readonly timeouts?: KeyVaultManagedHardwareSecurityModuleKeyTimeouts;
}
export interface KeyVaultManagedHardwareSecurityModuleKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#create KeyVaultManagedHardwareSecurityModuleKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#delete KeyVaultManagedHardwareSecurityModuleKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#read KeyVaultManagedHardwareSecurityModuleKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#update KeyVaultManagedHardwareSecurityModuleKey#update}
  */
  readonly update?: string;
}

export function keyVaultManagedHardwareSecurityModuleKeyTimeoutsToTerraform(struct?: KeyVaultManagedHardwareSecurityModuleKeyTimeouts | cdktf.IResolvable): any {
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


export function keyVaultManagedHardwareSecurityModuleKeyTimeoutsToHclTerraform(struct?: KeyVaultManagedHardwareSecurityModuleKeyTimeouts | cdktf.IResolvable): any {
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

export class KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyVaultManagedHardwareSecurityModuleKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeyVaultManagedHardwareSecurityModuleKeyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key azurerm_key_vault_managed_hardware_security_module_key}
*/
export class KeyVaultManagedHardwareSecurityModuleKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_managed_hardware_security_module_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleKey to import
  * @param importFromId The id of the existing KeyVaultManagedHardwareSecurityModuleKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault_managed_hardware_security_module_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_managed_hardware_security_module_key azurerm_key_vault_managed_hardware_security_module_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultManagedHardwareSecurityModuleKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultManagedHardwareSecurityModuleKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_managed_hardware_security_module_key',
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
    this._curve = config.curve;
    this._expirationDate = config.expirationDate;
    this._id = config.id;
    this._keyOpts = config.keyOpts;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._managedHsmId = config.managedHsmId;
    this._name = config.name;
    this._notBeforeDate = config.notBeforeDate;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
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

  // key_opts - computed: false, optional: false, required: true
  private _keyOpts?: string[]; 
  public get keyOpts() {
    return cdktf.Fn.tolist(this.getListAttribute('key_opts'));
  }
  public set keyOpts(value: string[]) {
    this._keyOpts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOptsInput() {
    return this._keyOpts;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // managed_hsm_id - computed: false, optional: false, required: true
  private _managedHsmId?: string; 
  public get managedHsmId() {
    return this.getStringAttribute('managed_hsm_id');
  }
  public set managedHsmId(value: string) {
    this._managedHsmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedHsmIdInput() {
    return this._managedHsmId;
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

  // not_before_date - computed: false, optional: true, required: false
  private _notBeforeDate?: string; 
  public get notBeforeDate() {
    return this.getStringAttribute('not_before_date');
  }
  public set notBeforeDate(value: string) {
    this._notBeforeDate = value;
  }
  public resetNotBeforeDate() {
    this._notBeforeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeDateInput() {
    return this._notBeforeDate;
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

  // versioned_id - computed: true, optional: false, required: false
  public get versionedId() {
    return this.getStringAttribute('versioned_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultManagedHardwareSecurityModuleKeyTimeouts) {
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
      curve: cdktf.stringToTerraform(this._curve),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      id: cdktf.stringToTerraform(this._id),
      key_opts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyOpts),
      key_size: cdktf.numberToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      managed_hsm_id: cdktf.stringToTerraform(this._managedHsmId),
      name: cdktf.stringToTerraform(this._name),
      not_before_date: cdktf.stringToTerraform(this._notBeforeDate),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: keyVaultManagedHardwareSecurityModuleKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      curve: {
        value: cdktf.stringToHclTerraform(this._curve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
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
      key_opts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyOpts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_hsm_id: {
        value: cdktf.stringToHclTerraform(this._managedHsmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_before_date: {
        value: cdktf.stringToHclTerraform(this._notBeforeDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: keyVaultManagedHardwareSecurityModuleKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyVaultManagedHardwareSecurityModuleKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
