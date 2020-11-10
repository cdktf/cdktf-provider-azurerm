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
