// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultCertificateIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}
  */
  readonly providerName: string;
  /**
  * admin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#admin KeyVaultCertificateIssuer#admin}
  */
  readonly admin?: KeyVaultCertificateIssuerAdmin[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#timeouts KeyVaultCertificateIssuer#timeouts}
  */
  readonly timeouts?: KeyVaultCertificateIssuerTimeouts;
}
export interface KeyVaultCertificateIssuerAdmin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#email_address KeyVaultCertificateIssuer#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#first_name KeyVaultCertificateIssuer#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#last_name KeyVaultCertificateIssuer#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#phone KeyVaultCertificateIssuer#phone}
  */
  readonly phone?: string;
}

export function keyVaultCertificateIssuerAdminToTerraform(struct?: KeyVaultCertificateIssuerAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}


export function keyVaultCertificateIssuerAdminToHclTerraform(struct?: KeyVaultCertificateIssuerAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyVaultCertificateIssuerAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KeyVaultCertificateIssuerAdmin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyVaultCertificateIssuerAdmin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._phone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._phone = value.phone;
    }
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }
}

export class KeyVaultCertificateIssuerAdminList extends cdktf.ComplexList {
  public internalValue? : KeyVaultCertificateIssuerAdmin[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): KeyVaultCertificateIssuerAdminOutputReference {
    return new KeyVaultCertificateIssuerAdminOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeyVaultCertificateIssuerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#create KeyVaultCertificateIssuer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#delete KeyVaultCertificateIssuer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#read KeyVaultCertificateIssuer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#update KeyVaultCertificateIssuer#update}
  */
  readonly update?: string;
}

export function keyVaultCertificateIssuerTimeoutsToTerraform(struct?: KeyVaultCertificateIssuerTimeouts | cdktf.IResolvable): any {
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


export function keyVaultCertificateIssuerTimeoutsToHclTerraform(struct?: KeyVaultCertificateIssuerTimeouts | cdktf.IResolvable): any {
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

export class KeyVaultCertificateIssuerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyVaultCertificateIssuerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeyVaultCertificateIssuerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer azurerm_key_vault_certificate_issuer}
*/
export class KeyVaultCertificateIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_certificate_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyVaultCertificateIssuer to import
  * @param importFromId The id of the existing KeyVaultCertificateIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyVaultCertificateIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault_certificate_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/key_vault_certificate_issuer azurerm_key_vault_certificate_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultCertificateIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultCertificateIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate_issuer',
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
    this._accountId = config.accountId;
    this._id = config.id;
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._orgId = config.orgId;
    this._password = config.password;
    this._providerName = config.providerName;
    this._admin.internalValue = config.admin;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // admin - computed: false, optional: true, required: false
  private _admin = new KeyVaultCertificateIssuerAdminList(this, "admin", false);
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: KeyVaultCertificateIssuerAdmin[] | cdktf.IResolvable) {
    this._admin.internalValue = value;
  }
  public resetAdmin() {
    this._admin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyVaultCertificateIssuerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyVaultCertificateIssuerTimeouts) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      password: cdktf.stringToTerraform(this._password),
      provider_name: cdktf.stringToTerraform(this._providerName),
      admin: cdktf.listMapper(keyVaultCertificateIssuerAdminToTerraform, true)(this._admin.internalValue),
      timeouts: keyVaultCertificateIssuerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin: {
        value: cdktf.listMapperHcl(keyVaultCertificateIssuerAdminToHclTerraform, true)(this._admin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyVaultCertificateIssuerAdminList",
      },
      timeouts: {
        value: keyVaultCertificateIssuerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyVaultCertificateIssuerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
