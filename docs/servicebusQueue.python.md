# `servicebusQueue` Submodule <a name="`servicebusQueue` Submodule" id="@cdktf/provider-azurerm.servicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusQueue <a name="ServicebusQueue" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue azurerm_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  namespace_id: str,
  auto_delete_on_idle: str = None,
  dead_lettering_on_message_expiration: typing.Union[bool, IResolvable] = None,
  default_message_ttl: str = None,
  duplicate_detection_history_time_window: str = None,
  enable_batched_operations: typing.Union[bool, IResolvable] = None,
  enable_express: typing.Union[bool, IResolvable] = None,
  enable_partitioning: typing.Union[bool, IResolvable] = None,
  forward_dead_lettered_messages_to: str = None,
  forward_to: str = None,
  id: str = None,
  lock_duration: str = None,
  max_delivery_count: typing.Union[int, float] = None,
  max_message_size_in_kilobytes: typing.Union[int, float] = None,
  max_size_in_megabytes: typing.Union[int, float] = None,
  requires_duplicate_detection: typing.Union[bool, IResolvable] = None,
  requires_session: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: ServicebusQueueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#name ServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.deadLetteringOnMessageExpiration">dead_lettering_on_message_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.duplicateDetectionHistoryTimeWindow">duplicate_detection_history_time_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableBatchedOperations">enable_batched_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableExpress">enable_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enablePartitioning">enable_partitioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardDeadLetteredMessagesTo">forward_dead_lettered_messages_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardTo">forward_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#id ServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxMessageSizeInKilobytes">max_message_size_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxSizeInMegabytes">max_size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresDuplicateDetection">requires_duplicate_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresSession">requires_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#status ServicebusQueue#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#name ServicebusQueue#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}.

---

##### `auto_delete_on_idle`<sup>Optional</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.autoDeleteOnIdle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}.

---

##### `dead_lettering_on_message_expiration`<sup>Optional</sup> <a name="dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.deadLetteringOnMessageExpiration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}.

---

##### `default_message_ttl`<sup>Optional</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.defaultMessageTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}.

---

##### `duplicate_detection_history_time_window`<sup>Optional</sup> <a name="duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.duplicateDetectionHistoryTimeWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}.

---

##### `enable_batched_operations`<sup>Optional</sup> <a name="enable_batched_operations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableBatchedOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}.

---

##### `enable_express`<sup>Optional</sup> <a name="enable_express" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableExpress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}.

---

##### `enable_partitioning`<sup>Optional</sup> <a name="enable_partitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enablePartitioning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}.

---

##### `forward_dead_lettered_messages_to`<sup>Optional</sup> <a name="forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardDeadLetteredMessagesTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}.

---

##### `forward_to`<sup>Optional</sup> <a name="forward_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#id ServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lockDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}.

---

##### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxDeliveryCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}.

---

##### `max_message_size_in_kilobytes`<sup>Optional</sup> <a name="max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxMessageSizeInKilobytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}.

---

##### `max_size_in_megabytes`<sup>Optional</sup> <a name="max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxSizeInMegabytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}.

---

##### `requires_duplicate_detection`<sup>Optional</sup> <a name="requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresDuplicateDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}.

---

##### `requires_session`<sup>Optional</sup> <a name="requires_session" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresSession"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#status ServicebusQueue#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#timeouts ServicebusQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle">reset_auto_delete_on_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration">reset_dead_lettering_on_message_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl">reset_default_message_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow">reset_duplicate_detection_history_time_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableBatchedOperations">reset_enable_batched_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableExpress">reset_enable_express</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnablePartitioning">reset_enable_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo">reset_forward_dead_lettered_messages_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo">reset_forward_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration">reset_lock_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount">reset_max_delivery_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes">reset_max_message_size_in_kilobytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes">reset_max_size_in_megabytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection">reset_requires_duplicate_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession">reset_requires_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#create ServicebusQueue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#delete ServicebusQueue#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#read ServicebusQueue#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#update ServicebusQueue#update}.

---

##### `reset_auto_delete_on_idle` <a name="reset_auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle"></a>

```python
def reset_auto_delete_on_idle() -> None
```

##### `reset_dead_lettering_on_message_expiration` <a name="reset_dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration"></a>

```python
def reset_dead_lettering_on_message_expiration() -> None
```

##### `reset_default_message_ttl` <a name="reset_default_message_ttl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl"></a>

```python
def reset_default_message_ttl() -> None
```

##### `reset_duplicate_detection_history_time_window` <a name="reset_duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow"></a>

```python
def reset_duplicate_detection_history_time_window() -> None
```

##### `reset_enable_batched_operations` <a name="reset_enable_batched_operations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableBatchedOperations"></a>

```python
def reset_enable_batched_operations() -> None
```

##### `reset_enable_express` <a name="reset_enable_express" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableExpress"></a>

```python
def reset_enable_express() -> None
```

