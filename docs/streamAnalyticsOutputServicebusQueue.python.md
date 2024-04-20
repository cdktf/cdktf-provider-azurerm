# `streamAnalyticsOutputServicebusQueue` Submodule <a name="`streamAnalyticsOutputServicebusQueue` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputServicebusQueue <a name="StreamAnalyticsOutputServicebusQueue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue azurerm_stream_analytics_output_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue(
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
  queue_name: str,
  resource_group_name: str,
  serialization: StreamAnalyticsOutputServicebusQueueSerialization,
  servicebus_namespace: str,
  stream_analytics_job_name: str,
  authentication_mode: str = None,
  id: str = None,
  property_columns: typing.List[str] = None,
  shared_access_policy_key: str = None,
  shared_access_policy_name: str = None,
  system_property_columns: typing.Mapping[str] = None,
  timeouts: StreamAnalyticsOutputServicebusQueueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.queueName">queue_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.servicebusNamespace">servicebus_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.propertyColumns">property_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyKey">shared_access_policy_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.systemPropertyColumns">system_property_columns</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}.

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.queueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#serialization StreamAnalyticsOutputServicebusQueue#serialization}

---

##### `servicebus_namespace`<sup>Required</sup> <a name="servicebus_namespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.servicebusNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.authenticationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `property_columns`<sup>Optional</sup> <a name="property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.propertyColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}.

---

##### `shared_access_policy_key`<sup>Optional</sup> <a name="shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}.

---

##### `shared_access_policy_name`<sup>Optional</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}.

---

##### `system_property_columns`<sup>Optional</sup> <a name="system_property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.systemPropertyColumns"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#timeouts StreamAnalyticsOutputServicebusQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization">put_serialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetAuthenticationMode">reset_authentication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetPropertyColumns">reset_property_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyKey">reset_shared_access_policy_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyName">reset_shared_access_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSystemPropertyColumns">reset_system_property_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_serialization` <a name="put_serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization"></a>

```python
def put_serialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None,
  format: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#type StreamAnalyticsOutputServicebusQueue#type}.

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization.parameter.encoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#encoding StreamAnalyticsOutputServicebusQueue#encoding}.

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization.parameter.fieldDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}.

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#format StreamAnalyticsOutputServicebusQueue#format}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#create StreamAnalyticsOutputServicebusQueue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#delete StreamAnalyticsOutputServicebusQueue#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#read StreamAnalyticsOutputServicebusQueue#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#update StreamAnalyticsOutputServicebusQueue#update}.

---

##### `reset_authentication_mode` <a name="reset_authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetAuthenticationMode"></a>

```python
def reset_authentication_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_property_columns` <a name="reset_property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetPropertyColumns"></a>

```python
def reset_property_columns() -> None
```

##### `reset_shared_access_policy_key` <a name="reset_shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyKey"></a>

```python
def reset_shared_access_policy_key() -> None
```

##### `reset_shared_access_policy_name` <a name="reset_shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyName"></a>

```python
def reset_shared_access_policy_name() -> None
```

##### `reset_system_property_columns` <a name="reset_system_property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSystemPropertyColumns"></a>

```python
def reset_system_property_columns() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputServicebusQueue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamAnalyticsOutputServicebusQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamAnalyticsOutputServicebusQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamAnalyticsOutputServicebusQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputServicebusQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference">StreamAnalyticsOutputServicebusQueueSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference">StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationModeInput">authentication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumnsInput">property_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueNameInput">queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serializationInput">serialization_input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespaceInput">servicebus_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKeyInput">shared_access_policy_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyNameInput">shared_access_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobNameInput">stream_analytics_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumnsInput">system_property_columns_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumns">property_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespace">servicebus_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKey">shared_access_policy_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumns">system_property_columns</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serialization"></a>

```python
serialization: StreamAnalyticsOutputServicebusQueueSerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference">StreamAnalyticsOutputServicebusQueueSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeouts"></a>

```python
timeouts: StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference">StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference</a>

---

##### `authentication_mode_input`<sup>Optional</sup> <a name="authentication_mode_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationModeInput"></a>

```python
authentication_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `property_columns_input`<sup>Optional</sup> <a name="property_columns_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumnsInput"></a>

```python
property_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_name_input`<sup>Optional</sup> <a name="queue_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueNameInput"></a>

```python
queue_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `serialization_input`<sup>Optional</sup> <a name="serialization_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serializationInput"></a>

