# `dataFactoryDatasetDelimitedText` Submodule <a name="`dataFactoryDatasetDelimitedText` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetDelimitedText <a name="DataFactoryDatasetDelimitedText" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text azurerm_data_factory_dataset_delimited_text}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText(
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
  azure_blob_fs_location: DataFactoryDatasetDelimitedTextAzureBlobFsLocation = None,
  azure_blob_storage_location: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation = None,
  column_delimiter: str = None,
  compression_codec: str = None,
  compression_level: str = None,
  description: str = None,
  encoding: str = None,
  escape_character: str = None,
  first_row_as_header: typing.Union[bool, IResolvable] = None,
  folder: str = None,
  http_server_location: DataFactoryDatasetDelimitedTextHttpServerLocation = None,
  id: str = None,
  null_value: str = None,
  parameters: typing.Mapping[str] = None,
  quote_character: str = None,
  row_delimiter: str = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetDelimitedTextSchemaColumn]] = None,
  timeouts: DataFactoryDatasetDelimitedTextTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.azureBlobFsLocation">azure_blob_fs_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | azure_blob_fs_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.columnDelimiter">column_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.compressionCodec">compression_codec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.compressionLevel">compression_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.escapeCharacter">escape_character</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.firstRowAsHeader">first_row_as_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.nullValue">null_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.quoteCharacter">quote_character</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.rowDelimiter">row_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}.

---

##### `azure_blob_fs_location`<sup>Optional</sup> <a name="azure_blob_fs_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.azureBlobFsLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

azure_blob_fs_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_fs_location DataFactoryDatasetDelimitedText#azure_blob_fs_location}

---

##### `azure_blob_storage_location`<sup>Optional</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.azureBlobStorageLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_storage_location DataFactoryDatasetDelimitedText#azure_blob_storage_location}

---

##### `column_delimiter`<sup>Optional</sup> <a name="column_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.columnDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}.

---

##### `compression_codec`<sup>Optional</sup> <a name="compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.compressionCodec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}.

---

##### `compression_level`<sup>Optional</sup> <a name="compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.compressionLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.encoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}.

---

##### `escape_character`<sup>Optional</sup> <a name="escape_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.escapeCharacter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}.

---

##### `first_row_as_header`<sup>Optional</sup> <a name="first_row_as_header" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.firstRowAsHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}.

---

##### `http_server_location`<sup>Optional</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.httpServerLocation"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#http_server_location DataFactoryDatasetDelimitedText#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `null_value`<sup>Optional</sup> <a name="null_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.nullValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}.

---

##### `quote_character`<sup>Optional</sup> <a name="quote_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.quoteCharacter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}.

---

##### `row_delimiter`<sup>Optional</sup> <a name="row_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.rowDelimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.schemaColumn"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#schema_column DataFactoryDatasetDelimitedText#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#timeouts DataFactoryDatasetDelimitedText#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation">put_azure_blob_fs_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation">put_azure_blob_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation">put_http_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn">put_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobFsLocation">reset_azure_blob_fs_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobStorageLocation">reset_azure_blob_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetColumnDelimiter">reset_column_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionCodec">reset_compression_codec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionLevel">reset_compression_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEscapeCharacter">reset_escape_character</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFirstRowAsHeader">reset_first_row_as_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetHttpServerLocation">reset_http_server_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetNullValue">reset_null_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetQuoteCharacter">reset_quote_character</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetRowDelimiter">reset_row_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetSchemaColumn">reset_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azure_blob_fs_location` <a name="put_azure_blob_fs_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation"></a>

```python
def put_azure_blob_fs_location(
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_file_system_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None,
  filename: str = None,
  file_system: str = None,
  path: str = None
) -> None
```

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

###### `dynamic_file_system_enabled`<sup>Optional</sup> <a name="dynamic_file_system_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.dynamicFileSystemEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_file_system_enabled DataFactoryDatasetDelimitedText#dynamic_file_system_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

