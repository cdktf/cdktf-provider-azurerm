// https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicebusSubscriptionConfig extends TerraformMetaArguments {
  readonly autoDeleteOnIdle?: string;
  readonly deadLetteringOnFilterEvaluationError?: boolean;
  readonly deadLetteringOnMessageExpiration?: boolean;
  readonly defaultMessageTtl?: string;
  readonly enableBatchedOperations?: boolean;
  readonly forwardDeadLetteredMessagesTo?: string;
  readonly forwardTo?: string;
  readonly lockDuration?: string;
  readonly maxDeliveryCount: number;
  readonly name: string;
  readonly namespaceName: string;
  readonly requiresSession?: boolean;
  readonly resourceGroupName: string;
  readonly status?: string;
  readonly topicName: string;
  /** timeouts block */
  readonly timeouts?: ServicebusSubscriptionTimeouts;
}
export interface ServicebusSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ServicebusSubscription extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _autoDeleteOnIdle?: string;
  public get autoDeleteOnIdle() {
    return this.getStringAttribute('auto_delete_on_idle');
  }
  public set autoDeleteOnIdle(value: string) {
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
  private _deadLetteringOnFilterEvaluationError?: boolean;
  public get deadLetteringOnFilterEvaluationError() {
    return this.getBooleanAttribute('dead_lettering_on_filter_evaluation_error');
  }
  public set deadLetteringOnFilterEvaluationError(value: boolean ) {
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
  private _deadLetteringOnMessageExpiration?: boolean;
  public get deadLetteringOnMessageExpiration() {
    return this.getBooleanAttribute('dead_lettering_on_message_expiration');
  }
  public set deadLetteringOnMessageExpiration(value: boolean ) {
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
  private _defaultMessageTtl?: string;
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }
  public set defaultMessageTtl(value: string) {
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
  private _enableBatchedOperations?: boolean;
  public get enableBatchedOperations() {
    return this.getBooleanAttribute('enable_batched_operations');
  }
  public set enableBatchedOperations(value: boolean ) {
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
  private _forwardDeadLetteredMessagesTo?: string;
  public get forwardDeadLetteredMessagesTo() {
    return this.getStringAttribute('forward_dead_lettered_messages_to');
  }
  public set forwardDeadLetteredMessagesTo(value: string ) {
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
  private _forwardTo?: string;
  public get forwardTo() {
    return this.getStringAttribute('forward_to');
  }
  public set forwardTo(value: string ) {
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
  private _lockDuration?: string;
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string) {
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
  private _maxDeliveryCount: number;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
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
  private _requiresSession?: boolean;
  public get requiresSession() {
    return this.getBooleanAttribute('requires_session');
  }
  public set requiresSession(value: boolean ) {
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

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
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
  private _topicName: string;
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
  private _timeouts?: ServicebusSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicebusSubscriptionTimeouts ) {
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
      auto_delete_on_idle: this._autoDeleteOnIdle,
      dead_lettering_on_filter_evaluation_error: this._deadLetteringOnFilterEvaluationError,
      dead_lettering_on_message_expiration: this._deadLetteringOnMessageExpiration,
      default_message_ttl: this._defaultMessageTtl,
      enable_batched_operations: this._enableBatchedOperations,
      forward_dead_lettered_messages_to: this._forwardDeadLetteredMessagesTo,
      forward_to: this._forwardTo,
      lock_duration: this._lockDuration,
      max_delivery_count: this._maxDeliveryCount,
      name: this._name,
      namespace_name: this._namespaceName,
      requires_session: this._requiresSession,
      resource_group_name: this._resourceGroupName,
      status: this._status,
      topic_name: this._topicName,
      timeouts: this._timeouts,
    };
  }
}
