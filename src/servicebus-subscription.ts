// https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}
  */
  readonly autoDeleteOnIdle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}
  */
  readonly deadLetteringOnFilterEvaluationError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}
  */
  readonly deadLetteringOnMessageExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#default_message_ttl ServicebusSubscription#default_message_ttl}
  */
  readonly defaultMessageTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#enable_batched_operations ServicebusSubscription#enable_batched_operations}
  */
  readonly enableBatchedOperations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}
  */
  readonly forwardDeadLetteredMessagesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#forward_to ServicebusSubscription#forward_to}
  */
  readonly forwardTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#lock_duration ServicebusSubscription#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#max_delivery_count ServicebusSubscription#max_delivery_count}
  */
  readonly maxDeliveryCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#name ServicebusSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#namespace_name ServicebusSubscription#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#requires_session ServicebusSubscription#requires_session}
  */
  readonly requiresSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#resource_group_name ServicebusSubscription#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#status ServicebusSubscription#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#topic_name ServicebusSubscription#topic_name}
  */
  readonly topicName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#timeouts ServicebusSubscription#timeouts}
  */
  readonly timeouts?: ServicebusSubscriptionTimeouts;
}
export interface ServicebusSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#create ServicebusSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#delete ServicebusSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#read ServicebusSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html#update ServicebusSubscription#update}
  */
  readonly update?: string;
}

