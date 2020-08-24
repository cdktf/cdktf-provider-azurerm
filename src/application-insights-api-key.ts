// https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApplicationInsightsApiKeyConfig extends TerraformMetaArguments {
  readonly applicationInsightsId: string;
  readonly name: string;
  readonly readPermissions?: string[];
  readonly writePermissions?: string[];
  /** timeouts block */
  readonly timeouts?: ApplicationInsightsApiKeyTimeouts;
}
export interface ApplicationInsightsApiKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApplicationInsightsApiKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApplicationInsightsApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights_api_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationInsightsId = config.applicationInsightsId;
    this._name = config.name;
    this._readPermissions = config.readPermissions;
    this._writePermissions = config.writePermissions;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: true
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId: string;
  public get applicationInsightsId() {
    return this._applicationInsightsId;
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // read_permissions - computed: false, optional: true, required: false
  private _readPermissions?: string[];
  public get readPermissions() {
    return this._readPermissions;
  }
  public set readPermissions(value: string[] | undefined) {
    this._readPermissions = value;
  }

  // write_permissions - computed: false, optional: true, required: false
  private _writePermissions?: string[];
  public get writePermissions() {
    return this._writePermissions;
  }
  public set writePermissions(value: string[] | undefined) {
    this._writePermissions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsApiKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApplicationInsightsApiKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_insights_id: this._applicationInsightsId,
      name: this._name,
      read_permissions: this._readPermissions,
      write_permissions: this._writePermissions,
      timeouts: this._timeouts,
    };
  }
}
