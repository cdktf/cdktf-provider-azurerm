// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionGroupConfig extends cdktf.TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly shortName: string;
  readonly tags?: { [key: string]: string };
  /** arm_role_receiver block */
  readonly armRoleReceiver?: MonitorActionGroupArmRoleReceiver[];
  /** automation_runbook_receiver block */
  readonly automationRunbookReceiver?: MonitorActionGroupAutomationRunbookReceiver[];
  /** azure_app_push_receiver block */
  readonly azureAppPushReceiver?: MonitorActionGroupAzureAppPushReceiver[];
  /** azure_function_receiver block */
  readonly azureFunctionReceiver?: MonitorActionGroupAzureFunctionReceiver[];
  /** email_receiver block */
  readonly emailReceiver?: MonitorActionGroupEmailReceiver[];
  /** itsm_receiver block */
  readonly itsmReceiver?: MonitorActionGroupItsmReceiver[];
  /** logic_app_receiver block */
  readonly logicAppReceiver?: MonitorActionGroupLogicAppReceiver[];
  /** sms_receiver block */
  readonly smsReceiver?: MonitorActionGroupSmsReceiver[];
  /** timeouts block */
  readonly timeouts?: MonitorActionGroupTimeouts;
  /** voice_receiver block */
  readonly voiceReceiver?: MonitorActionGroupVoiceReceiver[];
  /** webhook_receiver block */
  readonly webhookReceiver?: MonitorActionGroupWebhookReceiver[];
}
export interface MonitorActionGroupArmRoleReceiver {
  readonly name: string;
  readonly roleId: string;
  readonly useCommonAlertSchema?: boolean;
}

function monitorActionGroupArmRoleReceiverToTerraform(struct?: MonitorActionGroupArmRoleReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupAutomationRunbookReceiver {
  readonly automationAccountId: string;
  readonly isGlobalRunbook: boolean;
  readonly name: string;
  readonly runbookName: string;
  readonly serviceUri: string;
  readonly useCommonAlertSchema?: boolean;
  readonly webhookResourceId: string;
}

function monitorActionGroupAutomationRunbookReceiverToTerraform(struct?: MonitorActionGroupAutomationRunbookReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automation_account_id: cdktf.stringToTerraform(struct!.automationAccountId),
    is_global_runbook: cdktf.booleanToTerraform(struct!.isGlobalRunbook),
    name: cdktf.stringToTerraform(struct!.name),
    runbook_name: cdktf.stringToTerraform(struct!.runbookName),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
    webhook_resource_id: cdktf.stringToTerraform(struct!.webhookResourceId),
  }
}

export interface MonitorActionGroupAzureAppPushReceiver {
  readonly emailAddress: string;
  readonly name: string;
}

