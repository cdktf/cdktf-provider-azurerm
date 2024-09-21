// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}
  */
  readonly autoDeleteOnIdle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}
  */
  readonly batchedOperationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}
  */
  readonly clientScopedSubscriptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}
  */
  readonly deadLetteringOnFilterEvaluationError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}
  */
  readonly deadLetteringOnMessageExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}
  */
  readonly defaultMessageTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}
  */
  readonly forwardDeadLetteredMessagesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}
  */
  readonly forwardTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}
  */
  readonly maxDeliveryCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}
  */
  readonly requiresSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}
  */
  readonly topicId: string;
  /**
  * client_scoped_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#client_scoped_subscription ServicebusSubscription#client_scoped_subscription}
  */
  readonly clientScopedSubscription?: ServicebusSubscriptionClientScopedSubscription;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#timeouts ServicebusSubscription#timeouts}
  */
  readonly timeouts?: ServicebusSubscriptionTimeouts;
}
export interface ServicebusSubscriptionClientScopedSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}
  */
  readonly isClientScopedSubscriptionShareable?: boolean | cdktf.IResolvable;
}

export function servicebusSubscriptionClientScopedSubscriptionToTerraform(struct?: ServicebusSubscriptionClientScopedSubscriptionOutputReference | ServicebusSubscriptionClientScopedSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    is_client_scoped_subscription_shareable: cdktf.booleanToTerraform(struct!.isClientScopedSubscriptionShareable),
  }
}


