# `dataFactoryLinkedServiceCosmosdbMongoapi` Submodule <a name="`dataFactoryLinkedServiceCosmosdbMongoapi` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapi <a name="DataFactoryLinkedServiceCosmosdbMongoapi" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi azurerm_data_factory_linked_service_cosmosdb_mongoapi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi(
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
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  connection_string: str = None,
  database: str = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  parameters: typing.Mapping[str] = None,
  server_version_is32_or_higher: typing.Union[bool, IResolvable] = None,
  timeouts: DataFactoryLinkedServiceCosmosdbMongoapiTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.serverVersionIs32OrHigher">server_version_is32_or_higher</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}.

---

##### `server_version_is32_or_higher`<sup>Optional</sup> <a name="server_version_is32_or_higher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.serverVersionIs32OrHigher"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#timeouts DataFactoryLinkedServiceCosmosdbMongoapi#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher">reset_server_version_is32_or_higher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_server_version_is32_or_higher` <a name="reset_server_version_is32_or_higher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher"></a>

```python
def reset_server_version_is32_or_higher() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdbMongoapi resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdbMongoapi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryLinkedServiceCosmosdbMongoapi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryLinkedServiceCosmosdbMongoapi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceCosmosdbMongoapi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput">server_version_is32_or_higher_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher">server_version_is32_or_higher</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `server_version_is32_or_higher_input`<sup>Optional</sup> <a name="server_version_is32_or_higher_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput"></a>

```python
server_version_is32_or_higher_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryLinkedServiceCosmosdbMongoapiTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `server_version_is32_or_higher`<sup>Required</sup> <a name="server_version_is32_or_higher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher"></a>

```python
server_version_is32_or_higher: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiConfig <a name="DataFactoryLinkedServiceCosmosdbMongoapiConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  connection_string: str = None,
  database: str = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  parameters: typing.Mapping[str] = None,
  server_version_is32_or_higher: typing.Union[bool, IResolvable] = None,
  timeouts: DataFactoryLinkedServiceCosmosdbMongoapiTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher">server_version_is32_or_higher</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}.

---

##### `server_version_is32_or_higher`<sup>Optional</sup> <a name="server_version_is32_or_higher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher"></a>

```python
server_version_is32_or_higher: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceCosmosdbMongoapiTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#timeouts DataFactoryLinkedServiceCosmosdbMongoapi#timeouts}

---

### DataFactoryLinkedServiceCosmosdbMongoapiTimeouts <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_cosmosdb_mongoapi

dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryLinkedServiceCosmosdbMongoapiTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>]

---



