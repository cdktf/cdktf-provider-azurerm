// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorActionGroupConfig extends TerraformMetaArguments {
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
export interface MonitorActionGroupAutomationRunbookReceiver {
  readonly automationAccountId: string;
  readonly isGlobalRunbook: boolean;
  readonly name: string;
  readonly runbookName: string;
  readonly serviceUri: string;
  readonly useCommonAlertSchema?: boolean;
  readonly webhookResourceId: string;
}
export interface MonitorActionGroupAzureAppPushReceiver {
  readonly emailAddress: string;
  readonly name: string;
}
export interface MonitorActionGroupAzureFunctionReceiver {
  readonly functionAppResourceId: string;
  readonly functionName: string;
  readonly httpTriggerUrl: string;
  readonly name: string;
  readonly useCommonAlertSchema?: boolean;
}
export interface MonitorActionGroupEmailReceiver {
  readonly emailAddress: string;
  readonly name: string;
  readonly useCommonAlertSchema?: boolean;
}
export interface MonitorActionGroupItsmReceiver {
  readonly connectionId: string;
  readonly name: string;
  readonly region: string;
  readonly ticketConfiguration: string;
  readonly workspaceId: string;
}
export interface MonitorActionGroupLogicAppReceiver {
  readonly callbackUrl: string;
  readonly name: string;
  readonly resourceId: string;
  readonly useCommonAlertSchema?: boolean;
}
export interface MonitorActionGroupSmsReceiver {
  readonly countryCode: string;
  readonly name: string;
  readonly phoneNumber: string;
}
export interface MonitorActionGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface MonitorActionGroupVoiceReceiver {
  readonly countryCode: string;
  readonly name: string;
  readonly phoneNumber: string;
}
export interface MonitorActionGroupWebhookReceiver {
  readonly name: string;
  readonly serviceUri: string;
  readonly useCommonAlertSchema?: boolean;
}

// Resource

export class MonitorActionGroup extends TerraformResource {

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
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // short_name - computed: false, optional: false, required: true
  private _shortName: string;
  public get shortName() {
    return this._shortName;
  }
  public set shortName(value: string) {
    this._shortName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // arm_role_receiver - computed: false, optional: true, required: false
  private _armRoleReceiver?: MonitorActionGroupArmRoleReceiver[];
  public get armRoleReceiver() {
    return this._armRoleReceiver;
  }
  public set armRoleReceiver(value: MonitorActionGroupArmRoleReceiver[] | undefined) {
    this._armRoleReceiver = value;
  }

  // automation_runbook_receiver - computed: false, optional: true, required: false
  private _automationRunbookReceiver?: MonitorActionGroupAutomationRunbookReceiver[];
  public get automationRunbookReceiver() {
    return this._automationRunbookReceiver;
  }
  public set automationRunbookReceiver(value: MonitorActionGroupAutomationRunbookReceiver[] | undefined) {
    this._automationRunbookReceiver = value;
  }

  // azure_app_push_receiver - computed: false, optional: true, required: false
  private _azureAppPushReceiver?: MonitorActionGroupAzureAppPushReceiver[];
  public get azureAppPushReceiver() {
    return this._azureAppPushReceiver;
  }
  public set azureAppPushReceiver(value: MonitorActionGroupAzureAppPushReceiver[] | undefined) {
    this._azureAppPushReceiver = value;
  }

  // azure_function_receiver - computed: false, optional: true, required: false
  private _azureFunctionReceiver?: MonitorActionGroupAzureFunctionReceiver[];
  public get azureFunctionReceiver() {
    return this._azureFunctionReceiver;
  }
  public set azureFunctionReceiver(value: MonitorActionGroupAzureFunctionReceiver[] | undefined) {
    this._azureFunctionReceiver = value;
  }

  // email_receiver - computed: false, optional: true, required: false
  private _emailReceiver?: MonitorActionGroupEmailReceiver[];
  public get emailReceiver() {
    return this._emailReceiver;
  }
  public set emailReceiver(value: MonitorActionGroupEmailReceiver[] | undefined) {
    this._emailReceiver = value;
  }

  // itsm_receiver - computed: false, optional: true, required: false
  private _itsmReceiver?: MonitorActionGroupItsmReceiver[];
  public get itsmReceiver() {
    return this._itsmReceiver;
  }
  public set itsmReceiver(value: MonitorActionGroupItsmReceiver[] | undefined) {
    this._itsmReceiver = value;
  }

  // logic_app_receiver - computed: false, optional: true, required: false
  private _logicAppReceiver?: MonitorActionGroupLogicAppReceiver[];
  public get logicAppReceiver() {
    return this._logicAppReceiver;
  }
  public set logicAppReceiver(value: MonitorActionGroupLogicAppReceiver[] | undefined) {
    this._logicAppReceiver = value;
  }

  // sms_receiver - computed: false, optional: true, required: false
  private _smsReceiver?: MonitorActionGroupSmsReceiver[];
  public get smsReceiver() {
    return this._smsReceiver;
  }
  public set smsReceiver(value: MonitorActionGroupSmsReceiver[] | undefined) {
    this._smsReceiver = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorActionGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitorActionGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // voice_receiver - computed: false, optional: true, required: false
  private _voiceReceiver?: MonitorActionGroupVoiceReceiver[];
  public get voiceReceiver() {
    return this._voiceReceiver;
  }
  public set voiceReceiver(value: MonitorActionGroupVoiceReceiver[] | undefined) {
    this._voiceReceiver = value;
  }

  // webhook_receiver - computed: false, optional: true, required: false
  private _webhookReceiver?: MonitorActionGroupWebhookReceiver[];
  public get webhookReceiver() {
    return this._webhookReceiver;
  }
  public set webhookReceiver(value: MonitorActionGroupWebhookReceiver[] | undefined) {
    this._webhookReceiver = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      short_name: this._shortName,
      tags: this._tags,
      arm_role_receiver: this._armRoleReceiver,
      automation_runbook_receiver: this._automationRunbookReceiver,
      azure_app_push_receiver: this._azureAppPushReceiver,
      azure_function_receiver: this._azureFunctionReceiver,
      email_receiver: this._emailReceiver,
      itsm_receiver: this._itsmReceiver,
      logic_app_receiver: this._logicAppReceiver,
      sms_receiver: this._smsReceiver,
      timeouts: this._timeouts,
      voice_receiver: this._voiceReceiver,
      webhook_receiver: this._webhookReceiver,
    };
  }
}
