// https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#enabled MonitorActionGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#resource_group_name MonitorActionGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#short_name MonitorActionGroup#short_name}
  */
  readonly shortName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#tags MonitorActionGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * arm_role_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#arm_role_receiver MonitorActionGroup#arm_role_receiver}
  */
  readonly armRoleReceiver?: MonitorActionGroupArmRoleReceiver[];
  /**
  * automation_runbook_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#automation_runbook_receiver MonitorActionGroup#automation_runbook_receiver}
  */
  readonly automationRunbookReceiver?: MonitorActionGroupAutomationRunbookReceiver[];
  /**
  * azure_app_push_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#azure_app_push_receiver MonitorActionGroup#azure_app_push_receiver}
  */
  readonly azureAppPushReceiver?: MonitorActionGroupAzureAppPushReceiver[];
  /**
  * azure_function_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#azure_function_receiver MonitorActionGroup#azure_function_receiver}
  */
  readonly azureFunctionReceiver?: MonitorActionGroupAzureFunctionReceiver[];
  /**
  * email_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#email_receiver MonitorActionGroup#email_receiver}
  */
  readonly emailReceiver?: MonitorActionGroupEmailReceiver[];
  /**
  * itsm_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#itsm_receiver MonitorActionGroup#itsm_receiver}
  */
  readonly itsmReceiver?: MonitorActionGroupItsmReceiver[];
  /**
  * logic_app_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#logic_app_receiver MonitorActionGroup#logic_app_receiver}
  */
  readonly logicAppReceiver?: MonitorActionGroupLogicAppReceiver[];
  /**
  * sms_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#sms_receiver MonitorActionGroup#sms_receiver}
  */
  readonly smsReceiver?: MonitorActionGroupSmsReceiver[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#timeouts MonitorActionGroup#timeouts}
  */
  readonly timeouts?: MonitorActionGroupTimeouts;
  /**
  * voice_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#voice_receiver MonitorActionGroup#voice_receiver}
  */
  readonly voiceReceiver?: MonitorActionGroupVoiceReceiver[];
  /**
  * webhook_receiver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#webhook_receiver MonitorActionGroup#webhook_receiver}
  */
  readonly webhookReceiver?: MonitorActionGroupWebhookReceiver[];
}
export interface MonitorActionGroupArmRoleReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#role_id MonitorActionGroup#role_id}
  */
  readonly roleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

function monitorActionGroupArmRoleReceiverToTerraform(struct?: MonitorActionGroupArmRoleReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupAutomationRunbookReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#automation_account_id MonitorActionGroup#automation_account_id}
  */
  readonly automationAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#is_global_runbook MonitorActionGroup#is_global_runbook}
  */
  readonly isGlobalRunbook: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#runbook_name MonitorActionGroup#runbook_name}
  */
  readonly runbookName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#service_uri MonitorActionGroup#service_uri}
  */
  readonly serviceUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#webhook_resource_id MonitorActionGroup#webhook_resource_id}
  */
  readonly webhookResourceId: string;
}

function monitorActionGroupAutomationRunbookReceiverToTerraform(struct?: MonitorActionGroupAutomationRunbookReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#email_address MonitorActionGroup#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
}