function servicebusSubscriptionTimeoutsToTerraform(struct?: ServicebusSubscriptionTimeoutsOutputReference | ServicebusSubscriptionTimeouts): any {
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

export class ServicebusSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html azurerm_servicebus_subscription}
*/
export class ServicebusSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html azurerm_servicebus_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoDeleteOnIdle = config.autoDeleteOnIdle;
    this._deadLetteringOnFilterEvaluationError = config.deadLetteringOnFilterEvaluationError;
    this._deadLetteringOnMessageExpiration = config.deadLetteringOnMessageExpiration;
    this._defaultMessageTtl = config.defaultMessageTtl;
    this._enableBatchedOperations = config.enableBatchedOperations;
    this._forwardDeadLetteredMessagesTo = config.forwardDeadLetteredMessagesTo;
    this._forwardTo = config.forwardTo;
    this._lockDuration = config.lockDuration;
    this._maxDeliveryCount = config.maxDeliveryCount;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._requiresSession = config.requiresSession;
    this._resourceGroupName = config.resourceGroupName;
    this._status = config.status;
    this._topicName = config.topicName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: true, required: false
  private _autoDeleteOnIdle?: string | undefined; 
  public get autoDeleteOnIdle() {
    return this.getStringAttribute('auto_delete_on_idle');
  }
  public set autoDeleteOnIdle(value: string | undefined) {
    this._autoDeleteOnIdle = value;
  }
  public resetAutoDeleteOnIdle() {
    this._autoDeleteOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteOnIdleInput() {
    return this._autoDeleteOnIdle
  }

  // dead_lettering_on_filter_evaluation_error - computed: false, optional: true, required: false
  private _deadLetteringOnFilterEvaluationError?: boolean | cdktf.IResolvable | undefined; 
  public get deadLetteringOnFilterEvaluationError() {
    return this.getBooleanAttribute('dead_lettering_on_filter_evaluation_error') as any;
  }
  public set deadLetteringOnFilterEvaluationError(value: boolean | cdktf.IResolvable | undefined) {
    this._deadLetteringOnFilterEvaluationError = value;
  }
  public resetDeadLetteringOnFilterEvaluationError() {
    this._deadLetteringOnFilterEvaluationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetteringOnFilterEvaluationErrorInput() {
    return this._deadLetteringOnFilterEvaluationError
  }

  // dead_lettering_on_message_expiration - computed: false, optional: true, required: false
  private _deadLetteringOnMessageExpiration?: boolean | cdktf.IResolvable | undefined; 
  public get deadLetteringOnMessageExpiration() {
    return this.getBooleanAttribute('dead_lettering_on_message_expiration') as any;
  }
  public set deadLetteringOnMessageExpiration(value: boolean | cdktf.IResolvable | undefined) {
    this._deadLetteringOnMessageExpiration = value;
  }
  public resetDeadLetteringOnMessageExpiration() {
    this._deadLetteringOnMessageExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetteringOnMessageExpirationInput() {
    return this._deadLetteringOnMessageExpiration
  }

  // default_message_ttl - computed: true, optional: true, required: false
  private _defaultMessageTtl?: string | undefined; 
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }
  public set defaultMessageTtl(value: string | undefined) {
    this._defaultMessageTtl = value;
  }
  public resetDefaultMessageTtl() {
    this._defaultMessageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMessageTtlInput() {
    return this._defaultMessageTtl
  }

  // enable_batched_operations - computed: false, optional: true, required: false
  private _enableBatchedOperations?: boolean | cdktf.IResolvable | undefined; 
  public get enableBatchedOperations() {
    return this.getBooleanAttribute('enable_batched_operations') as any;
  }
  public set enableBatchedOperations(value: boolean | cdktf.IResolvable | undefined) {
    this._enableBatchedOperations = value;
  }
  public resetEnableBatchedOperations() {
    this._enableBatchedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchedOperationsInput() {
    return this._enableBatchedOperations
  }

  // forward_dead_lettered_messages_to - computed: false, optional: true, required: false
  private _forwardDeadLetteredMessagesTo?: string | undefined; 
  public get forwardDeadLetteredMessagesTo() {
    return this.getStringAttribute('forward_dead_lettered_messages_to');
  }
  public set forwardDeadLetteredMessagesTo(value: string | undefined) {
    this._forwardDeadLetteredMessagesTo = value;
  }
  public resetForwardDeadLetteredMessagesTo() {
    this._forwardDeadLetteredMessagesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDeadLetteredMessagesToInput() {
    return this._forwardDeadLetteredMessagesTo
  }

  // forward_to - computed: false, optional: true, required: false
  private _forwardTo?: string | undefined; 
  public get forwardTo() {
    return this.getStringAttribute('forward_to');
  }
  public set forwardTo(value: string | undefined) {
    this._forwardTo = value;
  }
  public resetForwardTo() {
    this._forwardTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_duration - computed: true, optional: true, required: false
  private _lockDuration?: string | undefined; 
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string | undefined) {
    this._lockDuration = value;
  }
  public resetLockDuration() {
    this._lockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration
  }

  // max_delivery_count - computed: false, optional: false, required: true
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // requires_session - computed: false, optional: true, required: false
  private _requiresSession?: boolean | cdktf.IResolvable | undefined; 
  public get requiresSession() {
    return this.getBooleanAttribute('requires_session') as any;
  }
  public set requiresSession(value: boolean | cdktf.IResolvable | undefined) {
    this._requiresSession = value;
  }
  public resetRequiresSession() {
    this._requiresSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresSessionInput() {
    return this._requiresSession
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

  // status - computed: false, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusSubscriptionTimeouts | undefined; 
  private __timeoutsOutput = new ServicebusSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ServicebusSubscriptionTimeouts | undefined) {
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
      auto_delete_on_idle: cdktf.stringToTerraform(this._autoDeleteOnIdle),
      dead_lettering_on_filter_evaluation_error: cdktf.booleanToTerraform(this._deadLetteringOnFilterEvaluationError),
      dead_lettering_on_message_expiration: cdktf.booleanToTerraform(this._deadLetteringOnMessageExpiration),
      default_message_ttl: cdktf.stringToTerraform(this._defaultMessageTtl),
      enable_batched_operations: cdktf.booleanToTerraform(this._enableBatchedOperations),
      forward_dead_lettered_messages_to: cdktf.stringToTerraform(this._forwardDeadLetteredMessagesTo),
      forward_to: cdktf.stringToTerraform(this._forwardTo),
      lock_duration: cdktf.stringToTerraform(this._lockDuration),
      max_delivery_count: cdktf.numberToTerraform(this._maxDeliveryCount),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      requires_session: cdktf.booleanToTerraform(this._requiresSession),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      status: cdktf.stringToTerraform(this._status),
      topic_name: cdktf.stringToTerraform(this._topicName),
      timeouts: servicebusSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
