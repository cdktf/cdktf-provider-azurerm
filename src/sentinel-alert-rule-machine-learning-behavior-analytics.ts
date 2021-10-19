// https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#alert_rule_template_guid SentinelAlertRuleMachineLearningBehaviorAnalytics#alert_rule_template_guid}
  */
  readonly alertRuleTemplateGuid: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#enabled SentinelAlertRuleMachineLearningBehaviorAnalytics#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#log_analytics_workspace_id SentinelAlertRuleMachineLearningBehaviorAnalytics#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#name SentinelAlertRuleMachineLearningBehaviorAnalytics#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#timeouts SentinelAlertRuleMachineLearningBehaviorAnalytics#timeouts}
  */
  readonly timeouts?: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts;
}
export interface SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#create SentinelAlertRuleMachineLearningBehaviorAnalytics#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#delete SentinelAlertRuleMachineLearningBehaviorAnalytics#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#read SentinelAlertRuleMachineLearningBehaviorAnalytics#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html#update SentinelAlertRuleMachineLearningBehaviorAnalytics#update}
  */
  readonly update?: string;
}

function sentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsToTerraform(struct?: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference | SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts): any {
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

export class SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html azurerm_sentinel_alert_rule_machine_learning_behavior_analytics}
*/
export class SentinelAlertRuleMachineLearningBehaviorAnalytics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_sentinel_alert_rule_machine_learning_behavior_analytics";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_alert_rule_machine_learning_behavior_analytics.html azurerm_sentinel_alert_rule_machine_learning_behavior_analytics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelAlertRuleMachineLearningBehaviorAnalyticsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_alert_rule_machine_learning_behavior_analytics',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alertRuleTemplateGuid = config.alertRuleTemplateGuid;
    this._enabled = config.enabled;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_template_guid - computed: false, optional: false, required: true
  private _alertRuleTemplateGuid?: string; 
  public get alertRuleTemplateGuid() {
    return this.getStringAttribute('alert_rule_template_guid');
  }
  public set alertRuleTemplateGuid(value: string) {
    this._alertRuleTemplateGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleTemplateGuidInput() {
    return this._alertRuleTemplateGuid
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
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
  private _logAnalyticsWorkspaceId?: string; 
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts | undefined; 
  private __timeoutsOutput = new SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SentinelAlertRuleMachineLearningBehaviorAnalyticsTimeouts | undefined) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: sentinelAlertRuleMachineLearningBehaviorAnalyticsTimeoutsToTerraform(this._timeouts),
    };
  }
}
