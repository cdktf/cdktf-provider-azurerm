# `data_azurerm_orchestrated_virtual_machine_scale_set`

Refer to the Terraform Registory for docs: [`data_azurerm_orchestrated_virtual_machine_scale_set`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set).

# `dataAzurermOrchestratedVirtualMachineScaleSet` Submodule <a name="`dataAzurermOrchestratedVirtualMachineScaleSet` Submodule" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSet <a name="DataAzurermOrchestratedVirtualMachineScaleSet" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet(
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
  timeouts: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#timeouts DataAzurermOrchestratedVirtualMachineScaleSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity"></a>

```python
identity: DataAzurermOrchestratedVirtualMachineScaleSetIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface"></a>

```python
network_interface: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts"></a>

```python
timeouts: DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermOrchestratedVirtualMachineScaleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetConfig <a name="DataAzurermOrchestratedVirtualMachineScaleSetConfig" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig(
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
  timeouts: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts"></a>

```python
timeouts: DataAzurermOrchestratedVirtualMachineScaleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#timeouts DataAzurermOrchestratedVirtualMachineScaleSet#timeouts}

---

### DataAzurermOrchestratedVirtualMachineScaleSetIdentity <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentity" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity()
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface()
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration()
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress()
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag()
```


### DataAzurermOrchestratedVirtualMachineScaleSetTimeouts <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetIdentityList <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOrchestratedVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">application_gateway_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">application_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">load_balancer_backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">load_balancer_inbound_nat_rules_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">public_ip_address</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_gateway_backend_address_pool_ids`<sup>Required</sup> <a name="application_gateway_backend_address_pool_ids" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```python
application_gateway_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_security_group_ids`<sup>Required</sup> <a name="application_security_group_ids" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```python
application_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_backend_address_pool_ids`<sup>Required</sup> <a name="load_balancer_backend_address_pool_ids" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```python
load_balancer_backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_inbound_nat_rules_ids`<sup>Required</sup> <a name="load_balancer_inbound_nat_rules_ids" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```python
load_balancer_inbound_nat_rules_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```python
public_ip_address: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">domain_name_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">ip_tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_label`<sup>Required</sup> <a name="domain_name_label" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```python
domain_name_label: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_tag`<sup>Required</sup> <a name="ip_tag" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```python
ip_tag: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_ip_prefix_id`<sup>Required</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```python
public_ip_prefix_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled">accelerated_networking_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled">ip_forwarding_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerated_networking_enabled`<sup>Required</sup> <a name="accelerated_networking_enabled" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled"></a>

```python
accelerated_networking_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```python
ip_configuration: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `ip_forwarding_enabled`<sup>Required</sup> <a name="ip_forwarding_enabled" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled"></a>

```python
ip_forwarding_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_orchestrated_virtual_machine_scale_set

dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermOrchestratedVirtualMachineScaleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>]

---



