# `azurerm_data_factory_dataset_parquet`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_dataset_parquet`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet).

# `dataFactoryDatasetParquet` Submodule <a name="`dataFactoryDatasetParquet` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetParquet <a name="DataFactoryDatasetParquet" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet azurerm_data_factory_dataset_parquet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquet(
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
  azure_blob_storage_location: DataFactoryDatasetParquetAzureBlobStorageLocation = None,
  compression_codec: str = None,
  compression_level: str = None,
  description: str = None,
  folder: str = None,
  http_server_location: DataFactoryDatasetParquetHttpServerLocation = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetParquetSchemaColumn]] = None,
  timeouts: DataFactoryDatasetParquetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionCodec">compression_codec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionLevel">compression_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}.

---

##### `azure_blob_storage_location`<sup>Optional</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.azureBlobStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#azure_blob_storage_location DataFactoryDatasetParquet#azure_blob_storage_location}

---

##### `compression_codec`<sup>Optional</sup> <a name="compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionCodec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}.

---

##### `compression_level`<sup>Optional</sup> <a name="compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.compressionLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}.

---

##### `http_server_location`<sup>Optional</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.httpServerLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#http_server_location DataFactoryDatasetParquet#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.schemaColumn"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#schema_column DataFactoryDatasetParquet#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#timeouts DataFactoryDatasetParquet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation">put_azure_blob_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation">put_http_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn">put_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobStorageLocation">reset_azure_blob_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionCodec">reset_compression_codec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionLevel">reset_compression_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetHttpServerLocation">reset_http_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetSchemaColumn">reset_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_azure_blob_storage_location` <a name="put_azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation"></a>

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

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.container"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}.

---

###### `dynamic_container_enabled`<sup>Optional</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.dynamicContainerEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}.

---

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putAzureBlobStorageLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

##### `put_http_server_location` <a name="put_http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation"></a>

```python
def put_http_server_location(
  filename: str,
  relative_url: str,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None
) -> None
```

###### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

###### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation.parameter.relativeUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}.

---

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putHttpServerLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

##### `put_schema_column` <a name="put_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn"></a>

```python
def put_schema_column(
  value: typing.Union[IResolvable, typing.List[DataFactoryDatasetParquetSchemaColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putSchemaColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_azure_blob_storage_location` <a name="reset_azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetAzureBlobStorageLocation"></a>

```python
def reset_azure_blob_storage_location() -> None
```

##### `reset_compression_codec` <a name="reset_compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionCodec"></a>

```python
def reset_compression_codec() -> None
```

##### `reset_compression_level` <a name="reset_compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetCompressionLevel"></a>

```python
def reset_compression_level() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_http_server_location` <a name="reset_http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetHttpServerLocation"></a>

```python
def reset_http_server_location() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema_column` <a name="reset_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetSchemaColumn"></a>

```python
def reset_schema_column() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference">DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference">DataFactoryDatasetParquetHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumn">schema_column</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList">DataFactoryDatasetParquetSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference">DataFactoryDatasetParquetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocationInput">azure_blob_storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodecInput">compression_codec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevelInput">compression_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocationInput">http_server_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumnInput">schema_column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodec">compression_codec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevel">compression_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_blob_storage_location`<sup>Required</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocation"></a>

```python
azure_blob_storage_location: DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference">DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference</a>

---

##### `http_server_location`<sup>Required</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocation"></a>

```python
http_server_location: DataFactoryDatasetParquetHttpServerLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference">DataFactoryDatasetParquetHttpServerLocationOutputReference</a>

---

##### `schema_column`<sup>Required</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumn"></a>

```python
schema_column: DataFactoryDatasetParquetSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList">DataFactoryDatasetParquetSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetParquetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference">DataFactoryDatasetParquetTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `azure_blob_storage_location_input`<sup>Optional</sup> <a name="azure_blob_storage_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.azureBlobStorageLocationInput"></a>

```python
azure_blob_storage_location_input: DataFactoryDatasetParquetAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---

##### `compression_codec_input`<sup>Optional</sup> <a name="compression_codec_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodecInput"></a>

```python
compression_codec_input: str
```

- *Type:* str

---

##### `compression_level_input`<sup>Optional</sup> <a name="compression_level_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevelInput"></a>

```python
compression_level_input: str
```

- *Type:* str

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `http_server_location_input`<sup>Optional</sup> <a name="http_server_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.httpServerLocationInput"></a>

```python
http_server_location_input: DataFactoryDatasetParquetHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_column_input`<sup>Optional</sup> <a name="schema_column_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.schemaColumnInput"></a>

```python
schema_column_input: typing.Union[IResolvable, typing.List[DataFactoryDatasetParquetSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataFactoryDatasetParquetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compression_codec`<sup>Required</sup> <a name="compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionCodec"></a>

```python
compression_codec: str
```

- *Type:* str

---

##### `compression_level`<sup>Required</sup> <a name="compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.compressionLevel"></a>

