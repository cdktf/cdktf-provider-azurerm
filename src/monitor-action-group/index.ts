// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorActionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}
  */
  readonly shortName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * arm_role_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#arm_role_receiver MonitorActionGroup#arm_role_receiver}
  */
  readonly armRoleReceiver?: MonitorActionGroupArmRoleReceiver[] | cdktf.IResolvable;
  /**
  * automation_runbook_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#automation_runbook_receiver MonitorActionGroup#automation_runbook_receiver}
  */
  readonly automationRunbookReceiver?: MonitorActionGroupAutomationRunbookReceiver[] | cdktf.IResolvable;
  /**
  * azure_app_push_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#azure_app_push_receiver MonitorActionGroup#azure_app_push_receiver}
  */
  readonly azureAppPushReceiver?: MonitorActionGroupAzureAppPushReceiver[] | cdktf.IResolvable;
  /**
  * azure_function_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#azure_function_receiver MonitorActionGroup#azure_function_receiver}
  */
  readonly azureFunctionReceiver?: MonitorActionGroupAzureFunctionReceiver[] | cdktf.IResolvable;
  /**
  * email_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#email_receiver MonitorActionGroup#email_receiver}
  */
  readonly emailReceiver?: MonitorActionGroupEmailReceiver[] | cdktf.IResolvable;
  /**
  * event_hub_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#event_hub_receiver MonitorActionGroup#event_hub_receiver}
  */
  readonly eventHubReceiver?: MonitorActionGroupEventHubReceiver[] | cdktf.IResolvable;
  /**
  * itsm_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#itsm_receiver MonitorActionGroup#itsm_receiver}
  */
  readonly itsmReceiver?: MonitorActionGroupItsmReceiver[] | cdktf.IResolvable;
  /**
  * logic_app_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#logic_app_receiver MonitorActionGroup#logic_app_receiver}
  */
  readonly logicAppReceiver?: MonitorActionGroupLogicAppReceiver[] | cdktf.IResolvable;
  /**
  * sms_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#sms_receiver MonitorActionGroup#sms_receiver}
  */
  readonly smsReceiver?: MonitorActionGroupSmsReceiver[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#timeouts MonitorActionGroup#timeouts}
  */
  readonly timeouts?: MonitorActionGroupTimeouts;
  /**
  * voice_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#voice_receiver MonitorActionGroup#voice_receiver}
  */
  readonly voiceReceiver?: MonitorActionGroupVoiceReceiver[] | cdktf.IResolvable;
  /**
  * webhook_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#webhook_receiver MonitorActionGroup#webhook_receiver}
  */
  readonly webhookReceiver?: MonitorActionGroupWebhookReceiver[] | cdktf.IResolvable;
}
export interface MonitorActionGroupArmRoleReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#role_id MonitorActionGroup#role_id}
  */
  readonly roleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

export function monitorActionGroupArmRoleReceiverToTerraform(struct?: MonitorActionGroupArmRoleReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}


export function monitorActionGroupArmRoleReceiverToHclTerraform(struct?: MonitorActionGroupArmRoleReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_common_alert_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useCommonAlertSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupArmRoleReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupArmRoleReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._useCommonAlertSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCommonAlertSchema = this._useCommonAlertSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupArmRoleReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._roleId = undefined;
      this._useCommonAlertSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._roleId = value.roleId;
      this._useCommonAlertSchema = value.useCommonAlertSchema;
    }
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

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // use_common_alert_schema - computed: false, optional: true, required: false
  private _useCommonAlertSchema?: boolean | cdktf.IResolvable; 
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
  public set useCommonAlertSchema(value: boolean | cdktf.IResolvable) {
    this._useCommonAlertSchema = value;
  }
  public resetUseCommonAlertSchema() {
    this._useCommonAlertSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommonAlertSchemaInput() {
    return this._useCommonAlertSchema;
  }
}

export class MonitorActionGroupArmRoleReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupArmRoleReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupArmRoleReceiverOutputReference {
    return new MonitorActionGroupArmRoleReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupAutomationRunbookReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#automation_account_id MonitorActionGroup#automation_account_id}
  */
  readonly automationAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#is_global_runbook MonitorActionGroup#is_global_runbook}
  */
  readonly isGlobalRunbook: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#runbook_name MonitorActionGroup#runbook_name}
  */
  readonly runbookName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}
  */
  readonly serviceUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#webhook_resource_id MonitorActionGroup#webhook_resource_id}
  */
  readonly webhookResourceId: string;
}

