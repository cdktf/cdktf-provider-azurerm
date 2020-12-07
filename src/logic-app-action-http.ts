// https://www.terraform.io/docs/providers/azurerm/r/logic_app_action_http.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppActionHttpConfig extends cdktf.TerraformMetaArguments {
  readonly body?: string;
  readonly headers?: { [key: string]: string };
  readonly logicAppId: string;
  readonly method: string;
  readonly name: string;
  readonly uri: string;
  /** run_after block */
  readonly runAfter?: LogicAppActionHttpRunAfter[];
  /** timeouts block */
  readonly timeouts?: LogicAppActionHttpTimeouts;
}
export interface LogicAppActionHttpRunAfter {
  readonly actionName: string;
  readonly actionResult: string;
}

function logicAppActionHttpRunAfterToTerraform(struct?: LogicAppActionHttpRunAfter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    action_result: cdktf.stringToTerraform(struct!.actionResult),
  }
}

export interface LogicAppActionHttpTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function logicAppActionHttpTimeoutsToTerraform(struct?: LogicAppActionHttpTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LogicAppActionHttp extends cdktf.TerraformResource {

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
    this._runAfter = config.runAfter;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string;
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string ) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string };
  public get headers() {
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: { [key: string]: string } ) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
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

  // method - computed: false, optional: false, required: true
  private _method: string;
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
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

  // uri - computed: false, optional: false, required: true
  private _uri: string;
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri
  }

  // run_after - computed: false, optional: true, required: false
  private _runAfter?: LogicAppActionHttpRunAfter[];
  public get runAfter() {
    return this.interpolationForAttribute('run_after') as any;
  }
  public set runAfter(value: LogicAppActionHttpRunAfter[] ) {
    this._runAfter = value;
  }
  public resetRunAfter() {
    this._runAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAfterInput() {
    return this._runAfter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppActionHttpTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppActionHttpTimeouts ) {
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
      headers: cdktf.hashMapper(cdktf.anyToTerraform)(this._headers),
      logic_app_id: cdktf.stringToTerraform(this._logicAppId),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      uri: cdktf.stringToTerraform(this._uri),
      run_after: cdktf.listMapper(logicAppActionHttpRunAfterToTerraform)(this._runAfter),
      timeouts: logicAppActionHttpTimeoutsToTerraform(this._timeouts),
    };
  }
}
