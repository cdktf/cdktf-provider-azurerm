# `proximityPlacementGroup` Submodule <a name="`proximityPlacementGroup` Submodule" id="@cdktf/provider-azurerm.proximityPlacementGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProximityPlacementGroup <a name="ProximityPlacementGroup" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group azurerm_proximity_placement_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  allowed_vm_sizes: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ProximityPlacementGroupTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#location ProximityPlacementGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#name ProximityPlacementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#resource_group_name ProximityPlacementGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.allowedVmSizes">allowed_vm_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#allowed_vm_sizes ProximityPlacementGroup#allowed_vm_sizes}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#id ProximityPlacementGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#tags ProximityPlacementGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#zone ProximityPlacementGroup#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#location ProximityPlacementGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#name ProximityPlacementGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#resource_group_name ProximityPlacementGroup#resource_group_name}.

---

##### `allowed_vm_sizes`<sup>Optional</sup> <a name="allowed_vm_sizes" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.allowedVmSizes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#allowed_vm_sizes ProximityPlacementGroup#allowed_vm_sizes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#id ProximityPlacementGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#tags ProximityPlacementGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#timeouts ProximityPlacementGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#zone ProximityPlacementGroup#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetAllowedVmSizes">reset_allowed_vm_sizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#create ProximityPlacementGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#delete ProximityPlacementGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#read ProximityPlacementGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#update ProximityPlacementGroup#update}.

---

##### `reset_allowed_vm_sizes` <a name="reset_allowed_vm_sizes" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetAllowedVmSizes"></a>

```python
def reset_allowed_vm_sizes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProximityPlacementGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProximityPlacementGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProximityPlacementGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProximityPlacementGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProximityPlacementGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference">ProximityPlacementGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.allowedVmSizesInput">allowed_vm_sizes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.allowedVmSizes">allowed_vm_sizes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.timeouts"></a>

```python
timeouts: ProximityPlacementGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference">ProximityPlacementGroupTimeoutsOutputReference</a>

---

##### `allowed_vm_sizes_input`<sup>Optional</sup> <a name="allowed_vm_sizes_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.allowedVmSizesInput"></a>

```python
allowed_vm_sizes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ProximityPlacementGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `allowed_vm_sizes`<sup>Required</sup> <a name="allowed_vm_sizes" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.allowedVmSizes"></a>

```python
allowed_vm_sizes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProximityPlacementGroupConfig <a name="ProximityPlacementGroupConfig" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  allowed_vm_sizes: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ProximityPlacementGroupTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#location ProximityPlacementGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#name ProximityPlacementGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#resource_group_name ProximityPlacementGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.allowedVmSizes">allowed_vm_sizes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#allowed_vm_sizes ProximityPlacementGroup#allowed_vm_sizes}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#id ProximityPlacementGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#tags ProximityPlacementGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#zone ProximityPlacementGroup#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#location ProximityPlacementGroup#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#name ProximityPlacementGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#resource_group_name ProximityPlacementGroup#resource_group_name}.

---

##### `allowed_vm_sizes`<sup>Optional</sup> <a name="allowed_vm_sizes" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.allowedVmSizes"></a>

```python
allowed_vm_sizes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#allowed_vm_sizes ProximityPlacementGroup#allowed_vm_sizes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#id ProximityPlacementGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#tags ProximityPlacementGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.timeouts"></a>

```python
timeouts: ProximityPlacementGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#timeouts ProximityPlacementGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#zone ProximityPlacementGroup#zone}.

---

### ProximityPlacementGroupTimeouts <a name="ProximityPlacementGroupTimeouts" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#create ProximityPlacementGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#delete ProximityPlacementGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#read ProximityPlacementGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#update ProximityPlacementGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#create ProximityPlacementGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#delete ProximityPlacementGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#read ProximityPlacementGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/proximity_placement_group#update ProximityPlacementGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProximityPlacementGroupTimeoutsOutputReference <a name="ProximityPlacementGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import proximity_placement_group

proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProximityPlacementGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.proximityPlacementGroup.ProximityPlacementGroupTimeouts">ProximityPlacementGroupTimeouts</a>]

---



