// https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRegistryTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#agent_pool_name ContainerRegistryTask#agent_pool_name}
  */
  readonly agentPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#container_registry_id ContainerRegistryTask#container_registry_id}
  */
  readonly containerRegistryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#enabled ContainerRegistryTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#is_system_task ContainerRegistryTask#is_system_task}
  */
  readonly isSystemTask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#log_template ContainerRegistryTask#log_template}
  */
  readonly logTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#name ContainerRegistryTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#tags ContainerRegistryTask#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#timeout_in_seconds ContainerRegistryTask#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * agent_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#agent_setting ContainerRegistryTask#agent_setting}
  */
  readonly agentSetting?: ContainerRegistryTaskAgentSetting;
  /**
  * base_image_trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#base_image_trigger ContainerRegistryTask#base_image_trigger}
  */
  readonly baseImageTrigger?: ContainerRegistryTaskBaseImageTrigger;
  /**
  * docker_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#docker_step ContainerRegistryTask#docker_step}
  */
  readonly dockerStep?: ContainerRegistryTaskDockerStep;
  /**
  * encoded_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#encoded_step ContainerRegistryTask#encoded_step}
  */
  readonly encodedStep?: ContainerRegistryTaskEncodedStep;
  /**
  * file_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#file_step ContainerRegistryTask#file_step}
  */
  readonly fileStep?: ContainerRegistryTaskFileStep;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#identity ContainerRegistryTask#identity}
  */
  readonly identity?: ContainerRegistryTaskIdentity;
  /**
  * platform block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#platform ContainerRegistryTask#platform}
  */
  readonly platform?: ContainerRegistryTaskPlatform;
  /**
  * registry_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#registry_credential ContainerRegistryTask#registry_credential}
  */
  readonly registryCredential?: ContainerRegistryTaskRegistryCredential;
  /**
  * source_trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#source_trigger ContainerRegistryTask#source_trigger}
  */
  readonly sourceTrigger?: ContainerRegistryTaskSourceTrigger[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#timeouts ContainerRegistryTask#timeouts}
  */
  readonly timeouts?: ContainerRegistryTaskTimeouts;
  /**
  * timer_trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#timer_trigger ContainerRegistryTask#timer_trigger}
  */
  readonly timerTrigger?: ContainerRegistryTaskTimerTrigger[];
}
export interface ContainerRegistryTaskAgentSetting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#cpu ContainerRegistryTask#cpu}
  */
  readonly cpu: number;
}

export function containerRegistryTaskAgentSettingToTerraform(struct?: ContainerRegistryTaskAgentSettingOutputReference | ContainerRegistryTaskAgentSetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
  }
}

export class ContainerRegistryTaskAgentSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskAgentSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskAgentSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }
}
export interface ContainerRegistryTaskBaseImageTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#enabled ContainerRegistryTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#name ContainerRegistryTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#type ContainerRegistryTask#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#update_trigger_endpoint ContainerRegistryTask#update_trigger_endpoint}
  */
  readonly updateTriggerEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#update_trigger_payload_type ContainerRegistryTask#update_trigger_payload_type}
  */
  readonly updateTriggerPayloadType?: string;
}

export function containerRegistryTaskBaseImageTriggerToTerraform(struct?: ContainerRegistryTaskBaseImageTriggerOutputReference | ContainerRegistryTaskBaseImageTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    update_trigger_endpoint: cdktf.stringToTerraform(struct!.updateTriggerEndpoint),
    update_trigger_payload_type: cdktf.stringToTerraform(struct!.updateTriggerPayloadType),
  }
}

export class ContainerRegistryTaskBaseImageTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskBaseImageTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updateTriggerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTriggerEndpoint = this._updateTriggerEndpoint;
    }
    if (this._updateTriggerPayloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTriggerPayloadType = this._updateTriggerPayloadType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskBaseImageTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._name = undefined;
      this._type = undefined;
      this._updateTriggerEndpoint = undefined;
      this._updateTriggerPayloadType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._name = value.name;
      this._type = value.type;
      this._updateTriggerEndpoint = value.updateTriggerEndpoint;
      this._updateTriggerPayloadType = value.updateTriggerPayloadType;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_trigger_endpoint - computed: false, optional: true, required: false
  private _updateTriggerEndpoint?: string; 
  public get updateTriggerEndpoint() {
    return this.getStringAttribute('update_trigger_endpoint');
  }
  public set updateTriggerEndpoint(value: string) {
    this._updateTriggerEndpoint = value;
  }
  public resetUpdateTriggerEndpoint() {
    this._updateTriggerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTriggerEndpointInput() {
    return this._updateTriggerEndpoint;
  }

  // update_trigger_payload_type - computed: false, optional: true, required: false
  private _updateTriggerPayloadType?: string; 
  public get updateTriggerPayloadType() {
    return this.getStringAttribute('update_trigger_payload_type');
  }
  public set updateTriggerPayloadType(value: string) {
    this._updateTriggerPayloadType = value;
  }
  public resetUpdateTriggerPayloadType() {
    this._updateTriggerPayloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTriggerPayloadTypeInput() {
    return this._updateTriggerPayloadType;
  }
}
export interface ContainerRegistryTaskDockerStep {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#arguments ContainerRegistryTask#arguments}
  */
  readonly arguments?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#cache_enabled ContainerRegistryTask#cache_enabled}
  */
  readonly cacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#context_access_token ContainerRegistryTask#context_access_token}
  */
  readonly contextAccessToken: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#context_path ContainerRegistryTask#context_path}
  */
  readonly contextPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#dockerfile_path ContainerRegistryTask#dockerfile_path}
  */
  readonly dockerfilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#image_names ContainerRegistryTask#image_names}
  */
  readonly imageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#push_enabled ContainerRegistryTask#push_enabled}
  */
  readonly pushEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#secret_arguments ContainerRegistryTask#secret_arguments}
  */
  readonly secretArguments?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#target ContainerRegistryTask#target}
  */
  readonly target?: string;
}

export function containerRegistryTaskDockerStepToTerraform(struct?: ContainerRegistryTaskDockerStepOutputReference | ContainerRegistryTaskDockerStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.arguments),
    cache_enabled: cdktf.booleanToTerraform(struct!.cacheEnabled),
    context_access_token: cdktf.stringToTerraform(struct!.contextAccessToken),
    context_path: cdktf.stringToTerraform(struct!.contextPath),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    image_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.imageNames),
    push_enabled: cdktf.booleanToTerraform(struct!.pushEnabled),
    secret_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secretArguments),
    target: cdktf.stringToTerraform(struct!.target),
  }
}

export class ContainerRegistryTaskDockerStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskDockerStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._cacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEnabled = this._cacheEnabled;
    }
    if (this._contextAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextAccessToken = this._contextAccessToken;
    }
    if (this._contextPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextPath = this._contextPath;
    }
    if (this._dockerfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfilePath = this._dockerfilePath;
    }
    if (this._imageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageNames = this._imageNames;
    }
    if (this._pushEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushEnabled = this._pushEnabled;
    }
    if (this._secretArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArguments = this._secretArguments;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskDockerStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._cacheEnabled = undefined;
      this._contextAccessToken = undefined;
      this._contextPath = undefined;
      this._dockerfilePath = undefined;
      this._imageNames = undefined;
      this._pushEnabled = undefined;
      this._secretArguments = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._cacheEnabled = value.cacheEnabled;
      this._contextAccessToken = value.contextAccessToken;
      this._contextPath = value.contextPath;
      this._dockerfilePath = value.dockerfilePath;
      this._imageNames = value.imageNames;
      this._pushEnabled = value.pushEnabled;
      this._secretArguments = value.secretArguments;
      this._target = value.target;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: { [key: string]: string } | cdktf.IResolvable; 
  public get arguments() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('arguments') as any;
  }
  public set arguments(value: { [key: string]: string } | cdktf.IResolvable) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // cache_enabled - computed: false, optional: true, required: false
  private _cacheEnabled?: boolean | cdktf.IResolvable; 
  public get cacheEnabled() {
    return this.getBooleanAttribute('cache_enabled') as any;
  }
  public set cacheEnabled(value: boolean | cdktf.IResolvable) {
    this._cacheEnabled = value;
  }
  public resetCacheEnabled() {
    this._cacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEnabledInput() {
    return this._cacheEnabled;
  }

  // context_access_token - computed: false, optional: false, required: true
  private _contextAccessToken?: string; 
  public get contextAccessToken() {
    return this.getStringAttribute('context_access_token');
  }
  public set contextAccessToken(value: string) {
    this._contextAccessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextAccessTokenInput() {
    return this._contextAccessToken;
  }

  // context_path - computed: false, optional: false, required: true
  private _contextPath?: string; 
  public get contextPath() {
    return this.getStringAttribute('context_path');
  }
  public set contextPath(value: string) {
    this._contextPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextPathInput() {
    return this._contextPath;
  }

  // dockerfile_path - computed: false, optional: false, required: true
  private _dockerfilePath?: string; 
  public get dockerfilePath() {
    return this.getStringAttribute('dockerfile_path');
  }
  public set dockerfilePath(value: string) {
    this._dockerfilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfilePathInput() {
    return this._dockerfilePath;
  }

  // image_names - computed: false, optional: true, required: false
  private _imageNames?: string[]; 
  public get imageNames() {
    return this.getListAttribute('image_names');
  }
  public set imageNames(value: string[]) {
    this._imageNames = value;
  }
  public resetImageNames() {
    this._imageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNamesInput() {
    return this._imageNames;
  }

  // push_enabled - computed: false, optional: true, required: false
  private _pushEnabled?: boolean | cdktf.IResolvable; 
  public get pushEnabled() {
    return this.getBooleanAttribute('push_enabled') as any;
  }
  public set pushEnabled(value: boolean | cdktf.IResolvable) {
    this._pushEnabled = value;
  }
  public resetPushEnabled() {
    this._pushEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEnabledInput() {
    return this._pushEnabled;
  }

  // secret_arguments - computed: false, optional: true, required: false
  private _secretArguments?: { [key: string]: string } | cdktf.IResolvable; 
  public get secretArguments() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_arguments') as any;
  }
  public set secretArguments(value: { [key: string]: string } | cdktf.IResolvable) {
    this._secretArguments = value;
  }
  public resetSecretArguments() {
    this._secretArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArgumentsInput() {
    return this._secretArguments;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface ContainerRegistryTaskEncodedStep {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#context_access_token ContainerRegistryTask#context_access_token}
  */
  readonly contextAccessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#context_path ContainerRegistryTask#context_path}
  */
  readonly contextPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#secret_values ContainerRegistryTask#secret_values}
  */
  readonly secretValues?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#task_content ContainerRegistryTask#task_content}
  */
  readonly taskContent: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#value_content ContainerRegistryTask#value_content}
  */
  readonly valueContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#values ContainerRegistryTask#values}
  */
  readonly values?: { [key: string]: string } | cdktf.IResolvable;
}

export function containerRegistryTaskEncodedStepToTerraform(struct?: ContainerRegistryTaskEncodedStepOutputReference | ContainerRegistryTaskEncodedStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_access_token: cdktf.stringToTerraform(struct!.contextAccessToken),
    context_path: cdktf.stringToTerraform(struct!.contextPath),
    secret_values: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secretValues),
    task_content: cdktf.stringToTerraform(struct!.taskContent),
    value_content: cdktf.stringToTerraform(struct!.valueContent),
    values: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.values),
  }
}

export class ContainerRegistryTaskEncodedStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskEncodedStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextAccessToken = this._contextAccessToken;
    }
    if (this._contextPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextPath = this._contextPath;
    }
    if (this._secretValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValues = this._secretValues;
    }
    if (this._taskContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskContent = this._taskContent;
    }
    if (this._valueContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueContent = this._valueContent;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskEncodedStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextAccessToken = undefined;
      this._contextPath = undefined;
      this._secretValues = undefined;
      this._taskContent = undefined;
      this._valueContent = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextAccessToken = value.contextAccessToken;
      this._contextPath = value.contextPath;
      this._secretValues = value.secretValues;
      this._taskContent = value.taskContent;
      this._valueContent = value.valueContent;
      this._values = value.values;
    }
  }

  // context_access_token - computed: false, optional: true, required: false
  private _contextAccessToken?: string; 
  public get contextAccessToken() {
    return this.getStringAttribute('context_access_token');
  }
  public set contextAccessToken(value: string) {
    this._contextAccessToken = value;
  }
  public resetContextAccessToken() {
    this._contextAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextAccessTokenInput() {
    return this._contextAccessToken;
  }

  // context_path - computed: false, optional: true, required: false
  private _contextPath?: string; 
  public get contextPath() {
    return this.getStringAttribute('context_path');
  }
  public set contextPath(value: string) {
    this._contextPath = value;
  }
  public resetContextPath() {
    this._contextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextPathInput() {
    return this._contextPath;
  }

  // secret_values - computed: false, optional: true, required: false
  private _secretValues?: { [key: string]: string } | cdktf.IResolvable; 
  public get secretValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_values') as any;
  }
  public set secretValues(value: { [key: string]: string } | cdktf.IResolvable) {
    this._secretValues = value;
  }
  public resetSecretValues() {
    this._secretValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValuesInput() {
    return this._secretValues;
  }

  // task_content - computed: false, optional: false, required: true
  private _taskContent?: string; 
  public get taskContent() {
    return this.getStringAttribute('task_content');
  }
  public set taskContent(value: string) {
    this._taskContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskContentInput() {
    return this._taskContent;
  }

  // value_content - computed: false, optional: true, required: false
  private _valueContent?: string; 
  public get valueContent() {
    return this.getStringAttribute('value_content');
  }
  public set valueContent(value: string) {
    this._valueContent = value;
  }
  public resetValueContent() {
    this._valueContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueContentInput() {
    return this._valueContent;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string } | cdktf.IResolvable; 
  public get values() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('values') as any;
  }
  public set values(value: { [key: string]: string } | cdktf.IResolvable) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ContainerRegistryTaskFileStep {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#context_access_token ContainerRegistryTask#context_access_token}
  */
  readonly contextAccessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#context_path ContainerRegistryTask#context_path}
  */
  readonly contextPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#secret_values ContainerRegistryTask#secret_values}
  */
  readonly secretValues?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#task_file_path ContainerRegistryTask#task_file_path}
  */
  readonly taskFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#value_file_path ContainerRegistryTask#value_file_path}
  */
  readonly valueFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#values ContainerRegistryTask#values}
  */
  readonly values?: { [key: string]: string } | cdktf.IResolvable;
}

export function containerRegistryTaskFileStepToTerraform(struct?: ContainerRegistryTaskFileStepOutputReference | ContainerRegistryTaskFileStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_access_token: cdktf.stringToTerraform(struct!.contextAccessToken),
    context_path: cdktf.stringToTerraform(struct!.contextPath),
    secret_values: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.secretValues),
    task_file_path: cdktf.stringToTerraform(struct!.taskFilePath),
    value_file_path: cdktf.stringToTerraform(struct!.valueFilePath),
    values: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.values),
  }
}

export class ContainerRegistryTaskFileStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskFileStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextAccessToken = this._contextAccessToken;
    }
    if (this._contextPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextPath = this._contextPath;
    }
    if (this._secretValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValues = this._secretValues;
    }
    if (this._taskFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskFilePath = this._taskFilePath;
    }
    if (this._valueFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFilePath = this._valueFilePath;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskFileStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextAccessToken = undefined;
      this._contextPath = undefined;
      this._secretValues = undefined;
      this._taskFilePath = undefined;
      this._valueFilePath = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextAccessToken = value.contextAccessToken;
      this._contextPath = value.contextPath;
      this._secretValues = value.secretValues;
      this._taskFilePath = value.taskFilePath;
      this._valueFilePath = value.valueFilePath;
      this._values = value.values;
    }
  }

  // context_access_token - computed: false, optional: true, required: false
  private _contextAccessToken?: string; 
  public get contextAccessToken() {
    return this.getStringAttribute('context_access_token');
  }
  public set contextAccessToken(value: string) {
    this._contextAccessToken = value;
  }
  public resetContextAccessToken() {
    this._contextAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextAccessTokenInput() {
    return this._contextAccessToken;
  }

  // context_path - computed: false, optional: true, required: false
  private _contextPath?: string; 
  public get contextPath() {
    return this.getStringAttribute('context_path');
  }
  public set contextPath(value: string) {
    this._contextPath = value;
  }
  public resetContextPath() {
    this._contextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextPathInput() {
    return this._contextPath;
  }

  // secret_values - computed: false, optional: true, required: false
  private _secretValues?: { [key: string]: string } | cdktf.IResolvable; 
  public get secretValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_values') as any;
  }
  public set secretValues(value: { [key: string]: string } | cdktf.IResolvable) {
    this._secretValues = value;
  }
  public resetSecretValues() {
    this._secretValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValuesInput() {
    return this._secretValues;
  }

  // task_file_path - computed: false, optional: false, required: true
  private _taskFilePath?: string; 
  public get taskFilePath() {
    return this.getStringAttribute('task_file_path');
  }
  public set taskFilePath(value: string) {
    this._taskFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskFilePathInput() {
    return this._taskFilePath;
  }

  // value_file_path - computed: false, optional: true, required: false
  private _valueFilePath?: string; 
  public get valueFilePath() {
    return this.getStringAttribute('value_file_path');
  }
  public set valueFilePath(value: string) {
    this._valueFilePath = value;
  }
  public resetValueFilePath() {
    this._valueFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilePathInput() {
    return this._valueFilePath;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string } | cdktf.IResolvable; 
  public get values() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('values') as any;
  }
  public set values(value: { [key: string]: string } | cdktf.IResolvable) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ContainerRegistryTaskIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#identity_ids ContainerRegistryTask#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#type ContainerRegistryTask#type}
  */
  readonly type: string;
}

export function containerRegistryTaskIdentityToTerraform(struct?: ContainerRegistryTaskIdentityOutputReference | ContainerRegistryTaskIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ContainerRegistryTaskIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ContainerRegistryTaskPlatform {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#architecture ContainerRegistryTask#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#os ContainerRegistryTask#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#variant ContainerRegistryTask#variant}
  */
  readonly variant?: string;
}

export function containerRegistryTaskPlatformToTerraform(struct?: ContainerRegistryTaskPlatformOutputReference | ContainerRegistryTaskPlatform): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    os: cdktf.stringToTerraform(struct!.os),
    variant: cdktf.stringToTerraform(struct!.variant),
  }
}

export class ContainerRegistryTaskPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskPlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskPlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architecture = undefined;
      this._os = undefined;
      this._variant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architecture = value.architecture;
      this._os = value.os;
      this._variant = value.variant;
    }
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // variant - computed: false, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }
}
export interface ContainerRegistryTaskRegistryCredentialCustom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#identity ContainerRegistryTask#identity}
  */
  readonly identity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#login_server ContainerRegistryTask#login_server}
  */
  readonly loginServer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#password ContainerRegistryTask#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#username ContainerRegistryTask#username}
  */
  readonly username?: string;
}

