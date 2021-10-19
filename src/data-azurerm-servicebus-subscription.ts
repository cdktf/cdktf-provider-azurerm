// https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermServicebusSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html#name DataAzurermServicebusSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html#namespace_name DataAzurermServicebusSubscription#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html#resource_group_name DataAzurermServicebusSubscription#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html#topic_name DataAzurermServicebusSubscription#topic_name}
  */
  readonly topicName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html#timeouts DataAzurermServicebusSubscription#timeouts}
  */
  readonly timeouts?: DataAzurermServicebusSubscriptionTimeouts;
}
export interface DataAzurermServicebusSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html#read DataAzurermServicebusSubscription#read}
  */
  readonly read?: string;
}

function dataAzurermServicebusSubscriptionTimeoutsToTerraform(struct?: DataAzurermServicebusSubscriptionTimeoutsOutputReference | DataAzurermServicebusSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermServicebusSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html azurerm_servicebus_subscription}
*/
export class DataAzurermServicebusSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/servicebus_subscription.html azurerm_servicebus_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermServicebusSubscriptionConfig
  */
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
    return this.getBooleanAttribute('dead_lettering_on_filter_evaluation_error') as any;
  }

  // dead_lettering_on_message_expiration - computed: true, optional: false, required: false
  public get deadLetteringOnMessageExpiration() {
    return this.getBooleanAttribute('dead_lettering_on_message_expiration') as any;
  }

  // default_message_ttl - computed: true, optional: false, required: false
  public get defaultMessageTtl() {
    return this.getStringAttribute('default_message_ttl');
  }

  // enable_batched_operations - computed: true, optional: false, required: false
  public get enableBatchedOperations() {
    return this.getBooleanAttribute('enable_batched_operations') as any;
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

  // requires_session - computed: true, optional: false, required: false
  public get requiresSession() {
    return this.getBooleanAttribute('requires_session') as any;
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
  private _timeouts?: DataAzurermServicebusSubscriptionTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermServicebusSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermServicebusSubscriptionTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      topic_name: cdktf.stringToTerraform(this._topicName),
      timeouts: dataAzurermServicebusSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
