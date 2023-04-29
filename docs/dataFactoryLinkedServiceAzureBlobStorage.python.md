# `azurerm_data_factory_linked_service_azure_blob_storage`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_linked_service_azure_blob_storage`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage).

# `dataFactoryLinkedServiceAzureBlobStorage` Submodule <a name="`dataFactoryLinkedServiceAzureBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureBlobStorage <a name="DataFactoryLinkedServiceAzureBlobStorage" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage azurerm_data_factory_linked_service_azure_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage(
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
  connection_string_insecure: str = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  key_vault_sas_token: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken = None,
  parameters: typing.Mapping[str] = None,
  sas_uri: str = None,
  service_endpoint: str = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  service_principal_linked_key_vault_key: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey = None,
  storage_kind: str = None,
  tenant_id: str = None,
  timeouts: DataFactoryLinkedServiceAzureBlobStorageTimeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.connectionStringInsecure">connection_string_insecure</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.keyVaultSasToken">key_vault_sas_token</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | key_vault_sas_token block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.sasUri">sas_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.serviceEndpoint">service_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.servicePrincipalLinkedKeyVaultKey">service_principal_linked_key_vault_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | service_principal_linked_key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.storageKind">storage_kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}.

---

##### `connection_string_insecure`<sup>Optional</sup> <a name="connection_string_insecure" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.connectionStringInsecure"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}.

---

##### `key_vault_sas_token`<sup>Optional</sup> <a name="key_vault_sas_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.keyVaultSasToken"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

key_vault_sas_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#key_vault_sas_token DataFactoryLinkedServiceAzureBlobStorage#key_vault_sas_token}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}.

---

##### `sas_uri`<sup>Optional</sup> <a name="sas_uri" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.sasUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}.

---

##### `service_endpoint`<sup>Optional</sup> <a name="service_endpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.serviceEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.servicePrincipalKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}.

---

##### `service_principal_linked_key_vault_key`<sup>Optional</sup> <a name="service_principal_linked_key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.servicePrincipalLinkedKeyVaultKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

service_principal_linked_key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_linked_key_vault_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_linked_key_vault_key}

---

##### `storage_kind`<sup>Optional</sup> <a name="storage_kind" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.storageKind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#timeouts DataFactoryLinkedServiceAzureBlobStorage#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.Initializer.parameter.useManagedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken">put_key_vault_sas_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey">put_service_principal_linked_key_vault_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionStringInsecure">reset_connection_string_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetKeyVaultSasToken">reset_key_vault_sas_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasUri">reset_sas_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServiceEndpoint">reset_service_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalId">reset_service_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalKey">reset_service_principal_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalLinkedKeyVaultKey">reset_service_principal_linked_key_vault_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetStorageKind">reset_storage_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetUseManagedIdentity">reset_use_managed_identity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_key_vault_sas_token` <a name="put_key_vault_sas_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken"></a>

