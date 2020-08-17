// https://www.terraform.io/docs/providers/azurerm/r/logic_app_action_http.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogicAppActionHttpConfig extends TerraformMetaArguments {
  readonly body?: string;
  readonly headers?: { [key: string]: string };
  readonly logicAppId: string;
  readonly method: string;
  readonly name: string;
  readonly uri: string;
  /** timeouts block */
  readonly timeouts?: LogicAppActionHttpTimeouts;
}
export interface LogicAppActionHttpTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogicAppActionHttp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogicAppActionHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_action_http',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._body = config.body;
    this._headers = config.headers;
    this._logicAppId = config.logicAppId;
    this._method = config.method;
    this._name = config.name;
    this._uri = config.uri;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string;
  public get body() {
    return this._body;
  }
  public set body(value: string | undefined) {
    this._body = value;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string };
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
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

  // method - computed: false, optional: false, required: true
  private _method: string;
  public get method() {
    return this._method;
  }
  public set method(value: string) {
    this._method = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // uri - computed: false, optional: false, required: true
  private _uri: string;
  public get uri() {
    return this._uri;
  }
  public set uri(value: string) {
    this._uri = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppActionHttpTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LogicAppActionHttpTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      body: this._body,
      headers: this._headers,
      logic_app_id: this._logicAppId,
      method: this._method,
      name: this._name,
      uri: this._uri,
      timeouts: this._timeouts,
    };
  }
}
