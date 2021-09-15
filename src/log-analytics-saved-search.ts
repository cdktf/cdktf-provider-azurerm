// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsSavedSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#category LogAnalyticsSavedSearch#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#display_name LogAnalyticsSavedSearch#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#function_alias LogAnalyticsSavedSearch#function_alias}
  */
  readonly functionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#function_parameters LogAnalyticsSavedSearch#function_parameters}
  */
  readonly functionParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#log_analytics_workspace_id LogAnalyticsSavedSearch#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#name LogAnalyticsSavedSearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#query LogAnalyticsSavedSearch#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#tags LogAnalyticsSavedSearch#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#timeouts LogAnalyticsSavedSearch#timeouts}
  */
  readonly timeouts?: LogAnalyticsSavedSearchTimeouts;
}
export interface LogAnalyticsSavedSearchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#create LogAnalyticsSavedSearch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#delete LogAnalyticsSavedSearch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#read LogAnalyticsSavedSearch#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html#update LogAnalyticsSavedSearch#update}
  */
  readonly update?: string;
}

function logAnalyticsSavedSearchTimeoutsToTerraform(struct?: LogAnalyticsSavedSearchTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html azurerm_log_analytics_saved_search}
*/
export class LogAnalyticsSavedSearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_log_analytics_saved_search";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html azurerm_log_analytics_saved_search} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsSavedSearchConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsSavedSearchConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_log_analytics_saved_search',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._category = config.category;
    this._displayName = config.displayName;
    this._functionAlias = config.functionAlias;
    this._functionParameters = config.functionParameters;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._query = config.query;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category: string;
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // function_alias - computed: false, optional: true, required: false
  private _functionAlias?: string;
  public get functionAlias() {
    return this.getStringAttribute('function_alias');
  }
  public set functionAlias(value: string ) {
    this._functionAlias = value;
  }
  public resetFunctionAlias() {
    this._functionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAliasInput() {
    return this._functionAlias
  }

  // function_parameters - computed: false, optional: true, required: false
  private _functionParameters?: string[];
  public get functionParameters() {
    return this.getListAttribute('function_parameters');
  }
  public set functionParameters(value: string[] ) {
    this._functionParameters = value;
  }
  public resetFunctionParameters() {
    this._functionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionParametersInput() {
    return this._functionParameters
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId: string;
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
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

  // query - computed: false, optional: false, required: true
  private _query: string;
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogAnalyticsSavedSearchTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogAnalyticsSavedSearchTimeouts ) {
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
      category: cdktf.stringToTerraform(this._category),
      display_name: cdktf.stringToTerraform(this._displayName),
      function_alias: cdktf.stringToTerraform(this._functionAlias),
      function_parameters: cdktf.listMapper(cdktf.stringToTerraform)(this._functionParameters),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: logAnalyticsSavedSearchTimeoutsToTerraform(this._timeouts),
    };
  }
}
