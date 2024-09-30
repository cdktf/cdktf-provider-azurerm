// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlFailoverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#databases MssqlFailoverGroup#databases}
  */
  readonly databases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#name MssqlFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}
  */
  readonly readonlyEndpointFailoverPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#server_id MssqlFailoverGroup#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#tags MssqlFailoverGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * partner_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#partner_server MssqlFailoverGroup#partner_server}
  */
  readonly partnerServer: MssqlFailoverGroupPartnerServer[] | cdktf.IResolvable;
  /**
  * read_write_endpoint_failover_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#read_write_endpoint_failover_policy MssqlFailoverGroup#read_write_endpoint_failover_policy}
  */
  readonly readWriteEndpointFailoverPolicy: MssqlFailoverGroupReadWriteEndpointFailoverPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#timeouts MssqlFailoverGroup#timeouts}
  */
  readonly timeouts?: MssqlFailoverGroupTimeouts;
}
export interface MssqlFailoverGroupPartnerServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function mssqlFailoverGroupPartnerServerToTerraform(struct?: MssqlFailoverGroupPartnerServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function mssqlFailoverGroupPartnerServerToHclTerraform(struct?: MssqlFailoverGroupPartnerServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlFailoverGroupPartnerServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MssqlFailoverGroupPartnerServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlFailoverGroupPartnerServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class MssqlFailoverGroupPartnerServerList extends cdktf.ComplexList {
  public internalValue? : MssqlFailoverGroupPartnerServer[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MssqlFailoverGroupPartnerServerOutputReference {
    return new MssqlFailoverGroupPartnerServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MssqlFailoverGroupReadWriteEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#grace_minutes MssqlFailoverGroup#grace_minutes}
  */
  readonly graceMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#mode MssqlFailoverGroup#mode}
  */
  readonly mode: string;
}

export function mssqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(struct?: MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference | MssqlFailoverGroupReadWriteEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_minutes: cdktf.numberToTerraform(struct!.graceMinutes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function mssqlFailoverGroupReadWriteEndpointFailoverPolicyToHclTerraform(struct?: MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference | MssqlFailoverGroupReadWriteEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace_minutes: {
      value: cdktf.numberToHclTerraform(struct!.graceMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#create MssqlFailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#delete MssqlFailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#read MssqlFailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#update MssqlFailoverGroup#update}
  */
  readonly update?: string;
}

export function mssqlFailoverGroupTimeoutsToTerraform(struct?: MssqlFailoverGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function mssqlFailoverGroupTimeoutsToHclTerraform(struct?: MssqlFailoverGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlFailoverGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlFailoverGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MssqlFailoverGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group azurerm_mssql_failover_group}
*/
export class MssqlFailoverGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_failover_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlFailoverGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlFailoverGroup to import
  * @param importFromId The id of the existing MssqlFailoverGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlFailoverGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_failover_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_failover_group azurerm_mssql_failover_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlFailoverGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlFailoverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_failover_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databases = config.databases;
    this._id = config.id;
    this._name = config.name;
    this._readonlyEndpointFailoverPolicyEnabled = config.readonlyEndpointFailoverPolicyEnabled;
    this._serverId = config.serverId;
    this._tags = config.tags;
    this._partnerServer.internalValue = config.partnerServer;
    this._readWriteEndpointFailoverPolicy.internalValue = config.readWriteEndpointFailoverPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // databases - computed: false, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return cdktf.Fn.tolist(this.getListAttribute('databases'));
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _partnerServer = new MssqlFailoverGroupPartnerServerList(this, "partner_server", false);
  public get partnerServer() {
    return this._partnerServer;
  }
  public putPartnerServer(value: MssqlFailoverGroupPartnerServer[] | cdktf.IResolvable) {
    this._partnerServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerServerInput() {
    return this._partnerServer.internalValue;
  }

  // read_write_endpoint_failover_policy - computed: false, optional: false, required: true
  private _readWriteEndpointFailoverPolicy = new MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(this, "read_write_endpoint_failover_policy");
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
  private _timeouts = new MssqlFailoverGroupTimeoutsOutputReference(this, "timeouts");
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
      databases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._databases),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      readonly_endpoint_failover_policy_enabled: cdktf.booleanToTerraform(this._readonlyEndpointFailoverPolicyEnabled),
      server_id: cdktf.stringToTerraform(this._serverId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      partner_server: cdktf.listMapper(mssqlFailoverGroupPartnerServerToTerraform, true)(this._partnerServer.internalValue),
      read_write_endpoint_failover_policy: mssqlFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(this._readWriteEndpointFailoverPolicy.internalValue),
      timeouts: mssqlFailoverGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      databases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._databases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readonly_endpoint_failover_policy_enabled: {
        value: cdktf.booleanToHclTerraform(this._readonlyEndpointFailoverPolicyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      partner_server: {
        value: cdktf.listMapperHcl(mssqlFailoverGroupPartnerServerToHclTerraform, true)(this._partnerServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlFailoverGroupPartnerServerList",
      },
      read_write_endpoint_failover_policy: {
        value: mssqlFailoverGroupReadWriteEndpointFailoverPolicyToHclTerraform(this._readWriteEndpointFailoverPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlFailoverGroupReadWriteEndpointFailoverPolicyList",
      },
      timeouts: {
        value: mssqlFailoverGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlFailoverGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
