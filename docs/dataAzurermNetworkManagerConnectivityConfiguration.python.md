# `dataAzurermNetworkManagerConnectivityConfiguration` Submodule <a name="`dataAzurermNetworkManagerConnectivityConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkManagerConnectivityConfiguration <a name="DataAzurermNetworkManagerConnectivityConfiguration" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration(
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
  network_manager_id: str,
  id: str = None,
  timeouts: DataAzurermNetworkManagerConnectivityConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.networkManagerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#timeouts DataAzurermNetworkManagerConnectivityConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#read DataAzurermNetworkManagerConnectivityConfiguration#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermNetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermNetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermNetworkManagerConnectivityConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermNetworkManagerConnectivityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkManagerConnectivityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.appliesToGroup">applies_to_group</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.connectivityTopology">connectivity_topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled">delete_existing_peering_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.globalMeshEnabled">global_mesh_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.hub">hub</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList">DataAzurermNetworkManagerConnectivityConfigurationHubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference">DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerIdInput">network_manager_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `applies_to_group`<sup>Required</sup> <a name="applies_to_group" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.appliesToGroup"></a>

```python
applies_to_group: DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList</a>

---

##### `connectivity_topology`<sup>Required</sup> <a name="connectivity_topology" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.connectivityTopology"></a>

```python
connectivity_topology: str
```

- *Type:* str

---

##### `delete_existing_peering_enabled`<sup>Required</sup> <a name="delete_existing_peering_enabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled"></a>

```python
delete_existing_peering_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_mesh_enabled`<sup>Required</sup> <a name="global_mesh_enabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.globalMeshEnabled"></a>

```python
global_mesh_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.hub"></a>

```python
hub: DataAzurermNetworkManagerConnectivityConfigurationHubList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList">DataAzurermNetworkManagerConnectivityConfigurationHubList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeouts"></a>

```python
timeouts: DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference">DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_manager_id_input`<sup>Optional</sup> <a name="network_manager_id_input" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerIdInput"></a>

```python
network_manager_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermNetworkManagerConnectivityConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup()
```


### DataAzurermNetworkManagerConnectivityConfigurationConfig <a name="DataAzurermNetworkManagerConnectivityConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_manager_id: str,
  id: str = None,
  timeouts: DataAzurermNetworkManagerConnectivityConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#name DataAzurermNetworkManagerConnectivityConfiguration#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#network_manager_id DataAzurermNetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#id DataAzurermNetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationConfig.property.timeouts"></a>

```python
timeouts: DataAzurermNetworkManagerConnectivityConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#timeouts DataAzurermNetworkManagerConnectivityConfiguration#timeouts}

---

### DataAzurermNetworkManagerConnectivityConfigurationHub <a name="DataAzurermNetworkManagerConnectivityConfigurationHub" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub()
```


### DataAzurermNetworkManagerConnectivityConfigurationTimeouts <a name="DataAzurermNetworkManagerConnectivityConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#read DataAzurermNetworkManagerConnectivityConfiguration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/network_manager_connectivity_configuration#read DataAzurermNetworkManagerConnectivityConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled">global_mesh_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity">group_connectivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId">network_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway">use_hub_gateway</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `global_mesh_enabled`<sup>Required</sup> <a name="global_mesh_enabled" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled"></a>

```python
global_mesh_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `group_connectivity`<sup>Required</sup> <a name="group_connectivity" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity"></a>

```python
group_connectivity: str
```

- *Type:* str

---

##### `network_group_id`<sup>Required</sup> <a name="network_group_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId"></a>

```python
network_group_id: str
```

- *Type:* str

---

##### `use_hub_gateway`<sup>Required</sup> <a name="use_hub_gateway" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway"></a>

```python
use_hub_gateway: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup">DataAzurermNetworkManagerConnectivityConfigurationAppliesToGroup</a>

---


### DataAzurermNetworkManagerConnectivityConfigurationHubList <a name="DataAzurermNetworkManagerConnectivityConfigurationHubList" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub">DataAzurermNetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationHub">DataAzurermNetworkManagerConnectivityConfigurationHub</a>

---


### DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference <a name="DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_network_manager_connectivity_configuration

dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermNetworkManagerConnectivityConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetworkManagerConnectivityConfiguration.DataAzurermNetworkManagerConnectivityConfigurationTimeouts">DataAzurermNetworkManagerConnectivityConfigurationTimeouts</a>]

---



