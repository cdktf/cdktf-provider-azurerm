// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermNetappAccountEncryptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The versionless encryption key url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#encryption_key DataAzurermNetappAccountEncryption#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#id DataAzurermNetappAccountEncryption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the NetApp Account where encryption will be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#netapp_account_id DataAzurermNetappAccountEncryption#netapp_account_id}
  */
  readonly netappAccountId: string;
  /**
  * The Principal ID of the System Assigned Identity to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#system_assigned_identity_principal_id DataAzurermNetappAccountEncryption#system_assigned_identity_principal_id}
  */
  readonly systemAssignedIdentityPrincipalId?: string;
  /**
  * The resource ID of the User Assigned Identity to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#user_assigned_identity_id DataAzurermNetappAccountEncryption#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#timeouts DataAzurermNetappAccountEncryption#timeouts}
  */
  readonly timeouts?: DataAzurermNetappAccountEncryptionTimeouts;
}
export interface DataAzurermNetappAccountEncryptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#read DataAzurermNetappAccountEncryption#read}
  */
  readonly read?: string;
}

export function dataAzurermNetappAccountEncryptionTimeoutsToTerraform(struct?: DataAzurermNetappAccountEncryptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermNetappAccountEncryptionTimeoutsToHclTerraform(struct?: DataAzurermNetappAccountEncryptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermNetappAccountEncryptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermNetappAccountEncryptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermNetappAccountEncryptionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption azurerm_netapp_account_encryption}
*/
export class DataAzurermNetappAccountEncryption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_account_encryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermNetappAccountEncryption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermNetappAccountEncryption to import
  * @param importFromId The id of the existing DataAzurermNetappAccountEncryption that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermNetappAccountEncryption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_netapp_account_encryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/netapp_account_encryption azurerm_netapp_account_encryption} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermNetappAccountEncryptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermNetappAccountEncryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_account_encryption',
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
    this._encryptionKey = config.encryptionKey;
    this._id = config.id;
    this._netappAccountId = config.netappAccountId;
    this._systemAssignedIdentityPrincipalId = config.systemAssignedIdentityPrincipalId;
    this._userAssignedIdentityId = config.userAssignedIdentityId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
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

  // netapp_account_id - computed: false, optional: false, required: true
  private _netappAccountId?: string; 
  public get netappAccountId() {
    return this.getStringAttribute('netapp_account_id');
  }
  public set netappAccountId(value: string) {
    this._netappAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netappAccountIdInput() {
    return this._netappAccountId;
  }

  // system_assigned_identity_principal_id - computed: false, optional: true, required: false
  private _systemAssignedIdentityPrincipalId?: string; 
  public get systemAssignedIdentityPrincipalId() {
    return this.getStringAttribute('system_assigned_identity_principal_id');
  }
  public set systemAssignedIdentityPrincipalId(value: string) {
    this._systemAssignedIdentityPrincipalId = value;
  }
  public resetSystemAssignedIdentityPrincipalId() {
    this._systemAssignedIdentityPrincipalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAssignedIdentityPrincipalIdInput() {
    return this._systemAssignedIdentityPrincipalId;
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermNetappAccountEncryptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermNetappAccountEncryptionTimeouts) {
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
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      id: cdktf.stringToTerraform(this._id),
      netapp_account_id: cdktf.stringToTerraform(this._netappAccountId),
      system_assigned_identity_principal_id: cdktf.stringToTerraform(this._systemAssignedIdentityPrincipalId),
      user_assigned_identity_id: cdktf.stringToTerraform(this._userAssignedIdentityId),
      timeouts: dataAzurermNetappAccountEncryptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
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
      netapp_account_id: {
        value: cdktf.stringToHclTerraform(this._netappAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_assigned_identity_principal_id: {
        value: cdktf.stringToHclTerraform(this._systemAssignedIdentityPrincipalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_assigned_identity_id: {
        value: cdktf.stringToHclTerraform(this._userAssignedIdentityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermNetappAccountEncryptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermNetappAccountEncryptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
