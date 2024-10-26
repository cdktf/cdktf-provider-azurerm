# `virtualDesktopApplicationGroup` Submodule <a name="`virtualDesktopApplicationGroup` Submodule" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopApplicationGroup <a name="VirtualDesktopApplicationGroup" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group azurerm_virtual_desktop_application_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_pool_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  type: str,
  default_desktop_display_name: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualDesktopApplicationGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.hostPoolId">host_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.defaultDesktopDisplayName">default_desktop_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_pool_id`<sup>Required</sup> <a name="host_pool_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.hostPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}.

---

##### `default_desktop_display_name`<sup>Optional</sup> <a name="default_desktop_display_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.defaultDesktopDisplayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}.

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.friendlyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#timeouts VirtualDesktopApplicationGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDefaultDesktopDisplayName">reset_default_desktop_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#create VirtualDesktopApplicationGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#delete VirtualDesktopApplicationGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#read VirtualDesktopApplicationGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#update VirtualDesktopApplicationGroup#update}.

---

##### `reset_default_desktop_display_name` <a name="reset_default_desktop_display_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDefaultDesktopDisplayName"></a>

```python
def reset_default_desktop_display_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualDesktopApplicationGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualDesktopApplicationGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualDesktopApplicationGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualDesktopApplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopApplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference">VirtualDesktopApplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayNameInput">default_desktop_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolIdInput">host_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayName">default_desktop_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolId">host_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeouts"></a>

```python
timeouts: VirtualDesktopApplicationGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference">VirtualDesktopApplicationGroupTimeoutsOutputReference</a>

---

##### `default_desktop_display_name_input`<sup>Optional</sup> <a name="default_desktop_display_name_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayNameInput"></a>

```python
default_desktop_display_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `host_pool_id_input`<sup>Optional</sup> <a name="host_pool_id_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolIdInput"></a>

```python
host_pool_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualDesktopApplicationGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `default_desktop_display_name`<sup>Required</sup> <a name="default_desktop_display_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayName"></a>

```python
default_desktop_display_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `host_pool_id`<sup>Required</sup> <a name="host_pool_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolId"></a>

```python
host_pool_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopApplicationGroupConfig <a name="VirtualDesktopApplicationGroupConfig" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_pool_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  type: str,
  default_desktop_display_name: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VirtualDesktopApplicationGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.hostPoolId">host_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.defaultDesktopDisplayName">default_desktop_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_pool_id`<sup>Required</sup> <a name="host_pool_id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.hostPoolId"></a>

```python
host_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}.

---

##### `default_desktop_display_name`<sup>Optional</sup> <a name="default_desktop_display_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.defaultDesktopDisplayName"></a>

```python
default_desktop_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}.

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.timeouts"></a>

```python
timeouts: VirtualDesktopApplicationGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#timeouts VirtualDesktopApplicationGroup#timeouts}

---

### VirtualDesktopApplicationGroupTimeouts <a name="VirtualDesktopApplicationGroupTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#create VirtualDesktopApplicationGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#delete VirtualDesktopApplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#read VirtualDesktopApplicationGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#update VirtualDesktopApplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#create VirtualDesktopApplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#delete VirtualDesktopApplicationGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#read VirtualDesktopApplicationGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/virtual_desktop_application_group#update VirtualDesktopApplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopApplicationGroupTimeoutsOutputReference <a name="VirtualDesktopApplicationGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_desktop_application_group

virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualDesktopApplicationGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>]

---



