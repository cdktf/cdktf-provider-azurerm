# `servicebusSubscription` Submodule <a name="`servicebusSubscription` Submodule" id="@cdktf/provider-azurerm.servicebusSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusSubscription <a name="ServicebusSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription azurerm_servicebus_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_delivery_count: typing.Union[int, float],
  name: str,
  topic_id: str,
  auto_delete_on_idle: str = None,
  batched_operations_enabled: typing.Union[bool, IResolvable] = None,
  client_scoped_subscription: ServicebusSubscriptionClientScopedSubscription = None,
  client_scoped_subscription_enabled: typing.Union[bool, IResolvable] = None,
  dead_lettering_on_filter_evaluation_error: typing.Union[bool, IResolvable] = None,
  dead_lettering_on_message_expiration: typing.Union[bool, IResolvable] = None,
  default_message_ttl: str = None,
  forward_dead_lettered_messages_to: str = None,
  forward_to: str = None,
  id: str = None,
  lock_duration: str = None,
  requires_session: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: ServicebusSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.topicId">topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.batchedOperationsEnabled">batched_operations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscription">client_scoped_subscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | client_scoped_subscription block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscriptionEnabled">client_scoped_subscription_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnFilterEvaluationError">dead_lettering_on_filter_evaluation_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnMessageExpiration">dead_lettering_on_message_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardDeadLetteredMessagesTo">forward_dead_lettered_messages_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardTo">forward_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.requiresSession">requires_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.maxDeliveryCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}.

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.topicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}.

---

##### `auto_delete_on_idle`<sup>Optional</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.autoDeleteOnIdle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}.

---

##### `batched_operations_enabled`<sup>Optional</sup> <a name="batched_operations_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.batchedOperationsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}.

---

##### `client_scoped_subscription`<sup>Optional</sup> <a name="client_scoped_subscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscription"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

client_scoped_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_scoped_subscription ServicebusSubscription#client_scoped_subscription}

---

##### `client_scoped_subscription_enabled`<sup>Optional</sup> <a name="client_scoped_subscription_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscriptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}.

---

##### `dead_lettering_on_filter_evaluation_error`<sup>Optional</sup> <a name="dead_lettering_on_filter_evaluation_error" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnFilterEvaluationError"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}.

---

##### `dead_lettering_on_message_expiration`<sup>Optional</sup> <a name="dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnMessageExpiration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}.

---

##### `default_message_ttl`<sup>Optional</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.defaultMessageTtl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}.

---

##### `forward_dead_lettered_messages_to`<sup>Optional</sup> <a name="forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardDeadLetteredMessagesTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}.

---

##### `forward_to`<sup>Optional</sup> <a name="forward_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lockDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}.

---

##### `requires_session`<sup>Optional</sup> <a name="requires_session" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.requiresSession"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#timeouts ServicebusSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription">put_client_scoped_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetAutoDeleteOnIdle">reset_auto_delete_on_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetBatchedOperationsEnabled">reset_batched_operations_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscription">reset_client_scoped_subscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscriptionEnabled">reset_client_scoped_subscription_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnFilterEvaluationError">reset_dead_lettering_on_filter_evaluation_error</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnMessageExpiration">reset_dead_lettering_on_message_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDefaultMessageTtl">reset_default_message_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardDeadLetteredMessagesTo">reset_forward_dead_lettered_messages_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardTo">reset_forward_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetLockDuration">reset_lock_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetRequiresSession">reset_requires_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_scoped_subscription` <a name="put_client_scoped_subscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription"></a>

