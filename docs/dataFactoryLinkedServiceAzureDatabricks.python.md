# `azurerm_data_factory_linked_service_azure_databricks`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_linked_service_azure_databricks`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks).

# `dataFactoryLinkedServiceAzureDatabricks` Submodule <a name="`dataFactoryLinkedServiceAzureDatabricks` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureDatabricks <a name="DataFactoryLinkedServiceAzureDatabricks" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks azurerm_data_factory_linked_service_azure_databricks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  adb_domain: str,
  data_factory_id: str,
  name: str,
  access_token: str = None,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  existing_cluster_id: str = None,
  id: str = None,
  instance_pool: DataFactoryLinkedServiceAzureDatabricksInstancePool = None,
  integration_runtime_name: str = None,
  key_vault_password: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword = None,
  msi_work_space_resource_id: str = None,
  new_cluster_config: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig = None,
  parameters: typing.Mapping[str] = None,
  timeouts: DataFactoryLinkedServiceAzureDatabricksTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.adbDomain">adb_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#data_factory_id DataFactoryLinkedServiceAzureDatabricks#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#name DataFactoryLinkedServiceAzureDatabricks#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#description DataFactoryLinkedServiceAzureDatabricks#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.existingClusterId">existing_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#id DataFactoryLinkedServiceAzureDatabricks#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.instancePool">instance_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a></code> | instance_pool block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.msiWorkSpaceResourceId">msi_work_space_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#msi_work_space_resource_id DataFactoryLinkedServiceAzureDatabricks#msi_work_space_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.newClusterConfig">new_cluster_config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a></code> | new_cluster_config block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adb_domain`<sup>Required</sup> <a name="adb_domain" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.adbDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}.

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#data_factory_id DataFactoryLinkedServiceAzureDatabricks#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#name DataFactoryLinkedServiceAzureDatabricks#name}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#description DataFactoryLinkedServiceAzureDatabricks#description}.

---

##### `existing_cluster_id`<sup>Optional</sup> <a name="existing_cluster_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.existingClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#id DataFactoryLinkedServiceAzureDatabricks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_pool`<sup>Optional</sup> <a name="instance_pool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.instancePool"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#instance_pool DataFactoryLinkedServiceAzureDatabricks#instance_pool}

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}.

---

##### `key_vault_password`<sup>Optional</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.keyVaultPassword"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#key_vault_password DataFactoryLinkedServiceAzureDatabricks#key_vault_password}

---

##### `msi_work_space_resource_id`<sup>Optional</sup> <a name="msi_work_space_resource_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.msiWorkSpaceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#msi_work_space_resource_id DataFactoryLinkedServiceAzureDatabricks#msi_work_space_resource_id}.

---

##### `new_cluster_config`<sup>Optional</sup> <a name="new_cluster_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.newClusterConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

new_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#new_cluster_config DataFactoryLinkedServiceAzureDatabricks#new_cluster_config}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#timeouts DataFactoryLinkedServiceAzureDatabricks#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool">put_instance_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putKeyVaultPassword">put_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig">put_new_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetExistingClusterId">reset_existing_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetInstancePool">reset_instance_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetKeyVaultPassword">reset_key_vault_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetMsiWorkSpaceResourceId">reset_msi_work_space_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetNewClusterConfig">reset_new_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_instance_pool` <a name="put_instance_pool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool"></a>

```python
def put_instance_pool(
  cluster_version: str,
  instance_pool_id: str,
  max_number_of_workers: typing.Union[int, float] = None,
  min_number_of_workers: typing.Union[int, float] = None
) -> None
```

###### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}.

---

###### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool.parameter.instancePoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#instance_pool_id DataFactoryLinkedServiceAzureDatabricks#instance_pool_id}.

---

###### `max_number_of_workers`<sup>Optional</sup> <a name="max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool.parameter.maxNumberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}.

---

###### `min_number_of_workers`<sup>Optional</sup> <a name="min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putInstancePool.parameter.minNumberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}.

---

##### `put_key_vault_password` <a name="put_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putKeyVaultPassword"></a>

