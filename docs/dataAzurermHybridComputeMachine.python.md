# `dataAzurermHybridComputeMachine` Submodule <a name="`dataAzurermHybridComputeMachine` Submodule" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermHybridComputeMachine <a name="DataAzurermHybridComputeMachine" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine azurerm_hybrid_compute_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine(
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
  timeouts: DataAzurermHybridComputeMachineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#timeouts DataAzurermHybridComputeMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#read DataAzurermHybridComputeMachine#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermHybridComputeMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermHybridComputeMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermHybridComputeMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermHybridComputeMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermHybridComputeMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.adFqdn">ad_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentConfiguration">agent_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList">DataAzurermHybridComputeMachineAgentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.clientPublicKey">client_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cloudMetadata">cloud_metadata</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList">DataAzurermHybridComputeMachineCloudMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.detectedProperties">detected_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dnsFqdn">dns_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.errorDetails">error_details</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList">DataAzurermHybridComputeMachineErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList">DataAzurermHybridComputeMachineIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lastStatusChange">last_status_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.locationData">location_data</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList">DataAzurermHybridComputeMachineLocationDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.machineFqdn">machine_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.mssqlDiscovered">mssql_discovered</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osProfile">os_profile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList">DataAzurermHybridComputeMachineOsProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osSku">os_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.parentClusterResourceId">parent_cluster_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.privateLinkScopeResourceId">private_link_scope_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.serviceStatus">service_status</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList">DataAzurermHybridComputeMachineServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference">DataAzurermHybridComputeMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmId">vm_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmUuid">vm_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ad_fqdn`<sup>Required</sup> <a name="ad_fqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.adFqdn"></a>

```python
ad_fqdn: str
```

- *Type:* str

---

##### `agent_configuration`<sup>Required</sup> <a name="agent_configuration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentConfiguration"></a>

```python
agent_configuration: DataAzurermHybridComputeMachineAgentConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList">DataAzurermHybridComputeMachineAgentConfigurationList</a>

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `client_public_key`<sup>Required</sup> <a name="client_public_key" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.clientPublicKey"></a>

```python
client_public_key: str
```

- *Type:* str

---

##### `cloud_metadata`<sup>Required</sup> <a name="cloud_metadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cloudMetadata"></a>

```python
cloud_metadata: DataAzurermHybridComputeMachineCloudMetadataList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList">DataAzurermHybridComputeMachineCloudMetadataList</a>

---

##### `detected_properties`<sup>Required</sup> <a name="detected_properties" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.detectedProperties"></a>

```python
detected_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_fqdn`<sup>Required</sup> <a name="dns_fqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dnsFqdn"></a>

```python
dns_fqdn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.errorDetails"></a>

```python
error_details: DataAzurermHybridComputeMachineErrorDetailsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList">DataAzurermHybridComputeMachineErrorDetailsList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.identity"></a>

```python
identity: DataAzurermHybridComputeMachineIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList">DataAzurermHybridComputeMachineIdentityList</a>

---

##### `last_status_change`<sup>Required</sup> <a name="last_status_change" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lastStatusChange"></a>

```python
last_status_change: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `location_data`<sup>Required</sup> <a name="location_data" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.locationData"></a>

```python
location_data: DataAzurermHybridComputeMachineLocationDataList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList">DataAzurermHybridComputeMachineLocationDataList</a>

---

##### `machine_fqdn`<sup>Required</sup> <a name="machine_fqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.machineFqdn"></a>

```python
machine_fqdn: str
```

- *Type:* str

---

##### `mssql_discovered`<sup>Required</sup> <a name="mssql_discovered" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.mssqlDiscovered"></a>

```python
mssql_discovered: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_profile`<sup>Required</sup> <a name="os_profile" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osProfile"></a>

```python
os_profile: DataAzurermHybridComputeMachineOsProfileList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList">DataAzurermHybridComputeMachineOsProfileList</a>

---

##### `os_sku`<sup>Required</sup> <a name="os_sku" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osSku"></a>

```python
os_sku: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `parent_cluster_resource_id`<sup>Required</sup> <a name="parent_cluster_resource_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.parentClusterResourceId"></a>

```python
parent_cluster_resource_id: str
```

- *Type:* str

---

##### `private_link_scope_resource_id`<sup>Required</sup> <a name="private_link_scope_resource_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.privateLinkScopeResourceId"></a>

```python
private_link_scope_resource_id: str
```

- *Type:* str

---

##### `service_status`<sup>Required</sup> <a name="service_status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.serviceStatus"></a>

```python
service_status: DataAzurermHybridComputeMachineServiceStatusList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList">DataAzurermHybridComputeMachineServiceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeouts"></a>

