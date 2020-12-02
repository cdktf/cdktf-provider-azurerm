// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_servicebus_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermServicebusSubscriptionConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  readonly topicName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermServicebusSubscriptionTimeouts;
}
export interface DataAzurermServicebusSubscriptionTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermServicebusSubscription extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermServicebusSubscriptionConfig) {
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
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._topicName = config.topicName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: true, optional: false, required: false
  public get autoDeleteOnIdle() {
    return this.getStringAttribute('auto_delete_on_idle');
  }

  // dead_lettering_on_filter_evaluation_error - computed: true, optional: false, required: false
  public get deadLetteringOnFilterEvaluationError() {
    return this.getBooleanAttribute('dead_lettering_on_filter_evaluation_error');
  }

  // dead_lettering_on_message_expiration - computed: true, optional: false, required: false
  public get deadLetteringOnMessageExpiration() {
    return this.getBooleanAttribute('dead_lettering_on_message_expiration');
  }

  // default_message_ttl - computed: true, optional: false, required: false
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }

  // enable_batched_operations - computed: true, optional: false, required: false
  public get enableBatchedOperations() {
    return this.getBooleanAttribute('enable_batched_operations');
  }

  // forward_dead_lettered_messages_to - computed: true, optional: false, required: false
  public get forwardDeadLetteredMessagesTo() {
    return this.getStringAttribute('forward_dead_lettered_messages_to');
  }

  // forward_to - computed: true, optional: false, required: false
  public get forwardTo() {
    return this.getStringAttribute('forward_to');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_duration - computed: true, optional: false, required: false
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }

  // max_delivery_count - computed: true, optional: false, required: false
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
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

  // requires_session - computed: true, optional: false, required: false
  public get requiresSession() {
    return this.getBooleanAttribute('requires_session');
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
  private _timeouts?: DataAzurermServicebusSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermServicebusSubscriptionTimeouts ) {
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
      name: this._name,
      namespace_name: this._namespaceName,
      resource_group_name: this._resourceGroupName,
      topic_name: this._topicName,
      timeouts: this._timeouts,
    };
  }
}
