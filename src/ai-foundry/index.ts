/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiFoundryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#application_insights_id AiFoundry#application_insights_id}
  */
  readonly applicationInsightsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#container_registry_id AiFoundry#container_registry_id}
  */
  readonly containerRegistryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#description AiFoundry#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#friendly_name AiFoundry#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#high_business_impact_enabled AiFoundry#high_business_impact_enabled}
  */
  readonly highBusinessImpactEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#id AiFoundry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#key_vault_id AiFoundry#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#location AiFoundry#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#name AiFoundry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#primary_user_assigned_identity AiFoundry#primary_user_assigned_identity}
  */
  readonly primaryUserAssignedIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#public_network_access AiFoundry#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#resource_group_name AiFoundry#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#storage_account_id AiFoundry#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#tags AiFoundry#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#encryption AiFoundry#encryption}
  */
  readonly encryption?: AiFoundryEncryption;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#identity AiFoundry#identity}
  */
  readonly identity: AiFoundryIdentity;
  /**
  * managed_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#managed_network AiFoundry#managed_network}
  */
  readonly managedNetwork?: AiFoundryManagedNetwork;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#timeouts AiFoundry#timeouts}
  */
  readonly timeouts?: AiFoundryTimeouts;
}
export interface AiFoundryEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#key_id AiFoundry#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#key_vault_id AiFoundry#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#user_assigned_identity_id AiFoundry#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function aiFoundryEncryptionToTerraform(struct?: AiFoundryEncryptionOutputReference | AiFoundryEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function aiFoundryEncryptionToHclTerraform(struct?: AiFoundryEncryptionOutputReference | AiFoundryEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiFoundryEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiFoundryEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiFoundryEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._keyVaultId = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._keyVaultId = value.keyVaultId;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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
}
export interface AiFoundryIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#identity_ids AiFoundry#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#type AiFoundry#type}
  */
  readonly type: string;
}

export function aiFoundryIdentityToTerraform(struct?: AiFoundryIdentityOutputReference | AiFoundryIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function aiFoundryIdentityToHclTerraform(struct?: AiFoundryIdentityOutputReference | AiFoundryIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiFoundryIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiFoundryIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiFoundryIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AiFoundryManagedNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#isolation_mode AiFoundry#isolation_mode}
  */
  readonly isolationMode?: string;
}

export function aiFoundryManagedNetworkToTerraform(struct?: AiFoundryManagedNetworkOutputReference | AiFoundryManagedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isolation_mode: cdktf.stringToTerraform(struct!.isolationMode),
  }
}


export function aiFoundryManagedNetworkToHclTerraform(struct?: AiFoundryManagedNetworkOutputReference | AiFoundryManagedNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isolation_mode: {
      value: cdktf.stringToHclTerraform(struct!.isolationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiFoundryManagedNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiFoundryManagedNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isolationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolationMode = this._isolationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiFoundryManagedNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isolationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isolationMode = value.isolationMode;
    }
  }

  // isolation_mode - computed: true, optional: true, required: false
  private _isolationMode?: string; 
  public get isolationMode() {
    return this.getStringAttribute('isolation_mode');
  }
  public set isolationMode(value: string) {
    this._isolationMode = value;
  }
  public resetIsolationMode() {
    this._isolationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationModeInput() {
    return this._isolationMode;
  }
}
export interface AiFoundryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#create AiFoundry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#delete AiFoundry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#read AiFoundry#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#update AiFoundry#update}
  */
  readonly update?: string;
}