export function servicebusSubscriptionClientScopedSubscriptionToHclTerraform(struct?: ServicebusSubscriptionClientScopedSubscriptionOutputReference | ServicebusSubscriptionClientScopedSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_client_scoped_subscription_shareable: {
      value: cdktf.booleanToHclTerraform(struct!.isClientScopedSubscriptionShareable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicebusSubscriptionClientScopedSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServicebusSubscriptionClientScopedSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._isClientScopedSubscriptionShareable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isClientScopedSubscriptionShareable = this._isClientScopedSubscriptionShareable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicebusSubscriptionClientScopedSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._isClientScopedSubscriptionShareable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._isClientScopedSubscriptionShareable = value.isClientScopedSubscriptionShareable;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // is_client_scoped_subscription_durable - computed: true, optional: false, required: false
  public get isClientScopedSubscriptionDurable() {
    return this.getBooleanAttribute('is_client_scoped_subscription_durable');
  }

  // is_client_scoped_subscription_shareable - computed: false, optional: true, required: false
  private _isClientScopedSubscriptionShareable?: boolean | cdktf.IResolvable; 
  public get isClientScopedSubscriptionShareable() {
    return this.getBooleanAttribute('is_client_scoped_subscription_shareable');
  }
  public set isClientScopedSubscriptionShareable(value: boolean | cdktf.IResolvable) {
    this._isClientScopedSubscriptionShareable = value;
  }
  public resetIsClientScopedSubscriptionShareable() {
    this._isClientScopedSubscriptionShareable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClientScopedSubscriptionShareableInput() {
    return this._isClientScopedSubscriptionShareable;
  }
}
export interface ServicebusSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}
  */
  readonly update?: string;
}

export function servicebusSubscriptionTimeoutsToTerraform(struct?: ServicebusSubscriptionTimeouts | cdktf.IResolvable): any {
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


export function servicebusSubscriptionTimeoutsToHclTerraform(struct?: ServicebusSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class ServicebusSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicebusSubscriptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicebusSubscriptionTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription azurerm_servicebus_subscription}
*/
export class ServicebusSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_servicebus_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicebusSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicebusSubscription to import
  * @param importFromId The id of the existing ServicebusSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicebusSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_servicebus_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_subscription azurerm_servicebus_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_subscription',
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
    this._autoDeleteOnIdle = config.autoDeleteOnIdle;
    this._batchedOperationsEnabled = config.batchedOperationsEnabled;
    this._clientScopedSubscriptionEnabled = config.clientScopedSubscriptionEnabled;
    this._deadLetteringOnFilterEvaluationError = config.deadLetteringOnFilterEvaluationError;
    this._deadLetteringOnMessageExpiration = config.deadLetteringOnMessageExpiration;
    this._defaultMessageTtl = config.defaultMessageTtl;
    this._forwardDeadLetteredMessagesTo = config.forwardDeadLetteredMessagesTo;
    this._forwardTo = config.forwardTo;
    this._id = config.id;
    this._lockDuration = config.lockDuration;
    this._maxDeliveryCount = config.maxDeliveryCount;
    this._name = config.name;
    this._requiresSession = config.requiresSession;
    this._status = config.status;
    this._topicId = config.topicId;
    this._clientScopedSubscription.internalValue = config.clientScopedSubscription;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_delete_on_idle - computed: false, optional: true, required: false
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
    return this._autoDeleteOnIdle;
  }

  // batched_operations_enabled - computed: false, optional: true, required: false
  private _batchedOperationsEnabled?: boolean | cdktf.IResolvable; 
  public get batchedOperationsEnabled() {
    return this.getBooleanAttribute('batched_operations_enabled');
  }
  public set batchedOperationsEnabled(value: boolean | cdktf.IResolvable) {
    this._batchedOperationsEnabled = value;
  }
  public resetBatchedOperationsEnabled() {
    this._batchedOperationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchedOperationsEnabledInput() {
    return this._batchedOperationsEnabled;
  }

  // client_scoped_subscription_enabled - computed: false, optional: true, required: false
  private _clientScopedSubscriptionEnabled?: boolean | cdktf.IResolvable; 
  public get clientScopedSubscriptionEnabled() {
    return this.getBooleanAttribute('client_scoped_subscription_enabled');
  }
  public set clientScopedSubscriptionEnabled(value: boolean | cdktf.IResolvable) {
    this._clientScopedSubscriptionEnabled = value;
  }
  public resetClientScopedSubscriptionEnabled() {
    this._clientScopedSubscriptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopedSubscriptionEnabledInput() {
    return this._clientScopedSubscriptionEnabled;
  }

  // dead_lettering_on_filter_evaluation_error - computed: false, optional: true, required: false
  private _deadLetteringOnFilterEvaluationError?: boolean | cdktf.IResolvable; 
  public get deadLetteringOnFilterEvaluationError() {
    return this.getBooleanAttribute('dead_lettering_on_filter_evaluation_error');
  }
  public set deadLetteringOnFilterEvaluationError(value: boolean | cdktf.IResolvable) {
    this._deadLetteringOnFilterEvaluationError = value;
  }
  public resetDeadLetteringOnFilterEvaluationError() {
    this._deadLetteringOnFilterEvaluationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetteringOnFilterEvaluationErrorInput() {
    return this._deadLetteringOnFilterEvaluationError;
  }

  // dead_lettering_on_message_expiration - computed: false, optional: true, required: false
  private _deadLetteringOnMessageExpiration?: boolean | cdktf.IResolvable; 
  public get deadLetteringOnMessageExpiration() {
    return this.getBooleanAttribute('dead_lettering_on_message_expiration');
  }
  public set deadLetteringOnMessageExpiration(value: boolean | cdktf.IResolvable) {
    this._deadLetteringOnMessageExpiration = value;
  }
  public resetDeadLetteringOnMessageExpiration() {
    this._deadLetteringOnMessageExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetteringOnMessageExpirationInput() {
    return this._deadLetteringOnMessageExpiration;
  }

  // default_message_ttl - computed: false, optional: true, required: false
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
    return this._defaultMessageTtl;
  }

  // forward_dead_lettered_messages_to - computed: false, optional: true, required: false
  private _forwardDeadLetteredMessagesTo?: string; 
  public get forwardDeadLetteredMessagesTo() {
    return this.getStringAttribute('forward_dead_lettered_messages_to');
  }
  public set forwardDeadLetteredMessagesTo(value: string) {
    this._forwardDeadLetteredMessagesTo = value;
  }
  public resetForwardDeadLetteredMessagesTo() {
    this._forwardDeadLetteredMessagesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDeadLetteredMessagesToInput() {
    return this._forwardDeadLetteredMessagesTo;
  }

  // forward_to - computed: false, optional: true, required: false
  private _forwardTo?: string; 
  public get forwardTo() {
    return this.getStringAttribute('forward_to');
  }
  public set forwardTo(value: string) {
    this._forwardTo = value;
  }
  public resetForwardTo() {
    this._forwardTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo;
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

  // lock_duration - computed: false, optional: true, required: false
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
    return this._lockDuration;
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
    return this._maxDeliveryCount;
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

  // requires_session - computed: false, optional: true, required: false
  private _requiresSession?: boolean | cdktf.IResolvable; 
  public get requiresSession() {
    return this.getBooleanAttribute('requires_session');
  }
  public set requiresSession(value: boolean | cdktf.IResolvable) {
    this._requiresSession = value;
  }
  public resetRequiresSession() {
    this._requiresSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresSessionInput() {
    return this._requiresSession;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // client_scoped_subscription - computed: false, optional: true, required: false
  private _clientScopedSubscription = new ServicebusSubscriptionClientScopedSubscriptionOutputReference(this, "client_scoped_subscription");
  public get clientScopedSubscription() {
    return this._clientScopedSubscription;
  }
  public putClientScopedSubscription(value: ServicebusSubscriptionClientScopedSubscription) {
    this._clientScopedSubscription.internalValue = value;
  }
  public resetClientScopedSubscription() {
    this._clientScopedSubscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopedSubscriptionInput() {
    return this._clientScopedSubscription.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicebusSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicebusSubscriptionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_delete_on_idle: cdktf.stringToTerraform(this._autoDeleteOnIdle),
      batched_operations_enabled: cdktf.booleanToTerraform(this._batchedOperationsEnabled),
      client_scoped_subscription_enabled: cdktf.booleanToTerraform(this._clientScopedSubscriptionEnabled),
      dead_lettering_on_filter_evaluation_error: cdktf.booleanToTerraform(this._deadLetteringOnFilterEvaluationError),
      dead_lettering_on_message_expiration: cdktf.booleanToTerraform(this._deadLetteringOnMessageExpiration),
      default_message_ttl: cdktf.stringToTerraform(this._defaultMessageTtl),
      forward_dead_lettered_messages_to: cdktf.stringToTerraform(this._forwardDeadLetteredMessagesTo),
      forward_to: cdktf.stringToTerraform(this._forwardTo),
      id: cdktf.stringToTerraform(this._id),
      lock_duration: cdktf.stringToTerraform(this._lockDuration),
      max_delivery_count: cdktf.numberToTerraform(this._maxDeliveryCount),
      name: cdktf.stringToTerraform(this._name),
      requires_session: cdktf.booleanToTerraform(this._requiresSession),
      status: cdktf.stringToTerraform(this._status),
      topic_id: cdktf.stringToTerraform(this._topicId),
      client_scoped_subscription: servicebusSubscriptionClientScopedSubscriptionToTerraform(this._clientScopedSubscription.internalValue),
      timeouts: servicebusSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_delete_on_idle: {
        value: cdktf.stringToHclTerraform(this._autoDeleteOnIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batched_operations_enabled: {
        value: cdktf.booleanToHclTerraform(this._batchedOperationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_scoped_subscription_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientScopedSubscriptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dead_lettering_on_filter_evaluation_error: {
        value: cdktf.booleanToHclTerraform(this._deadLetteringOnFilterEvaluationError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dead_lettering_on_message_expiration: {
        value: cdktf.booleanToHclTerraform(this._deadLetteringOnMessageExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_message_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultMessageTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_dead_lettered_messages_to: {
        value: cdktf.stringToHclTerraform(this._forwardDeadLetteredMessagesTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_to: {
        value: cdktf.stringToHclTerraform(this._forwardTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_duration: {
        value: cdktf.stringToHclTerraform(this._lockDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_delivery_count: {
        value: cdktf.numberToHclTerraform(this._maxDeliveryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requires_session: {
        value: cdktf.booleanToHclTerraform(this._requiresSession),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_scoped_subscription: {
        value: servicebusSubscriptionClientScopedSubscriptionToHclTerraform(this._clientScopedSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicebusSubscriptionClientScopedSubscriptionList",
      },
      timeouts: {
        value: servicebusSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicebusSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
