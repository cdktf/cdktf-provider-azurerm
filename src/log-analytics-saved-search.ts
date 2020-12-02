// https://www.terraform.io/docs/providers/azurerm/r/log_analytics_saved_search.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LogAnalyticsSavedSearchConfig extends TerraformMetaArguments {
  readonly category: string;
  readonly displayName: string;
  readonly functionAlias?: string;
  readonly functionParameters?: string[];
  readonly logAnalyticsWorkspaceId: string;
  readonly name: string;
  readonly query: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: LogAnalyticsSavedSearchTimeouts;
}
export interface LogAnalyticsSavedSearchTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LogAnalyticsSavedSearch extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
      category: this._category,
      display_name: this._displayName,
      function_alias: this._functionAlias,
      function_parameters: this._functionParameters,
      log_analytics_workspace_id: this._logAnalyticsWorkspaceId,
      name: this._name,
      query: this._query,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
