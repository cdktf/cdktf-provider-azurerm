// https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitiveAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#custom_subdomain_name CognitiveAccount#custom_subdomain_name}
  */
  readonly customSubdomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#fqdns CognitiveAccount#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#kind CognitiveAccount#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#local_auth_enabled CognitiveAccount#local_auth_enabled}
  */
  readonly localAuthEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#location CognitiveAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}
  */
  readonly metricsAdvisorAadClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}
  */
  readonly metricsAdvisorAadTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}
  */
  readonly metricsAdvisorSuperUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}
  */
  readonly metricsAdvisorWebsiteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#name CognitiveAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#outbound_network_access_restrited CognitiveAccount#outbound_network_access_restrited}
  */
  readonly outboundNetworkAccessRestrited?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#public_network_access_enabled CognitiveAccount#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}
  */
  readonly qnaRuntimeEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#resource_group_name CognitiveAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#sku_name CognitiveAccount#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#tags CognitiveAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#identity CognitiveAccount#identity}
  */
  readonly identity?: CognitiveAccountIdentity[];
  /**
  * network_acls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#network_acls CognitiveAccount#network_acls}
  */
  readonly networkAcls?: CognitiveAccountNetworkAcls[];
  /**
  * storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#storage CognitiveAccount#storage}
  */
  readonly storage?: CognitiveAccountStorage[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#timeouts CognitiveAccount#timeouts}
  */
  readonly timeouts?: CognitiveAccountTimeouts;
}
export interface CognitiveAccountIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#identity_ids CognitiveAccount#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#type CognitiveAccount#type}
  */
  readonly type?: string;
}

function cognitiveAccountIdentityToTerraform(struct?: CognitiveAccountIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CognitiveAccountNetworkAclsVirtualNetworkRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#subnet_id CognitiveAccount#subnet_id}
  */
  readonly subnetId?: string;
}

function cognitiveAccountNetworkAclsVirtualNetworkRulesToTerraform(struct?: CognitiveAccountNetworkAclsVirtualNetworkRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface CognitiveAccountNetworkAcls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#default_action CognitiveAccount#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#ip_rules CognitiveAccount#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#virtual_network_rules CognitiveAccount#virtual_network_rules}
  */
  readonly virtualNetworkRules?: CognitiveAccountNetworkAclsVirtualNetworkRules[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#virtual_network_subnet_ids CognitiveAccount#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
}

function cognitiveAccountNetworkAclsToTerraform(struct?: CognitiveAccountNetworkAcls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRules),
    virtual_network_rules: cdktf.listMapper(cognitiveAccountNetworkAclsVirtualNetworkRulesToTerraform)(struct!.virtualNetworkRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.virtualNetworkSubnetIds),
  }
}

export interface CognitiveAccountStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#identity_client_id CognitiveAccount#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#storage_account_id CognitiveAccount#storage_account_id}
  */
  readonly storageAccountId: string;
}

function cognitiveAccountStorageToTerraform(struct?: CognitiveAccountStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_client_id: cdktf.stringToTerraform(struct!.identityClientId),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface CognitiveAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#create CognitiveAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#delete CognitiveAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#read CognitiveAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html#update CognitiveAccount#update}
  */
  readonly update?: string;
}

