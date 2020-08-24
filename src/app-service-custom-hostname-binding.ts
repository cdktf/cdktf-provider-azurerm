// https://www.terraform.io/docs/providers/azurerm/r/app_service_custom_hostname_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppServiceCustomHostnameBindingConfig extends TerraformMetaArguments {
  readonly appServiceName: string;
  readonly hostname: string;
  readonly resourceGroupName: string;
  readonly sslState?: string;
  readonly thumbprint?: string;
  /** timeouts block */
  readonly timeouts?: AppServiceCustomHostnameBindingTimeouts;
}
export interface AppServiceCustomHostnameBindingTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class AppServiceCustomHostnameBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppServiceCustomHostnameBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_custom_hostname_binding',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appServiceName = config.appServiceName;
    this._hostname = config.hostname;
    this._resourceGroupName = config.resourceGroupName;
    this._sslState = config.sslState;
    this._thumbprint = config.thumbprint;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_name - computed: false, optional: false, required: true
  private _appServiceName: string;
  public get appServiceName() {
    return this._appServiceName;
  }
  public set appServiceName(value: string) {
    this._appServiceName = value;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname: string;
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string) {
    this._hostname = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // ssl_state - computed: false, optional: true, required: false
  private _sslState?: string;
  public get sslState() {
    return this._sslState;
  }
  public set sslState(value: string | undefined) {
    this._sslState = value;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string;
  public get thumbprint() {
    return this._thumbprint;
  }
  public set thumbprint(value: string | undefined) {
    this._thumbprint = value;
  }

  // virtual_ip - computed: true, optional: false, required: true
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceCustomHostnameBindingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppServiceCustomHostnameBindingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_name: this._appServiceName,
      hostname: this._hostname,
      resource_group_name: this._resourceGroupName,
      ssl_state: this._sslState,
      thumbprint: this._thumbprint,
      timeouts: this._timeouts,
    };
  }
}
