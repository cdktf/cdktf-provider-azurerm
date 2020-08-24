// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_monitor_action_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAzurermMonitorActionGroupConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermMonitorActionGroupTimeouts;
}
export class DataAzurermMonitorActionGroupArmRoleReceiver extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_id - computed: true, optional: false, required: true
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // use_common_alert_schema - computed: true, optional: false, required: true
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
}
export class DataAzurermMonitorActionGroupAutomationRunbookReceiver extends ComplexComputedList {

  // automation_account_id - computed: true, optional: false, required: true
  public get automationAccountId() {
    return this.getStringAttribute('automation_account_id');
  }

  // is_global_runbook - computed: true, optional: false, required: true
  public get isGlobalRunbook() {
    return this.getBooleanAttribute('is_global_runbook');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // runbook_name - computed: true, optional: false, required: true
  public get runbookName() {
    return this.getStringAttribute('runbook_name');
  }

  // service_uri - computed: true, optional: false, required: true
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // use_common_alert_schema - computed: true, optional: false, required: true
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }

  // webhook_resource_id - computed: true, optional: false, required: true
  public get webhookResourceId() {
    return this.getStringAttribute('webhook_resource_id');
  }
}
export class DataAzurermMonitorActionGroupAzureAppPushReceiver extends ComplexComputedList {

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAzurermMonitorActionGroupAzureFunctionReceiver extends ComplexComputedList {

  // function_app_resource_id - computed: true, optional: false, required: true
  public get functionAppResourceId() {
    return this.getStringAttribute('function_app_resource_id');
  }

  // function_name - computed: true, optional: false, required: true
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // http_trigger_url - computed: true, optional: false, required: true
  public get httpTriggerUrl() {
    return this.getStringAttribute('http_trigger_url');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // use_common_alert_schema - computed: true, optional: false, required: true
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
}
export class DataAzurermMonitorActionGroupEmailReceiver extends ComplexComputedList {

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // use_common_alert_schema - computed: true, optional: false, required: true
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
}
export class DataAzurermMonitorActionGroupItsmReceiver extends ComplexComputedList {

  // connection_id - computed: true, optional: false, required: true
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // ticket_configuration - computed: true, optional: false, required: true
  public get ticketConfiguration() {
    return this.getStringAttribute('ticket_configuration');
  }

  // workspace_id - computed: true, optional: false, required: true
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export class DataAzurermMonitorActionGroupLogicAppReceiver extends ComplexComputedList {

  // callback_url - computed: true, optional: false, required: true
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // use_common_alert_schema - computed: true, optional: false, required: true
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
}
export class DataAzurermMonitorActionGroupSmsReceiver extends ComplexComputedList {

  // country_code - computed: true, optional: false, required: true
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone_number - computed: true, optional: false, required: true
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
}
export class DataAzurermMonitorActionGroupVoiceReceiver extends ComplexComputedList {

  // country_code - computed: true, optional: false, required: true
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // phone_number - computed: true, optional: false, required: true
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
}
export class DataAzurermMonitorActionGroupWebhookReceiver extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_uri - computed: true, optional: false, required: true
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // use_common_alert_schema - computed: true, optional: false, required: true
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
}
export interface DataAzurermMonitorActionGroupTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermMonitorActionGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // arm_role_receiver - computed: true, optional: false, required: true
  public armRoleReceiver(index: string) {
    return new DataAzurermMonitorActionGroupArmRoleReceiver(this, 'arm_role_receiver', index);
  }

  // automation_runbook_receiver - computed: true, optional: false, required: true
  public automationRunbookReceiver(index: string) {
    return new DataAzurermMonitorActionGroupAutomationRunbookReceiver(this, 'automation_runbook_receiver', index);
  }

  // azure_app_push_receiver - computed: true, optional: false, required: true
  public azureAppPushReceiver(index: string) {
    return new DataAzurermMonitorActionGroupAzureAppPushReceiver(this, 'azure_app_push_receiver', index);
  }

  // azure_function_receiver - computed: true, optional: false, required: true
  public azureFunctionReceiver(index: string) {
    return new DataAzurermMonitorActionGroupAzureFunctionReceiver(this, 'azure_function_receiver', index);
  }

  // email_receiver - computed: true, optional: false, required: true
  public emailReceiver(index: string) {
    return new DataAzurermMonitorActionGroupEmailReceiver(this, 'email_receiver', index);
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // itsm_receiver - computed: true, optional: false, required: true
  public itsmReceiver(index: string) {
    return new DataAzurermMonitorActionGroupItsmReceiver(this, 'itsm_receiver', index);
  }

  // logic_app_receiver - computed: true, optional: false, required: true
  public logicAppReceiver(index: string) {
    return new DataAzurermMonitorActionGroupLogicAppReceiver(this, 'logic_app_receiver', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // short_name - computed: true, optional: false, required: true
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // sms_receiver - computed: true, optional: false, required: true
  public smsReceiver(index: string) {
    return new DataAzurermMonitorActionGroupSmsReceiver(this, 'sms_receiver', index);
  }

  // voice_receiver - computed: true, optional: false, required: true
  public voiceReceiver(index: string) {
    return new DataAzurermMonitorActionGroupVoiceReceiver(this, 'voice_receiver', index);
  }

  // webhook_receiver - computed: true, optional: false, required: true
  public webhookReceiver(index: string) {
    return new DataAzurermMonitorActionGroupWebhookReceiver(this, 'webhook_receiver', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMonitorActionGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermMonitorActionGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
