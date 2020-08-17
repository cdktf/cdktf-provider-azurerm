// https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqlFailoverGroupConfig extends TerraformMetaArguments {
  readonly databases?: string[];
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serverName: string;
  readonly tags?: { [key: string]: string };
  /** partner_servers block */
  readonly partnerServers: SqlFailoverGroupPartnerServers[];
  /** read_write_endpoint_failover_policy block */
  readonly readWriteEndpointFailoverPolicy: SqlFailoverGroupReadWriteEndpointFailoverPolicy[];
  /** readonly_endpoint_failover_policy block */
  readonly readonlyEndpointFailoverPolicy?: SqlFailoverGroupReadonlyEndpointFailoverPolicy[];
  /** timeouts block */
  readonly timeouts?: SqlFailoverGroupTimeouts;
}
export interface SqlFailoverGroupPartnerServers {
  readonly id: string;
}
export interface SqlFailoverGroupReadWriteEndpointFailoverPolicy {
  readonly graceMinutes?: number;
  readonly mode: string;
}
export interface SqlFailoverGroupReadonlyEndpointFailoverPolicy {
  readonly mode: string;
}
export interface SqlFailoverGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SqlFailoverGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlFailoverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_failover_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databases = config.databases;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serverName = config.serverName;
    this._tags = config.tags;
    this._partnerServers = config.partnerServers;
    this._readWriteEndpointFailoverPolicy = config.readWriteEndpointFailoverPolicy;
    this._readonlyEndpointFailoverPolicy = config.readonlyEndpointFailoverPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // databases - computed: false, optional: true, required: false
  private _databases?: string[];
  public get databases() {
    return this._databases;
  }
  public set databases(value: string[] | undefined) {
    this._databases = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
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

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this._serverName;
  }
  public set serverName(value: string) {
    this._serverName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // partner_servers - computed: false, optional: false, required: true
  private _partnerServers: SqlFailoverGroupPartnerServers[];
  public get partnerServers() {
    return this._partnerServers;
  }
  public set partnerServers(value: SqlFailoverGroupPartnerServers[]) {
    this._partnerServers = value;
  }

  // read_write_endpoint_failover_policy - computed: false, optional: false, required: true
  private _readWriteEndpointFailoverPolicy: SqlFailoverGroupReadWriteEndpointFailoverPolicy[];
  public get readWriteEndpointFailoverPolicy() {
    return this._readWriteEndpointFailoverPolicy;
  }
  public set readWriteEndpointFailoverPolicy(value: SqlFailoverGroupReadWriteEndpointFailoverPolicy[]) {
    this._readWriteEndpointFailoverPolicy = value;
  }

  // readonly_endpoint_failover_policy - computed: false, optional: true, required: false
  private _readonlyEndpointFailoverPolicy?: SqlFailoverGroupReadonlyEndpointFailoverPolicy[];
  public get readonlyEndpointFailoverPolicy() {
    return this._readonlyEndpointFailoverPolicy;
  }
  public set readonlyEndpointFailoverPolicy(value: SqlFailoverGroupReadonlyEndpointFailoverPolicy[] | undefined) {
    this._readonlyEndpointFailoverPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlFailoverGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlFailoverGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      databases: this._databases,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      server_name: this._serverName,
      tags: this._tags,
      partner_servers: this._partnerServers,
      read_write_endpoint_failover_policy: this._readWriteEndpointFailoverPolicy,
      readonly_endpoint_failover_policy: this._readonlyEndpointFailoverPolicy,
      timeouts: this._timeouts,
    };
  }
}
