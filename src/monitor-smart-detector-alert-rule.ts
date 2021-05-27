// https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorSmartDetectorAlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#description MonitorSmartDetectorAlertRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#detector_type MonitorSmartDetectorAlertRule#detector_type}
  */
  readonly detectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#enabled MonitorSmartDetectorAlertRule#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#frequency MonitorSmartDetectorAlertRule#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#name MonitorSmartDetectorAlertRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#resource_group_name MonitorSmartDetectorAlertRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#scope_resource_ids MonitorSmartDetectorAlertRule#scope_resource_ids}
  */
  readonly scopeResourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#severity MonitorSmartDetectorAlertRule#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#tags MonitorSmartDetectorAlertRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#throttling_duration MonitorSmartDetectorAlertRule#throttling_duration}
  */
  readonly throttlingDuration?: string;
  /**
  * action_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#action_group MonitorSmartDetectorAlertRule#action_group}
  */
  readonly actionGroup: MonitorSmartDetectorAlertRuleActionGroup[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#timeouts MonitorSmartDetectorAlertRule#timeouts}
  */
  readonly timeouts?: MonitorSmartDetectorAlertRuleTimeouts;
}
export interface MonitorSmartDetectorAlertRuleActionGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#email_subject MonitorSmartDetectorAlertRule#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#ids MonitorSmartDetectorAlertRule#ids}
  */
  readonly ids: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#webhook_payload MonitorSmartDetectorAlertRule#webhook_payload}
  */
  readonly webhookPayload?: string;
}

function monitorSmartDetectorAlertRuleActionGroupToTerraform(struct?: MonitorSmartDetectorAlertRuleActionGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ids),
    webhook_payload: cdktf.stringToTerraform(struct!.webhookPayload),
  }
}

export interface MonitorSmartDetectorAlertRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#create MonitorSmartDetectorAlertRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#delete MonitorSmartDetectorAlertRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#read MonitorSmartDetectorAlertRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#update MonitorSmartDetectorAlertRule#update}
  */
  readonly update?: string;
}

function monitorSmartDetectorAlertRuleTimeoutsToTerraform(struct?: MonitorSmartDetectorAlertRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html azurerm_monitor_smart_detector_alert_rule}
*/
export class MonitorSmartDetectorAlertRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html azurerm_monitor_smart_detector_alert_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorSmartDetectorAlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorSmartDetectorAlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_smart_detector_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._detectorType = config.detectorType;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._scopeResourceIds = config.scopeResourceIds;
    this._severity = config.severity;
    this._tags = config.tags;
    this._throttlingDuration = config.throttlingDuration;
    this._actionGroup = config.actionGroup;
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

  // detector_type - computed: false, optional: false, required: true
  private _detectorType: string;
  public get detectorType() {
    return this.getStringAttribute('detector_type');
  }
  public set detectorType(value: string) {
    this._detectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorTypeInput() {
    return this._detectorType
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

  // frequency - computed: false, optional: false, required: true
  private _frequency: string;
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // scope_resource_ids - computed: false, optional: false, required: true
  private _scopeResourceIds: string[];
  public get scopeResourceIds() {
    return this.getListAttribute('scope_resource_ids');
  }
  public set scopeResourceIds(value: string[]) {
    this._scopeResourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeResourceIdsInput() {
    return this._scopeResourceIds
  }

  // severity - computed: false, optional: false, required: true
  private _severity: string;
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity
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

  // throttling_duration - computed: false, optional: true, required: false
  private _throttlingDuration?: string;
  public get throttlingDuration() {
    return this.getStringAttribute('throttling_duration');
  }
  public set throttlingDuration(value: string ) {
    this._throttlingDuration = value;
  }
  public resetThrottlingDuration() {
    this._throttlingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingDurationInput() {
    return this._throttlingDuration
  }

  // action_group - computed: false, optional: false, required: true
  private _actionGroup: MonitorSmartDetectorAlertRuleActionGroup[];
  public get actionGroup() {
    return this.interpolationForAttribute('action_group') as any;
  }
  public set actionGroup(value: MonitorSmartDetectorAlertRuleActionGroup[]) {
    this._actionGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupInput() {
    return this._actionGroup
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorSmartDetectorAlertRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorSmartDetectorAlertRuleTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      detector_type: cdktf.stringToTerraform(this._detectorType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scope_resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._scopeResourceIds),
      severity: cdktf.stringToTerraform(this._severity),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      throttling_duration: cdktf.stringToTerraform(this._throttlingDuration),
      action_group: cdktf.listMapper(monitorSmartDetectorAlertRuleActionGroupToTerraform)(this._actionGroup),
      timeouts: monitorSmartDetectorAlertRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
