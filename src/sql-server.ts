// https://www.terraform.io/docs/providers/azurerm/r/sql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlServerConfig extends cdktf.TerraformMetaArguments {
  readonly administratorLogin: string;
  readonly administratorLoginPassword: string;
  readonly connectionPolicy?: string;
  readonly extendedAuditingPolicy?: SqlServerExtendedAuditingPolicy[];
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly version: string;
  /** identity block */
  readonly identity?: SqlServerIdentity[];
  /** timeouts block */
  readonly timeouts?: SqlServerTimeouts;
}
export interface SqlServerExtendedAuditingPolicy {
  readonly retentionInDays?: number;
  readonly storageAccountAccessKey?: string;
  readonly storageAccountAccessKeyIsSecondary?: boolean;
  readonly storageEndpoint?: string;
}

function sqlServerExtendedAuditingPolicyToTerraform(struct?: SqlServerExtendedAuditingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_in_days: cdktf.numberToTerraform(struct!.retentionInDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_account_access_key_is_secondary: cdktf.booleanToTerraform(struct!.storageAccountAccessKeyIsSecondary),
    storage_endpoint: cdktf.stringToTerraform(struct!.storageEndpoint),
  }
}

export interface SqlServerIdentity {
  readonly type: string;
}

function sqlServerIdentityToTerraform(struct?: SqlServerIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SqlServerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function sqlServerTimeoutsToTerraform(struct?: SqlServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SqlServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_server',
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._version = config.version;
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
  private _extendedAuditingPolicy?: SqlServerExtendedAuditingPolicy[]
  public get extendedAuditingPolicy(): SqlServerExtendedAuditingPolicy[] {
    return this.interpolationForAttribute('extended_auditing_policy') as any; // Getting the computed value is not yet implemented
  }
  public set extendedAuditingPolicy(value: SqlServerExtendedAuditingPolicy[]) {
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

  // identity - computed: false, optional: true, required: false
  private _identity?: SqlServerIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: SqlServerIdentity[] ) {
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
  private _timeouts?: SqlServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlServerTimeouts ) {
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
      administrator_login: cdktf.stringToTerraform(this._administratorLogin),
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      connection_policy: cdktf.stringToTerraform(this._connectionPolicy),
      extended_auditing_policy: cdktf.listMapper(sqlServerExtendedAuditingPolicyToTerraform)(this._extendedAuditingPolicy),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      identity: cdktf.listMapper(sqlServerIdentityToTerraform)(this._identity),
      timeouts: sqlServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
