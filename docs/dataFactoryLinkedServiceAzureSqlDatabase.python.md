# `dataFactoryLinkedServiceAzureSqlDatabase` Submodule <a name="`dataFactoryLinkedServiceAzureSqlDatabase` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureSqlDatabase <a name="DataFactoryLinkedServiceAzureSqlDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database azurerm_data_factory_linked_service_azure_sql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase(
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
  credential_name: str = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  key_vault_connection_string: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString = None,
  key_vault_password: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword = None,
  parameters: typing.Mapping[str] = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  tenant_id: str = None,
  timeouts: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#data_factory_id DataFactoryLinkedServiceAzureSqlDatabase#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#name DataFactoryLinkedServiceAzureSqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#additional_properties DataFactoryLinkedServiceAzureSqlDatabase#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#annotations DataFactoryLinkedServiceAzureSqlDatabase#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#connection_string DataFactoryLinkedServiceAzureSqlDatabase#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#credential_name DataFactoryLinkedServiceAzureSqlDatabase#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#description DataFactoryLinkedServiceAzureSqlDatabase#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#id DataFactoryLinkedServiceAzureSqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#integration_runtime_name DataFactoryLinkedServiceAzureSqlDatabase#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.keyVaultConnectionString">key_vault_connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a></code> | key_vault_connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#parameters DataFactoryLinkedServiceAzureSqlDatabase#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_id DataFactoryLinkedServiceAzureSqlDatabase#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_key DataFactoryLinkedServiceAzureSqlDatabase#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#tenant_id DataFactoryLinkedServiceAzureSqlDatabase#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#use_managed_identity DataFactoryLinkedServiceAzureSqlDatabase#use_managed_identity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#data_factory_id DataFactoryLinkedServiceAzureSqlDatabase#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#name DataFactoryLinkedServiceAzureSqlDatabase#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#additional_properties DataFactoryLinkedServiceAzureSqlDatabase#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#annotations DataFactoryLinkedServiceAzureSqlDatabase#annotations}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#connection_string DataFactoryLinkedServiceAzureSqlDatabase#connection_string}.

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.credentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#credential_name DataFactoryLinkedServiceAzureSqlDatabase#credential_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#description DataFactoryLinkedServiceAzureSqlDatabase#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#id DataFactoryLinkedServiceAzureSqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#integration_runtime_name DataFactoryLinkedServiceAzureSqlDatabase#integration_runtime_name}.

---

##### `key_vault_connection_string`<sup>Optional</sup> <a name="key_vault_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.keyVaultConnectionString"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

key_vault_connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#key_vault_connection_string DataFactoryLinkedServiceAzureSqlDatabase#key_vault_connection_string}

---

##### `key_vault_password`<sup>Optional</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.keyVaultPassword"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#key_vault_password DataFactoryLinkedServiceAzureSqlDatabase#key_vault_password}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#parameters DataFactoryLinkedServiceAzureSqlDatabase#parameters}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_id DataFactoryLinkedServiceAzureSqlDatabase#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.servicePrincipalKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_key DataFactoryLinkedServiceAzureSqlDatabase#service_principal_key}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#tenant_id DataFactoryLinkedServiceAzureSqlDatabase#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#timeouts DataFactoryLinkedServiceAzureSqlDatabase#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.Initializer.parameter.useManagedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#use_managed_identity DataFactoryLinkedServiceAzureSqlDatabase#use_managed_identity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultConnectionString">put_key_vault_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultPassword">put_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetCredentialName">reset_credential_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultConnectionString">reset_key_vault_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultPassword">reset_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalId">reset_service_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalKey">reset_service_principal_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetUseManagedIdentity">reset_use_managed_identity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_key_vault_connection_string` <a name="put_key_vault_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultConnectionString"></a>

```python
def put_key_vault_connection_string(
  linked_service_name: str,
  secret_name: str
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultConnectionString.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultConnectionString.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}.

---

##### `put_key_vault_password` <a name="put_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultPassword"></a>

```python
def put_key_vault_password(
  linked_service_name: str,
  secret_name: str
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultPassword.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putKeyVaultPassword.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#create DataFactoryLinkedServiceAzureSqlDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#delete DataFactoryLinkedServiceAzureSqlDatabase#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#read DataFactoryLinkedServiceAzureSqlDatabase#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#update DataFactoryLinkedServiceAzureSqlDatabase#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_credential_name` <a name="reset_credential_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_key_vault_connection_string` <a name="reset_key_vault_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultConnectionString"></a>

```python
def reset_key_vault_connection_string() -> None
```

##### `reset_key_vault_password` <a name="reset_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetKeyVaultPassword"></a>

```python
def reset_key_vault_password() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_service_principal_id` <a name="reset_service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalId"></a>

```python
def reset_service_principal_id() -> None
```

##### `reset_service_principal_key` <a name="reset_service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetServicePrincipalKey"></a>

```python
def reset_service_principal_key() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_managed_identity` <a name="reset_use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.resetUseManagedIdentity"></a>

```python
def reset_use_managed_identity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceAzureSqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceAzureSqlDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryLinkedServiceAzureSqlDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryLinkedServiceAzureSqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureSqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionString">key_vault_connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionStringInput">key_vault_connection_string_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPasswordInput">key_vault_password_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKeyInput">service_principal_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentityInput">use_managed_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_connection_string`<sup>Required</sup> <a name="key_vault_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionString"></a>

```python
key_vault_connection_string: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference</a>

---

##### `key_vault_password`<sup>Required</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference">DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `key_vault_connection_string_input`<sup>Optional</sup> <a name="key_vault_connection_string_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultConnectionStringInput"></a>

```python
key_vault_connection_string_input: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

---

##### `key_vault_password_input`<sup>Optional</sup> <a name="key_vault_password_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.keyVaultPasswordInput"></a>

```python
key_vault_password_input: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `service_principal_key_input`<sup>Optional</sup> <a name="service_principal_key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKeyInput"></a>

```python
service_principal_key_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryLinkedServiceAzureSqlDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>]