```python
timeouts: DataAzurermHybridComputeMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference">DataAzurermHybridComputeMachineTimeoutsOutputReference</a>

---

##### `vm_id`<sup>Required</sup> <a name="vm_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmId"></a>

```python
vm_id: str
```

- *Type:* str

---

##### `vm_uuid`<sup>Required</sup> <a name="vm_uuid" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmUuid"></a>

```python
vm_uuid: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermHybridComputeMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermHybridComputeMachineAgentConfiguration <a name="DataAzurermHybridComputeMachineAgentConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration()
```


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct()
```


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct()
```


### DataAzurermHybridComputeMachineCloudMetadata <a name="DataAzurermHybridComputeMachineCloudMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata()
```


### DataAzurermHybridComputeMachineConfig <a name="DataAzurermHybridComputeMachineConfig" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig(
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
  timeouts: DataAzurermHybridComputeMachineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.timeouts"></a>

```python
timeouts: DataAzurermHybridComputeMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#timeouts DataAzurermHybridComputeMachine#timeouts}

---

### DataAzurermHybridComputeMachineErrorDetails <a name="DataAzurermHybridComputeMachineErrorDetails" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails()
```


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo()
```


### DataAzurermHybridComputeMachineIdentity <a name="DataAzurermHybridComputeMachineIdentity" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity()
```


### DataAzurermHybridComputeMachineLocationData <a name="DataAzurermHybridComputeMachineLocationData" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData()
```


### DataAzurermHybridComputeMachineOsProfile <a name="DataAzurermHybridComputeMachineOsProfile" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile()
```


### DataAzurermHybridComputeMachineOsProfileLinuxConfiguration <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration()
```


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings()
```


### DataAzurermHybridComputeMachineOsProfileWindowsConfiguration <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration()
```


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings()
```


### DataAzurermHybridComputeMachineServiceStatus <a name="DataAzurermHybridComputeMachineServiceStatus" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus()
```


### DataAzurermHybridComputeMachineServiceStatusExtensionService <a name="DataAzurermHybridComputeMachineServiceStatusExtensionService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService()
```


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService()
```


### DataAzurermHybridComputeMachineTimeouts <a name="DataAzurermHybridComputeMachineTimeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#read DataAzurermHybridComputeMachine#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/data-sources/hybrid_compute_machine#read DataAzurermHybridComputeMachine#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct</a>

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct</a>

---


### DataAzurermHybridComputeMachineAgentConfigurationList <a name="DataAzurermHybridComputeMachineAgentConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineAgentConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineAgentConfigurationOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsAllowList">extensions_allow_list</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsBlockList">extensions_block_list</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsEnabled">extensions_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.guestConfigurationEnabled">guest_configuration_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.incomingConnectionsPorts">incoming_connections_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyBypass">proxy_bypass</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration">DataAzurermHybridComputeMachineAgentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions_allow_list`<sup>Required</sup> <a name="extensions_allow_list" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsAllowList"></a>

```python
extensions_allow_list: DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList</a>

---

##### `extensions_block_list`<sup>Required</sup> <a name="extensions_block_list" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsBlockList"></a>

```python
extensions_block_list: DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList</a>

---

##### `extensions_enabled`<sup>Required</sup> <a name="extensions_enabled" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsEnabled"></a>

```python
extensions_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `guest_configuration_enabled`<sup>Required</sup> <a name="guest_configuration_enabled" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.guestConfigurationEnabled"></a>

```python
guest_configuration_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `incoming_connections_ports`<sup>Required</sup> <a name="incoming_connections_ports" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.incomingConnectionsPorts"></a>

```python
incoming_connections_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proxy_bypass`<sup>Required</sup> <a name="proxy_bypass" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyBypass"></a>

```python
proxy_bypass: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proxy_url`<sup>Required</sup> <a name="proxy_url" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineAgentConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration">DataAzurermHybridComputeMachineAgentConfiguration</a>

---


### DataAzurermHybridComputeMachineCloudMetadataList <a name="DataAzurermHybridComputeMachineCloudMetadataList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineCloudMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineCloudMetadataOutputReference <a name="DataAzurermHybridComputeMachineCloudMetadataOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.provider">provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata">DataAzurermHybridComputeMachineCloudMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.provider"></a>

```python
provider: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineCloudMetadata
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata">DataAzurermHybridComputeMachineCloudMetadata</a>

---


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.info">info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.info"></a>

```python
info: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo</a>

---


### DataAzurermHybridComputeMachineErrorDetailsList <a name="DataAzurermHybridComputeMachineErrorDetailsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineErrorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineErrorDetailsOutputReference <a name="DataAzurermHybridComputeMachineErrorDetailsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.additionalInfo">additional_info</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails">DataAzurermHybridComputeMachineErrorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_info`<sup>Required</sup> <a name="additional_info" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.additionalInfo"></a>

