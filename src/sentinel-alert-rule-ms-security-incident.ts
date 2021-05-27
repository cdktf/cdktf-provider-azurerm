// https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelAlertRuleMsSecurityIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#alert_rule_template_guid SentinelAlertRuleMsSecurityIncident#alert_rule_template_guid}
  */
  readonly alertRuleTemplateGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#description SentinelAlertRuleMsSecurityIncident#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#display_name SentinelAlertRuleMsSecurityIncident#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#display_name_exclude_filter SentinelAlertRuleMsSecurityIncident#display_name_exclude_filter}
  */
  readonly displayNameExcludeFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#display_name_filter SentinelAlertRuleMsSecurityIncident#display_name_filter}
  */
  readonly displayNameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#enabled SentinelAlertRuleMsSecurityIncident#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#log_analytics_workspace_id SentinelAlertRuleMsSecurityIncident#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#name SentinelAlertRuleMsSecurityIncident#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#product_filter SentinelAlertRuleMsSecurityIncident#product_filter}
  */
  readonly productFilter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#severity_filter SentinelAlertRuleMsSecurityIncident#severity_filter}
  */
  readonly severityFilter: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#text_whitelist SentinelAlertRuleMsSecurityIncident#text_whitelist}
  */
  readonly textWhitelist?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#timeouts SentinelAlertRuleMsSecurityIncident#timeouts}
  */
  readonly timeouts?: SentinelAlertRuleMsSecurityIncidentTimeouts;
}
export interface SentinelAlertRuleMsSecurityIncidentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#create SentinelAlertRuleMsSecurityIncident#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#delete SentinelAlertRuleMsSecurityIncident#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#read SentinelAlertRuleMsSecurityIncident#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html#update SentinelAlertRuleMsSecurityIncident#update}
  */
  readonly update?: string;
}

function sentinelAlertRuleMsSecurityIncidentTimeoutsToTerraform(struct?: SentinelAlertRuleMsSecurityIncidentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html azurerm_sentinel_alert_rule_ms_security_incident}
*/
export class SentinelAlertRuleMsSecurityIncident extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_ms_security_incident.html azurerm_sentinel_alert_rule_ms_security_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAlertRuleMsSecurityIncidentConfig
  */
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
    this._alertRuleTemplateGuid = config.alertRuleTemplateGuid;
    this._description = config.description;
    this._displayName = config.displayName;
    this._displayNameExcludeFilter = config.displayNameExcludeFilter;
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

  // alert_rule_template_guid - computed: false, optional: true, required: false
  private _alertRuleTemplateGuid?: string;
  public get alertRuleTemplateGuid() {
    return this.getStringAttribute('alert_rule_template_guid');
  }
  public set alertRuleTemplateGuid(value: string ) {
    this._alertRuleTemplateGuid = value;
  }
  public resetAlertRuleTemplateGuid() {
    this._alertRuleTemplateGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateGuidInput() {
    return this._alertRuleTemplateGuid
  }

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

  // display_name_exclude_filter - computed: false, optional: true, required: false
  private _displayNameExcludeFilter?: string[];
  public get displayNameExcludeFilter() {
    return this.getListAttribute('display_name_exclude_filter');
  }
  public set displayNameExcludeFilter(value: string[] ) {
    this._displayNameExcludeFilter = value;
  }
  public resetDisplayNameExcludeFilter() {
    this._displayNameExcludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameExcludeFilterInput() {
    return this._displayNameExcludeFilter
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
      alert_rule_template_guid: cdktf.stringToTerraform(this._alertRuleTemplateGuid),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_exclude_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._displayNameExcludeFilter),
      display_name_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._displayNameFilter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      product_filter: cdktf.stringToTerraform(this._productFilter),
      severity_filter: cdktf.listMapper(cdktf.stringToTerraform)(this._severityFilter),
      text_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._textWhitelist),
      timeouts: sentinelAlertRuleMsSecurityIncidentTimeoutsToTerraform(this._timeouts),
    };
  }
}
