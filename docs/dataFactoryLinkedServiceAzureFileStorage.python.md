# `dataFactoryLinkedServiceAzureFileStorage` Submodule <a name="`dataFactoryLinkedServiceAzureFileStorage` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureFileStorage <a name="DataFactoryLinkedServiceAzureFileStorage" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage azurerm_data_factory_linked_service_azure_file_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_string: str,
  data_factory_id: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  file_share: str = None,
  host: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  key_vault_password: DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword = None,
  parameters: typing.Mapping[str] = None,
  password: str = None,
  timeouts: DataFactoryLinkedServiceAzureFileStorageTimeouts = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.fileShare">file_share</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}.

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}.

---

##### `file_share`<sup>Optional</sup> <a name="file_share" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.fileShare"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}.

---

##### `key_vault_password`<sup>Optional</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.keyVaultPassword"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#key_vault_password DataFactoryLinkedServiceAzureFileStorage#key_vault_password}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#timeouts DataFactoryLinkedServiceAzureFileStorage#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putKeyVaultPassword">put_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetFileShare">reset_file_share</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetKeyVaultPassword">reset_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_key_vault_password` <a name="put_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putKeyVaultPassword"></a>

```python
def put_key_vault_password(
  linked_service_name: str,
  secret_name: str
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putKeyVaultPassword.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#linked_service_name DataFactoryLinkedServiceAzureFileStorage#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putKeyVaultPassword.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#secret_name DataFactoryLinkedServiceAzureFileStorage#secret_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#create DataFactoryLinkedServiceAzureFileStorage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#delete DataFactoryLinkedServiceAzureFileStorage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#read DataFactoryLinkedServiceAzureFileStorage#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#update DataFactoryLinkedServiceAzureFileStorage#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_file_share` <a name="reset_file_share" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetFileShare"></a>

```python
def reset_file_share() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_key_vault_password` <a name="reset_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetKeyVaultPassword"></a>

```python
def reset_key_vault_password() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceAzureFileStorage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceAzureFileStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryLinkedServiceAzureFileStorage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryLinkedServiceAzureFileStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureFileStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShareInput">file_share_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPasswordInput">key_vault_password_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShare">file_share</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_password`<sup>Required</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `file_share_input`<sup>Optional</sup> <a name="file_share_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShareInput"></a>

```python
file_share_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `key_vault_password_input`<sup>Optional</sup> <a name="key_vault_password_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPasswordInput"></a>

```python
key_vault_password_input: DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryLinkedServiceAzureFileStorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `file_share`<sup>Required</sup> <a name="file_share" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShare"></a>

```python
file_share: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureFileStorageConfig <a name="DataFactoryLinkedServiceAzureFileStorageConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_string: str,
  data_factory_id: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  file_share: str = None,
  host: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  key_vault_password: DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword = None,
  parameters: typing.Mapping[str] = None,
  password: str = None,
  timeouts: DataFactoryLinkedServiceAzureFileStorageTimeouts = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.fileShare">file_share</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}.

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}.

---

##### `file_share`<sup>Optional</sup> <a name="file_share" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.fileShare"></a>

```python
file_share: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}.

---

##### `key_vault_password`<sup>Optional</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#key_vault_password DataFactoryLinkedServiceAzureFileStorage#key_vault_password}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureFileStorageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#timeouts DataFactoryLinkedServiceAzureFileStorage#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}.

---

### DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword <a name="DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword(
  linked_service_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#linked_service_name DataFactoryLinkedServiceAzureFileStorage#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#secret_name DataFactoryLinkedServiceAzureFileStorage#secret_name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#linked_service_name DataFactoryLinkedServiceAzureFileStorage#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#secret_name DataFactoryLinkedServiceAzureFileStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureFileStorageTimeouts <a name="DataFactoryLinkedServiceAzureFileStorageTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#create DataFactoryLinkedServiceAzureFileStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#delete DataFactoryLinkedServiceAzureFileStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#read DataFactoryLinkedServiceAzureFileStorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#update DataFactoryLinkedServiceAzureFileStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#create DataFactoryLinkedServiceAzureFileStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#delete DataFactoryLinkedServiceAzureFileStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#read DataFactoryLinkedServiceAzureFileStorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/data_factory_linked_service_azure_file_storage#update DataFactoryLinkedServiceAzureFileStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

---


### DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_file_storage

dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryLinkedServiceAzureFileStorageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>]

---



