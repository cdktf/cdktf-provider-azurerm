// https://www.terraform.io/docs/providers/azurerm/r/logic_app_action_custom.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogicAppActionCustomConfig extends TerraformMetaArguments {
  readonly body: string;
  readonly logicAppId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: LogicAppActionCustomTimeouts;
}
export interface LogicAppActionCustomTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogicAppActionCustom extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogicAppActionCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_action_custom',
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
    return this._body;
  }
  public set body(value: string) {
    this._body = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // logic_app_id - computed: false, optional: false, required: true
  private _logicAppId: string;
  public get logicAppId() {
    return this._logicAppId;
  }
  public set logicAppId(value: string) {
    this._logicAppId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppActionCustomTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LogicAppActionCustomTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      body: this._body,
      logic_app_id: this._logicAppId,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
