# `data_azurerm_mobile_network_sim_policy`

Refer to the Terraform Registory for docs: [`data_azurerm_mobile_network_sim_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy).

# `dataAzurermMobileNetworkSimPolicy` Submodule <a name="`dataAzurermMobileNetworkSimPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkSimPolicy <a name="DataAzurermMobileNetworkSimPolicy" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy azurerm_mobile_network_sim_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkSimPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.mobileNetworkId">mobile_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_id`<sup>Required</sup> <a name="mobile_network_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.mobileNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#timeouts DataAzurermMobileNetworkSimPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMobileNetworkSimPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMobileNetworkSimPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkSimPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.defaultSliceId">default_slice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex">rat_frequency_selection_priority_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.registrationTimerInSeconds">registration_timer_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.slice">slice</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList">DataAzurermMobileNetworkSimPolicySliceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference">DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate">user_equipment_aggregate_maximum_bit_rate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkIdInput">mobile_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkId">mobile_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default_slice_id`<sup>Required</sup> <a name="default_slice_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.defaultSliceId"></a>

```python
default_slice_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `rat_frequency_selection_priority_index`<sup>Required</sup> <a name="rat_frequency_selection_priority_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex"></a>

```python
rat_frequency_selection_priority_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `registration_timer_in_seconds`<sup>Required</sup> <a name="registration_timer_in_seconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.registrationTimerInSeconds"></a>

```python
registration_timer_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slice`<sup>Required</sup> <a name="slice" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.slice"></a>

```python
slice: DataAzurermMobileNetworkSimPolicySliceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList">DataAzurermMobileNetworkSimPolicySliceList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference">DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference</a>

---

##### `user_equipment_aggregate_maximum_bit_rate`<sup>Required</sup> <a name="user_equipment_aggregate_maximum_bit_rate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate"></a>

```python
user_equipment_aggregate_maximum_bit_rate: DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mobile_network_id_input`<sup>Optional</sup> <a name="mobile_network_id_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkIdInput"></a>

```python
mobile_network_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMobileNetworkSimPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mobile_network_id`<sup>Required</sup> <a name="mobile_network_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkId"></a>

```python
mobile_network_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkSimPolicyConfig <a name="DataAzurermMobileNetworkSimPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mobile_network_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMobileNetworkSimPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.mobileNetworkId">mobile_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mobile_network_id`<sup>Required</sup> <a name="mobile_network_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.mobileNetworkId"></a>

```python
mobile_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMobileNetworkSimPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#timeouts DataAzurermMobileNetworkSimPolicy#timeouts}

---

### DataAzurermMobileNetworkSimPolicySlice <a name="DataAzurermMobileNetworkSimPolicySlice" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice()
```


### DataAzurermMobileNetworkSimPolicySliceDataNetwork <a name="DataAzurermMobileNetworkSimPolicySliceDataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork()
```


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate()
```


### DataAzurermMobileNetworkSimPolicyTimeouts <a name="DataAzurermMobileNetworkSimPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}.

---

### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkSimPolicySliceDataNetworkList <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes">additional_allowed_session_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel">allocation_and_retention_priority_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds">allowed_services_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId">data_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType">default_session_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets">max_buffered_packets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability">preemption_capability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability">preemption_vulnerability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator">qos_indicator</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate">session_aggregate_maximum_bit_rate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork">DataAzurermMobileNetworkSimPolicySliceDataNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_allowed_session_types`<sup>Required</sup> <a name="additional_allowed_session_types" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes"></a>

```python
additional_allowed_session_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocation_and_retention_priority_level`<sup>Required</sup> <a name="allocation_and_retention_priority_level" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```python
allocation_and_retention_priority_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_services_ids`<sup>Required</sup> <a name="allowed_services_ids" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds"></a>

```python
allowed_services_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_network_id`<sup>Required</sup> <a name="data_network_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId"></a>

```python
data_network_id: str
```

- *Type:* str

---

##### `default_session_type`<sup>Required</sup> <a name="default_session_type" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType"></a>

```python
default_session_type: str
```

- *Type:* str

---

##### `max_buffered_packets`<sup>Required</sup> <a name="max_buffered_packets" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets"></a>

```python
max_buffered_packets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preemption_capability`<sup>Required</sup> <a name="preemption_capability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability"></a>

```python
preemption_capability: str
```

- *Type:* str

---

##### `preemption_vulnerability`<sup>Required</sup> <a name="preemption_vulnerability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability"></a>

```python
preemption_vulnerability: str
```

- *Type:* str

---

##### `qos_indicator`<sup>Required</sup> <a name="qos_indicator" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator"></a>

```python
qos_indicator: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_aggregate_maximum_bit_rate`<sup>Required</sup> <a name="session_aggregate_maximum_bit_rate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate"></a>

```python
session_aggregate_maximum_bit_rate: DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkSimPolicySliceDataNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork">DataAzurermMobileNetworkSimPolicySliceDataNetwork</a>

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink"></a>

```python
downlink: str
```

- *Type:* str

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink"></a>

```python
uplink: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---


### DataAzurermMobileNetworkSimPolicySliceList <a name="DataAzurermMobileNetworkSimPolicySliceList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkSimPolicySliceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkSimPolicySliceOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.dataNetwork">data_network</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList">DataAzurermMobileNetworkSimPolicySliceDataNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId">default_data_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.sliceId">slice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice">DataAzurermMobileNetworkSimPolicySlice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_network`<sup>Required</sup> <a name="data_network" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.dataNetwork"></a>

```python
data_network: DataAzurermMobileNetworkSimPolicySliceDataNetworkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList">DataAzurermMobileNetworkSimPolicySliceDataNetworkList</a>

---

##### `default_data_network_id`<sup>Required</sup> <a name="default_data_network_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId"></a>

```python
default_data_network_id: str
```

- *Type:* str

---

##### `slice_id`<sup>Required</sup> <a name="slice_id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.sliceId"></a>

```python
slice_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkSimPolicySlice
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice">DataAzurermMobileNetworkSimPolicySlice</a>

---


### DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference <a name="DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMobileNetworkSimPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>]

---


### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mobile_network_sim_policy

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink"></a>

```python
downlink: str
```

- *Type:* str

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink"></a>

```python
uplink: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---



