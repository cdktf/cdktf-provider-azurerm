// https://www.terraform.io/docs/providers/azurerm/d/monitor_action_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMonitorActionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_action_group.html#name DataAzurermMonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_action_group.html#resource_group_name DataAzurermMonitorActionGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_action_group.html#timeouts DataAzurermMonitorActionGroup#timeouts}
  */
  readonly timeouts?: DataAzurermMonitorActionGroupTimeouts;
}
export class DataAzurermMonitorActionGroupArmRoleReceiver extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // use_common_alert_schema - computed: true, optional: false, required: false
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema') as any;
  }
}
export class DataAzurermMonitorActionGroupAutomationRunbookReceiver extends cdktf.ComplexComputedList {

  // automation_account_id - computed: true, optional: false, required: false
  public get automationAccountId() {
    return this.getStringAttribute('automation_account_id');
  }

  // is_global_runbook - computed: true, optional: false, required: false
  public get isGlobalRunbook() {
    return this.getBooleanAttribute('is_global_runbook') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runbook_name - computed: true, optional: false, required: false
  public get runbookName() {
    return this.getStringAttribute('runbook_name');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // use_common_alert_schema - computed: true, optional: false, required: false
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema') as any;
  }

  // webhook_resource_id - computed: true, optional: false, required: false
  public get webhookResourceId() {
    return this.getStringAttribute('webhook_resource_id');
  }
}
export class DataAzurermMonitorActionGroupAzureAppPushReceiver extends cdktf.ComplexComputedList {

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermMonitorActionGroupAzureFunctionReceiver extends cdktf.ComplexComputedList {

  // function_app_resource_id - computed: true, optional: false, required: false
  public get functionAppResourceId() {
    return this.getStringAttribute('function_app_resource_id');
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // http_trigger_url - computed: true, optional: false, required: false
  public get httpTriggerUrl() {
    return this.getStringAttribute('http_trigger_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // use_common_alert_schema - computed: true, optional: false, required: false
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema') as any;
  }
}
export class DataAzurermMonitorActionGroupEmailReceiver extends cdktf.ComplexComputedList {

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // use_common_alert_schema - computed: true, optional: false, required: false
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema') as any;
  }
}
export class DataAzurermMonitorActionGroupItsmReceiver extends cdktf.ComplexComputedList {

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // ticket_configuration - computed: true, optional: false, required: false
  public get ticketConfiguration() {
    return this.getStringAttribute('ticket_configuration');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export class DataAzurermMonitorActionGroupLogicAppReceiver extends cdktf.ComplexComputedList {

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // use_common_alert_schema - computed: true, optional: false, required: false
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema') as any;
  }
}
export class DataAzurermMonitorActionGroupSmsReceiver extends cdktf.ComplexComputedList {

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
}
export class DataAzurermMonitorActionGroupVoiceReceiver extends cdktf.ComplexComputedList {

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
}
export class DataAzurermMonitorActionGroupWebhookReceiverAadAuth extends cdktf.ComplexComputedList {

  // identifier_uri - computed: true, optional: false, required: false
  public get identifierUri() {
    return this.getStringAttribute('identifier_uri');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export class DataAzurermMonitorActionGroupWebhookReceiver extends cdktf.ComplexComputedList {

  // aad_auth - computed: true, optional: false, required: false
  public get aadAuth() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('aad_auth') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // use_common_alert_schema - computed: true, optional: false, required: false
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema') as any;
  }
}
export interface DataAzurermMonitorActionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_action_group.html#read DataAzurermMonitorActionGroup#read}
  */
  readonly read?: string;
}

function dataAzurermMonitorActionGroupTimeoutsToTerraform(struct?: DataAzurermMonitorActionGroupTimeoutsOutputReference | DataAzurermMonitorActionGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermMonitorActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_action_group.html azurerm_monitor_action_group}
*/
export class DataAzurermMonitorActionGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_action_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_action_group.html azurerm_monitor_action_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMonitorActionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMonitorActionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_action_group',
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

  // arm_role_receiver - computed: true, optional: false, required: false
  public armRoleReceiver(index: string) {
    return new DataAzurermMonitorActionGroupArmRoleReceiver(this, 'arm_role_receiver', index);
  }

  // automation_runbook_receiver - computed: true, optional: false, required: false
  public automationRunbookReceiver(index: string) {
    return new DataAzurermMonitorActionGroupAutomationRunbookReceiver(this, 'automation_runbook_receiver', index);
  }

  // azure_app_push_receiver - computed: true, optional: false, required: false
  public azureAppPushReceiver(index: string) {
    return new DataAzurermMonitorActionGroupAzureAppPushReceiver(this, 'azure_app_push_receiver', index);
  }

  // azure_function_receiver - computed: true, optional: false, required: false
  public azureFunctionReceiver(index: string) {
    return new DataAzurermMonitorActionGroupAzureFunctionReceiver(this, 'azure_function_receiver', index);
  }

  // email_receiver - computed: true, optional: false, required: false
  public emailReceiver(index: string) {
    return new DataAzurermMonitorActionGroupEmailReceiver(this, 'email_receiver', index);
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // itsm_receiver - computed: true, optional: false, required: false
  public itsmReceiver(index: string) {
    return new DataAzurermMonitorActionGroupItsmReceiver(this, 'itsm_receiver', index);
  }

  // logic_app_receiver - computed: true, optional: false, required: false
  public logicAppReceiver(index: string) {
    return new DataAzurermMonitorActionGroupLogicAppReceiver(this, 'logic_app_receiver', index);
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

  // short_name - computed: true, optional: false, required: false
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // sms_receiver - computed: true, optional: false, required: false
  public smsReceiver(index: string) {
    return new DataAzurermMonitorActionGroupSmsReceiver(this, 'sms_receiver', index);
  }

  // voice_receiver - computed: true, optional: false, required: false
  public voiceReceiver(index: string) {
    return new DataAzurermMonitorActionGroupVoiceReceiver(this, 'voice_receiver', index);
  }

  // webhook_receiver - computed: true, optional: false, required: false
  public webhookReceiver(index: string) {
    return new DataAzurermMonitorActionGroupWebhookReceiver(this, 'webhook_receiver', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMonitorActionGroupTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermMonitorActionGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermMonitorActionGroupTimeouts | undefined) {
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
      timeouts: dataAzurermMonitorActionGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