```python
def put_client_scoped_subscription(
  client_id: str = None,
  is_client_scoped_subscription_shareable: typing.Union[bool, IResolvable] = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}.

---

###### `is_client_scoped_subscription_shareable`<sup>Optional</sup> <a name="is_client_scoped_subscription_shareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription.parameter.isClientScopedSubscriptionShareable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}.

---

##### `reset_auto_delete_on_idle` <a name="reset_auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetAutoDeleteOnIdle"></a>

```python
def reset_auto_delete_on_idle() -> None
```

##### `reset_batched_operations_enabled` <a name="reset_batched_operations_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetBatchedOperationsEnabled"></a>

```python
def reset_batched_operations_enabled() -> None
```

##### `reset_client_scoped_subscription` <a name="reset_client_scoped_subscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscription"></a>

```python
def reset_client_scoped_subscription() -> None
```

##### `reset_client_scoped_subscription_enabled` <a name="reset_client_scoped_subscription_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscriptionEnabled"></a>

```python
def reset_client_scoped_subscription_enabled() -> None
```

##### `reset_dead_lettering_on_filter_evaluation_error` <a name="reset_dead_lettering_on_filter_evaluation_error" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnFilterEvaluationError"></a>

```python
def reset_dead_lettering_on_filter_evaluation_error() -> None
```

##### `reset_dead_lettering_on_message_expiration` <a name="reset_dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnMessageExpiration"></a>

```python
def reset_dead_lettering_on_message_expiration() -> None
```

##### `reset_default_message_ttl` <a name="reset_default_message_ttl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDefaultMessageTtl"></a>

```python
def reset_default_message_ttl() -> None
```

##### `reset_forward_dead_lettered_messages_to` <a name="reset_forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardDeadLetteredMessagesTo"></a>

```python
def reset_forward_dead_lettered_messages_to() -> None
```

##### `reset_forward_to` <a name="reset_forward_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardTo"></a>

```python
def reset_forward_to() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lock_duration` <a name="reset_lock_duration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetLockDuration"></a>

```python
def reset_lock_duration() -> None
```

##### `reset_requires_session` <a name="reset_requires_session" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetRequiresSession"></a>

```python
def reset_requires_session() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicebusSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicebusSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicebusSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicebusSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscription">client_scoped_subscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference">ServicebusSubscriptionClientScopedSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference">ServicebusSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdleInput">auto_delete_on_idle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabledInput">batched_operations_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabledInput">client_scoped_subscription_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionInput">client_scoped_subscription_input</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationErrorInput">dead_lettering_on_filter_evaluation_error_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpirationInput">dead_lettering_on_message_expiration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtlInput">default_message_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesToInput">forward_dead_lettered_messages_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardToInput">forward_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDurationInput">lock_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCountInput">max_delivery_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSessionInput">requires_session_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicIdInput">topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabled">batched_operations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabled">client_scoped_subscription_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationError">dead_lettering_on_filter_evaluation_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpiration">dead_lettering_on_message_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesTo">forward_dead_lettered_messages_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardTo">forward_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDuration">lock_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSession">requires_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicId">topic_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_scoped_subscription`<sup>Required</sup> <a name="client_scoped_subscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscription"></a>

```python
client_scoped_subscription: ServicebusSubscriptionClientScopedSubscriptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference">ServicebusSubscriptionClientScopedSubscriptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeouts"></a>

```python
timeouts: ServicebusSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference">ServicebusSubscriptionTimeoutsOutputReference</a>

---

##### `auto_delete_on_idle_input`<sup>Optional</sup> <a name="auto_delete_on_idle_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdleInput"></a>

```python
auto_delete_on_idle_input: str
```

- *Type:* str

---

##### `batched_operations_enabled_input`<sup>Optional</sup> <a name="batched_operations_enabled_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabledInput"></a>

```python
batched_operations_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_scoped_subscription_enabled_input`<sup>Optional</sup> <a name="client_scoped_subscription_enabled_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabledInput"></a>

```python
client_scoped_subscription_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_scoped_subscription_input`<sup>Optional</sup> <a name="client_scoped_subscription_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionInput"></a>

