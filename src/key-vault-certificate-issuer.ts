// https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultCertificateIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#account_id KeyVaultCertificateIssuer#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#key_vault_id KeyVaultCertificateIssuer#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#name KeyVaultCertificateIssuer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#org_id KeyVaultCertificateIssuer#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#password KeyVaultCertificateIssuer#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#provider_name KeyVaultCertificateIssuer#provider_name}
  */
  readonly providerName: string;
  /**
  * admin block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#admin KeyVaultCertificateIssuer#admin}
  */
  readonly admin?: KeyVaultCertificateIssuerAdmin[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#timeouts KeyVaultCertificateIssuer#timeouts}
  */
  readonly timeouts?: KeyVaultCertificateIssuerTimeouts;
}
export interface KeyVaultCertificateIssuerAdmin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#email_address KeyVaultCertificateIssuer#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#first_name KeyVaultCertificateIssuer#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#last_name KeyVaultCertificateIssuer#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#phone KeyVaultCertificateIssuer#phone}
  */
  readonly phone?: string;
}

function keyVaultCertificateIssuerAdminToTerraform(struct?: KeyVaultCertificateIssuerAdmin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface KeyVaultCertificateIssuerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#create KeyVaultCertificateIssuer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#delete KeyVaultCertificateIssuer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#read KeyVaultCertificateIssuer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html#update KeyVaultCertificateIssuer#update}
  */
  readonly update?: string;
}

function keyVaultCertificateIssuerTimeoutsToTerraform(struct?: KeyVaultCertificateIssuerTimeoutsOutputReference | KeyVaultCertificateIssuerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class KeyVaultCertificateIssuerTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html azurerm_key_vault_certificate_issuer}
*/
export class KeyVaultCertificateIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_certificate_issuer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_certificate_issuer.html azurerm_key_vault_certificate_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultCertificateIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultCertificateIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate_issuer',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._orgId = config.orgId;
    this._password = config.password;
    this._providerName = config.providerName;
    this._admin = config.admin;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string | undefined; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._keyVaultId
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
    return this._name
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string | undefined; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string | undefined) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
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
    return this._providerName
  }

  // admin - computed: false, optional: true, required: false
  private _admin?: KeyVaultCertificateIssuerAdmin[] | undefined; 
  public get admin() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('admin') as any;
  }
  public set admin(value: KeyVaultCertificateIssuerAdmin[] | undefined) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultCertificateIssuerTimeouts | undefined; 
  private __timeoutsOutput = new KeyVaultCertificateIssuerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KeyVaultCertificateIssuerTimeouts | undefined) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      password: cdktf.stringToTerraform(this._password),
      provider_name: cdktf.stringToTerraform(this._providerName),
      admin: cdktf.listMapper(keyVaultCertificateIssuerAdminToTerraform)(this._admin),
      timeouts: keyVaultCertificateIssuerTimeoutsToTerraform(this._timeouts),
    };
  }
}
