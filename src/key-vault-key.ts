// https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#curve KeyVaultKey#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#expiration_date KeyVaultKey#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#key_opts KeyVaultKey#key_opts}
  */
  readonly keyOpts: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#key_size KeyVaultKey#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#key_type KeyVaultKey#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#key_vault_id KeyVaultKey#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#name KeyVaultKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#not_before_date KeyVaultKey#not_before_date}
  */
  readonly notBeforeDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#tags KeyVaultKey#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#timeouts KeyVaultKey#timeouts}
  */
  readonly timeouts?: KeyVaultKeyTimeouts;
}
export interface KeyVaultKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#create KeyVaultKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#delete KeyVaultKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#read KeyVaultKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html#update KeyVaultKey#update}
  */
  readonly update?: string;
}

function keyVaultKeyTimeoutsToTerraform(struct?: KeyVaultKeyTimeoutsOutputReference | KeyVaultKeyTimeouts): any {
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

export class KeyVaultKeyTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html azurerm_key_vault_key}
*/
export class KeyVaultKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_key.html azurerm_key_vault_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._curve = config.curve;
    this._expirationDate = config.expirationDate;
    this._keyOpts = config.keyOpts;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._notBeforeDate = config.notBeforeDate;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // curve - computed: true, optional: true, required: false
  private _curve?: string | undefined; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string | undefined) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string | undefined; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string | undefined) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._keyOpts
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number | undefined; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number | undefined) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize
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
    return this._keyType
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
    return this._name
  }

  // not_before_date - computed: false, optional: true, required: false
  private _notBeforeDate?: string | undefined; 
  public get notBeforeDate() {
    return this.getStringAttribute('not_before_date');
  }
  public set notBeforeDate(value: string | undefined) {
    this._notBeforeDate = value;
  }
  public resetNotBeforeDate() {
    this._notBeforeDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeDateInput() {
    return this._notBeforeDate
  }

  // public_key_openssh - computed: true, optional: false, required: false
  public get publicKeyOpenssh() {
    return this.getStringAttribute('public_key_openssh');
  }

  // public_key_pem - computed: true, optional: false, required: false
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultKeyTimeouts | undefined; 
  private __timeoutsOutput = new KeyVaultKeyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KeyVaultKeyTimeouts | undefined) {
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
      curve: cdktf.stringToTerraform(this._curve),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      key_opts: cdktf.listMapper(cdktf.stringToTerraform)(this._keyOpts),
      key_size: cdktf.numberToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      not_before_date: cdktf.stringToTerraform(this._notBeforeDate),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: keyVaultKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
