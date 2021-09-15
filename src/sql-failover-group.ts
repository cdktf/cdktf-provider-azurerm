// https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlFailoverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#databases SqlFailoverGroup#databases}
  */
  readonly databases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#name SqlFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#resource_group_name SqlFailoverGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#server_name SqlFailoverGroup#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#tags SqlFailoverGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * partner_servers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#partner_servers SqlFailoverGroup#partner_servers}
  */
  readonly partnerServers: SqlFailoverGroupPartnerServers[];
  /**
  * read_write_endpoint_failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#read_write_endpoint_failover_policy SqlFailoverGroup#read_write_endpoint_failover_policy}
  */
  readonly readWriteEndpointFailoverPolicy: SqlFailoverGroupReadWriteEndpointFailoverPolicy[];
  /**
  * readonly_endpoint_failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#readonly_endpoint_failover_policy SqlFailoverGroup#readonly_endpoint_failover_policy}
  */
  readonly readonlyEndpointFailoverPolicy?: SqlFailoverGroupReadonlyEndpointFailoverPolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#timeouts SqlFailoverGroup#timeouts}
  */
  readonly timeouts?: SqlFailoverGroupTimeouts;
}
export interface SqlFailoverGroupPartnerServers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#id SqlFailoverGroup#id}
  */
  readonly id: string;
}

function sqlFailoverGroupPartnerServersToTerraform(struct?: SqlFailoverGroupPartnerServers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface SqlFailoverGroupReadWriteEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#grace_minutes SqlFailoverGroup#grace_minutes}
  */
  readonly graceMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#mode SqlFailoverGroup#mode}
  */
  readonly mode: string;
}

function sqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(struct?: SqlFailoverGroupReadWriteEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grace_minutes: cdktf.numberToTerraform(struct!.graceMinutes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface SqlFailoverGroupReadonlyEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#mode SqlFailoverGroup#mode}
  */
  readonly mode: string;
}

function sqlFailoverGroupReadonlyEndpointFailoverPolicyToTerraform(struct?: SqlFailoverGroupReadonlyEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface SqlFailoverGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#create SqlFailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#delete SqlFailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#read SqlFailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html#update SqlFailoverGroup#update}
  */
  readonly update?: string;
}

function sqlFailoverGroupTimeoutsToTerraform(struct?: SqlFailoverGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html azurerm_sql_failover_group}
*/
export class SqlFailoverGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sql_failover_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group.html azurerm_sql_failover_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlFailoverGroupConfig
  */
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
    return this.getListAttribute('databases');
  }
  public set databases(value: string[] ) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName: string;
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // partner_servers - computed: false, optional: false, required: true
  private _partnerServers: SqlFailoverGroupPartnerServers[];
  public get partnerServers() {
    return this.interpolationForAttribute('partner_servers') as any;
  }
  public set partnerServers(value: SqlFailoverGroupPartnerServers[]) {
    this._partnerServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerServersInput() {
    return this._partnerServers
  }

  // read_write_endpoint_failover_policy - computed: false, optional: false, required: true
  private _readWriteEndpointFailoverPolicy: SqlFailoverGroupReadWriteEndpointFailoverPolicy[];
  public get readWriteEndpointFailoverPolicy() {
    return this.interpolationForAttribute('read_write_endpoint_failover_policy') as any;
  }
  public set readWriteEndpointFailoverPolicy(value: SqlFailoverGroupReadWriteEndpointFailoverPolicy[]) {
    this._readWriteEndpointFailoverPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteEndpointFailoverPolicyInput() {
    return this._readWriteEndpointFailoverPolicy
  }

  // readonly_endpoint_failover_policy - computed: false, optional: true, required: false
  private _readonlyEndpointFailoverPolicy?: SqlFailoverGroupReadonlyEndpointFailoverPolicy[];
  public get readonlyEndpointFailoverPolicy() {
    return this.interpolationForAttribute('readonly_endpoint_failover_policy') as any;
  }
  public set readonlyEndpointFailoverPolicy(value: SqlFailoverGroupReadonlyEndpointFailoverPolicy[] ) {
    this._readonlyEndpointFailoverPolicy = value;
  }
  public resetReadonlyEndpointFailoverPolicy() {
    this._readonlyEndpointFailoverPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyEndpointFailoverPolicyInput() {
    return this._readonlyEndpointFailoverPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlFailoverGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlFailoverGroupTimeouts ) {
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
      databases: cdktf.listMapper(cdktf.stringToTerraform)(this._databases),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      partner_servers: cdktf.listMapper(sqlFailoverGroupPartnerServersToTerraform)(this._partnerServers),
      read_write_endpoint_failover_policy: cdktf.listMapper(sqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform)(this._readWriteEndpointFailoverPolicy),
      readonly_endpoint_failover_policy: cdktf.listMapper(sqlFailoverGroupReadonlyEndpointFailoverPolicyToTerraform)(this._readonlyEndpointFailoverPolicy),
      timeouts: sqlFailoverGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