export function containerRegistryTaskRegistryCredentialCustomToTerraform(struct?: ContainerRegistryTaskRegistryCredentialCustom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity: cdktf.stringToTerraform(struct!.identity),
    login_server: cdktf.stringToTerraform(struct!.loginServer),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface ContainerRegistryTaskRegistryCredentialSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#login_mode ContainerRegistryTask#login_mode}
  */
  readonly loginMode: string;
}

export function containerRegistryTaskRegistryCredentialSourceToTerraform(struct?: ContainerRegistryTaskRegistryCredentialSourceOutputReference | ContainerRegistryTaskRegistryCredentialSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_mode: cdktf.stringToTerraform(struct!.loginMode),
  }
}

export class ContainerRegistryTaskRegistryCredentialSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskRegistryCredentialSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMode = this._loginMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskRegistryCredentialSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginMode = value.loginMode;
    }
  }

  // login_mode - computed: false, optional: false, required: true
  private _loginMode?: string; 
  public get loginMode() {
    return this.getStringAttribute('login_mode');
  }
  public set loginMode(value: string) {
    this._loginMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginModeInput() {
    return this._loginMode;
  }
}
export interface ContainerRegistryTaskRegistryCredential {
  /**
  * custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#custom ContainerRegistryTask#custom}
  */
  readonly custom?: ContainerRegistryTaskRegistryCredentialCustom[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#source ContainerRegistryTask#source}
  */
  readonly source?: ContainerRegistryTaskRegistryCredentialSource;
}

export function containerRegistryTaskRegistryCredentialToTerraform(struct?: ContainerRegistryTaskRegistryCredentialOutputReference | ContainerRegistryTaskRegistryCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.listMapper(containerRegistryTaskRegistryCredentialCustomToTerraform)(struct!.custom),
    source: containerRegistryTaskRegistryCredentialSourceToTerraform(struct!.source),
  }
}

export class ContainerRegistryTaskRegistryCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskRegistryCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskRegistryCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._custom = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._custom = value.custom;
      this._source.internalValue = value.source;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: ContainerRegistryTaskRegistryCredentialCustom[]; 
  public get custom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom') as any;
  }
  public set custom(value: ContainerRegistryTaskRegistryCredentialCustom[]) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ContainerRegistryTaskRegistryCredentialSourceOutputReference(this as any, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: ContainerRegistryTaskRegistryCredentialSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface ContainerRegistryTaskSourceTriggerAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#expire_in_seconds ContainerRegistryTask#expire_in_seconds}
  */
  readonly expireInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#refresh_token ContainerRegistryTask#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#scope ContainerRegistryTask#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#token ContainerRegistryTask#token}
  */
  readonly token: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#token_type ContainerRegistryTask#token_type}
  */
  readonly tokenType: string;
}

export function containerRegistryTaskSourceTriggerAuthenticationToTerraform(struct?: ContainerRegistryTaskSourceTriggerAuthenticationOutputReference | ContainerRegistryTaskSourceTriggerAuthentication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire_in_seconds: cdktf.numberToTerraform(struct!.expireInSeconds),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    scope: cdktf.stringToTerraform(struct!.scope),
    token: cdktf.stringToTerraform(struct!.token),
    token_type: cdktf.stringToTerraform(struct!.tokenType),
  }
}

export class ContainerRegistryTaskSourceTriggerAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskSourceTriggerAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireInSeconds = this._expireInSeconds;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRegistryTaskSourceTriggerAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expireInSeconds = undefined;
      this._refreshToken = undefined;
      this._scope = undefined;
      this._token = undefined;
      this._tokenType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expireInSeconds = value.expireInSeconds;
      this._refreshToken = value.refreshToken;
      this._scope = value.scope;
      this._token = value.token;
      this._tokenType = value.tokenType;
    }
  }

  // expire_in_seconds - computed: false, optional: true, required: false
  private _expireInSeconds?: number; 
  public get expireInSeconds() {
    return this.getNumberAttribute('expire_in_seconds');
  }
  public set expireInSeconds(value: number) {
    this._expireInSeconds = value;
  }
  public resetExpireInSeconds() {
    this._expireInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInSecondsInput() {
    return this._expireInSeconds;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_type - computed: false, optional: false, required: true
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }
}
export interface ContainerRegistryTaskSourceTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#branch ContainerRegistryTask#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#enabled ContainerRegistryTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#events ContainerRegistryTask#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#name ContainerRegistryTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#repository_url ContainerRegistryTask#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#source_type ContainerRegistryTask#source_type}
  */
  readonly sourceType: string;
  /**
  * authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#authentication ContainerRegistryTask#authentication}
  */
  readonly authentication?: ContainerRegistryTaskSourceTriggerAuthentication;
}

export function containerRegistryTaskSourceTriggerToTerraform(struct?: ContainerRegistryTaskSourceTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    name: cdktf.stringToTerraform(struct!.name),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    authentication: containerRegistryTaskSourceTriggerAuthenticationToTerraform(struct!.authentication),
  }
}

export interface ContainerRegistryTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#create ContainerRegistryTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#delete ContainerRegistryTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#read ContainerRegistryTask#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#update ContainerRegistryTask#update}
  */
  readonly update?: string;
}

