// https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsApiKeyConfig extends cdktf.TerraformMetaArguments {
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

function applicationInsightsApiKeyTimeoutsToTerraform(struct?: ApplicationInsightsApiKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApplicationInsightsApiKey extends cdktf.TerraformResource {

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

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId: string;
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // read_permissions - computed: false, optional: true, required: false
  private _readPermissions?: string[];
  public get readPermissions() {
    return this.getListAttribute('read_permissions');
  }
  public set readPermissions(value: string[] ) {
    this._readPermissions = value;
  }
  public resetReadPermissions() {
    this._readPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPermissionsInput() {
    return this._readPermissions
  }

  // write_permissions - computed: false, optional: true, required: false
  private _writePermissions?: string[];
  public get writePermissions() {
    return this.getListAttribute('write_permissions');
  }
  public set writePermissions(value: string[] ) {
    this._writePermissions = value;
  }
  public resetWritePermissions() {
    this._writePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writePermissionsInput() {
    return this._writePermissions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsApiKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApplicationInsightsApiKeyTimeouts ) {
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
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      name: cdktf.stringToTerraform(this._name),
      read_permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._readPermissions),
      write_permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._writePermissions),
      timeouts: applicationInsightsApiKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
