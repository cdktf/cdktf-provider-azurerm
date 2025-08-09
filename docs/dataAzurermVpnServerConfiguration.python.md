# `dataAzurermVpnServerConfiguration` Submodule <a name="`dataAzurermVpnServerConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVpnServerConfiguration <a name="DataAzurermVpnServerConfiguration" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration azurerm_vpn_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration(
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
  id: str = None,
  timeouts: DataAzurermVpnServerConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#timeouts DataAzurermVpnServerConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermVpnServerConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermVpnServerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVpnServerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication">azure_active_directory_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate">client_revoked_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate">client_root_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius">radius</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes">vpn_authentication_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols">vpn_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `azure_active_directory_authentication`<sup>Required</sup> <a name="azure_active_directory_authentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication"></a>

```python
azure_active_directory_authentication: DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a>

---

##### `client_revoked_certificate`<sup>Required</sup> <a name="client_revoked_certificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate"></a>

```python
client_revoked_certificate: DataAzurermVpnServerConfigurationClientRevokedCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a>

---

##### `client_root_certificate`<sup>Required</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate"></a>

```python
client_root_certificate: DataAzurermVpnServerConfigurationClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a>

---

##### `ipsec_policy`<sup>Required</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy"></a>

```python
ipsec_policy: DataAzurermVpnServerConfigurationIpsecPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `radius`<sup>Required</sup> <a name="radius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius"></a>

```python
radius: DataAzurermVpnServerConfigurationRadiusList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts"></a>

```python
timeouts: DataAzurermVpnServerConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a>

---

##### `vpn_authentication_types`<sup>Required</sup> <a name="vpn_authentication_types" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes"></a>

```python
vpn_authentication_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_protocols`<sup>Required</sup> <a name="vpn_protocols" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols"></a>

```python
vpn_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermVpnServerConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication()
```


### DataAzurermVpnServerConfigurationClientRevokedCertificate <a name="DataAzurermVpnServerConfigurationClientRevokedCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate()
```


### DataAzurermVpnServerConfigurationClientRootCertificate <a name="DataAzurermVpnServerConfigurationClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate()
```


### DataAzurermVpnServerConfigurationConfig <a name="DataAzurermVpnServerConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermVpnServerConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts"></a>

```python
timeouts: DataAzurermVpnServerConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#timeouts DataAzurermVpnServerConfiguration#timeouts}

---

### DataAzurermVpnServerConfigurationIpsecPolicy <a name="DataAzurermVpnServerConfigurationIpsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy()
```


### DataAzurermVpnServerConfigurationRadius <a name="DataAzurermVpnServerConfigurationRadius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius()
```


### DataAzurermVpnServerConfigurationRadiusClientRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate()
```


### DataAzurermVpnServerConfigurationRadiusServer <a name="DataAzurermVpnServerConfigurationRadiusServer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer()
```


### DataAzurermVpnServerConfigurationRadiusServerRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate()
```


### DataAzurermVpnServerConfigurationTimeouts <a name="DataAzurermVpnServerConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a>

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateList <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationClientRevokedCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a>

---


### DataAzurermVpnServerConfigurationClientRootCertificateList <a name="DataAzurermVpnServerConfigurationClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData">public_cert_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationClientRootCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationIpsecPolicyList <a name="DataAzurermVpnServerConfigurationIpsecPolicyList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationIpsecPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationIpsecPolicyOutputReference <a name="DataAzurermVpnServerConfigurationIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption">ike_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity">ike_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption">ipsec_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity">ipsec_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup">pfs_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes">sa_data_size_kilobytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds">sa_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption"></a>

```python
ike_encryption: str
```

- *Type:* str

---

##### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```python
ike_integrity: str
```

- *Type:* str

---

##### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```python
ipsec_encryption: str
```

- *Type:* str

---

##### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```python
ipsec_integrity: str
```

- *Type:* str

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

---

##### `sa_data_size_kilobytes`<sup>Required</sup> <a name="sa_data_size_kilobytes" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes"></a>

```python
sa_data_size_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime_seconds`<sup>Required</sup> <a name="sa_lifetime_seconds" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds"></a>

```python
sa_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a>

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationRadiusClientRootCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationRadiusList <a name="DataAzurermVpnServerConfigurationRadiusList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationRadiusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationRadiusOutputReference <a name="DataAzurermVpnServerConfigurationRadiusOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate">client_root_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server">server</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate">server_root_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_root_certificate`<sup>Required</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate"></a>

```python
client_root_certificate: DataAzurermVpnServerConfigurationRadiusClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a>

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server"></a>

```python
server: DataAzurermVpnServerConfigurationRadiusServerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a>

---

##### `server_root_certificate`<sup>Required</sup> <a name="server_root_certificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate"></a>

```python
server_root_certificate: DataAzurermVpnServerConfigurationRadiusServerRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a>

---


### DataAzurermVpnServerConfigurationRadiusServerList <a name="DataAzurermVpnServerConfigurationRadiusServerList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationRadiusServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationRadiusServerOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score">score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationRadiusServer
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a>

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData">public_cert_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermVpnServerConfigurationRadiusServerRootCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a>

---


### DataAzurermVpnServerConfigurationTimeoutsOutputReference <a name="DataAzurermVpnServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_vpn_server_configuration

dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermVpnServerConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>]

---