##### `reset_enable_partitioning` <a name="reset_enable_partitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnablePartitioning"></a>

```python
def reset_enable_partitioning() -> None
```

##### `reset_forward_dead_lettered_messages_to` <a name="reset_forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo"></a>

```python
def reset_forward_dead_lettered_messages_to() -> None
```

##### `reset_forward_to` <a name="reset_forward_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo"></a>

```python
def reset_forward_to() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lock_duration` <a name="reset_lock_duration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration"></a>

```python
def reset_lock_duration() -> None
```

##### `reset_max_delivery_count` <a name="reset_max_delivery_count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount"></a>

```python
def reset_max_delivery_count() -> None
```

##### `reset_max_message_size_in_kilobytes` <a name="reset_max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes"></a>

```python
def reset_max_message_size_in_kilobytes() -> None
```

##### `reset_max_size_in_megabytes` <a name="reset_max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes"></a>

```python
def reset_max_size_in_megabytes() -> None
```

##### `reset_requires_duplicate_detection` <a name="reset_requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection"></a>

```python
def reset_requires_duplicate_detection() -> None
```

##### `reset_requires_session` <a name="reset_requires_session" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession"></a>

```python
def reset_requires_session() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicebusQueue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueue.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicebusQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicebusQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicebusQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput">auto_delete_on_idle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput">dead_lettering_on_message_expiration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput">default_message_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput">duplicate_detection_history_time_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperationsInput">enable_batched_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpressInput">enable_express_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioningInput">enable_partitioning_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput">forward_dead_lettered_messages_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput">forward_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput">lock_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput">max_delivery_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput">max_message_size_in_kilobytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput">max_size_in_megabytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput">requires_duplicate_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput">requires_session_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration">dead_lettering_on_message_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow">duplicate_detection_history_time_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperations">enable_batched_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpress">enable_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioning">enable_partitioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo">forward_dead_lettered_messages_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo">forward_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration">lock_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes">max_message_size_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes">max_size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection">requires_duplicate_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession">requires_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts"></a>

```python
timeouts: ServicebusQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a>

---

##### `auto_delete_on_idle_input`<sup>Optional</sup> <a name="auto_delete_on_idle_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput"></a>

```python
auto_delete_on_idle_input: str
```

- *Type:* str

---

##### `dead_lettering_on_message_expiration_input`<sup>Optional</sup> <a name="dead_lettering_on_message_expiration_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput"></a>

```python
dead_lettering_on_message_expiration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_message_ttl_input`<sup>Optional</sup> <a name="default_message_ttl_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput"></a>

```python
default_message_ttl_input: str
```

- *Type:* str

---

##### `duplicate_detection_history_time_window_input`<sup>Optional</sup> <a name="duplicate_detection_history_time_window_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput"></a>

```python
duplicate_detection_history_time_window_input: str
```

- *Type:* str

---

##### `enable_batched_operations_input`<sup>Optional</sup> <a name="enable_batched_operations_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperationsInput"></a>

```python
enable_batched_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_express_input`<sup>Optional</sup> <a name="enable_express_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpressInput"></a>

```python
enable_express_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_partitioning_input`<sup>Optional</sup> <a name="enable_partitioning_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioningInput"></a>

```python
enable_partitioning_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_dead_lettered_messages_to_input`<sup>Optional</sup> <a name="forward_dead_lettered_messages_to_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput"></a>

```python
forward_dead_lettered_messages_to_input: str
```

- *Type:* str

---

##### `forward_to_input`<sup>Optional</sup> <a name="forward_to_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput"></a>

```python
forward_to_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lock_duration_input`<sup>Optional</sup> <a name="lock_duration_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput"></a>

```python
lock_duration_input: str
```

- *Type:* str

---

##### `max_delivery_count_input`<sup>Optional</sup> <a name="max_delivery_count_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput"></a>

```python
max_delivery_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_message_size_in_kilobytes_input`<sup>Optional</sup> <a name="max_message_size_in_kilobytes_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput"></a>

```python
max_message_size_in_kilobytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size_in_megabytes_input`<sup>Optional</sup> <a name="max_size_in_megabytes_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput"></a>

```python
max_size_in_megabytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `requires_duplicate_detection_input`<sup>Optional</sup> <a name="requires_duplicate_detection_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput"></a>

```python
requires_duplicate_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requires_session_input`<sup>Optional</sup> <a name="requires_session_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput"></a>

```python
requires_session_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicebusQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>]

---

##### `auto_delete_on_idle`<sup>Required</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle"></a>

```python
auto_delete_on_idle: str
```

- *Type:* str

---

##### `dead_lettering_on_message_expiration`<sup>Required</sup> <a name="dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration"></a>

```python
dead_lettering_on_message_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_message_ttl`<sup>Required</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl"></a>

```python
default_message_ttl: str
```

- *Type:* str

---

##### `duplicate_detection_history_time_window`<sup>Required</sup> <a name="duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow"></a>

