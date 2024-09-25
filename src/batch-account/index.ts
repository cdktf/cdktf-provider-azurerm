// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#allowed_authentication_modes BatchAccount#allowed_authentication_modes}
  */
  readonly allowedAuthenticationModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#encryption BatchAccount#encryption}
  */
  readonly encryption?: BatchAccountEncryption[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#id BatchAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#location BatchAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#name BatchAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#pool_allocation_mode BatchAccount#pool_allocation_mode}
  */
  readonly poolAllocationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#public_network_access_enabled BatchAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#resource_group_name BatchAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#storage_account_authentication_mode BatchAccount#storage_account_authentication_mode}
  */
  readonly storageAccountAuthenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#storage_account_id BatchAccount#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#storage_account_node_identity BatchAccount#storage_account_node_identity}
  */
  readonly storageAccountNodeIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#tags BatchAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#identity BatchAccount#identity}
  */
  readonly identity?: BatchAccountIdentity;
  /**
  * key_vault_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#key_vault_reference BatchAccount#key_vault_reference}
  */
  readonly keyVaultReference?: BatchAccountKeyVaultReference;
  /**
  * network_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#network_profile BatchAccount#network_profile}
  */
  readonly networkProfile?: BatchAccountNetworkProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#timeouts BatchAccount#timeouts}
  */
  readonly timeouts?: BatchAccountTimeouts;
}
export interface BatchAccountEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#key_vault_key_id BatchAccount#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
}

export function batchAccountEncryptionToTerraform(struct?: BatchAccountEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
  }
}


export function batchAccountEncryptionToHclTerraform(struct?: BatchAccountEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_vault_key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchAccountEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchAccountEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchAccountEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyVaultKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyVaultKeyId = value.keyVaultKeyId;
    }
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }
}

