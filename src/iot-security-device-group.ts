// https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecurityDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#iothub_id IotSecurityDeviceGroup#iothub_id}
  */
  readonly iothubId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#name IotSecurityDeviceGroup#name}
  */
  readonly name: string;
  /**
  * allow_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#allow_rule IotSecurityDeviceGroup#allow_rule}
  */
  readonly allowRule?: IotSecurityDeviceGroupAllowRule;
  /**
  * range_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#range_rule IotSecurityDeviceGroup#range_rule}
  */
  readonly rangeRule?: IotSecurityDeviceGroupRangeRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#timeouts IotSecurityDeviceGroup#timeouts}
  */
  readonly timeouts?: IotSecurityDeviceGroupTimeouts;
}
export interface IotSecurityDeviceGroupAllowRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}
  */
  readonly connectionFromIpsNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#connection_to_ip_not_allowed IotSecurityDeviceGroup#connection_to_ip_not_allowed}
  */
  readonly connectionToIpNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}
  */
  readonly connectionToIpsNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#local_user_not_allowed IotSecurityDeviceGroup#local_user_not_allowed}
  */
  readonly localUserNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}
  */
  readonly localUsersNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#process_not_allowed IotSecurityDeviceGroup#process_not_allowed}
  */
  readonly processNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}
  */
  readonly processesNotAllowed?: string[];
}

export function iotSecurityDeviceGroupAllowRuleToTerraform(struct?: IotSecurityDeviceGroupAllowRuleOutputReference | IotSecurityDeviceGroupAllowRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_from_ips_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.connectionFromIpsNotAllowed),
    connection_to_ip_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.connectionToIpNotAllowed),
    connection_to_ips_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.connectionToIpsNotAllowed),
    local_user_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.localUserNotAllowed),
    local_users_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.localUsersNotAllowed),
    process_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.processNotAllowed),
    processes_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.processesNotAllowed),
  }
}

export class IotSecurityDeviceGroupAllowRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IotSecurityDeviceGroupAllowRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionFromIpsNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionFromIpsNotAllowed = this._connectionFromIpsNotAllowed;
    }
    if (this._connectionToIpNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionToIpNotAllowed = this._connectionToIpNotAllowed;
    }
    if (this._connectionToIpsNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionToIpsNotAllowed = this._connectionToIpsNotAllowed;
    }
    if (this._localUserNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUserNotAllowed = this._localUserNotAllowed;
    }
    if (this._localUsersNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUsersNotAllowed = this._localUsersNotAllowed;
    }
    if (this._processNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.processNotAllowed = this._processNotAllowed;
    }
    if (this._processesNotAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.processesNotAllowed = this._processesNotAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotSecurityDeviceGroupAllowRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionFromIpsNotAllowed = undefined;
      this._connectionToIpNotAllowed = undefined;
      this._connectionToIpsNotAllowed = undefined;
      this._localUserNotAllowed = undefined;
      this._localUsersNotAllowed = undefined;
      this._processNotAllowed = undefined;
      this._processesNotAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionFromIpsNotAllowed = value.connectionFromIpsNotAllowed;
      this._connectionToIpNotAllowed = value.connectionToIpNotAllowed;
      this._connectionToIpsNotAllowed = value.connectionToIpsNotAllowed;
      this._localUserNotAllowed = value.localUserNotAllowed;
      this._localUsersNotAllowed = value.localUsersNotAllowed;
      this._processNotAllowed = value.processNotAllowed;
      this._processesNotAllowed = value.processesNotAllowed;
    }
  }

  // connection_from_ips_not_allowed - computed: false, optional: true, required: false
  private _connectionFromIpsNotAllowed?: string[]; 
  public get connectionFromIpsNotAllowed() {
    return this.getListAttribute('connection_from_ips_not_allowed');
  }
  public set connectionFromIpsNotAllowed(value: string[]) {
    this._connectionFromIpsNotAllowed = value;
  }
  public resetConnectionFromIpsNotAllowed() {
    this._connectionFromIpsNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFromIpsNotAllowedInput() {
    return this._connectionFromIpsNotAllowed;
  }

  // connection_to_ip_not_allowed - computed: false, optional: true, required: false
  private _connectionToIpNotAllowed?: string[]; 
  public get connectionToIpNotAllowed() {
    return this.getListAttribute('connection_to_ip_not_allowed');
  }
  public set connectionToIpNotAllowed(value: string[]) {
    this._connectionToIpNotAllowed = value;
  }
  public resetConnectionToIpNotAllowed() {
    this._connectionToIpNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionToIpNotAllowedInput() {
    return this._connectionToIpNotAllowed;
  }

  // connection_to_ips_not_allowed - computed: false, optional: true, required: false
  private _connectionToIpsNotAllowed?: string[]; 
  public get connectionToIpsNotAllowed() {
    return this.getListAttribute('connection_to_ips_not_allowed');
  }
  public set connectionToIpsNotAllowed(value: string[]) {
    this._connectionToIpsNotAllowed = value;
  }
  public resetConnectionToIpsNotAllowed() {
    this._connectionToIpsNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionToIpsNotAllowedInput() {
    return this._connectionToIpsNotAllowed;
  }

  // local_user_not_allowed - computed: false, optional: true, required: false
  private _localUserNotAllowed?: string[]; 
  public get localUserNotAllowed() {
    return this.getListAttribute('local_user_not_allowed');
  }
  public set localUserNotAllowed(value: string[]) {
    this._localUserNotAllowed = value;
  }
  public resetLocalUserNotAllowed() {
    this._localUserNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUserNotAllowedInput() {
    return this._localUserNotAllowed;
  }

  // local_users_not_allowed - computed: false, optional: true, required: false
  private _localUsersNotAllowed?: string[]; 
  public get localUsersNotAllowed() {
    return this.getListAttribute('local_users_not_allowed');
  }
  public set localUsersNotAllowed(value: string[]) {
    this._localUsersNotAllowed = value;
  }
  public resetLocalUsersNotAllowed() {
    this._localUsersNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUsersNotAllowedInput() {
    return this._localUsersNotAllowed;
  }

  // process_not_allowed - computed: false, optional: true, required: false
  private _processNotAllowed?: string[]; 
  public get processNotAllowed() {
    return this.getListAttribute('process_not_allowed');
  }
  public set processNotAllowed(value: string[]) {
    this._processNotAllowed = value;
  }
  public resetProcessNotAllowed() {
    this._processNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNotAllowedInput() {
    return this._processNotAllowed;
  }

  // processes_not_allowed - computed: false, optional: true, required: false
  private _processesNotAllowed?: string[]; 
  public get processesNotAllowed() {
    return this.getListAttribute('processes_not_allowed');
  }
  public set processesNotAllowed(value: string[]) {
    this._processesNotAllowed = value;
  }
  public resetProcessesNotAllowed() {
    this._processesNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesNotAllowedInput() {
    return this._processesNotAllowed;
  }
}
export interface IotSecurityDeviceGroupRangeRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#duration IotSecurityDeviceGroup#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#max IotSecurityDeviceGroup#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#min IotSecurityDeviceGroup#min}
  */
  readonly min: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#type IotSecurityDeviceGroup#type}
  */
  readonly type: string;
}

export function iotSecurityDeviceGroupRangeRuleToTerraform(struct?: IotSecurityDeviceGroupRangeRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotSecurityDeviceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#create IotSecurityDeviceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#delete IotSecurityDeviceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#read IotSecurityDeviceGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group#update IotSecurityDeviceGroup#update}
  */
  readonly update?: string;
}

export function iotSecurityDeviceGroupTimeoutsToTerraform(struct?: IotSecurityDeviceGroupTimeoutsOutputReference | IotSecurityDeviceGroupTimeouts): any {
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

export class IotSecurityDeviceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IotSecurityDeviceGroupTimeouts | undefined {
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

  public set internalValue(value: IotSecurityDeviceGroupTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group azurerm_iot_security_device_group}
*/
export class IotSecurityDeviceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_iot_security_device_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group azurerm_iot_security_device_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotSecurityDeviceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IotSecurityDeviceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_security_device_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._iothubId = config.iothubId;
    this._name = config.name;
    this._allowRule.internalValue = config.allowRule;
    this._rangeRule = config.rangeRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_id - computed: false, optional: false, required: true
  private _iothubId?: string; 
  public get iothubId() {
    return this.getStringAttribute('iothub_id');
  }
  public set iothubId(value: string) {
    this._iothubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubIdInput() {
    return this._iothubId;
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

  // allow_rule - computed: false, optional: true, required: false
  private _allowRule = new IotSecurityDeviceGroupAllowRuleOutputReference(this as any, "allow_rule", true);
  public get allowRule() {
    return this._allowRule;
  }
  public putAllowRule(value: IotSecurityDeviceGroupAllowRule) {
    this._allowRule.internalValue = value;
  }
  public resetAllowRule() {
    this._allowRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRuleInput() {
    return this._allowRule.internalValue;
  }

  // range_rule - computed: false, optional: true, required: false
  private _rangeRule?: IotSecurityDeviceGroupRangeRule[]; 
  public get rangeRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range_rule') as any;
  }
  public set rangeRule(value: IotSecurityDeviceGroupRangeRule[]) {
    this._rangeRule = value;
  }
  public resetRangeRule() {
    this._rangeRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeRuleInput() {
    return this._rangeRule;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IotSecurityDeviceGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IotSecurityDeviceGroupTimeouts) {
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
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      name: cdktf.stringToTerraform(this._name),
      allow_rule: iotSecurityDeviceGroupAllowRuleToTerraform(this._allowRule.internalValue),
      range_rule: cdktf.listMapper(iotSecurityDeviceGroupRangeRuleToTerraform)(this._rangeRule),
      timeouts: iotSecurityDeviceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