function monitorActionGroupAzureAppPushReceiverToTerraform(struct?: MonitorActionGroupAzureAppPushReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface MonitorActionGroupAzureFunctionReceiver {
  readonly functionAppResourceId: string;
  readonly functionName: string;
  readonly httpTriggerUrl: string;
  readonly name: string;
  readonly useCommonAlertSchema?: boolean;
}

function monitorActionGroupAzureFunctionReceiverToTerraform(struct?: MonitorActionGroupAzureFunctionReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_app_resource_id: cdktf.stringToTerraform(struct!.functionAppResourceId),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    http_trigger_url: cdktf.stringToTerraform(struct!.httpTriggerUrl),
    name: cdktf.stringToTerraform(struct!.name),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupEmailReceiver {
  readonly emailAddress: string;
  readonly name: string;
  readonly useCommonAlertSchema?: boolean;
}

function monitorActionGroupEmailReceiverToTerraform(struct?: MonitorActionGroupEmailReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupItsmReceiver {
  readonly connectionId: string;
  readonly name: string;
  readonly region: string;
  readonly ticketConfiguration: string;
  readonly workspaceId: string;
}

function monitorActionGroupItsmReceiverToTerraform(struct?: MonitorActionGroupItsmReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    ticket_configuration: cdktf.stringToTerraform(struct!.ticketConfiguration),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}

export interface MonitorActionGroupLogicAppReceiver {
  readonly callbackUrl: string;
  readonly name: string;
  readonly resourceId: string;
  readonly useCommonAlertSchema?: boolean;
}

function monitorActionGroupLogicAppReceiverToTerraform(struct?: MonitorActionGroupLogicAppReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    callback_url: cdktf.stringToTerraform(struct!.callbackUrl),
    name: cdktf.stringToTerraform(struct!.name),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupSmsReceiver {
  readonly countryCode: string;
  readonly name: string;
  readonly phoneNumber: string;
}

function monitorActionGroupSmsReceiverToTerraform(struct?: MonitorActionGroupSmsReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export interface MonitorActionGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function monitorActionGroupTimeoutsToTerraform(struct?: MonitorActionGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface MonitorActionGroupVoiceReceiver {
  readonly countryCode: string;
  readonly name: string;
  readonly phoneNumber: string;
}

function monitorActionGroupVoiceReceiverToTerraform(struct?: MonitorActionGroupVoiceReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export interface MonitorActionGroupWebhookReceiverAadAuth {
  readonly identifierUri?: string;
  readonly objectId: string;
  readonly tenantId?: string;
}

function monitorActionGroupWebhookReceiverAadAuthToTerraform(struct?: MonitorActionGroupWebhookReceiverAadAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identifier_uri: cdktf.stringToTerraform(struct!.identifierUri),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface MonitorActionGroupWebhookReceiver {
  readonly name: string;
  readonly serviceUri: string;
  readonly useCommonAlertSchema?: boolean;
  /** aad_auth block */
  readonly aadAuth?: MonitorActionGroupWebhookReceiverAadAuth[];
}

function monitorActionGroupWebhookReceiverToTerraform(struct?: MonitorActionGroupWebhookReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
    aad_auth: cdktf.listMapper(monitorActionGroupWebhookReceiverAadAuthToTerraform)(struct!.aadAuth),
  }
}


// Resource

export class MonitorActionGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitorActionGroupConfig) {
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
    this._enabled = config.enabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._shortName = config.shortName;
    this._tags = config.tags;
    this._armRoleReceiver = config.armRoleReceiver;
    this._automationRunbookReceiver = config.automationRunbookReceiver;
    this._azureAppPushReceiver = config.azureAppPushReceiver;
    this._azureFunctionReceiver = config.azureFunctionReceiver;
    this._emailReceiver = config.emailReceiver;
    this._itsmReceiver = config.itsmReceiver;
    this._logicAppReceiver = config.logicAppReceiver;
    this._smsReceiver = config.smsReceiver;
    this._timeouts = config.timeouts;
    this._voiceReceiver = config.voiceReceiver;
    this._webhookReceiver = config.webhookReceiver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // short_name - computed: false, optional: false, required: true
  private _shortName: string;
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName
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

  // arm_role_receiver - computed: false, optional: true, required: false
  private _armRoleReceiver?: MonitorActionGroupArmRoleReceiver[];
  public get armRoleReceiver() {
    return this.interpolationForAttribute('arm_role_receiver') as any;
  }
  public set armRoleReceiver(value: MonitorActionGroupArmRoleReceiver[] ) {
    this._armRoleReceiver = value;
  }
  public resetArmRoleReceiver() {
    this._armRoleReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armRoleReceiverInput() {
    return this._armRoleReceiver
  }

  // automation_runbook_receiver - computed: false, optional: true, required: false
  private _automationRunbookReceiver?: MonitorActionGroupAutomationRunbookReceiver[];
  public get automationRunbookReceiver() {
    return this.interpolationForAttribute('automation_runbook_receiver') as any;
  }
  public set automationRunbookReceiver(value: MonitorActionGroupAutomationRunbookReceiver[] ) {
    this._automationRunbookReceiver = value;
  }
  public resetAutomationRunbookReceiver() {
    this._automationRunbookReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationRunbookReceiverInput() {
    return this._automationRunbookReceiver
  }

  // azure_app_push_receiver - computed: false, optional: true, required: false
  private _azureAppPushReceiver?: MonitorActionGroupAzureAppPushReceiver[];
  public get azureAppPushReceiver() {
    return this.interpolationForAttribute('azure_app_push_receiver') as any;
  }
  public set azureAppPushReceiver(value: MonitorActionGroupAzureAppPushReceiver[] ) {
    this._azureAppPushReceiver = value;
  }
  public resetAzureAppPushReceiver() {
    this._azureAppPushReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAppPushReceiverInput() {
    return this._azureAppPushReceiver
  }

  // azure_function_receiver - computed: false, optional: true, required: false
  private _azureFunctionReceiver?: MonitorActionGroupAzureFunctionReceiver[];
  public get azureFunctionReceiver() {
    return this.interpolationForAttribute('azure_function_receiver') as any;
  }
  public set azureFunctionReceiver(value: MonitorActionGroupAzureFunctionReceiver[] ) {
    this._azureFunctionReceiver = value;
  }
  public resetAzureFunctionReceiver() {
    this._azureFunctionReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionReceiverInput() {
    return this._azureFunctionReceiver
  }

  // email_receiver - computed: false, optional: true, required: false
  private _emailReceiver?: MonitorActionGroupEmailReceiver[];
  public get emailReceiver() {
    return this.interpolationForAttribute('email_receiver') as any;
  }
  public set emailReceiver(value: MonitorActionGroupEmailReceiver[] ) {
    this._emailReceiver = value;
  }
  public resetEmailReceiver() {
    this._emailReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailReceiverInput() {
    return this._emailReceiver
  }

  // itsm_receiver - computed: false, optional: true, required: false
  private _itsmReceiver?: MonitorActionGroupItsmReceiver[];
  public get itsmReceiver() {
    return this.interpolationForAttribute('itsm_receiver') as any;
  }
  public set itsmReceiver(value: MonitorActionGroupItsmReceiver[] ) {
    this._itsmReceiver = value;
  }
  public resetItsmReceiver() {
    this._itsmReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itsmReceiverInput() {
    return this._itsmReceiver
  }

  // logic_app_receiver - computed: false, optional: true, required: false
  private _logicAppReceiver?: MonitorActionGroupLogicAppReceiver[];
  public get logicAppReceiver() {
    return this.interpolationForAttribute('logic_app_receiver') as any;
  }
  public set logicAppReceiver(value: MonitorActionGroupLogicAppReceiver[] ) {
    this._logicAppReceiver = value;
  }
  public resetLogicAppReceiver() {
    this._logicAppReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppReceiverInput() {
    return this._logicAppReceiver
  }

  // sms_receiver - computed: false, optional: true, required: false
  private _smsReceiver?: MonitorActionGroupSmsReceiver[];
  public get smsReceiver() {
    return this.interpolationForAttribute('sms_receiver') as any;
  }
  public set smsReceiver(value: MonitorActionGroupSmsReceiver[] ) {
    this._smsReceiver = value;
  }
  public resetSmsReceiver() {
    this._smsReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsReceiverInput() {
    return this._smsReceiver
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActionGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorActionGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // voice_receiver - computed: false, optional: true, required: false
  private _voiceReceiver?: MonitorActionGroupVoiceReceiver[];
  public get voiceReceiver() {
    return this.interpolationForAttribute('voice_receiver') as any;
  }
  public set voiceReceiver(value: MonitorActionGroupVoiceReceiver[] ) {
    this._voiceReceiver = value;
  }
  public resetVoiceReceiver() {
    this._voiceReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceReceiverInput() {
    return this._voiceReceiver
  }

  // webhook_receiver - computed: false, optional: true, required: false
  private _webhookReceiver?: MonitorActionGroupWebhookReceiver[];
  public get webhookReceiver() {
    return this.interpolationForAttribute('webhook_receiver') as any;
  }
  public set webhookReceiver(value: MonitorActionGroupWebhookReceiver[] ) {
    this._webhookReceiver = value;
  }
  public resetWebhookReceiver() {
    this._webhookReceiver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookReceiverInput() {
    return this._webhookReceiver
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      short_name: cdktf.stringToTerraform(this._shortName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      arm_role_receiver: cdktf.listMapper(monitorActionGroupArmRoleReceiverToTerraform)(this._armRoleReceiver),
      automation_runbook_receiver: cdktf.listMapper(monitorActionGroupAutomationRunbookReceiverToTerraform)(this._automationRunbookReceiver),
      azure_app_push_receiver: cdktf.listMapper(monitorActionGroupAzureAppPushReceiverToTerraform)(this._azureAppPushReceiver),
      azure_function_receiver: cdktf.listMapper(monitorActionGroupAzureFunctionReceiverToTerraform)(this._azureFunctionReceiver),
      email_receiver: cdktf.listMapper(monitorActionGroupEmailReceiverToTerraform)(this._emailReceiver),
      itsm_receiver: cdktf.listMapper(monitorActionGroupItsmReceiverToTerraform)(this._itsmReceiver),
      logic_app_receiver: cdktf.listMapper(monitorActionGroupLogicAppReceiverToTerraform)(this._logicAppReceiver),
      sms_receiver: cdktf.listMapper(monitorActionGroupSmsReceiverToTerraform)(this._smsReceiver),
      timeouts: monitorActionGroupTimeoutsToTerraform(this._timeouts),
      voice_receiver: cdktf.listMapper(monitorActionGroupVoiceReceiverToTerraform)(this._voiceReceiver),
      webhook_receiver: cdktf.listMapper(monitorActionGroupWebhookReceiverToTerraform)(this._webhookReceiver),
    };
  }
}
