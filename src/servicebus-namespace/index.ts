// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#capacity ServicebusNamespace#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#id ServicebusNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#local_auth_enabled ServicebusNamespace#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#location ServicebusNamespace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#minimum_tls_version ServicebusNamespace#minimum_tls_version}
  */
  readonly minimumTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#name ServicebusNamespace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#premium_messaging_partitions ServicebusNamespace#premium_messaging_partitions}
  */
  readonly premiumMessagingPartitions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#resource_group_name ServicebusNamespace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#sku ServicebusNamespace#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#tags ServicebusNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#customer_managed_key ServicebusNamespace#customer_managed_key}
  */
  readonly customerManagedKey?: ServicebusNamespaceCustomerManagedKey;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#identity ServicebusNamespace#identity}
  */
  readonly identity?: ServicebusNamespaceIdentity;
  /**
  * network_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#network_rule_set ServicebusNamespace#network_rule_set}
  */
  readonly networkRuleSet?: ServicebusNamespaceNetworkRuleSet;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#timeouts ServicebusNamespace#timeouts}
  */
  readonly timeouts?: ServicebusNamespaceTimeouts;
}
export interface ServicebusNamespaceCustomerManagedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#identity_id ServicebusNamespace#identity_id}
  */
  readonly identityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#infrastructure_encryption_enabled ServicebusNamespace#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#key_vault_key_id ServicebusNamespace#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
}

export function servicebusNamespaceCustomerManagedKeyToTerraform(struct?: ServicebusNamespaceCustomerManagedKeyOutputReference | ServicebusNamespaceCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    infrastructure_encryption_enabled: cdktf.booleanToTerraform(struct!.infrastructureEncryptionEnabled),
    key_vault_key_id: cdktf.stringToTerraform(struct!.keyVaultKeyId),
  }
}


export function servicebusNamespaceCustomerManagedKeyToHclTerraform(struct?: ServicebusNamespaceCustomerManagedKeyOutputReference | ServicebusNamespaceCustomerManagedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.infrastructureEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ServicebusNamespaceCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicebusNamespaceCustomerManagedKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._infrastructureEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureEncryptionEnabled = this._infrastructureEncryptionEnabled;
    }
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicebusNamespaceCustomerManagedKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityId = undefined;
      this._infrastructureEncryptionEnabled = undefined;
      this._keyVaultKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityId = value.identityId;
      this._infrastructureEncryptionEnabled = value.infrastructureEncryptionEnabled;
      this._keyVaultKeyId = value.keyVaultKeyId;
    }
  }

  // identity_id - computed: false, optional: false, required: true
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }
  public set infrastructureEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled;
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
export interface ServicebusNamespaceIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#identity_ids ServicebusNamespace#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#type ServicebusNamespace#type}
  */
  readonly type: string;
}