```python
def put_key_vault_sas_token(
  linked_service_name: str,
  secret_name: str
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putKeyVaultSasToken.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

##### `put_service_principal_linked_key_vault_key` <a name="put_service_principal_linked_key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey"></a>

```python
def put_service_principal_linked_key_vault_key(
  linked_service_name: str,
  secret_name: str
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putServicePrincipalLinkedKeyVaultKey.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_connection_string_insecure` <a name="reset_connection_string_insecure" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetConnectionStringInsecure"></a>

```python
def reset_connection_string_insecure() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_key_vault_sas_token` <a name="reset_key_vault_sas_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetKeyVaultSasToken"></a>

```python
def reset_key_vault_sas_token() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_sas_uri` <a name="reset_sas_uri" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetSasUri"></a>

```python
def reset_sas_uri() -> None
```

##### `reset_service_endpoint` <a name="reset_service_endpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServiceEndpoint"></a>

```python
def reset_service_endpoint() -> None
```

##### `reset_service_principal_id` <a name="reset_service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalId"></a>

```python
def reset_service_principal_id() -> None
```

##### `reset_service_principal_key` <a name="reset_service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalKey"></a>

```python
def reset_service_principal_key() -> None
```

##### `reset_service_principal_linked_key_vault_key` <a name="reset_service_principal_linked_key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetServicePrincipalLinkedKeyVaultKey"></a>

```python
def reset_service_principal_linked_key_vault_key() -> None
```

##### `reset_storage_kind` <a name="reset_storage_kind" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetStorageKind"></a>

```python
def reset_storage_kind() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_managed_identity` <a name="reset_use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.resetUseManagedIdentity"></a>

```python
def reset_use_managed_identity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasToken">key_vault_sas_token</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKey">service_principal_linked_key_vault_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecureInput">connection_string_insecure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasTokenInput">key_vault_sas_token_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUriInput">sas_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpointInput">service_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKeyInput">service_principal_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKeyInput">service_principal_linked_key_vault_key_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKindInput">storage_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentityInput">use_managed_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecure">connection_string_insecure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUri">sas_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpoint">service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKind">storage_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_sas_token`<sup>Required</sup> <a name="key_vault_sas_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasToken"></a>

```python
key_vault_sas_token: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference</a>

---

##### `service_principal_linked_key_vault_key`<sup>Required</sup> <a name="service_principal_linked_key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKey"></a>

```python
service_principal_linked_key_vault_key: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `connection_string_insecure_input`<sup>Optional</sup> <a name="connection_string_insecure_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecureInput"></a>

```python
connection_string_insecure_input: str
```

- *Type:* str

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `key_vault_sas_token_input`<sup>Optional</sup> <a name="key_vault_sas_token_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.keyVaultSasTokenInput"></a>

```python
key_vault_sas_token_input: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sas_uri_input`<sup>Optional</sup> <a name="sas_uri_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUriInput"></a>

```python
sas_uri_input: str
```

- *Type:* str

---

##### `service_endpoint_input`<sup>Optional</sup> <a name="service_endpoint_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpointInput"></a>

```python
service_endpoint_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `service_principal_key_input`<sup>Optional</sup> <a name="service_principal_key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKeyInput"></a>

```python
service_principal_key_input: str
```

- *Type:* str

---

##### `service_principal_linked_key_vault_key_input`<sup>Optional</sup> <a name="service_principal_linked_key_vault_key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalLinkedKeyVaultKeyInput"></a>

```python
service_principal_linked_key_vault_key_input: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---

##### `storage_kind_input`<sup>Optional</sup> <a name="storage_kind_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKindInput"></a>

```python
storage_kind_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataFactoryLinkedServiceAzureBlobStorageTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>, cdktf.IResolvable]

---

##### `use_managed_identity_input`<sup>Optional</sup> <a name="use_managed_identity_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentityInput"></a>

```python
use_managed_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `connection_string_insecure`<sup>Required</sup> <a name="connection_string_insecure" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.connectionStringInsecure"></a>

```python
connection_string_insecure: str
```

- *Type:* str

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sas_uri`<sup>Required</sup> <a name="sas_uri" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.sasUri"></a>

```python
sas_uri: str
```

- *Type:* str

---

##### `service_endpoint`<sup>Required</sup> <a name="service_endpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.serviceEndpoint"></a>

```python
service_endpoint: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `service_principal_key`<sup>Required</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

---

##### `storage_kind`<sup>Required</sup> <a name="storage_kind" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.storageKind"></a>

```python
storage_kind: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `use_managed_identity`<sup>Required</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureBlobStorageConfig <a name="DataFactoryLinkedServiceAzureBlobStorageConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig(
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
  connection_string_insecure: str = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  key_vault_sas_token: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken = None,
  parameters: typing.Mapping[str] = None,
  sas_uri: str = None,
  service_endpoint: str = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  service_principal_linked_key_vault_key: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey = None,
  storage_kind: str = None,
  tenant_id: str = None,
  timeouts: DataFactoryLinkedServiceAzureBlobStorageTimeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionStringInsecure">connection_string_insecure</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.keyVaultSasToken">key_vault_sas_token</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | key_vault_sas_token block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasUri">sas_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.serviceEndpoint">service_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalLinkedKeyVaultKey">service_principal_linked_key_vault_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | service_principal_linked_key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.storageKind">storage_kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#data_factory_id DataFactoryLinkedServiceAzureBlobStorage#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#name DataFactoryLinkedServiceAzureBlobStorage#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#additional_properties DataFactoryLinkedServiceAzureBlobStorage#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#annotations DataFactoryLinkedServiceAzureBlobStorage#annotations}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string DataFactoryLinkedServiceAzureBlobStorage#connection_string}.

