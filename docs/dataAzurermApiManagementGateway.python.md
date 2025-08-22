# `dataAzurermApiManagementGateway` Submodule <a name="`dataAzurermApiManagementGateway` Submodule" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermApiManagementGateway <a name="DataAzurermApiManagementGateway" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway azurerm_api_management_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGateway(
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
  name: str,
  id: str = None,
  timeouts: DataAzurermApiManagementGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.apiManagementId">api_management_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#api_management_id DataAzurermApiManagementGateway#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#name DataAzurermApiManagementGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#id DataAzurermApiManagementGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.apiManagementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#api_management_id DataAzurermApiManagementGateway#api_management_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#name DataAzurermApiManagementGateway#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#id DataAzurermApiManagementGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#timeouts DataAzurermApiManagementGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#read DataAzurermApiManagementGateway#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermApiManagementGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermApiManagementGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermApiManagementGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermApiManagementGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermApiManagementGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.locationData">location_data</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList">DataAzurermApiManagementGatewayLocationDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference">DataAzurermApiManagementGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.apiManagementIdInput">api_management_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.apiManagementId">api_management_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `location_data`<sup>Required</sup> <a name="location_data" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.locationData"></a>

```python
location_data: DataAzurermApiManagementGatewayLocationDataList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList">DataAzurermApiManagementGatewayLocationDataList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.timeouts"></a>

```python
timeouts: DataAzurermApiManagementGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference">DataAzurermApiManagementGatewayTimeoutsOutputReference</a>

---

##### `api_management_id_input`<sup>Optional</sup> <a name="api_management_id_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.apiManagementIdInput"></a>

```python
api_management_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermApiManagementGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a>]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.apiManagementId"></a>

```python
api_management_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermApiManagementGatewayConfig <a name="DataAzurermApiManagementGatewayConfig" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermApiManagementGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.apiManagementId">api_management_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#api_management_id DataAzurermApiManagementGateway#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#name DataAzurermApiManagementGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#id DataAzurermApiManagementGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_id`<sup>Required</sup> <a name="api_management_id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.apiManagementId"></a>

```python
api_management_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#api_management_id DataAzurermApiManagementGateway#api_management_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#name DataAzurermApiManagementGateway#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#id DataAzurermApiManagementGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayConfig.property.timeouts"></a>

```python
timeouts: DataAzurermApiManagementGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#timeouts DataAzurermApiManagementGateway#timeouts}

---

### DataAzurermApiManagementGatewayLocationData <a name="DataAzurermApiManagementGatewayLocationData" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationData.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationData()
```


### DataAzurermApiManagementGatewayTimeouts <a name="DataAzurermApiManagementGatewayTimeouts" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#read DataAzurermApiManagementGateway#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/data-sources/api_management_gateway#read DataAzurermApiManagementGateway#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermApiManagementGatewayLocationDataList <a name="DataAzurermApiManagementGatewayLocationDataList" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermApiManagementGatewayLocationDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermApiManagementGatewayLocationDataOutputReference <a name="DataAzurermApiManagementGatewayLocationDataOutputReference" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.district">district</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationData">DataAzurermApiManagementGatewayLocationData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `district`<sup>Required</sup> <a name="district" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.district"></a>

```python
district: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationDataOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermApiManagementGatewayLocationData
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayLocationData">DataAzurermApiManagementGatewayLocationData</a>

---


### DataAzurermApiManagementGatewayTimeoutsOutputReference <a name="DataAzurermApiManagementGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_api_management_gateway

dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermApiManagementGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermApiManagementGateway.DataAzurermApiManagementGatewayTimeouts">DataAzurermApiManagementGatewayTimeouts</a>]

---



