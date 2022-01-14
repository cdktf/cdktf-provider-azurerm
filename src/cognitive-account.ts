// https://www.terraform.io/docs/providers/azurerm/r/cognitive_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitiveAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}
  */
  readonly customSubdomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#fqdns CognitiveAccount#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#kind CognitiveAccount#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#location CognitiveAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}
  */
  readonly metricsAdvisorAadClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}
  */
  readonly metricsAdvisorAadTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}
  */
  readonly metricsAdvisorSuperUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}
  */
  readonly metricsAdvisorWebsiteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#name CognitiveAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#outbound_network_access_restrited CognitiveAccount#outbound_network_access_restrited}
  */
  readonly outboundNetworkAccessRestrited?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}
  */
  readonly qnaRuntimeEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#sku_name CognitiveAccount#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#tags CognitiveAccount#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#identity CognitiveAccount#identity}
  */
  readonly identity?: CognitiveAccountIdentity;
  /**
  * network_acls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#network_acls CognitiveAccount#network_acls}
  */
  readonly networkAcls?: CognitiveAccountNetworkAcls;
  /**
  * storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#storage CognitiveAccount#storage}
  */
  readonly storage?: CognitiveAccountStorage[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#timeouts CognitiveAccount#timeouts}
  */
  readonly timeouts?: CognitiveAccountTimeouts;
}
export interface CognitiveAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#identity_ids CognitiveAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#type CognitiveAccount#type}
  */
  readonly type?: string;
}

export function cognitiveAccountIdentityToTerraform(struct?: CognitiveAccountIdentityOutputReference | CognitiveAccountIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CognitiveAccountIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this.getListAttribute('identity_ids');
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
}
export interface CognitiveAccountNetworkAclsVirtualNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#subnet_id CognitiveAccount#subnet_id}
  */
  readonly subnetId?: string;
}

export function cognitiveAccountNetworkAclsVirtualNetworkRulesToTerraform(struct?: CognitiveAccountNetworkAclsVirtualNetworkRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface CognitiveAccountNetworkAcls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#default_action CognitiveAccount#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#ip_rules CognitiveAccount#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#virtual_network_rules CognitiveAccount#virtual_network_rules}
  */
  readonly virtualNetworkRules?: CognitiveAccountNetworkAclsVirtualNetworkRules[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#virtual_network_subnet_ids CognitiveAccount#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
}

export function cognitiveAccountNetworkAclsToTerraform(struct?: CognitiveAccountNetworkAclsOutputReference | CognitiveAccountNetworkAcls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRules),
    virtual_network_rules: cdktf.listMapper(cognitiveAccountNetworkAclsVirtualNetworkRulesToTerraform)(struct!.virtualNetworkRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.virtualNetworkSubnetIds),
  }
}

export class CognitiveAccountNetworkAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    if (this._virtualNetworkRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkRules = this._virtualNetworkRules;
    }
    if (this._virtualNetworkSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkSubnetIds = this._virtualNetworkSubnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitiveAccountNetworkAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAction = undefined;
      this._ipRules = undefined;
      this._virtualNetworkRules = undefined;
      this._virtualNetworkSubnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAction = value.defaultAction;
      this._ipRules = value.ipRules;
      this._virtualNetworkRules = value.virtualNetworkRules;
      this._virtualNetworkSubnetIds = value.virtualNetworkSubnetIds;
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
    return this.getListAttribute('ip_rules');
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

  // virtual_network_rules - computed: true, optional: true, required: false
  private _virtualNetworkRules?: CognitiveAccountNetworkAclsVirtualNetworkRules[]; 
  public get virtualNetworkRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('virtual_network_rules') as any;
  }
  public set virtualNetworkRules(value: CognitiveAccountNetworkAclsVirtualNetworkRules[]) {
    this._virtualNetworkRules = value;
  }
  public resetVirtualNetworkRules() {
    this._virtualNetworkRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRulesInput() {
    return this._virtualNetworkRules;
  }

  // virtual_network_subnet_ids - computed: true, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[]; 
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds;
  }
}
export interface CognitiveAccountStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}
  */
  readonly storageAccountId: string;
}

