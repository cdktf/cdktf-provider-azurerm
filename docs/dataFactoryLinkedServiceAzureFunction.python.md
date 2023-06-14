# `azurerm_data_factory_linked_service_azure_function`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_linked_service_azure_function`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function).

# `dataFactoryLinkedServiceAzureFunction` Submodule <a name="`dataFactoryLinkedServiceAzureFunction` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureFunction <a name="DataFactoryLinkedServiceAzureFunction" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function azurerm_data_factory_linked_service_azure_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction(
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
  key: str = None,
  key_vault_key: DataFactoryLinkedServiceAzureFunctionKeyVaultKey = None,
  parameters: typing.Mapping[str] = None,
  timeouts: DataFactoryLinkedServiceAzureFunctionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.keyVaultKey">key_vault_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.dataFactoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.additionalProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.annotations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}.

---

##### `key_vault_key`<sup>Optional</sup> <a name="key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.keyVaultKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#key_vault_key DataFactoryLinkedServiceAzureFunction#key_vault_key}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#timeouts DataFactoryLinkedServiceAzureFunction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey">put_key_vault_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetIntegrationRuntimeName">reset_integration_runtime_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKeyVaultKey">reset_key_vault_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_key_vault_key` <a name="put_key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey"></a>

```python
def put_key_vault_key(
  linked_service_name: str,
  secret_name: str
) -> None
```

###### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey.parameter.linkedServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#linked_service_name DataFactoryLinkedServiceAzureFunction#linked_service_name}.

---

###### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#secret_name DataFactoryLinkedServiceAzureFunction#secret_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#create DataFactoryLinkedServiceAzureFunction#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#delete DataFactoryLinkedServiceAzureFunction#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#read DataFactoryLinkedServiceAzureFunction#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#update DataFactoryLinkedServiceAzureFunction#update}.

---

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_runtime_name` <a name="reset_integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetIntegrationRuntimeName"></a>

```python
def reset_integration_runtime_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_key_vault_key` <a name="reset_key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKeyVaultKey"></a>

```python
def reset_key_vault_key() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKey">key_vault_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference">DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotationsInput">annotations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryIdInput">data_factory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeNameInput">integration_runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKeyInput">key_vault_key_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_vault_key`<sup>Required</sup> <a name="key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKey"></a>

```python
key_vault_key: DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference">DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference</a>

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotationsInput"></a>

```python
annotations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id_input`<sup>Optional</sup> <a name="data_factory_id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryIdInput"></a>

```python
data_factory_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_runtime_name_input`<sup>Optional</sup> <a name="integration_runtime_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeNameInput"></a>

```python
integration_runtime_name_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `key_vault_key_input`<sup>Optional</sup> <a name="key_vault_key_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKeyInput"></a>

```python
key_vault_key_input: DataFactoryLinkedServiceAzureFunctionKeyVaultKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataFactoryLinkedServiceAzureFunctionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_runtime_name`<sup>Required</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureFunctionConfig <a name="DataFactoryLinkedServiceAzureFunctionConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig(
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
  key: str = None,
  key_vault_key: DataFactoryLinkedServiceAzureFunctionKeyVaultKey = None,
  parameters: typing.Mapping[str] = None,
  timeouts: DataFactoryLinkedServiceAzureFunctionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dataFactoryId">data_factory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.annotations">annotations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.integrationRuntimeName">integration_runtime_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.keyVaultKey">key_vault_key</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_factory_id`<sup>Required</sup> <a name="data_factory_id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dataFactoryId"></a>

```python
data_factory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}.

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.annotations"></a>

```python
annotations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_runtime_name`<sup>Optional</sup> <a name="integration_runtime_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.integrationRuntimeName"></a>

```python
integration_runtime_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}.

---

##### `key_vault_key`<sup>Optional</sup> <a name="key_vault_key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.keyVaultKey"></a>

```python
key_vault_key: DataFactoryLinkedServiceAzureFunctionKeyVaultKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#key_vault_key DataFactoryLinkedServiceAzureFunction#key_vault_key}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.timeouts"></a>

```python
timeouts: DataFactoryLinkedServiceAzureFunctionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#timeouts DataFactoryLinkedServiceAzureFunction#timeouts}

---

### DataFactoryLinkedServiceAzureFunctionKeyVaultKey <a name="DataFactoryLinkedServiceAzureFunctionKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey(
  linked_service_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#linked_service_name DataFactoryLinkedServiceAzureFunction#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#secret_name DataFactoryLinkedServiceAzureFunction#secret_name}. |

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#linked_service_name DataFactoryLinkedServiceAzureFunction#linked_service_name}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#secret_name DataFactoryLinkedServiceAzureFunction#secret_name}.

---

### DataFactoryLinkedServiceAzureFunctionTimeouts <a name="DataFactoryLinkedServiceAzureFunctionTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#create DataFactoryLinkedServiceAzureFunction#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#delete DataFactoryLinkedServiceAzureFunction#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#read DataFactoryLinkedServiceAzureFunction#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#update DataFactoryLinkedServiceAzureFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#create DataFactoryLinkedServiceAzureFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#delete DataFactoryLinkedServiceAzureFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#read DataFactoryLinkedServiceAzureFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/data_factory_linked_service_azure_function#update DataFactoryLinkedServiceAzureFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference <a name="DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceNameInput">linked_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceName">linked_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_service_name_input`<sup>Optional</sup> <a name="linked_service_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceNameInput"></a>

```python
linked_service_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `linked_service_name`<sup>Required</sup> <a name="linked_service_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceName"></a>

```python
linked_service_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataFactoryLinkedServiceAzureFunctionKeyVaultKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---


### DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_factory_linked_service_azure_function

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataFactoryLinkedServiceAzureFunctionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>, cdktf.IResolvable]

---



