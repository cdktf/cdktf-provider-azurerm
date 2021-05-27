// https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#application_insights_id ApplicationInsightsApiKey#application_insights_id}
  */
  readonly applicationInsightsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#name ApplicationInsightsApiKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#read_permissions ApplicationInsightsApiKey#read_permissions}
  */
  readonly readPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#write_permissions ApplicationInsightsApiKey#write_permissions}
  */
  readonly writePermissions?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#timeouts ApplicationInsightsApiKey#timeouts}
  */
  readonly timeouts?: ApplicationInsightsApiKeyTimeouts;
}
export interface ApplicationInsightsApiKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#create ApplicationInsightsApiKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#delete ApplicationInsightsApiKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#read ApplicationInsightsApiKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html#update ApplicationInsightsApiKey#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html azurerm_application_insights_api_key}
*/
export class ApplicationInsightsApiKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html azurerm_application_insights_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationInsightsApiKeyConfig
  */
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
