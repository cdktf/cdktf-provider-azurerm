// https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlManagedInstanceFailoverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#location SqlManagedInstanceFailoverGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#managed_instance_name SqlManagedInstanceFailoverGroup#managed_instance_name}
  */
  readonly managedInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#name SqlManagedInstanceFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#partner_managed_instance_id SqlManagedInstanceFailoverGroup#partner_managed_instance_id}
  */
  readonly partnerManagedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#readonly_endpoint_failover_policy_enabled SqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}
  */
  readonly readonlyEndpointFailoverPolicyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#resource_group_name SqlManagedInstanceFailoverGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * read_write_endpoint_failover_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#read_write_endpoint_failover_policy SqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}
  */
  readonly readWriteEndpointFailoverPolicy: SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#timeouts SqlManagedInstanceFailoverGroup#timeouts}
  */
  readonly timeouts?: SqlManagedInstanceFailoverGroupTimeouts;
}
export class SqlManagedInstanceFailoverGroupPartnerRegion extends cdktf.ComplexComputedList {

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}
export interface SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#grace_minutes SqlManagedInstanceFailoverGroup#grace_minutes}
  */
  readonly graceMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#mode SqlManagedInstanceFailoverGroup#mode}
  */
  readonly mode: string;
}

export function sqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(struct?: SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference | SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_minutes: cdktf.numberToTerraform(struct!.graceMinutes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graceMinutes) {
      hasAnyValues = true;
      internalValueResult.graceMinutes = this._graceMinutes;
    }
    if (this._mode) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy | undefined) {
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
export interface SqlManagedInstanceFailoverGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#create SqlManagedInstanceFailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#delete SqlManagedInstanceFailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#read SqlManagedInstanceFailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html#update SqlManagedInstanceFailoverGroup#update}
  */
  readonly update?: string;
}

export function sqlManagedInstanceFailoverGroupTimeoutsToTerraform(struct?: SqlManagedInstanceFailoverGroupTimeoutsOutputReference | SqlManagedInstanceFailoverGroupTimeouts): any {
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

export class SqlManagedInstanceFailoverGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SqlManagedInstanceFailoverGroupTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlManagedInstanceFailoverGroupTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html azurerm_sql_managed_instance_failover_group}
*/
export class SqlManagedInstanceFailoverGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sql_managed_instance_failover_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sql_managed_instance_failover_group.html azurerm_sql_managed_instance_failover_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlManagedInstanceFailoverGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SqlManagedInstanceFailoverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sql_managed_instance_failover_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._managedInstanceName = config.managedInstanceName;
    this._name = config.name;
    this._partnerManagedInstanceId = config.partnerManagedInstanceId;
    this._readonlyEndpointFailoverPolicyEnabled = config.readonlyEndpointFailoverPolicyEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._readWriteEndpointFailoverPolicy.internalValue = config.readWriteEndpointFailoverPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // managed_instance_name - computed: false, optional: false, required: true
  private _managedInstanceName?: string; 
  public get managedInstanceName() {
    return this.getStringAttribute('managed_instance_name');
  }
  public set managedInstanceName(value: string) {
    this._managedInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceNameInput() {
    return this._managedInstanceName;
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

  // partner_managed_instance_id - computed: false, optional: false, required: true
  private _partnerManagedInstanceId?: string; 
  public get partnerManagedInstanceId() {
    return this.getStringAttribute('partner_managed_instance_id');
  }
  public set partnerManagedInstanceId(value: string) {
    this._partnerManagedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerManagedInstanceIdInput() {
    return this._partnerManagedInstanceId;
  }

  // partner_region - computed: true, optional: false, required: false
  public partnerRegion(index: string) {
    return new SqlManagedInstanceFailoverGroupPartnerRegion(this, 'partner_region', index);
  }

  // readonly_endpoint_failover_policy_enabled - computed: false, optional: true, required: false
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

  // read_write_endpoint_failover_policy - computed: false, optional: false, required: true
  private _readWriteEndpointFailoverPolicy = new SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(this as any, "read_write_endpoint_failover_policy", true);
  public get readWriteEndpointFailoverPolicy() {
    return this._readWriteEndpointFailoverPolicy;
  }
  public putReadWriteEndpointFailoverPolicy(value: SqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy) {
    this._readWriteEndpointFailoverPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteEndpointFailoverPolicyInput() {
    return this._readWriteEndpointFailoverPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlManagedInstanceFailoverGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlManagedInstanceFailoverGroupTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      managed_instance_name: cdktf.stringToTerraform(this._managedInstanceName),
      name: cdktf.stringToTerraform(this._name),
      partner_managed_instance_id: cdktf.stringToTerraform(this._partnerManagedInstanceId),
      readonly_endpoint_failover_policy_enabled: cdktf.booleanToTerraform(this._readonlyEndpointFailoverPolicyEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      read_write_endpoint_failover_policy: sqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyToTerraform(this._readWriteEndpointFailoverPolicy.internalValue),
      timeouts: sqlManagedInstanceFailoverGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