```python
additional_info: DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineErrorDetails
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails">DataAzurermHybridComputeMachineErrorDetails</a>

---


### DataAzurermHybridComputeMachineIdentityList <a name="DataAzurermHybridComputeMachineIdentityList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineIdentityOutputReference <a name="DataAzurermHybridComputeMachineIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity">DataAzurermHybridComputeMachineIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity">DataAzurermHybridComputeMachineIdentity</a>

---


### DataAzurermHybridComputeMachineLocationDataList <a name="DataAzurermHybridComputeMachineLocationDataList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineLocationDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineLocationDataOutputReference <a name="DataAzurermHybridComputeMachineLocationDataOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.countryOrRegion">country_or_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.district">district</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData">DataAzurermHybridComputeMachineLocationData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country_or_region`<sup>Required</sup> <a name="country_or_region" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.countryOrRegion"></a>

```python
country_or_region: str
```

- *Type:* str

---

##### `district`<sup>Required</sup> <a name="district" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.district"></a>

```python
district: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineLocationData
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData">DataAzurermHybridComputeMachineLocationData</a>

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.patchSettings">patch_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration">DataAzurermHybridComputeMachineOsProfileLinuxConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_settings`<sup>Required</sup> <a name="patch_settings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.patchSettings"></a>

```python
patch_settings: DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineOsProfileLinuxConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration">DataAzurermHybridComputeMachineOsProfileLinuxConfiguration</a>

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.assessmentMode">assessment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.patchMode">patch_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_mode`<sup>Required</sup> <a name="assessment_mode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.assessmentMode"></a>

```python
assessment_mode: str
```

- *Type:* str

---

##### `patch_mode`<sup>Required</sup> <a name="patch_mode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.patchMode"></a>

```python
patch_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings</a>

---


### DataAzurermHybridComputeMachineOsProfileList <a name="DataAzurermHybridComputeMachineOsProfileList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineOsProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineOsProfileOutputReference <a name="DataAzurermHybridComputeMachineOsProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.linuxConfiguration">linux_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.windowsConfiguration">windows_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile">DataAzurermHybridComputeMachineOsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `linux_configuration`<sup>Required</sup> <a name="linux_configuration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.linuxConfiguration"></a>

```python
linux_configuration: DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList</a>

---

##### `windows_configuration`<sup>Required</sup> <a name="windows_configuration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.windowsConfiguration"></a>

```python
windows_configuration: DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineOsProfile
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile">DataAzurermHybridComputeMachineOsProfile</a>

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.patchSettings">patch_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration">DataAzurermHybridComputeMachineOsProfileWindowsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_settings`<sup>Required</sup> <a name="patch_settings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.patchSettings"></a>

```python
patch_settings: DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineOsProfileWindowsConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration">DataAzurermHybridComputeMachineOsProfileWindowsConfiguration</a>

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.assessmentMode">assessment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.patchMode">patch_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_mode`<sup>Required</sup> <a name="assessment_mode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.assessmentMode"></a>

```python
assessment_mode: str
```

- *Type:* str

---

##### `patch_mode`<sup>Required</sup> <a name="patch_mode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.patchMode"></a>

```python
patch_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings</a>

---


### DataAzurermHybridComputeMachineServiceStatusExtensionServiceList <a name="DataAzurermHybridComputeMachineServiceStatusExtensionServiceList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.startupType">startup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService">DataAzurermHybridComputeMachineServiceStatusExtensionService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `startup_type`<sup>Required</sup> <a name="startup_type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.startupType"></a>

```python
startup_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineServiceStatusExtensionService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService">DataAzurermHybridComputeMachineServiceStatusExtensionService</a>

---


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.startupType">startup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `startup_type`<sup>Required</sup> <a name="startup_type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.startupType"></a>

```python
startup_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService</a>

---


### DataAzurermHybridComputeMachineServiceStatusList <a name="DataAzurermHybridComputeMachineServiceStatusList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermHybridComputeMachineServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermHybridComputeMachineServiceStatusOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.extensionService">extension_service</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList">DataAzurermHybridComputeMachineServiceStatusExtensionServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.guestConfigurationService">guest_configuration_service</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus">DataAzurermHybridComputeMachineServiceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extension_service`<sup>Required</sup> <a name="extension_service" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.extensionService"></a>

```python
extension_service: DataAzurermHybridComputeMachineServiceStatusExtensionServiceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList">DataAzurermHybridComputeMachineServiceStatusExtensionServiceList</a>

---

##### `guest_configuration_service`<sup>Required</sup> <a name="guest_configuration_service" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.guestConfigurationService"></a>

```python
guest_configuration_service: DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermHybridComputeMachineServiceStatus
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus">DataAzurermHybridComputeMachineServiceStatus</a>

---


### DataAzurermHybridComputeMachineTimeoutsOutputReference <a name="DataAzurermHybridComputeMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_hybrid_compute_machine

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermHybridComputeMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>]

---



