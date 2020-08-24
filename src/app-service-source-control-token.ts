// https://www.terraform.io/docs/providers/azurerm/r/app_service_source_control_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppServiceSourceControlTokenConfig extends TerraformMetaArguments {
  readonly token: string;
  readonly tokenSecret?: string;
  readonly type: string;
  /** timeouts block */
  readonly timeouts?: AppServiceSourceControlTokenTimeouts;
}
export interface AppServiceSourceControlTokenTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServiceSourceControlToken extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceSourceControlTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_source_control_token',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._token = config.token;
    this._tokenSecret = config.tokenSecret;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // token - computed: false, optional: false, required: true
  private _token: string;
  public get token() {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }

  // token_secret - computed: false, optional: true, required: false
  private _tokenSecret?: string;
  public get tokenSecret() {
    return this._tokenSecret;
  }
  public set tokenSecret(value: string | undefined) {
    this._tokenSecret = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceSourceControlTokenTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceSourceControlTokenTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      token: this._token,
      token_secret: this._tokenSecret,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
