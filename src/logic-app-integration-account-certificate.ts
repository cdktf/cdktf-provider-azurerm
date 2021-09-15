// https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#integration_account_name LogicAppIntegrationAccountCertificate#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#metadata LogicAppIntegrationAccountCertificate#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#name LogicAppIntegrationAccountCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#public_certificate LogicAppIntegrationAccountCertificate#public_certificate}
  */
  readonly publicCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#resource_group_name LogicAppIntegrationAccountCertificate#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * key_vault_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#key_vault_key LogicAppIntegrationAccountCertificate#key_vault_key}
  */
  readonly keyVaultKey?: LogicAppIntegrationAccountCertificateKeyVaultKey[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#timeouts LogicAppIntegrationAccountCertificate#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountCertificateTimeouts;
}
export interface LogicAppIntegrationAccountCertificateKeyVaultKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#key_name LogicAppIntegrationAccountCertificate#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#key_vault_id LogicAppIntegrationAccountCertificate#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#key_version LogicAppIntegrationAccountCertificate#key_version}
  */
  readonly keyVersion?: string;
}

function logicAppIntegrationAccountCertificateKeyVaultKeyToTerraform(struct?: LogicAppIntegrationAccountCertificateKeyVaultKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    key_version: cdktf.stringToTerraform(struct!.keyVersion),
  }
}

export interface LogicAppIntegrationAccountCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#create LogicAppIntegrationAccountCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#delete LogicAppIntegrationAccountCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#read LogicAppIntegrationAccountCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html#update LogicAppIntegrationAccountCertificate#update}
  */
  readonly update?: string;
}

function logicAppIntegrationAccountCertificateTimeoutsToTerraform(struct?: LogicAppIntegrationAccountCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html azurerm_logic_app_integration_account_certificate}
*/
export class LogicAppIntegrationAccountCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_integration_account_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_certificate.html azurerm_logic_app_integration_account_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._publicCertificate = config.publicCertificate;
    this._resourceGroupName = config.resourceGroupName;
    this._keyVaultKey = config.keyVaultKey;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_account_name - computed: false, optional: false, required: true
  private _integrationAccountName: string;
  public get integrationAccountName() {
    return this.getStringAttribute('integration_account_name');
  }
  public set integrationAccountName(value: string) {
    this._integrationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationAccountNameInput() {
    return this._integrationAccountName
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string;
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // public_certificate - computed: false, optional: true, required: false
  private _publicCertificate?: string;
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string ) {
    this._publicCertificate = value;
  }
  public resetPublicCertificate() {
    this._publicCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // key_vault_key - computed: false, optional: true, required: false
  private _keyVaultKey?: LogicAppIntegrationAccountCertificateKeyVaultKey[];
  public get keyVaultKey() {
    return this.interpolationForAttribute('key_vault_key') as any;
  }
  public set keyVaultKey(value: LogicAppIntegrationAccountCertificateKeyVaultKey[] ) {
    this._keyVaultKey = value;
  }
  public resetKeyVaultKey() {
    this._keyVaultKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyInput() {
    return this._keyVaultKey
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppIntegrationAccountCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppIntegrationAccountCertificateTimeouts ) {
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
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      key_vault_key: cdktf.listMapper(logicAppIntegrationAccountCertificateKeyVaultKeyToTerraform)(this._keyVaultKey),
      timeouts: logicAppIntegrationAccountCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
