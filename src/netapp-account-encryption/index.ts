/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappAccountEncryptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full resource ID of the cross-tenant key vault. Required when using federated_client_id for cross-tenant scenarios.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#cross_tenant_key_vault_resource_id NetappAccountEncryption#cross_tenant_key_vault_resource_id}
  */
  readonly crossTenantKeyVaultResourceId?: string;
  /**
  * The versionless encryption key url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#encryption_key NetappAccountEncryption#encryption_key}
  */
  readonly encryptionKey: string;
  /**
  * The Client ID of the multi-tenant Entra ID application used to access cross-tenant key vaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#federated_client_id NetappAccountEncryption#federated_client_id}
  */
  readonly federatedClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#id NetappAccountEncryption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the NetApp Account where encryption will be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#netapp_account_id NetappAccountEncryption#netapp_account_id}
  */
  readonly netappAccountId: string;
  /**
  * The Principal ID of the System Assigned Identity to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#system_assigned_identity_principal_id NetappAccountEncryption#system_assigned_identity_principal_id}
  */
  readonly systemAssignedIdentityPrincipalId?: string;
  /**
  * The resource ID of the User Assigned Identity to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#user_assigned_identity_id NetappAccountEncryption#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#timeouts NetappAccountEncryption#timeouts}
  */
  readonly timeouts?: NetappAccountEncryptionTimeouts;
}
export interface NetappAccountEncryptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#create NetappAccountEncryption#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#delete NetappAccountEncryption#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#read NetappAccountEncryption#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#update NetappAccountEncryption#update}
  */
  readonly update?: string;
}

export function netappAccountEncryptionTimeoutsToTerraform(struct?: NetappAccountEncryptionTimeouts | cdktf.IResolvable): any {
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


export function netappAccountEncryptionTimeoutsToHclTerraform(struct?: NetappAccountEncryptionTimeouts | cdktf.IResolvable): any {
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

export class NetappAccountEncryptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappAccountEncryptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetappAccountEncryptionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption azurerm_netapp_account_encryption}
*/
export class NetappAccountEncryption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_netapp_account_encryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappAccountEncryption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappAccountEncryption to import
  * @param importFromId The id of the existing NetappAccountEncryption that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappAccountEncryption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_netapp_account_encryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/netapp_account_encryption azurerm_netapp_account_encryption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappAccountEncryptionConfig
  */
  public constructor(scope: Construct, id: string, config: NetappAccountEncryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_account_encryption',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.49.0',
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
    this._crossTenantKeyVaultResourceId = config.crossTenantKeyVaultResourceId;
    this._encryptionKey = config.encryptionKey;
    this._federatedClientId = config.federatedClientId;
    this._id = config.id;
    this._netappAccountId = config.netappAccountId;
    this._systemAssignedIdentityPrincipalId = config.systemAssignedIdentityPrincipalId;
    this._userAssignedIdentityId = config.userAssignedIdentityId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cross_tenant_key_vault_resource_id - computed: false, optional: true, required: false
  private _crossTenantKeyVaultResourceId?: string; 
  public get crossTenantKeyVaultResourceId() {
    return this.getStringAttribute('cross_tenant_key_vault_resource_id');
  }
  public set crossTenantKeyVaultResourceId(value: string) {
    this._crossTenantKeyVaultResourceId = value;
  }
  public resetCrossTenantKeyVaultResourceId() {
    this._crossTenantKeyVaultResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossTenantKeyVaultResourceIdInput() {
    return this._crossTenantKeyVaultResourceId;
  }

  // encryption_key - computed: false, optional: false, required: true
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // federated_client_id - computed: false, optional: true, required: false
  private _federatedClientId?: string; 
  public get federatedClientId() {
    return this.getStringAttribute('federated_client_id');
  }
  public set federatedClientId(value: string) {
    this._federatedClientId = value;
  }
  public resetFederatedClientId() {
    this._federatedClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedClientIdInput() {
    return this._federatedClientId;
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
  private _timeouts = new NetappAccountEncryptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappAccountEncryptionTimeouts) {
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
      cross_tenant_key_vault_resource_id: cdktf.stringToTerraform(this._crossTenantKeyVaultResourceId),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      federated_client_id: cdktf.stringToTerraform(this._federatedClientId),
      id: cdktf.stringToTerraform(this._id),
      netapp_account_id: cdktf.stringToTerraform(this._netappAccountId),
      system_assigned_identity_principal_id: cdktf.stringToTerraform(this._systemAssignedIdentityPrincipalId),
      user_assigned_identity_id: cdktf.stringToTerraform(this._userAssignedIdentityId),
      timeouts: netappAccountEncryptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_tenant_key_vault_resource_id: {
        value: cdktf.stringToHclTerraform(this._crossTenantKeyVaultResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federated_client_id: {
        value: cdktf.stringToHclTerraform(this._federatedClientId),
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
        value: netappAccountEncryptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappAccountEncryptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