```python
def put_key_vault_password(
  linked_service_name: str,
  secret_name: str
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putKeyVaultPassword.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#linked_service_name DataFactoryLinkedServiceAzureDatabricks#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putKeyVaultPassword.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#secret_name DataFactoryLinkedServiceAzureDatabricks#secret_name}.

---

##### `put_new_cluster_config` <a name="put_new_cluster_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig"></a>

```python
def put_new_cluster_config(
  cluster_version: str,
  node_type: str,
  custom_tags: typing.Mapping[str] = None,
  driver_node_type: str = None,
  init_scripts: typing.List[str] = None,
  log_destination: str = None,
  max_number_of_workers: typing.Union[int, float] = None,
  min_number_of_workers: typing.Union[int, float] = None,
  spark_config: typing.Mapping[str] = None,
  spark_environment_variables: typing.Mapping[str] = None
) -> None
```

###### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.clusterVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}.

---

###### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#node_type DataFactoryLinkedServiceAzureDatabricks#node_type}.

---

###### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#custom_tags DataFactoryLinkedServiceAzureDatabricks#custom_tags}.

---

###### `driver_node_type`<sup>Optional</sup> <a name="driver_node_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.driverNodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#driver_node_type DataFactoryLinkedServiceAzureDatabricks#driver_node_type}.

---

###### `init_scripts`<sup>Optional</sup> <a name="init_scripts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.initScripts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#init_scripts DataFactoryLinkedServiceAzureDatabricks#init_scripts}.

---

###### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.logDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#log_destination DataFactoryLinkedServiceAzureDatabricks#log_destination}.

---

###### `max_number_of_workers`<sup>Optional</sup> <a name="max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.maxNumberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}.

---

###### `min_number_of_workers`<sup>Optional</sup> <a name="min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.minNumberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}.

---

###### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.sparkConfig"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#spark_config DataFactoryLinkedServiceAzureDatabricks#spark_config}.

---

###### `spark_environment_variables`<sup>Optional</sup> <a name="spark_environment_variables" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putNewClusterConfig.parameter.sparkEnvironmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#spark_environment_variables DataFactoryLinkedServiceAzureDatabricks#spark_environment_variables}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#create DataFactoryLinkedServiceAzureDatabricks#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#delete DataFactoryLinkedServiceAzureDatabricks#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#read DataFactoryLinkedServiceAzureDatabricks#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#update DataFactoryLinkedServiceAzureDatabricks#update}.

---

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_existing_cluster_id` <a name="reset_existing_cluster_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetExistingClusterId"></a>

```python
def reset_existing_cluster_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_pool` <a name="reset_instance_pool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetInstancePool"></a>

```python
def reset_instance_pool() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_key_vault_password` <a name="reset_key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetKeyVaultPassword"></a>

```python
def reset_key_vault_password() -> None
```

##### `reset_msi_work_space_resource_id` <a name="reset_msi_work_space_resource_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetMsiWorkSpaceResourceId"></a>

```python
def reset_msi_work_space_resource_id() -> None
```

##### `reset_new_cluster_config` <a name="reset_new_cluster_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetNewClusterConfig"></a>

```python
def reset_new_cluster_config() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePool">instance_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference">DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfig">new_cluster_config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference">DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference">DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomainInput">adb_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterIdInput">existing_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePoolInput">instance_pool_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPasswordInput">key_vault_password_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceIdInput">msi_work_space_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfigInput">new_cluster_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomain">adb_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterId">existing_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceId">msi_work_space_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_pool`<sup>Required</sup> <a name="instance_pool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePool"></a>

```python
instance_pool: DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference">DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference</a>

---

##### `key_vault_password`<sup>Required</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference</a>

---

##### `new_cluster_config`<sup>Required</sup> <a name="new_cluster_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfig"></a>

```python
new_cluster_config: DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference">DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference">DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference</a>

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `adb_domain_input`<sup>Optional</sup> <a name="adb_domain_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomainInput"></a>

```python
adb_domain_input: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `existing_cluster_id_input`<sup>Optional</sup> <a name="existing_cluster_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterIdInput"></a>

```python
existing_cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_pool_input`<sup>Optional</sup> <a name="instance_pool_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.instancePoolInput"></a>

```python
instance_pool_input: DataFactoryLinkedServiceAzureDatabricksInstancePool
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `key_vault_password_input`<sup>Optional</sup> <a name="key_vault_password_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.keyVaultPasswordInput"></a>

```python
key_vault_password_input: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

---

##### `msi_work_space_resource_id_input`<sup>Optional</sup> <a name="msi_work_space_resource_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceIdInput"></a>

```python
msi_work_space_resource_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `new_cluster_config_input`<sup>Optional</sup> <a name="new_cluster_config_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.newClusterConfigInput"></a>

