# `azurerm_iothub_endpoint_storage_container`

Refer to the Terraform Registory for docs: [`azurerm_iothub_endpoint_storage_container`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container).

# `iothubEndpointStorageContainer` Submodule <a name="`iothubEndpointStorageContainer` Submodule" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointStorageContainer <a name="IothubEndpointStorageContainer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container azurerm_iothub_endpoint_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_storage_container

iothubEndpointStorageContainer.IothubEndpointStorageContainer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  iothub_id: str,
  name: str,
  resource_group_name: str,
  authentication_type: str = None,
  batch_frequency_in_seconds: typing.Union[int, float] = None,
  connection_string: str = None,
  encoding: str = None,
  endpoint_uri: str = None,
  file_name_format: str = None,
  id: str = None,
  identity_id: str = None,
  max_chunk_size_in_bytes: typing.Union[int, float] = None,
  timeouts: IothubEndpointStorageContainerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.batchFrequencyInSeconds">batch_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.endpointUri">endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.fileNameFormat">file_name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.maxChunkSizeInBytes">max_chunk_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}.

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.iothubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}.

---

##### `batch_frequency_in_seconds`<sup>Optional</sup> <a name="batch_frequency_in_seconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.batchFrequencyInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.encoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}.

---

##### `endpoint_uri`<sup>Optional</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.endpointUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}.

---

##### `file_name_format`<sup>Optional</sup> <a name="file_name_format" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.fileNameFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.identityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}.

---

##### `max_chunk_size_in_bytes`<sup>Optional</sup> <a name="max_chunk_size_in_bytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.maxChunkSizeInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#timeouts IothubEndpointStorageContainer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds">reset_batch_frequency_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri">reset_endpoint_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat">reset_file_name_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes">reset_max_chunk_size_in_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}.

---

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_batch_frequency_in_seconds` <a name="reset_batch_frequency_in_seconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds"></a>

```python
def reset_batch_frequency_in_seconds() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_endpoint_uri` <a name="reset_endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri"></a>

```python
def reset_endpoint_uri() -> None
```

##### `reset_file_name_format` <a name="reset_file_name_format" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat"></a>

```python
def reset_file_name_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_max_chunk_size_in_bytes` <a name="reset_max_chunk_size_in_bytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes"></a>

```python
def reset_max_chunk_size_in_bytes() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_storage_container

iothubEndpointStorageContainer.IothubEndpointStorageContainer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_storage_container

iothubEndpointStorageContainer.IothubEndpointStorageContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_storage_container

iothubEndpointStorageContainer.IothubEndpointStorageContainer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput">batch_frequency_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput">endpoint_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput">file_name_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput">iothub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput">max_chunk_size_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds">batch_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat">file_name_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId">iothub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes">max_chunk_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts"></a>

```python
timeouts: IothubEndpointStorageContainerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `batch_frequency_in_seconds_input`<sup>Optional</sup> <a name="batch_frequency_in_seconds_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput"></a>

```python
batch_frequency_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `endpoint_uri_input`<sup>Optional</sup> <a name="endpoint_uri_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput"></a>

```python
endpoint_uri_input: str
```

- *Type:* str

---

##### `file_name_format_input`<sup>Optional</sup> <a name="file_name_format_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput"></a>

```python
file_name_format_input: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_id_input`<sup>Optional</sup> <a name="iothub_id_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput"></a>

```python
iothub_id_input: str
```

- *Type:* str

---

##### `max_chunk_size_in_bytes_input`<sup>Optional</sup> <a name="max_chunk_size_in_bytes_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput"></a>

```python
max_chunk_size_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IothubEndpointStorageContainerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `batch_frequency_in_seconds`<sup>Required</sup> <a name="batch_frequency_in_seconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds"></a>

```python
batch_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `file_name_format`<sup>Required</sup> <a name="file_name_format" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat"></a>

```python
file_name_format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

---

##### `max_chunk_size_in_bytes`<sup>Required</sup> <a name="max_chunk_size_in_bytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes"></a>

```python
max_chunk_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointStorageContainerConfig <a name="IothubEndpointStorageContainerConfig" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_storage_container

iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  iothub_id: str,
  name: str,
  resource_group_name: str,
  authentication_type: str = None,
  batch_frequency_in_seconds: typing.Union[int, float] = None,
  connection_string: str = None,
  encoding: str = None,
  endpoint_uri: str = None,
  file_name_format: str = None,
  id: str = None,
  identity_id: str = None,
  max_chunk_size_in_bytes: typing.Union[int, float] = None,
  timeouts: IothubEndpointStorageContainerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds">batch_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat">file_name_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes">max_chunk_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}.

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}.

---

##### `batch_frequency_in_seconds`<sup>Optional</sup> <a name="batch_frequency_in_seconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds"></a>

```python
batch_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}.

---

##### `endpoint_uri`<sup>Optional</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}.

---

##### `file_name_format`<sup>Optional</sup> <a name="file_name_format" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat"></a>

```python
file_name_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}.

---

##### `max_chunk_size_in_bytes`<sup>Optional</sup> <a name="max_chunk_size_in_bytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes"></a>

```python
max_chunk_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts"></a>

```python
timeouts: IothubEndpointStorageContainerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#timeouts IothubEndpointStorageContainer#timeouts}

---

### IothubEndpointStorageContainerTimeouts <a name="IothubEndpointStorageContainerTimeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_storage_container

iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointStorageContainerTimeoutsOutputReference <a name="IothubEndpointStorageContainerTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_storage_container

iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IothubEndpointStorageContainerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>]

---



