# `dataFactoryLinkedServiceDataLakeStorageGen2` Submodule <a name="`dataFactoryLinkedServiceDataLakeStorageGen2` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2 <a name="DataFactoryLinkedServiceDataLakeStorageGen2" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2 azurerm_data_factory_linked_service_data_lake_storage_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2(
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
  url: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  parameters: typing.Mapping[str] = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  storage_account_key: str = None,
  tenant: str = None,
  timeouts: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.tenant">tenant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}.

---

##### `storage_account_key`<sup>Optional</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.storageAccountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.tenant"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#timeouts DataFactoryLinkedServiceDataLakeStorageGen2#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.useManagedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId">reset_service_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey">reset_service_principal_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey">reset_storage_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant">reset_tenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity">reset_use_managed_identity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_service_principal_id` <a name="reset_service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId"></a>

```python
def reset_service_principal_id() -> None
```

##### `reset_service_principal_key` <a name="reset_service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey"></a>

```python
def reset_service_principal_key() -> None
```

##### `reset_storage_account_key` <a name="reset_storage_account_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey"></a>

```python
def reset_storage_account_key() -> None
```

##### `reset_tenant` <a name="reset_tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant"></a>

```python
def reset_tenant() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_managed_identity` <a name="reset_use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity"></a>

```python
def reset_use_managed_identity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryLinkedServiceDataLakeStorageGen2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryLinkedServiceDataLakeStorageGen2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceDataLakeStorageGen2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput">service_principal_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput">use_managed_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `service_principal_key_input`<sup>Optional</sup> <a name="service_principal_key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput"></a>

```python
service_principal_key_input: str
```

- *Type:* str

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryLinkedServiceDataLakeStorageGen2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `use_managed_identity_input`<sup>Optional</sup> <a name="use_managed_identity_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput"></a>

```python
use_managed_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `service_principal_key`<sup>Required</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `use_managed_identity`<sup>Required</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2Config <a name="DataFactoryLinkedServiceDataLakeStorageGen2Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  name: str,
  url: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  parameters: typing.Mapping[str] = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  storage_account_key: str = None,
  tenant: str = None,
  timeouts: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant">tenant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}.

---

##### `storage_account_key`<sup>Optional</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceDataLakeStorageGen2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#timeouts DataFactoryLinkedServiceDataLakeStorageGen2#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}.

---

### DataFactoryLinkedServiceDataLakeStorageGen2Timeouts <a name="DataFactoryLinkedServiceDataLakeStorageGen2Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference <a name="DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_data_lake_storage_gen2

dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryLinkedServiceDataLakeStorageGen2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>]

---



