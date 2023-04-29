// https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#id LogicAppIntegrationAccountCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#integration_account_name LogicAppIntegrationAccountCertificate#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#metadata LogicAppIntegrationAccountCertificate#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#name LogicAppIntegrationAccountCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#public_certificate LogicAppIntegrationAccountCertificate#public_certificate}
  */
  readonly publicCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#resource_group_name LogicAppIntegrationAccountCertificate#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * key_vault_key block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#key_vault_key LogicAppIntegrationAccountCertificate#key_vault_key}
  */
  readonly keyVaultKey?: LogicAppIntegrationAccountCertificateKeyVaultKey;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#timeouts LogicAppIntegrationAccountCertificate#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountCertificateTimeouts;
}
export interface LogicAppIntegrationAccountCertificateKeyVaultKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#key_name LogicAppIntegrationAccountCertificate#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#key_vault_id LogicAppIntegrationAccountCertificate#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#key_version LogicAppIntegrationAccountCertificate#key_version}
  */
  readonly keyVersion?: string;
}

export function logicAppIntegrationAccountCertificateKeyVaultKeyToTerraform(struct?: LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference | LogicAppIntegrationAccountCertificateKeyVaultKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    key_version: cdktf.stringToTerraform(struct!.keyVersion),
  }
}

export class LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogicAppIntegrationAccountCertificateKeyVaultKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._keyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVersion = this._keyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicAppIntegrationAccountCertificateKeyVaultKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._keyVaultId = undefined;
      this._keyVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._keyVaultId = value.keyVaultId;
      this._keyVersion = value.keyVersion;
    }
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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

  // key_version - computed: false, optional: true, required: false
  private _keyVersion?: string; 
  public get keyVersion() {
    return this.getStringAttribute('key_version');
  }
  public set keyVersion(value: string) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
  }
}
export interface LogicAppIntegrationAccountCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#create LogicAppIntegrationAccountCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#delete LogicAppIntegrationAccountCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#read LogicAppIntegrationAccountCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate#update LogicAppIntegrationAccountCertificate#update}
  */
  readonly update?: string;
}

export function logicAppIntegrationAccountCertificateTimeoutsToTerraform(struct?: LogicAppIntegrationAccountCertificateTimeouts | cdktf.IResolvable): any {
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

export class LogicAppIntegrationAccountCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicAppIntegrationAccountCertificateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicAppIntegrationAccountCertificateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate azurerm_logic_app_integration_account_certificate}
*/
export class LogicAppIntegrationAccountCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_logic_app_integration_account_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/logic_app_integration_account_certificate azurerm_logic_app_integration_account_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_certificate',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.54.0',
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
    this._id = config.id;
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._publicCertificate = config.publicCertificate;
    this._resourceGroupName = config.resourceGroupName;
    this._keyVaultKey.internalValue = config.keyVaultKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // integration_account_name - computed: false, optional: false, required: true
  private _integrationAccountName?: string; 
  public get integrationAccountName() {
    return this.getStringAttribute('integration_account_name');
  }
  public set integrationAccountName(value: string) {
    this._integrationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationAccountNameInput() {
    return this._integrationAccountName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // public_certificate - computed: false, optional: true, required: false
  private _publicCertificate?: string; 
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string) {
    this._publicCertificate = value;
  }
  public resetPublicCertificate() {
    this._publicCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // key_vault_key - computed: false, optional: true, required: false
  private _keyVaultKey = new LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference(this, "key_vault_key");
  public get keyVaultKey() {
    return this._keyVaultKey;
  }
  public putKeyVaultKey(value: LogicAppIntegrationAccountCertificateKeyVaultKey) {
    this._keyVaultKey.internalValue = value;
  }
  public resetKeyVaultKey() {
    this._keyVaultKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyInput() {
    return this._keyVaultKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogicAppIntegrationAccountCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogicAppIntegrationAccountCertificateTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      key_vault_key: logicAppIntegrationAccountCertificateKeyVaultKeyToTerraform(this._keyVaultKey.internalValue),
      timeouts: logicAppIntegrationAccountCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
