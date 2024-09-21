// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}
  */
  readonly autoDeleteOnIdle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#batched_operations_enabled ServicebusQueue#batched_operations_enabled}
  */
  readonly batchedOperationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}
  */
  readonly deadLetteringOnMessageExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}
  */
  readonly defaultMessageTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}
  */
  readonly duplicateDetectionHistoryTimeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#express_enabled ServicebusQueue#express_enabled}
  */
  readonly expressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}
  */
  readonly forwardDeadLetteredMessagesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}
  */
  readonly forwardTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#id ServicebusQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}
  */
  readonly maxMessageSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}
  */
  readonly maxSizeInMegabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#name ServicebusQueue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#partitioning_enabled ServicebusQueue#partitioning_enabled}
  */
  readonly partitioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}
  */
  readonly requiresDuplicateDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}
  */
  readonly requiresSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#status ServicebusQueue#status}
  */
  readonly status?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#timeouts ServicebusQueue#timeouts}
  */
  readonly timeouts?: ServicebusQueueTimeouts;
}
export interface ServicebusQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#create ServicebusQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#delete ServicebusQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#read ServicebusQueue#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#update ServicebusQueue#update}
  */
  readonly update?: string;
}

export function servicebusQueueTimeoutsToTerraform(struct?: ServicebusQueueTimeouts | cdktf.IResolvable): any {
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


export function servicebusQueueTimeoutsToHclTerraform(struct?: ServicebusQueueTimeouts | cdktf.IResolvable): any {
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

export class ServicebusQueueTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicebusQueueTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicebusQueueTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue azurerm_servicebus_queue}
*/
export class ServicebusQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_servicebus_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicebusQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicebusQueue to import
  * @param importFromId The id of the existing ServicebusQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicebusQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_servicebus_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/servicebus_queue azurerm_servicebus_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusQueueConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_queue',
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
    this._deadLetteringOnMessageExpiration = config.deadLetteringOnMessageExpiration;
    this._defaultMessageTtl = config.defaultMessageTtl;
    this._duplicateDetectionHistoryTimeWindow = config.duplicateDetectionHistoryTimeWindow;
    this._expressEnabled = config.expressEnabled;
    this._forwardDeadLetteredMessagesTo = config.forwardDeadLetteredMessagesTo;
    this._forwardTo = config.forwardTo;
    this._id = config.id;
    this._lockDuration = config.lockDuration;
    this._maxDeliveryCount = config.maxDeliveryCount;
    this._maxMessageSizeInKilobytes = config.maxMessageSizeInKilobytes;
    this._maxSizeInMegabytes = config.maxSizeInMegabytes;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._partitioningEnabled = config.partitioningEnabled;
    this._requiresDuplicateDetection = config.requiresDuplicateDetection;
    this._requiresSession = config.requiresSession;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
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
    return this._defaultMessageTtl;
  }

  // duplicate_detection_history_time_window - computed: false, optional: true, required: false
  private _duplicateDetectionHistoryTimeWindow?: string; 
  public get duplicateDetectionHistoryTimeWindow() {
    return this.getStringAttribute('duplicate_detection_history_time_window');
  }
  public set duplicateDetectionHistoryTimeWindow(value: string) {
    this._duplicateDetectionHistoryTimeWindow = value;
  }
  public resetDuplicateDetectionHistoryTimeWindow() {
    this._duplicateDetectionHistoryTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateDetectionHistoryTimeWindowInput() {
    return this._duplicateDetectionHistoryTimeWindow;
  }

  // express_enabled - computed: false, optional: true, required: false
  private _expressEnabled?: boolean | cdktf.IResolvable; 
  public get expressEnabled() {
    return this.getBooleanAttribute('express_enabled');
  }
  public set expressEnabled(value: boolean | cdktf.IResolvable) {
    this._expressEnabled = value;
  }
  public resetExpressEnabled() {
    this._expressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressEnabledInput() {
    return this._expressEnabled;
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

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount;
  }

  // max_message_size_in_kilobytes - computed: true, optional: true, required: false
  private _maxMessageSizeInKilobytes?: number; 
  public get maxMessageSizeInKilobytes() {
    return this.getNumberAttribute('max_message_size_in_kilobytes');
  }
  public set maxMessageSizeInKilobytes(value: number) {
    this._maxMessageSizeInKilobytes = value;
  }
  public resetMaxMessageSizeInKilobytes() {
    this._maxMessageSizeInKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeInKilobytesInput() {
    return this._maxMessageSizeInKilobytes;
  }

  // max_size_in_megabytes - computed: true, optional: true, required: false
  private _maxSizeInMegabytes?: number; 
  public get maxSizeInMegabytes() {
    return this.getNumberAttribute('max_size_in_megabytes');
  }
  public set maxSizeInMegabytes(value: number) {
    this._maxSizeInMegabytes = value;
  }
  public resetMaxSizeInMegabytes() {
    this._maxSizeInMegabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInMegabytesInput() {
    return this._maxSizeInMegabytes;
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

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // partitioning_enabled - computed: false, optional: true, required: false
  private _partitioningEnabled?: boolean | cdktf.IResolvable; 
  public get partitioningEnabled() {
    return this.getBooleanAttribute('partitioning_enabled');
  }
  public set partitioningEnabled(value: boolean | cdktf.IResolvable) {
    this._partitioningEnabled = value;
  }
  public resetPartitioningEnabled() {
    this._partitioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningEnabledInput() {
    return this._partitioningEnabled;
  }

  // requires_duplicate_detection - computed: false, optional: true, required: false
  private _requiresDuplicateDetection?: boolean | cdktf.IResolvable; 
  public get requiresDuplicateDetection() {
    return this.getBooleanAttribute('requires_duplicate_detection');
  }
  public set requiresDuplicateDetection(value: boolean | cdktf.IResolvable) {
    this._requiresDuplicateDetection = value;
  }
  public resetRequiresDuplicateDetection() {
    this._requiresDuplicateDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresDuplicateDetectionInput() {
    return this._requiresDuplicateDetection;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicebusQueueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicebusQueueTimeouts) {
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
      dead_lettering_on_message_expiration: cdktf.booleanToTerraform(this._deadLetteringOnMessageExpiration),
      default_message_ttl: cdktf.stringToTerraform(this._defaultMessageTtl),
      duplicate_detection_history_time_window: cdktf.stringToTerraform(this._duplicateDetectionHistoryTimeWindow),
      express_enabled: cdktf.booleanToTerraform(this._expressEnabled),
      forward_dead_lettered_messages_to: cdktf.stringToTerraform(this._forwardDeadLetteredMessagesTo),
      forward_to: cdktf.stringToTerraform(this._forwardTo),
      id: cdktf.stringToTerraform(this._id),
      lock_duration: cdktf.stringToTerraform(this._lockDuration),
      max_delivery_count: cdktf.numberToTerraform(this._maxDeliveryCount),
      max_message_size_in_kilobytes: cdktf.numberToTerraform(this._maxMessageSizeInKilobytes),
      max_size_in_megabytes: cdktf.numberToTerraform(this._maxSizeInMegabytes),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      partitioning_enabled: cdktf.booleanToTerraform(this._partitioningEnabled),
      requires_duplicate_detection: cdktf.booleanToTerraform(this._requiresDuplicateDetection),
      requires_session: cdktf.booleanToTerraform(this._requiresSession),
      status: cdktf.stringToTerraform(this._status),
      timeouts: servicebusQueueTimeoutsToTerraform(this._timeouts.internalValue),
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
      duplicate_detection_history_time_window: {
        value: cdktf.stringToHclTerraform(this._duplicateDetectionHistoryTimeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      express_enabled: {
        value: cdktf.booleanToHclTerraform(this._expressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      max_message_size_in_kilobytes: {
        value: cdktf.numberToHclTerraform(this._maxMessageSizeInKilobytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size_in_megabytes: {
        value: cdktf.numberToHclTerraform(this._maxSizeInMegabytes),
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
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitioning_enabled: {
        value: cdktf.booleanToHclTerraform(this._partitioningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      requires_duplicate_detection: {
        value: cdktf.booleanToHclTerraform(this._requiresDuplicateDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      timeouts: {
        value: servicebusQueueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicebusQueueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
