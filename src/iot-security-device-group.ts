// https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecurityDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#iothub_id IotSecurityDeviceGroup#iothub_id}
  */
  readonly iothubId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#name IotSecurityDeviceGroup#name}
  */
  readonly name: string;
  /**
  * allow_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#allow_rule IotSecurityDeviceGroup#allow_rule}
  */
  readonly allowRule?: IotSecurityDeviceGroupAllowRule;
  /**
  * range_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#range_rule IotSecurityDeviceGroup#range_rule}
  */
  readonly rangeRule?: IotSecurityDeviceGroupRangeRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#timeouts IotSecurityDeviceGroup#timeouts}
  */
  readonly timeouts?: IotSecurityDeviceGroupTimeouts;
}
export interface IotSecurityDeviceGroupAllowRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#connection_from_ips_not_allowed IotSecurityDeviceGroup#connection_from_ips_not_allowed}
  */
  readonly connectionFromIpsNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#connection_to_ip_not_allowed IotSecurityDeviceGroup#connection_to_ip_not_allowed}
  */
  readonly connectionToIpNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#connection_to_ips_not_allowed IotSecurityDeviceGroup#connection_to_ips_not_allowed}
  */
  readonly connectionToIpsNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#local_user_not_allowed IotSecurityDeviceGroup#local_user_not_allowed}
  */
  readonly localUserNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#local_users_not_allowed IotSecurityDeviceGroup#local_users_not_allowed}
  */
  readonly localUsersNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#process_not_allowed IotSecurityDeviceGroup#process_not_allowed}
  */
  readonly processNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#processes_not_allowed IotSecurityDeviceGroup#processes_not_allowed}
  */
  readonly processesNotAllowed?: string[];
}

