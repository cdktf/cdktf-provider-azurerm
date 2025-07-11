# `dataFactoryLinkedServiceKusto` Submodule <a name="`dataFactoryLinkedServiceKusto` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceKusto <a name="DataFactoryLinkedServiceKusto" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto azurerm_data_factory_linked_service_kusto}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto(
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
  kusto_database_name: str,
  kusto_endpoint: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  parameters: typing.Mapping[str] = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  tenant: str = None,
  timeouts: DataFactoryLinkedServiceKustoTimeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#data_factory_id DataFactoryLinkedServiceKusto#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.kustoDatabaseName">kusto_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_database_name DataFactoryLinkedServiceKusto#kusto_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.kustoEndpoint">kusto_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_endpoint DataFactoryLinkedServiceKusto#kusto_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#name DataFactoryLinkedServiceKusto#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#additional_properties DataFactoryLinkedServiceKusto#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#annotations DataFactoryLinkedServiceKusto#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#description DataFactoryLinkedServiceKusto#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#id DataFactoryLinkedServiceKusto#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#integration_runtime_name DataFactoryLinkedServiceKusto#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#parameters DataFactoryLinkedServiceKusto#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_id DataFactoryLinkedServiceKusto#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_key DataFactoryLinkedServiceKusto#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.tenant">tenant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#tenant DataFactoryLinkedServiceKusto#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#use_managed_identity DataFactoryLinkedServiceKusto#use_managed_identity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#data_factory_id DataFactoryLinkedServiceKusto#data_factory_id}.

---

##### `kusto_database_name`<sup>Required</sup> <a name="kusto_database_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.kustoDatabaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_database_name DataFactoryLinkedServiceKusto#kusto_database_name}.

---

##### `kusto_endpoint`<sup>Required</sup> <a name="kusto_endpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.kustoEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_endpoint DataFactoryLinkedServiceKusto#kusto_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#name DataFactoryLinkedServiceKusto#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#additional_properties DataFactoryLinkedServiceKusto#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#annotations DataFactoryLinkedServiceKusto#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#description DataFactoryLinkedServiceKusto#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#id DataFactoryLinkedServiceKusto#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#integration_runtime_name DataFactoryLinkedServiceKusto#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#parameters DataFactoryLinkedServiceKusto#parameters}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_id DataFactoryLinkedServiceKusto#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.servicePrincipalKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_key DataFactoryLinkedServiceKusto#service_principal_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.tenant"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#tenant DataFactoryLinkedServiceKusto#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#timeouts DataFactoryLinkedServiceKusto#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.Initializer.parameter.useManagedIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#use_managed_identity DataFactoryLinkedServiceKusto#use_managed_identity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalId">reset_service_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalKey">reset_service_principal_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTenant">reset_tenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetUseManagedIdentity">reset_use_managed_identity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#create DataFactoryLinkedServiceKusto#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#delete DataFactoryLinkedServiceKusto#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#read DataFactoryLinkedServiceKusto#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#update DataFactoryLinkedServiceKusto#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_service_principal_id` <a name="reset_service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalId"></a>

```python
def reset_service_principal_id() -> None
```

##### `reset_service_principal_key` <a name="reset_service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetServicePrincipalKey"></a>

```python
def reset_service_principal_key() -> None
```

##### `reset_tenant` <a name="reset_tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTenant"></a>

```python
def reset_tenant() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_managed_identity` <a name="reset_use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.resetUseManagedIdentity"></a>

```python
def reset_use_managed_identity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceKusto resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceKusto resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFactoryLinkedServiceKusto to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFactoryLinkedServiceKusto that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceKusto to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference">DataFactoryLinkedServiceKustoTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseNameInput">kusto_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpointInput">kusto_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKeyInput">service_principal_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentityInput">use_managed_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseName">kusto_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpoint">kusto_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceKustoTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference">DataFactoryLinkedServiceKustoTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `kusto_database_name_input`<sup>Optional</sup> <a name="kusto_database_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseNameInput"></a>

```python
kusto_database_name_input: str
```

- *Type:* str

---

##### `kusto_endpoint_input`<sup>Optional</sup> <a name="kusto_endpoint_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpointInput"></a>

```python
kusto_endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `service_principal_key_input`<sup>Optional</sup> <a name="service_principal_key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKeyInput"></a>

```python
service_principal_key_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFactoryLinkedServiceKustoTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>]

---

##### `use_managed_identity_input`<sup>Optional</sup> <a name="use_managed_identity_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentityInput"></a>

```python
use_managed_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `kusto_database_name`<sup>Required</sup> <a name="kusto_database_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoDatabaseName"></a>

