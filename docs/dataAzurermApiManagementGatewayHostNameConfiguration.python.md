# `dataAzurermApiManagementGatewayHostNameConfiguration` Submodule <a name="`dataAzurermApiManagementGatewayHostNameConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermApiManagementGatewayHostNameConfiguration <a name="DataAzurermApiManagementGatewayHostNameConfiguration" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration azurerm_api_management_gateway_host_name_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_id: str,
  gateway_name: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermApiManagementGatewayHostNameConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.apiManagementId">api_management_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.gatewayName">gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.apiManagementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.gatewayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#timeouts DataAzurermApiManagementGatewayHostNameConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#read DataAzurermApiManagementGatewayHostNameConfiguration#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermApiManagementGatewayHostNameConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermApiManagementGatewayHostNameConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermApiManagementGatewayHostNameConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermApiManagementGatewayHostNameConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.http2Enabled">http2_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled">request_client_certificate_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls10Enabled">tls10_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls11Enabled">tls11_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput">api_management_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayNameInput">gateway_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementId">api_management_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayName">gateway_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.http2Enabled"></a>

```python
http2_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `request_client_certificate_enabled`<sup>Required</sup> <a name="request_client_certificate_enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled"></a>

```python
request_client_certificate_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeouts"></a>

```python
timeouts: DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a>

---

##### `tls10_enabled`<sup>Required</sup> <a name="tls10_enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls10Enabled"></a>

```python
tls10_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tls11_enabled`<sup>Required</sup> <a name="tls11_enabled" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tls11Enabled"></a>

```python
tls11_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `api_management_id_input`<sup>Optional</sup> <a name="api_management_id_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput"></a>

```python
api_management_id_input: str
```

- *Type:* str

---

##### `gateway_name_input`<sup>Optional</sup> <a name="gateway_name_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayNameInput"></a>

```python
gateway_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermApiManagementGatewayHostNameConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.apiManagementId"></a>

```python
api_management_id: str
```

- *Type:* str

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermApiManagementGatewayHostNameConfigurationConfig <a name="DataAzurermApiManagementGatewayHostNameConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_id: str,
  gateway_name: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermApiManagementGatewayHostNameConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId">api_management_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.gatewayName">gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId"></a>

```python
api_management_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#api_management_id DataAzurermApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#gateway_name DataAzurermApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#name DataAzurermApiManagementGatewayHostNameConfiguration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#id DataAzurermApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationConfig.property.timeouts"></a>

```python
timeouts: DataAzurermApiManagementGatewayHostNameConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#timeouts DataAzurermApiManagementGatewayHostNameConfiguration#timeouts}

---

### DataAzurermApiManagementGatewayHostNameConfigurationTimeouts <a name="DataAzurermApiManagementGatewayHostNameConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#read DataAzurermApiManagementGatewayHostNameConfiguration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/api_management_gateway_host_name_configuration#read DataAzurermApiManagementGatewayHostNameConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference <a name="DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway_host_name_configuration

dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermApiManagementGatewayHostNameConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGatewayHostNameConfiguration.DataAzurermApiManagementGatewayHostNameConfigurationTimeouts">DataAzurermApiManagementGatewayHostNameConfigurationTimeouts</a>]

---



