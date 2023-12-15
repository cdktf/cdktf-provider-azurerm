# `dataFactoryDatasetAzureSqlTable` Submodule <a name="`dataFactoryDatasetAzureSqlTable` Submodule" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetAzureSqlTable <a name="DataFactoryDatasetAzureSqlTable" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table azurerm_data_factory_dataset_azure_sql_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable(
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
  linked_service_id: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema: str = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetAzureSqlTableSchemaColumn]] = None,
  table: str = None,
  timeouts: DataFactoryDatasetAzureSqlTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.linkedServiceId">linked_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}.

---

##### `linked_service_id`<sup>Required</sup> <a name="linked_service_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.linkedServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.schemaColumn"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#schema_column DataFactoryDatasetAzureSqlTable#schema_column}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.table"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#timeouts DataFactoryDatasetAzureSqlTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putSchemaColumn">put_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchemaColumn">reset_schema_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schema_column` <a name="put_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putSchemaColumn"></a>

```python
def put_schema_column(
  value: typing.Union[IResolvable, typing.List[DataFactoryDatasetAzureSqlTableSchemaColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putSchemaColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#create DataFactoryDatasetAzureSqlTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#delete DataFactoryDatasetAzureSqlTable#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#read DataFactoryDatasetAzureSqlTable#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#update DataFactoryDatasetAzureSqlTable#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_schema_column` <a name="reset_schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetSchemaColumn"></a>

```python
def reset_schema_column() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryDatasetAzureSqlTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryDatasetAzureSqlTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryDatasetAzureSqlTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryDatasetAzureSqlTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetAzureSqlTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumn">schema_column</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList">DataFactoryDatasetAzureSqlTableSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference">DataFactoryDatasetAzureSqlTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceIdInput">linked_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumnInput">schema_column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceId">linked_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.table">table</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_column`<sup>Required</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumn"></a>

```python
schema_column: DataFactoryDatasetAzureSqlTableSchemaColumnList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList">DataFactoryDatasetAzureSqlTableSchemaColumnList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetAzureSqlTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference">DataFactoryDatasetAzureSqlTableTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_service_id_input`<sup>Optional</sup> <a name="linked_service_id_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceIdInput"></a>

```python
linked_service_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_column_input`<sup>Optional</sup> <a name="schema_column_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaColumnInput"></a>

```python
schema_column_input: typing.Union[IResolvable, typing.List[DataFactoryDatasetAzureSqlTableSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryDatasetAzureSqlTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_service_id`<sup>Required</sup> <a name="linked_service_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.linkedServiceId"></a>

```python
linked_service_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.table"></a>

```python
table: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetAzureSqlTableConfig <a name="DataFactoryDatasetAzureSqlTableConfig" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  linked_service_id: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  folder: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  schema: str = None,
  schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetAzureSqlTableSchemaColumn]] = None,
  table: str = None,
  timeouts: DataFactoryDatasetAzureSqlTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.linkedServiceId">linked_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schemaColumn">schema_column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]</code> | schema_column block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#data_factory_id DataFactoryDatasetAzureSqlTable#data_factory_id}.

---

##### `linked_service_id`<sup>Required</sup> <a name="linked_service_id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.linkedServiceId"></a>

```python
linked_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#linked_service_id DataFactoryDatasetAzureSqlTable#linked_service_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#additional_properties DataFactoryDatasetAzureSqlTable#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#annotations DataFactoryDatasetAzureSqlTable#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#folder DataFactoryDatasetAzureSqlTable#folder}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#id DataFactoryDatasetAzureSqlTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#parameters DataFactoryDatasetAzureSqlTable#parameters}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#schema DataFactoryDatasetAzureSqlTable#schema}.

---

##### `schema_column`<sup>Optional</sup> <a name="schema_column" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.schemaColumn"></a>

```python
schema_column: typing.Union[IResolvable, typing.List[DataFactoryDatasetAzureSqlTableSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#schema_column DataFactoryDatasetAzureSqlTable#schema_column}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.table"></a>

```python
table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#table DataFactoryDatasetAzureSqlTable#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableConfig.property.timeouts"></a>

```python
timeouts: DataFactoryDatasetAzureSqlTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#timeouts DataFactoryDatasetAzureSqlTable#timeouts}

---

### DataFactoryDatasetAzureSqlTableSchemaColumn <a name="DataFactoryDatasetAzureSqlTableSchemaColumn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn(
  name: str,
  description: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#type DataFactoryDatasetAzureSqlTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#name DataFactoryDatasetAzureSqlTable#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#description DataFactoryDatasetAzureSqlTable#description}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#type DataFactoryDatasetAzureSqlTable#type}.

---

### DataFactoryDatasetAzureSqlTableTimeouts <a name="DataFactoryDatasetAzureSqlTableTimeouts" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#create DataFactoryDatasetAzureSqlTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#delete DataFactoryDatasetAzureSqlTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#read DataFactoryDatasetAzureSqlTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#update DataFactoryDatasetAzureSqlTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#create DataFactoryDatasetAzureSqlTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#delete DataFactoryDatasetAzureSqlTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#read DataFactoryDatasetAzureSqlTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/data_factory_dataset_azure_sql_table#update DataFactoryDatasetAzureSqlTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetAzureSqlTableSchemaColumnList <a name="DataFactoryDatasetAzureSqlTableSchemaColumnList" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFactoryDatasetAzureSqlTableSchemaColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]]

---


### DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference <a name="DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryDatasetAzureSqlTableSchemaColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableSchemaColumn">DataFactoryDatasetAzureSqlTableSchemaColumn</a>]

---


### DataFactoryDatasetAzureSqlTableTimeoutsOutputReference <a name="DataFactoryDatasetAzureSqlTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_dataset_azure_sql_table

dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryDatasetAzureSqlTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryDatasetAzureSqlTable.DataFactoryDatasetAzureSqlTableTimeouts">DataFactoryDatasetAzureSqlTableTimeouts</a>]

---



