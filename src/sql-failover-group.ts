// https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlFailoverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#databases SqlFailoverGroup#databases}
  */
  readonly databases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#name SqlFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#resource_group_name SqlFailoverGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#server_name SqlFailoverGroup#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#tags SqlFailoverGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * partner_servers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#partner_servers SqlFailoverGroup#partner_servers}
  */
  readonly partnerServers: SqlFailoverGroupPartnerServers[];
  /**
  * read_write_endpoint_failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#read_write_endpoint_failover_policy SqlFailoverGroup#read_write_endpoint_failover_policy}
  */
  readonly readWriteEndpointFailoverPolicy: SqlFailoverGroupReadWriteEndpointFailoverPolicy;
  /**
  * readonly_endpoint_failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#readonly_endpoint_failover_policy SqlFailoverGroup#readonly_endpoint_failover_policy}
  */
  readonly readonlyEndpointFailoverPolicy?: SqlFailoverGroupReadonlyEndpointFailoverPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#timeouts SqlFailoverGroup#timeouts}
  */
  readonly timeouts?: SqlFailoverGroupTimeouts;
}
export interface SqlFailoverGroupPartnerServers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#id SqlFailoverGroup#id}
  */
  readonly id: string;
}

export function sqlFailoverGroupPartnerServersToTerraform(struct?: SqlFailoverGroupPartnerServers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface SqlFailoverGroupReadWriteEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#grace_minutes SqlFailoverGroup#grace_minutes}
  */
  readonly graceMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#mode SqlFailoverGroup#mode}
  */
  readonly mode: string;
}

export function sqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(struct?: SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference | SqlFailoverGroupReadWriteEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_minutes: cdktf.numberToTerraform(struct!.graceMinutes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlFailoverGroupReadWriteEndpointFailoverPolicy | undefined {
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

  public set internalValue(value: SqlFailoverGroupReadWriteEndpointFailoverPolicy | undefined) {
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
export interface SqlFailoverGroupReadonlyEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#mode SqlFailoverGroup#mode}
  */
  readonly mode: string;
}

export function sqlFailoverGroupReadonlyEndpointFailoverPolicyToTerraform(struct?: SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference | SqlFailoverGroupReadonlyEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlFailoverGroupReadonlyEndpointFailoverPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlFailoverGroupReadonlyEndpointFailoverPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
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
export interface SqlFailoverGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#create SqlFailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#delete SqlFailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#read SqlFailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group#update SqlFailoverGroup#update}
  */
  readonly update?: string;
}

export function sqlFailoverGroupTimeoutsToTerraform(struct?: SqlFailoverGroupTimeoutsOutputReference | SqlFailoverGroupTimeouts): any {
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

export class SqlFailoverGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlFailoverGroupTimeouts | undefined {
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

  public set internalValue(value: SqlFailoverGroupTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group azurerm_sql_failover_group}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_failover_group azurerm_sql_failover_group} Resource
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
    this._readWriteEndpointFailoverPolicy.internalValue = config.readWriteEndpointFailoverPolicy;
    this._readonlyEndpointFailoverPolicy.internalValue = config.readonlyEndpointFailoverPolicy;
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
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

  // partner_servers - computed: false, optional: false, required: true
  private _partnerServers?: SqlFailoverGroupPartnerServers[]; 
  public get partnerServers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('partner_servers') as any;
  }
  public set partnerServers(value: SqlFailoverGroupPartnerServers[]) {
    this._partnerServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerServersInput() {
    return this._partnerServers;
  }

  // read_write_endpoint_failover_policy - computed: false, optional: false, required: true
  private _readWriteEndpointFailoverPolicy = new SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(this as any, "read_write_endpoint_failover_policy", true);
  public get readWriteEndpointFailoverPolicy() {
    return this._readWriteEndpointFailoverPolicy;
  }
  public putReadWriteEndpointFailoverPolicy(value: SqlFailoverGroupReadWriteEndpointFailoverPolicy) {
    this._readWriteEndpointFailoverPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteEndpointFailoverPolicyInput() {
    return this._readWriteEndpointFailoverPolicy.internalValue;
  }

  // readonly_endpoint_failover_policy - computed: false, optional: true, required: false
  private _readonlyEndpointFailoverPolicy = new SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference(this as any, "readonly_endpoint_failover_policy", true);
  public get readonlyEndpointFailoverPolicy() {
    return this._readonlyEndpointFailoverPolicy;
  }
  public putReadonlyEndpointFailoverPolicy(value: SqlFailoverGroupReadonlyEndpointFailoverPolicy) {
    this._readonlyEndpointFailoverPolicy.internalValue = value;
  }
  public resetReadonlyEndpointFailoverPolicy() {
    this._readonlyEndpointFailoverPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyEndpointFailoverPolicyInput() {
    return this._readonlyEndpointFailoverPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlFailoverGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlFailoverGroupTimeouts) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_name: cdktf.stringToTerraform(this._serverName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      partner_servers: cdktf.listMapper(sqlFailoverGroupPartnerServersToTerraform)(this._partnerServers),
      read_write_endpoint_failover_policy: sqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(this._readWriteEndpointFailoverPolicy.internalValue),
      readonly_endpoint_failover_policy: sqlFailoverGroupReadonlyEndpointFailoverPolicyToTerraform(this._readonlyEndpointFailoverPolicy.internalValue),
      timeouts: sqlFailoverGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
