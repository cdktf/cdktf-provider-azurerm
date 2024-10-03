// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitiveAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}
  */
  readonly customQuestionAnsweringSearchServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}
  */
  readonly customQuestionAnsweringSearchServiceKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}
  */
  readonly customSubdomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}
  */
  readonly dynamicThrottlingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#id CognitiveAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#location CognitiveAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}
  */
  readonly metricsAdvisorAadClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}
  */
  readonly metricsAdvisorAadTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}
  */
  readonly metricsAdvisorSuperUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}
  */
  readonly metricsAdvisorWebsiteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#name CognitiveAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}
  */
  readonly outboundNetworkAccessRestricted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}
  */
  readonly qnaRuntimeEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#customer_managed_key CognitiveAccount#customer_managed_key}
  */
  readonly customerManagedKey?: CognitiveAccountCustomerManagedKey;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#identity CognitiveAccount#identity}
  */
  readonly identity?: CognitiveAccountIdentity;
  /**
  * network_acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#network_acls CognitiveAccount#network_acls}
  */
  readonly networkAcls?: CognitiveAccountNetworkAcls;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#storage CognitiveAccount#storage}
  */
  readonly storage?: CognitiveAccountStorage[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#timeouts CognitiveAccount#timeouts}
  */
  readonly timeouts?: CognitiveAccountTimeouts;
}
export interface CognitiveAccountCustomerManagedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#key_vault_key_id CognitiveAccount#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
}

export function cognitiveAccountCustomerManagedKeyToTerraform(struct?: CognitiveAccountCustomerManagedKeyOutputReference | CognitiveAccountCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_client_id: cdktf.stringToTerraform(struct!.identityClientId),
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
  }
}


export function cognitiveAccountCustomerManagedKeyToHclTerraform(struct?: CognitiveAccountCustomerManagedKeyOutputReference | CognitiveAccountCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.identityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class CognitiveAccountCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitiveAccountCustomerManagedKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityClientId = this._identityClientId;
    }
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitiveAccountCustomerManagedKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityClientId = undefined;
      this._keyVaultKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityClientId = value.identityClientId;
      this._keyVaultKeyId = value.keyVaultKeyId;
    }
  }

  // identity_client_id - computed: false, optional: true, required: false
  private _identityClientId?: string; 
  public get identityClientId() {
    return this.getStringAttribute('identity_client_id');
  }
  public set identityClientId(value: string) {
    this._identityClientId = value;
  }
  public resetIdentityClientId() {
    this._identityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityClientIdInput() {
    return this._identityClientId;
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
}
export interface CognitiveAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#identity_ids CognitiveAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#type CognitiveAccount#type}
  */
  readonly type: string;
}