export function monitorActionGroupAutomationRunbookReceiverToTerraform(struct?: MonitorActionGroupAutomationRunbookReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function monitorActionGroupAutomationRunbookReceiverToHclTerraform(struct?: MonitorActionGroupAutomationRunbookReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automation_account_id: {
      value: cdktf.stringToHclTerraform(struct!.automationAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_global_runbook: {
      value: cdktf.booleanToHclTerraform(struct!.isGlobalRunbook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runbook_name: {
      value: cdktf.stringToHclTerraform(struct!.runbookName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_uri: {
      value: cdktf.stringToHclTerraform(struct!.serviceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_common_alert_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useCommonAlertSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webhook_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.webhookResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupAutomationRunbookReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupAutomationRunbookReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automationAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationAccountId = this._automationAccountId;
    }
    if (this._isGlobalRunbook !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGlobalRunbook = this._isGlobalRunbook;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookName = this._runbookName;
    }
    if (this._serviceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUri = this._serviceUri;
    }
    if (this._useCommonAlertSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCommonAlertSchema = this._useCommonAlertSchema;
    }
    if (this._webhookResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookResourceId = this._webhookResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupAutomationRunbookReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automationAccountId = undefined;
      this._isGlobalRunbook = undefined;
      this._name = undefined;
      this._runbookName = undefined;
      this._serviceUri = undefined;
      this._useCommonAlertSchema = undefined;
      this._webhookResourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automationAccountId = value.automationAccountId;
      this._isGlobalRunbook = value.isGlobalRunbook;
      this._name = value.name;
      this._runbookName = value.runbookName;
      this._serviceUri = value.serviceUri;
      this._useCommonAlertSchema = value.useCommonAlertSchema;
      this._webhookResourceId = value.webhookResourceId;
    }
  }

  // automation_account_id - computed: false, optional: false, required: true
  private _automationAccountId?: string; 
  public get automationAccountId() {
    return this.getStringAttribute('automation_account_id');
  }
  public set automationAccountId(value: string) {
    this._automationAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountIdInput() {
    return this._automationAccountId;
  }

  // is_global_runbook - computed: false, optional: false, required: true
  private _isGlobalRunbook?: boolean | cdktf.IResolvable; 
  public get isGlobalRunbook() {
    return this.getBooleanAttribute('is_global_runbook');
  }
  public set isGlobalRunbook(value: boolean | cdktf.IResolvable) {
    this._isGlobalRunbook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isGlobalRunbookInput() {
    return this._isGlobalRunbook;
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

  // runbook_name - computed: false, optional: false, required: true
  private _runbookName?: string; 
  public get runbookName() {
    return this.getStringAttribute('runbook_name');
  }
  public set runbookName(value: string) {
    this._runbookName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookNameInput() {
    return this._runbookName;
  }

  // service_uri - computed: false, optional: false, required: true
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
  }

  // use_common_alert_schema - computed: false, optional: true, required: false
  private _useCommonAlertSchema?: boolean | cdktf.IResolvable; 
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
  public set useCommonAlertSchema(value: boolean | cdktf.IResolvable) {
    this._useCommonAlertSchema = value;
  }
  public resetUseCommonAlertSchema() {
    this._useCommonAlertSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommonAlertSchemaInput() {
    return this._useCommonAlertSchema;
  }

  // webhook_resource_id - computed: false, optional: false, required: true
  private _webhookResourceId?: string; 
  public get webhookResourceId() {
    return this.getStringAttribute('webhook_resource_id');
  }
  public set webhookResourceId(value: string) {
    this._webhookResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookResourceIdInput() {
    return this._webhookResourceId;
  }
}

export class MonitorActionGroupAutomationRunbookReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupAutomationRunbookReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupAutomationRunbookReceiverOutputReference {
    return new MonitorActionGroupAutomationRunbookReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupAzureAppPushReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
}

export function monitorActionGroupAzureAppPushReceiverToTerraform(struct?: MonitorActionGroupAzureAppPushReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function monitorActionGroupAzureAppPushReceiverToHclTerraform(struct?: MonitorActionGroupAzureAppPushReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupAzureAppPushReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupAzureAppPushReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupAzureAppPushReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._name = value.name;
    }
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
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
}

export class MonitorActionGroupAzureAppPushReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupAzureAppPushReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupAzureAppPushReceiverOutputReference {
    return new MonitorActionGroupAzureAppPushReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupAzureFunctionReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#function_app_resource_id MonitorActionGroup#function_app_resource_id}
  */
  readonly functionAppResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#function_name MonitorActionGroup#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#http_trigger_url MonitorActionGroup#http_trigger_url}
  */
  readonly httpTriggerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

export function monitorActionGroupAzureFunctionReceiverToTerraform(struct?: MonitorActionGroupAzureFunctionReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function monitorActionGroupAzureFunctionReceiverToHclTerraform(struct?: MonitorActionGroupAzureFunctionReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_app_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.functionAppResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_trigger_url: {
      value: cdktf.stringToHclTerraform(struct!.httpTriggerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_common_alert_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useCommonAlertSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupAzureFunctionReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupAzureFunctionReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionAppResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAppResourceId = this._functionAppResourceId;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._httpTriggerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTriggerUrl = this._httpTriggerUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useCommonAlertSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCommonAlertSchema = this._useCommonAlertSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupAzureFunctionReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionAppResourceId = undefined;
      this._functionName = undefined;
      this._httpTriggerUrl = undefined;
      this._name = undefined;
      this._useCommonAlertSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionAppResourceId = value.functionAppResourceId;
      this._functionName = value.functionName;
      this._httpTriggerUrl = value.httpTriggerUrl;
      this._name = value.name;
      this._useCommonAlertSchema = value.useCommonAlertSchema;
    }
  }

  // function_app_resource_id - computed: false, optional: false, required: true
  private _functionAppResourceId?: string; 
  public get functionAppResourceId() {
    return this.getStringAttribute('function_app_resource_id');
  }
  public set functionAppResourceId(value: string) {
    this._functionAppResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAppResourceIdInput() {
    return this._functionAppResourceId;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // http_trigger_url - computed: false, optional: false, required: true
  private _httpTriggerUrl?: string; 
  public get httpTriggerUrl() {
    return this.getStringAttribute('http_trigger_url');
  }
  public set httpTriggerUrl(value: string) {
    this._httpTriggerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTriggerUrlInput() {
    return this._httpTriggerUrl;
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

  // use_common_alert_schema - computed: false, optional: true, required: false
  private _useCommonAlertSchema?: boolean | cdktf.IResolvable; 
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
  public set useCommonAlertSchema(value: boolean | cdktf.IResolvable) {
    this._useCommonAlertSchema = value;
  }
  public resetUseCommonAlertSchema() {
    this._useCommonAlertSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommonAlertSchemaInput() {
    return this._useCommonAlertSchema;
  }
}

export class MonitorActionGroupAzureFunctionReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupAzureFunctionReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupAzureFunctionReceiverOutputReference {
    return new MonitorActionGroupAzureFunctionReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupEmailReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

export function monitorActionGroupEmailReceiverToTerraform(struct?: MonitorActionGroupEmailReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    name: cdktf.stringToTerraform(struct!.name),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}


export function monitorActionGroupEmailReceiverToHclTerraform(struct?: MonitorActionGroupEmailReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_common_alert_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useCommonAlertSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupEmailReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupEmailReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useCommonAlertSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCommonAlertSchema = this._useCommonAlertSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupEmailReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._name = undefined;
      this._useCommonAlertSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._name = value.name;
      this._useCommonAlertSchema = value.useCommonAlertSchema;
    }
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
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

  // use_common_alert_schema - computed: false, optional: true, required: false
  private _useCommonAlertSchema?: boolean | cdktf.IResolvable; 
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
  public set useCommonAlertSchema(value: boolean | cdktf.IResolvable) {
    this._useCommonAlertSchema = value;
  }
  public resetUseCommonAlertSchema() {
    this._useCommonAlertSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommonAlertSchemaInput() {
    return this._useCommonAlertSchema;
  }
}

export class MonitorActionGroupEmailReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupEmailReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupEmailReceiverOutputReference {
    return new MonitorActionGroupEmailReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupEventHubReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#event_hub_name MonitorActionGroup#event_hub_name}
  */
  readonly eventHubName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#event_hub_namespace MonitorActionGroup#event_hub_namespace}
  */
  readonly eventHubNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#subscription_id MonitorActionGroup#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

export function monitorActionGroupEventHubReceiverToTerraform(struct?: MonitorActionGroupEventHubReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_hub_name: cdktf.stringToTerraform(struct!.eventHubName),
    event_hub_namespace: cdktf.stringToTerraform(struct!.eventHubNamespace),
    name: cdktf.stringToTerraform(struct!.name),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    use_common_alert_schema: cdktf.booleanToTerraform(struct!.useCommonAlertSchema),
  }
}


export function monitorActionGroupEventHubReceiverToHclTerraform(struct?: MonitorActionGroupEventHubReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_hub_name: {
      value: cdktf.stringToHclTerraform(struct!.eventHubName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_hub_namespace: {
      value: cdktf.stringToHclTerraform(struct!.eventHubNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_common_alert_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useCommonAlertSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupEventHubReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupEventHubReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventHubName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubName = this._eventHubName;
    }
    if (this._eventHubNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHubNamespace = this._eventHubNamespace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._useCommonAlertSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCommonAlertSchema = this._useCommonAlertSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupEventHubReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventHubName = undefined;
      this._eventHubNamespace = undefined;
      this._name = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
      this._useCommonAlertSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventHubName = value.eventHubName;
      this._eventHubNamespace = value.eventHubNamespace;
      this._name = value.name;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
      this._useCommonAlertSchema = value.useCommonAlertSchema;
    }
  }

  // event_hub_name - computed: false, optional: false, required: true
  private _eventHubName?: string; 
  public get eventHubName() {
    return this.getStringAttribute('event_hub_name');
  }
  public set eventHubName(value: string) {
    this._eventHubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubNameInput() {
    return this._eventHubName;
  }

  // event_hub_namespace - computed: false, optional: false, required: true
  private _eventHubNamespace?: string; 
  public get eventHubNamespace() {
    return this.getStringAttribute('event_hub_namespace');
  }
  public set eventHubNamespace(value: string) {
    this._eventHubNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubNamespaceInput() {
    return this._eventHubNamespace;
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

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_common_alert_schema - computed: false, optional: true, required: false
  private _useCommonAlertSchema?: boolean | cdktf.IResolvable; 
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
  public set useCommonAlertSchema(value: boolean | cdktf.IResolvable) {
    this._useCommonAlertSchema = value;
  }
  public resetUseCommonAlertSchema() {
    this._useCommonAlertSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommonAlertSchemaInput() {
    return this._useCommonAlertSchema;
  }
}

export class MonitorActionGroupEventHubReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupEventHubReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupEventHubReceiverOutputReference {
    return new MonitorActionGroupEventHubReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupItsmReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#connection_id MonitorActionGroup#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#region MonitorActionGroup#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#ticket_configuration MonitorActionGroup#ticket_configuration}
  */
  readonly ticketConfiguration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#workspace_id MonitorActionGroup#workspace_id}
  */
  readonly workspaceId: string;
}

export function monitorActionGroupItsmReceiverToTerraform(struct?: MonitorActionGroupItsmReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function monitorActionGroupItsmReceiverToHclTerraform(struct?: MonitorActionGroupItsmReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_configuration: {
      value: cdktf.stringToHclTerraform(struct!.ticketConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupItsmReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupItsmReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._ticketConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketConfiguration = this._ticketConfiguration;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupItsmReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._name = undefined;
      this._region = undefined;
      this._ticketConfiguration = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._name = value.name;
      this._region = value.region;
      this._ticketConfiguration = value.ticketConfiguration;
      this._workspaceId = value.workspaceId;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ticket_configuration - computed: false, optional: false, required: true
  private _ticketConfiguration?: string; 
  public get ticketConfiguration() {
    return this.getStringAttribute('ticket_configuration');
  }
  public set ticketConfiguration(value: string) {
    this._ticketConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketConfigurationInput() {
    return this._ticketConfiguration;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class MonitorActionGroupItsmReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupItsmReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupItsmReceiverOutputReference {
    return new MonitorActionGroupItsmReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupLogicAppReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#callback_url MonitorActionGroup#callback_url}
  */
  readonly callbackUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#resource_id MonitorActionGroup#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
}

export function monitorActionGroupLogicAppReceiverToTerraform(struct?: MonitorActionGroupLogicAppReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function monitorActionGroupLogicAppReceiverToHclTerraform(struct?: MonitorActionGroupLogicAppReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callback_url: {
      value: cdktf.stringToHclTerraform(struct!.callbackUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_common_alert_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useCommonAlertSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupLogicAppReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupLogicAppReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callbackUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUrl = this._callbackUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._useCommonAlertSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCommonAlertSchema = this._useCommonAlertSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupLogicAppReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callbackUrl = undefined;
      this._name = undefined;
      this._resourceId = undefined;
      this._useCommonAlertSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callbackUrl = value.callbackUrl;
      this._name = value.name;
      this._resourceId = value.resourceId;
      this._useCommonAlertSchema = value.useCommonAlertSchema;
    }
  }

  // callback_url - computed: false, optional: false, required: true
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // use_common_alert_schema - computed: false, optional: true, required: false
  private _useCommonAlertSchema?: boolean | cdktf.IResolvable; 
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
  public set useCommonAlertSchema(value: boolean | cdktf.IResolvable) {
    this._useCommonAlertSchema = value;
  }
  public resetUseCommonAlertSchema() {
    this._useCommonAlertSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommonAlertSchemaInput() {
    return this._useCommonAlertSchema;
  }
}

export class MonitorActionGroupLogicAppReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupLogicAppReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupLogicAppReceiverOutputReference {
    return new MonitorActionGroupLogicAppReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupSmsReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}
  */
  readonly phoneNumber: string;
}

export function monitorActionGroupSmsReceiverToTerraform(struct?: MonitorActionGroupSmsReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function monitorActionGroupSmsReceiverToHclTerraform(struct?: MonitorActionGroupSmsReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupSmsReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupSmsReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupSmsReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._name = undefined;
      this._phoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._name = value.name;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}

export class MonitorActionGroupSmsReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupSmsReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupSmsReceiverOutputReference {
    return new MonitorActionGroupSmsReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}
  */
  readonly update?: string;
}

export function monitorActionGroupTimeoutsToTerraform(struct?: MonitorActionGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function monitorActionGroupTimeoutsToHclTerraform(struct?: MonitorActionGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorActionGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface MonitorActionGroupVoiceReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}
  */
  readonly phoneNumber: string;
}

export function monitorActionGroupVoiceReceiverToTerraform(struct?: MonitorActionGroupVoiceReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function monitorActionGroupVoiceReceiverToHclTerraform(struct?: MonitorActionGroupVoiceReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupVoiceReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupVoiceReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupVoiceReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
      this._name = undefined;
      this._phoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
      this._name = value.name;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}

export class MonitorActionGroupVoiceReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupVoiceReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupVoiceReceiverOutputReference {
    return new MonitorActionGroupVoiceReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorActionGroupWebhookReceiverAadAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}
  */
  readonly identifierUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}
  */
  readonly tenantId?: string;
}

export function monitorActionGroupWebhookReceiverAadAuthToTerraform(struct?: MonitorActionGroupWebhookReceiverAadAuthOutputReference | MonitorActionGroupWebhookReceiverAadAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier_uri: cdktf.stringToTerraform(struct!.identifierUri),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function monitorActionGroupWebhookReceiverAadAuthToHclTerraform(struct?: MonitorActionGroupWebhookReceiverAadAuthOutputReference | MonitorActionGroupWebhookReceiverAadAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier_uri: {
      value: cdktf.stringToHclTerraform(struct!.identifierUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupWebhookReceiverAadAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorActionGroupWebhookReceiverAadAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifierUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierUri = this._identifierUri;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupWebhookReceiverAadAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identifierUri = undefined;
      this._objectId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identifierUri = value.identifierUri;
      this._objectId = value.objectId;
      this._tenantId = value.tenantId;
    }
  }

  // identifier_uri - computed: true, optional: true, required: false
  private _identifierUri?: string; 
  public get identifierUri() {
    return this.getStringAttribute('identifier_uri');
  }
  public set identifierUri(value: string) {
    this._identifierUri = value;
  }
  public resetIdentifierUri() {
    this._identifierUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierUriInput() {
    return this._identifierUri;
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
    return this._objectId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface MonitorActionGroupWebhookReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}
  */
  readonly serviceUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}
  */
  readonly useCommonAlertSchema?: boolean | cdktf.IResolvable;
  /**
  * aad_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#aad_auth MonitorActionGroup#aad_auth}
  */
  readonly aadAuth?: MonitorActionGroupWebhookReceiverAadAuth;
}

export function monitorActionGroupWebhookReceiverToTerraform(struct?: MonitorActionGroupWebhookReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function monitorActionGroupWebhookReceiverToHclTerraform(struct?: MonitorActionGroupWebhookReceiver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_uri: {
      value: cdktf.stringToHclTerraform(struct!.serviceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_common_alert_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useCommonAlertSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aad_auth: {
      value: monitorActionGroupWebhookReceiverAadAuthToHclTerraform(struct!.aadAuth),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorActionGroupWebhookReceiverAadAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorActionGroupWebhookReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MonitorActionGroupWebhookReceiver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUri = this._serviceUri;
    }
    if (this._useCommonAlertSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCommonAlertSchema = this._useCommonAlertSchema;
    }
    if (this._aadAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadAuth = this._aadAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorActionGroupWebhookReceiver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serviceUri = undefined;
      this._useCommonAlertSchema = undefined;
      this._aadAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serviceUri = value.serviceUri;
      this._useCommonAlertSchema = value.useCommonAlertSchema;
      this._aadAuth.internalValue = value.aadAuth;
    }
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

  // service_uri - computed: false, optional: false, required: true
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
  }

  // use_common_alert_schema - computed: false, optional: true, required: false
  private _useCommonAlertSchema?: boolean | cdktf.IResolvable; 
  public get useCommonAlertSchema() {
    return this.getBooleanAttribute('use_common_alert_schema');
  }
  public set useCommonAlertSchema(value: boolean | cdktf.IResolvable) {
    this._useCommonAlertSchema = value;
  }
  public resetUseCommonAlertSchema() {
    this._useCommonAlertSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommonAlertSchemaInput() {
    return this._useCommonAlertSchema;
  }

  // aad_auth - computed: false, optional: true, required: false
  private _aadAuth = new MonitorActionGroupWebhookReceiverAadAuthOutputReference(this, "aad_auth");
  public get aadAuth() {
    return this._aadAuth;
  }
  public putAadAuth(value: MonitorActionGroupWebhookReceiverAadAuth) {
    this._aadAuth.internalValue = value;
  }
  public resetAadAuth() {
    this._aadAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAuthInput() {
    return this._aadAuth.internalValue;
  }
}

export class MonitorActionGroupWebhookReceiverList extends cdktf.ComplexList {
  public internalValue? : MonitorActionGroupWebhookReceiver[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MonitorActionGroupWebhookReceiverOutputReference {
    return new MonitorActionGroupWebhookReceiverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group azurerm_monitor_action_group}
*/
export class MonitorActionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_action_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorActionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorActionGroup to import
  * @param importFromId The id of the existing MonitorActionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorActionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_action_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/monitor_action_group azurerm_monitor_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorActionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorActionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_action_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._shortName = config.shortName;
    this._tags = config.tags;
    this._armRoleReceiver.internalValue = config.armRoleReceiver;
    this._automationRunbookReceiver.internalValue = config.automationRunbookReceiver;
    this._azureAppPushReceiver.internalValue = config.azureAppPushReceiver;
    this._azureFunctionReceiver.internalValue = config.azureFunctionReceiver;
    this._emailReceiver.internalValue = config.emailReceiver;
    this._eventHubReceiver.internalValue = config.eventHubReceiver;
    this._itsmReceiver.internalValue = config.itsmReceiver;
    this._logicAppReceiver.internalValue = config.logicAppReceiver;
    this._smsReceiver.internalValue = config.smsReceiver;
    this._timeouts.internalValue = config.timeouts;
    this._voiceReceiver.internalValue = config.voiceReceiver;
    this._webhookReceiver.internalValue = config.webhookReceiver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
    return this._shortName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // arm_role_receiver - computed: false, optional: true, required: false
  private _armRoleReceiver = new MonitorActionGroupArmRoleReceiverList(this, "arm_role_receiver", false);
  public get armRoleReceiver() {
    return this._armRoleReceiver;
  }
  public putArmRoleReceiver(value: MonitorActionGroupArmRoleReceiver[] | cdktf.IResolvable) {
    this._armRoleReceiver.internalValue = value;
  }
  public resetArmRoleReceiver() {
    this._armRoleReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armRoleReceiverInput() {
    return this._armRoleReceiver.internalValue;
  }

  // automation_runbook_receiver - computed: false, optional: true, required: false
  private _automationRunbookReceiver = new MonitorActionGroupAutomationRunbookReceiverList(this, "automation_runbook_receiver", false);
  public get automationRunbookReceiver() {
    return this._automationRunbookReceiver;
  }
  public putAutomationRunbookReceiver(value: MonitorActionGroupAutomationRunbookReceiver[] | cdktf.IResolvable) {
    this._automationRunbookReceiver.internalValue = value;
  }
  public resetAutomationRunbookReceiver() {
    this._automationRunbookReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationRunbookReceiverInput() {
    return this._automationRunbookReceiver.internalValue;
  }

  // azure_app_push_receiver - computed: false, optional: true, required: false
  private _azureAppPushReceiver = new MonitorActionGroupAzureAppPushReceiverList(this, "azure_app_push_receiver", false);
  public get azureAppPushReceiver() {
    return this._azureAppPushReceiver;
  }
  public putAzureAppPushReceiver(value: MonitorActionGroupAzureAppPushReceiver[] | cdktf.IResolvable) {
    this._azureAppPushReceiver.internalValue = value;
  }
  public resetAzureAppPushReceiver() {
    this._azureAppPushReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAppPushReceiverInput() {
    return this._azureAppPushReceiver.internalValue;
  }

  // azure_function_receiver - computed: false, optional: true, required: false
  private _azureFunctionReceiver = new MonitorActionGroupAzureFunctionReceiverList(this, "azure_function_receiver", false);
  public get azureFunctionReceiver() {
    return this._azureFunctionReceiver;
  }
  public putAzureFunctionReceiver(value: MonitorActionGroupAzureFunctionReceiver[] | cdktf.IResolvable) {
    this._azureFunctionReceiver.internalValue = value;
  }
  public resetAzureFunctionReceiver() {
    this._azureFunctionReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionReceiverInput() {
    return this._azureFunctionReceiver.internalValue;
  }

  // email_receiver - computed: false, optional: true, required: false
  private _emailReceiver = new MonitorActionGroupEmailReceiverList(this, "email_receiver", false);
  public get emailReceiver() {
    return this._emailReceiver;
  }
  public putEmailReceiver(value: MonitorActionGroupEmailReceiver[] | cdktf.IResolvable) {
    this._emailReceiver.internalValue = value;
  }
  public resetEmailReceiver() {
    this._emailReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailReceiverInput() {
    return this._emailReceiver.internalValue;
  }

  // event_hub_receiver - computed: false, optional: true, required: false
  private _eventHubReceiver = new MonitorActionGroupEventHubReceiverList(this, "event_hub_receiver", false);
  public get eventHubReceiver() {
    return this._eventHubReceiver;
  }
  public putEventHubReceiver(value: MonitorActionGroupEventHubReceiver[] | cdktf.IResolvable) {
    this._eventHubReceiver.internalValue = value;
  }
  public resetEventHubReceiver() {
    this._eventHubReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubReceiverInput() {
    return this._eventHubReceiver.internalValue;
  }

  // itsm_receiver - computed: false, optional: true, required: false
  private _itsmReceiver = new MonitorActionGroupItsmReceiverList(this, "itsm_receiver", false);
  public get itsmReceiver() {
    return this._itsmReceiver;
  }
  public putItsmReceiver(value: MonitorActionGroupItsmReceiver[] | cdktf.IResolvable) {
    this._itsmReceiver.internalValue = value;
  }
  public resetItsmReceiver() {
    this._itsmReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itsmReceiverInput() {
    return this._itsmReceiver.internalValue;
  }

  // logic_app_receiver - computed: false, optional: true, required: false
  private _logicAppReceiver = new MonitorActionGroupLogicAppReceiverList(this, "logic_app_receiver", false);
  public get logicAppReceiver() {
    return this._logicAppReceiver;
  }
  public putLogicAppReceiver(value: MonitorActionGroupLogicAppReceiver[] | cdktf.IResolvable) {
    this._logicAppReceiver.internalValue = value;
  }
  public resetLogicAppReceiver() {
    this._logicAppReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppReceiverInput() {
    return this._logicAppReceiver.internalValue;
  }

  // sms_receiver - computed: false, optional: true, required: false
  private _smsReceiver = new MonitorActionGroupSmsReceiverList(this, "sms_receiver", false);
  public get smsReceiver() {
    return this._smsReceiver;
  }
  public putSmsReceiver(value: MonitorActionGroupSmsReceiver[] | cdktf.IResolvable) {
    this._smsReceiver.internalValue = value;
  }
  public resetSmsReceiver() {
    this._smsReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsReceiverInput() {
    return this._smsReceiver.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorActionGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorActionGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // voice_receiver - computed: false, optional: true, required: false
  private _voiceReceiver = new MonitorActionGroupVoiceReceiverList(this, "voice_receiver", false);
  public get voiceReceiver() {
    return this._voiceReceiver;
  }
  public putVoiceReceiver(value: MonitorActionGroupVoiceReceiver[] | cdktf.IResolvable) {
    this._voiceReceiver.internalValue = value;
  }
  public resetVoiceReceiver() {
    this._voiceReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceReceiverInput() {
    return this._voiceReceiver.internalValue;
  }

  // webhook_receiver - computed: false, optional: true, required: false
  private _webhookReceiver = new MonitorActionGroupWebhookReceiverList(this, "webhook_receiver", false);
  public get webhookReceiver() {
    return this._webhookReceiver;
  }
  public putWebhookReceiver(value: MonitorActionGroupWebhookReceiver[] | cdktf.IResolvable) {
    this._webhookReceiver.internalValue = value;
  }
  public resetWebhookReceiver() {
    this._webhookReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookReceiverInput() {
    return this._webhookReceiver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      short_name: cdktf.stringToTerraform(this._shortName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      arm_role_receiver: cdktf.listMapper(monitorActionGroupArmRoleReceiverToTerraform, true)(this._armRoleReceiver.internalValue),
      automation_runbook_receiver: cdktf.listMapper(monitorActionGroupAutomationRunbookReceiverToTerraform, true)(this._automationRunbookReceiver.internalValue),
      azure_app_push_receiver: cdktf.listMapper(monitorActionGroupAzureAppPushReceiverToTerraform, true)(this._azureAppPushReceiver.internalValue),
      azure_function_receiver: cdktf.listMapper(monitorActionGroupAzureFunctionReceiverToTerraform, true)(this._azureFunctionReceiver.internalValue),
      email_receiver: cdktf.listMapper(monitorActionGroupEmailReceiverToTerraform, true)(this._emailReceiver.internalValue),
      event_hub_receiver: cdktf.listMapper(monitorActionGroupEventHubReceiverToTerraform, true)(this._eventHubReceiver.internalValue),
      itsm_receiver: cdktf.listMapper(monitorActionGroupItsmReceiverToTerraform, true)(this._itsmReceiver.internalValue),
      logic_app_receiver: cdktf.listMapper(monitorActionGroupLogicAppReceiverToTerraform, true)(this._logicAppReceiver.internalValue),
      sms_receiver: cdktf.listMapper(monitorActionGroupSmsReceiverToTerraform, true)(this._smsReceiver.internalValue),
      timeouts: monitorActionGroupTimeoutsToTerraform(this._timeouts.internalValue),
      voice_receiver: cdktf.listMapper(monitorActionGroupVoiceReceiverToTerraform, true)(this._voiceReceiver.internalValue),
      webhook_receiver: cdktf.listMapper(monitorActionGroupWebhookReceiverToTerraform, true)(this._webhookReceiver.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      arm_role_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupArmRoleReceiverToHclTerraform, true)(this._armRoleReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupArmRoleReceiverList",
      },
      automation_runbook_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupAutomationRunbookReceiverToHclTerraform, true)(this._automationRunbookReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupAutomationRunbookReceiverList",
      },
      azure_app_push_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupAzureAppPushReceiverToHclTerraform, true)(this._azureAppPushReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupAzureAppPushReceiverList",
      },
      azure_function_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupAzureFunctionReceiverToHclTerraform, true)(this._azureFunctionReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupAzureFunctionReceiverList",
      },
      email_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupEmailReceiverToHclTerraform, true)(this._emailReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupEmailReceiverList",
      },
      event_hub_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupEventHubReceiverToHclTerraform, true)(this._eventHubReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupEventHubReceiverList",
      },
      itsm_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupItsmReceiverToHclTerraform, true)(this._itsmReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupItsmReceiverList",
      },
      logic_app_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupLogicAppReceiverToHclTerraform, true)(this._logicAppReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupLogicAppReceiverList",
      },
      sms_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupSmsReceiverToHclTerraform, true)(this._smsReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupSmsReceiverList",
      },
      timeouts: {
        value: monitorActionGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorActionGroupTimeouts",
      },
      voice_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupVoiceReceiverToHclTerraform, true)(this._voiceReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupVoiceReceiverList",
      },
      webhook_receiver: {
        value: cdktf.listMapperHcl(monitorActionGroupWebhookReceiverToHclTerraform, true)(this._webhookReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorActionGroupWebhookReceiverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
