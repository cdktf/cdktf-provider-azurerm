// https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SentinelAlertRuleMsSecurityIncidentConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly displayName: string;
  readonly displayNameFilter?: string[];
  readonly enabled?: boolean;
  readonly logAnalyticsWorkspaceId: string;
  readonly name: string;
  readonly productFilter: string;
  readonly severityFilter: string[];
  readonly textWhitelist?: string[];
  /** timeouts block */
  readonly timeouts?: SentinelAlertRuleMsSecurityIncidentTimeouts;
}
export interface SentinelAlertRuleMsSecurityIncidentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SentinelAlertRuleMsSecurityIncident extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SentinelAlertRuleMsSecurityIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_alert_rule_ms_security_incident',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._displayNameFilter = config.displayNameFilter;
    this._enabled = config.enabled;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._productFilter = config.productFilter;
    this._severityFilter = config.severityFilter;
    this._textWhitelist = config.textWhitelist;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // display_name_filter - computed: true, optional: true, required: false
  private _displayNameFilter?: string[];
  public get displayNameFilter() {
    return this.getListAttribute('display_name_filter');
  }
  public set displayNameFilter(value: string[]) {
    this._displayNameFilter = value;
  }
  public resetDisplayNameFilter() {
    this._displayNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameFilterInput() {
    return this._displayNameFilter
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // product_filter - computed: false, optional: false, required: true
  private _productFilter: string;
  public get productFilter() {
    return this.getStringAttribute('product_filter');
  }
  public set productFilter(value: string) {
    this._productFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productFilterInput() {
    return this._productFilter
  }

  // severity_filter - computed: false, optional: false, required: true
  private _severityFilter: string[];
  public get severityFilter() {
    return this.getListAttribute('severity_filter');
  }
  public set severityFilter(value: string[]) {
    this._severityFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityFilterInput() {
    return this._severityFilter
  }

  // text_whitelist - computed: true, optional: true, required: false
  private _textWhitelist?: string[];
  public get textWhitelist() {
    return this.getListAttribute('text_whitelist');
  }
  public set textWhitelist(value: string[]) {
    this._textWhitelist = value;
  }
  public resetTextWhitelist() {
    this._textWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textWhitelistInput() {
    return this._textWhitelist
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SentinelAlertRuleMsSecurityIncidentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SentinelAlertRuleMsSecurityIncidentTimeouts ) {
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
      description: this._description,
      display_name: this._displayName,
      display_name_filter: this._displayNameFilter,
      enabled: this._enabled,
      log_analytics_workspace_id: this._logAnalyticsWorkspaceId,
      name: this._name,
      product_filter: this._productFilter,
      severity_filter: this._severityFilter,
      text_whitelist: this._textWhitelist,
      timeouts: this._timeouts,
    };
  }
}
