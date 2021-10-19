// https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#enabled LogicAppWorkflow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}
  */
  readonly integrationServiceEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#location LogicAppWorkflow#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}
  */
  readonly logicAppIntegrationAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#name LogicAppWorkflow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#parameters LogicAppWorkflow#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#resource_group_name LogicAppWorkflow#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#tags LogicAppWorkflow#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#workflow_parameters LogicAppWorkflow#workflow_parameters}
  */
  readonly workflowParameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#workflow_schema LogicAppWorkflow#workflow_schema}
  */
  readonly workflowSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#workflow_version LogicAppWorkflow#workflow_version}
  */
  readonly workflowVersion?: string;
  /**
  * access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#access_control LogicAppWorkflow#access_control}
  */
  readonly accessControl?: LogicAppWorkflowAccessControl;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#timeouts LogicAppWorkflow#timeouts}
  */
  readonly timeouts?: LogicAppWorkflowTimeouts;
}
export interface LogicAppWorkflowAccessControlAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
}

function logicAppWorkflowAccessControlActionToTerraform(struct?: LogicAppWorkflowAccessControlActionOutputReference | LogicAppWorkflowAccessControlAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedCallerIpAddressRange),
  }
}

export class LogicAppWorkflowAccessControlActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return this.getListAttribute('allowed_caller_ip_address_range');
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange
  }
}
export interface LogicAppWorkflowAccessControlContent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
}

function logicAppWorkflowAccessControlContentToTerraform(struct?: LogicAppWorkflowAccessControlContentOutputReference | LogicAppWorkflowAccessControlContent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedCallerIpAddressRange),
  }
}

export class LogicAppWorkflowAccessControlContentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return this.getListAttribute('allowed_caller_ip_address_range');
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange
  }
}
export interface LogicAppWorkflowAccessControlTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
}

function logicAppWorkflowAccessControlTriggerToTerraform(struct?: LogicAppWorkflowAccessControlTriggerOutputReference | LogicAppWorkflowAccessControlTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedCallerIpAddressRange),
  }
}

export class LogicAppWorkflowAccessControlTriggerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return this.getListAttribute('allowed_caller_ip_address_range');
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange
  }
}
export interface LogicAppWorkflowAccessControlWorkflowManagement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}
  */
  readonly allowedCallerIpAddressRange: string[];
}

function logicAppWorkflowAccessControlWorkflowManagementToTerraform(struct?: LogicAppWorkflowAccessControlWorkflowManagementOutputReference | LogicAppWorkflowAccessControlWorkflowManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_caller_ip_address_range: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedCallerIpAddressRange),
  }
}

export class LogicAppWorkflowAccessControlWorkflowManagementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_caller_ip_address_range - computed: false, optional: false, required: true
  private _allowedCallerIpAddressRange?: string[]; 
  public get allowedCallerIpAddressRange() {
    return this.getListAttribute('allowed_caller_ip_address_range');
  }
  public set allowedCallerIpAddressRange(value: string[]) {
    this._allowedCallerIpAddressRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCallerIpAddressRangeInput() {
    return this._allowedCallerIpAddressRange
  }
}
export interface LogicAppWorkflowAccessControl {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#action LogicAppWorkflow#action}
  */
  readonly action?: LogicAppWorkflowAccessControlAction;
  /**
  * content block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#content LogicAppWorkflow#content}
  */
  readonly content?: LogicAppWorkflowAccessControlContent;
  /**
  * trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#trigger LogicAppWorkflow#trigger}
  */
  readonly trigger?: LogicAppWorkflowAccessControlTrigger;
  /**
  * workflow_management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#workflow_management LogicAppWorkflow#workflow_management}
  */
  readonly workflowManagement?: LogicAppWorkflowAccessControlWorkflowManagement;
}

function logicAppWorkflowAccessControlToTerraform(struct?: LogicAppWorkflowAccessControlOutputReference | LogicAppWorkflowAccessControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: logicAppWorkflowAccessControlActionToTerraform(struct!.action),
    content: logicAppWorkflowAccessControlContentToTerraform(struct!.content),
    trigger: logicAppWorkflowAccessControlTriggerToTerraform(struct!.trigger),
    workflow_management: logicAppWorkflowAccessControlWorkflowManagementToTerraform(struct!.workflowManagement),
  }
}

export class LogicAppWorkflowAccessControlOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: true, required: false
  private _action?: LogicAppWorkflowAccessControlAction | undefined; 
  private __actionOutput = new LogicAppWorkflowAccessControlActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: LogicAppWorkflowAccessControlAction | undefined) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // content - computed: false, optional: true, required: false
  private _content?: LogicAppWorkflowAccessControlContent | undefined; 
  private __contentOutput = new LogicAppWorkflowAccessControlContentOutputReference(this as any, "content", true);
  public get content() {
    return this.__contentOutput;
  }
  public putContent(value: LogicAppWorkflowAccessControlContent | undefined) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger?: LogicAppWorkflowAccessControlTrigger | undefined; 
  private __triggerOutput = new LogicAppWorkflowAccessControlTriggerOutputReference(this as any, "trigger", true);
  public get trigger() {
    return this.__triggerOutput;
  }
  public putTrigger(value: LogicAppWorkflowAccessControlTrigger | undefined) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger
  }

  // workflow_management - computed: false, optional: true, required: false
  private _workflowManagement?: LogicAppWorkflowAccessControlWorkflowManagement | undefined; 
  private __workflowManagementOutput = new LogicAppWorkflowAccessControlWorkflowManagementOutputReference(this as any, "workflow_management", true);
  public get workflowManagement() {
    return this.__workflowManagementOutput;
  }
  public putWorkflowManagement(value: LogicAppWorkflowAccessControlWorkflowManagement | undefined) {
    this._workflowManagement = value;
  }
  public resetWorkflowManagement() {
    this._workflowManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowManagementInput() {
    return this._workflowManagement
  }
}
export interface LogicAppWorkflowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#create LogicAppWorkflow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#delete LogicAppWorkflow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#read LogicAppWorkflow#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html#update LogicAppWorkflow#update}
  */
  readonly update?: string;
}