function monitorActionGroupAzureAppPushReceiverToTerraform(struct?: MonitorActionGroupAzureAppPushReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface MonitorActionGroupAzureFunctionReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#function_app_resource_id MonitorActionGroup#function_app_resource_id}
  */
  readonly functionAppResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#function_name MonitorActionGroup#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#http_trigger_url MonitorActionGroup#http_trigger_url}
  */
  readonly httpTriggerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

function monitorActionGroupAzureFunctionReceiverToTerraform(struct?: MonitorActionGroupAzureFunctionReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_app_resource_id: cdktf.stringToTerraform(struct!.functionAppResourceId),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    http_trigger_url: cdktf.stringToTerraform(struct!.httpTriggerUrl),
    name: cdktf.stringToTerraform(struct!.name),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupEmailReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#email_address MonitorActionGroup#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

function monitorActionGroupEmailReceiverToTerraform(struct?: MonitorActionGroupEmailReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupItsmReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#connection_id MonitorActionGroup#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#region MonitorActionGroup#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#ticket_configuration MonitorActionGroup#ticket_configuration}
  */
  readonly ticketConfiguration: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#workspace_id MonitorActionGroup#workspace_id}
  */
  readonly workspaceId: string;
}

function monitorActionGroupItsmReceiverToTerraform(struct?: MonitorActionGroupItsmReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    ticket_configuration: cdktf.stringToTerraform(struct!.ticketConfiguration),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}

export interface MonitorActionGroupLogicAppReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#callback_url MonitorActionGroup#callback_url}
  */
  readonly callbackUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#resource_id MonitorActionGroup#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

function monitorActionGroupLogicAppReceiverToTerraform(struct?: MonitorActionGroupLogicAppReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback_url: cdktf.stringToTerraform(struct!.callbackUrl),
    name: cdktf.stringToTerraform(struct!.name),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}

export interface MonitorActionGroupSmsReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#country_code MonitorActionGroup#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#phone_number MonitorActionGroup#phone_number}
  */
  readonly phoneNumber: string;
}

function monitorActionGroupSmsReceiverToTerraform(struct?: MonitorActionGroupSmsReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export interface MonitorActionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#create MonitorActionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#delete MonitorActionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#read MonitorActionGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#update MonitorActionGroup#update}
  */
  readonly update?: string;
}

function monitorActionGroupTimeoutsToTerraform(struct?: MonitorActionGroupTimeoutsOutputReference | MonitorActionGroupTimeouts): any {
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

export class MonitorActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface MonitorActionGroupVoiceReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#country_code MonitorActionGroup#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#phone_number MonitorActionGroup#phone_number}
  */
  readonly phoneNumber: string;
}

function monitorActionGroupVoiceReceiverToTerraform(struct?: MonitorActionGroupVoiceReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export interface MonitorActionGroupWebhookReceiverAadAuth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#identifier_uri MonitorActionGroup#identifier_uri}
  */
  readonly identifierUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#object_id MonitorActionGroup#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#tenant_id MonitorActionGroup#tenant_id}
  */
  readonly tenantId?: string;
}

function monitorActionGroupWebhookReceiverAadAuthToTerraform(struct?: MonitorActionGroupWebhookReceiverAadAuthOutputReference | MonitorActionGroupWebhookReceiverAadAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier_uri: cdktf.stringToTerraform(struct!.identifierUri),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export class MonitorActionGroupWebhookReceiverAadAuthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identifier_uri - computed: true, optional: true, required: false
  private _identifierUri?: string | undefined; 
  public get identifierUri() {
    return this.getStringAttribute('identifier_uri');
  }
  public set identifierUri(value: string | undefined) {
    this._identifierUri = value;
  }
  public resetIdentifierUri() {
    this._identifierUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierUriInput() {
    return this._identifierUri
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string | undefined; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId
  }
}
export interface MonitorActionGroupWebhookReceiver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#service_uri MonitorActionGroup#service_uri}
  */
  readonly serviceUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
  /**
  * aad_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html#aad_auth MonitorActionGroup#aad_auth}
  */
  readonly aadAuth?: MonitorActionGroupWebhookReceiverAadAuth;
}

function monitorActionGroupWebhookReceiverToTerraform(struct?: MonitorActionGroupWebhookReceiver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
    aad_auth: monitorActionGroupWebhookReceiverAadAuthToTerraform(struct!.aadAuth),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html azurerm_monitor_action_group}
*/
export class MonitorActionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_action_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_action_group.html azurerm_monitor_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorActionGroupConfig
  */
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

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _armRoleReceiver?: MonitorActionGroupArmRoleReceiver[] | undefined; 
  public get armRoleReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('arm_role_receiver') as any;
  }
  public set armRoleReceiver(value: MonitorActionGroupArmRoleReceiver[] | undefined) {
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
  private _automationRunbookReceiver?: MonitorActionGroupAutomationRunbookReceiver[] | undefined; 
  public get automationRunbookReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('automation_runbook_receiver') as any;
  }
  public set automationRunbookReceiver(value: MonitorActionGroupAutomationRunbookReceiver[] | undefined) {
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
  private _azureAppPushReceiver?: MonitorActionGroupAzureAppPushReceiver[] | undefined; 
  public get azureAppPushReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_app_push_receiver') as any;
  }
  public set azureAppPushReceiver(value: MonitorActionGroupAzureAppPushReceiver[] | undefined) {
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
  private _azureFunctionReceiver?: MonitorActionGroupAzureFunctionReceiver[] | undefined; 
  public get azureFunctionReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_function_receiver') as any;
  }
  public set azureFunctionReceiver(value: MonitorActionGroupAzureFunctionReceiver[] | undefined) {
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
  private _emailReceiver?: MonitorActionGroupEmailReceiver[] | undefined; 
  public get emailReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('email_receiver') as any;
  }
  public set emailReceiver(value: MonitorActionGroupEmailReceiver[] | undefined) {
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
  private _itsmReceiver?: MonitorActionGroupItsmReceiver[] | undefined; 
  public get itsmReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('itsm_receiver') as any;
  }
  public set itsmReceiver(value: MonitorActionGroupItsmReceiver[] | undefined) {
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
  private _logicAppReceiver?: MonitorActionGroupLogicAppReceiver[] | undefined; 
  public get logicAppReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('logic_app_receiver') as any;
  }
  public set logicAppReceiver(value: MonitorActionGroupLogicAppReceiver[] | undefined) {
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
  private _smsReceiver?: MonitorActionGroupSmsReceiver[] | undefined; 
  public get smsReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sms_receiver') as any;
  }
  public set smsReceiver(value: MonitorActionGroupSmsReceiver[] | undefined) {
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
  private _timeouts?: MonitorActionGroupTimeouts | undefined; 
  private __timeoutsOutput = new MonitorActionGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MonitorActionGroupTimeouts | undefined) {
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
  private _voiceReceiver?: MonitorActionGroupVoiceReceiver[] | undefined; 
  public get voiceReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('voice_receiver') as any;
  }
  public set voiceReceiver(value: MonitorActionGroupVoiceReceiver[] | undefined) {
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
  private _webhookReceiver?: MonitorActionGroupWebhookReceiver[] | undefined; 
  public get webhookReceiver() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('webhook_receiver') as any;
  }
  public set webhookReceiver(value: MonitorActionGroupWebhookReceiver[] | undefined) {
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