export function servicebusNamespaceIdentityToTerraform(struct?: ServicebusNamespaceIdentityOutputReference | ServicebusNamespaceIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function servicebusNamespaceIdentityToHclTerraform(struct?: ServicebusNamespaceIdentityOutputReference | ServicebusNamespaceIdentity): any {
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

export class ServicebusNamespaceIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicebusNamespaceIdentity | undefined {
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

  public set internalValue(value: ServicebusNamespaceIdentity | undefined) {
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
export interface ServicebusNamespaceNetworkRuleSetNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#ignore_missing_vnet_service_endpoint ServicebusNamespace#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#subnet_id ServicebusNamespace#subnet_id}
  */
  readonly subnetId: string;
}

export function servicebusNamespaceNetworkRuleSetNetworkRulesToTerraform(struct?: ServicebusNamespaceNetworkRuleSetNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function servicebusNamespaceNetworkRuleSetNetworkRulesToHclTerraform(struct?: ServicebusNamespaceNetworkRuleSetNetworkRules | cdktf.IResolvable): any {
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

export class ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicebusNamespaceNetworkRuleSetNetworkRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicebusNamespaceNetworkRuleSetNetworkRules | cdktf.IResolvable | undefined) {
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

export class ServicebusNamespaceNetworkRuleSetNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : ServicebusNamespaceNetworkRuleSetNetworkRules[] | cdktf.IResolvable

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
  public get(index: number): ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference {
    return new ServicebusNamespaceNetworkRuleSetNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicebusNamespaceNetworkRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#default_action ServicebusNamespace#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#ip_rules ServicebusNamespace#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#trusted_services_allowed ServicebusNamespace#trusted_services_allowed}
  */
  readonly trustedServicesAllowed?: boolean | cdktf.IResolvable;
  /**
  * network_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#network_rules ServicebusNamespace#network_rules}
  */
  readonly networkRules?: ServicebusNamespaceNetworkRuleSetNetworkRules[] | cdktf.IResolvable;
}

export function servicebusNamespaceNetworkRuleSetToTerraform(struct?: ServicebusNamespaceNetworkRuleSetOutputReference | ServicebusNamespaceNetworkRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRules),
    public_network_access_enabled: cdktf.booleanToTerraform(struct!.publicNetworkAccessEnabled),
    trusted_services_allowed: cdktf.booleanToTerraform(struct!.trustedServicesAllowed),
    network_rules: cdktf.listMapper(servicebusNamespaceNetworkRuleSetNetworkRulesToTerraform, true)(struct!.networkRules),
  }
}


export function servicebusNamespaceNetworkRuleSetToHclTerraform(struct?: ServicebusNamespaceNetworkRuleSetOutputReference | ServicebusNamespaceNetworkRuleSet): any {
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
    public_network_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.publicNetworkAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_services_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.trustedServicesAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_rules: {
      value: cdktf.listMapperHcl(servicebusNamespaceNetworkRuleSetNetworkRulesToHclTerraform, true)(struct!.networkRules),
      isBlock: true,
      type: "set",
      storageClassType: "ServicebusNamespaceNetworkRuleSetNetworkRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicebusNamespaceNetworkRuleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicebusNamespaceNetworkRuleSet | undefined {
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
    if (this._publicNetworkAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkAccessEnabled = this._publicNetworkAccessEnabled;
    }
    if (this._trustedServicesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedServicesAllowed = this._trustedServicesAllowed;
    }
    if (this._networkRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRules = this._networkRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicebusNamespaceNetworkRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAction = undefined;
      this._ipRules = undefined;
      this._publicNetworkAccessEnabled = undefined;
      this._trustedServicesAllowed = undefined;
      this._networkRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAction = value.defaultAction;
      this._ipRules = value.ipRules;
      this._publicNetworkAccessEnabled = value.publicNetworkAccessEnabled;
      this._trustedServicesAllowed = value.trustedServicesAllowed;
      this._networkRules.internalValue = value.networkRules;
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

  // trusted_services_allowed - computed: false, optional: true, required: false
  private _trustedServicesAllowed?: boolean | cdktf.IResolvable; 
  public get trustedServicesAllowed() {
    return this.getBooleanAttribute('trusted_services_allowed');
  }
  public set trustedServicesAllowed(value: boolean | cdktf.IResolvable) {
    this._trustedServicesAllowed = value;
  }
  public resetTrustedServicesAllowed() {
    this._trustedServicesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedServicesAllowedInput() {
    return this._trustedServicesAllowed;
  }

  // network_rules - computed: false, optional: true, required: false
  private _networkRules = new ServicebusNamespaceNetworkRuleSetNetworkRulesList(this, "network_rules", true);
  public get networkRules() {
    return this._networkRules;
  }
  public putNetworkRules(value: ServicebusNamespaceNetworkRuleSetNetworkRules[] | cdktf.IResolvable) {
    this._networkRules.internalValue = value;
  }
  public resetNetworkRules() {
    this._networkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRulesInput() {
    return this._networkRules.internalValue;
  }
}
export interface ServicebusNamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#create ServicebusNamespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#delete ServicebusNamespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#read ServicebusNamespace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#update ServicebusNamespace#update}
  */
  readonly update?: string;
}

export function servicebusNamespaceTimeoutsToTerraform(struct?: ServicebusNamespaceTimeouts | cdktf.IResolvable): any {
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


export function servicebusNamespaceTimeoutsToHclTerraform(struct?: ServicebusNamespaceTimeouts | cdktf.IResolvable): any {
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

export class ServicebusNamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicebusNamespaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicebusNamespaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace azurerm_servicebus_namespace}
*/
export class ServicebusNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_servicebus_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicebusNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicebusNamespace to import
  * @param importFromId The id of the existing ServicebusNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicebusNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_servicebus_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_namespace azurerm_servicebus_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace',
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
    this._capacity = config.capacity;
    this._id = config.id;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._minimumTlsVersion = config.minimumTlsVersion;
    this._name = config.name;
    this._premiumMessagingPartitions = config.premiumMessagingPartitions;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._identity.internalValue = config.identity;
    this._networkRuleSet.internalValue = config.networkRuleSet;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // default_primary_connection_string - computed: true, optional: false, required: false
  public get defaultPrimaryConnectionString() {
    return this.getStringAttribute('default_primary_connection_string');
  }

  // default_primary_key - computed: true, optional: false, required: false
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_connection_string - computed: true, optional: false, required: false
  public get defaultSecondaryConnectionString() {
    return this.getStringAttribute('default_secondary_connection_string');
  }

  // default_secondary_key - computed: true, optional: false, required: false
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // minimum_tls_version - computed: false, optional: true, required: false
  private _minimumTlsVersion?: string; 
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion;
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

  // premium_messaging_partitions - computed: false, optional: true, required: false
  private _premiumMessagingPartitions?: number; 
  public get premiumMessagingPartitions() {
    return this.getNumberAttribute('premium_messaging_partitions');
  }
  public set premiumMessagingPartitions(value: number) {
    this._premiumMessagingPartitions = value;
  }
  public resetPremiumMessagingPartitions() {
    this._premiumMessagingPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get premiumMessagingPartitionsInput() {
    return this._premiumMessagingPartitions;
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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
  private _customerManagedKey = new ServicebusNamespaceCustomerManagedKeyOutputReference(this, "customer_managed_key");
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: ServicebusNamespaceCustomerManagedKey) {
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
  private _identity = new ServicebusNamespaceIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ServicebusNamespaceIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_rule_set - computed: false, optional: true, required: false
  private _networkRuleSet = new ServicebusNamespaceNetworkRuleSetOutputReference(this, "network_rule_set");
  public get networkRuleSet() {
    return this._networkRuleSet;
  }
  public putNetworkRuleSet(value: ServicebusNamespaceNetworkRuleSet) {
    this._networkRuleSet.internalValue = value;
  }
  public resetNetworkRuleSet() {
    this._networkRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleSetInput() {
    return this._networkRuleSet.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicebusNamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicebusNamespaceTimeouts) {
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
      capacity: cdktf.numberToTerraform(this._capacity),
      id: cdktf.stringToTerraform(this._id),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      minimum_tls_version: cdktf.stringToTerraform(this._minimumTlsVersion),
      name: cdktf.stringToTerraform(this._name),
      premium_messaging_partitions: cdktf.numberToTerraform(this._premiumMessagingPartitions),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      customer_managed_key: servicebusNamespaceCustomerManagedKeyToTerraform(this._customerManagedKey.internalValue),
      identity: servicebusNamespaceIdentityToTerraform(this._identity.internalValue),
      network_rule_set: servicebusNamespaceNetworkRuleSetToTerraform(this._networkRuleSet.internalValue),
      timeouts: servicebusNamespaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      minimum_tls_version: {
        value: cdktf.stringToHclTerraform(this._minimumTlsVersion),
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
      premium_messaging_partitions: {
        value: cdktf.numberToHclTerraform(this._premiumMessagingPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      sku: {
        value: cdktf.stringToHclTerraform(this._sku),
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
        value: servicebusNamespaceCustomerManagedKeyToHclTerraform(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicebusNamespaceCustomerManagedKeyList",
      },
      identity: {
        value: servicebusNamespaceIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicebusNamespaceIdentityList",
      },
      network_rule_set: {
        value: servicebusNamespaceNetworkRuleSetToHclTerraform(this._networkRuleSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicebusNamespaceNetworkRuleSetList",
      },
      timeouts: {
        value: servicebusNamespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicebusNamespaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
