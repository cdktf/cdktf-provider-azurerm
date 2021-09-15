// https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppTriggerHttpRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#logic_app_id LogicAppTriggerHttpRequest#logic_app_id}
  */
  readonly logicAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#method LogicAppTriggerHttpRequest#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#name LogicAppTriggerHttpRequest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#relative_path LogicAppTriggerHttpRequest#relative_path}
  */
  readonly relativePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#schema LogicAppTriggerHttpRequest#schema}
  */
  readonly schema: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#timeouts LogicAppTriggerHttpRequest#timeouts}
  */
  readonly timeouts?: LogicAppTriggerHttpRequestTimeouts;
}
export interface LogicAppTriggerHttpRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#create LogicAppTriggerHttpRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#delete LogicAppTriggerHttpRequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#read LogicAppTriggerHttpRequest#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html#update LogicAppTriggerHttpRequest#update}
  */
  readonly update?: string;
}

function logicAppTriggerHttpRequestTimeoutsToTerraform(struct?: LogicAppTriggerHttpRequestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html azurerm_logic_app_trigger_http_request}
*/
export class LogicAppTriggerHttpRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_trigger_http_request";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_trigger_http_request.html azurerm_logic_app_trigger_http_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppTriggerHttpRequestConfig
  */
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

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
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
      logic_app_id: cdktf.stringToTerraform(this._logicAppId),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      relative_path: cdktf.stringToTerraform(this._relativePath),
      schema: cdktf.stringToTerraform(this._schema),
      timeouts: logicAppTriggerHttpRequestTimeoutsToTerraform(this._timeouts),
    };
  }
}
