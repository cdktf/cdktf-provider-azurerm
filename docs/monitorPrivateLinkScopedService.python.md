# `monitorPrivateLinkScopedService` Submodule <a name="`monitorPrivateLinkScopedService` Submodule" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorPrivateLinkScopedService <a name="MonitorPrivateLinkScopedService" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service azurerm_monitor_private_link_scoped_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  linked_resource_id: str,
  name: str,
  resource_group_name: str,
  scope_name: str,
  id: str = None,
  timeouts: MonitorPrivateLinkScopedServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.linkedResourceId">linked_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scopeName">scope_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `linked_resource_id`<sup>Required</sup> <a name="linked_resource_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.linkedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}.

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.scopeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#timeouts MonitorPrivateLinkScopedService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#create MonitorPrivateLinkScopedService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#delete MonitorPrivateLinkScopedService#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#read MonitorPrivateLinkScopedService#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorPrivateLinkScopedService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorPrivateLinkScopedService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorPrivateLinkScopedService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorPrivateLinkScopedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorPrivateLinkScopedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference">MonitorPrivateLinkScopedServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceIdInput">linked_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeNameInput">scope_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceId">linked_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeName">scope_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeouts"></a>

```python
timeouts: MonitorPrivateLinkScopedServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference">MonitorPrivateLinkScopedServiceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_resource_id_input`<sup>Optional</sup> <a name="linked_resource_id_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceIdInput"></a>

```python
linked_resource_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scope_name_input`<sup>Optional</sup> <a name="scope_name_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeNameInput"></a>

```python
scope_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorPrivateLinkScopedServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_resource_id`<sup>Required</sup> <a name="linked_resource_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.linkedResourceId"></a>

```python
linked_resource_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorPrivateLinkScopedServiceConfig <a name="MonitorPrivateLinkScopedServiceConfig" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  linked_resource_id: str,
  name: str,
  resource_group_name: str,
  scope_name: str,
  id: str = None,
  timeouts: MonitorPrivateLinkScopedServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.linkedResourceId">linked_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.scopeName">scope_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `linked_resource_id`<sup>Required</sup> <a name="linked_resource_id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.linkedResourceId"></a>

```python
linked_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#linked_resource_id MonitorPrivateLinkScopedService#linked_resource_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#name MonitorPrivateLinkScopedService#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#resource_group_name MonitorPrivateLinkScopedService#resource_group_name}.

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#scope_name MonitorPrivateLinkScopedService#scope_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#id MonitorPrivateLinkScopedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceConfig.property.timeouts"></a>

```python
timeouts: MonitorPrivateLinkScopedServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#timeouts MonitorPrivateLinkScopedService#timeouts}

---

### MonitorPrivateLinkScopedServiceTimeouts <a name="MonitorPrivateLinkScopedServiceTimeouts" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#create MonitorPrivateLinkScopedService#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#delete MonitorPrivateLinkScopedService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#read MonitorPrivateLinkScopedService#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#create MonitorPrivateLinkScopedService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#delete MonitorPrivateLinkScopedService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/monitor_private_link_scoped_service#read MonitorPrivateLinkScopedService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorPrivateLinkScopedServiceTimeoutsOutputReference <a name="MonitorPrivateLinkScopedServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_private_link_scoped_service

monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorPrivateLinkScopedServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorPrivateLinkScopedService.MonitorPrivateLinkScopedServiceTimeouts">MonitorPrivateLinkScopedServiceTimeouts</a>]

---