---

##### `use_managed_identity_input`<sup>Optional</sup> <a name="use_managed_identity_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentityInput"></a>

```python
use_managed_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `service_principal_key`<sup>Required</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `use_managed_identity`<sup>Required</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureSqlDatabaseConfig <a name="DataFactoryLinkedServiceAzureSqlDatabaseConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig(
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
  credential_name: str = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  key_vault_connection_string: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString = None,
  key_vault_password: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword = None,
  parameters: typing.Mapping[str] = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  tenant_id: str = None,
  timeouts: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#data_factory_id DataFactoryLinkedServiceAzureSqlDatabase#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#name DataFactoryLinkedServiceAzureSqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#additional_properties DataFactoryLinkedServiceAzureSqlDatabase#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#annotations DataFactoryLinkedServiceAzureSqlDatabase#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#connection_string DataFactoryLinkedServiceAzureSqlDatabase#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#credential_name DataFactoryLinkedServiceAzureSqlDatabase#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#description DataFactoryLinkedServiceAzureSqlDatabase#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#id DataFactoryLinkedServiceAzureSqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#integration_runtime_name DataFactoryLinkedServiceAzureSqlDatabase#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultConnectionString">key_vault_connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a></code> | key_vault_connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#parameters DataFactoryLinkedServiceAzureSqlDatabase#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_id DataFactoryLinkedServiceAzureSqlDatabase#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_key DataFactoryLinkedServiceAzureSqlDatabase#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#tenant_id DataFactoryLinkedServiceAzureSqlDatabase#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#use_managed_identity DataFactoryLinkedServiceAzureSqlDatabase#use_managed_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#data_factory_id DataFactoryLinkedServiceAzureSqlDatabase#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#name DataFactoryLinkedServiceAzureSqlDatabase#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#additional_properties DataFactoryLinkedServiceAzureSqlDatabase#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#annotations DataFactoryLinkedServiceAzureSqlDatabase#annotations}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#connection_string DataFactoryLinkedServiceAzureSqlDatabase#connection_string}.

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#credential_name DataFactoryLinkedServiceAzureSqlDatabase#credential_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#description DataFactoryLinkedServiceAzureSqlDatabase#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#id DataFactoryLinkedServiceAzureSqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#integration_runtime_name DataFactoryLinkedServiceAzureSqlDatabase#integration_runtime_name}.

---

##### `key_vault_connection_string`<sup>Optional</sup> <a name="key_vault_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultConnectionString"></a>

```python
key_vault_connection_string: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

key_vault_connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#key_vault_connection_string DataFactoryLinkedServiceAzureSqlDatabase#key_vault_connection_string}

---

##### `key_vault_password`<sup>Optional</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#key_vault_password DataFactoryLinkedServiceAzureSqlDatabase#key_vault_password}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#parameters DataFactoryLinkedServiceAzureSqlDatabase#parameters}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_id DataFactoryLinkedServiceAzureSqlDatabase#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#service_principal_key DataFactoryLinkedServiceAzureSqlDatabase#service_principal_key}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#tenant_id DataFactoryLinkedServiceAzureSqlDatabase#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureSqlDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#timeouts DataFactoryLinkedServiceAzureSqlDatabase#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseConfig.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#use_managed_identity DataFactoryLinkedServiceAzureSqlDatabase#use_managed_identity}.

---

### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString(
  linked_service_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}.

---

### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword(
  linked_service_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#linked_service_name DataFactoryLinkedServiceAzureSqlDatabase#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#secret_name DataFactoryLinkedServiceAzureSqlDatabase#secret_name}.

---

### DataFactoryLinkedServiceAzureSqlDatabaseTimeouts <a name="DataFactoryLinkedServiceAzureSqlDatabaseTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#create DataFactoryLinkedServiceAzureSqlDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#delete DataFactoryLinkedServiceAzureSqlDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#read DataFactoryLinkedServiceAzureSqlDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#update DataFactoryLinkedServiceAzureSqlDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#create DataFactoryLinkedServiceAzureSqlDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#delete DataFactoryLinkedServiceAzureSqlDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#read DataFactoryLinkedServiceAzureSqlDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/resources/data_factory_linked_service_azure_sql_database#update DataFactoryLinkedServiceAzureSqlDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultConnectionString</a>

---


### DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword">DataFactoryLinkedServiceAzureSqlDatabaseKeyVaultPassword</a>

---


### DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_sql_database

dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryLinkedServiceAzureSqlDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureSqlDatabase.DataFactoryLinkedServiceAzureSqlDatabaseTimeouts">DataFactoryLinkedServiceAzureSqlDatabaseTimeouts</a>]

---



