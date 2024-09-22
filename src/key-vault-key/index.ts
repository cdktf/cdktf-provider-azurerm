// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#curve KeyVaultKey#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#expiration_date KeyVaultKey#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#id KeyVaultKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#key_opts KeyVaultKey#key_opts}
  */
  readonly keyOpts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#key_size KeyVaultKey#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#key_type KeyVaultKey#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#key_vault_id KeyVaultKey#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#name KeyVaultKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#not_before_date KeyVaultKey#not_before_date}
  */
  readonly notBeforeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#tags KeyVaultKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rotation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#rotation_policy KeyVaultKey#rotation_policy}
  */
  readonly rotationPolicy?: KeyVaultKeyRotationPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#timeouts KeyVaultKey#timeouts}
  */
  readonly timeouts?: KeyVaultKeyTimeouts;
}
export interface KeyVaultKeyRotationPolicyAutomatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#time_after_creation KeyVaultKey#time_after_creation}
  */
  readonly timeAfterCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#time_before_expiry KeyVaultKey#time_before_expiry}
  */
  readonly timeBeforeExpiry?: string;
}

export function keyVaultKeyRotationPolicyAutomaticToTerraform(struct?: KeyVaultKeyRotationPolicyAutomaticOutputReference | KeyVaultKeyRotationPolicyAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_after_creation: cdktf.stringToTerraform(struct!.timeAfterCreation),
    time_before_expiry: cdktf.stringToTerraform(struct!.timeBeforeExpiry),
  }
}


export function keyVaultKeyRotationPolicyAutomaticToHclTerraform(struct?: KeyVaultKeyRotationPolicyAutomaticOutputReference | KeyVaultKeyRotationPolicyAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_after_creation: {
      value: cdktf.stringToHclTerraform(struct!.timeAfterCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_before_expiry: {
      value: cdktf.stringToHclTerraform(struct!.timeBeforeExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultKeyRotationPolicyAutomaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultKeyRotationPolicyAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeAfterCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAfterCreation = this._timeAfterCreation;
    }
    if (this._timeBeforeExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBeforeExpiry = this._timeBeforeExpiry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultKeyRotationPolicyAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeAfterCreation = undefined;
      this._timeBeforeExpiry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeAfterCreation = value.timeAfterCreation;
      this._timeBeforeExpiry = value.timeBeforeExpiry;
    }
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
}
export interface KeyVaultKeyRotationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#expire_after KeyVaultKey#expire_after}
  */
  readonly expireAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#notify_before_expiry KeyVaultKey#notify_before_expiry}
  */
  readonly notifyBeforeExpiry?: string;
  /**
  * automatic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#automatic KeyVaultKey#automatic}
  */
  readonly automatic?: KeyVaultKeyRotationPolicyAutomatic;
}

export function keyVaultKeyRotationPolicyToTerraform(struct?: KeyVaultKeyRotationPolicyOutputReference | KeyVaultKeyRotationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
    notify_before_expiry: cdktf.stringToTerraform(struct!.notifyBeforeExpiry),
    automatic: keyVaultKeyRotationPolicyAutomaticToTerraform(struct!.automatic),
  }
}


export function keyVaultKeyRotationPolicyToHclTerraform(struct?: KeyVaultKeyRotationPolicyOutputReference | KeyVaultKeyRotationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_before_expiry: {
      value: cdktf.stringToHclTerraform(struct!.notifyBeforeExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic: {
      value: keyVaultKeyRotationPolicyAutomaticToHclTerraform(struct!.automatic),
      isBlock: true,
      type: "list",
      storageClassType: "KeyVaultKeyRotationPolicyAutomaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultKeyRotationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyVaultKeyRotationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    if (this._notifyBeforeExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyBeforeExpiry = this._notifyBeforeExpiry;
    }
    if (this._automatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultKeyRotationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expireAfter = undefined;
      this._notifyBeforeExpiry = undefined;
      this._automatic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expireAfter = value.expireAfter;
      this._notifyBeforeExpiry = value.notifyBeforeExpiry;
      this._automatic.internalValue = value.automatic;
    }
  }

  // expire_after - computed: false, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }

  // notify_before_expiry - computed: false, optional: true, required: false
  private _notifyBeforeExpiry?: string; 
  public get notifyBeforeExpiry() {
    return this.getStringAttribute('notify_before_expiry');
  }
  public set notifyBeforeExpiry(value: string) {
    this._notifyBeforeExpiry = value;
  }
  public resetNotifyBeforeExpiry() {
    this._notifyBeforeExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyBeforeExpiryInput() {
    return this._notifyBeforeExpiry;
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic = new KeyVaultKeyRotationPolicyAutomaticOutputReference(this, "automatic");
  public get automatic() {
    return this._automatic;
  }
  public putAutomatic(value: KeyVaultKeyRotationPolicyAutomatic) {
    this._automatic.internalValue = value;
  }
  public resetAutomatic() {
    this._automatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic.internalValue;
  }
}
export interface KeyVaultKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#create KeyVaultKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#delete KeyVaultKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#read KeyVaultKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#update KeyVaultKey#update}
  */
  readonly update?: string;
}

export function keyVaultKeyTimeoutsToTerraform(struct?: KeyVaultKeyTimeouts | cdktf.IResolvable): any {
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


export function keyVaultKeyTimeoutsToHclTerraform(struct?: KeyVaultKeyTimeouts | cdktf.IResolvable): any {
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

export class KeyVaultKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyVaultKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeyVaultKeyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key azurerm_key_vault_key}
*/
export class KeyVaultKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyVaultKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyVaultKey to import
  * @param importFromId The id of the existing KeyVaultKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyVaultKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_key azurerm_key_vault_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_key',
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
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._notBeforeDate = config.notBeforeDate;
    this._tags = config.tags;
    this._rotationPolicy.internalValue = config.rotationPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // curve - computed: true, optional: true, required: false
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

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
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
    return this.getListAttribute('key_opts');
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

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
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

  // public_key_openssh - computed: true, optional: false, required: false
  public get publicKeyOpenssh() {
    return this.getStringAttribute('public_key_openssh');
  }

  // public_key_pem - computed: true, optional: false, required: false
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_versionless_id - computed: true, optional: false, required: false
  public get resourceVersionlessId() {
    return this.getStringAttribute('resource_versionless_id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // versionless_id - computed: true, optional: false, required: false
  public get versionlessId() {
    return this.getStringAttribute('versionless_id');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getStringAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getStringAttribute('y');
  }

  // rotation_policy - computed: false, optional: true, required: false
  private _rotationPolicy = new KeyVaultKeyRotationPolicyOutputReference(this, "rotation_policy");
  public get rotationPolicy() {
    return this._rotationPolicy;
  }
  public putRotationPolicy(value: KeyVaultKeyRotationPolicy) {
    this._rotationPolicy.internalValue = value;
  }
  public resetRotationPolicy() {
    this._rotationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPolicyInput() {
    return this._rotationPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultKeyTimeouts) {
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
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      not_before_date: cdktf.stringToTerraform(this._notBeforeDate),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      rotation_policy: keyVaultKeyRotationPolicyToTerraform(this._rotationPolicy.internalValue),
      timeouts: keyVaultKeyTimeoutsToTerraform(this._timeouts.internalValue),
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
        type: "list",
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
      key_vault_id: {
        value: cdktf.stringToHclTerraform(this._keyVaultId),
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
      rotation_policy: {
        value: keyVaultKeyRotationPolicyToHclTerraform(this._rotationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyVaultKeyRotationPolicyList",
      },
      timeouts: {
        value: keyVaultKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyVaultKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
