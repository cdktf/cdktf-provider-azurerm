// https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSentinelAlertRuleTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template#timeouts DataAzurermSentinelAlertRuleTemplate#timeouts}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}
  */
  readonly read?: string;
}

export function dataAzurermSentinelAlertRuleTemplateTimeoutsToTerraform(struct?: DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference | DataAzurermSentinelAlertRuleTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermSentinelAlertRuleTemplateTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermSentinelAlertRuleTemplateTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template azurerm_sentinel_alert_rule_template}
*/
export class DataAzurermSentinelAlertRuleTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sentinel_alert_rule_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_template azurerm_sentinel_alert_rule_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermSentinelAlertRuleTemplateConfig
  */
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
    this._timeouts.internalValue = config.timeouts;
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
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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
    return this._name;
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
  private _timeouts = new DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermSentinelAlertRuleTemplateTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermSentinelAlertRuleTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
