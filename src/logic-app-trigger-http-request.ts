// https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogicAppTriggerHttpRequestConfig extends TerraformMetaArguments {
  readonly logicAppId: string;
  readonly method?: string;
  readonly name: string;
  readonly relativePath?: string;
  readonly schema: string;
  /** timeouts block */
  readonly timeouts?: LogicAppTriggerHttpRequestTimeouts;
}
export interface LogicAppTriggerHttpRequestTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogicAppTriggerHttpRequest extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogicAppTriggerHttpRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_trigger_http_request',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logicAppId = config.logicAppId;
    this._method = config.method;
    this._name = config.name;
    this._relativePath = config.relativePath;
    this._schema = config.schema;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // method - computed: false, optional: true, required: false
  private _method?: string;
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string ) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
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

  // relative_path - computed: false, optional: true, required: false
  private _relativePath?: string;
  public get relativePath() {
    return this.getStringAttribute('relative_path');
  }
  public set relativePath(value: string ) {
    this._relativePath = value;
  }
  public resetRelativePath() {
    this._relativePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePathInput() {
    return this._relativePath
  }

  // schema - computed: false, optional: false, required: true
  private _schema: string;
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppTriggerHttpRequestTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppTriggerHttpRequestTimeouts ) {
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
      logic_app_id: this._logicAppId,
      method: this._method,
      name: this._name,
      relative_path: this._relativePath,
      schema: this._schema,
      timeouts: this._timeouts,
    };
  }
}
