// https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlFailoverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#databases MssqlFailoverGroup#databases}
  */
  readonly databases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#name MssqlFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}
  */
  readonly readonlyEndpointFailoverPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#server_id MssqlFailoverGroup#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#tags MssqlFailoverGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * partner_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#partner_server MssqlFailoverGroup#partner_server}
  */
  readonly partnerServer: MssqlFailoverGroupPartnerServer[];
  /**
  * read_write_endpoint_failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#read_write_endpoint_failover_policy MssqlFailoverGroup#read_write_endpoint_failover_policy}
  */
  readonly readWriteEndpointFailoverPolicy: MssqlFailoverGroupReadWriteEndpointFailoverPolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#timeouts MssqlFailoverGroup#timeouts}
  */
  readonly timeouts?: MssqlFailoverGroupTimeouts;
}
export interface MssqlFailoverGroupPartnerServer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#id MssqlFailoverGroup#id}
  */
  readonly id: string;
}

function mssqlFailoverGroupPartnerServerToTerraform(struct?: MssqlFailoverGroupPartnerServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface MssqlFailoverGroupReadWriteEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#grace_minutes MssqlFailoverGroup#grace_minutes}
  */
  readonly graceMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#mode MssqlFailoverGroup#mode}
  */
  readonly mode: string;
}

function mssqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(struct?: MssqlFailoverGroupReadWriteEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grace_minutes: cdktf.numberToTerraform(struct!.graceMinutes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface MssqlFailoverGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#create MssqlFailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#delete MssqlFailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#read MssqlFailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html#update MssqlFailoverGroup#update}
  */
  readonly update?: string;
}

function mssqlFailoverGroupTimeoutsToTerraform(struct?: MssqlFailoverGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html azurerm_mssql_failover_group}
*/
export class MssqlFailoverGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mssql_failover_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group.html azurerm_mssql_failover_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlFailoverGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlFailoverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_failover_group',
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
    this._readonlyEndpointFailoverPolicyEnabled = config.readonlyEndpointFailoverPolicyEnabled;
    this._serverId = config.serverId;
    this._tags = config.tags;
    this._partnerServer = config.partnerServer;
    this._readWriteEndpointFailoverPolicy = config.readWriteEndpointFailoverPolicy;
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

  // readonly_endpoint_failover_policy_enabled - computed: true, optional: true, required: false
  private _readonlyEndpointFailoverPolicyEnabled?: boolean | cdktf.IResolvable;
  public get readonlyEndpointFailoverPolicyEnabled() {
    return this.getBooleanAttribute('readonly_endpoint_failover_policy_enabled');
  }
  public set readonlyEndpointFailoverPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._readonlyEndpointFailoverPolicyEnabled = value;
  }
  public resetReadonlyEndpointFailoverPolicyEnabled() {
    this._readonlyEndpointFailoverPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyEndpointFailoverPolicyEnabledInput() {
    return this._readonlyEndpointFailoverPolicyEnabled
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
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

  // partner_server - computed: false, optional: false, required: true
  private _partnerServer: MssqlFailoverGroupPartnerServer[];
  public get partnerServer() {
    return this.interpolationForAttribute('partner_server') as any;
  }
  public set partnerServer(value: MssqlFailoverGroupPartnerServer[]) {
    this._partnerServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerServerInput() {
    return this._partnerServer
  }

  // read_write_endpoint_failover_policy - computed: false, optional: false, required: true
  private _readWriteEndpointFailoverPolicy: MssqlFailoverGroupReadWriteEndpointFailoverPolicy[];
  public get readWriteEndpointFailoverPolicy() {
    return this.interpolationForAttribute('read_write_endpoint_failover_policy') as any;
  }
  public set readWriteEndpointFailoverPolicy(value: MssqlFailoverGroupReadWriteEndpointFailoverPolicy[]) {
    this._readWriteEndpointFailoverPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteEndpointFailoverPolicyInput() {
    return this._readWriteEndpointFailoverPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlFailoverGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlFailoverGroupTimeouts ) {
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
      readonly_endpoint_failover_policy_enabled: cdktf.booleanToTerraform(this._readonlyEndpointFailoverPolicyEnabled),
      server_id: cdktf.stringToTerraform(this._serverId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      partner_server: cdktf.listMapper(mssqlFailoverGroupPartnerServerToTerraform)(this._partnerServer),
      read_write_endpoint_failover_policy: cdktf.listMapper(mssqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform)(this._readWriteEndpointFailoverPolicy),
      timeouts: mssqlFailoverGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
