// https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlFailoverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#databases MssqlFailoverGroup#databases}
  */
  readonly databases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#name MssqlFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}
  */
  readonly readonlyEndpointFailoverPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#server_id MssqlFailoverGroup#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#tags MssqlFailoverGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * partner_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#partner_server MssqlFailoverGroup#partner_server}
  */
  readonly partnerServer: MssqlFailoverGroupPartnerServer[];
  /**
  * read_write_endpoint_failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#read_write_endpoint_failover_policy MssqlFailoverGroup#read_write_endpoint_failover_policy}
  */
  readonly readWriteEndpointFailoverPolicy: MssqlFailoverGroupReadWriteEndpointFailoverPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#timeouts MssqlFailoverGroup#timeouts}
  */
  readonly timeouts?: MssqlFailoverGroupTimeouts;
}
export interface MssqlFailoverGroupPartnerServer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#id MssqlFailoverGroup#id}
  */
  readonly id: string;
}

export function mssqlFailoverGroupPartnerServerToTerraform(struct?: MssqlFailoverGroupPartnerServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface MssqlFailoverGroupReadWriteEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#grace_minutes MssqlFailoverGroup#grace_minutes}
  */
  readonly graceMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#mode MssqlFailoverGroup#mode}
  */
  readonly mode: string;
}

export function mssqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(struct?: MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference | MssqlFailoverGroupReadWriteEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_minutes: cdktf.numberToTerraform(struct!.graceMinutes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MssqlFailoverGroupReadWriteEndpointFailoverPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graceMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceMinutes = this._graceMinutes;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlFailoverGroupReadWriteEndpointFailoverPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._graceMinutes = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._graceMinutes = value.graceMinutes;
      this._mode = value.mode;
    }
  }

  // grace_minutes - computed: false, optional: true, required: false
  private _graceMinutes?: number; 
  public get graceMinutes() {
    return this.getNumberAttribute('grace_minutes');
  }
  public set graceMinutes(value: number) {
    this._graceMinutes = value;
  }
  public resetGraceMinutes() {
    this._graceMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceMinutesInput() {
    return this._graceMinutes;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface MssqlFailoverGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#create MssqlFailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#delete MssqlFailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#read MssqlFailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group#update MssqlFailoverGroup#update}
  */
  readonly update?: string;
}

export function mssqlFailoverGroupTimeoutsToTerraform(struct?: MssqlFailoverGroupTimeoutsOutputReference | MssqlFailoverGroupTimeouts): any {
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

export class MssqlFailoverGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MssqlFailoverGroupTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlFailoverGroupTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group azurerm_mssql_failover_group}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_failover_group azurerm_mssql_failover_group} Resource
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
    this._readWriteEndpointFailoverPolicy.internalValue = config.readWriteEndpointFailoverPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // databases - computed: false, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // readonly_endpoint_failover_policy_enabled - computed: true, optional: true, required: false
  private _readonlyEndpointFailoverPolicyEnabled?: boolean | cdktf.IResolvable; 
  public get readonlyEndpointFailoverPolicyEnabled() {
    return this.getBooleanAttribute('readonly_endpoint_failover_policy_enabled') as any;
  }
  public set readonlyEndpointFailoverPolicyEnabled(value: boolean | cdktf.IResolvable) {
    this._readonlyEndpointFailoverPolicyEnabled = value;
  }
  public resetReadonlyEndpointFailoverPolicyEnabled() {
    this._readonlyEndpointFailoverPolicyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyEndpointFailoverPolicyEnabledInput() {
    return this._readonlyEndpointFailoverPolicyEnabled;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // partner_server - computed: false, optional: false, required: true
  private _partnerServer?: MssqlFailoverGroupPartnerServer[]; 
  public get partnerServer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('partner_server') as any;
  }
  public set partnerServer(value: MssqlFailoverGroupPartnerServer[]) {
    this._partnerServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerServerInput() {
    return this._partnerServer;
  }

  // read_write_endpoint_failover_policy - computed: false, optional: false, required: true
  private _readWriteEndpointFailoverPolicy = new MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(this as any, "read_write_endpoint_failover_policy", true);
  public get readWriteEndpointFailoverPolicy() {
    return this._readWriteEndpointFailoverPolicy;
  }
  public putReadWriteEndpointFailoverPolicy(value: MssqlFailoverGroupReadWriteEndpointFailoverPolicy) {
    this._readWriteEndpointFailoverPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteEndpointFailoverPolicyInput() {
    return this._readWriteEndpointFailoverPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlFailoverGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlFailoverGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      read_write_endpoint_failover_policy: mssqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(this._readWriteEndpointFailoverPolicy.internalValue),
      timeouts: mssqlFailoverGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
