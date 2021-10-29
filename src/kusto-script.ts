// https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#continue_on_errors_enabled KustoScript#continue_on_errors_enabled}
  */
  readonly continueOnErrorsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#database_id KustoScript#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#force_an_update_when_value_changed KustoScript#force_an_update_when_value_changed}
  */
  readonly forceAnUpdateWhenValueChanged?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#name KustoScript#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#sas_token KustoScript#sas_token}
  */
  readonly sasToken: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#url KustoScript#url}
  */
  readonly url: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#timeouts KustoScript#timeouts}
  */
  readonly timeouts?: KustoScriptTimeouts;
}
export interface KustoScriptTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#create KustoScript#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#delete KustoScript#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#read KustoScript#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html#update KustoScript#update}
  */
  readonly update?: string;
}

function kustoScriptTimeoutsToTerraform(struct?: KustoScriptTimeoutsOutputReference | KustoScriptTimeouts): any {
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

export class KustoScriptTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html azurerm_kusto_script}
*/
export class KustoScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kusto_script";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_script.html azurerm_kusto_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoScriptConfig
  */
  public constructor(scope: Construct, id: string, config: KustoScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_script',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._continueOnErrorsEnabled = config.continueOnErrorsEnabled;
    this._databaseId = config.databaseId;
    this._forceAnUpdateWhenValueChanged = config.forceAnUpdateWhenValueChanged;
    this._name = config.name;
    this._sasToken = config.sasToken;
    this._url = config.url;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // continue_on_errors_enabled - computed: false, optional: true, required: false
  private _continueOnErrorsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get continueOnErrorsEnabled() {
    return this.getBooleanAttribute('continue_on_errors_enabled') as any;
  }
  public set continueOnErrorsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._continueOnErrorsEnabled = value;
  }
  public resetContinueOnErrorsEnabled() {
    this._continueOnErrorsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnErrorsEnabledInput() {
    return this._continueOnErrorsEnabled
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId
  }

  // force_an_update_when_value_changed - computed: true, optional: true, required: false
  private _forceAnUpdateWhenValueChanged?: string | undefined; 
  public get forceAnUpdateWhenValueChanged() {
    return this.getStringAttribute('force_an_update_when_value_changed');
  }
  public set forceAnUpdateWhenValueChanged(value: string | undefined) {
    this._forceAnUpdateWhenValueChanged = value;
  }
  public resetForceAnUpdateWhenValueChanged() {
    this._forceAnUpdateWhenValueChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAnUpdateWhenValueChangedInput() {
    return this._forceAnUpdateWhenValueChanged
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

  // sas_token - computed: false, optional: false, required: true
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoScriptTimeouts | undefined; 
  private __timeoutsOutput = new KustoScriptTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KustoScriptTimeouts | undefined) {
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
      continue_on_errors_enabled: cdktf.booleanToTerraform(this._continueOnErrorsEnabled),
      database_id: cdktf.stringToTerraform(this._databaseId),
      force_an_update_when_value_changed: cdktf.stringToTerraform(this._forceAnUpdateWhenValueChanged),
      name: cdktf.stringToTerraform(this._name),
      sas_token: cdktf.stringToTerraform(this._sasToken),
      url: cdktf.stringToTerraform(this._url),
      timeouts: kustoScriptTimeoutsToTerraform(this._timeouts),
    };
  }
}
