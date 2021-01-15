// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_sentinel_alert_rule_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSentinelAlertRuleTemplateConfig extends cdktf.TerraformMetaArguments {
  readonly displayName?: string;
  readonly logAnalyticsWorkspaceId: string;
  readonly name?: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermSentinelAlertRuleTemplateTimeouts;
}
export class DataAzurermSentinelAlertRuleTemplateScheduledTemplate extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_frequency - computed: true, optional: false, required: false
  public get queryFrequency() {
    return this.getStringAttribute('query_frequency');
  }

  // query_period - computed: true, optional: false, required: false
  public get queryPeriod() {
    return this.getStringAttribute('query_period');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // tactics - computed: true, optional: false, required: false
  public get tactics() {
    return this.getListAttribute('tactics');
  }

  // trigger_operator - computed: true, optional: false, required: false
  public get triggerOperator() {
    return this.getStringAttribute('trigger_operator');
  }

  // trigger_threshold - computed: true, optional: false, required: false
  public get triggerThreshold() {
    return this.getNumberAttribute('trigger_threshold');
  }
}
export class DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // product_filter - computed: true, optional: false, required: false
  public get productFilter() {
    return this.getStringAttribute('product_filter');
  }
}
export interface DataAzurermSentinelAlertRuleTemplateTimeouts {
  readonly read?: string;
}

function dataAzurermSentinelAlertRuleTemplateTimeoutsToTerraform(struct?: DataAzurermSentinelAlertRuleTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermSentinelAlertRuleTemplate extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermSentinelAlertRuleTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_alert_rule_template',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scheduled_template - computed: true, optional: false, required: false
  public scheduledTemplate(index: string) {
    return new DataAzurermSentinelAlertRuleTemplateScheduledTemplate(this, 'scheduled_template', index);
  }

  // security_incident_template - computed: true, optional: false, required: false
  public securityIncidentTemplate(index: string) {
    return new DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate(this, 'security_incident_template', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermSentinelAlertRuleTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermSentinelAlertRuleTemplateTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermSentinelAlertRuleTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
