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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementCustomDomainDeveloperPortalToTerraform(struct?: ApiManagementCustomDomainDeveloperPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementCustomDomainManagementToTerraform(struct?: ApiManagementCustomDomainManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementCustomDomainPortalToTerraform(struct?: ApiManagementCustomDomainPortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly defaultSslBinding?: boolean;
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementCustomDomainProxyToTerraform(struct?: ApiManagementCustomDomainProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    default_ssl_binding: cdktf.booleanToTerraform(struct!.defaultSslBinding),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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
  readonly negotiateClientCertificate?: boolean;
}

function apiManagementCustomDomainScmToTerraform(struct?: ApiManagementCustomDomainScm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_password: cdktf.stringToTerraform(struct!.certificatePassword),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    negotiate_client_certificate: cdktf.booleanToTerraform(struct!.negotiateClientCertificate),
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

function apiManagementCustomDomainTimeoutsToTerraform(struct?: ApiManagementCustomDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html azurerm_api_management_custom_domain}
*/
export class ApiManagementCustomDomain extends cdktf.TerraformResource {

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
  private _apiManagementId: string;
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
  private _developerPortal?: ApiManagementCustomDomainDeveloperPortal[];
  public get developerPortal() {
    return this.interpolationForAttribute('developer_portal') as any;
  }
  public set developerPortal(value: ApiManagementCustomDomainDeveloperPortal[] ) {
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
  private _management?: ApiManagementCustomDomainManagement[];
  public get management() {
    return this.interpolationForAttribute('management') as any;
  }
  public set management(value: ApiManagementCustomDomainManagement[] ) {
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
  private _portal?: ApiManagementCustomDomainPortal[];
  public get portal() {
    return this.interpolationForAttribute('portal') as any;
  }
  public set portal(value: ApiManagementCustomDomainPortal[] ) {
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
  private _proxy?: ApiManagementCustomDomainProxy[];
  public get proxy() {
    return this.interpolationForAttribute('proxy') as any;
  }
  public set proxy(value: ApiManagementCustomDomainProxy[] ) {
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
  private _scm?: ApiManagementCustomDomainScm[];
  public get scm() {
    return this.interpolationForAttribute('scm') as any;
  }
  public set scm(value: ApiManagementCustomDomainScm[] ) {
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
  private _timeouts?: ApiManagementCustomDomainTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementCustomDomainTimeouts ) {
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