```python
kusto_database_name: str
```

- *Type:* str

---

##### `kusto_endpoint`<sup>Required</sup> <a name="kusto_endpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.kustoEndpoint"></a>

```python
kusto_endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `service_principal_key`<sup>Required</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `use_managed_identity`<sup>Required</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKusto.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceKustoConfig <a name="DataFactoryLinkedServiceKustoConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_factory_id: str,
  kusto_database_name: str,
  kusto_endpoint: str,
  name: str,
  additional_properties: typing.Mapping[str] = None,
  annotations: typing.List[str] = None,
  description: str = None,
  id: str = None,
  integration_runtime_name: str = None,
  parameters: typing.Mapping[str] = None,
  service_principal_id: str = None,
  service_principal_key: str = None,
  tenant: str = None,
  timeouts: DataFactoryLinkedServiceKustoTimeouts = None,
  use_managed_identity: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#data_factory_id DataFactoryLinkedServiceKusto#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoDatabaseName">kusto_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_database_name DataFactoryLinkedServiceKusto#kusto_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoEndpoint">kusto_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_endpoint DataFactoryLinkedServiceKusto#kusto_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#name DataFactoryLinkedServiceKusto#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#additional_properties DataFactoryLinkedServiceKusto#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#annotations DataFactoryLinkedServiceKusto#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#description DataFactoryLinkedServiceKusto#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#id DataFactoryLinkedServiceKusto#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#integration_runtime_name DataFactoryLinkedServiceKusto#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#parameters DataFactoryLinkedServiceKusto#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_id DataFactoryLinkedServiceKusto#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalKey">service_principal_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_key DataFactoryLinkedServiceKusto#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.tenant">tenant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#tenant DataFactoryLinkedServiceKusto#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.useManagedIdentity">use_managed_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#use_managed_identity DataFactoryLinkedServiceKusto#use_managed_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#data_factory_id DataFactoryLinkedServiceKusto#data_factory_id}.

---

##### `kusto_database_name`<sup>Required</sup> <a name="kusto_database_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoDatabaseName"></a>

```python
kusto_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_database_name DataFactoryLinkedServiceKusto#kusto_database_name}.

---

##### `kusto_endpoint`<sup>Required</sup> <a name="kusto_endpoint" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.kustoEndpoint"></a>

```python
kusto_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#kusto_endpoint DataFactoryLinkedServiceKusto#kusto_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#name DataFactoryLinkedServiceKusto#name}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#additional_properties DataFactoryLinkedServiceKusto#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#annotations DataFactoryLinkedServiceKusto#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#description DataFactoryLinkedServiceKusto#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#id DataFactoryLinkedServiceKusto#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#integration_runtime_name DataFactoryLinkedServiceKusto#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#parameters DataFactoryLinkedServiceKusto#parameters}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_id DataFactoryLinkedServiceKusto#service_principal_id}.

---

##### `service_principal_key`<sup>Optional</sup> <a name="service_principal_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.servicePrincipalKey"></a>

```python
service_principal_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#service_principal_key DataFactoryLinkedServiceKusto#service_principal_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#tenant DataFactoryLinkedServiceKusto#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceKustoTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#timeouts DataFactoryLinkedServiceKusto#timeouts}

---

##### `use_managed_identity`<sup>Optional</sup> <a name="use_managed_identity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoConfig.property.useManagedIdentity"></a>

```python
use_managed_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#use_managed_identity DataFactoryLinkedServiceKusto#use_managed_identity}.

---

### DataFactoryLinkedServiceKustoTimeouts <a name="DataFactoryLinkedServiceKustoTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#create DataFactoryLinkedServiceKusto#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#delete DataFactoryLinkedServiceKusto#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#read DataFactoryLinkedServiceKusto#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#update DataFactoryLinkedServiceKusto#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#create DataFactoryLinkedServiceKusto#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#delete DataFactoryLinkedServiceKusto#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#read DataFactoryLinkedServiceKusto#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/data_factory_linked_service_kusto#update DataFactoryLinkedServiceKusto#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceKustoTimeoutsOutputReference <a name="DataFactoryLinkedServiceKustoTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_kusto

dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFactoryLinkedServiceKustoTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceKusto.DataFactoryLinkedServiceKustoTimeouts">DataFactoryLinkedServiceKustoTimeouts</a>]

---