export class BatchAccountEncryptionList extends cdktf.ComplexList {
  public internalValue? : BatchAccountEncryption[] | cdktf.IResolvable

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
  public get(index: number): BatchAccountEncryptionOutputReference {
    return new BatchAccountEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#identity_ids BatchAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#type BatchAccount#type}
  */
  readonly type: string;
}

export function batchAccountIdentityToTerraform(struct?: BatchAccountIdentityOutputReference | BatchAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function batchAccountIdentityToHclTerraform(struct?: BatchAccountIdentityOutputReference | BatchAccountIdentity): any {
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

export class BatchAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchAccountIdentity | undefined {
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

  public set internalValue(value: BatchAccountIdentity | undefined) {
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
export interface BatchAccountKeyVaultReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#id BatchAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#url BatchAccount#url}
  */
  readonly url: string;
}

export function batchAccountKeyVaultReferenceToTerraform(struct?: BatchAccountKeyVaultReferenceOutputReference | BatchAccountKeyVaultReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function batchAccountKeyVaultReferenceToHclTerraform(struct?: BatchAccountKeyVaultReferenceOutputReference | BatchAccountKeyVaultReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchAccountKeyVaultReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchAccountKeyVaultReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchAccountKeyVaultReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._url = value.url;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface BatchAccountNetworkProfileAccountAccessIpRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#action BatchAccount#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}
  */
  readonly ipRange: string;
}

export function batchAccountNetworkProfileAccountAccessIpRuleToTerraform(struct?: BatchAccountNetworkProfileAccountAccessIpRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
  }
}


export function batchAccountNetworkProfileAccountAccessIpRuleToHclTerraform(struct?: BatchAccountNetworkProfileAccountAccessIpRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range: {
      value: cdktf.stringToHclTerraform(struct!.ipRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchAccountNetworkProfileAccountAccessIpRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchAccountNetworkProfileAccountAccessIpRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchAccountNetworkProfileAccountAccessIpRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ipRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ipRange = value.ipRange;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ip_range - computed: false, optional: false, required: true
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }
}

export class BatchAccountNetworkProfileAccountAccessIpRuleList extends cdktf.ComplexList {
  public internalValue? : BatchAccountNetworkProfileAccountAccessIpRule[] | cdktf.IResolvable

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
  public get(index: number): BatchAccountNetworkProfileAccountAccessIpRuleOutputReference {
    return new BatchAccountNetworkProfileAccountAccessIpRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchAccountNetworkProfileAccountAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#default_action BatchAccount#default_action}
  */
  readonly defaultAction?: string;
  /**
  * ip_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}
  */
  readonly ipRule?: BatchAccountNetworkProfileAccountAccessIpRule[] | cdktf.IResolvable;
}

export function batchAccountNetworkProfileAccountAccessToTerraform(struct?: BatchAccountNetworkProfileAccountAccessOutputReference | BatchAccountNetworkProfileAccountAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rule: cdktf.listMapper(batchAccountNetworkProfileAccountAccessIpRuleToTerraform, true)(struct!.ipRule),
  }
}


export function batchAccountNetworkProfileAccountAccessToHclTerraform(struct?: BatchAccountNetworkProfileAccountAccessOutputReference | BatchAccountNetworkProfileAccountAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rule: {
      value: cdktf.listMapperHcl(batchAccountNetworkProfileAccountAccessIpRuleToHclTerraform, true)(struct!.ipRule),
      isBlock: true,
      type: "list",
      storageClassType: "BatchAccountNetworkProfileAccountAccessIpRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchAccountNetworkProfileAccountAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchAccountNetworkProfileAccountAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRule = this._ipRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchAccountNetworkProfileAccountAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAction = undefined;
      this._ipRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAction = value.defaultAction;
      this._ipRule.internalValue = value.ipRule;
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

  // ip_rule - computed: false, optional: true, required: false
  private _ipRule = new BatchAccountNetworkProfileAccountAccessIpRuleList(this, "ip_rule", false);
  public get ipRule() {
    return this._ipRule;
  }
  public putIpRule(value: BatchAccountNetworkProfileAccountAccessIpRule[] | cdktf.IResolvable) {
    this._ipRule.internalValue = value;
  }
  public resetIpRule() {
    this._ipRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRuleInput() {
    return this._ipRule.internalValue;
  }
}
export interface BatchAccountNetworkProfileNodeManagementAccessIpRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#action BatchAccount#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#ip_range BatchAccount#ip_range}
  */
  readonly ipRange: string;
}

export function batchAccountNetworkProfileNodeManagementAccessIpRuleToTerraform(struct?: BatchAccountNetworkProfileNodeManagementAccessIpRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
  }
}


export function batchAccountNetworkProfileNodeManagementAccessIpRuleToHclTerraform(struct?: BatchAccountNetworkProfileNodeManagementAccessIpRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range: {
      value: cdktf.stringToHclTerraform(struct!.ipRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchAccountNetworkProfileNodeManagementAccessIpRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchAccountNetworkProfileNodeManagementAccessIpRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ipRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ipRange = value.ipRange;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ip_range - computed: false, optional: false, required: true
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }
}

export class BatchAccountNetworkProfileNodeManagementAccessIpRuleList extends cdktf.ComplexList {
  public internalValue? : BatchAccountNetworkProfileNodeManagementAccessIpRule[] | cdktf.IResolvable

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
  public get(index: number): BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference {
    return new BatchAccountNetworkProfileNodeManagementAccessIpRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchAccountNetworkProfileNodeManagementAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#default_action BatchAccount#default_action}
  */
  readonly defaultAction?: string;
  /**
  * ip_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#ip_rule BatchAccount#ip_rule}
  */
  readonly ipRule?: BatchAccountNetworkProfileNodeManagementAccessIpRule[] | cdktf.IResolvable;
}

export function batchAccountNetworkProfileNodeManagementAccessToTerraform(struct?: BatchAccountNetworkProfileNodeManagementAccessOutputReference | BatchAccountNetworkProfileNodeManagementAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rule: cdktf.listMapper(batchAccountNetworkProfileNodeManagementAccessIpRuleToTerraform, true)(struct!.ipRule),
  }
}


export function batchAccountNetworkProfileNodeManagementAccessToHclTerraform(struct?: BatchAccountNetworkProfileNodeManagementAccessOutputReference | BatchAccountNetworkProfileNodeManagementAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rule: {
      value: cdktf.listMapperHcl(batchAccountNetworkProfileNodeManagementAccessIpRuleToHclTerraform, true)(struct!.ipRule),
      isBlock: true,
      type: "list",
      storageClassType: "BatchAccountNetworkProfileNodeManagementAccessIpRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchAccountNetworkProfileNodeManagementAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchAccountNetworkProfileNodeManagementAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRule = this._ipRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchAccountNetworkProfileNodeManagementAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAction = undefined;
      this._ipRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAction = value.defaultAction;
      this._ipRule.internalValue = value.ipRule;
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

  // ip_rule - computed: false, optional: true, required: false
  private _ipRule = new BatchAccountNetworkProfileNodeManagementAccessIpRuleList(this, "ip_rule", false);
  public get ipRule() {
    return this._ipRule;
  }
  public putIpRule(value: BatchAccountNetworkProfileNodeManagementAccessIpRule[] | cdktf.IResolvable) {
    this._ipRule.internalValue = value;
  }
  public resetIpRule() {
    this._ipRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRuleInput() {
    return this._ipRule.internalValue;
  }
}
export interface BatchAccountNetworkProfile {
  /**
  * account_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#account_access BatchAccount#account_access}
  */
  readonly accountAccess?: BatchAccountNetworkProfileAccountAccess;
  /**
  * node_management_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#node_management_access BatchAccount#node_management_access}
  */
  readonly nodeManagementAccess?: BatchAccountNetworkProfileNodeManagementAccess;
}

export function batchAccountNetworkProfileToTerraform(struct?: BatchAccountNetworkProfileOutputReference | BatchAccountNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_access: batchAccountNetworkProfileAccountAccessToTerraform(struct!.accountAccess),
    node_management_access: batchAccountNetworkProfileNodeManagementAccessToTerraform(struct!.nodeManagementAccess),
  }
}


export function batchAccountNetworkProfileToHclTerraform(struct?: BatchAccountNetworkProfileOutputReference | BatchAccountNetworkProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_access: {
      value: batchAccountNetworkProfileAccountAccessToHclTerraform(struct!.accountAccess),
      isBlock: true,
      type: "list",
      storageClassType: "BatchAccountNetworkProfileAccountAccessList",
    },
    node_management_access: {
      value: batchAccountNetworkProfileNodeManagementAccessToHclTerraform(struct!.nodeManagementAccess),
      isBlock: true,
      type: "list",
      storageClassType: "BatchAccountNetworkProfileNodeManagementAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchAccountNetworkProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchAccountNetworkProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountAccess = this._accountAccess?.internalValue;
    }
    if (this._nodeManagementAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeManagementAccess = this._nodeManagementAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchAccountNetworkProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountAccess.internalValue = undefined;
      this._nodeManagementAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountAccess.internalValue = value.accountAccess;
      this._nodeManagementAccess.internalValue = value.nodeManagementAccess;
    }
  }

  // account_access - computed: false, optional: true, required: false
  private _accountAccess = new BatchAccountNetworkProfileAccountAccessOutputReference(this, "account_access");
  public get accountAccess() {
    return this._accountAccess;
  }
  public putAccountAccess(value: BatchAccountNetworkProfileAccountAccess) {
    this._accountAccess.internalValue = value;
  }
  public resetAccountAccess() {
    this._accountAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAccessInput() {
    return this._accountAccess.internalValue;
  }

  // node_management_access - computed: false, optional: true, required: false
  private _nodeManagementAccess = new BatchAccountNetworkProfileNodeManagementAccessOutputReference(this, "node_management_access");
  public get nodeManagementAccess() {
    return this._nodeManagementAccess;
  }
  public putNodeManagementAccess(value: BatchAccountNetworkProfileNodeManagementAccess) {
    this._nodeManagementAccess.internalValue = value;
  }
  public resetNodeManagementAccess() {
    this._nodeManagementAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeManagementAccessInput() {
    return this._nodeManagementAccess.internalValue;
  }
}
export interface BatchAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#create BatchAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#delete BatchAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#read BatchAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#update BatchAccount#update}
  */
  readonly update?: string;
}

export function batchAccountTimeoutsToTerraform(struct?: BatchAccountTimeouts | cdktf.IResolvable): any {
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


export function batchAccountTimeoutsToHclTerraform(struct?: BatchAccountTimeouts | cdktf.IResolvable): any {
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

export class BatchAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BatchAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account azurerm_batch_account}
*/
export class BatchAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_batch_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BatchAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchAccount to import
  * @param importFromId The id of the existing BatchAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_batch_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_account azurerm_batch_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchAccountConfig
  */
  public constructor(scope: Construct, id: string, config: BatchAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_account',
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
    this._allowedAuthenticationModes = config.allowedAuthenticationModes;
    this._encryption.internalValue = config.encryption;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._poolAllocationMode = config.poolAllocationMode;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountAuthenticationMode = config.storageAccountAuthenticationMode;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountNodeIdentity = config.storageAccountNodeIdentity;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._keyVaultReference.internalValue = config.keyVaultReference;
    this._networkProfile.internalValue = config.networkProfile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_endpoint - computed: true, optional: false, required: false
  public get accountEndpoint() {
    return this.getStringAttribute('account_endpoint');
  }

  // allowed_authentication_modes - computed: true, optional: true, required: false
  private _allowedAuthenticationModes?: string[]; 
  public get allowedAuthenticationModes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_modes'));
  }
  public set allowedAuthenticationModes(value: string[]) {
    this._allowedAuthenticationModes = value;
  }
  public resetAllowedAuthenticationModes() {
    this._allowedAuthenticationModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticationModesInput() {
    return this._allowedAuthenticationModes;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new BatchAccountEncryptionList(this, "encryption", false);
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: BatchAccountEncryption[] | cdktf.IResolvable) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
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

  // pool_allocation_mode - computed: false, optional: true, required: false
  private _poolAllocationMode?: string; 
  public get poolAllocationMode() {
    return this.getStringAttribute('pool_allocation_mode');
  }
  public set poolAllocationMode(value: string) {
    this._poolAllocationMode = value;
  }
  public resetPoolAllocationMode() {
    this._poolAllocationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolAllocationModeInput() {
    return this._poolAllocationMode;
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // storage_account_authentication_mode - computed: false, optional: true, required: false
  private _storageAccountAuthenticationMode?: string; 
  public get storageAccountAuthenticationMode() {
    return this.getStringAttribute('storage_account_authentication_mode');
  }
  public set storageAccountAuthenticationMode(value: string) {
    this._storageAccountAuthenticationMode = value;
  }
  public resetStorageAccountAuthenticationMode() {
    this._storageAccountAuthenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountAuthenticationModeInput() {
    return this._storageAccountAuthenticationMode;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // storage_account_node_identity - computed: false, optional: true, required: false
  private _storageAccountNodeIdentity?: string; 
  public get storageAccountNodeIdentity() {
    return this.getStringAttribute('storage_account_node_identity');
  }
  public set storageAccountNodeIdentity(value: string) {
    this._storageAccountNodeIdentity = value;
  }
  public resetStorageAccountNodeIdentity() {
    this._storageAccountNodeIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNodeIdentityInput() {
    return this._storageAccountNodeIdentity;
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

  // identity - computed: false, optional: true, required: false
  private _identity = new BatchAccountIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: BatchAccountIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // key_vault_reference - computed: false, optional: true, required: false
  private _keyVaultReference = new BatchAccountKeyVaultReferenceOutputReference(this, "key_vault_reference");
  public get keyVaultReference() {
    return this._keyVaultReference;
  }
  public putKeyVaultReference(value: BatchAccountKeyVaultReference) {
    this._keyVaultReference.internalValue = value;
  }
  public resetKeyVaultReference() {
    this._keyVaultReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultReferenceInput() {
    return this._keyVaultReference.internalValue;
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile = new BatchAccountNetworkProfileOutputReference(this, "network_profile");
  public get networkProfile() {
    return this._networkProfile;
  }
  public putNetworkProfile(value: BatchAccountNetworkProfile) {
    this._networkProfile.internalValue = value;
  }
  public resetNetworkProfile() {
    this._networkProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BatchAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BatchAccountTimeouts) {
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
      allowed_authentication_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAuthenticationModes),
      encryption: cdktf.listMapper(batchAccountEncryptionToTerraform, false)(this._encryption.internalValue),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      pool_allocation_mode: cdktf.stringToTerraform(this._poolAllocationMode),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_authentication_mode: cdktf.stringToTerraform(this._storageAccountAuthenticationMode),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_node_identity: cdktf.stringToTerraform(this._storageAccountNodeIdentity),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: batchAccountIdentityToTerraform(this._identity.internalValue),
      key_vault_reference: batchAccountKeyVaultReferenceToTerraform(this._keyVaultReference.internalValue),
      network_profile: batchAccountNetworkProfileToTerraform(this._networkProfile.internalValue),
      timeouts: batchAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_authentication_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAuthenticationModes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      encryption: {
        value: cdktf.listMapperHcl(batchAccountEncryptionToHclTerraform, false)(this._encryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchAccountEncryptionList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      pool_allocation_mode: {
        value: cdktf.stringToHclTerraform(this._poolAllocationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_authentication_mode: {
        value: cdktf.stringToHclTerraform(this._storageAccountAuthenticationMode),
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
      storage_account_node_identity: {
        value: cdktf.stringToHclTerraform(this._storageAccountNodeIdentity),
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
      identity: {
        value: batchAccountIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchAccountIdentityList",
      },
      key_vault_reference: {
        value: batchAccountKeyVaultReferenceToHclTerraform(this._keyVaultReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchAccountKeyVaultReferenceList",
      },
      network_profile: {
        value: batchAccountNetworkProfileToHclTerraform(this._networkProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchAccountNetworkProfileList",
      },
      timeouts: {
        value: batchAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
