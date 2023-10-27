# `azurerm_servicebus_topic`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_topic`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic).

# `servicebusTopic` Submodule <a name="`servicebusTopic` Submodule" id="@cdktf/provider-azurerm.servicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusTopic <a name="ServicebusTopic" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic azurerm_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopic(
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
  default_message_ttl: str = None,
  duplicate_detection_history_time_window: str = None,
  enable_batched_operations: typing.Union[bool, IResolvable] = None,
  enable_express: typing.Union[bool, IResolvable] = None,
  enable_partitioning: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_message_size_in_kilobytes: typing.Union[int, float] = None,
  max_size_in_megabytes: typing.Union[int, float] = None,
  requires_duplicate_detection: typing.Union[bool, IResolvable] = None,
  status: str = None,
  support_ordering: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusTopicTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#name ServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.duplicateDetectionHistoryTimeWindow">duplicate_detection_history_time_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.enableBatchedOperations">enable_batched_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_batched_operations ServicebusTopic#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.enableExpress">enable_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_express ServicebusTopic#enable_express}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.enablePartitioning">enable_partitioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_partitioning ServicebusTopic#enable_partitioning}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#id ServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.maxMessageSizeInKilobytes">max_message_size_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.maxSizeInMegabytes">max_size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.requiresDuplicateDetection">requires_duplicate_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#status ServicebusTopic#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.supportOrdering">support_ordering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#name ServicebusTopic#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}.

---

##### `auto_delete_on_idle`<sup>Optional</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.autoDeleteOnIdle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}.

---

##### `default_message_ttl`<sup>Optional</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.defaultMessageTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}.

---

##### `duplicate_detection_history_time_window`<sup>Optional</sup> <a name="duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.duplicateDetectionHistoryTimeWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}.

---

##### `enable_batched_operations`<sup>Optional</sup> <a name="enable_batched_operations" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.enableBatchedOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_batched_operations ServicebusTopic#enable_batched_operations}.

---

##### `enable_express`<sup>Optional</sup> <a name="enable_express" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.enableExpress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_express ServicebusTopic#enable_express}.

---

##### `enable_partitioning`<sup>Optional</sup> <a name="enable_partitioning" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.enablePartitioning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_partitioning ServicebusTopic#enable_partitioning}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#id ServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_message_size_in_kilobytes`<sup>Optional</sup> <a name="max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.maxMessageSizeInKilobytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}.

---

##### `max_size_in_megabytes`<sup>Optional</sup> <a name="max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.maxSizeInMegabytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}.

---

##### `requires_duplicate_detection`<sup>Optional</sup> <a name="requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.requiresDuplicateDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#status ServicebusTopic#status}.

---

##### `support_ordering`<sup>Optional</sup> <a name="support_ordering" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.supportOrdering"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#timeouts ServicebusTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetAutoDeleteOnIdle">reset_auto_delete_on_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetDefaultMessageTtl">reset_default_message_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetDuplicateDetectionHistoryTimeWindow">reset_duplicate_detection_history_time_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetEnableBatchedOperations">reset_enable_batched_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetEnableExpress">reset_enable_express</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetEnablePartitioning">reset_enable_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxMessageSizeInKilobytes">reset_max_message_size_in_kilobytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxSizeInMegabytes">reset_max_size_in_megabytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetRequiresDuplicateDetection">reset_requires_duplicate_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetSupportOrdering">reset_support_ordering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#create ServicebusTopic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#delete ServicebusTopic#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#read ServicebusTopic#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#update ServicebusTopic#update}.

---

##### `reset_auto_delete_on_idle` <a name="reset_auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetAutoDeleteOnIdle"></a>

```python
def reset_auto_delete_on_idle() -> None
```

##### `reset_default_message_ttl` <a name="reset_default_message_ttl" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetDefaultMessageTtl"></a>

```python
def reset_default_message_ttl() -> None
```

##### `reset_duplicate_detection_history_time_window` <a name="reset_duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetDuplicateDetectionHistoryTimeWindow"></a>

```python
def reset_duplicate_detection_history_time_window() -> None
```

##### `reset_enable_batched_operations` <a name="reset_enable_batched_operations" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetEnableBatchedOperations"></a>

```python
def reset_enable_batched_operations() -> None
```

##### `reset_enable_express` <a name="reset_enable_express" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetEnableExpress"></a>

```python
def reset_enable_express() -> None
```

##### `reset_enable_partitioning` <a name="reset_enable_partitioning" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetEnablePartitioning"></a>

