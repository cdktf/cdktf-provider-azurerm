# `dataFactoryDatasetCosmosdbSqlapi` Submodule <a name="`dataFactoryDatasetCosmosdbSqlapi` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetCosmosdbSqlapi <a name="DataFactoryDatasetCosmosdbSqlapi" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi azurerm_data_factory_dataset_cosmosdb_sqlapi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  collection_name: str = None,
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetCosmosdbSqlapiSchemaColumn]] = None,
  timeouts: DataFactoryDatasetCosmosdbSqlapiTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}.

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.collectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.schemaColumn"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#schema_column DataFactoryDatasetCosmosdbSqlapi#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#timeouts DataFactoryDatasetCosmosdbSqlapi#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn">put_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetCollectionName">reset_collection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetSchemaColumn">reset_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_schema_column` <a name="put_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn"></a>

```python
def put_schema_column(
  value: typing.Union[IResolvable, typing.List[DataFactoryDatasetCosmosdbSqlapiSchemaColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putSchemaColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_collection_name` <a name="reset_collection_name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetCollectionName"></a>

```python
def reset_collection_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema_column` <a name="reset_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetSchemaColumn"></a>

```python
def reset_schema_column() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumn">schema_column</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList">DataFactoryDatasetCosmosdbSqlapiSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference">DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionNameInput">collection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumnInput">schema_column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionName">collection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_column`<sup>Required</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumn"></a>

```python
schema_column: DataFactoryDatasetCosmosdbSqlapiSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList">DataFactoryDatasetCosmosdbSqlapiSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference">DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `collection_name_input`<sup>Optional</sup> <a name="collection_name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionNameInput"></a>

```python
collection_name_input: str
```

- *Type:* str

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_column_input`<sup>Optional</sup> <a name="schema_column_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.schemaColumnInput"></a>

```python
schema_column_input: typing.Union[IResolvable, typing.List[DataFactoryDatasetCosmosdbSqlapiSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataFactoryDatasetCosmosdbSqlapiTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `collection_name`<sup>Required</sup> <a name="collection_name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetCosmosdbSqlapiConfig <a name="DataFactoryDatasetCosmosdbSqlapiConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  collection_name: str = None,
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetCosmosdbSqlapiSchemaColumn]] = None,
  timeouts: DataFactoryDatasetCosmosdbSqlapiTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.collectionName">collection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#data_factory_id DataFactoryDatasetCosmosdbSqlapi#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#linked_service_name DataFactoryDatasetCosmosdbSqlapi#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#additional_properties DataFactoryDatasetCosmosdbSqlapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#annotations DataFactoryDatasetCosmosdbSqlapi#annotations}.

---

##### `collection_name`<sup>Optional</sup> <a name="collection_name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.collectionName"></a>

```python
collection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#collection_name DataFactoryDatasetCosmosdbSqlapi#collection_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#folder DataFactoryDatasetCosmosdbSqlapi#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#id DataFactoryDatasetCosmosdbSqlapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#parameters DataFactoryDatasetCosmosdbSqlapi#parameters}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.schemaColumn"></a>

```python
schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetCosmosdbSqlapiSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#schema_column DataFactoryDatasetCosmosdbSqlapi#schema_column}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiConfig.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetCosmosdbSqlapiTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#timeouts DataFactoryDatasetCosmosdbSqlapi#timeouts}

---

### DataFactoryDatasetCosmosdbSqlapiSchemaColumn <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn(
  name: str,
  description: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#type DataFactoryDatasetCosmosdbSqlapi#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#name DataFactoryDatasetCosmosdbSqlapi#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#description DataFactoryDatasetCosmosdbSqlapi#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#type DataFactoryDatasetCosmosdbSqlapi#type}.

---

### DataFactoryDatasetCosmosdbSqlapiTimeouts <a name="DataFactoryDatasetCosmosdbSqlapiTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#create DataFactoryDatasetCosmosdbSqlapi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#delete DataFactoryDatasetCosmosdbSqlapi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#read DataFactoryDatasetCosmosdbSqlapi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_dataset_cosmosdb_sqlapi#update DataFactoryDatasetCosmosdbSqlapi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetCosmosdbSqlapiSchemaColumnList <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryDatasetCosmosdbSqlapiSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>]]

---


### DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference <a name="DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryDatasetCosmosdbSqlapiSchemaColumn, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiSchemaColumn">DataFactoryDatasetCosmosdbSqlapiSchemaColumn</a>, cdktf.IResolvable]

---


### DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference <a name="DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_cosmosdb_sqlapi

dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryDatasetCosmosdbSqlapiTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetCosmosdbSqlapi.DataFactoryDatasetCosmosdbSqlapiTimeouts">DataFactoryDatasetCosmosdbSqlapiTimeouts</a>, cdktf.IResolvable]

---