export function containerRegistryTaskTimeoutsToTerraform(struct?: ContainerRegistryTaskTimeoutsOutputReference | ContainerRegistryTaskTimeouts): any {
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

export class ContainerRegistryTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerRegistryTaskTimeouts | undefined {
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

  public set internalValue(value: ContainerRegistryTaskTimeouts | undefined) {
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
export interface ContainerRegistryTaskTimerTrigger {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#enabled ContainerRegistryTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#name ContainerRegistryTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html#schedule ContainerRegistryTask#schedule}
  */
  readonly schedule: string;
}

export function containerRegistryTaskTimerTriggerToTerraform(struct?: ContainerRegistryTaskTimerTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html azurerm_container_registry_task}
*/
export class ContainerRegistryTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_container_registry_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_task.html azurerm_container_registry_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRegistryTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerRegistryTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry_task',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentPoolName = config.agentPoolName;
    this._containerRegistryId = config.containerRegistryId;
    this._enabled = config.enabled;
    this._isSystemTask = config.isSystemTask;
    this._logTemplate = config.logTemplate;
    this._name = config.name;
    this._tags = config.tags;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._agentSetting.internalValue = config.agentSetting;
    this._baseImageTrigger.internalValue = config.baseImageTrigger;
    this._dockerStep.internalValue = config.dockerStep;
    this._encodedStep.internalValue = config.encodedStep;
    this._fileStep.internalValue = config.fileStep;
    this._identity.internalValue = config.identity;
    this._platform.internalValue = config.platform;
    this._registryCredential.internalValue = config.registryCredential;
    this._sourceTrigger = config.sourceTrigger;
    this._timeouts.internalValue = config.timeouts;
    this._timerTrigger = config.timerTrigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_pool_name - computed: false, optional: true, required: false
  private _agentPoolName?: string; 
  public get agentPoolName() {
    return this.getStringAttribute('agent_pool_name');
  }
  public set agentPoolName(value: string) {
    this._agentPoolName = value;
  }
  public resetAgentPoolName() {
    this._agentPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolNameInput() {
    return this._agentPoolName;
  }

  // container_registry_id - computed: false, optional: false, required: true
  private _containerRegistryId?: string; 
  public get containerRegistryId() {
    return this.getStringAttribute('container_registry_id');
  }
  public set containerRegistryId(value: string) {
    this._containerRegistryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryIdInput() {
    return this._containerRegistryId;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_system_task - computed: false, optional: true, required: false
  private _isSystemTask?: boolean | cdktf.IResolvable; 
  public get isSystemTask() {
    return this.getBooleanAttribute('is_system_task') as any;
  }
  public set isSystemTask(value: boolean | cdktf.IResolvable) {
    this._isSystemTask = value;
  }
  public resetIsSystemTask() {
    this._isSystemTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemTaskInput() {
    return this._isSystemTask;
  }

  // log_template - computed: false, optional: true, required: false
  private _logTemplate?: string; 
  public get logTemplate() {
    return this.getStringAttribute('log_template');
  }
  public set logTemplate(value: string) {
    this._logTemplate = value;
  }
  public resetLogTemplate() {
    this._logTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTemplateInput() {
    return this._logTemplate;
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

  // timeout_in_seconds - computed: false, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // agent_setting - computed: false, optional: true, required: false
  private _agentSetting = new ContainerRegistryTaskAgentSettingOutputReference(this as any, "agent_setting", true);
  public get agentSetting() {
    return this._agentSetting;
  }
  public putAgentSetting(value: ContainerRegistryTaskAgentSetting) {
    this._agentSetting.internalValue = value;
  }
  public resetAgentSetting() {
    this._agentSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSettingInput() {
    return this._agentSetting.internalValue;
  }

  // base_image_trigger - computed: false, optional: true, required: false
  private _baseImageTrigger = new ContainerRegistryTaskBaseImageTriggerOutputReference(this as any, "base_image_trigger", true);
  public get baseImageTrigger() {
    return this._baseImageTrigger;
  }
  public putBaseImageTrigger(value: ContainerRegistryTaskBaseImageTrigger) {
    this._baseImageTrigger.internalValue = value;
  }
  public resetBaseImageTrigger() {
    this._baseImageTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageTriggerInput() {
    return this._baseImageTrigger.internalValue;
  }

  // docker_step - computed: false, optional: true, required: false
  private _dockerStep = new ContainerRegistryTaskDockerStepOutputReference(this as any, "docker_step", true);
  public get dockerStep() {
    return this._dockerStep;
  }
  public putDockerStep(value: ContainerRegistryTaskDockerStep) {
    this._dockerStep.internalValue = value;
  }
  public resetDockerStep() {
    this._dockerStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerStepInput() {
    return this._dockerStep.internalValue;
  }

  // encoded_step - computed: false, optional: true, required: false
  private _encodedStep = new ContainerRegistryTaskEncodedStepOutputReference(this as any, "encoded_step", true);
  public get encodedStep() {
    return this._encodedStep;
  }
  public putEncodedStep(value: ContainerRegistryTaskEncodedStep) {
    this._encodedStep.internalValue = value;
  }
  public resetEncodedStep() {
    this._encodedStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedStepInput() {
    return this._encodedStep.internalValue;
  }

  // file_step - computed: false, optional: true, required: false
  private _fileStep = new ContainerRegistryTaskFileStepOutputReference(this as any, "file_step", true);
  public get fileStep() {
    return this._fileStep;
  }
  public putFileStep(value: ContainerRegistryTaskFileStep) {
    this._fileStep.internalValue = value;
  }
  public resetFileStep() {
    this._fileStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStepInput() {
    return this._fileStep.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ContainerRegistryTaskIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ContainerRegistryTaskIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // platform - computed: false, optional: true, required: false
  private _platform = new ContainerRegistryTaskPlatformOutputReference(this as any, "platform", true);
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: ContainerRegistryTaskPlatform) {
    this._platform.internalValue = value;
  }
  public resetPlatform() {
    this._platform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // registry_credential - computed: false, optional: true, required: false
  private _registryCredential = new ContainerRegistryTaskRegistryCredentialOutputReference(this as any, "registry_credential", true);
  public get registryCredential() {
    return this._registryCredential;
  }
  public putRegistryCredential(value: ContainerRegistryTaskRegistryCredential) {
    this._registryCredential.internalValue = value;
  }
  public resetRegistryCredential() {
    this._registryCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialInput() {
    return this._registryCredential.internalValue;
  }

  // source_trigger - computed: false, optional: true, required: false
  private _sourceTrigger?: ContainerRegistryTaskSourceTrigger[]; 
  public get sourceTrigger() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source_trigger') as any;
  }
  public set sourceTrigger(value: ContainerRegistryTaskSourceTrigger[]) {
    this._sourceTrigger = value;
  }
  public resetSourceTrigger() {
    this._sourceTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTriggerInput() {
    return this._sourceTrigger;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerRegistryTaskTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerRegistryTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // timer_trigger - computed: false, optional: true, required: false
  private _timerTrigger?: ContainerRegistryTaskTimerTrigger[]; 
  public get timerTrigger() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('timer_trigger') as any;
  }
  public set timerTrigger(value: ContainerRegistryTaskTimerTrigger[]) {
    this._timerTrigger = value;
  }
  public resetTimerTrigger() {
    this._timerTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerTriggerInput() {
    return this._timerTrigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_pool_name: cdktf.stringToTerraform(this._agentPoolName),
      container_registry_id: cdktf.stringToTerraform(this._containerRegistryId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      is_system_task: cdktf.booleanToTerraform(this._isSystemTask),
      log_template: cdktf.stringToTerraform(this._logTemplate),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      agent_setting: containerRegistryTaskAgentSettingToTerraform(this._agentSetting.internalValue),
      base_image_trigger: containerRegistryTaskBaseImageTriggerToTerraform(this._baseImageTrigger.internalValue),
      docker_step: containerRegistryTaskDockerStepToTerraform(this._dockerStep.internalValue),
      encoded_step: containerRegistryTaskEncodedStepToTerraform(this._encodedStep.internalValue),
      file_step: containerRegistryTaskFileStepToTerraform(this._fileStep.internalValue),
      identity: containerRegistryTaskIdentityToTerraform(this._identity.internalValue),
      platform: containerRegistryTaskPlatformToTerraform(this._platform.internalValue),
      registry_credential: containerRegistryTaskRegistryCredentialToTerraform(this._registryCredential.internalValue),
      source_trigger: cdktf.listMapper(containerRegistryTaskSourceTriggerToTerraform)(this._sourceTrigger),
      timeouts: containerRegistryTaskTimeoutsToTerraform(this._timeouts.internalValue),
      timer_trigger: cdktf.listMapper(containerRegistryTaskTimerTriggerToTerraform)(this._timerTrigger),
    };
  }
}
