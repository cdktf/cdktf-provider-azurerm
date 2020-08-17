// https://www.terraform.io/docs/providers/azurerm/r/sql_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlServerConfig extends TerraformMetaArguments {
  readonly administratorLogin: string;
  readonly administratorLoginPassword: string;
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
export interface SqlServerIdentity {
  readonly type: string;
}
export interface SqlServerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SqlServer extends TerraformResource {

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
    return this._administratorLogin;
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }

  // administrator_login_password - computed: false, optional: false, required: true
  private _administratorLoginPassword: string;
  public get administratorLoginPassword() {
    return this._administratorLoginPassword;
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }

  // fully_qualified_domain_name - computed: true, optional: false, required: true
  public get fullyQualifiedDomainName() {
    return this.getStringAttribute('fully_qualified_domain_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this._version;
  }
  public set version(value: string) {
    this._version = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: SqlServerIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: SqlServerIdentity[] | undefined) {
    this._identity = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlServerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlServerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      administrator_login: this._administratorLogin,
      administrator_login_password: this._administratorLoginPassword,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      version: this._version,
      identity: this._identity,
      timeouts: this._timeouts,
    };
  }
}