function logicAppWorkflowTimeoutsToTerraform(struct?: LogicAppWorkflowTimeoutsOutputReference | LogicAppWorkflowTimeouts): any {
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

export class LogicAppWorkflowTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html azurerm_logic_app_workflow}
*/
export class LogicAppWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_workflow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_workflow.html azurerm_logic_app_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_workflow',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._integrationServiceEnvironmentId = config.integrationServiceEnvironmentId;
    this._location = config.location;
    this._logicAppIntegrationAccountId = config.logicAppIntegrationAccountId;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._workflowParameters = config.workflowParameters;
    this._workflowSchema = config.workflowSchema;
    this._workflowVersion = config.workflowVersion;
    this._accessControl = config.accessControl;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_endpoint - computed: true, optional: false, required: false
  public get accessEndpoint() {
    return this.getStringAttribute('access_endpoint');
  }

  // connector_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get connectorEndpointIpAddresses() {
    return this.getListAttribute('connector_endpoint_ip_addresses');
  }

  // connector_outbound_ip_addresses - computed: true, optional: false, required: false
  public get connectorOutboundIpAddresses() {
    return this.getListAttribute('connector_outbound_ip_addresses');
  }

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

  // integration_service_environment_id - computed: false, optional: true, required: false
  private _integrationServiceEnvironmentId?: string | undefined; 
  public get integrationServiceEnvironmentId() {
    return this.getStringAttribute('integration_service_environment_id');
  }
  public set integrationServiceEnvironmentId(value: string | undefined) {
    this._integrationServiceEnvironmentId = value;
  }
  public resetIntegrationServiceEnvironmentId() {
    this._integrationServiceEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationServiceEnvironmentIdInput() {
    return this._integrationServiceEnvironmentId
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // logic_app_integration_account_id - computed: false, optional: true, required: false
  private _logicAppIntegrationAccountId?: string | undefined; 
  public get logicAppIntegrationAccountId() {
    return this.getStringAttribute('logic_app_integration_account_id');
  }
  public set logicAppIntegrationAccountId(value: string | undefined) {
    this._logicAppIntegrationAccountId = value;
  }
  public resetLogicAppIntegrationAccountId() {
    this._logicAppIntegrationAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppIntegrationAccountIdInput() {
    return this._logicAppIntegrationAccountId
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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

  // workflow_endpoint_ip_addresses - computed: true, optional: false, required: false
  public get workflowEndpointIpAddresses() {
    return this.getListAttribute('workflow_endpoint_ip_addresses');
  }

  // workflow_outbound_ip_addresses - computed: true, optional: false, required: false
  public get workflowOutboundIpAddresses() {
    return this.getListAttribute('workflow_outbound_ip_addresses');
  }

  // workflow_parameters - computed: false, optional: true, required: false
  private _workflowParameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get workflowParameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('workflow_parameters') as any;
  }
  public set workflowParameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._workflowParameters = value;
  }
  public resetWorkflowParameters() {
    this._workflowParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowParametersInput() {
    return this._workflowParameters
  }

  // workflow_schema - computed: false, optional: true, required: false
  private _workflowSchema?: string | undefined; 
  public get workflowSchema() {
    return this.getStringAttribute('workflow_schema');
  }
  public set workflowSchema(value: string | undefined) {
    this._workflowSchema = value;
  }
  public resetWorkflowSchema() {
    this._workflowSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowSchemaInput() {
    return this._workflowSchema
  }

  // workflow_version - computed: false, optional: true, required: false
  private _workflowVersion?: string | undefined; 
  public get workflowVersion() {
    return this.getStringAttribute('workflow_version');
  }
  public set workflowVersion(value: string | undefined) {
    this._workflowVersion = value;
  }
  public resetWorkflowVersion() {
    this._workflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowVersionInput() {
    return this._workflowVersion
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl?: LogicAppWorkflowAccessControl | undefined; 
  private __accessControlOutput = new LogicAppWorkflowAccessControlOutputReference(this as any, "access_control", true);
  public get accessControl() {
    return this.__accessControlOutput;
  }
  public putAccessControl(value: LogicAppWorkflowAccessControl | undefined) {
    this._accessControl = value;
  }
  public resetAccessControl() {
    this._accessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppWorkflowTimeouts | undefined; 
  private __timeoutsOutput = new LogicAppWorkflowTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LogicAppWorkflowTimeouts | undefined) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      integration_service_environment_id: cdktf.stringToTerraform(this._integrationServiceEnvironmentId),
      location: cdktf.stringToTerraform(this._location),
      logic_app_integration_account_id: cdktf.stringToTerraform(this._logicAppIntegrationAccountId),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      workflow_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._workflowParameters),
      workflow_schema: cdktf.stringToTerraform(this._workflowSchema),
      workflow_version: cdktf.stringToTerraform(this._workflowVersion),
      access_control: logicAppWorkflowAccessControlToTerraform(this._accessControl),
      timeouts: logicAppWorkflowTimeoutsToTerraform(this._timeouts),
    };
  }
}
