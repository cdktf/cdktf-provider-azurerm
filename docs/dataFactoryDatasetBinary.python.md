# `dataFactoryDatasetBinary` Submodule <a name="`dataFactoryDatasetBinary` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetBinary <a name="DataFactoryDatasetBinary" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary azurerm_data_factory_dataset_binary}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinary(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  linked_service_name: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  azure_blob_storage_location: DataFactoryDatasetBinaryAzureBlobStorageLocation = None,
  compression: DataFactoryDatasetBinaryCompression = None,
  description: str = None,
  folder: str = None,
  http_server_location: DataFactoryDatasetBinaryHttpServerLocation = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  sftp_server_location: DataFactoryDatasetBinarySftpServerLocation = None,
  timeouts: DataFactoryDatasetBinaryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#data_factory_id DataFactoryDatasetBinary#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#linked_service_name DataFactoryDatasetBinary#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#name DataFactoryDatasetBinary#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#additional_properties DataFactoryDatasetBinary#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#annotations DataFactoryDatasetBinary#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.compression">compression</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a></code> | compression block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#description DataFactoryDatasetBinary#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#folder DataFactoryDatasetBinary#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#id DataFactoryDatasetBinary#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#parameters DataFactoryDatasetBinary#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.sftpServerLocation">sftp_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a></code> | sftp_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#data_factory_id DataFactoryDatasetBinary#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#linked_service_name DataFactoryDatasetBinary#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#name DataFactoryDatasetBinary#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#additional_properties DataFactoryDatasetBinary#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#annotations DataFactoryDatasetBinary#annotations}.

---

##### `azure_blob_storage_location`<sup>Optional</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.azureBlobStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#azure_blob_storage_location DataFactoryDatasetBinary#azure_blob_storage_location}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.compression"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

compression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#compression DataFactoryDatasetBinary#compression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#description DataFactoryDatasetBinary#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#folder DataFactoryDatasetBinary#folder}.

---

##### `http_server_location`<sup>Optional</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.httpServerLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#http_server_location DataFactoryDatasetBinary#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#id DataFactoryDatasetBinary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#parameters DataFactoryDatasetBinary#parameters}.

---

##### `sftp_server_location`<sup>Optional</sup> <a name="sftp_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.sftpServerLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

sftp_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#sftp_server_location DataFactoryDatasetBinary#sftp_server_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#timeouts DataFactoryDatasetBinary#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation">put_azure_blob_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putCompression">put_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation">put_http_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation">put_sftp_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAzureBlobStorageLocation">reset_azure_blob_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetHttpServerLocation">reset_http_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetSftpServerLocation">reset_sftp_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azure_blob_storage_location` <a name="put_azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation"></a>

```python
def put_azure_blob_storage_location(
  container: str,
  dynamic_container_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None,
  filename: str = None,
  path: str = None
) -> None
```

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation.parameter.container"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#container DataFactoryDatasetBinary#container}.

---

###### `dynamic_container_enabled`<sup>Optional</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation.parameter.dynamicContainerEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_container_enabled DataFactoryDatasetBinary#dynamic_container_enabled}.

---

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putAzureBlobStorageLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

##### `put_compression` <a name="put_compression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putCompression"></a>

