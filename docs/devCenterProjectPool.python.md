# `devCenterProjectPool` Submodule <a name="`devCenterProjectPool` Submodule" id="@cdktf/provider-azurerm.devCenterProjectPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectPool <a name="DevCenterProjectPool" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool azurerm_dev_center_project_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dev_box_definition_name: str,
  dev_center_attached_network_name: str,
  dev_center_project_id: str,
  local_administrator_enabled: bool | IResolvable,
  location: str,
  name: str,
  id: str = None,
  managed_virtual_network_regions: typing.List[str] = None,
  single_sign_on_enabled: bool | IResolvable = None,
  stop_on_disconnect_grace_period_minutes: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevCenterProjectPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devBoxDefinitionName">dev_box_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterAttachedNetworkName">dev_center_attached_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.localAdministratorEnabled">local_administrator_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.managedVirtualNetworkRegions">managed_virtual_network_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.singleSignOnEnabled">single_sign_on_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.stopOnDisconnectGracePeriodMinutes">stop_on_disconnect_grace_period_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dev_box_definition_name`<sup>Required</sup> <a name="dev_box_definition_name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devBoxDefinitionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}.

---

##### `dev_center_attached_network_name`<sup>Required</sup> <a name="dev_center_attached_network_name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterAttachedNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}.

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}.

---

##### `local_administrator_enabled`<sup>Required</sup> <a name="local_administrator_enabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.localAdministratorEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_virtual_network_regions`<sup>Optional</sup> <a name="managed_virtual_network_regions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.managedVirtualNetworkRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}.

---

##### `single_sign_on_enabled`<sup>Optional</sup> <a name="single_sign_on_enabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.singleSignOnEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}.

---

##### `stop_on_disconnect_grace_period_minutes`<sup>Optional</sup> <a name="stop_on_disconnect_grace_period_minutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.stopOnDisconnectGracePeriodMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetManagedVirtualNetworkRegions">reset_managed_virtual_network_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetSingleSignOnEnabled">reset_single_sign_on_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes">reset_stop_on_disconnect_grace_period_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_virtual_network_regions` <a name="reset_managed_virtual_network_regions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetManagedVirtualNetworkRegions"></a>

```python
def reset_managed_virtual_network_regions() -> None
```

##### `reset_single_sign_on_enabled` <a name="reset_single_sign_on_enabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetSingleSignOnEnabled"></a>

```python
def reset_single_sign_on_enabled() -> None
```

##### `reset_stop_on_disconnect_grace_period_minutes` <a name="reset_stop_on_disconnect_grace_period_minutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes"></a>

```python
def reset_stop_on_disconnect_grace_period_minutes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevCenterProjectPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevCenterProjectPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterProjectPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput">dev_box_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput">dev_center_attached_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput">dev_center_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput">local_administrator_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegionsInput">managed_virtual_network_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabledInput">single_sign_on_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput">stop_on_disconnect_grace_period_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName">dev_box_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName">dev_center_attached_network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled">local_administrator_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegions">managed_virtual_network_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabled">single_sign_on_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes">stop_on_disconnect_grace_period_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts"></a>

```python
timeouts: DevCenterProjectPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a>

---

##### `dev_box_definition_name_input`<sup>Optional</sup> <a name="dev_box_definition_name_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput"></a>

```python
dev_box_definition_name_input: str
```

- *Type:* str

---

##### `dev_center_attached_network_name_input`<sup>Optional</sup> <a name="dev_center_attached_network_name_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput"></a>

```python
dev_center_attached_network_name_input: str
```

- *Type:* str

---

##### `dev_center_project_id_input`<sup>Optional</sup> <a name="dev_center_project_id_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput"></a>

```python
dev_center_project_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_administrator_enabled_input`<sup>Optional</sup> <a name="local_administrator_enabled_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput"></a>

```python
local_administrator_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_virtual_network_regions_input`<sup>Optional</sup> <a name="managed_virtual_network_regions_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegionsInput"></a>

```python
managed_virtual_network_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `single_sign_on_enabled_input`<sup>Optional</sup> <a name="single_sign_on_enabled_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabledInput"></a>

```python
single_sign_on_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `stop_on_disconnect_grace_period_minutes_input`<sup>Optional</sup> <a name="stop_on_disconnect_grace_period_minutes_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput"></a>

```python
stop_on_disconnect_grace_period_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DevCenterProjectPoolTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `dev_box_definition_name`<sup>Required</sup> <a name="dev_box_definition_name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName"></a>

```python
dev_box_definition_name: str
```

- *Type:* str

---

##### `dev_center_attached_network_name`<sup>Required</sup> <a name="dev_center_attached_network_name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName"></a>

```python
dev_center_attached_network_name: str
```

- *Type:* str

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId"></a>

```python
dev_center_project_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_administrator_enabled`<sup>Required</sup> <a name="local_administrator_enabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled"></a>

```python
local_administrator_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_virtual_network_regions`<sup>Required</sup> <a name="managed_virtual_network_regions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegions"></a>

```python
managed_virtual_network_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `single_sign_on_enabled`<sup>Required</sup> <a name="single_sign_on_enabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabled"></a>

```python
single_sign_on_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `stop_on_disconnect_grace_period_minutes`<sup>Required</sup> <a name="stop_on_disconnect_grace_period_minutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes"></a>

```python
stop_on_disconnect_grace_period_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectPoolConfig <a name="DevCenterProjectPoolConfig" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dev_box_definition_name: str,
  dev_center_attached_network_name: str,
  dev_center_project_id: str,
  local_administrator_enabled: bool | IResolvable,
  location: str,
  name: str,
  id: str = None,
  managed_virtual_network_regions: typing.List[str] = None,
  single_sign_on_enabled: bool | IResolvable = None,
  stop_on_disconnect_grace_period_minutes: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevCenterProjectPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName">dev_box_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName">dev_center_attached_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled">local_administrator_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.managedVirtualNetworkRegions">managed_virtual_network_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.singleSignOnEnabled">single_sign_on_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes">stop_on_disconnect_grace_period_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dev_box_definition_name`<sup>Required</sup> <a name="dev_box_definition_name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName"></a>

```python
dev_box_definition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}.

---

##### `dev_center_attached_network_name`<sup>Required</sup> <a name="dev_center_attached_network_name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName"></a>

```python
dev_center_attached_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}.

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId"></a>

```python
dev_center_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}.

---

##### `local_administrator_enabled`<sup>Required</sup> <a name="local_administrator_enabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled"></a>

```python
local_administrator_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_virtual_network_regions`<sup>Optional</sup> <a name="managed_virtual_network_regions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.managedVirtualNetworkRegions"></a>

```python
managed_virtual_network_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}.

---

##### `single_sign_on_enabled`<sup>Optional</sup> <a name="single_sign_on_enabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.singleSignOnEnabled"></a>

```python
single_sign_on_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}.

---

##### `stop_on_disconnect_grace_period_minutes`<sup>Optional</sup> <a name="stop_on_disconnect_grace_period_minutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes"></a>

```python
stop_on_disconnect_grace_period_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts"></a>

```python
timeouts: DevCenterProjectPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}

---

### DevCenterProjectPoolTimeouts <a name="DevCenterProjectPoolTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectPoolTimeoutsOutputReference <a name="DevCenterProjectPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_project_pool

devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevCenterProjectPoolTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---



