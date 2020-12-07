// https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_custom.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppTriggerCustomConfig extends cdktf.TerraformMetaArguments {
  readonly body: string;
  readonly logicAppId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: LogicAppTriggerCustomTimeouts;
}
export interface LogicAppTriggerCustomTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function logicAppTriggerCustomTimeoutsToTerraform(struct?: LogicAppTriggerCustomTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogicAppTriggerCustom extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogicAppTriggerCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_trigger_custom',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._body = config.body;
    this._logicAppId = config.logicAppId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body: string;
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logic_app_id - computed: false, optional: false, required: true
  private _logicAppId: string;
  public get logicAppId() {
    return this.getStringAttribute('logic_app_id');
  }
  public set logicAppId(value: string) {
    this._logicAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppIdInput() {
    return this._logicAppId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppTriggerCustomTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppTriggerCustomTimeouts ) {
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
      body: cdktf.stringToTerraform(this._body),
      logic_app_id: cdktf.stringToTerraform(this._logicAppId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: logicAppTriggerCustomTimeoutsToTerraform(this._timeouts),
    };
  }
}