export function aiFoundryTimeoutsToTerraform(struct?: AiFoundryTimeouts | cdktf.IResolvable): any {
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


export function aiFoundryTimeoutsToHclTerraform(struct?: AiFoundryTimeouts | cdktf.IResolvable): any {
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

export class AiFoundryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiFoundryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiFoundryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry azurerm_ai_foundry}
*/
export class AiFoundry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_ai_foundry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiFoundry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiFoundry to import
  * @param importFromId The id of the existing AiFoundry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiFoundry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_ai_foundry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/ai_foundry azurerm_ai_foundry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiFoundryConfig
  */
  public constructor(scope: Construct, id: string, config: AiFoundryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_ai_foundry',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.39.0',
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
    this._applicationInsightsId = config.applicationInsightsId;
    this._containerRegistryId = config.containerRegistryId;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._highBusinessImpactEnabled = config.highBusinessImpactEnabled;
    this._id = config.id;
    this._keyVaultId = config.keyVaultId;
    this._location = config.location;
    this._name = config.name;
    this._primaryUserAssignedIdentity = config.primaryUserAssignedIdentity;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._tags = config.tags;
    this._encryption.internalValue = config.encryption;
    this._identity.internalValue = config.identity;
    this._managedNetwork.internalValue = config.managedNetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_insights_id - computed: false, optional: true, required: false
  private _applicationInsightsId?: string; 
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  public resetApplicationInsightsId() {
    this._applicationInsightsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId;
  }

  // container_registry_id - computed: false, optional: true, required: false
  private _containerRegistryId?: string; 
  public get containerRegistryId() {
    return this.getStringAttribute('container_registry_id');
  }
  public set containerRegistryId(value: string) {
    this._containerRegistryId = value;
  }
  public resetContainerRegistryId() {
    this._containerRegistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryIdInput() {
    return this._containerRegistryId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // high_business_impact_enabled - computed: true, optional: true, required: false
  private _highBusinessImpactEnabled?: boolean | cdktf.IResolvable; 
  public get highBusinessImpactEnabled() {
    return this.getBooleanAttribute('high_business_impact_enabled');
  }
  public set highBusinessImpactEnabled(value: boolean | cdktf.IResolvable) {
    this._highBusinessImpactEnabled = value;
  }
  public resetHighBusinessImpactEnabled() {
    this._highBusinessImpactEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highBusinessImpactEnabledInput() {
    return this._highBusinessImpactEnabled;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // primary_user_assigned_identity - computed: false, optional: true, required: false
  private _primaryUserAssignedIdentity?: string; 
  public get primaryUserAssignedIdentity() {
    return this.getStringAttribute('primary_user_assigned_identity');
  }
  public set primaryUserAssignedIdentity(value: string) {
    this._primaryUserAssignedIdentity = value;
  }
  public resetPrimaryUserAssignedIdentity() {
    this._primaryUserAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUserAssignedIdentityInput() {
    return this._primaryUserAssignedIdentity;
  }

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
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

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new AiFoundryEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: AiFoundryEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new AiFoundryIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: AiFoundryIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // managed_network - computed: false, optional: true, required: false
  private _managedNetwork = new AiFoundryManagedNetworkOutputReference(this, "managed_network");
  public get managedNetwork() {
    return this._managedNetwork;
  }
  public putManagedNetwork(value: AiFoundryManagedNetwork) {
    this._managedNetwork.internalValue = value;
  }
  public resetManagedNetwork() {
    this._managedNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNetworkInput() {
    return this._managedNetwork.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiFoundryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiFoundryTimeouts) {
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
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      container_registry_id: cdktf.stringToTerraform(this._containerRegistryId),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      high_business_impact_enabled: cdktf.booleanToTerraform(this._highBusinessImpactEnabled),
      id: cdktf.stringToTerraform(this._id),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      primary_user_assigned_identity: cdktf.stringToTerraform(this._primaryUserAssignedIdentity),
      public_network_access: cdktf.stringToTerraform(this._publicNetworkAccess),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      encryption: aiFoundryEncryptionToTerraform(this._encryption.internalValue),
      identity: aiFoundryIdentityToTerraform(this._identity.internalValue),
      managed_network: aiFoundryManagedNetworkToTerraform(this._managedNetwork.internalValue),
      timeouts: aiFoundryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_insights_id: {
        value: cdktf.stringToHclTerraform(this._applicationInsightsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_registry_id: {
        value: cdktf.stringToHclTerraform(this._containerRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_business_impact_enabled: {
        value: cdktf.booleanToHclTerraform(this._highBusinessImpactEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      primary_user_assigned_identity: {
        value: cdktf.stringToHclTerraform(this._primaryUserAssignedIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access: {
        value: cdktf.stringToHclTerraform(this._publicNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountId),
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
      encryption: {
        value: aiFoundryEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiFoundryEncryptionList",
      },
      identity: {
        value: aiFoundryIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiFoundryIdentityList",
      },
      managed_network: {
        value: aiFoundryManagedNetworkToHclTerraform(this._managedNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiFoundryManagedNetworkList",
      },
      timeouts: {
        value: aiFoundryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiFoundryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
