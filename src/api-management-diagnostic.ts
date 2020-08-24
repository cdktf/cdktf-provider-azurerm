// https://www.terraform.io/docs/providers/azurerm/r/api_management_diagnostic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementDiagnosticConfig extends TerraformMetaArguments {
  readonly apiManagementName: string;
  readonly enabled: boolean;
  readonly identifier: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: ApiManagementDiagnosticTimeouts;
}
export interface ApiManagementDiagnosticTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagementDiagnostic extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementDiagnosticConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_diagnostic',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._enabled = config.enabled;
    this._identifier = config.identifier;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this._apiManagementName;
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier: string;
  public get identifier() {
    return this._identifier;
  }
  public set identifier(value: string) {
    this._identifier = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementDiagnosticTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementDiagnosticTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: this._apiManagementName,
      enabled: this._enabled,
      identifier: this._identifier,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
