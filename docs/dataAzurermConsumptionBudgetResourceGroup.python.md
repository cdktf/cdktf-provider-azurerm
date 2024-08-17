# `dataAzurermConsumptionBudgetResourceGroup` Submodule <a name="`dataAzurermConsumptionBudgetResourceGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConsumptionBudgetResourceGroup <a name="DataAzurermConsumptionBudgetResourceGroup" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group azurerm_consumption_budget_resource_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup(
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
  resource_group_id: str,
  id: str = None,
  timeouts: DataAzurermConsumptionBudgetResourceGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.resourceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#timeouts DataAzurermConsumptionBudgetResourceGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermConsumptionBudgetResourceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermConsumptionBudgetResourceGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermConsumptionBudgetResourceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConsumptionBudgetResourceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList">DataAzurermConsumptionBudgetResourceGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList">DataAzurermConsumptionBudgetResourceGroupNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeGrain">time_grain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference">DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList">DataAzurermConsumptionBudgetResourceGroupTimePeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.filter"></a>

```python
filter: DataAzurermConsumptionBudgetResourceGroupFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList">DataAzurermConsumptionBudgetResourceGroupFilterList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.notification"></a>

```python
notification: DataAzurermConsumptionBudgetResourceGroupNotificationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList">DataAzurermConsumptionBudgetResourceGroupNotificationList</a>

---

##### `time_grain`<sup>Required</sup> <a name="time_grain" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeGrain"></a>

```python
time_grain: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeouts"></a>

```python
timeouts: DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference">DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference</a>

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timePeriod"></a>

```python
time_period: DataAzurermConsumptionBudgetResourceGroupTimePeriodList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList">DataAzurermConsumptionBudgetResourceGroupTimePeriodList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermConsumptionBudgetResourceGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConsumptionBudgetResourceGroupConfig <a name="DataAzurermConsumptionBudgetResourceGroupConfig" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_id: str,
  id: str = None,
  timeouts: DataAzurermConsumptionBudgetResourceGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#name DataAzurermConsumptionBudgetResourceGroup#name}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#resource_group_id DataAzurermConsumptionBudgetResourceGroup#resource_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#id DataAzurermConsumptionBudgetResourceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupConfig.property.timeouts"></a>

```python
timeouts: DataAzurermConsumptionBudgetResourceGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#timeouts DataAzurermConsumptionBudgetResourceGroup#timeouts}

---

### DataAzurermConsumptionBudgetResourceGroupFilter <a name="DataAzurermConsumptionBudgetResourceGroupFilter" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter()
```


### DataAzurermConsumptionBudgetResourceGroupFilterDimension <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension()
```


### DataAzurermConsumptionBudgetResourceGroupFilterNot <a name="DataAzurermConsumptionBudgetResourceGroupFilterNot" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot()
```


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimension <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension()
```


### DataAzurermConsumptionBudgetResourceGroupFilterNotTag <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag()
```


### DataAzurermConsumptionBudgetResourceGroupFilterTag <a name="DataAzurermConsumptionBudgetResourceGroupFilterTag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag()
```


### DataAzurermConsumptionBudgetResourceGroupNotification <a name="DataAzurermConsumptionBudgetResourceGroupNotification" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification()
```


### DataAzurermConsumptionBudgetResourceGroupTimeouts <a name="DataAzurermConsumptionBudgetResourceGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/data-sources/consumption_budget_resource_group#read DataAzurermConsumptionBudgetResourceGroup#read}.

---

### DataAzurermConsumptionBudgetResourceGroupTimePeriod <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriod" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConsumptionBudgetResourceGroupFilterDimensionList <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension">DataAzurermConsumptionBudgetResourceGroupFilterDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupFilterDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimension">DataAzurermConsumptionBudgetResourceGroupFilterDimension</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterList <a name="DataAzurermConsumptionBudgetResourceGroupFilterList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension">DataAzurermConsumptionBudgetResourceGroupFilterNotDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimension">DataAzurermConsumptionBudgetResourceGroupFilterNotDimension</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList">DataAzurermConsumptionBudgetResourceGroupFilterNotTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot">DataAzurermConsumptionBudgetResourceGroupFilterNot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.dimension"></a>

```python
dimension: DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterNotDimensionList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.tag"></a>

```python
tag: DataAzurermConsumptionBudgetResourceGroupFilterNotTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList">DataAzurermConsumptionBudgetResourceGroupFilterNotTagList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupFilterNot
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNot">DataAzurermConsumptionBudgetResourceGroupFilterNot</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotTagList <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag">DataAzurermConsumptionBudgetResourceGroupFilterNotTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupFilterNotTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotTag">DataAzurermConsumptionBudgetResourceGroupFilterNotTag</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList">DataAzurermConsumptionBudgetResourceGroupFilterNotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList">DataAzurermConsumptionBudgetResourceGroupFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter">DataAzurermConsumptionBudgetResourceGroupFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.dimension"></a>

```python
dimension: DataAzurermConsumptionBudgetResourceGroupFilterDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterDimensionList">DataAzurermConsumptionBudgetResourceGroupFilterDimensionList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.not"></a>

```python
not: DataAzurermConsumptionBudgetResourceGroupFilterNotList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterNotList">DataAzurermConsumptionBudgetResourceGroupFilterNotList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.tag"></a>

```python
tag: DataAzurermConsumptionBudgetResourceGroupFilterTagList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList">DataAzurermConsumptionBudgetResourceGroupFilterTagList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupFilter
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilter">DataAzurermConsumptionBudgetResourceGroupFilter</a>

---


### DataAzurermConsumptionBudgetResourceGroupFilterTagList <a name="DataAzurermConsumptionBudgetResourceGroupFilterTagList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag">DataAzurermConsumptionBudgetResourceGroupFilterTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTagOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupFilterTag
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupFilterTag">DataAzurermConsumptionBudgetResourceGroupFilterTag</a>

---


### DataAzurermConsumptionBudgetResourceGroupNotificationList <a name="DataAzurermConsumptionBudgetResourceGroupNotificationList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails">contact_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups">contact_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles">contact_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType">threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification">DataAzurermConsumptionBudgetResourceGroupNotification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_emails`<sup>Required</sup> <a name="contact_emails" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactEmails"></a>

```python
contact_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_groups`<sup>Required</sup> <a name="contact_groups" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactGroups"></a>

```python
contact_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contact_roles`<sup>Required</sup> <a name="contact_roles" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.contactRoles"></a>

```python
contact_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupNotification
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupNotification">DataAzurermConsumptionBudgetResourceGroupNotification</a>

---


### DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermConsumptionBudgetResourceGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimeouts">DataAzurermConsumptionBudgetResourceGroupTimeouts</a>]

---


### DataAzurermConsumptionBudgetResourceGroupTimePeriodList <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriodList" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference <a name="DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_consumption_budget_resource_group

dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod">DataAzurermConsumptionBudgetResourceGroupTimePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermConsumptionBudgetResourceGroupTimePeriod
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConsumptionBudgetResourceGroup.DataAzurermConsumptionBudgetResourceGroupTimePeriod">DataAzurermConsumptionBudgetResourceGroupTimePeriod</a>

---