function cognitiveAccountTimeoutsToTerraform(struct?: CognitiveAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html azurerm_cognitive_account}
*/
export class CognitiveAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html azurerm_cognitive_account} Resource
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
    this._identity = config.identity;
    this._networkAcls = config.networkAcls;
    this._storage = config.storage;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_subdomain_name - computed: false, optional: true, required: false
  private _customSubdomainName?: string;
  public get customSubdomainName() {
    return this.getStringAttribute('custom_subdomain_name');
  }
  public set customSubdomainName(value: string ) {
    this._customSubdomainName = value;
  }
  public resetCustomSubdomainName() {
    this._customSubdomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubdomainNameInput() {
    return this._customSubdomainName
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
  public set fqdns(value: string[] ) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // local_auth_enabled - computed: false, optional: true, required: false
  private _localAuthEnabled?: boolean;
  public get localAuthEnabled() {
    return this.getBooleanAttribute('local_auth_enabled');
  }
  public set localAuthEnabled(value: boolean ) {
    this._localAuthEnabled = value;
  }
  public resetLocalAuthEnabled() {
    this._localAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthEnabledInput() {
    return this._localAuthEnabled
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // metrics_advisor_aad_client_id - computed: false, optional: true, required: false
  private _metricsAdvisorAadClientId?: string;
  public get metricsAdvisorAadClientId() {
    return this.getStringAttribute('metrics_advisor_aad_client_id');
  }
  public set metricsAdvisorAadClientId(value: string ) {
    this._metricsAdvisorAadClientId = value;
  }
  public resetMetricsAdvisorAadClientId() {
    this._metricsAdvisorAadClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorAadClientIdInput() {
    return this._metricsAdvisorAadClientId
  }

  // metrics_advisor_aad_tenant_id - computed: false, optional: true, required: false
  private _metricsAdvisorAadTenantId?: string;
  public get metricsAdvisorAadTenantId() {
    return this.getStringAttribute('metrics_advisor_aad_tenant_id');
  }
  public set metricsAdvisorAadTenantId(value: string ) {
    this._metricsAdvisorAadTenantId = value;
  }
  public resetMetricsAdvisorAadTenantId() {
    this._metricsAdvisorAadTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorAadTenantIdInput() {
    return this._metricsAdvisorAadTenantId
  }

  // metrics_advisor_super_user_name - computed: false, optional: true, required: false
  private _metricsAdvisorSuperUserName?: string;
  public get metricsAdvisorSuperUserName() {
    return this.getStringAttribute('metrics_advisor_super_user_name');
  }
  public set metricsAdvisorSuperUserName(value: string ) {
    this._metricsAdvisorSuperUserName = value;
  }
  public resetMetricsAdvisorSuperUserName() {
    this._metricsAdvisorSuperUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorSuperUserNameInput() {
    return this._metricsAdvisorSuperUserName
  }

  // metrics_advisor_website_name - computed: false, optional: true, required: false
  private _metricsAdvisorWebsiteName?: string;
  public get metricsAdvisorWebsiteName() {
    return this.getStringAttribute('metrics_advisor_website_name');
  }
  public set metricsAdvisorWebsiteName(value: string ) {
    this._metricsAdvisorWebsiteName = value;
  }
  public resetMetricsAdvisorWebsiteName() {
    this._metricsAdvisorWebsiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsAdvisorWebsiteNameInput() {
    return this._metricsAdvisorWebsiteName
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // outbound_network_access_restrited - computed: false, optional: true, required: false
  private _outboundNetworkAccessRestrited?: boolean;
  public get outboundNetworkAccessRestrited() {
    return this.getBooleanAttribute('outbound_network_access_restrited');
  }
  public set outboundNetworkAccessRestrited(value: boolean ) {
    this._outboundNetworkAccessRestrited = value;
  }
  public resetOutboundNetworkAccessRestrited() {
    this._outboundNetworkAccessRestrited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworkAccessRestritedInput() {
    return this._outboundNetworkAccessRestrited
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean ) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // qna_runtime_endpoint - computed: false, optional: true, required: false
  private _qnaRuntimeEndpoint?: string;
  public get qnaRuntimeEndpoint() {
    return this.getStringAttribute('qna_runtime_endpoint');
  }
  public set qnaRuntimeEndpoint(value: string ) {
    this._qnaRuntimeEndpoint = value;
  }
  public resetQnaRuntimeEndpoint() {
    this._qnaRuntimeEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qnaRuntimeEndpointInput() {
    return this._qnaRuntimeEndpoint
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: CognitiveAccountIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: CognitiveAccountIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls?: CognitiveAccountNetworkAcls[];
  public get networkAcls() {
    return this.interpolationForAttribute('network_acls') as any;
  }
  public set networkAcls(value: CognitiveAccountNetworkAcls[] ) {
    this._networkAcls = value;
  }
  public resetNetworkAcls() {
    this._networkAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclsInput() {
    return this._networkAcls
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: CognitiveAccountStorage[];
  public get storage() {
    return this.interpolationForAttribute('storage') as any;
  }
  public set storage(value: CognitiveAccountStorage[] ) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CognitiveAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CognitiveAccountTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
      identity: cdktf.listMapper(cognitiveAccountIdentityToTerraform)(this._identity),
      network_acls: cdktf.listMapper(cognitiveAccountNetworkAclsToTerraform)(this._networkAcls),
      storage: cdktf.listMapper(cognitiveAccountStorageToTerraform)(this._storage),
      timeouts: cognitiveAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
