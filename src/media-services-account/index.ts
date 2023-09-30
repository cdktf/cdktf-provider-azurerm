// https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaServicesAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#id MediaServicesAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#location MediaServicesAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#name MediaServicesAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#public_network_access_enabled MediaServicesAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#resource_group_name MediaServicesAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#storage_authentication_type MediaServicesAccount#storage_authentication_type}
  */
  readonly storageAuthenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#tags MediaServicesAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#encryption MediaServicesAccount#encryption}
  */
  readonly encryption?: MediaServicesAccountEncryption;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#identity MediaServicesAccount#identity}
  */
  readonly identity?: MediaServicesAccountIdentity;
  /**
  * key_delivery_access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#key_delivery_access_control MediaServicesAccount#key_delivery_access_control}
  */
  readonly keyDeliveryAccessControl?: MediaServicesAccountKeyDeliveryAccessControl;
  /**
  * storage_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#storage_account MediaServicesAccount#storage_account}
  */
  readonly storageAccount: MediaServicesAccountStorageAccount[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#timeouts MediaServicesAccount#timeouts}
  */
  readonly timeouts?: MediaServicesAccountTimeouts;
}
export interface MediaServicesAccountEncryptionManagedIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}
  */
  readonly useSystemAssignedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function mediaServicesAccountEncryptionManagedIdentityToTerraform(struct?: MediaServicesAccountEncryptionManagedIdentityOutputReference | MediaServicesAccountEncryptionManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_system_assigned_identity: cdktf.booleanToTerraform(struct!.useSystemAssignedIdentity),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}

export class MediaServicesAccountEncryptionManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesAccountEncryptionManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useSystemAssignedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemAssignedIdentity = this._useSystemAssignedIdentity;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesAccountEncryptionManagedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useSystemAssignedIdentity = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useSystemAssignedIdentity = value.useSystemAssignedIdentity;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // use_system_assigned_identity - computed: false, optional: true, required: false
  private _useSystemAssignedIdentity?: boolean | cdktf.IResolvable; 
  public get useSystemAssignedIdentity() {
    return this.getBooleanAttribute('use_system_assigned_identity');
  }
  public set useSystemAssignedIdentity(value: boolean | cdktf.IResolvable) {
    this._useSystemAssignedIdentity = value;
  }
  public resetUseSystemAssignedIdentity() {
    this._useSystemAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemAssignedIdentityInput() {
    return this._useSystemAssignedIdentity;
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
export interface MediaServicesAccountEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#key_vault_key_identifier MediaServicesAccount#key_vault_key_identifier}
  */
  readonly keyVaultKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#type MediaServicesAccount#type}
  */
  readonly type?: string;
  /**
  * managed_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#managed_identity MediaServicesAccount#managed_identity}
  */
  readonly managedIdentity?: MediaServicesAccountEncryptionManagedIdentity;
}

export function mediaServicesAccountEncryptionToTerraform(struct?: MediaServicesAccountEncryptionOutputReference | MediaServicesAccountEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_key_identifier: cdktf.stringToTerraform(struct!.keyVaultKeyIdentifier),
    type: cdktf.stringToTerraform(struct!.type),
    managed_identity: mediaServicesAccountEncryptionManagedIdentityToTerraform(struct!.managedIdentity),
  }
}

