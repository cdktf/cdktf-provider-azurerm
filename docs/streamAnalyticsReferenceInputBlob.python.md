# `azurerm_stream_analytics_reference_input_blob`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_reference_input_blob`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob).

# `streamAnalyticsReferenceInputBlob` Submodule <a name="`streamAnalyticsReferenceInputBlob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsReferenceInputBlob <a name="StreamAnalyticsReferenceInputBlob" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob azurerm_stream_analytics_reference_input_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  date_format: str,
  name: str,
  path_pattern: str,
  resource_group_name: str,
  serialization: StreamAnalyticsReferenceInputBlobSerialization,
  storage_account_name: str,
  storage_container_name: str,
  stream_analytics_job_name: str,
  time_format: str,
  authentication_mode: str = None,
  id: str = None,
  storage_account_key: str = None,
  timeouts: StreamAnalyticsReferenceInputBlobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.dateFormat">date_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#date_format StreamAnalyticsReferenceInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#name StreamAnalyticsReferenceInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.pathPattern">path_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#path_pattern StreamAnalyticsReferenceInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#resource_group_name StreamAnalyticsReferenceInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_name StreamAnalyticsReferenceInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.storageContainerName">storage_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_container_name StreamAnalyticsReferenceInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#stream_analytics_job_name StreamAnalyticsReferenceInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.timeFormat">time_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#time_format StreamAnalyticsReferenceInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#authentication_mode StreamAnalyticsReferenceInputBlob#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#id StreamAnalyticsReferenceInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_key StreamAnalyticsReferenceInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.dateFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#date_format StreamAnalyticsReferenceInputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#name StreamAnalyticsReferenceInputBlob#name}.

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.pathPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#path_pattern StreamAnalyticsReferenceInputBlob#path_pattern}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#resource_group_name StreamAnalyticsReferenceInputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#serialization StreamAnalyticsReferenceInputBlob#serialization}

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_name StreamAnalyticsReferenceInputBlob#storage_account_name}.

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.storageContainerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_container_name StreamAnalyticsReferenceInputBlob#storage_container_name}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#stream_analytics_job_name StreamAnalyticsReferenceInputBlob#stream_analytics_job_name}.

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.timeFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#time_format StreamAnalyticsReferenceInputBlob#time_format}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.authenticationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#authentication_mode StreamAnalyticsReferenceInputBlob#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#id StreamAnalyticsReferenceInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_account_key`<sup>Optional</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.storageAccountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_key StreamAnalyticsReferenceInputBlob#storage_account_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#timeouts StreamAnalyticsReferenceInputBlob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization">put_serialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetAuthenticationMode">reset_authentication_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetStorageAccountKey">reset_storage_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_serialization` <a name="put_serialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization"></a>

```python
def put_serialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#type StreamAnalyticsReferenceInputBlob#type}.

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization.parameter.encoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#encoding StreamAnalyticsReferenceInputBlob#encoding}.

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization.parameter.fieldDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#field_delimiter StreamAnalyticsReferenceInputBlob#field_delimiter}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#create StreamAnalyticsReferenceInputBlob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#delete StreamAnalyticsReferenceInputBlob#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#read StreamAnalyticsReferenceInputBlob#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#update StreamAnalyticsReferenceInputBlob#update}.

---

##### `reset_authentication_mode` <a name="reset_authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetAuthenticationMode"></a>

```python
def reset_authentication_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_account_key` <a name="reset_storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetStorageAccountKey"></a>

```python
def reset_storage_account_key() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference">StreamAnalyticsReferenceInputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference">StreamAnalyticsReferenceInputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationModeInput">authentication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPatternInput">path_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serializationInput">serialization_input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerNameInput">storage_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobNameInput">stream_analytics_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPattern">path_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerName">storage_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serialization"></a>

```python
serialization: StreamAnalyticsReferenceInputBlobSerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference">StreamAnalyticsReferenceInputBlobSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeouts"></a>

```python
timeouts: StreamAnalyticsReferenceInputBlobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference">StreamAnalyticsReferenceInputBlobTimeoutsOutputReference</a>

---

##### `authentication_mode_input`<sup>Optional</sup> <a name="authentication_mode_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationModeInput"></a>

```python
authentication_mode_input: str
```

- *Type:* str

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_pattern_input`<sup>Optional</sup> <a name="path_pattern_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPatternInput"></a>

```python
path_pattern_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `serialization_input`<sup>Optional</sup> <a name="serialization_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serializationInput"></a>