```python
compression_level: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetParquetAzureBlobStorageLocation <a name="DataFactoryDatasetParquetAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation(
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
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.container">container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicContainerEnabled">dynamic_container_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.container"></a>

```python
container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#container DataFactoryDatasetParquet#container}.

---

##### `dynamic_container_enabled`<sup>Optional</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```python
dynamic_container_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_container_enabled DataFactoryDatasetParquet#dynamic_container_enabled}.

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

### DataFactoryDatasetParquetConfig <a name="DataFactoryDatasetParquetConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig(
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
  azure_blob_storage_location: DataFactoryDatasetParquetAzureBlobStorageLocation = None,
  compression_codec: str = None,
  compression_level: str = None,
  description: str = None,
  folder: str = None,
  http_server_location: DataFactoryDatasetParquetHttpServerLocation = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetParquetSchemaColumn]] = None,
  timeouts: DataFactoryDatasetParquetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionCodec">compression_codec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionLevel">compression_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#data_factory_id DataFactoryDatasetParquet#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#linked_service_name DataFactoryDatasetParquet#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#additional_properties DataFactoryDatasetParquet#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#annotations DataFactoryDatasetParquet#annotations}.

---

##### `azure_blob_storage_location`<sup>Optional</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.azureBlobStorageLocation"></a>

```python
azure_blob_storage_location: DataFactoryDatasetParquetAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#azure_blob_storage_location DataFactoryDatasetParquet#azure_blob_storage_location}

---

##### `compression_codec`<sup>Optional</sup> <a name="compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionCodec"></a>

```python
compression_codec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_codec DataFactoryDatasetParquet#compression_codec}.

---

##### `compression_level`<sup>Optional</sup> <a name="compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.compressionLevel"></a>

```python
compression_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#compression_level DataFactoryDatasetParquet#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#folder DataFactoryDatasetParquet#folder}.

---

##### `http_server_location`<sup>Optional</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.httpServerLocation"></a>

```python
http_server_location: DataFactoryDatasetParquetHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#http_server_location DataFactoryDatasetParquet#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#id DataFactoryDatasetParquet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#parameters DataFactoryDatasetParquet#parameters}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.schemaColumn"></a>

```python
schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetParquetSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#schema_column DataFactoryDatasetParquet#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetConfig.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetParquetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#timeouts DataFactoryDatasetParquet#timeouts}

---

### DataFactoryDatasetParquetHttpServerLocation <a name="DataFactoryDatasetParquetHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation(
  filename: str,
  relative_url: str,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.relativeUrl">relative_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#filename DataFactoryDatasetParquet#filename}.

---

##### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.relativeUrl"></a>

```python
relative_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#relative_url DataFactoryDatasetParquet#relative_url}.

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_filename_enabled DataFactoryDatasetParquet#dynamic_filename_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#dynamic_path_enabled DataFactoryDatasetParquet#dynamic_path_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#path DataFactoryDatasetParquet#path}.

---

### DataFactoryDatasetParquetSchemaColumn <a name="DataFactoryDatasetParquetSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn(
  name: str,
  description: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#type DataFactoryDatasetParquet#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#name DataFactoryDatasetParquet#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#description DataFactoryDatasetParquet#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#type DataFactoryDatasetParquet#type}.

---

### DataFactoryDatasetParquetTimeouts <a name="DataFactoryDatasetParquetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#create DataFactoryDatasetParquet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#delete DataFactoryDatasetParquet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#read DataFactoryDatasetParquet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/data_factory_dataset_parquet#update DataFactoryDatasetParquet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">reset_dynamic_container_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_container_enabled` <a name="reset_dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```python
def reset_dynamic_container_enabled() -> None
```

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">dynamic_container_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">dynamic_container_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `dynamic_container_enabled_input`<sup>Optional</sup> <a name="dynamic_container_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```python
dynamic_container_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `dynamic_container_enabled`<sup>Required</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```python
dynamic_container_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetParquetAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetAzureBlobStorageLocation">DataFactoryDatasetParquetAzureBlobStorageLocation</a>

---


### DataFactoryDatasetParquetHttpServerLocationOutputReference <a name="DataFactoryDatasetParquetHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrlInput">relative_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrl">relative_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `relative_url_input`<sup>Optional</sup> <a name="relative_url_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```python
relative_url_input: str
```

- *Type:* str

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.relativeUrl"></a>

```python
relative_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetParquetHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetHttpServerLocation">DataFactoryDatasetParquetHttpServerLocation</a>

---


### DataFactoryDatasetParquetSchemaColumnList <a name="DataFactoryDatasetParquetSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryDatasetParquetSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryDatasetParquetSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>]]

---


### DataFactoryDatasetParquetSchemaColumnOutputReference <a name="DataFactoryDatasetParquetSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryDatasetParquetSchemaColumn, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetSchemaColumn">DataFactoryDatasetParquetSchemaColumn</a>, cdktf.IResolvable]

---


### DataFactoryDatasetParquetTimeoutsOutputReference <a name="DataFactoryDatasetParquetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_parquet

dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryDatasetParquetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetParquet.DataFactoryDatasetParquetTimeouts">DataFactoryDatasetParquetTimeouts</a>, cdktf.IResolvable]

---



