# `dataFactoryDatasetPostgresql` Submodule <a name="`dataFactoryDatasetPostgresql` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetPostgresql <a name="DataFactoryDatasetPostgresql" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql azurerm_data_factory_dataset_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql(
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
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetPostgresqlSchemaColumn]] = None,
  table_name: str = None,
  timeouts: DataFactoryDatasetPostgresqlTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#data_factory_id DataFactoryDatasetPostgresql#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#linked_service_name DataFactoryDatasetPostgresql#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#additional_properties DataFactoryDatasetPostgresql#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#annotations DataFactoryDatasetPostgresql#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#folder DataFactoryDatasetPostgresql#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#id DataFactoryDatasetPostgresql#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#parameters DataFactoryDatasetPostgresql#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#table_name DataFactoryDatasetPostgresql#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#data_factory_id DataFactoryDatasetPostgresql#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#linked_service_name DataFactoryDatasetPostgresql#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#additional_properties DataFactoryDatasetPostgresql#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#annotations DataFactoryDatasetPostgresql#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#folder DataFactoryDatasetPostgresql#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#id DataFactoryDatasetPostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#parameters DataFactoryDatasetPostgresql#parameters}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.schemaColumn"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#schema_column DataFactoryDatasetPostgresql#schema_column}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#table_name DataFactoryDatasetPostgresql#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#timeouts DataFactoryDatasetPostgresql#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putSchemaColumn">put_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetSchemaColumn">reset_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schema_column` <a name="put_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putSchemaColumn"></a>

```python
def put_schema_column(
  value: typing.Union[IResolvable, typing.List[DataFactoryDatasetPostgresqlSchemaColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putSchemaColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#create DataFactoryDatasetPostgresql#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#delete DataFactoryDatasetPostgresql#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#read DataFactoryDatasetPostgresql#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#update DataFactoryDatasetPostgresql#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema_column` <a name="reset_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetSchemaColumn"></a>

```python
def reset_schema_column() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryDatasetPostgresql resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryDatasetPostgresql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryDatasetPostgresql to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryDatasetPostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetPostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumn">schema_column</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList">DataFactoryDatasetPostgresqlSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference">DataFactoryDatasetPostgresqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumnInput">schema_column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_column`<sup>Required</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumn"></a>

```python
schema_column: DataFactoryDatasetPostgresqlSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList">DataFactoryDatasetPostgresqlSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetPostgresqlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference">DataFactoryDatasetPostgresqlTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_column_input`<sup>Optional</sup> <a name="schema_column_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumnInput"></a>

```python
schema_column_input: typing.Union[IResolvable, typing.List[DataFactoryDatasetPostgresqlSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryDatasetPostgresqlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetPostgresqlConfig <a name="DataFactoryDatasetPostgresqlConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig(
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
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetPostgresqlSchemaColumn]] = None,
  table_name: str = None,
  timeouts: DataFactoryDatasetPostgresqlTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#data_factory_id DataFactoryDatasetPostgresql#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#linked_service_name DataFactoryDatasetPostgresql#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#additional_properties DataFactoryDatasetPostgresql#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#annotations DataFactoryDatasetPostgresql#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#folder DataFactoryDatasetPostgresql#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#id DataFactoryDatasetPostgresql#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#parameters DataFactoryDatasetPostgresql#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#table_name DataFactoryDatasetPostgresql#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#data_factory_id DataFactoryDatasetPostgresql#data_factory_id}.

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#linked_service_name DataFactoryDatasetPostgresql#linked_service_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#additional_properties DataFactoryDatasetPostgresql#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#annotations DataFactoryDatasetPostgresql#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#folder DataFactoryDatasetPostgresql#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#id DataFactoryDatasetPostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#parameters DataFactoryDatasetPostgresql#parameters}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.schemaColumn"></a>

```python
schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetPostgresqlSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#schema_column DataFactoryDatasetPostgresql#schema_column}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#table_name DataFactoryDatasetPostgresql#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetPostgresqlTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#timeouts DataFactoryDatasetPostgresql#timeouts}

---

### DataFactoryDatasetPostgresqlSchemaColumn <a name="DataFactoryDatasetPostgresqlSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn(
  name: str,
  description: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#type DataFactoryDatasetPostgresql#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#type DataFactoryDatasetPostgresql#type}.

---

### DataFactoryDatasetPostgresqlTimeouts <a name="DataFactoryDatasetPostgresqlTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#create DataFactoryDatasetPostgresql#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#delete DataFactoryDatasetPostgresql#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#read DataFactoryDatasetPostgresql#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#update DataFactoryDatasetPostgresql#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#create DataFactoryDatasetPostgresql#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#delete DataFactoryDatasetPostgresql#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#read DataFactoryDatasetPostgresql#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/data_factory_dataset_postgresql#update DataFactoryDatasetPostgresql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetPostgresqlSchemaColumnList <a name="DataFactoryDatasetPostgresqlSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryDatasetPostgresqlSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryDatasetPostgresqlSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]]

---


### DataFactoryDatasetPostgresqlSchemaColumnOutputReference <a name="DataFactoryDatasetPostgresqlSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryDatasetPostgresqlSchemaColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>]

---


### DataFactoryDatasetPostgresqlTimeoutsOutputReference <a name="DataFactoryDatasetPostgresqlTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_postgresql

dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryDatasetPostgresqlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>]

---