```python
serialization_input: StreamAnalyticsReferenceInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `storage_container_name_input`<sup>Optional</sup> <a name="storage_container_name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerNameInput"></a>

```python
storage_container_name_input: str
```

- *Type:* str

---

##### `stream_analytics_job_name_input`<sup>Optional</sup> <a name="stream_analytics_job_name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobNameInput"></a>

```python
stream_analytics_job_name_input: str
```

- *Type:* str

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamAnalyticsReferenceInputBlobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>]

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPattern"></a>

```python
path_pattern: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerName"></a>

```python
storage_container_name: str
```

- *Type:* str

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsReferenceInputBlobConfig <a name="StreamAnalyticsReferenceInputBlobConfig" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  date_format: str,
  name: str,
  path_pattern: str,
  resource_group_name: str,
  serialization: StreamAnalyticsReferenceInputBlobSerialization,
  storage_account_name: str,
  storage_container_name: str,
  stream_analytics_job_name: str,
  time_format: str,
  authentication_mode: str = None,
  id: str = None,
  storage_account_key: str = None,
  timeouts: StreamAnalyticsReferenceInputBlobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dateFormat">date_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#date_format StreamAnalyticsReferenceInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#name StreamAnalyticsReferenceInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.pathPattern">path_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#path_pattern StreamAnalyticsReferenceInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#resource_group_name StreamAnalyticsReferenceInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_name StreamAnalyticsReferenceInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageContainerName">storage_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_container_name StreamAnalyticsReferenceInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#stream_analytics_job_name StreamAnalyticsReferenceInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeFormat">time_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#time_format StreamAnalyticsReferenceInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#authentication_mode StreamAnalyticsReferenceInputBlob#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#id StreamAnalyticsReferenceInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_key StreamAnalyticsReferenceInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#date_format StreamAnalyticsReferenceInputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#name StreamAnalyticsReferenceInputBlob#name}.

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.pathPattern"></a>

```python
path_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#path_pattern StreamAnalyticsReferenceInputBlob#path_pattern}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#resource_group_name StreamAnalyticsReferenceInputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.serialization"></a>

```python
serialization: StreamAnalyticsReferenceInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#serialization StreamAnalyticsReferenceInputBlob#serialization}

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_name StreamAnalyticsReferenceInputBlob#storage_account_name}.

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageContainerName"></a>

```python
storage_container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_container_name StreamAnalyticsReferenceInputBlob#storage_container_name}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#stream_analytics_job_name StreamAnalyticsReferenceInputBlob#stream_analytics_job_name}.

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#time_format StreamAnalyticsReferenceInputBlob#time_format}.

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#authentication_mode StreamAnalyticsReferenceInputBlob#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#id StreamAnalyticsReferenceInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_account_key`<sup>Optional</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#storage_account_key StreamAnalyticsReferenceInputBlob#storage_account_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsReferenceInputBlobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#timeouts StreamAnalyticsReferenceInputBlob#timeouts}

---

### StreamAnalyticsReferenceInputBlobSerialization <a name="StreamAnalyticsReferenceInputBlobSerialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#type StreamAnalyticsReferenceInputBlob#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#encoding StreamAnalyticsReferenceInputBlob#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#field_delimiter StreamAnalyticsReferenceInputBlob#field_delimiter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#type StreamAnalyticsReferenceInputBlob#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#encoding StreamAnalyticsReferenceInputBlob#encoding}.

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#field_delimiter StreamAnalyticsReferenceInputBlob#field_delimiter}.

---

### StreamAnalyticsReferenceInputBlobTimeouts <a name="StreamAnalyticsReferenceInputBlobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#create StreamAnalyticsReferenceInputBlob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#delete StreamAnalyticsReferenceInputBlob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#read StreamAnalyticsReferenceInputBlob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#update StreamAnalyticsReferenceInputBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#create StreamAnalyticsReferenceInputBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#delete StreamAnalyticsReferenceInputBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#read StreamAnalyticsReferenceInputBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/stream_analytics_reference_input_blob#update StreamAnalyticsReferenceInputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsReferenceInputBlobSerializationOutputReference <a name="StreamAnalyticsReferenceInputBlobSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.internalValue"></a>

```python
internal_value: StreamAnalyticsReferenceInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

---


### StreamAnalyticsReferenceInputBlobTimeoutsOutputReference <a name="StreamAnalyticsReferenceInputBlobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_blob

streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamAnalyticsReferenceInputBlobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>]

---



