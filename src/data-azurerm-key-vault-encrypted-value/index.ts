// https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultEncryptedValueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value#algorithm DataAzurermKeyVaultEncryptedValue#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value#encrypted_data DataAzurermKeyVaultEncryptedValue#encrypted_data}
  */
  readonly encryptedData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value#id DataAzurermKeyVaultEncryptedValue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value#key_vault_key_id DataAzurermKeyVaultEncryptedValue#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value#plain_text_value DataAzurermKeyVaultEncryptedValue#plain_text_value}
  */
  readonly plainTextValue?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value#timeouts DataAzurermKeyVaultEncryptedValue#timeouts}
  */
  readonly timeouts?: DataAzurermKeyVaultEncryptedValueTimeouts;
}
export interface DataAzurermKeyVaultEncryptedValueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value#read DataAzurermKeyVaultEncryptedValue#read}
  */
  readonly read?: string;
}

export function dataAzurermKeyVaultEncryptedValueTimeoutsToTerraform(struct?: DataAzurermKeyVaultEncryptedValueTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermKeyVaultEncryptedValueTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKeyVaultEncryptedValueTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value azurerm_key_vault_encrypted_value}
*/
export class DataAzurermKeyVaultEncryptedValue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_encrypted_value";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/key_vault_encrypted_value azurerm_key_vault_encrypted_value} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKeyVaultEncryptedValueConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultEncryptedValueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_encrypted_value',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.55.0',
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
    this._algorithm = config.algorithm;
    this._encryptedData = config.encryptedData;
    this._id = config.id;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._plainTextValue = config.plainTextValue;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // encrypted_data - computed: false, optional: true, required: false
  private _encryptedData?: string; 
  public get encryptedData() {
    return this.getStringAttribute('encrypted_data');
  }
  public set encryptedData(value: string) {
    this._encryptedData = value;
  }
  public resetEncryptedData() {
    this._encryptedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedDataInput() {
    return this._encryptedData;
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

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // plain_text_value - computed: false, optional: true, required: false
  private _plainTextValue?: string; 
  public get plainTextValue() {
    return this.getStringAttribute('plain_text_value');
  }
  public set plainTextValue(value: string) {
    this._plainTextValue = value;
  }
  public resetPlainTextValue() {
    this._plainTextValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextValueInput() {
    return this._plainTextValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermKeyVaultEncryptedValueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermKeyVaultEncryptedValueTimeouts) {
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
      algorithm: cdktf.stringToTerraform(this._algorithm),
      encrypted_data: cdktf.stringToTerraform(this._encryptedData),
      id: cdktf.stringToTerraform(this._id),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      plain_text_value: cdktf.stringToTerraform(this._plainTextValue),
      timeouts: dataAzurermKeyVaultEncryptedValueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
