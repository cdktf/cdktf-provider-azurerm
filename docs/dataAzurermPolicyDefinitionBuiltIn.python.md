# `dataAzurermPolicyDefinitionBuiltIn` Submodule <a name="`dataAzurermPolicyDefinitionBuiltIn` Submodule" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPolicyDefinitionBuiltIn <a name="DataAzurermPolicyDefinitionBuiltIn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in azurerm_policy_definition_built_in}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn(
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
  timeouts: DataAzurermPolicyDefinitionBuiltInTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.managementGroupName">management_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_group_name`<sup>Optional</sup> <a name="management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.managementGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#timeouts DataAzurermPolicyDefinitionBuiltIn#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetManagementGroupName">reset_management_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#read DataAzurermPolicyDefinitionBuiltIn#read}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management_group_name` <a name="reset_management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetManagementGroupName"></a>

```python
def reset_management_group_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermPolicyDefinitionBuiltIn resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermPolicyDefinitionBuiltIn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPolicyDefinitionBuiltIn to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPolicyDefinitionBuiltIn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPolicyDefinitionBuiltIn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyRule">policy_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.roleDefinitionIds">role_definition_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference">DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupNameInput">management_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupName">management_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `policy_rule`<sup>Required</sup> <a name="policy_rule" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyRule"></a>

```python
policy_rule: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `role_definition_ids`<sup>Required</sup> <a name="role_definition_ids" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.roleDefinitionIds"></a>

```python
role_definition_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeouts"></a>

```python
timeouts: DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference">DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_group_name_input`<sup>Optional</sup> <a name="management_group_name_input" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupNameInput"></a>

```python
management_group_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermPolicyDefinitionBuiltInTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_group_name`<sup>Required</sup> <a name="management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.managementGroupName"></a>

```python
management_group_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltIn.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPolicyDefinitionBuiltInConfig <a name="DataAzurermPolicyDefinitionBuiltInConfig" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig(
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
  timeouts: DataAzurermPolicyDefinitionBuiltInTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.managementGroupName">management_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#display_name DataAzurermPolicyDefinitionBuiltIn#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#id DataAzurermPolicyDefinitionBuiltIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management_group_name`<sup>Optional</sup> <a name="management_group_name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.managementGroupName"></a>

```python
management_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#management_group_name DataAzurermPolicyDefinitionBuiltIn#management_group_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#name DataAzurermPolicyDefinitionBuiltIn#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPolicyDefinitionBuiltInTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#timeouts DataAzurermPolicyDefinitionBuiltIn#timeouts}

---

### DataAzurermPolicyDefinitionBuiltInTimeouts <a name="DataAzurermPolicyDefinitionBuiltInTimeouts" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#read DataAzurermPolicyDefinitionBuiltIn#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.111.0/docs/data-sources/policy_definition_built_in#read DataAzurermPolicyDefinitionBuiltIn#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference <a name="DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_policy_definition_built_in

dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermPolicyDefinitionBuiltInTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPolicyDefinitionBuiltIn.DataAzurermPolicyDefinitionBuiltInTimeouts">DataAzurermPolicyDefinitionBuiltInTimeouts</a>]

---



