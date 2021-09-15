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
  readonly allowRule?: IotSecurityDeviceGroupAllowRule[];
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#connection_to_ip_not_allowed IotSecurityDeviceGroup#connection_to_ip_not_allowed}
  */
  readonly connectionToIpNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#local_user_not_allowed IotSecurityDeviceGroup#local_user_not_allowed}
  */
  readonly localUserNotAllowed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html#process_not_allowed IotSecurityDeviceGroup#process_not_allowed}
  */
  readonly processNotAllowed?: string[];
}

function iotSecurityDeviceGroupAllowRuleToTerraform(struct?: IotSecurityDeviceGroupAllowRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_to_ip_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.connectionToIpNotAllowed),
    local_user_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.localUserNotAllowed),
    process_not_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.processNotAllowed),
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

function iotSecurityDeviceGroupTimeoutsToTerraform(struct?: IotSecurityDeviceGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _iothubId: string;
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

  // allow_rule - computed: false, optional: true, required: false
  private _allowRule?: IotSecurityDeviceGroupAllowRule[];
  public get allowRule() {
    return this.interpolationForAttribute('allow_rule') as any;
  }
  public set allowRule(value: IotSecurityDeviceGroupAllowRule[] ) {
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
  private _rangeRule?: IotSecurityDeviceGroupRangeRule[];
  public get rangeRule() {
    return this.interpolationForAttribute('range_rule') as any;
  }
  public set rangeRule(value: IotSecurityDeviceGroupRangeRule[] ) {
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
  private _timeouts?: IotSecurityDeviceGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IotSecurityDeviceGroupTimeouts ) {
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
      allow_rule: cdktf.listMapper(iotSecurityDeviceGroupAllowRuleToTerraform)(this._allowRule),
      range_rule: cdktf.listMapper(iotSecurityDeviceGroupRangeRuleToTerraform)(this._rangeRule),
      timeouts: iotSecurityDeviceGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