function iotSecurityDeviceGroupAllowRuleToTerraform(struct?: IotSecurityDeviceGroupAllowRuleOutputReference | IotSecurityDeviceGroupAllowRule): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connection_from_ips_not_allowed - computed: false, optional: true, required: false
  private _connectionFromIpsNotAllowed?: string[] | undefined; 
  public get connectionFromIpsNotAllowed() {
    return this.getListAttribute('connection_from_ips_not_allowed');
  }
  public set connectionFromIpsNotAllowed(value: string[] | undefined) {
    this._connectionFromIpsNotAllowed = value;
  }
  public resetConnectionFromIpsNotAllowed() {
    this._connectionFromIpsNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFromIpsNotAllowedInput() {
    return this._connectionFromIpsNotAllowed
  }

  // connection_to_ip_not_allowed - computed: false, optional: true, required: false
  private _connectionToIpNotAllowed?: string[] | undefined; 
  public get connectionToIpNotAllowed() {
    return this.getListAttribute('connection_to_ip_not_allowed');
  }
  public set connectionToIpNotAllowed(value: string[] | undefined) {
    this._connectionToIpNotAllowed = value;
  }
  public resetConnectionToIpNotAllowed() {
    this._connectionToIpNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionToIpNotAllowedInput() {
    return this._connectionToIpNotAllowed
  }

  // connection_to_ips_not_allowed - computed: false, optional: true, required: false
  private _connectionToIpsNotAllowed?: string[] | undefined; 
  public get connectionToIpsNotAllowed() {
    return this.getListAttribute('connection_to_ips_not_allowed');
  }
  public set connectionToIpsNotAllowed(value: string[] | undefined) {
    this._connectionToIpsNotAllowed = value;
  }
  public resetConnectionToIpsNotAllowed() {
    this._connectionToIpsNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionToIpsNotAllowedInput() {
    return this._connectionToIpsNotAllowed
  }

  // local_user_not_allowed - computed: false, optional: true, required: false
  private _localUserNotAllowed?: string[] | undefined; 
  public get localUserNotAllowed() {
    return this.getListAttribute('local_user_not_allowed');
  }
  public set localUserNotAllowed(value: string[] | undefined) {
    this._localUserNotAllowed = value;
  }
  public resetLocalUserNotAllowed() {
    this._localUserNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUserNotAllowedInput() {
    return this._localUserNotAllowed
  }

  // local_users_not_allowed - computed: false, optional: true, required: false
  private _localUsersNotAllowed?: string[] | undefined; 
  public get localUsersNotAllowed() {
    return this.getListAttribute('local_users_not_allowed');
  }
  public set localUsersNotAllowed(value: string[] | undefined) {
    this._localUsersNotAllowed = value;
  }
  public resetLocalUsersNotAllowed() {
    this._localUsersNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUsersNotAllowedInput() {
    return this._localUsersNotAllowed
  }

  // process_not_allowed - computed: false, optional: true, required: false
  private _processNotAllowed?: string[] | undefined; 
  public get processNotAllowed() {
    return this.getListAttribute('process_not_allowed');
  }
  public set processNotAllowed(value: string[] | undefined) {
    this._processNotAllowed = value;
  }
  public resetProcessNotAllowed() {
    this._processNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNotAllowedInput() {
    return this._processNotAllowed
  }

  // processes_not_allowed - computed: false, optional: true, required: false
  private _processesNotAllowed?: string[] | undefined; 
  public get processesNotAllowed() {
    return this.getListAttribute('processes_not_allowed');
  }
  public set processesNotAllowed(value: string[] | undefined) {
    this._processesNotAllowed = value;
  }
  public resetProcessesNotAllowed() {
    this._processesNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesNotAllowedInput() {
    return this._processesNotAllowed
  }
}
export interface IotSecurityDeviceGroupRangeRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#duration IotSecurityDeviceGroup#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#max IotSecurityDeviceGroup#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#min IotSecurityDeviceGroup#min}
  */
  readonly min: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#type IotSecurityDeviceGroup#type}
  */
  readonly type: string;
}

function iotSecurityDeviceGroupRangeRuleToTerraform(struct?: IotSecurityDeviceGroupRangeRule): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#create IotSecurityDeviceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#delete IotSecurityDeviceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#read IotSecurityDeviceGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#update IotSecurityDeviceGroup#update}
  */
  readonly update?: string;
}

function iotSecurityDeviceGroupTimeoutsToTerraform(struct?: IotSecurityDeviceGroupTimeoutsOutputReference | IotSecurityDeviceGroupTimeouts): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html azurerm_iot_security_device_group}
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
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html azurerm_iot_security_device_group} Resource
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
    this._allowRule = config.allowRule;
    this._rangeRule = config.rangeRule;
    this._timeouts = config.timeouts;
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
    return this._iothubId
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
    return this._name
  }

  // allow_rule - computed: false, optional: true, required: false
  private _allowRule?: IotSecurityDeviceGroupAllowRule | undefined; 
  private __allowRuleOutput = new IotSecurityDeviceGroupAllowRuleOutputReference(this as any, "allow_rule", true);
  public get allowRule() {
    return this.__allowRuleOutput;
  }
  public putAllowRule(value: IotSecurityDeviceGroupAllowRule | undefined) {
    this._allowRule = value;
  }
  public resetAllowRule() {
    this._allowRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRuleInput() {
    return this._allowRule
  }

  // range_rule - computed: false, optional: true, required: false
  private _rangeRule?: IotSecurityDeviceGroupRangeRule[] | undefined; 
  public get rangeRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('range_rule') as any;
  }
  public set rangeRule(value: IotSecurityDeviceGroupRangeRule[] | undefined) {
    this._rangeRule = value;
  }
  public resetRangeRule() {
    this._rangeRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeRuleInput() {
    return this._rangeRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotSecurityDeviceGroupTimeouts | undefined; 
  private __timeoutsOutput = new IotSecurityDeviceGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: IotSecurityDeviceGroupTimeouts | undefined) {
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
      iothub_id: cdktf.stringToTerraform(this._iothubId),
      name: cdktf.stringToTerraform(this._name),
      allow_rule: iotSecurityDeviceGroupAllowRuleToTerraform(this._allowRule),
      range_rule: cdktf.listMapper(iotSecurityDeviceGroupRangeRuleToTerraform)(this._rangeRule),
      timeouts: iotSecurityDeviceGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
