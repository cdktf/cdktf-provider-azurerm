# `azurerm_stream_analytics_stream_input_blob`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_stream_input_blob`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob).

# `streamAnalyticsStreamInputBlob` Submodule <a name="`streamAnalyticsStreamInputBlob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputBlob <a name="StreamAnalyticsStreamInputBlob" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob azurerm_stream_analytics_stream_input_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob(
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
  serialization: StreamAnalyticsStreamInputBlobSerialization,
  storage_account_key: str,
  storage_account_name: str,
  storage_container_name: str,
  stream_analytics_job_name: str,
  time_format: str,
  id: str = None,
  timeouts: StreamAnalyticsStreamInputBlobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dateFormat">date_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.pathPattern">path_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageContainerName">storage_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeFormat">time_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dateFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}.

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.pathPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#serialization StreamAnalyticsStreamInputBlob#serialization}

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}.

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageContainerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}.

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#timeouts StreamAnalyticsStreamInputBlob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization">put_serialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_serialization` <a name="put_serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization"></a>

```python
def put_serialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#type StreamAnalyticsStreamInputBlob#type}.

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization.parameter.encoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#encoding StreamAnalyticsStreamInputBlob#encoding}.

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization.parameter.fieldDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#create StreamAnalyticsStreamInputBlob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#delete StreamAnalyticsStreamInputBlob#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#read StreamAnalyticsStreamInputBlob#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#update StreamAnalyticsStreamInputBlob#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference">StreamAnalyticsStreamInputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference">StreamAnalyticsStreamInputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormatInput">date_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPatternInput">path_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serializationInput">serialization_input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerNameInput">storage_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobNameInput">stream_analytics_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormatInput">time_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormat">date_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPattern">path_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerName">storage_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormat">time_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serialization"></a>

```python
serialization: StreamAnalyticsStreamInputBlobSerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference">StreamAnalyticsStreamInputBlobSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeouts"></a>

```python
timeouts: StreamAnalyticsStreamInputBlobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference">StreamAnalyticsStreamInputBlobTimeoutsOutputReference</a>

---

##### `date_format_input`<sup>Optional</sup> <a name="date_format_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormatInput"></a>

```python
date_format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_pattern_input`<sup>Optional</sup> <a name="path_pattern_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPatternInput"></a>

```python
path_pattern_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `serialization_input`<sup>Optional</sup> <a name="serialization_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serializationInput"></a>

```python
serialization_input: StreamAnalyticsStreamInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `storage_container_name_input`<sup>Optional</sup> <a name="storage_container_name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerNameInput"></a>

```python
storage_container_name_input: str
```

- *Type:* str

---

##### `stream_analytics_job_name_input`<sup>Optional</sup> <a name="stream_analytics_job_name_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobNameInput"></a>

```python
stream_analytics_job_name_input: str
```

- *Type:* str

---

##### `time_format_input`<sup>Optional</sup> <a name="time_format_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormatInput"></a>

```python
time_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[StreamAnalyticsStreamInputBlobTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>, cdktf.IResolvable]

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPattern"></a>

```python
path_pattern: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerName"></a>

```python
storage_container_name: str
```

- *Type:* str

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputBlobConfig <a name="StreamAnalyticsStreamInputBlobConfig" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig(
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
  serialization: StreamAnalyticsStreamInputBlobSerialization,
  storage_account_key: str,
  storage_account_name: str,
  storage_container_name: str,
  stream_analytics_job_name: str,
  time_format: str,
  id: str = None,
  timeouts: StreamAnalyticsStreamInputBlobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dateFormat">date_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.pathPattern">path_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageContainerName">storage_container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeFormat">time_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `date_format`<sup>Required</sup> <a name="date_format" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dateFormat"></a>

```python
date_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}.

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.pathPattern"></a>

```python
path_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.serialization"></a>

```python
serialization: StreamAnalyticsStreamInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#serialization StreamAnalyticsStreamInputBlob#serialization}

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}.

---

##### `storage_container_name`<sup>Required</sup> <a name="storage_container_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageContainerName"></a>

```python
storage_container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}.

---

##### `time_format`<sup>Required</sup> <a name="time_format" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeFormat"></a>

```python
time_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsStreamInputBlobTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#timeouts StreamAnalyticsStreamInputBlob#timeouts}

---

### StreamAnalyticsStreamInputBlobSerialization <a name="StreamAnalyticsStreamInputBlobSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization(
  type: str,
  encoding: str = None,
  field_delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#type StreamAnalyticsStreamInputBlob#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#encoding StreamAnalyticsStreamInputBlob#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#type StreamAnalyticsStreamInputBlob#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#encoding StreamAnalyticsStreamInputBlob#encoding}.

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}.

---

### StreamAnalyticsStreamInputBlobTimeouts <a name="StreamAnalyticsStreamInputBlobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#create StreamAnalyticsStreamInputBlob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#delete StreamAnalyticsStreamInputBlob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#read StreamAnalyticsStreamInputBlob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#update StreamAnalyticsStreamInputBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#create StreamAnalyticsStreamInputBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#delete StreamAnalyticsStreamInputBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#read StreamAnalyticsStreamInputBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/stream_analytics_stream_input_blob#update StreamAnalyticsStreamInputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputBlobSerializationOutputReference <a name="StreamAnalyticsStreamInputBlobSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.internalValue"></a>

```python
internal_value: StreamAnalyticsStreamInputBlobSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---


### StreamAnalyticsStreamInputBlobTimeoutsOutputReference <a name="StreamAnalyticsStreamInputBlobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_stream_input_blob

streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[StreamAnalyticsStreamInputBlobTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>, cdktf.IResolvable]

---