###### `file_system`<sup>Optional</sup> <a name="file_system" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.fileSystem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#file_system DataFactoryDatasetDelimitedText#file_system}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobFsLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

##### `put_azure_blob_storage_location` <a name="put_azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation"></a>

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

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.container"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#container DataFactoryDatasetDelimitedText#container}.

---

###### `dynamic_container_enabled`<sup>Optional</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.dynamicContainerEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_container_enabled DataFactoryDatasetDelimitedText#dynamic_container_enabled}.

---

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

###### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putAzureBlobStorageLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

##### `put_http_server_location` <a name="put_http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation"></a>

```python
def put_http_server_location(
  filename: str,
  path: str,
  relative_url: str,
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

###### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation.parameter.relativeUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#relative_url DataFactoryDatasetDelimitedText#relative_url}.

---

###### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation.parameter.dynamicFilenameEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

###### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putHttpServerLocation.parameter.dynamicPathEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

##### `put_schema_column` <a name="put_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn"></a>

```python
def put_schema_column(
  value: typing.Union[IResolvable, typing.List[DataFactoryDatasetDelimitedTextSchemaColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putSchemaColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#create DataFactoryDatasetDelimitedText#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#delete DataFactoryDatasetDelimitedText#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#read DataFactoryDatasetDelimitedText#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#update DataFactoryDatasetDelimitedText#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_azure_blob_fs_location` <a name="reset_azure_blob_fs_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobFsLocation"></a>

```python
def reset_azure_blob_fs_location() -> None
```

##### `reset_azure_blob_storage_location` <a name="reset_azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetAzureBlobStorageLocation"></a>

```python
def reset_azure_blob_storage_location() -> None
```

##### `reset_column_delimiter` <a name="reset_column_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetColumnDelimiter"></a>

```python
def reset_column_delimiter() -> None
```

##### `reset_compression_codec` <a name="reset_compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionCodec"></a>

```python
def reset_compression_codec() -> None
```

##### `reset_compression_level` <a name="reset_compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetCompressionLevel"></a>

```python
def reset_compression_level() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_escape_character` <a name="reset_escape_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetEscapeCharacter"></a>

```python
def reset_escape_character() -> None
```

##### `reset_first_row_as_header` <a name="reset_first_row_as_header" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFirstRowAsHeader"></a>

```python
def reset_first_row_as_header() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_http_server_location` <a name="reset_http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetHttpServerLocation"></a>

```python
def reset_http_server_location() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_null_value` <a name="reset_null_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetNullValue"></a>

```python
def reset_null_value() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_quote_character` <a name="reset_quote_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetQuoteCharacter"></a>

```python
def reset_quote_character() -> None
```

##### `reset_row_delimiter` <a name="reset_row_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetRowDelimiter"></a>

```python
def reset_row_delimiter() -> None
```

##### `reset_schema_column` <a name="reset_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetSchemaColumn"></a>

```python
def reset_schema_column() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryDatasetDelimitedText resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryDatasetDelimitedText resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryDatasetDelimitedText to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryDatasetDelimitedText that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetDelimitedText to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocation">azure_blob_fs_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference">DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumn">schema_column</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList">DataFactoryDatasetDelimitedTextSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference">DataFactoryDatasetDelimitedTextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocationInput">azure_blob_fs_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocationInput">azure_blob_storage_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiterInput">column_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodecInput">compression_codec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevelInput">compression_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacterInput">escape_character_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeaderInput">first_row_as_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocationInput">http_server_location_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValueInput">null_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacterInput">quote_character_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiterInput">row_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumnInput">schema_column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiter">column_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodec">compression_codec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevel">compression_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacter">escape_character</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeader">first_row_as_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValue">null_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacter">quote_character</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiter">row_delimiter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_blob_fs_location`<sup>Required</sup> <a name="azure_blob_fs_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocation"></a>

```python
azure_blob_fs_location: DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference</a>

---

##### `azure_blob_storage_location`<sup>Required</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocation"></a>

```python
azure_blob_storage_location: DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference">DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference</a>

---

##### `http_server_location`<sup>Required</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocation"></a>

```python
http_server_location: DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference">DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference</a>

---

##### `schema_column`<sup>Required</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumn"></a>

```python
schema_column: DataFactoryDatasetDelimitedTextSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList">DataFactoryDatasetDelimitedTextSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetDelimitedTextTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference">DataFactoryDatasetDelimitedTextTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `azure_blob_fs_location_input`<sup>Optional</sup> <a name="azure_blob_fs_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobFsLocationInput"></a>

```python
azure_blob_fs_location_input: DataFactoryDatasetDelimitedTextAzureBlobFsLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---

##### `azure_blob_storage_location_input`<sup>Optional</sup> <a name="azure_blob_storage_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.azureBlobStorageLocationInput"></a>

```python
azure_blob_storage_location_input: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---

##### `column_delimiter_input`<sup>Optional</sup> <a name="column_delimiter_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiterInput"></a>

```python
column_delimiter_input: str
```

- *Type:* str

---

##### `compression_codec_input`<sup>Optional</sup> <a name="compression_codec_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodecInput"></a>

```python
compression_codec_input: str
```

- *Type:* str

---

##### `compression_level_input`<sup>Optional</sup> <a name="compression_level_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevelInput"></a>

```python
compression_level_input: str
```

- *Type:* str

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `escape_character_input`<sup>Optional</sup> <a name="escape_character_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacterInput"></a>

```python
escape_character_input: str
```

- *Type:* str

---

##### `first_row_as_header_input`<sup>Optional</sup> <a name="first_row_as_header_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeaderInput"></a>

```python
first_row_as_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `http_server_location_input`<sup>Optional</sup> <a name="http_server_location_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.httpServerLocationInput"></a>

```python
http_server_location_input: DataFactoryDatasetDelimitedTextHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_value_input`<sup>Optional</sup> <a name="null_value_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValueInput"></a>

```python
null_value_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `quote_character_input`<sup>Optional</sup> <a name="quote_character_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacterInput"></a>

```python
quote_character_input: str
```

- *Type:* str

---

##### `row_delimiter_input`<sup>Optional</sup> <a name="row_delimiter_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiterInput"></a>

```python
row_delimiter_input: str
```

- *Type:* str

---

##### `schema_column_input`<sup>Optional</sup> <a name="schema_column_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.schemaColumnInput"></a>

```python
schema_column_input: typing.Union[IResolvable, typing.List[DataFactoryDatasetDelimitedTextSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryDatasetDelimitedTextTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_delimiter`<sup>Required</sup> <a name="column_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.columnDelimiter"></a>

```python
column_delimiter: str
```

- *Type:* str

---

##### `compression_codec`<sup>Required</sup> <a name="compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionCodec"></a>

```python
compression_codec: str
```

- *Type:* str

---

##### `compression_level`<sup>Required</sup> <a name="compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.compressionLevel"></a>

```python
compression_level: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `escape_character`<sup>Required</sup> <a name="escape_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.escapeCharacter"></a>

```python
escape_character: str
```

- *Type:* str

---

##### `first_row_as_header`<sup>Required</sup> <a name="first_row_as_header" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.firstRowAsHeader"></a>

```python
first_row_as_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_value`<sup>Required</sup> <a name="null_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.nullValue"></a>

```python
null_value: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `quote_character`<sup>Required</sup> <a name="quote_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.quoteCharacter"></a>

```python
quote_character: str
```

- *Type:* str

---

##### `row_delimiter`<sup>Required</sup> <a name="row_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.rowDelimiter"></a>

```python
row_delimiter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedText.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetDelimitedTextAzureBlobFsLocation <a name="DataFactoryDatasetDelimitedTextAzureBlobFsLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation(
  dynamic_filename_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_file_system_enabled: typing.Union[bool, IResolvable] = None,
  dynamic_path_enabled: typing.Union[bool, IResolvable] = None,
  filename: str = None,
  file_system: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFileSystemEnabled">dynamic_file_system_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_file_system_enabled DataFactoryDatasetDelimitedText#dynamic_file_system_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.fileSystem">file_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#file_system DataFactoryDatasetDelimitedText#file_system}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `dynamic_file_system_enabled`<sup>Optional</sup> <a name="dynamic_file_system_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicFileSystemEnabled"></a>

```python
dynamic_file_system_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_file_system_enabled DataFactoryDatasetDelimitedText#dynamic_file_system_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `file_system`<sup>Optional</sup> <a name="file_system" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.fileSystem"></a>

```python
file_system: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#file_system DataFactoryDatasetDelimitedText#file_system}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

### DataFactoryDatasetDelimitedTextAzureBlobStorageLocation <a name="DataFactoryDatasetDelimitedTextAzureBlobStorageLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation(
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
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.container">container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#container DataFactoryDatasetDelimitedText#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicContainerEnabled">dynamic_container_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_container_enabled DataFactoryDatasetDelimitedText#dynamic_container_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.container"></a>

```python
container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#container DataFactoryDatasetDelimitedText#container}.

---

##### `dynamic_container_enabled`<sup>Optional</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicContainerEnabled"></a>

```python
dynamic_container_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_container_enabled DataFactoryDatasetDelimitedText#dynamic_container_enabled}.

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

### DataFactoryDatasetDelimitedTextConfig <a name="DataFactoryDatasetDelimitedTextConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig(
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
  azure_blob_fs_location: DataFactoryDatasetDelimitedTextAzureBlobFsLocation = None,
  azure_blob_storage_location: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation = None,
  column_delimiter: str = None,
  compression_codec: str = None,
  compression_level: str = None,
  description: str = None,
  encoding: str = None,
  escape_character: str = None,
  first_row_as_header: typing.Union[bool, IResolvable] = None,
  folder: str = None,
  http_server_location: DataFactoryDatasetDelimitedTextHttpServerLocation = None,
  id: str = None,
  null_value: str = None,
  parameters: typing.Mapping[str] = None,
  quote_character: str = None,
  row_delimiter: str = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetDelimitedTextSchemaColumn]] = None,
  timeouts: DataFactoryDatasetDelimitedTextTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobFsLocation">azure_blob_fs_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | azure_blob_fs_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobStorageLocation">azure_blob_storage_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | azure_blob_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.columnDelimiter">column_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionCodec">compression_codec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionLevel">compression_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.encoding">encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.escapeCharacter">escape_character</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.firstRowAsHeader">first_row_as_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.httpServerLocation">http_server_location</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | http_server_location block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.nullValue">null_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.quoteCharacter">quote_character</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.rowDelimiter">row_delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#data_factory_id DataFactoryDatasetDelimitedText#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#linked_service_name DataFactoryDatasetDelimitedText#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#additional_properties DataFactoryDatasetDelimitedText#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#annotations DataFactoryDatasetDelimitedText#annotations}.

---

##### `azure_blob_fs_location`<sup>Optional</sup> <a name="azure_blob_fs_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobFsLocation"></a>

```python
azure_blob_fs_location: DataFactoryDatasetDelimitedTextAzureBlobFsLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

azure_blob_fs_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_fs_location DataFactoryDatasetDelimitedText#azure_blob_fs_location}

---

##### `azure_blob_storage_location`<sup>Optional</sup> <a name="azure_blob_storage_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.azureBlobStorageLocation"></a>

```python
azure_blob_storage_location: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

azure_blob_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#azure_blob_storage_location DataFactoryDatasetDelimitedText#azure_blob_storage_location}

---

##### `column_delimiter`<sup>Optional</sup> <a name="column_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.columnDelimiter"></a>

```python
column_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#column_delimiter DataFactoryDatasetDelimitedText#column_delimiter}.

---

##### `compression_codec`<sup>Optional</sup> <a name="compression_codec" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionCodec"></a>

```python
compression_codec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_codec DataFactoryDatasetDelimitedText#compression_codec}.

---

##### `compression_level`<sup>Optional</sup> <a name="compression_level" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.compressionLevel"></a>

```python
compression_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#compression_level DataFactoryDatasetDelimitedText#compression_level}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#encoding DataFactoryDatasetDelimitedText#encoding}.

---

##### `escape_character`<sup>Optional</sup> <a name="escape_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.escapeCharacter"></a>

```python
escape_character: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#escape_character DataFactoryDatasetDelimitedText#escape_character}.

---

##### `first_row_as_header`<sup>Optional</sup> <a name="first_row_as_header" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.firstRowAsHeader"></a>

```python
first_row_as_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#first_row_as_header DataFactoryDatasetDelimitedText#first_row_as_header}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#folder DataFactoryDatasetDelimitedText#folder}.

---

##### `http_server_location`<sup>Optional</sup> <a name="http_server_location" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.httpServerLocation"></a>

```python
http_server_location: DataFactoryDatasetDelimitedTextHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

http_server_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#http_server_location DataFactoryDatasetDelimitedText#http_server_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#id DataFactoryDatasetDelimitedText#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `null_value`<sup>Optional</sup> <a name="null_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.nullValue"></a>

```python
null_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#null_value DataFactoryDatasetDelimitedText#null_value}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#parameters DataFactoryDatasetDelimitedText#parameters}.

---

##### `quote_character`<sup>Optional</sup> <a name="quote_character" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.quoteCharacter"></a>

```python
quote_character: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#quote_character DataFactoryDatasetDelimitedText#quote_character}.

---

##### `row_delimiter`<sup>Optional</sup> <a name="row_delimiter" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.rowDelimiter"></a>

```python
row_delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#row_delimiter DataFactoryDatasetDelimitedText#row_delimiter}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.schemaColumn"></a>

```python
schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetDelimitedTextSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#schema_column DataFactoryDatasetDelimitedText#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextConfig.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetDelimitedTextTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#timeouts DataFactoryDatasetDelimitedText#timeouts}

---

### DataFactoryDatasetDelimitedTextHttpServerLocation <a name="DataFactoryDatasetDelimitedTextHttpServerLocation" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation(
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
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.relativeUrl">relative_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#relative_url DataFactoryDatasetDelimitedText#relative_url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#filename DataFactoryDatasetDelimitedText#filename}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#path DataFactoryDatasetDelimitedText#path}.

---

##### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.relativeUrl"></a>

```python
relative_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#relative_url DataFactoryDatasetDelimitedText#relative_url}.

---

##### `dynamic_filename_enabled`<sup>Optional</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_filename_enabled DataFactoryDatasetDelimitedText#dynamic_filename_enabled}.

---

##### `dynamic_path_enabled`<sup>Optional</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#dynamic_path_enabled DataFactoryDatasetDelimitedText#dynamic_path_enabled}.

---

### DataFactoryDatasetDelimitedTextSchemaColumn <a name="DataFactoryDatasetDelimitedTextSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn(
  name: str,
  description: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#type DataFactoryDatasetDelimitedText#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#name DataFactoryDatasetDelimitedText#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#description DataFactoryDatasetDelimitedText#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#type DataFactoryDatasetDelimitedText#type}.

---

### DataFactoryDatasetDelimitedTextTimeouts <a name="DataFactoryDatasetDelimitedTextTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#create DataFactoryDatasetDelimitedText#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#delete DataFactoryDatasetDelimitedText#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#read DataFactoryDatasetDelimitedText#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#update DataFactoryDatasetDelimitedText#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#create DataFactoryDatasetDelimitedText#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#delete DataFactoryDatasetDelimitedText#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#read DataFactoryDatasetDelimitedText#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/data_factory_dataset_delimited_text#update DataFactoryDatasetDelimitedText#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference <a name="DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled">reset_dynamic_file_system_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFileSystem">reset_file_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_file_system_enabled` <a name="reset_dynamic_file_system_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicFileSystemEnabled"></a>

```python
def reset_dynamic_file_system_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_file_system` <a name="reset_file_system" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetFileSystem"></a>

```python
def reset_file_system() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput">dynamic_file_system_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystemInput">file_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled">dynamic_file_system_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystem">file_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_file_system_enabled_input`<sup>Optional</sup> <a name="dynamic_file_system_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabledInput"></a>

```python
dynamic_file_system_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `file_system_input`<sup>Optional</sup> <a name="file_system_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystemInput"></a>

```python
file_system_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_file_system_enabled`<sup>Required</sup> <a name="dynamic_file_system_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicFileSystemEnabled"></a>

```python
dynamic_file_system_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `file_system`<sup>Required</sup> <a name="file_system" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.fileSystem"></a>

```python
file_system: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetDelimitedTextAzureBlobFsLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobFsLocation">DataFactoryDatasetDelimitedTextAzureBlobFsLocation</a>

---


### DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference <a name="DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled">reset_dynamic_container_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_container_enabled` <a name="reset_dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicContainerEnabled"></a>

```python
def reset_dynamic_container_enabled() -> None
```

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput">dynamic_container_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled">dynamic_container_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `dynamic_container_enabled_input`<sup>Optional</sup> <a name="dynamic_container_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabledInput"></a>

```python
dynamic_container_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `dynamic_container_enabled`<sup>Required</sup> <a name="dynamic_container_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicContainerEnabled"></a>

```python
dynamic_container_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetDelimitedTextAzureBlobStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextAzureBlobStorageLocation">DataFactoryDatasetDelimitedTextAzureBlobStorageLocation</a>

---


### DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference <a name="DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicFilenameEnabled">reset_dynamic_filename_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicPathEnabled">reset_dynamic_path_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_filename_enabled` <a name="reset_dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicFilenameEnabled"></a>

```python
def reset_dynamic_filename_enabled() -> None
```

##### `reset_dynamic_path_enabled` <a name="reset_dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.resetDynamicPathEnabled"></a>

```python
def reset_dynamic_path_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput">dynamic_filename_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabledInput">dynamic_path_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrlInput">relative_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabled">dynamic_filename_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabled">dynamic_path_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrl">relative_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_filename_enabled_input`<sup>Optional</sup> <a name="dynamic_filename_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabledInput"></a>

```python
dynamic_filename_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled_input`<sup>Optional</sup> <a name="dynamic_path_enabled_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabledInput"></a>

```python
dynamic_path_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `relative_url_input`<sup>Optional</sup> <a name="relative_url_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrlInput"></a>

```python
relative_url_input: str
```

- *Type:* str

---

##### `dynamic_filename_enabled`<sup>Required</sup> <a name="dynamic_filename_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicFilenameEnabled"></a>

```python
dynamic_filename_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_path_enabled`<sup>Required</sup> <a name="dynamic_path_enabled" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.dynamicPathEnabled"></a>

```python
dynamic_path_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `relative_url`<sup>Required</sup> <a name="relative_url" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.relativeUrl"></a>

```python
relative_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryDatasetDelimitedTextHttpServerLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextHttpServerLocation">DataFactoryDatasetDelimitedTextHttpServerLocation</a>

---


### DataFactoryDatasetDelimitedTextSchemaColumnList <a name="DataFactoryDatasetDelimitedTextSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryDatasetDelimitedTextSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryDatasetDelimitedTextSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]]

---


### DataFactoryDatasetDelimitedTextSchemaColumnOutputReference <a name="DataFactoryDatasetDelimitedTextSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryDatasetDelimitedTextSchemaColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextSchemaColumn">DataFactoryDatasetDelimitedTextSchemaColumn</a>]

---


### DataFactoryDatasetDelimitedTextTimeoutsOutputReference <a name="DataFactoryDatasetDelimitedTextTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_delimited_text

dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryDatasetDelimitedTextTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetDelimitedText.DataFactoryDatasetDelimitedTextTimeouts">DataFactoryDatasetDelimitedTextTimeouts</a>]

---



