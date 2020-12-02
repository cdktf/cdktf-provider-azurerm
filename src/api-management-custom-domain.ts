// https://www.terraform.io/docs/providers/azurerm/r/api_management_custom_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementCustomDomainConfig extends TerraformMetaArguments {
  readonly apiManagementId: string;
  /** developer_portal block */
  readonly developerPortal?: ApiManagementCustomDomainDeveloperPortal[];
  /** management block */
  readonly management?: ApiManagementCustomDomainManagement[];
  /** portal block */
  readonly portal?: ApiManagementCustomDomainPortal[];
  /** proxy block */
  readonly proxy?: ApiManagementCustomDomainProxy[];
  /** scm block */
  readonly scm?: ApiManagementCustomDomainScm[];
  /** timeouts block */
  readonly timeouts?: ApiManagementCustomDomainTimeouts;
}
export interface ApiManagementCustomDomainDeveloperPortal {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementCustomDomainManagement {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementCustomDomainPortal {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementCustomDomainProxy {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly defaultSslBinding?: boolean;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementCustomDomainScm {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementCustomDomainTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementCustomDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      api_management_id: this._apiManagementId,
      developer_portal: this._developerPortal,
      management: this._management,
      portal: this._portal,
      proxy: this._proxy,
      scm: this._scm,
      timeouts: this._timeouts,
    };
  }
}