```python
new_cluster_config_input: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryLinkedServiceAzureDatabricksTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>]

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `adb_domain`<sup>Required</sup> <a name="adb_domain" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.adbDomain"></a>

```python
adb_domain: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `existing_cluster_id`<sup>Required</sup> <a name="existing_cluster_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.existingClusterId"></a>

```python
existing_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `msi_work_space_resource_id`<sup>Required</sup> <a name="msi_work_space_resource_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.msiWorkSpaceResourceId"></a>

```python
msi_work_space_resource_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureDatabricksConfig <a name="DataFactoryLinkedServiceAzureDatabricksConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  adb_domain: str,
  data_factory_id: str,
  name: str,
  access_token: str = None,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  existing_cluster_id: str = None,
  id: str = None,
  instance_pool: DataFactoryLinkedServiceAzureDatabricksInstancePool = None,
  integration_runtime_name: str = None,
  key_vault_password: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword = None,
  msi_work_space_resource_id: str = None,
  new_cluster_config: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig = None,
  parameters: typing.Mapping[str] = None,
  timeouts: DataFactoryLinkedServiceAzureDatabricksTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.adbDomain">adb_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#data_factory_id DataFactoryLinkedServiceAzureDatabricks#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#name DataFactoryLinkedServiceAzureDatabricks#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#description DataFactoryLinkedServiceAzureDatabricks#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.existingClusterId">existing_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#id DataFactoryLinkedServiceAzureDatabricks#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.instancePool">instance_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a></code> | instance_pool block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.keyVaultPassword">key_vault_password</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.msiWorkSpaceResourceId">msi_work_space_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#msi_work_space_resource_id DataFactoryLinkedServiceAzureDatabricks#msi_work_space_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.newClusterConfig">new_cluster_config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a></code> | new_cluster_config block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adb_domain`<sup>Required</sup> <a name="adb_domain" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.adbDomain"></a>

```python
adb_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}.

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#data_factory_id DataFactoryLinkedServiceAzureDatabricks#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#name DataFactoryLinkedServiceAzureDatabricks#name}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#description DataFactoryLinkedServiceAzureDatabricks#description}.

---

##### `existing_cluster_id`<sup>Optional</sup> <a name="existing_cluster_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.existingClusterId"></a>

```python
existing_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#id DataFactoryLinkedServiceAzureDatabricks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_pool`<sup>Optional</sup> <a name="instance_pool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.instancePool"></a>

```python
instance_pool: DataFactoryLinkedServiceAzureDatabricksInstancePool
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#instance_pool DataFactoryLinkedServiceAzureDatabricks#instance_pool}

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}.

---

##### `key_vault_password`<sup>Optional</sup> <a name="key_vault_password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.keyVaultPassword"></a>

```python
key_vault_password: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#key_vault_password DataFactoryLinkedServiceAzureDatabricks#key_vault_password}

---

##### `msi_work_space_resource_id`<sup>Optional</sup> <a name="msi_work_space_resource_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.msiWorkSpaceResourceId"></a>

```python
msi_work_space_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#msi_work_space_resource_id DataFactoryLinkedServiceAzureDatabricks#msi_work_space_resource_id}.

---

##### `new_cluster_config`<sup>Optional</sup> <a name="new_cluster_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.newClusterConfig"></a>

```python
new_cluster_config: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

new_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#new_cluster_config DataFactoryLinkedServiceAzureDatabricks#new_cluster_config}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksConfig.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureDatabricksTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#timeouts DataFactoryLinkedServiceAzureDatabricks#timeouts}

---

### DataFactoryLinkedServiceAzureDatabricksInstancePool <a name="DataFactoryLinkedServiceAzureDatabricksInstancePool" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool(
  cluster_version: str,
  instance_pool_id: str,
  max_number_of_workers: typing.Union[int, float] = None,
  min_number_of_workers: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#instance_pool_id DataFactoryLinkedServiceAzureDatabricks#instance_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.maxNumberOfWorkers">max_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.minNumberOfWorkers">min_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}. |

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}.

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#instance_pool_id DataFactoryLinkedServiceAzureDatabricks#instance_pool_id}.

---

##### `max_number_of_workers`<sup>Optional</sup> <a name="max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.maxNumberOfWorkers"></a>

```python
max_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}.

---

##### `min_number_of_workers`<sup>Optional</sup> <a name="min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool.property.minNumberOfWorkers"></a>

```python
min_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}.

---

### DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword <a name="DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword(
  linked_service_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#linked_service_name DataFactoryLinkedServiceAzureDatabricks#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#secret_name DataFactoryLinkedServiceAzureDatabricks#secret_name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#linked_service_name DataFactoryLinkedServiceAzureDatabricks#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#secret_name DataFactoryLinkedServiceAzureDatabricks#secret_name}.

---

### DataFactoryLinkedServiceAzureDatabricksNewClusterConfig <a name="DataFactoryLinkedServiceAzureDatabricksNewClusterConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig(
  cluster_version: str,
  node_type: str,
  custom_tags: typing.Mapping[str] = None,
  driver_node_type: str = None,
  init_scripts: typing.List[str] = None,
  log_destination: str = None,
  max_number_of_workers: typing.Union[int, float] = None,
  min_number_of_workers: typing.Union[int, float] = None,
  spark_config: typing.Mapping[str] = None,
  spark_environment_variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#node_type DataFactoryLinkedServiceAzureDatabricks#node_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#custom_tags DataFactoryLinkedServiceAzureDatabricks#custom_tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.driverNodeType">driver_node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#driver_node_type DataFactoryLinkedServiceAzureDatabricks#driver_node_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.initScripts">init_scripts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#init_scripts DataFactoryLinkedServiceAzureDatabricks#init_scripts}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.logDestination">log_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#log_destination DataFactoryLinkedServiceAzureDatabricks#log_destination}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.maxNumberOfWorkers">max_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.minNumberOfWorkers">min_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkConfig">spark_config</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#spark_config DataFactoryLinkedServiceAzureDatabricks#spark_config}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkEnvironmentVariables">spark_environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#spark_environment_variables DataFactoryLinkedServiceAzureDatabricks#spark_environment_variables}. |

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#node_type DataFactoryLinkedServiceAzureDatabricks#node_type}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#custom_tags DataFactoryLinkedServiceAzureDatabricks#custom_tags}.

---

##### `driver_node_type`<sup>Optional</sup> <a name="driver_node_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.driverNodeType"></a>

```python
driver_node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#driver_node_type DataFactoryLinkedServiceAzureDatabricks#driver_node_type}.

---

##### `init_scripts`<sup>Optional</sup> <a name="init_scripts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.initScripts"></a>

```python
init_scripts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#init_scripts DataFactoryLinkedServiceAzureDatabricks#init_scripts}.

---

##### `log_destination`<sup>Optional</sup> <a name="log_destination" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#log_destination DataFactoryLinkedServiceAzureDatabricks#log_destination}.

---

##### `max_number_of_workers`<sup>Optional</sup> <a name="max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.maxNumberOfWorkers"></a>

```python
max_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}.

---

##### `min_number_of_workers`<sup>Optional</sup> <a name="min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.minNumberOfWorkers"></a>

```python
min_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}.

---

##### `spark_config`<sup>Optional</sup> <a name="spark_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkConfig"></a>

```python
spark_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#spark_config DataFactoryLinkedServiceAzureDatabricks#spark_config}.

---

##### `spark_environment_variables`<sup>Optional</sup> <a name="spark_environment_variables" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig.property.sparkEnvironmentVariables"></a>

```python
spark_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#spark_environment_variables DataFactoryLinkedServiceAzureDatabricks#spark_environment_variables}.

---

### DataFactoryLinkedServiceAzureDatabricksTimeouts <a name="DataFactoryLinkedServiceAzureDatabricksTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#create DataFactoryLinkedServiceAzureDatabricks#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#delete DataFactoryLinkedServiceAzureDatabricks#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#read DataFactoryLinkedServiceAzureDatabricks#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#update DataFactoryLinkedServiceAzureDatabricks#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#create DataFactoryLinkedServiceAzureDatabricks#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#delete DataFactoryLinkedServiceAzureDatabricks#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#read DataFactoryLinkedServiceAzureDatabricks#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/data_factory_linked_service_azure_databricks#update DataFactoryLinkedServiceAzureDatabricks#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMaxNumberOfWorkers">reset_max_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMinNumberOfWorkers">reset_min_number_of_workers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_number_of_workers` <a name="reset_max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMaxNumberOfWorkers"></a>

```python
def reset_max_number_of_workers() -> None
```

##### `reset_min_number_of_workers` <a name="reset_min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.resetMinNumberOfWorkers"></a>