```python
client_scoped_subscription_input: ServicebusSubscriptionClientScopedSubscription
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---

##### `dead_lettering_on_filter_evaluation_error_input`<sup>Optional</sup> <a name="dead_lettering_on_filter_evaluation_error_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationErrorInput"></a>

```python
dead_lettering_on_filter_evaluation_error_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dead_lettering_on_message_expiration_input`<sup>Optional</sup> <a name="dead_lettering_on_message_expiration_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpirationInput"></a>

```python
dead_lettering_on_message_expiration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_message_ttl_input`<sup>Optional</sup> <a name="default_message_ttl_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtlInput"></a>

```python
default_message_ttl_input: str
```

- *Type:* str

---

##### `forward_dead_lettered_messages_to_input`<sup>Optional</sup> <a name="forward_dead_lettered_messages_to_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesToInput"></a>

```python
forward_dead_lettered_messages_to_input: str
```

- *Type:* str

---

##### `forward_to_input`<sup>Optional</sup> <a name="forward_to_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardToInput"></a>

```python
forward_to_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lock_duration_input`<sup>Optional</sup> <a name="lock_duration_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDurationInput"></a>

```python
lock_duration_input: str
```

- *Type:* str

---

##### `max_delivery_count_input`<sup>Optional</sup> <a name="max_delivery_count_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCountInput"></a>

```python
max_delivery_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `requires_session_input`<sup>Optional</sup> <a name="requires_session_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSessionInput"></a>

```python
requires_session_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServicebusSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>]

---

##### `topic_id_input`<sup>Optional</sup> <a name="topic_id_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicIdInput"></a>

```python
topic_id_input: str
```

- *Type:* str

---

##### `auto_delete_on_idle`<sup>Required</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdle"></a>

```python
auto_delete_on_idle: str
```

- *Type:* str

---

##### `batched_operations_enabled`<sup>Required</sup> <a name="batched_operations_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabled"></a>

```python
batched_operations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_scoped_subscription_enabled`<sup>Required</sup> <a name="client_scoped_subscription_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabled"></a>

```python
client_scoped_subscription_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dead_lettering_on_filter_evaluation_error`<sup>Required</sup> <a name="dead_lettering_on_filter_evaluation_error" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationError"></a>

```python
dead_lettering_on_filter_evaluation_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dead_lettering_on_message_expiration`<sup>Required</sup> <a name="dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpiration"></a>

```python
dead_lettering_on_message_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_message_ttl`<sup>Required</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtl"></a>

```python
default_message_ttl: str
```

- *Type:* str

---

##### `forward_dead_lettered_messages_to`<sup>Required</sup> <a name="forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesTo"></a>

```python
forward_dead_lettered_messages_to: str
```

- *Type:* str

---

##### `forward_to`<sup>Required</sup> <a name="forward_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardTo"></a>

```python
forward_to: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lock_duration`<sup>Required</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `requires_session`<sup>Required</sup> <a name="requires_session" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSession"></a>

```python
requires_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusSubscriptionClientScopedSubscription <a name="ServicebusSubscriptionClientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscriptionClientScopedSubscription(
  client_id: str = None,
  is_client_scoped_subscription_shareable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.isClientScopedSubscriptionShareable">is_client_scoped_subscription_shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}.

---

##### `is_client_scoped_subscription_shareable`<sup>Optional</sup> <a name="is_client_scoped_subscription_shareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.isClientScopedSubscriptionShareable"></a>

```python
is_client_scoped_subscription_shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}.

---

### ServicebusSubscriptionConfig <a name="ServicebusSubscriptionConfig" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_delivery_count: typing.Union[int, float],
  name: str,
  topic_id: str,
  auto_delete_on_idle: str = None,
  batched_operations_enabled: typing.Union[bool, IResolvable] = None,
  client_scoped_subscription: ServicebusSubscriptionClientScopedSubscription = None,
  client_scoped_subscription_enabled: typing.Union[bool, IResolvable] = None,
  dead_lettering_on_filter_evaluation_error: typing.Union[bool, IResolvable] = None,
  dead_lettering_on_message_expiration: typing.Union[bool, IResolvable] = None,
  default_message_ttl: str = None,
  forward_dead_lettered_messages_to: str = None,
  forward_to: str = None,
  id: str = None,
  lock_duration: str = None,
  requires_session: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: ServicebusSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.maxDeliveryCount">max_delivery_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.topicId">topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.autoDeleteOnIdle">auto_delete_on_idle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.batchedOperationsEnabled">batched_operations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscription">client_scoped_subscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | client_scoped_subscription block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscriptionEnabled">client_scoped_subscription_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnFilterEvaluationError">dead_lettering_on_filter_evaluation_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnMessageExpiration">dead_lettering_on_message_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.defaultMessageTtl">default_message_ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardDeadLetteredMessagesTo">forward_dead_lettered_messages_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardTo">forward_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lockDuration">lock_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.requiresSession">requires_session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_delivery_count`<sup>Required</sup> <a name="max_delivery_count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.maxDeliveryCount"></a>

