// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#continue_on_errors_enabled KustoScript#continue_on_errors_enabled}
  */
  readonly continueOnErrorsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#database_id KustoScript#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#force_an_update_when_value_changed KustoScript#force_an_update_when_value_changed}
  */
  readonly forceAnUpdateWhenValueChanged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#id KustoScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#name KustoScript#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#sas_token KustoScript#sas_token}
  */
  readonly sasToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#script_content KustoScript#script_content}
  */
  readonly scriptContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#url KustoScript#url}
  */
  readonly url?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#timeouts KustoScript#timeouts}
  */
  readonly timeouts?: KustoScriptTimeouts;
}
export interface KustoScriptTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#create KustoScript#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#delete KustoScript#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#read KustoScript#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#update KustoScript#update}
  */
  readonly update?: string;
}

export function kustoScriptTimeoutsToTerraform(struct?: KustoScriptTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function kustoScriptTimeoutsToHclTerraform(struct?: KustoScriptTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KustoScriptTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KustoScriptTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KustoScriptTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script azurerm_kusto_script}
*/
export class KustoScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kusto_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KustoScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KustoScript to import
  * @param importFromId The id of the existing KustoScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KustoScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kusto_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kusto_script azurerm_kusto_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoScriptConfig
  */
  public constructor(scope: Construct, id: string, config: KustoScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_script',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._continueOnErrorsEnabled = config.continueOnErrorsEnabled;
    this._databaseId = config.databaseId;
    this._forceAnUpdateWhenValueChanged = config.forceAnUpdateWhenValueChanged;
    this._id = config.id;
    this._name = config.name;
    this._sasToken = config.sasToken;
    this._scriptContent = config.scriptContent;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // continue_on_errors_enabled - computed: false, optional: true, required: false
  private _continueOnErrorsEnabled?: boolean | cdktf.IResolvable; 
  public get continueOnErrorsEnabled() {
    return this.getBooleanAttribute('continue_on_errors_enabled');
  }
  public set continueOnErrorsEnabled(value: boolean | cdktf.IResolvable) {
    this._continueOnErrorsEnabled = value;
  }
  public resetContinueOnErrorsEnabled() {
    this._continueOnErrorsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnErrorsEnabledInput() {
    return this._continueOnErrorsEnabled;
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
    return this._databaseId;
  }

  // force_an_update_when_value_changed - computed: true, optional: true, required: false
  private _forceAnUpdateWhenValueChanged?: string; 
  public get forceAnUpdateWhenValueChanged() {
    return this.getStringAttribute('force_an_update_when_value_changed');
  }
  public set forceAnUpdateWhenValueChanged(value: string) {
    this._forceAnUpdateWhenValueChanged = value;
  }
  public resetForceAnUpdateWhenValueChanged() {
    this._forceAnUpdateWhenValueChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAnUpdateWhenValueChangedInput() {
    return this._forceAnUpdateWhenValueChanged;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._name;
  }

  // sas_token - computed: false, optional: true, required: false
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  public resetSasToken() {
    this._sasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // script_content - computed: false, optional: true, required: false
  private _scriptContent?: string; 
  public get scriptContent() {
    return this.getStringAttribute('script_content');
  }
  public set scriptContent(value: string) {
    this._scriptContent = value;
  }
  public resetScriptContent() {
    this._scriptContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptContentInput() {
    return this._scriptContent;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KustoScriptTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KustoScriptTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      continue_on_errors_enabled: cdktf.booleanToTerraform(this._continueOnErrorsEnabled),
      database_id: cdktf.stringToTerraform(this._databaseId),
      force_an_update_when_value_changed: cdktf.stringToTerraform(this._forceAnUpdateWhenValueChanged),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sas_token: cdktf.stringToTerraform(this._sasToken),
      script_content: cdktf.stringToTerraform(this._scriptContent),
      url: cdktf.stringToTerraform(this._url),
      timeouts: kustoScriptTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      continue_on_errors_enabled: {
        value: cdktf.booleanToHclTerraform(this._continueOnErrorsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_an_update_when_value_changed: {
        value: cdktf.stringToHclTerraform(this._forceAnUpdateWhenValueChanged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_token: {
        value: cdktf.stringToHclTerraform(this._sasToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_content: {
        value: cdktf.stringToHclTerraform(this._scriptContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kustoScriptTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KustoScriptTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