export class MediaServicesAccountEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesAccountEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyIdentifier = this._keyVaultKeyIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._managedIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentity = this._managedIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesAccountEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultKeyIdentifier = undefined;
      this._type = undefined;
      this._managedIdentity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultKeyIdentifier = value.keyVaultKeyIdentifier;
      this._type = value.type;
      this._managedIdentity.internalValue = value.managedIdentity;
    }
  }

  // current_key_identifier - computed: true, optional: false, required: false
  public get currentKeyIdentifier() {
    return this.getStringAttribute('current_key_identifier');
  }

  // key_vault_key_identifier - computed: false, optional: true, required: false
  private _keyVaultKeyIdentifier?: string; 
  public get keyVaultKeyIdentifier() {
    return this.getStringAttribute('key_vault_key_identifier');
  }
  public set keyVaultKeyIdentifier(value: string) {
    this._keyVaultKeyIdentifier = value;
  }
  public resetKeyVaultKeyIdentifier() {
    this._keyVaultKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdentifierInput() {
    return this._keyVaultKeyIdentifier;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // managed_identity - computed: false, optional: true, required: false
  private _managedIdentity = new MediaServicesAccountEncryptionManagedIdentityOutputReference(this, "managed_identity");
  public get managedIdentity() {
    return this._managedIdentity;
  }
  public putManagedIdentity(value: MediaServicesAccountEncryptionManagedIdentity) {
    this._managedIdentity.internalValue = value;
  }
  public resetManagedIdentity() {
    this._managedIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityInput() {
    return this._managedIdentity.internalValue;
  }
}
export interface MediaServicesAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#identity_ids MediaServicesAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#type MediaServicesAccount#type}
  */
  readonly type: string;
}

export function mediaServicesAccountIdentityToTerraform(struct?: MediaServicesAccountIdentityOutputReference | MediaServicesAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MediaServicesAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesAccountIdentity | undefined {
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

  public set internalValue(value: MediaServicesAccountIdentity | undefined) {
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
export interface MediaServicesAccountKeyDeliveryAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#default_action MediaServicesAccount#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#ip_allow_list MediaServicesAccount#ip_allow_list}
  */
  readonly ipAllowList?: string[];
}

export function mediaServicesAccountKeyDeliveryAccessControlToTerraform(struct?: MediaServicesAccountKeyDeliveryAccessControlOutputReference | MediaServicesAccountKeyDeliveryAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAllowList),
  }
}

export class MediaServicesAccountKeyDeliveryAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesAccountKeyDeliveryAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowList = this._ipAllowList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesAccountKeyDeliveryAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAction = undefined;
      this._ipAllowList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAction = value.defaultAction;
      this._ipAllowList = value.ipAllowList;
    }
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_allow_list - computed: false, optional: true, required: false
  private _ipAllowList?: string[]; 
  public get ipAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_allow_list'));
  }
  public set ipAllowList(value: string[]) {
    this._ipAllowList = value;
  }
  public resetIpAllowList() {
    this._ipAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowListInput() {
    return this._ipAllowList;
  }
}
export interface MediaServicesAccountStorageAccountManagedIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#use_system_assigned_identity MediaServicesAccount#use_system_assigned_identity}
  */
  readonly useSystemAssignedIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#user_assigned_identity_id MediaServicesAccount#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

export function mediaServicesAccountStorageAccountManagedIdentityToTerraform(struct?: MediaServicesAccountStorageAccountManagedIdentityOutputReference | MediaServicesAccountStorageAccountManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_system_assigned_identity: cdktf.booleanToTerraform(struct!.useSystemAssignedIdentity),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}

export class MediaServicesAccountStorageAccountManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaServicesAccountStorageAccountManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useSystemAssignedIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemAssignedIdentity = this._useSystemAssignedIdentity;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesAccountStorageAccountManagedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useSystemAssignedIdentity = undefined;
      this._userAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useSystemAssignedIdentity = value.useSystemAssignedIdentity;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
    }
  }

  // use_system_assigned_identity - computed: false, optional: true, required: false
  private _useSystemAssignedIdentity?: boolean | cdktf.IResolvable; 
  public get useSystemAssignedIdentity() {
    return this.getBooleanAttribute('use_system_assigned_identity');
  }
  public set useSystemAssignedIdentity(value: boolean | cdktf.IResolvable) {
    this._useSystemAssignedIdentity = value;
  }
  public resetUseSystemAssignedIdentity() {
    this._useSystemAssignedIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemAssignedIdentityInput() {
    return this._useSystemAssignedIdentity;
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
export interface MediaServicesAccountStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#id MediaServicesAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#is_primary MediaServicesAccount#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * managed_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#managed_identity MediaServicesAccount#managed_identity}
  */
  readonly managedIdentity?: MediaServicesAccountStorageAccountManagedIdentity;
}

export function mediaServicesAccountStorageAccountToTerraform(struct?: MediaServicesAccountStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    managed_identity: mediaServicesAccountStorageAccountManagedIdentityToTerraform(struct!.managedIdentity),
  }
}

export class MediaServicesAccountStorageAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MediaServicesAccountStorageAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._managedIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentity = this._managedIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaServicesAccountStorageAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._isPrimary = undefined;
      this._managedIdentity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._isPrimary = value.isPrimary;
      this._managedIdentity.internalValue = value.managedIdentity;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // managed_identity - computed: false, optional: true, required: false
  private _managedIdentity = new MediaServicesAccountStorageAccountManagedIdentityOutputReference(this, "managed_identity");
  public get managedIdentity() {
    return this._managedIdentity;
  }
  public putManagedIdentity(value: MediaServicesAccountStorageAccountManagedIdentity) {
    this._managedIdentity.internalValue = value;
  }
  public resetManagedIdentity() {
    this._managedIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityInput() {
    return this._managedIdentity.internalValue;
  }
}

export class MediaServicesAccountStorageAccountList extends cdktf.ComplexList {
  public internalValue? : MediaServicesAccountStorageAccount[] | cdktf.IResolvable

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
  public get(index: number): MediaServicesAccountStorageAccountOutputReference {
    return new MediaServicesAccountStorageAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaServicesAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#create MediaServicesAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#delete MediaServicesAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#read MediaServicesAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account#update MediaServicesAccount#update}
  */
  readonly update?: string;
}

export function mediaServicesAccountTimeoutsToTerraform(struct?: MediaServicesAccountTimeouts | cdktf.IResolvable): any {
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

export class MediaServicesAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaServicesAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MediaServicesAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account azurerm_media_services_account}
*/
export class MediaServicesAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_media_services_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/media_services_account azurerm_media_services_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaServicesAccountConfig
  */
  public constructor(scope: Construct, id: string, config: MediaServicesAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_media_services_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.75.0',
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
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAuthenticationType = config.storageAuthenticationType;
    this._tags = config.tags;
    this._encryption.internalValue = config.encryption;
    this._identity.internalValue = config.identity;
    this._keyDeliveryAccessControl.internalValue = config.keyDeliveryAccessControl;
    this._storageAccount.internalValue = config.storageAccount;
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // storage_authentication_type - computed: true, optional: true, required: false
  private _storageAuthenticationType?: string; 
  public get storageAuthenticationType() {
    return this.getStringAttribute('storage_authentication_type');
  }
  public set storageAuthenticationType(value: string) {
    this._storageAuthenticationType = value;
  }
  public resetStorageAuthenticationType() {
    this._storageAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAuthenticationTypeInput() {
    return this._storageAuthenticationType;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption = new MediaServicesAccountEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MediaServicesAccountEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new MediaServicesAccountIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MediaServicesAccountIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // key_delivery_access_control - computed: false, optional: true, required: false
  private _keyDeliveryAccessControl = new MediaServicesAccountKeyDeliveryAccessControlOutputReference(this, "key_delivery_access_control");
  public get keyDeliveryAccessControl() {
    return this._keyDeliveryAccessControl;
  }
  public putKeyDeliveryAccessControl(value: MediaServicesAccountKeyDeliveryAccessControl) {
    this._keyDeliveryAccessControl.internalValue = value;
  }
  public resetKeyDeliveryAccessControl() {
    this._keyDeliveryAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDeliveryAccessControlInput() {
    return this._keyDeliveryAccessControl.internalValue;
  }

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount = new MediaServicesAccountStorageAccountList(this, "storage_account", true);
  public get storageAccount() {
    return this._storageAccount;
  }
  public putStorageAccount(value: MediaServicesAccountStorageAccount[] | cdktf.IResolvable) {
    this._storageAccount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MediaServicesAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MediaServicesAccountTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_authentication_type: cdktf.stringToTerraform(this._storageAuthenticationType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      encryption: mediaServicesAccountEncryptionToTerraform(this._encryption.internalValue),
      identity: mediaServicesAccountIdentityToTerraform(this._identity.internalValue),
      key_delivery_access_control: mediaServicesAccountKeyDeliveryAccessControlToTerraform(this._keyDeliveryAccessControl.internalValue),
      storage_account: cdktf.listMapper(mediaServicesAccountStorageAccountToTerraform, true)(this._storageAccount.internalValue),
      timeouts: mediaServicesAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