export function cognitiveAccountIdentityToTerraform(struct?: CognitiveAccountIdentityOutputReference | CognitiveAccountIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cognitiveAccountIdentityToHclTerraform(struct?: CognitiveAccountIdentityOutputReference | CognitiveAccountIdentity): any {
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

export class CognitiveAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitiveAccountIdentity | undefined {
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

  public set internalValue(value: CognitiveAccountIdentity | undefined) {
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
export interface CognitiveAccountNetworkAclsVirtualNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#subnet_id CognitiveAccount#subnet_id}
  */
  readonly subnetId: string;
}

export function cognitiveAccountNetworkAclsVirtualNetworkRulesToTerraform(struct?: CognitiveAccountNetworkAclsVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function cognitiveAccountNetworkAclsVirtualNetworkRulesToHclTerraform(struct?: CognitiveAccountNetworkAclsVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_vnet_service_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingVnetServiceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitiveAccountNetworkAclsVirtualNetworkRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingVnetServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingVnetServiceEndpoint = this._ignoreMissingVnetServiceEndpoint;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitiveAccountNetworkAclsVirtualNetworkRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreMissingVnetServiceEndpoint = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreMissingVnetServiceEndpoint = value.ignoreMissingVnetServiceEndpoint;
      this._subnetId = value.subnetId;
    }
  }

  // ignore_missing_vnet_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable; 
  public get ignoreMissingVnetServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_vnet_service_endpoint');
  }
  public set ignoreMissingVnetServiceEndpoint(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingVnetServiceEndpoint = value;
  }
  public resetIgnoreMissingVnetServiceEndpoint() {
    this._ignoreMissingVnetServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingVnetServiceEndpointInput() {
    return this._ignoreMissingVnetServiceEndpoint;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class CognitiveAccountNetworkAclsVirtualNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : CognitiveAccountNetworkAclsVirtualNetworkRules[] | cdktf.IResolvable

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
  public get(index: number): CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference {
    return new CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitiveAccountNetworkAcls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#default_action CognitiveAccount#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#ip_rules CognitiveAccount#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * virtual_network_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#virtual_network_rules CognitiveAccount#virtual_network_rules}
  */
  readonly virtualNetworkRules?: CognitiveAccountNetworkAclsVirtualNetworkRules[] | cdktf.IResolvable;
}

export function cognitiveAccountNetworkAclsToTerraform(struct?: CognitiveAccountNetworkAclsOutputReference | CognitiveAccountNetworkAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRules),
    virtual_network_rules: cdktf.listMapper(cognitiveAccountNetworkAclsVirtualNetworkRulesToTerraform, true)(struct!.virtualNetworkRules),
  }
}


export function cognitiveAccountNetworkAclsToHclTerraform(struct?: CognitiveAccountNetworkAclsOutputReference | CognitiveAccountNetworkAcls): any {
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
    ip_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRules),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    virtual_network_rules: {
      value: cdktf.listMapperHcl(cognitiveAccountNetworkAclsVirtualNetworkRulesToHclTerraform, true)(struct!.virtualNetworkRules),
      isBlock: true,
      type: "set",
      storageClassType: "CognitiveAccountNetworkAclsVirtualNetworkRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitiveAccountNetworkAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitiveAccountNetworkAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules;
    }
    if (this._virtualNetworkRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkRules = this._virtualNetworkRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitiveAccountNetworkAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAction = undefined;
      this._ipRules = undefined;
      this._virtualNetworkRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAction = value.defaultAction;
      this._ipRules = value.ipRules;
      this._virtualNetworkRules.internalValue = value.virtualNetworkRules;
    }
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules?: string[]; 
  public get ipRules() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_rules'));
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
  }

  // virtual_network_rules - computed: false, optional: true, required: false
  private _virtualNetworkRules = new CognitiveAccountNetworkAclsVirtualNetworkRulesList(this, "virtual_network_rules", true);
  public get virtualNetworkRules() {
    return this._virtualNetworkRules;
  }
  public putVirtualNetworkRules(value: CognitiveAccountNetworkAclsVirtualNetworkRules[] | cdktf.IResolvable) {
    this._virtualNetworkRules.internalValue = value;
  }
  public resetVirtualNetworkRules() {
    this._virtualNetworkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRulesInput() {
    return this._virtualNetworkRules.internalValue;
  }
}
export interface CognitiveAccountStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function cognitiveAccountStorageToTerraform(struct?: CognitiveAccountStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_client_id: cdktf.stringToTerraform(struct!.identityClientId),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}


export function cognitiveAccountStorageToHclTerraform(struct?: CognitiveAccountStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_client_id: {
      value: cdktf.stringToHclTerraform(struct!.identityClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_id: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitiveAccountStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitiveAccountStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityClientId = this._identityClientId;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitiveAccountStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityClientId = undefined;
      this._storageAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityClientId = value.identityClientId;
      this._storageAccountId = value.storageAccountId;
    }
  }

  // identity_client_id - computed: false, optional: true, required: false
  private _identityClientId?: string; 
  public get identityClientId() {
    return this.getStringAttribute('identity_client_id');
  }
  public set identityClientId(value: string) {
    this._identityClientId = value;
  }
  public resetIdentityClientId() {
    this._identityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityClientIdInput() {
    return this._identityClientId;
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
}

export class CognitiveAccountStorageList extends cdktf.ComplexList {
  public internalValue? : CognitiveAccountStorage[] | cdktf.IResolvable

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
  public get(index: number): CognitiveAccountStorageOutputReference {
    return new CognitiveAccountStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitiveAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#create CognitiveAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#delete CognitiveAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#read CognitiveAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#update CognitiveAccount#update}
  */
  readonly update?: string;
}

export function cognitiveAccountTimeoutsToTerraform(struct?: CognitiveAccountTimeouts | cdktf.IResolvable): any {
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


export function cognitiveAccountTimeoutsToHclTerraform(struct?: CognitiveAccountTimeouts | cdktf.IResolvable): any {
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

export class CognitiveAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitiveAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CognitiveAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account azurerm_cognitive_account}
*/
export class CognitiveAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cognitive_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CognitiveAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitiveAccount to import
  * @param importFromId The id of the existing CognitiveAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitiveAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cognitive_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cognitive_account azurerm_cognitive_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitiveAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CognitiveAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cognitive_account',
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
    this._customQuestionAnsweringSearchServiceId = config.customQuestionAnsweringSearchServiceId;
    this._customQuestionAnsweringSearchServiceKey = config.customQuestionAnsweringSearchServiceKey;
    this._customSubdomainName = config.customSubdomainName;
    this._dynamicThrottlingEnabled = config.dynamicThrottlingEnabled;
    this._fqdns = config.fqdns;
    this._id = config.id;
    this._kind = config.kind;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._metricsAdvisorAadClientId = config.metricsAdvisorAadClientId;
    this._metricsAdvisorAadTenantId = config.metricsAdvisorAadTenantId;
    this._metricsAdvisorSuperUserName = config.metricsAdvisorSuperUserName;
    this._metricsAdvisorWebsiteName = config.metricsAdvisorWebsiteName;
    this._name = config.name;
    this._outboundNetworkAccessRestricted = config.outboundNetworkAccessRestricted;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._qnaRuntimeEndpoint = config.qnaRuntimeEndpoint;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._identity.internalValue = config.identity;
    this._networkAcls.internalValue = config.networkAcls;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_question_answering_search_service_id - computed: false, optional: true, required: false
  private _customQuestionAnsweringSearchServiceId?: string; 
  public get customQuestionAnsweringSearchServiceId() {
    return this.getStringAttribute('custom_question_answering_search_service_id');
  }
  public set customQuestionAnsweringSearchServiceId(value: string) {
    this._customQuestionAnsweringSearchServiceId = value;
  }
  public resetCustomQuestionAnsweringSearchServiceId() {
    this._customQuestionAnsweringSearchServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customQuestionAnsweringSearchServiceIdInput() {
    return this._customQuestionAnsweringSearchServiceId;
  }

  // custom_question_answering_search_service_key - computed: false, optional: true, required: false
  private _customQuestionAnsweringSearchServiceKey?: string; 
  public get customQuestionAnsweringSearchServiceKey() {
    return this.getStringAttribute('custom_question_answering_search_service_key');
  }
  public set customQuestionAnsweringSearchServiceKey(value: string) {
    this._customQuestionAnsweringSearchServiceKey = value;
  }
  public resetCustomQuestionAnsweringSearchServiceKey() {
    this._customQuestionAnsweringSearchServiceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customQuestionAnsweringSearchServiceKeyInput() {
    return this._customQuestionAnsweringSearchServiceKey;
  }

  // custom_subdomain_name - computed: false, optional: true, required: false
  private _customSubdomainName?: string; 
  public get customSubdomainName() {
    return this.getStringAttribute('custom_subdomain_name');
  }
  public set customSubdomainName(value: string) {
    this._customSubdomainName = value;
  }
  public resetCustomSubdomainName() {
    this._customSubdomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubdomainNameInput() {
    return this._customSubdomainName;
  }

  // dynamic_throttling_enabled - computed: false, optional: true, required: false
  private _dynamicThrottlingEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicThrottlingEnabled() {
    return this.getBooleanAttribute('dynamic_throttling_enabled');
  }
  public set dynamicThrottlingEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicThrottlingEnabled = value;
  }
  public resetDynamicThrottlingEnabled() {
    this._dynamicThrottlingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicThrottlingEnabledInput() {
    return this._dynamicThrottlingEnabled;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // local_auth_enabled - computed: false, optional: true, required: false
  private _localAuthEnabled?: boolean | cdktf.IResolvable; 
  public get localAuthEnabled() {
    return this.getBooleanAttribute('local_auth_enabled');
  }
  public set localAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._localAuthEnabled = value;
  }
  public resetLocalAuthEnabled() {
    this._localAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEnabledInput() {
    return this._localAuthEnabled;
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

  // metrics_advisor_aad_client_id - computed: false, optional: true, required: false
  private _metricsAdvisorAadClientId?: string; 
  public get metricsAdvisorAadClientId() {
    return this.getStringAttribute('metrics_advisor_aad_client_id');
  }
  public set metricsAdvisorAadClientId(value: string) {
    this._metricsAdvisorAadClientId = value;
  }
  public resetMetricsAdvisorAadClientId() {
    this._metricsAdvisorAadClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorAadClientIdInput() {
    return this._metricsAdvisorAadClientId;
  }

  // metrics_advisor_aad_tenant_id - computed: false, optional: true, required: false
  private _metricsAdvisorAadTenantId?: string; 
  public get metricsAdvisorAadTenantId() {
    return this.getStringAttribute('metrics_advisor_aad_tenant_id');
  }
  public set metricsAdvisorAadTenantId(value: string) {
    this._metricsAdvisorAadTenantId = value;
  }
  public resetMetricsAdvisorAadTenantId() {
    this._metricsAdvisorAadTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorAadTenantIdInput() {
    return this._metricsAdvisorAadTenantId;
  }

  // metrics_advisor_super_user_name - computed: false, optional: true, required: false
  private _metricsAdvisorSuperUserName?: string; 
  public get metricsAdvisorSuperUserName() {
    return this.getStringAttribute('metrics_advisor_super_user_name');
  }
  public set metricsAdvisorSuperUserName(value: string) {
    this._metricsAdvisorSuperUserName = value;
  }
  public resetMetricsAdvisorSuperUserName() {
    this._metricsAdvisorSuperUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorSuperUserNameInput() {
    return this._metricsAdvisorSuperUserName;
  }

  // metrics_advisor_website_name - computed: false, optional: true, required: false
  private _metricsAdvisorWebsiteName?: string; 
  public get metricsAdvisorWebsiteName() {
    return this.getStringAttribute('metrics_advisor_website_name');
  }
  public set metricsAdvisorWebsiteName(value: string) {
    this._metricsAdvisorWebsiteName = value;
  }
  public resetMetricsAdvisorWebsiteName() {
    this._metricsAdvisorWebsiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorWebsiteNameInput() {
    return this._metricsAdvisorWebsiteName;
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

  // outbound_network_access_restricted - computed: false, optional: true, required: false
  private _outboundNetworkAccessRestricted?: boolean | cdktf.IResolvable; 
  public get outboundNetworkAccessRestricted() {
    return this.getBooleanAttribute('outbound_network_access_restricted');
  }
  public set outboundNetworkAccessRestricted(value: boolean | cdktf.IResolvable) {
    this._outboundNetworkAccessRestricted = value;
  }
  public resetOutboundNetworkAccessRestricted() {
    this._outboundNetworkAccessRestricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkAccessRestrictedInput() {
    return this._outboundNetworkAccessRestricted;
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

  // qna_runtime_endpoint - computed: false, optional: true, required: false
  private _qnaRuntimeEndpoint?: string; 
  public get qnaRuntimeEndpoint() {
    return this.getStringAttribute('qna_runtime_endpoint');
  }
  public set qnaRuntimeEndpoint(value: string) {
    this._qnaRuntimeEndpoint = value;
  }
  public resetQnaRuntimeEndpoint() {
    this._qnaRuntimeEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qnaRuntimeEndpointInput() {
    return this._qnaRuntimeEndpoint;
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

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
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

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new CognitiveAccountCustomerManagedKeyOutputReference(this, "customer_managed_key");
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: CognitiveAccountCustomerManagedKey) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new CognitiveAccountIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: CognitiveAccountIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls = new CognitiveAccountNetworkAclsOutputReference(this, "network_acls");
  public get networkAcls() {
    return this._networkAcls;
  }
  public putNetworkAcls(value: CognitiveAccountNetworkAcls) {
    this._networkAcls.internalValue = value;
  }
  public resetNetworkAcls() {
    this._networkAcls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclsInput() {
    return this._networkAcls.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new CognitiveAccountStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: CognitiveAccountStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CognitiveAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CognitiveAccountTimeouts) {
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
      custom_question_answering_search_service_id: cdktf.stringToTerraform(this._customQuestionAnsweringSearchServiceId),
      custom_question_answering_search_service_key: cdktf.stringToTerraform(this._customQuestionAnsweringSearchServiceKey),
      custom_subdomain_name: cdktf.stringToTerraform(this._customSubdomainName),
      dynamic_throttling_enabled: cdktf.booleanToTerraform(this._dynamicThrottlingEnabled),
      fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fqdns),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      metrics_advisor_aad_client_id: cdktf.stringToTerraform(this._metricsAdvisorAadClientId),
      metrics_advisor_aad_tenant_id: cdktf.stringToTerraform(this._metricsAdvisorAadTenantId),
      metrics_advisor_super_user_name: cdktf.stringToTerraform(this._metricsAdvisorSuperUserName),
      metrics_advisor_website_name: cdktf.stringToTerraform(this._metricsAdvisorWebsiteName),
      name: cdktf.stringToTerraform(this._name),
      outbound_network_access_restricted: cdktf.booleanToTerraform(this._outboundNetworkAccessRestricted),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      qna_runtime_endpoint: cdktf.stringToTerraform(this._qnaRuntimeEndpoint),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      customer_managed_key: cognitiveAccountCustomerManagedKeyToTerraform(this._customerManagedKey.internalValue),
      identity: cognitiveAccountIdentityToTerraform(this._identity.internalValue),
      network_acls: cognitiveAccountNetworkAclsToTerraform(this._networkAcls.internalValue),
      storage: cdktf.listMapper(cognitiveAccountStorageToTerraform, true)(this._storage.internalValue),
      timeouts: cognitiveAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_question_answering_search_service_id: {
        value: cdktf.stringToHclTerraform(this._customQuestionAnsweringSearchServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_question_answering_search_service_key: {
        value: cdktf.stringToHclTerraform(this._customQuestionAnsweringSearchServiceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_subdomain_name: {
        value: cdktf.stringToHclTerraform(this._customSubdomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_throttling_enabled: {
        value: cdktf.booleanToHclTerraform(this._dynamicThrottlingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fqdns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._localAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_advisor_aad_client_id: {
        value: cdktf.stringToHclTerraform(this._metricsAdvisorAadClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_advisor_aad_tenant_id: {
        value: cdktf.stringToHclTerraform(this._metricsAdvisorAadTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_advisor_super_user_name: {
        value: cdktf.stringToHclTerraform(this._metricsAdvisorSuperUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_advisor_website_name: {
        value: cdktf.stringToHclTerraform(this._metricsAdvisorWebsiteName),
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
      outbound_network_access_restricted: {
        value: cdktf.booleanToHclTerraform(this._outboundNetworkAccessRestricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qna_runtime_endpoint: {
        value: cdktf.stringToHclTerraform(this._qnaRuntimeEndpoint),
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
      sku_name: {
        value: cdktf.stringToHclTerraform(this._skuName),
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
      customer_managed_key: {
        value: cognitiveAccountCustomerManagedKeyToHclTerraform(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitiveAccountCustomerManagedKeyList",
      },
      identity: {
        value: cognitiveAccountIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitiveAccountIdentityList",
      },
      network_acls: {
        value: cognitiveAccountNetworkAclsToHclTerraform(this._networkAcls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitiveAccountNetworkAclsList",
      },
      storage: {
        value: cdktf.listMapperHcl(cognitiveAccountStorageToHclTerraform, true)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitiveAccountStorageList",
      },
      timeouts: {
        value: cognitiveAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitiveAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