---

##### `connection_string_insecure`<sup>Optional</sup> <a name="connection_string_insecure" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.connectionStringInsecure"></a>

```python
connection_string_insecure: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#connection_string_insecure DataFactoryLinkedServiceAzureBlobStorage#connection_string_insecure}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#description DataFactoryLinkedServiceAzureBlobStorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#id DataFactoryLinkedServiceAzureBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#integration_runtime_name DataFactoryLinkedServiceAzureBlobStorage#integration_runtime_name}.

---

##### `key_vault_sas_token`<sup>Optional</sup> <a name="key_vault_sas_token" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.keyVaultSasToken"></a>

```python
key_vault_sas_token: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

key_vault_sas_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#key_vault_sas_token DataFactoryLinkedServiceAzureBlobStorage#key_vault_sas_token}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#parameters DataFactoryLinkedServiceAzureBlobStorage#parameters}.

---

##### `sas_uri`<sup>Optional</sup> <a name="sas_uri" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.sasUri"></a>

```python
sas_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#sas_uri DataFactoryLinkedServiceAzureBlobStorage#sas_uri}.

---

##### `service_endpoint`<sup>Optional</sup> <a name="service_endpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.serviceEndpoint"></a>

```python
service_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_endpoint DataFactoryLinkedServiceAzureBlobStorage#service_endpoint}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_id DataFactoryLinkedServiceAzureBlobStorage#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_key}.

---

##### `service_principal_linked_key_vault_key`<sup>Optional</sup> <a name="service_principal_linked_key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.servicePrincipalLinkedKeyVaultKey"></a>

```python
service_principal_linked_key_vault_key: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

service_principal_linked_key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#service_principal_linked_key_vault_key DataFactoryLinkedServiceAzureBlobStorage#service_principal_linked_key_vault_key}

---

##### `storage_kind`<sup>Optional</sup> <a name="storage_kind" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.storageKind"></a>

```python
storage_kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#storage_kind DataFactoryLinkedServiceAzureBlobStorage#storage_kind}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#tenant_id DataFactoryLinkedServiceAzureBlobStorage#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureBlobStorageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#timeouts DataFactoryLinkedServiceAzureBlobStorage#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageConfig.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#use_managed_identity DataFactoryLinkedServiceAzureBlobStorage#use_managed_identity}.

---

### DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken <a name="DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken(
  linked_service_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey <a name="DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey(
  linked_service_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#linked_service_name DataFactoryLinkedServiceAzureBlobStorage#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#secret_name DataFactoryLinkedServiceAzureBlobStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureBlobStorageTimeouts <a name="DataFactoryLinkedServiceAzureBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#create DataFactoryLinkedServiceAzureBlobStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#delete DataFactoryLinkedServiceAzureBlobStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#read DataFactoryLinkedServiceAzureBlobStorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/data_factory_linked_service_azure_blob_storage#update DataFactoryLinkedServiceAzureBlobStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasTokenOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken">DataFactoryLinkedServiceAzureBlobStorageKeyVaultSasToken</a>

---


### DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey">DataFactoryLinkedServiceAzureBlobStorageServicePrincipalLinkedKeyVaultKey</a>

---


### DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_blob_storage

dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryLinkedServiceAzureBlobStorageTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureBlobStorage.DataFactoryLinkedServiceAzureBlobStorageTimeouts">DataFactoryLinkedServiceAzureBlobStorageTimeouts</a>, cdktf.IResolvable]

---