```python
serialization_input: StreamAnalyticsOutputServicebusQueueSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---

##### `servicebus_namespace_input`<sup>Optional</sup> <a name="servicebus_namespace_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespaceInput"></a>

```python
servicebus_namespace_input: str
```

- *Type:* str

---

##### `shared_access_policy_key_input`<sup>Optional</sup> <a name="shared_access_policy_key_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKeyInput"></a>

```python
shared_access_policy_key_input: str
```

- *Type:* str

---

##### `shared_access_policy_name_input`<sup>Optional</sup> <a name="shared_access_policy_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyNameInput"></a>

```python
shared_access_policy_name_input: str
```

- *Type:* str

---

##### `stream_analytics_job_name_input`<sup>Optional</sup> <a name="stream_analytics_job_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobNameInput"></a>

```python
stream_analytics_job_name_input: str
```

- *Type:* str

---

##### `system_property_columns_input`<sup>Optional</sup> <a name="system_property_columns_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumnsInput"></a>

```python
system_property_columns_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamAnalyticsOutputServicebusQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>]

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `property_columns`<sup>Required</sup> <a name="property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumns"></a>

```python
property_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `servicebus_namespace`<sup>Required</sup> <a name="servicebus_namespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespace"></a>

```python
servicebus_namespace: str
```

- *Type:* str

---

##### `shared_access_policy_key`<sup>Required</sup> <a name="shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKey"></a>

```python
shared_access_policy_key: str
```

- *Type:* str

---

##### `shared_access_policy_name`<sup>Required</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyName"></a>

```python
shared_access_policy_name: str
```

- *Type:* str

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

---

##### `system_property_columns`<sup>Required</sup> <a name="system_property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumns"></a>

```python
system_property_columns: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputServicebusQueueConfig <a name="StreamAnalyticsOutputServicebusQueueConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  queue_name: str,
  resource_group_name: str,
  serialization: StreamAnalyticsOutputServicebusQueueSerialization,
  servicebus_namespace: str,
  stream_analytics_job_name: str,
  authentication_mode: str = None,
  id: str = None,
  property_columns: typing.List[str] = None,
  shared_access_policy_key: str = None,
  shared_access_policy_name: str = None,
  system_property_columns: typing.Mapping[str] = None,
  timeouts: StreamAnalyticsOutputServicebusQueueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.queueName">queue_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.servicebusNamespace">servicebus_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.propertyColumns">property_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyKey">shared_access_policy_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.systemPropertyColumns">system_property_columns</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}.

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.serialization"></a>

```python
serialization: StreamAnalyticsOutputServicebusQueueSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#serialization StreamAnalyticsOutputServicebusQueue#serialization}

---

##### `servicebus_namespace`<sup>Required</sup> <a name="servicebus_namespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.servicebusNamespace"></a>

```python
servicebus_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `property_columns`<sup>Optional</sup> <a name="property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.propertyColumns"></a>

```python
property_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}.

---

##### `shared_access_policy_key`<sup>Optional</sup> <a name="shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyKey"></a>

```python
shared_access_policy_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}.

---

##### `shared_access_policy_name`<sup>Optional</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyName"></a>

```python
shared_access_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}.

---

##### `system_property_columns`<sup>Optional</sup> <a name="system_property_columns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.systemPropertyColumns"></a>

```python
system_property_columns: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsOutputServicebusQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#timeouts StreamAnalyticsOutputServicebusQueue#timeouts}

---

### StreamAnalyticsOutputServicebusQueueSerialization <a name="StreamAnalyticsOutputServicebusQueueSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None,
  format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#type StreamAnalyticsOutputServicebusQueue#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#encoding StreamAnalyticsOutputServicebusQueue#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#format StreamAnalyticsOutputServicebusQueue#format}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#type StreamAnalyticsOutputServicebusQueue#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#encoding StreamAnalyticsOutputServicebusQueue#encoding}.

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#format StreamAnalyticsOutputServicebusQueue#format}.

---

### StreamAnalyticsOutputServicebusQueueTimeouts <a name="StreamAnalyticsOutputServicebusQueueTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#create StreamAnalyticsOutputServicebusQueue#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#delete StreamAnalyticsOutputServicebusQueue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#read StreamAnalyticsOutputServicebusQueue#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#update StreamAnalyticsOutputServicebusQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#create StreamAnalyticsOutputServicebusQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#delete StreamAnalyticsOutputServicebusQueue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#read StreamAnalyticsOutputServicebusQueue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.100.0/docs/resources/stream_analytics_output_servicebus_queue#update StreamAnalyticsOutputServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputServicebusQueueSerializationOutputReference <a name="StreamAnalyticsOutputServicebusQueueSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFormat">reset_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.internalValue"></a>

```python
internal_value: StreamAnalyticsOutputServicebusQueueSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---


### StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference <a name="StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_servicebus_queue

streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamAnalyticsOutputServicebusQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>]

---



