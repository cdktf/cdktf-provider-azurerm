// https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultCertificateDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html#key_vault_id DataAzurermKeyVaultCertificateData#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html#name DataAzurermKeyVaultCertificateData#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html#version DataAzurermKeyVaultCertificateData#version}
  */
  readonly version?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html#timeouts DataAzurermKeyVaultCertificateData#timeouts}
  */
  readonly timeouts?: DataAzurermKeyVaultCertificateDataTimeouts;
}
export interface DataAzurermKeyVaultCertificateDataTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html#read DataAzurermKeyVaultCertificateData#read}
  */
  readonly read?: string;
}

function dataAzurermKeyVaultCertificateDataTimeoutsToTerraform(struct?: DataAzurermKeyVaultCertificateDataTimeoutsOutputReference | DataAzurermKeyVaultCertificateDataTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKeyVaultCertificateDataTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html azurerm_key_vault_certificate_data}
*/
export class DataAzurermKeyVaultCertificateData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_certificate_data";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_certificate_data.html azurerm_key_vault_certificate_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKeyVaultCertificateDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultCertificateDataConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_certificate_data',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._name = config.name;
    this._version = config.version;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates_count - computed: true, optional: false, required: false
  public get certificatesCount() {
    return this.getNumberAttribute('certificates_count');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // hex - computed: true, optional: false, required: false
  public get hex() {
    return this.getStringAttribute('hex');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // pem - computed: true, optional: false, required: false
  public get pem() {
    return this.getStringAttribute('pem');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultCertificateDataTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermKeyVaultCertificateDataTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermKeyVaultCertificateDataTimeouts | undefined) {
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
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
      timeouts: dataAzurermKeyVaultCertificateDataTimeoutsToTerraform(this._timeouts),
    };
  }
}
