# `dataAzurermPolicySetDefinition` Submodule <a name="`dataAzurermPolicySetDefinition` Submodule" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPolicySetDefinition <a name="DataAzurermPolicySetDefinition" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition azurerm_policy_set_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  management_group_name: str = None,
  name: str = None,
  timeouts: DataAzurermPolicySetDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#display_name DataAzurermPolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#id DataAzurermPolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.managementGroupName">management_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#management_group_name DataAzurermPolicySetDefinition#management_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#name DataAzurermPolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#display_name DataAzurermPolicySetDefinition#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#id DataAzurermPolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_group_name`<sup>Optional</sup> <a name="management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.managementGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#management_group_name DataAzurermPolicySetDefinition#management_group_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#name DataAzurermPolicySetDefinition#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#timeouts DataAzurermPolicySetDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetManagementGroupName">reset_management_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#read DataAzurermPolicySetDefinition#read}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_group_name` <a name="reset_management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetManagementGroupName"></a>

```python
def reset_management_group_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermPolicySetDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermPolicySetDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPolicySetDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPolicySetDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPolicySetDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionGroup">policy_definition_group</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList">DataAzurermPolicySetDefinitionPolicyDefinitionGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionReference">policy_definition_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList">DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitions">policy_definitions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference">DataAzurermPolicySetDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupNameInput">management_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupName">management_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `policy_definition_group`<sup>Required</sup> <a name="policy_definition_group" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionGroup"></a>

```python
policy_definition_group: DataAzurermPolicySetDefinitionPolicyDefinitionGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList">DataAzurermPolicySetDefinitionPolicyDefinitionGroupList</a>

---

##### `policy_definition_reference`<sup>Required</sup> <a name="policy_definition_reference" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionReference"></a>

```python
policy_definition_reference: DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList">DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList</a>

---

##### `policy_definitions`<sup>Required</sup> <a name="policy_definitions" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitions"></a>

```python
policy_definitions: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeouts"></a>

```python
timeouts: DataAzurermPolicySetDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference">DataAzurermPolicySetDefinitionTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_group_name_input`<sup>Optional</sup> <a name="management_group_name_input" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupNameInput"></a>

```python
management_group_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermPolicySetDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_group_name`<sup>Required</sup> <a name="management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupName"></a>

```python
management_group_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPolicySetDefinitionConfig <a name="DataAzurermPolicySetDefinitionConfig" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  management_group_name: str = None,
  name: str = None,
  timeouts: DataAzurermPolicySetDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#display_name DataAzurermPolicySetDefinition#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#id DataAzurermPolicySetDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.managementGroupName">management_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#management_group_name DataAzurermPolicySetDefinition#management_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#name DataAzurermPolicySetDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#display_name DataAzurermPolicySetDefinition#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#id DataAzurermPolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_group_name`<sup>Optional</sup> <a name="management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.managementGroupName"></a>

```python
management_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#management_group_name DataAzurermPolicySetDefinition#management_group_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#name DataAzurermPolicySetDefinition#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPolicySetDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#timeouts DataAzurermPolicySetDefinition#timeouts}

---

### DataAzurermPolicySetDefinitionPolicyDefinitionGroup <a name="DataAzurermPolicySetDefinitionPolicyDefinitionGroup" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup()
```


### DataAzurermPolicySetDefinitionPolicyDefinitionReference <a name="DataAzurermPolicySetDefinitionPolicyDefinitionReference" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference()
```


### DataAzurermPolicySetDefinitionTimeouts <a name="DataAzurermPolicySetDefinitionTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#read DataAzurermPolicySetDefinition#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/data-sources/policy_set_definition#read DataAzurermPolicySetDefinition#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPolicySetDefinitionPolicyDefinitionGroupList <a name="DataAzurermPolicySetDefinitionPolicyDefinitionGroupList" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference <a name="DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId">additional_metadata_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup">DataAzurermPolicySetDefinitionPolicyDefinitionGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_metadata_resource_id`<sup>Required</sup> <a name="additional_metadata_resource_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId"></a>

```python
additional_metadata_resource_id: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermPolicySetDefinitionPolicyDefinitionGroup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup">DataAzurermPolicySetDefinitionPolicyDefinitionGroup</a>

---


### DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList <a name="DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference <a name="DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameters">parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues">parameter_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId">policy_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames">policy_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference">DataAzurermPolicySetDefinitionPolicyDefinitionReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameters"></a>

```python
parameters: StringMap
```

- *Type:* cdktf.StringMap

---

##### `parameter_values`<sup>Required</sup> <a name="parameter_values" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues"></a>

```python
parameter_values: str
```

- *Type:* str

---

##### `policy_definition_id`<sup>Required</sup> <a name="policy_definition_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId"></a>

```python
policy_definition_id: str
```

- *Type:* str

---

##### `policy_group_names`<sup>Required</sup> <a name="policy_group_names" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames"></a>

```python
policy_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermPolicySetDefinitionPolicyDefinitionReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference">DataAzurermPolicySetDefinitionPolicyDefinitionReference</a>

---


### DataAzurermPolicySetDefinitionTimeoutsOutputReference <a name="DataAzurermPolicySetDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_set_definition

dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermPolicySetDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>]

---



