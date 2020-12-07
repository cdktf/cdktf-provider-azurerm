// https://www.terraform.io/docs/providers/azurerm/r/app_service_custom_hostname_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppServiceCustomHostnameBindingConfig extends cdktf.TerraformMetaArguments {
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

function appServiceCustomHostnameBindingTimeoutsToTerraform(struct?: AppServiceCustomHostnameBindingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppServiceCustomHostnameBinding extends cdktf.TerraformResource {

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
    return this.getStringAttribute('app_service_name');
  }
  public set appServiceName(value: string) {
    this._appServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceNameInput() {
    return this._appServiceName
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // ssl_state - computed: false, optional: true, required: false
  private _sslState?: string;
  public get sslState() {
    return this.getStringAttribute('ssl_state');
  }
  public set sslState(value: string ) {
    this._sslState = value;
  }
  public resetSslState() {
    this._sslState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStateInput() {
    return this._sslState
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string;
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string ) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint
  }

  // virtual_ip - computed: true, optional: false, required: false
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppServiceCustomHostnameBindingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppServiceCustomHostnameBindingTimeouts ) {
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
      app_service_name: cdktf.stringToTerraform(this._appServiceName),
      hostname: cdktf.stringToTerraform(this._hostname),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      ssl_state: cdktf.stringToTerraform(this._sslState),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      timeouts: appServiceCustomHostnameBindingTimeoutsToTerraform(this._timeouts),
    };
  }
}