```python
max_delivery_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}.

---

##### `topic_id`<sup>Required</sup> <a name="topic_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.topicId"></a>

```python
topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}.

---

##### `auto_delete_on_idle`<sup>Optional</sup> <a name="auto_delete_on_idle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.autoDeleteOnIdle"></a>

```python
auto_delete_on_idle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}.

---

##### `batched_operations_enabled`<sup>Optional</sup> <a name="batched_operations_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.batchedOperationsEnabled"></a>

```python
batched_operations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}.

---

##### `client_scoped_subscription`<sup>Optional</sup> <a name="client_scoped_subscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscription"></a>

```python
client_scoped_subscription: ServicebusSubscriptionClientScopedSubscription
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

client_scoped_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_scoped_subscription ServicebusSubscription#client_scoped_subscription}

---

##### `client_scoped_subscription_enabled`<sup>Optional</sup> <a name="client_scoped_subscription_enabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscriptionEnabled"></a>

```python
client_scoped_subscription_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}.

---

##### `dead_lettering_on_filter_evaluation_error`<sup>Optional</sup> <a name="dead_lettering_on_filter_evaluation_error" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnFilterEvaluationError"></a>

```python
dead_lettering_on_filter_evaluation_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}.

---

##### `dead_lettering_on_message_expiration`<sup>Optional</sup> <a name="dead_lettering_on_message_expiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnMessageExpiration"></a>

```python
dead_lettering_on_message_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}.

---

##### `default_message_ttl`<sup>Optional</sup> <a name="default_message_ttl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.defaultMessageTtl"></a>

```python
default_message_ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}.

---

##### `forward_dead_lettered_messages_to`<sup>Optional</sup> <a name="forward_dead_lettered_messages_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardDeadLetteredMessagesTo"></a>

```python
forward_dead_lettered_messages_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}.

---

##### `forward_to`<sup>Optional</sup> <a name="forward_to" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardTo"></a>

```python
forward_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_duration`<sup>Optional</sup> <a name="lock_duration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lockDuration"></a>

```python
lock_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}.

---

##### `requires_session`<sup>Optional</sup> <a name="requires_session" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.requiresSession"></a>

```python
requires_session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.timeouts"></a>

```python
timeouts: ServicebusSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#timeouts ServicebusSubscription#timeouts}

---

### ServicebusSubscriptionTimeouts <a name="ServicebusSubscriptionTimeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusSubscriptionClientScopedSubscriptionOutputReference <a name="ServicebusSubscriptionClientScopedSubscriptionOutputReference" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetIsClientScopedSubscriptionShareable">reset_is_client_scoped_subscription_shareable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_is_client_scoped_subscription_shareable` <a name="reset_is_client_scoped_subscription_shareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetIsClientScopedSubscriptionShareable"></a>

```python
def reset_is_client_scoped_subscription_shareable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionDurable">is_client_scoped_subscription_durable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareableInput">is_client_scoped_subscription_shareable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareable">is_client_scoped_subscription_shareable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_client_scoped_subscription_durable`<sup>Required</sup> <a name="is_client_scoped_subscription_durable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionDurable"></a>

```python
is_client_scoped_subscription_durable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `is_client_scoped_subscription_shareable_input`<sup>Optional</sup> <a name="is_client_scoped_subscription_shareable_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareableInput"></a>

```python
is_client_scoped_subscription_shareable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `is_client_scoped_subscription_shareable`<sup>Required</sup> <a name="is_client_scoped_subscription_shareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareable"></a>

```python
is_client_scoped_subscription_shareable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: ServicebusSubscriptionClientScopedSubscription
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---


### ServicebusSubscriptionTimeoutsOutputReference <a name="ServicebusSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import servicebus_subscription

servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServicebusSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>]

---



