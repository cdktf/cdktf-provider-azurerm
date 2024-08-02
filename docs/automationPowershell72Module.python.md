# `automationPowershell72Module` Submodule <a name="`automationPowershell72Module` Submodule" id="@cdktf/provider-azurerm.automationPowershell72Module"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationPowershell72Module <a name="AutomationPowershell72Module" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module azurerm_automation_powershell72_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72Module(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_id: str,
  module_link: AutomationPowershell72ModuleModuleLink,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AutomationPowershell72ModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.automationAccountId">automation_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.moduleLink">module_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | module_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_id`<sup>Required</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.automationAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}.

---

##### `module_link`<sup>Required</sup> <a name="module_link" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.moduleLink"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

module_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#module_link AutomationPowershell72Module#module_link}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#timeouts AutomationPowershell72Module#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink">put_module_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_module_link` <a name="put_module_link" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink"></a>

```python
def put_module_link(
  uri: str,
  hash: AutomationPowershell72ModuleModuleLinkHash = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#uri AutomationPowershell72Module#uri}.

---

###### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink.parameter.hash"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#hash AutomationPowershell72Module#hash}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#create AutomationPowershell72Module#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#delete AutomationPowershell72Module#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#read AutomationPowershell72Module#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#update AutomationPowershell72Module#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationPowershell72Module resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72Module.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72Module.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72Module.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72Module.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationPowershell72Module resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationPowershell72Module to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationPowershell72Module that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationPowershell72Module to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLink">module_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference">AutomationPowershell72ModuleModuleLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference">AutomationPowershell72ModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountIdInput">automation_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLinkInput">module_link_input</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountId">automation_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `module_link`<sup>Required</sup> <a name="module_link" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLink"></a>

```python
module_link: AutomationPowershell72ModuleModuleLinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference">AutomationPowershell72ModuleModuleLinkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeouts"></a>

```python
timeouts: AutomationPowershell72ModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference">AutomationPowershell72ModuleTimeoutsOutputReference</a>

---

##### `automation_account_id_input`<sup>Optional</sup> <a name="automation_account_id_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountIdInput"></a>

```python
automation_account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `module_link_input`<sup>Optional</sup> <a name="module_link_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLinkInput"></a>

```python
module_link_input: AutomationPowershell72ModuleModuleLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutomationPowershell72ModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>]

---

##### `automation_account_id`<sup>Required</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountId"></a>

```python
automation_account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationPowershell72ModuleConfig <a name="AutomationPowershell72ModuleConfig" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72ModuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_id: str,
  module_link: AutomationPowershell72ModuleModuleLink,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AutomationPowershell72ModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.automationAccountId">automation_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.moduleLink">module_link</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | module_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_id`<sup>Required</sup> <a name="automation_account_id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.automationAccountId"></a>

```python
automation_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}.

---

##### `module_link`<sup>Required</sup> <a name="module_link" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.moduleLink"></a>

```python
module_link: AutomationPowershell72ModuleModuleLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

module_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#module_link AutomationPowershell72Module#module_link}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.timeouts"></a>

```python
timeouts: AutomationPowershell72ModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#timeouts AutomationPowershell72Module#timeouts}

---

### AutomationPowershell72ModuleModuleLink <a name="AutomationPowershell72ModuleModuleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72ModuleModuleLink(
  uri: str,
  hash: AutomationPowershell72ModuleModuleLinkHash = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#uri AutomationPowershell72Module#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | hash block. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#uri AutomationPowershell72Module#uri}.

---

##### `hash`<sup>Optional</sup> <a name="hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.hash"></a>

```python
hash: AutomationPowershell72ModuleModuleLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#hash AutomationPowershell72Module#hash}

---

### AutomationPowershell72ModuleModuleLinkHash <a name="AutomationPowershell72ModuleModuleLinkHash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash(
  algorithm: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#algorithm AutomationPowershell72Module#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#value AutomationPowershell72Module#value}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#algorithm AutomationPowershell72Module#algorithm}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#value AutomationPowershell72Module#value}.

---

### AutomationPowershell72ModuleTimeouts <a name="AutomationPowershell72ModuleTimeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72ModuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#create AutomationPowershell72Module#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#delete AutomationPowershell72Module#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#read AutomationPowershell72Module#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#update AutomationPowershell72Module#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#create AutomationPowershell72Module#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#delete AutomationPowershell72Module#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#read AutomationPowershell72Module#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#update AutomationPowershell72Module#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationPowershell72ModuleModuleLinkHashOutputReference <a name="AutomationPowershell72ModuleModuleLinkHashOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.internalValue"></a>

```python
internal_value: AutomationPowershell72ModuleModuleLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---


### AutomationPowershell72ModuleModuleLinkOutputReference <a name="AutomationPowershell72ModuleModuleLinkOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash">put_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resetHash">reset_hash</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hash` <a name="put_hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash"></a>

```python
def put_hash(
  algorithm: str,
  value: str
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#algorithm AutomationPowershell72Module#algorithm}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/automation_powershell72_module#value AutomationPowershell72Module#value}.

---

##### `reset_hash` <a name="reset_hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resetHash"></a>

```python
def reset_hash() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hash">hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference">AutomationPowershell72ModuleModuleLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hashInput">hash_input</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hash"></a>

```python
hash: AutomationPowershell72ModuleModuleLinkHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference">AutomationPowershell72ModuleModuleLinkHashOutputReference</a>

---

##### `hash_input`<sup>Optional</sup> <a name="hash_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hashInput"></a>

```python
hash_input: AutomationPowershell72ModuleModuleLinkHash
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.internalValue"></a>

```python
internal_value: AutomationPowershell72ModuleModuleLink
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---


### AutomationPowershell72ModuleTimeoutsOutputReference <a name="AutomationPowershell72ModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_powershell72_module

automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationPowershell72ModuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>]

---