```python
def reset_enable_partitioning() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_message_size_in_kilobytes` <a name="reset_max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxMessageSizeInKilobytes"></a>

```python
def reset_max_message_size_in_kilobytes() -> None
```

##### `reset_max_size_in_megabytes` <a name="reset_max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetMaxSizeInMegabytes"></a>

```python
def reset_max_size_in_megabytes() -> None
```

##### `reset_requires_duplicate_detection` <a name="reset_requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetRequiresDuplicateDetection"></a>

```python
def reset_requires_duplicate_detection() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_support_ordering` <a name="reset_support_ordering" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetSupportOrdering"></a>

```python
def reset_support_ordering() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicebusTopic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicebusTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicebusTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicebusTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference">ServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdleInput">auto_delete_on_idle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtlInput">default_message_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindowInput">duplicate_detection_history_time_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableBatchedOperationsInput">enable_batched_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableExpressInput">enable_express_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enablePartitioningInput">enable_partitioning_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytesInput">max_message_size_in_kilobytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytesInput">max_size_in_megabytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetectionInput">requires_duplicate_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrderingInput">support_ordering_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindow">duplicate_detection_history_time_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableBatchedOperations">enable_batched_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableExpress">enable_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enablePartitioning">enable_partitioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytes">max_message_size_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytes">max_size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetection">requires_duplicate_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrdering">support_ordering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeouts"></a>

```python
timeouts: ServicebusTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference">ServicebusTopicTimeoutsOutputReference</a>

---

##### `auto_delete_on_idle_input`<sup>Optional</sup> <a name="auto_delete_on_idle_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdleInput"></a>

```python
auto_delete_on_idle_input: str
```

- *Type:* str

---

##### `default_message_ttl_input`<sup>Optional</sup> <a name="default_message_ttl_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtlInput"></a>

```python
default_message_ttl_input: str
```

- *Type:* str

---

##### `duplicate_detection_history_time_window_input`<sup>Optional</sup> <a name="duplicate_detection_history_time_window_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindowInput"></a>

```python
duplicate_detection_history_time_window_input: str
```

- *Type:* str

---

##### `enable_batched_operations_input`<sup>Optional</sup> <a name="enable_batched_operations_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableBatchedOperationsInput"></a>

```python
enable_batched_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_express_input`<sup>Optional</sup> <a name="enable_express_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableExpressInput"></a>

```python
enable_express_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_partitioning_input`<sup>Optional</sup> <a name="enable_partitioning_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enablePartitioningInput"></a>

```python
enable_partitioning_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_message_size_in_kilobytes_input`<sup>Optional</sup> <a name="max_message_size_in_kilobytes_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytesInput"></a>

```python
max_message_size_in_kilobytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size_in_megabytes_input`<sup>Optional</sup> <a name="max_size_in_megabytes_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytesInput"></a>

```python
max_size_in_megabytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `requires_duplicate_detection_input`<sup>Optional</sup> <a name="requires_duplicate_detection_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetectionInput"></a>

```python
requires_duplicate_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `support_ordering_input`<sup>Optional</sup> <a name="support_ordering_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrderingInput"></a>

```python
support_ordering_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicebusTopicTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>]

---

##### `auto_delete_on_idle`<sup>Required</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.autoDeleteOnIdle"></a>

```python
auto_delete_on_idle: str
```

- *Type:* str

---

##### `default_message_ttl`<sup>Required</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.defaultMessageTtl"></a>

```python
default_message_ttl: str
```

- *Type:* str

---

##### `duplicate_detection_history_time_window`<sup>Required</sup> <a name="duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.duplicateDetectionHistoryTimeWindow"></a>

```python
duplicate_detection_history_time_window: str
```

- *Type:* str

---

##### `enable_batched_operations`<sup>Required</sup> <a name="enable_batched_operations" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableBatchedOperations"></a>

```python
enable_batched_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_express`<sup>Required</sup> <a name="enable_express" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enableExpress"></a>

```python
enable_express: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_partitioning`<sup>Required</sup> <a name="enable_partitioning" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.enablePartitioning"></a>

```python
enable_partitioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_message_size_in_kilobytes`<sup>Required</sup> <a name="max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxMessageSizeInKilobytes"></a>

```python
max_message_size_in_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_size_in_megabytes`<sup>Required</sup> <a name="max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.maxSizeInMegabytes"></a>

```python
max_size_in_megabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `requires_duplicate_detection`<sup>Required</sup> <a name="requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.requiresDuplicateDetection"></a>

