# `dataAzurermVirtualHubConnection` Submodule <a name="`dataAzurermVirtualHubConnection` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualHubConnection <a name="DataAzurermVirtualHubConnection" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection azurerm_virtual_hub_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  virtual_hub_name: str,
  id: str = None,
  timeouts: DataAzurermVirtualHubConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#name DataAzurermVirtualHubConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#resource_group_name DataAzurermVirtualHubConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.virtualHubName">virtual_hub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#virtual_hub_name DataAzurermVirtualHubConnection#virtual_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#id DataAzurermVirtualHubConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#name DataAzurermVirtualHubConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#resource_group_name DataAzurermVirtualHubConnection#resource_group_name}.

---

##### `virtual_hub_name`<sup>Required</sup> <a name="virtual_hub_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.virtualHubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#virtual_hub_name DataAzurermVirtualHubConnection#virtual_hub_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#id DataAzurermVirtualHubConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#timeouts DataAzurermVirtualHubConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#read DataAzurermVirtualHubConnection#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermVirtualHubConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermVirtualHubConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermVirtualHubConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermVirtualHubConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualHubConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.internetSecurityEnabled">internet_security_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList">DataAzurermVirtualHubConnectionRoutingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference">DataAzurermVirtualHubConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.virtualHubId">virtual_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.virtualHubNameInput">virtual_hub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.virtualHubName">virtual_hub_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `internet_security_enabled`<sup>Required</sup> <a name="internet_security_enabled" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.internetSecurityEnabled"></a>

```python
internet_security_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.remoteVirtualNetworkId"></a>

```python
remote_virtual_network_id: str
```

- *Type:* str

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.routing"></a>

```python
routing: DataAzurermVirtualHubConnectionRoutingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList">DataAzurermVirtualHubConnectionRoutingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.timeouts"></a>

```python
timeouts: DataAzurermVirtualHubConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference">DataAzurermVirtualHubConnectionTimeoutsOutputReference</a>

---

##### `virtual_hub_id`<sup>Required</sup> <a name="virtual_hub_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.virtualHubId"></a>

```python
virtual_hub_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermVirtualHubConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a>]

---

##### `virtual_hub_name_input`<sup>Optional</sup> <a name="virtual_hub_name_input" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.virtualHubNameInput"></a>

```python
virtual_hub_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `virtual_hub_name`<sup>Required</sup> <a name="virtual_hub_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.virtualHubName"></a>

```python
virtual_hub_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualHubConnectionConfig <a name="DataAzurermVirtualHubConnectionConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  virtual_hub_name: str,
  id: str = None,
  timeouts: DataAzurermVirtualHubConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#name DataAzurermVirtualHubConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#resource_group_name DataAzurermVirtualHubConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.virtualHubName">virtual_hub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#virtual_hub_name DataAzurermVirtualHubConnection#virtual_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#id DataAzurermVirtualHubConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#name DataAzurermVirtualHubConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#resource_group_name DataAzurermVirtualHubConnection#resource_group_name}.

---

##### `virtual_hub_name`<sup>Required</sup> <a name="virtual_hub_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.virtualHubName"></a>

```python
virtual_hub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#virtual_hub_name DataAzurermVirtualHubConnection#virtual_hub_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#id DataAzurermVirtualHubConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermVirtualHubConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#timeouts DataAzurermVirtualHubConnection#timeouts}

---

### DataAzurermVirtualHubConnectionRouting <a name="DataAzurermVirtualHubConnectionRouting" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRouting()
```


### DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable <a name="DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable()
```


### DataAzurermVirtualHubConnectionRoutingStaticVnetRoute <a name="DataAzurermVirtualHubConnectionRoutingStaticVnetRoute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRoute()
```


### DataAzurermVirtualHubConnectionTimeouts <a name="DataAzurermVirtualHubConnectionTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#read DataAzurermVirtualHubConnection#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/virtual_hub_connection#read DataAzurermVirtualHubConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualHubConnectionRoutingList <a name="DataAzurermVirtualHubConnectionRoutingList" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVirtualHubConnectionRoutingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVirtualHubConnectionRoutingOutputReference <a name="DataAzurermVirtualHubConnectionRoutingOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.associatedRouteTableId">associated_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.inboundRouteMapId">inbound_route_map_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.outboundRouteMapId">outbound_route_map_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.propagatedRouteTable">propagated_route_table</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList">DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteria">static_vnet_local_route_override_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.staticVnetRoute">static_vnet_route</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList">DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRouting">DataAzurermVirtualHubConnectionRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_route_table_id`<sup>Required</sup> <a name="associated_route_table_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.associatedRouteTableId"></a>

```python
associated_route_table_id: str
```

- *Type:* str

---

##### `inbound_route_map_id`<sup>Required</sup> <a name="inbound_route_map_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.inboundRouteMapId"></a>

```python
inbound_route_map_id: str
```

- *Type:* str

---

##### `outbound_route_map_id`<sup>Required</sup> <a name="outbound_route_map_id" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.outboundRouteMapId"></a>

```python
outbound_route_map_id: str
```

- *Type:* str

---

##### `propagated_route_table`<sup>Required</sup> <a name="propagated_route_table" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.propagatedRouteTable"></a>

```python
propagated_route_table: DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList">DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList</a>

---

##### `static_vnet_local_route_override_criteria`<sup>Required</sup> <a name="static_vnet_local_route_override_criteria" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.staticVnetLocalRouteOverrideCriteria"></a>

```python
static_vnet_local_route_override_criteria: str
```

- *Type:* str

---

##### `static_vnet_route`<sup>Required</sup> <a name="static_vnet_route" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.staticVnetRoute"></a>

```python
static_vnet_route: DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList">DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVirtualHubConnectionRouting
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRouting">DataAzurermVirtualHubConnectionRouting</a>

---


### DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList <a name="DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference <a name="DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds">route_table_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable">DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `route_table_ids`<sup>Required</sup> <a name="route_table_ids" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.routeTableIds"></a>

```python
route_table_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTableOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable">DataAzurermVirtualHubConnectionRoutingPropagatedRouteTable</a>

---


### DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList <a name="DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference <a name="DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddress">next_hop_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRoute">DataAzurermVirtualHubConnectionRoutingStaticVnetRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_hop_ip_address`<sup>Required</sup> <a name="next_hop_ip_address" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.nextHopIpAddress"></a>

```python
next_hop_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRouteOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVirtualHubConnectionRoutingStaticVnetRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionRoutingStaticVnetRoute">DataAzurermVirtualHubConnectionRoutingStaticVnetRoute</a>

---


### DataAzurermVirtualHubConnectionTimeoutsOutputReference <a name="DataAzurermVirtualHubConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_virtual_hub_connection

dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermVirtualHubConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVirtualHubConnection.DataAzurermVirtualHubConnectionTimeouts">DataAzurermVirtualHubConnectionTimeouts</a>]

---



