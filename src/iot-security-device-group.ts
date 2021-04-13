// https://www.terraform.io/docs/providers/azurerm/r/iot_security_device_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecurityDeviceGroupConfig extends cdktf.TerraformMetaArguments {
  readonly iothubId: string;
  readonly name: string;
  /** allow_rule block */
  readonly allowRule?: IotSecurityDeviceGroupAllowRule[];
  /** range_rule block */
  readonly rangeRule?: IotSecurityDeviceGroupRangeRule[];
  /** timeouts block */
  readonly timeouts?: IotSecurityDeviceGroupTimeouts;
}
export interface IotSecurityDeviceGroupAllowRule {
  readonly connectionToIpNotAllowed?: string[];
  readonly localUserNotAllowed?: string[];
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
  readonly duration: string;
  readonly max: number;
  readonly min: number;
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
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
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


// Resource

export class IotSecurityDeviceGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
