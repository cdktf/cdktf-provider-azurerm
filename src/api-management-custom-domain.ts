// https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#api_management_id ApiManagementCustomDomain#api_management_id}
  */
  readonly apiManagementId: string;
  /**
  * developer_portal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#developer_portal ApiManagementCustomDomain#developer_portal}
  */
  readonly developerPortal?: ApiManagementCustomDomainDeveloperPortal[];
  /**
  * management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#management ApiManagementCustomDomain#management}
  */
  readonly management?: ApiManagementCustomDomainManagement[];
  /**
  * portal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#portal ApiManagementCustomDomain#portal}
  */
  readonly portal?: ApiManagementCustomDomainPortal[];
  /**
  * proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#proxy ApiManagementCustomDomain#proxy}
  */
  readonly proxy?: ApiManagementCustomDomainProxy[];
  /**
  * scm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#scm ApiManagementCustomDomain#scm}
  */
  readonly scm?: ApiManagementCustomDomainScm[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#timeouts ApiManagementCustomDomain#timeouts}
  */
  readonly timeouts?: ApiManagementCustomDomainTimeouts;
}
export interface ApiManagementCustomDomainDeveloperPortal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementCustomDomainDeveloperPortalToTerraform(struct?: ApiManagementCustomDomainDeveloperPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementCustomDomainManagement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementCustomDomainManagementToTerraform(struct?: ApiManagementCustomDomainManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementCustomDomainPortal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementCustomDomainPortalToTerraform(struct?: ApiManagementCustomDomainPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementCustomDomainProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}
  */
  readonly defaultSslBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementCustomDomainProxyToTerraform(struct?: ApiManagementCustomDomainProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    default_ssl_binding: cdktf.booleanToTerraform(struct!.defaultSslBinding),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementCustomDomainScm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate ApiManagementCustomDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#certificate_password ApiManagementCustomDomain#certificate_password}
  */
  readonly certificatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#host_name ApiManagementCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#key_vault_id ApiManagementCustomDomain#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}
  */
  readonly negotiateClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}
  */
  readonly sslKeyvaultIdentityClientId?: string;
}

function apiManagementCustomDomainScmToTerraform(struct?: ApiManagementCustomDomainScm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
    ssl_keyvault_identity_client_id: cdktf.stringToTerraform(struct!.sslKeyvaultIdentityClientId),
  }
}

export interface ApiManagementCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#create ApiManagementCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#delete ApiManagementCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#read ApiManagementCustomDomain#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html#update ApiManagementCustomDomain#update}
  */
  readonly update?: string;
}

function apiManagementCustomDomainTimeoutsToTerraform(struct?: ApiManagementCustomDomainTimeoutsOutputReference | ApiManagementCustomDomainTimeouts): any {
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

export class ApiManagementCustomDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html azurerm_api_management_custom_domain}
*/
export class ApiManagementCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_custom_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html azurerm_api_management_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementId = config.apiManagementId;
    this._developerPortal = config.developerPortal;
    this._management = config.management;
    this._portal = config.portal;
    this._proxy = config.proxy;
    this._scm = config.scm;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_id - computed: false, optional: false, required: true
  private _apiManagementId?: string; 
  public get apiManagementId() {
    return this.getStringAttribute('api_management_id');
  }
  public set apiManagementId(value: string) {
    this._apiManagementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementIdInput() {
    return this._apiManagementId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // developer_portal - computed: false, optional: true, required: false
  private _developerPortal?: ApiManagementCustomDomainDeveloperPortal[] | undefined; 
  public get developerPortal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('developer_portal') as any;
  }
  public set developerPortal(value: ApiManagementCustomDomainDeveloperPortal[] | undefined) {
    this._developerPortal = value;
  }
  public resetDeveloperPortal() {
    this._developerPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerPortalInput() {
    return this._developerPortal
  }

  // management - computed: false, optional: true, required: false
  private _management?: ApiManagementCustomDomainManagement[] | undefined; 
  public get management() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('management') as any;
  }
  public set management(value: ApiManagementCustomDomainManagement[] | undefined) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management
  }

  // portal - computed: false, optional: true, required: false
  private _portal?: ApiManagementCustomDomainPortal[] | undefined; 
  public get portal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('portal') as any;
  }
  public set portal(value: ApiManagementCustomDomainPortal[] | undefined) {
    this._portal = value;
  }
  public resetPortal() {
    this._portal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: ApiManagementCustomDomainProxy[] | undefined; 
  public get proxy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('proxy') as any;
  }
  public set proxy(value: ApiManagementCustomDomainProxy[] | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy
  }

  // scm - computed: false, optional: true, required: false
  private _scm?: ApiManagementCustomDomainScm[] | undefined; 
  public get scm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scm') as any;
  }
  public set scm(value: ApiManagementCustomDomainScm[] | undefined) {
    this._scm = value;
  }
  public resetScm() {
    this._scm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmInput() {
    return this._scm
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementCustomDomainTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementCustomDomainTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementCustomDomainTimeouts | undefined) {
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
      api_management_id: cdktf.stringToTerraform(this._apiManagementId),
      developer_portal: cdktf.listMapper(apiManagementCustomDomainDeveloperPortalToTerraform)(this._developerPortal),
      management: cdktf.listMapper(apiManagementCustomDomainManagementToTerraform)(this._management),
      portal: cdktf.listMapper(apiManagementCustomDomainPortalToTerraform)(this._portal),
      proxy: cdktf.listMapper(apiManagementCustomDomainProxyToTerraform)(this._proxy),
      scm: cdktf.listMapper(apiManagementCustomDomainScmToTerraform)(this._scm),
      timeouts: apiManagementCustomDomainTimeoutsToTerraform(this._timeouts),
    };
  }
}
