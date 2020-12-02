// https://www.terraform.io/docs/providers/azurerm/r/mssql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MssqlServerConfig extends TerraformMetaArguments {
  readonly administratorLogin: string;
  readonly administratorLoginPassword: string;
  readonly connectionPolicy?: string;
  readonly extendedAuditingPolicy?: MssqlServerExtendedAuditingPolicy[];
  readonly location: string;
  readonly minimumTlsVersion?: string;
  readonly name: string;
  readonly publicNetworkAccessEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly version: string;
  /** azuread_administrator block */
  readonly azureadAdministrator?: MssqlServerAzureadAdministrator[];
  /** identity block */
  readonly identity?: MssqlServerIdentity[];
  /** timeouts block */
  readonly timeouts?: MssqlServerTimeouts;
}
export interface MssqlServerExtendedAuditingPolicy {
  readonly retentionInDays?: number;
  readonly storageAccountAccessKey?: string;
  readonly storageAccountAccessKeyIsSecondary?: boolean;
  readonly storageEndpoint?: string;
}
export interface MssqlServerAzureadAdministrator {
  readonly loginUsername: string;
  readonly objectId: string;
  readonly tenantId?: string;
}
export interface MssqlServerIdentity {
  readonly type: string;
}
export interface MssqlServerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MssqlServer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MssqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._connectionPolicy = config.connectionPolicy;
    this._extendedAuditingPolicy = config.extendedAuditingPolicy;
    this._location = config.location;
    this._minimumTlsVersion = config.minimumTlsVersion;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._version = config.version;
    this._azureadAdministrator = config.azureadAdministrator;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: false, optional: false, required: true
  private _administratorLogin: string;
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin
  }

  // administrator_login_password - computed: false, optional: false, required: true
  private _administratorLoginPassword: string;
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword
  }

  // connection_policy - computed: false, optional: true, required: false
  private _connectionPolicy?: string;
  public get connectionPolicy() {
    return this.getStringAttribute('connection_policy');
  }
  public set connectionPolicy(value: string ) {
    this._connectionPolicy = value;
  }
  public resetConnectionPolicy() {
    this._connectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPolicyInput() {
    return this._connectionPolicy
  }

  // extended_auditing_policy - computed: true, optional: true, required: false
  private _extendedAuditingPolicy?: MssqlServerExtendedAuditingPolicy[]
  public get extendedAuditingPolicy(): MssqlServerExtendedAuditingPolicy[] {
    return this.interpolationForAttribute('extended_auditing_policy') as any; // Getting the computed value is not yet implemented
  }
  public set extendedAuditingPolicy(value: MssqlServerExtendedAuditingPolicy[]) {
    this._extendedAuditingPolicy = value;
  }
  public resetExtendedAuditingPolicy() {
    this._extendedAuditingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAuditingPolicyInput() {
    return this._extendedAuditingPolicy
  }

  // fully_qualified_domain_name - computed: true, optional: false, required: false
  public get fullyQualifiedDomainName() {
    return this.getStringAttribute('fully_qualified_domain_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // minimum_tls_version - computed: false, optional: true, required: false
  private _minimumTlsVersion?: string;
  public get minimumTlsVersion() {
    return this.getStringAttribute('minimum_tls_version');
  }
  public set minimumTlsVersion(value: string ) {
    this._minimumTlsVersion = value;
  }
  public resetMinimumTlsVersion() {
    this._minimumTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTlsVersionInput() {
    return this._minimumTlsVersion
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

  // restorable_dropped_database_ids - computed: true, optional: false, required: false
  public get restorableDroppedDatabaseIds() {
    return this.getListAttribute('restorable_dropped_database_ids');
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

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // azuread_administrator - computed: false, optional: true, required: false
  private _azureadAdministrator?: MssqlServerAzureadAdministrator[];
  public get azureadAdministrator() {
    return this.interpolationForAttribute('azuread_administrator') as any;
  }
  public set azureadAdministrator(value: MssqlServerAzureadAdministrator[] ) {
    this._azureadAdministrator = value;
  }
  public resetAzureadAdministrator() {
    this._azureadAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureadAdministratorInput() {
    return this._azureadAdministrator
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: MssqlServerIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: MssqlServerIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlServerTimeouts ) {
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
      administrator_login: this._administratorLogin,
      administrator_login_password: this._administratorLoginPassword,
      connection_policy: this._connectionPolicy,
      extended_auditing_policy: this._extendedAuditingPolicy,
      location: this._location,
      minimum_tls_version: this._minimumTlsVersion,
      name: this._name,
      public_network_access_enabled: this._publicNetworkAccessEnabled,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      version: this._version,
      azuread_administrator: this._azureadAdministrator,
      identity: this._identity,
      timeouts: this._timeouts,
    };
  }
}
