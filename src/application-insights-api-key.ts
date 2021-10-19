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

function applicationInsightsApiKeyTimeoutsToTerraform(struct?: ApplicationInsightsApiKeyTimeoutsOutputReference | ApplicationInsightsApiKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ApplicationInsightsApiKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_api_key.html azurerm_application_insights_api_key}
*/
export class ApplicationInsightsApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_application_insights_api_key";

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
  private _applicationInsightsId?: string; 
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
  private _name?: string; 
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
  private _readPermissions?: string[] | undefined; 
  public get readPermissions() {
    return this.getListAttribute('read_permissions');
  }
  public set readPermissions(value: string[] | undefined) {
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
  private _writePermissions?: string[] | undefined; 
  public get writePermissions() {
    return this.getListAttribute('write_permissions');
  }
  public set writePermissions(value: string[] | undefined) {
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
  private _timeouts?: ApplicationInsightsApiKeyTimeouts | undefined; 
  private __timeoutsOutput = new ApplicationInsightsApiKeyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApplicationInsightsApiKeyTimeouts | undefined) {
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
