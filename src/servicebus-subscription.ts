// https://www.terraform.io/docs/providers/azurerm/r/servicebus_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicebusSubscriptionConfig extends TerraformMetaArguments {
  readonly autoDeleteOnIdle?: string;
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
    this._topicName = config.topicName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: true, required: false
  private _autoDeleteOnIdle?: string;
  public get autoDeleteOnIdle() {
    return this._autoDeleteOnIdle ?? this.getStringAttribute('auto_delete_on_idle');
  }
  public set autoDeleteOnIdle(value: string | undefined) {
    this._autoDeleteOnIdle = value;
  }

  // dead_lettering_on_message_expiration - computed: false, optional: true, required: false
  private _deadLetteringOnMessageExpiration?: boolean;
  public get deadLetteringOnMessageExpiration() {
    return this._deadLetteringOnMessageExpiration;
  }
  public set deadLetteringOnMessageExpiration(value: boolean | undefined) {
    this._deadLetteringOnMessageExpiration = value;
  }

  // default_message_ttl - computed: true, optional: true, required: false
  private _defaultMessageTtl?: string;
  public get defaultMessageTtl() {
    return this._defaultMessageTtl ?? this.getStringAttribute('default_message_ttl');
  }
  public set defaultMessageTtl(value: string | undefined) {
    this._defaultMessageTtl = value;
  }

  // enable_batched_operations - computed: false, optional: true, required: false
  private _enableBatchedOperations?: boolean;
  public get enableBatchedOperations() {
    return this._enableBatchedOperations;
  }
  public set enableBatchedOperations(value: boolean | undefined) {
    this._enableBatchedOperations = value;
  }

  // forward_dead_lettered_messages_to - computed: false, optional: true, required: false
  private _forwardDeadLetteredMessagesTo?: string;
  public get forwardDeadLetteredMessagesTo() {
    return this._forwardDeadLetteredMessagesTo;
  }
  public set forwardDeadLetteredMessagesTo(value: string | undefined) {
    this._forwardDeadLetteredMessagesTo = value;
  }

  // forward_to - computed: false, optional: true, required: false
  private _forwardTo?: string;
  public get forwardTo() {
    return this._forwardTo;
  }
  public set forwardTo(value: string | undefined) {
    this._forwardTo = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lock_duration - computed: true, optional: true, required: false
  private _lockDuration?: string;
  public get lockDuration() {
    return this._lockDuration ?? this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string | undefined) {
    this._lockDuration = value;
  }

  // max_delivery_count - computed: false, optional: false, required: true
  private _maxDeliveryCount: number;
  public get maxDeliveryCount() {
    return this._maxDeliveryCount;
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this._namespaceName;
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }

  // requires_session - computed: false, optional: true, required: false
  private _requiresSession?: boolean;
  public get requiresSession() {
    return this._requiresSession;
  }
  public set requiresSession(value: boolean | undefined) {
    this._requiresSession = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName: string;
  public get topicName() {
    return this._topicName;
  }
  public set topicName(value: string) {
    this._topicName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServicebusSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_delete_on_idle: this._autoDeleteOnIdle,
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
      topic_name: this._topicName,
      timeouts: this._timeouts,
    };
  }
}
