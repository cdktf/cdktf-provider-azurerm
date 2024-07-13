# `streamAnalyticsStreamInputEventhubV2` Submodule <a name="`streamAnalyticsStreamInputEventhubV2` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputEventhubV2 <a name="StreamAnalyticsStreamInputEventhubV2" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2 azurerm_stream_analytics_stream_input_eventhub_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_name: str,
  name: str,
  serialization: StreamAnalyticsStreamInputEventhubV2Serialization,
  servicebus_namespace: str,
  stream_analytics_job_id: str,
  authentication_mode: str = None,
  eventhub_consumer_group_name: str = None,
  id: str = None,
  partition_key: str = None,
  shared_access_policy_key: str = None,
  shared_access_policy_name: str = None,
  timeouts: StreamAnalyticsStreamInputEventhubV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.servicebusNamespace">servicebus_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubConsumerGroupName">eventhub_consumer_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.partitionKey">partition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyKey">shared_access_policy_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#serialization StreamAnalyticsStreamInputEventhubV2#serialization}

---

##### `servicebus_namespace`<sup>Required</sup> <a name="servicebus_namespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.servicebusNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}.

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.streamAnalyticsJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.authenticationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}.

---

##### `eventhub_consumer_group_name`<sup>Optional</sup> <a name="eventhub_consumer_group_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.eventhubConsumerGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.partitionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}.

---

##### `shared_access_policy_key`<sup>Optional</sup> <a name="shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}.

---

##### `shared_access_policy_name`<sup>Optional</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.sharedAccessPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#timeouts StreamAnalyticsStreamInputEventhubV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization">put_serialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetAuthenticationMode">reset_authentication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetEventhubConsumerGroupName">reset_eventhub_consumer_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetPartitionKey">reset_partition_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyKey">reset_shared_access_policy_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyName">reset_shared_access_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_serialization` <a name="put_serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization"></a>

```python
def put_serialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#type StreamAnalyticsStreamInputEventhubV2#type}.

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization.parameter.encoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#encoding StreamAnalyticsStreamInputEventhubV2#encoding}.

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization.parameter.fieldDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#field_delimiter StreamAnalyticsStreamInputEventhubV2#field_delimiter}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#create StreamAnalyticsStreamInputEventhubV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#delete StreamAnalyticsStreamInputEventhubV2#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#read StreamAnalyticsStreamInputEventhubV2#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#update StreamAnalyticsStreamInputEventhubV2#update}.

---

##### `reset_authentication_mode` <a name="reset_authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetAuthenticationMode"></a>

```python
def reset_authentication_mode() -> None
```

##### `reset_eventhub_consumer_group_name` <a name="reset_eventhub_consumer_group_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetEventhubConsumerGroupName"></a>

```python
def reset_eventhub_consumer_group_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_partition_key` <a name="reset_partition_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetPartitionKey"></a>

```python
def reset_partition_key() -> None
```

##### `reset_shared_access_policy_key` <a name="reset_shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyKey"></a>

```python
def reset_shared_access_policy_key() -> None
```

##### `reset_shared_access_policy_name` <a name="reset_shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyName"></a>

```python
def reset_shared_access_policy_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhubV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhubV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamAnalyticsStreamInputEventhubV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamAnalyticsStreamInputEventhubV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsStreamInputEventhubV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference">StreamAnalyticsStreamInputEventhubV2SerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference">StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationModeInput">authentication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupNameInput">eventhub_consumer_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubNameInput">eventhub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKeyInput">partition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serializationInput">serialization_input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespaceInput">servicebus_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKeyInput">shared_access_policy_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyNameInput">shared_access_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobIdInput">stream_analytics_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupName">eventhub_consumer_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubName">eventhub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKey">partition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespace">servicebus_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKey">shared_access_policy_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serialization"></a>

```python
serialization: StreamAnalyticsStreamInputEventhubV2SerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference">StreamAnalyticsStreamInputEventhubV2SerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeouts"></a>

```python
timeouts: StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference">StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference</a>

---

##### `authentication_mode_input`<sup>Optional</sup> <a name="authentication_mode_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationModeInput"></a>

```python
authentication_mode_input: str
```

- *Type:* str

---

##### `eventhub_consumer_group_name_input`<sup>Optional</sup> <a name="eventhub_consumer_group_name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupNameInput"></a>

```python
eventhub_consumer_group_name_input: str
```

- *Type:* str

---

##### `eventhub_name_input`<sup>Optional</sup> <a name="eventhub_name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubNameInput"></a>

```python
eventhub_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_key_input`<sup>Optional</sup> <a name="partition_key_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKeyInput"></a>

```python
partition_key_input: str
```

- *Type:* str

---

##### `serialization_input`<sup>Optional</sup> <a name="serialization_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serializationInput"></a>