export function cognitiveAccountStorageToTerraform(struct?: CognitiveAccountStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_client_id: cdktf.stringToTerraform(struct!.identityClientId),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface CognitiveAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#create CognitiveAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#delete CognitiveAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#read CognitiveAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account#update CognitiveAccount#update}
  */
  readonly update?: string;
}

export function cognitiveAccountTimeoutsToTerraform(struct?: CognitiveAccountTimeoutsOutputReference | CognitiveAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class CognitiveAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CognitiveAccountTimeouts | undefined {
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

  public set internalValue(value: CognitiveAccountTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account azurerm_cognitive_account}
*/
export class CognitiveAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cognitive_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account azurerm_cognitive_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitiveAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CognitiveAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cognitive_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customSubdomainName = config.customSubdomainName;
    this._fqdns = config.fqdns;
    this._kind = config.kind;
    this._localAuthEnabled = config.localAuthEnabled;
    this._location = config.location;
    this._metricsAdvisorAadClientId = config.metricsAdvisorAadClientId;
    this._metricsAdvisorAadTenantId = config.metricsAdvisorAadTenantId;
    this._metricsAdvisorSuperUserName = config.metricsAdvisorSuperUserName;
    this._metricsAdvisorWebsiteName = config.metricsAdvisorWebsiteName;
    this._name = config.name;
    this._outboundNetworkAccessRestrited = config.outboundNetworkAccessRestrited;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._qnaRuntimeEndpoint = config.qnaRuntimeEndpoint;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._networkAcls.internalValue = config.networkAcls;
    this._storage = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
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
    return this.getBooleanAttribute('local_auth_enabled') as any;
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

  // outbound_network_access_restrited - computed: false, optional: true, required: false
  private _outboundNetworkAccessRestrited?: boolean | cdktf.IResolvable; 
  public get outboundNetworkAccessRestrited() {
    return this.getBooleanAttribute('outbound_network_access_restrited') as any;
  }
  public set outboundNetworkAccessRestrited(value: boolean | cdktf.IResolvable) {
    this._outboundNetworkAccessRestrited = value;
  }
  public resetOutboundNetworkAccessRestrited() {
    this._outboundNetworkAccessRestrited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkAccessRestritedInput() {
    return this._outboundNetworkAccessRestrited;
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _identity = new CognitiveAccountIdentityOutputReference(this as any, "identity", true);
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
  private _networkAcls = new CognitiveAccountNetworkAclsOutputReference(this as any, "network_acls", true);
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
  private _storage?: CognitiveAccountStorage[]; 
  public get storage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('storage') as any;
  }
  public set storage(value: CognitiveAccountStorage[]) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CognitiveAccountTimeoutsOutputReference(this as any, "timeouts", true);
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
      custom_subdomain_name: cdktf.stringToTerraform(this._customSubdomainName),
      fqdns: cdktf.listMapper(cdktf.stringToTerraform)(this._fqdns),
      kind: cdktf.stringToTerraform(this._kind),
      local_auth_enabled: cdktf.booleanToTerraform(this._localAuthEnabled),
      location: cdktf.stringToTerraform(this._location),
      metrics_advisor_aad_client_id: cdktf.stringToTerraform(this._metricsAdvisorAadClientId),
      metrics_advisor_aad_tenant_id: cdktf.stringToTerraform(this._metricsAdvisorAadTenantId),
      metrics_advisor_super_user_name: cdktf.stringToTerraform(this._metricsAdvisorSuperUserName),
      metrics_advisor_website_name: cdktf.stringToTerraform(this._metricsAdvisorWebsiteName),
      name: cdktf.stringToTerraform(this._name),
      outbound_network_access_restrited: cdktf.booleanToTerraform(this._outboundNetworkAccessRestrited),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      qna_runtime_endpoint: cdktf.stringToTerraform(this._qnaRuntimeEndpoint),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identity: cognitiveAccountIdentityToTerraform(this._identity.internalValue),
      network_acls: cognitiveAccountNetworkAclsToTerraform(this._networkAcls.internalValue),
      storage: cdktf.listMapper(cognitiveAccountStorageToTerraform)(this._storage),
      timeouts: cognitiveAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