```python
duplicate_detection_history_time_window: str
```

- *Type:* str

---

##### `enable_batched_operations`<sup>Required</sup> <a name="enable_batched_operations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperations"></a>

```python
enable_batched_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_express`<sup>Required</sup> <a name="enable_express" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpress"></a>

```python
enable_express: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_partitioning`<sup>Required</sup> <a name="enable_partitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioning"></a>

```python
enable_partitioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_dead_lettered_messages_to`<sup>Required</sup> <a name="forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo"></a>

```python
forward_dead_lettered_messages_to: str
```

- *Type:* str

---

##### `forward_to`<sup>Required</sup> <a name="forward_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo"></a>

```python
forward_to: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lock_duration`<sup>Required</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_message_size_in_kilobytes`<sup>Required</sup> <a name="max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes"></a>

```python
max_message_size_in_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size_in_megabytes`<sup>Required</sup> <a name="max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes"></a>

```python
max_size_in_megabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `requires_duplicate_detection`<sup>Required</sup> <a name="requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection"></a>

```python
requires_duplicate_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requires_session`<sup>Required</sup> <a name="requires_session" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession"></a>

```python
requires_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusQueueConfig <a name="ServicebusQueueConfig" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  namespace_id: str,
  auto_delete_on_idle: str = None,
  dead_lettering_on_message_expiration: typing.Union[bool, IResolvable] = None,
  default_message_ttl: str = None,
  duplicate_detection_history_time_window: str = None,
  enable_batched_operations: typing.Union[bool, IResolvable] = None,
  enable_express: typing.Union[bool, IResolvable] = None,
  enable_partitioning: typing.Union[bool, IResolvable] = None,
  forward_dead_lettered_messages_to: str = None,
  forward_to: str = None,
  id: str = None,
  lock_duration: str = None,
  max_delivery_count: typing.Union[int, float] = None,
  max_message_size_in_kilobytes: typing.Union[int, float] = None,
  max_size_in_megabytes: typing.Union[int, float] = None,
  requires_duplicate_detection: typing.Union[bool, IResolvable] = None,
  requires_session: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: ServicebusQueueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#name ServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration">dead_lettering_on_message_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow">duplicate_detection_history_time_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableBatchedOperations">enable_batched_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableExpress">enable_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enablePartitioning">enable_partitioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo">forward_dead_lettered_messages_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo">forward_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#id ServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes">max_message_size_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes">max_size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection">requires_duplicate_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession">requires_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#status ServicebusQueue#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#name ServicebusQueue#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}.

---

##### `auto_delete_on_idle`<sup>Optional</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle"></a>

```python
auto_delete_on_idle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}.

---

##### `dead_lettering_on_message_expiration`<sup>Optional</sup> <a name="dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration"></a>

```python
dead_lettering_on_message_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}.

---

##### `default_message_ttl`<sup>Optional</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl"></a>

```python
default_message_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}.

---

##### `duplicate_detection_history_time_window`<sup>Optional</sup> <a name="duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow"></a>

```python
duplicate_detection_history_time_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}.

---

##### `enable_batched_operations`<sup>Optional</sup> <a name="enable_batched_operations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableBatchedOperations"></a>

```python
enable_batched_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}.

---

##### `enable_express`<sup>Optional</sup> <a name="enable_express" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableExpress"></a>

```python
enable_express: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}.

---

##### `enable_partitioning`<sup>Optional</sup> <a name="enable_partitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enablePartitioning"></a>

```python
enable_partitioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}.

---

##### `forward_dead_lettered_messages_to`<sup>Optional</sup> <a name="forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo"></a>

```python
forward_dead_lettered_messages_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}.

---

##### `forward_to`<sup>Optional</sup> <a name="forward_to" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo"></a>

```python
forward_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#id ServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}.

---

##### `max_delivery_count`<sup>Optional</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}.

---

##### `max_message_size_in_kilobytes`<sup>Optional</sup> <a name="max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes"></a>

```python
max_message_size_in_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}.

---

##### `max_size_in_megabytes`<sup>Optional</sup> <a name="max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes"></a>

```python
max_size_in_megabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}.

---

##### `requires_duplicate_detection`<sup>Optional</sup> <a name="requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection"></a>

```python
requires_duplicate_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}.

---

##### `requires_session`<sup>Optional</sup> <a name="requires_session" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession"></a>

```python
requires_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#status ServicebusQueue#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts"></a>

```python
timeouts: ServicebusQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#timeouts ServicebusQueue#timeouts}

---

### ServicebusQueueTimeouts <a name="ServicebusQueueTimeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueueTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#create ServicebusQueue#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#delete ServicebusQueue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#read ServicebusQueue#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#update ServicebusQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#create ServicebusQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#delete ServicebusQueue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#read ServicebusQueue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/servicebus_queue#update ServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusQueueTimeoutsOutputReference <a name="ServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_queue

servicebusQueue.ServicebusQueueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>]

---