```python
serialization_input: StreamAnalyticsStreamInputEventhubV2Serialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---

##### `servicebus_namespace_input`<sup>Optional</sup> <a name="servicebus_namespace_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespaceInput"></a>

```python
servicebus_namespace_input: str
```

- *Type:* str

---

##### `shared_access_policy_key_input`<sup>Optional</sup> <a name="shared_access_policy_key_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKeyInput"></a>

```python
shared_access_policy_key_input: str
```

- *Type:* str

---

##### `shared_access_policy_name_input`<sup>Optional</sup> <a name="shared_access_policy_name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyNameInput"></a>

```python
shared_access_policy_name_input: str
```

- *Type:* str

---

##### `stream_analytics_job_id_input`<sup>Optional</sup> <a name="stream_analytics_job_id_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobIdInput"></a>

```python
stream_analytics_job_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamAnalyticsStreamInputEventhubV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>]

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

---

##### `eventhub_consumer_group_name`<sup>Required</sup> <a name="eventhub_consumer_group_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupName"></a>

```python
eventhub_consumer_group_name: str
```

- *Type:* str

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

---

##### `servicebus_namespace`<sup>Required</sup> <a name="servicebus_namespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespace"></a>

```python
servicebus_namespace: str
```

- *Type:* str

---

##### `shared_access_policy_key`<sup>Required</sup> <a name="shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKey"></a>

```python
shared_access_policy_key: str
```

- *Type:* str

---

##### `shared_access_policy_name`<sup>Required</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyName"></a>

```python
shared_access_policy_name: str
```

- *Type:* str

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobId"></a>

```python
stream_analytics_job_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputEventhubV2Config <a name="StreamAnalyticsStreamInputEventhubV2Config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_name: str,
  name: str,
  serialization: StreamAnalyticsStreamInputEventhubV2Serialization,
  servicebus_namespace: str,
  stream_analytics_job_id: str,
  authentication_mode: str = None,
  eventhub_consumer_group_name: str = None,
  id: str = None,
  partition_key: str = None,
  shared_access_policy_key: str = None,
  shared_access_policy_name: str = None,
  timeouts: StreamAnalyticsStreamInputEventhubV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.servicebusNamespace">servicebus_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubConsumerGroupName">eventhub_consumer_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.partitionKey">partition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyKey">shared_access_policy_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.serialization"></a>

```python
serialization: StreamAnalyticsStreamInputEventhubV2Serialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#serialization StreamAnalyticsStreamInputEventhubV2#serialization}

---

##### `servicebus_namespace`<sup>Required</sup> <a name="servicebus_namespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.servicebusNamespace"></a>

```python
servicebus_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}.

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.streamAnalyticsJobId"></a>

```python
stream_analytics_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}.

---

##### `eventhub_consumer_group_name`<sup>Optional</sup> <a name="eventhub_consumer_group_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubConsumerGroupName"></a>

```python
eventhub_consumer_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}.

---

##### `shared_access_policy_key`<sup>Optional</sup> <a name="shared_access_policy_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyKey"></a>

```python
shared_access_policy_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}.

---

##### `shared_access_policy_name`<sup>Optional</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyName"></a>

```python
shared_access_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.timeouts"></a>

```python
timeouts: StreamAnalyticsStreamInputEventhubV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#timeouts StreamAnalyticsStreamInputEventhubV2#timeouts}

---

### StreamAnalyticsStreamInputEventhubV2Serialization <a name="StreamAnalyticsStreamInputEventhubV2Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#type StreamAnalyticsStreamInputEventhubV2#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#encoding StreamAnalyticsStreamInputEventhubV2#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#field_delimiter StreamAnalyticsStreamInputEventhubV2#field_delimiter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#type StreamAnalyticsStreamInputEventhubV2#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#encoding StreamAnalyticsStreamInputEventhubV2#encoding}.

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#field_delimiter StreamAnalyticsStreamInputEventhubV2#field_delimiter}.

---

### StreamAnalyticsStreamInputEventhubV2Timeouts <a name="StreamAnalyticsStreamInputEventhubV2Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#create StreamAnalyticsStreamInputEventhubV2#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#delete StreamAnalyticsStreamInputEventhubV2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#read StreamAnalyticsStreamInputEventhubV2#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#update StreamAnalyticsStreamInputEventhubV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#create StreamAnalyticsStreamInputEventhubV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#delete StreamAnalyticsStreamInputEventhubV2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#read StreamAnalyticsStreamInputEventhubV2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/stream_analytics_stream_input_eventhub_v2#update StreamAnalyticsStreamInputEventhubV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputEventhubV2SerializationOutputReference <a name="StreamAnalyticsStreamInputEventhubV2SerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.internalValue"></a>

```python
internal_value: StreamAnalyticsStreamInputEventhubV2Serialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---


### StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference <a name="StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_eventhub_v2

streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamAnalyticsStreamInputEventhubV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>]

---



