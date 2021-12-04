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
  readonly enabled?: boolean | cdktf.IResolvable;
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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#throttling_duration MonitorSmartDetectorAlertRule#throttling_duration}
  */
  readonly throttlingDuration?: string;
  /**
  * action_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html#action_group MonitorSmartDetectorAlertRule#action_group}
  */
  readonly actionGroup: MonitorSmartDetectorAlertRuleActionGroup;
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

export function monitorSmartDetectorAlertRuleActionGroupToTerraform(struct?: MonitorSmartDetectorAlertRuleActionGroupOutputReference | MonitorSmartDetectorAlertRuleActionGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ids),
    webhook_payload: cdktf.stringToTerraform(struct!.webhookPayload),
  }
}

export class MonitorSmartDetectorAlertRuleActionGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorSmartDetectorAlertRuleActionGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailSubject) {
      hasAnyValues = true;
      internalValueResult.emailSubject = this._emailSubject;
    }
    if (this._ids) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._webhookPayload) {
      hasAnyValues = true;
      internalValueResult.webhookPayload = this._webhookPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSmartDetectorAlertRuleActionGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailSubject = undefined;
      this._ids = undefined;
      this._webhookPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailSubject = value.emailSubject;
      this._ids = value.ids;
      this._webhookPayload = value.webhookPayload;
    }
  }

  // email_subject - computed: false, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
  }

  // ids - computed: false, optional: false, required: true
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // webhook_payload - computed: false, optional: true, required: false
  private _webhookPayload?: string; 
  public get webhookPayload() {
    return this.getStringAttribute('webhook_payload');
  }
  public set webhookPayload(value: string) {
    this._webhookPayload = value;
  }
  public resetWebhookPayload() {
    this._webhookPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookPayloadInput() {
    return this._webhookPayload;
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

export function monitorSmartDetectorAlertRuleTimeoutsToTerraform(struct?: MonitorSmartDetectorAlertRuleTimeoutsOutputReference | MonitorSmartDetectorAlertRuleTimeouts): any {
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

export class MonitorSmartDetectorAlertRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MonitorSmartDetectorAlertRuleTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorSmartDetectorAlertRuleTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_smart_detector_alert_rule.html azurerm_monitor_smart_detector_alert_rule}
*/
export class MonitorSmartDetectorAlertRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_smart_detector_alert_rule";

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
    this._actionGroup.internalValue = config.actionGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // detector_type - computed: false, optional: false, required: true
  private _detectorType?: string; 
  public get detectorType() {
    return this.getStringAttribute('detector_type');
  }
  public set detectorType(value: string) {
    this._detectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorTypeInput() {
    return this._detectorType;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // scope_resource_ids - computed: false, optional: false, required: true
  private _scopeResourceIds?: string[]; 
  public get scopeResourceIds() {
    return this.getListAttribute('scope_resource_ids');
  }
  public set scopeResourceIds(value: string[]) {
    this._scopeResourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeResourceIdsInput() {
    return this._scopeResourceIds;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // throttling_duration - computed: false, optional: true, required: false
  private _throttlingDuration?: string; 
  public get throttlingDuration() {
    return this.getStringAttribute('throttling_duration');
  }
  public set throttlingDuration(value: string) {
    this._throttlingDuration = value;
  }
  public resetThrottlingDuration() {
    this._throttlingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingDurationInput() {
    return this._throttlingDuration;
  }

  // action_group - computed: false, optional: false, required: true
  private _actionGroup = new MonitorSmartDetectorAlertRuleActionGroupOutputReference(this as any, "action_group", true);
  public get actionGroup() {
    return this._actionGroup;
  }
  public putActionGroup(value: MonitorSmartDetectorAlertRuleActionGroup) {
    this._actionGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupInput() {
    return this._actionGroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorSmartDetectorAlertRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorSmartDetectorAlertRuleTimeouts) {
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
      action_group: monitorSmartDetectorAlertRuleActionGroupToTerraform(this._actionGroup.internalValue),
      timeouts: monitorSmartDetectorAlertRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