```python
def reset_min_number_of_workers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolIdInput">instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkersInput">max_number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkersInput">min_number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkers">max_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkers">min_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `instance_pool_id_input`<sup>Optional</sup> <a name="instance_pool_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolIdInput"></a>

```python
instance_pool_id_input: str
```

- *Type:* str

---

##### `max_number_of_workers_input`<sup>Optional</sup> <a name="max_number_of_workers_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkersInput"></a>

```python
max_number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_number_of_workers_input`<sup>Optional</sup> <a name="min_number_of_workers_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkersInput"></a>

```python
min_number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `max_number_of_workers`<sup>Required</sup> <a name="max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.maxNumberOfWorkers"></a>

```python
max_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_number_of_workers`<sup>Required</sup> <a name="min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.minNumberOfWorkers"></a>

```python
min_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureDatabricksInstancePool
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksInstancePool">DataFactoryLinkedServiceAzureDatabricksInstancePool</a>

---


### DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword">DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword</a>

---


### DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetDriverNodeType">reset_driver_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetInitScripts">reset_init_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetLogDestination">reset_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMaxNumberOfWorkers">reset_max_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMinNumberOfWorkers">reset_min_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkConfig">reset_spark_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkEnvironmentVariables">reset_spark_environment_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_driver_node_type` <a name="reset_driver_node_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetDriverNodeType"></a>

```python
def reset_driver_node_type() -> None
```

##### `reset_init_scripts` <a name="reset_init_scripts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetInitScripts"></a>

```python
def reset_init_scripts() -> None
```

##### `reset_log_destination` <a name="reset_log_destination" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetLogDestination"></a>

```python
def reset_log_destination() -> None
```

##### `reset_max_number_of_workers` <a name="reset_max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMaxNumberOfWorkers"></a>

```python
def reset_max_number_of_workers() -> None
```

##### `reset_min_number_of_workers` <a name="reset_min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetMinNumberOfWorkers"></a>

```python
def reset_min_number_of_workers() -> None
```

##### `reset_spark_config` <a name="reset_spark_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkConfig"></a>

```python
def reset_spark_config() -> None
```

##### `reset_spark_environment_variables` <a name="reset_spark_environment_variables" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.resetSparkEnvironmentVariables"></a>

```python
def reset_spark_environment_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeTypeInput">driver_node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScriptsInput">init_scripts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestinationInput">log_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkersInput">max_number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkersInput">min_number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfigInput">spark_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariablesInput">spark_environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeType">driver_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScripts">init_scripts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestination">log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkers">max_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkers">min_number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfig">spark_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariables">spark_environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_node_type_input`<sup>Optional</sup> <a name="driver_node_type_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeTypeInput"></a>

```python
driver_node_type_input: str
```

- *Type:* str

---

##### `init_scripts_input`<sup>Optional</sup> <a name="init_scripts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScriptsInput"></a>

```python
init_scripts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_destination_input`<sup>Optional</sup> <a name="log_destination_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestinationInput"></a>

```python
log_destination_input: str
```

- *Type:* str

---

##### `max_number_of_workers_input`<sup>Optional</sup> <a name="max_number_of_workers_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkersInput"></a>

```python
max_number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_number_of_workers_input`<sup>Optional</sup> <a name="min_number_of_workers_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkersInput"></a>

```python
min_number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `spark_config_input`<sup>Optional</sup> <a name="spark_config_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfigInput"></a>

```python
spark_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_environment_variables_input`<sup>Optional</sup> <a name="spark_environment_variables_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariablesInput"></a>

```python
spark_environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_node_type`<sup>Required</sup> <a name="driver_node_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.driverNodeType"></a>

```python
driver_node_type: str
```

- *Type:* str

---

##### `init_scripts`<sup>Required</sup> <a name="init_scripts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.initScripts"></a>

```python
init_scripts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

---

##### `max_number_of_workers`<sup>Required</sup> <a name="max_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.maxNumberOfWorkers"></a>

```python
max_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_number_of_workers`<sup>Required</sup> <a name="min_number_of_workers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.minNumberOfWorkers"></a>

```python
min_number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `spark_config`<sup>Required</sup> <a name="spark_config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkConfig"></a>

```python
spark_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_environment_variables`<sup>Required</sup> <a name="spark_environment_variables" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.sparkEnvironmentVariables"></a>

```python
spark_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksNewClusterConfig">DataFactoryLinkedServiceAzureDatabricksNewClusterConfig</a>

---


### DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_databricks

dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryLinkedServiceAzureDatabricksTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureDatabricks.DataFactoryLinkedServiceAzureDatabricksTimeouts">DataFactoryLinkedServiceAzureDatabricksTimeouts</a>]

---