```python
requires_duplicate_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `support_ordering`<sup>Required</sup> <a name="support_ordering" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.supportOrdering"></a>

```python
support_ordering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusTopicConfig <a name="ServicebusTopicConfig" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopicConfig(
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
  default_message_ttl: str = None,
  duplicate_detection_history_time_window: str = None,
  enable_batched_operations: typing.Union[bool, IResolvable] = None,
  enable_express: typing.Union[bool, IResolvable] = None,
  enable_partitioning: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_message_size_in_kilobytes: typing.Union[int, float] = None,
  max_size_in_megabytes: typing.Union[int, float] = None,
  requires_duplicate_detection: typing.Union[bool, IResolvable] = None,
  status: str = None,
  support_ordering: typing.Union[bool, IResolvable] = None,
  timeouts: ServicebusTopicTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#name ServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.duplicateDetectionHistoryTimeWindow">duplicate_detection_history_time_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.enableBatchedOperations">enable_batched_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_batched_operations ServicebusTopic#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.enableExpress">enable_express</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_express ServicebusTopic#enable_express}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.enablePartitioning">enable_partitioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_partitioning ServicebusTopic#enable_partitioning}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#id ServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxMessageSizeInKilobytes">max_message_size_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxSizeInMegabytes">max_size_in_megabytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.requiresDuplicateDetection">requires_duplicate_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#status ServicebusTopic#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.supportOrdering">support_ordering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#name ServicebusTopic#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#namespace_id ServicebusTopic#namespace_id}.

---

##### `auto_delete_on_idle`<sup>Optional</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.autoDeleteOnIdle"></a>

```python
auto_delete_on_idle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#auto_delete_on_idle ServicebusTopic#auto_delete_on_idle}.

---

##### `default_message_ttl`<sup>Optional</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.defaultMessageTtl"></a>

```python
default_message_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#default_message_ttl ServicebusTopic#default_message_ttl}.

---

##### `duplicate_detection_history_time_window`<sup>Optional</sup> <a name="duplicate_detection_history_time_window" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.duplicateDetectionHistoryTimeWindow"></a>

```python
duplicate_detection_history_time_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#duplicate_detection_history_time_window ServicebusTopic#duplicate_detection_history_time_window}.

---

##### `enable_batched_operations`<sup>Optional</sup> <a name="enable_batched_operations" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.enableBatchedOperations"></a>

```python
enable_batched_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_batched_operations ServicebusTopic#enable_batched_operations}.

---

##### `enable_express`<sup>Optional</sup> <a name="enable_express" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.enableExpress"></a>

```python
enable_express: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_express ServicebusTopic#enable_express}.

---

##### `enable_partitioning`<sup>Optional</sup> <a name="enable_partitioning" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.enablePartitioning"></a>

```python
enable_partitioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#enable_partitioning ServicebusTopic#enable_partitioning}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#id ServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_message_size_in_kilobytes`<sup>Optional</sup> <a name="max_message_size_in_kilobytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxMessageSizeInKilobytes"></a>

```python
max_message_size_in_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_message_size_in_kilobytes ServicebusTopic#max_message_size_in_kilobytes}.

---

##### `max_size_in_megabytes`<sup>Optional</sup> <a name="max_size_in_megabytes" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.maxSizeInMegabytes"></a>

```python
max_size_in_megabytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#max_size_in_megabytes ServicebusTopic#max_size_in_megabytes}.

---

##### `requires_duplicate_detection`<sup>Optional</sup> <a name="requires_duplicate_detection" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.requiresDuplicateDetection"></a>

```python
requires_duplicate_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#requires_duplicate_detection ServicebusTopic#requires_duplicate_detection}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#status ServicebusTopic#status}.

---

##### `support_ordering`<sup>Optional</sup> <a name="support_ordering" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.supportOrdering"></a>

```python
support_ordering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#support_ordering ServicebusTopic#support_ordering}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicConfig.property.timeouts"></a>

```python
timeouts: ServicebusTopicTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#timeouts ServicebusTopic#timeouts}

---

### ServicebusTopicTimeouts <a name="ServicebusTopicTimeouts" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopicTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#create ServicebusTopic#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#delete ServicebusTopic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#read ServicebusTopic#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#update ServicebusTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#create ServicebusTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#delete ServicebusTopic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#read ServicebusTopic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/servicebus_topic#update ServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusTopicTimeoutsOutputReference <a name="ServicebusTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_topic

servicebusTopic.ServicebusTopicTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusTopicTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusTopic.ServicebusTopicTimeouts">ServicebusTopicTimeouts</a>]

---



