// https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_alert.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMonitorScheduledQueryRulesAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_alert.html#name DataAzurermMonitorScheduledQueryRulesAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_alert.html#resource_group_name DataAzurermMonitorScheduledQueryRulesAlert#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_alert.html#timeouts DataAzurermMonitorScheduledQueryRulesAlert#timeouts}
  */
  readonly timeouts?: DataAzurermMonitorScheduledQueryRulesAlertTimeouts;
}
export class DataAzurermMonitorScheduledQueryRulesAlertAction extends cdktf.ComplexComputedList {

  // action_group - computed: true, optional: false, required: false
  public get actionGroup() {
    return this.getListAttribute('action_group');
  }

  // custom_webhook_payload - computed: true, optional: false, required: false
  public get customWebhookPayload() {
    return this.getStringAttribute('custom_webhook_payload');
  }

  // email_subject - computed: true, optional: false, required: false
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
}
export class DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger extends cdktf.ComplexComputedList {

  // metric_column - computed: true, optional: false, required: false
  public get metricColumn() {
    return this.getStringAttribute('metric_column');
  }

  // metric_trigger_type - computed: true, optional: false, required: false
  public get metricTriggerType() {
    return this.getStringAttribute('metric_trigger_type');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export class DataAzurermMonitorScheduledQueryRulesAlertTrigger extends cdktf.ComplexComputedList {

  // metric_trigger - computed: true, optional: false, required: false
  public get metricTrigger() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metric_trigger') as any;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataAzurermMonitorScheduledQueryRulesAlertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_alert.html#read DataAzurermMonitorScheduledQueryRulesAlert#read}
  */
  readonly read?: string;
}

function dataAzurermMonitorScheduledQueryRulesAlertTimeoutsToTerraform(struct?: DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference | DataAzurermMonitorScheduledQueryRulesAlertTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_alert.html azurerm_monitor_scheduled_query_rules_alert}
*/
export class DataAzurermMonitorScheduledQueryRulesAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_scheduled_query_rules_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_alert.html azurerm_monitor_scheduled_query_rules_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMonitorScheduledQueryRulesAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMonitorScheduledQueryRulesAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_scheduled_query_rules_alert',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public action(index: string) {
    return new DataAzurermMonitorScheduledQueryRulesAlertAction(this, 'action', index);
  }

  // authorized_resource_ids - computed: true, optional: false, required: false
  public get authorizedResourceIds() {
    return this.getListAttribute('authorized_resource_ids');
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_type - computed: true, optional: false, required: false
  public get queryType() {
    return this.getStringAttribute('query_type');
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
    return this._resourceGroupName
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // throttling - computed: true, optional: false, required: false
  public get throttling() {
    return this.getNumberAttribute('throttling');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }

  // trigger - computed: true, optional: false, required: false
  public trigger(index: string) {
    return new DataAzurermMonitorScheduledQueryRulesAlertTrigger(this, 'trigger', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMonitorScheduledQueryRulesAlertTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermMonitorScheduledQueryRulesAlertTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermMonitorScheduledQueryRulesAlertTimeoutsToTerraform(this._timeouts),
    };
  }
}