```python
def put_compression(
  type: str,
  level: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putCompression.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#type DataFactoryDatasetBinary#type}.

---

###### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putCompression.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#level DataFactoryDatasetBinary#level}.

---

##### `put_http_server_location` <a name="put_http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation"></a>

```python
def put_http_server_location(
  filename: str,
  path: str,
  relative_url: str,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

###### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation.parameter.relativeUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#relative_url DataFactoryDatasetBinary#relative_url}.

---

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putHttpServerLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

##### `put_sftp_server_location` <a name="put_sftp_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation"></a>

```python
def put_sftp_server_location(
  filename: str,
  path: str,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putSftpServerLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#create DataFactoryDatasetBinary#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#delete DataFactoryDatasetBinary#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#read DataFactoryDatasetBinary#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#update DataFactoryDatasetBinary#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_azure_blob_storage_location` <a name="reset_azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetAzureBlobStorageLocation"></a>

```python
def reset_azure_blob_storage_location() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_http_server_location` <a name="reset_http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetHttpServerLocation"></a>

```python
def reset_http_server_location() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_sftp_server_location` <a name="reset_sftp_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetSftpServerLocation"></a>

```python
def reset_sftp_server_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryDatasetBinary resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryDatasetBinary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryDatasetBinary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryDatasetBinary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetBinary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference">DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compression">compression</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference">DataFactoryDatasetBinaryCompressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference">DataFactoryDatasetBinaryHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocation">sftp_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference">DataFactoryDatasetBinarySftpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference">DataFactoryDatasetBinaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocationInput">azure_blob_storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compressionInput">compression_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocationInput">http_server_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocationInput">sftp_server_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_blob_storage_location`<sup>Required</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocation"></a>

```python
azure_blob_storage_location: DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference">DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference</a>

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compression"></a>

```python
compression: DataFactoryDatasetBinaryCompressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference">DataFactoryDatasetBinaryCompressionOutputReference</a>

---

##### `http_server_location`<sup>Required</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocation"></a>

```python
http_server_location: DataFactoryDatasetBinaryHttpServerLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference">DataFactoryDatasetBinaryHttpServerLocationOutputReference</a>

---

##### `sftp_server_location`<sup>Required</sup> <a name="sftp_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocation"></a>

```python
sftp_server_location: DataFactoryDatasetBinarySftpServerLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference">DataFactoryDatasetBinarySftpServerLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetBinaryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference">DataFactoryDatasetBinaryTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `azure_blob_storage_location_input`<sup>Optional</sup> <a name="azure_blob_storage_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.azureBlobStorageLocationInput"></a>

```python
azure_blob_storage_location_input: DataFactoryDatasetBinaryAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.compressionInput"></a>

```python
compression_input: DataFactoryDatasetBinaryCompression
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `http_server_location_input`<sup>Optional</sup> <a name="http_server_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.httpServerLocationInput"></a>

```python
http_server_location_input: DataFactoryDatasetBinaryHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sftp_server_location_input`<sup>Optional</sup> <a name="sftp_server_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.sftpServerLocationInput"></a>

```python
sftp_server_location_input: DataFactoryDatasetBinarySftpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryDatasetBinaryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetBinaryAzureBlobStorageLocation <a name="DataFactoryDatasetBinaryAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation(
  container: str,
  dynamic_container_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None,
  filename: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.container">container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#container DataFactoryDatasetBinary#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicContainerEnabled">dynamic_container_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_container_enabled DataFactoryDatasetBinary#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.container"></a>

```python
container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#container DataFactoryDatasetBinary#container}.

---

##### `dynamic_container_enabled`<sup>Optional</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```python
dynamic_container_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_container_enabled DataFactoryDatasetBinary#dynamic_container_enabled}.

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

### DataFactoryDatasetBinaryCompression <a name="DataFactoryDatasetBinaryCompression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression(
  type: str,
  level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#type DataFactoryDatasetBinary#type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#level DataFactoryDatasetBinary#level}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#type DataFactoryDatasetBinary#type}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#level DataFactoryDatasetBinary#level}.

---

### DataFactoryDatasetBinaryConfig <a name="DataFactoryDatasetBinaryConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  linked_service_name: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  azure_blob_storage_location: DataFactoryDatasetBinaryAzureBlobStorageLocation = None,
  compression: DataFactoryDatasetBinaryCompression = None,
  description: str = None,
  folder: str = None,
  http_server_location: DataFactoryDatasetBinaryHttpServerLocation = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  sftp_server_location: DataFactoryDatasetBinarySftpServerLocation = None,
  timeouts: DataFactoryDatasetBinaryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#data_factory_id DataFactoryDatasetBinary#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#linked_service_name DataFactoryDatasetBinary#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#name DataFactoryDatasetBinary#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#additional_properties DataFactoryDatasetBinary#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#annotations DataFactoryDatasetBinary#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.compression">compression</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a></code> | compression block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#description DataFactoryDatasetBinary#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#folder DataFactoryDatasetBinary#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#id DataFactoryDatasetBinary#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#parameters DataFactoryDatasetBinary#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.sftpServerLocation">sftp_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a></code> | sftp_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#data_factory_id DataFactoryDatasetBinary#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#linked_service_name DataFactoryDatasetBinary#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#name DataFactoryDatasetBinary#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#additional_properties DataFactoryDatasetBinary#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#annotations DataFactoryDatasetBinary#annotations}.

---

##### `azure_blob_storage_location`<sup>Optional</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.azureBlobStorageLocation"></a>

```python
azure_blob_storage_location: DataFactoryDatasetBinaryAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#azure_blob_storage_location DataFactoryDatasetBinary#azure_blob_storage_location}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.compression"></a>

```python
compression: DataFactoryDatasetBinaryCompression
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

compression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#compression DataFactoryDatasetBinary#compression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#description DataFactoryDatasetBinary#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#folder DataFactoryDatasetBinary#folder}.

---

##### `http_server_location`<sup>Optional</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.httpServerLocation"></a>

```python
http_server_location: DataFactoryDatasetBinaryHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#http_server_location DataFactoryDatasetBinary#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#id DataFactoryDatasetBinary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#parameters DataFactoryDatasetBinary#parameters}.

---

##### `sftp_server_location`<sup>Optional</sup> <a name="sftp_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.sftpServerLocation"></a>

```python
sftp_server_location: DataFactoryDatasetBinarySftpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

sftp_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#sftp_server_location DataFactoryDatasetBinary#sftp_server_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryConfig.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetBinaryTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#timeouts DataFactoryDatasetBinary#timeouts}

---

### DataFactoryDatasetBinaryHttpServerLocation <a name="DataFactoryDatasetBinaryHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation(
  filename: str,
  path: str,
  relative_url: str,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.relativeUrl">relative_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#relative_url DataFactoryDatasetBinary#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

##### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.relativeUrl"></a>

```python
relative_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#relative_url DataFactoryDatasetBinary#relative_url}.

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

### DataFactoryDatasetBinarySftpServerLocation <a name="DataFactoryDatasetBinarySftpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation(
  filename: str,
  path: str,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#filename DataFactoryDatasetBinary#filename}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#path DataFactoryDatasetBinary#path}.

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_filename_enabled DataFactoryDatasetBinary#dynamic_filename_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#dynamic_path_enabled DataFactoryDatasetBinary#dynamic_path_enabled}.

---

### DataFactoryDatasetBinaryTimeouts <a name="DataFactoryDatasetBinaryTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#create DataFactoryDatasetBinary#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#delete DataFactoryDatasetBinary#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#read DataFactoryDatasetBinary#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#update DataFactoryDatasetBinary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#create DataFactoryDatasetBinary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#delete DataFactoryDatasetBinary#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#read DataFactoryDatasetBinary#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_dataset_binary#update DataFactoryDatasetBinary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">reset_dynamic_container_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_container_enabled` <a name="reset_dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```python
def reset_dynamic_container_enabled() -> None
```

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">dynamic_container_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">dynamic_container_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `dynamic_container_enabled_input`<sup>Optional</sup> <a name="dynamic_container_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```python
dynamic_container_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `dynamic_container_enabled`<sup>Required</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```python
dynamic_container_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetBinaryAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryAzureBlobStorageLocation">DataFactoryDatasetBinaryAzureBlobStorageLocation</a>

---


### DataFactoryDatasetBinaryCompressionOutputReference <a name="DataFactoryDatasetBinaryCompressionOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resetLevel">reset_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_level` <a name="reset_level" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompressionOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetBinaryCompression
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryCompression">DataFactoryDatasetBinaryCompression</a>

---


### DataFactoryDatasetBinaryHttpServerLocationOutputReference <a name="DataFactoryDatasetBinaryHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrlInput">relative_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrl">relative_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `relative_url_input`<sup>Optional</sup> <a name="relative_url_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```python
relative_url_input: str
```

- *Type:* str

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.relativeUrl"></a>

```python
relative_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetBinaryHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryHttpServerLocation">DataFactoryDatasetBinaryHttpServerLocation</a>

---


### DataFactoryDatasetBinarySftpServerLocationOutputReference <a name="DataFactoryDatasetBinarySftpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetBinarySftpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinarySftpServerLocation">DataFactoryDatasetBinarySftpServerLocation</a>

---


### DataFactoryDatasetBinaryTimeoutsOutputReference <a name="DataFactoryDatasetBinaryTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_binary

dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryDatasetBinaryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetBinary.DataFactoryDatasetBinaryTimeouts">DataFactoryDatasetBinaryTimeouts</a>]

---



