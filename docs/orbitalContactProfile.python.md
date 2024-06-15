# `orbitalContactProfile` Submodule <a name="`orbitalContactProfile` Submodule" id="@cdktf/provider-azurerm.orbitalContactProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrbitalContactProfile <a name="OrbitalContactProfile" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile azurerm_orbital_contact_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_tracking: str,
  links: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinks]],
  location: str,
  minimum_variable_contact_duration: str,
  name: str,
  network_configuration_subnet_id: str,
  resource_group_name: str,
  event_hub_uri: str = None,
  id: str = None,
  minimum_elevation_degrees: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: OrbitalContactProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.autoTracking">auto_tracking</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.minimumVariableContactDuration">minimum_variable_contact_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.networkConfigurationSubnetId">network_configuration_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.eventHubUri">event_hub_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.minimumElevationDegrees">minimum_elevation_degrees</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_tracking`<sup>Required</sup> <a name="auto_tracking" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.autoTracking"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}.

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.links"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#links OrbitalContactProfile#links}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}.

---

##### `minimum_variable_contact_duration`<sup>Required</sup> <a name="minimum_variable_contact_duration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.minimumVariableContactDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `network_configuration_subnet_id`<sup>Required</sup> <a name="network_configuration_subnet_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.networkConfigurationSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}.

---

##### `event_hub_uri`<sup>Optional</sup> <a name="event_hub_uri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.eventHubUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_elevation_degrees`<sup>Optional</sup> <a name="minimum_elevation_degrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.minimumElevationDegrees"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#timeouts OrbitalContactProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks">put_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetEventHubUri">reset_event_hub_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetMinimumElevationDegrees">reset_minimum_elevation_degrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_links` <a name="put_links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks"></a>

```python
def put_links(
  value: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putLinks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}.

---

##### `reset_event_hub_uri` <a name="reset_event_hub_uri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetEventHubUri"></a>

```python
def reset_event_hub_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_minimum_elevation_degrees` <a name="reset_minimum_elevation_degrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetMinimumElevationDegrees"></a>

```python
def reset_minimum_elevation_degrees() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrbitalContactProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrbitalContactProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrbitalContactProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrbitalContactProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrbitalContactProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.links">links</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList">OrbitalContactProfileLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference">OrbitalContactProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTrackingInput">auto_tracking_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUriInput">event_hub_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.linksInput">links_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegreesInput">minimum_elevation_degrees_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDurationInput">minimum_variable_contact_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetIdInput">network_configuration_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTracking">auto_tracking</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUri">event_hub_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegrees">minimum_elevation_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDuration">minimum_variable_contact_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetId">network_configuration_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.links"></a>

```python
links: OrbitalContactProfileLinksList
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList">OrbitalContactProfileLinksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeouts"></a>

```python
timeouts: OrbitalContactProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference">OrbitalContactProfileTimeoutsOutputReference</a>

---

##### `auto_tracking_input`<sup>Optional</sup> <a name="auto_tracking_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTrackingInput"></a>

```python
auto_tracking_input: str
```

- *Type:* str

---

##### `event_hub_uri_input`<sup>Optional</sup> <a name="event_hub_uri_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUriInput"></a>

```python
event_hub_uri_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `links_input`<sup>Optional</sup> <a name="links_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.linksInput"></a>

```python
links_input: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `minimum_elevation_degrees_input`<sup>Optional</sup> <a name="minimum_elevation_degrees_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegreesInput"></a>

```python
minimum_elevation_degrees_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_variable_contact_duration_input`<sup>Optional</sup> <a name="minimum_variable_contact_duration_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDurationInput"></a>

```python
minimum_variable_contact_duration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_subnet_id_input`<sup>Optional</sup> <a name="network_configuration_subnet_id_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetIdInput"></a>

```python
network_configuration_subnet_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OrbitalContactProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>]

---

##### `auto_tracking`<sup>Required</sup> <a name="auto_tracking" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.autoTracking"></a>

```python
auto_tracking: str
```

- *Type:* str

---

##### `event_hub_uri`<sup>Required</sup> <a name="event_hub_uri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.eventHubUri"></a>

```python
event_hub_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `minimum_elevation_degrees`<sup>Required</sup> <a name="minimum_elevation_degrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumElevationDegrees"></a>

```python
minimum_elevation_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_variable_contact_duration`<sup>Required</sup> <a name="minimum_variable_contact_duration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.minimumVariableContactDuration"></a>

```python
minimum_variable_contact_duration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_configuration_subnet_id`<sup>Required</sup> <a name="network_configuration_subnet_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.networkConfigurationSubnetId"></a>

```python
network_configuration_subnet_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrbitalContactProfileConfig <a name="OrbitalContactProfileConfig" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_tracking: str,
  links: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinks]],
  location: str,
  minimum_variable_contact_duration: str,
  name: str,
  network_configuration_subnet_id: str,
  resource_group_name: str,
  event_hub_uri: str = None,
  id: str = None,
  minimum_elevation_degrees: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: OrbitalContactProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.autoTracking">auto_tracking</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumVariableContactDuration">minimum_variable_contact_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.networkConfigurationSubnetId">network_configuration_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.eventHubUri">event_hub_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumElevationDegrees">minimum_elevation_degrees</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_tracking`<sup>Required</sup> <a name="auto_tracking" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.autoTracking"></a>

```python
auto_tracking: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#auto_tracking OrbitalContactProfile#auto_tracking}.

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.links"></a>

```python
links: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#links OrbitalContactProfile#links}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#location OrbitalContactProfile#location}.

---

##### `minimum_variable_contact_duration`<sup>Required</sup> <a name="minimum_variable_contact_duration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumVariableContactDuration"></a>

```python
minimum_variable_contact_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_variable_contact_duration OrbitalContactProfile#minimum_variable_contact_duration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `network_configuration_subnet_id`<sup>Required</sup> <a name="network_configuration_subnet_id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.networkConfigurationSubnetId"></a>

```python
network_configuration_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#network_configuration_subnet_id OrbitalContactProfile#network_configuration_subnet_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#resource_group_name OrbitalContactProfile#resource_group_name}.

---

##### `event_hub_uri`<sup>Optional</sup> <a name="event_hub_uri" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.eventHubUri"></a>

```python
event_hub_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#event_hub_uri OrbitalContactProfile#event_hub_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#id OrbitalContactProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_elevation_degrees`<sup>Optional</sup> <a name="minimum_elevation_degrees" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.minimumElevationDegrees"></a>

```python
minimum_elevation_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#minimum_elevation_degrees OrbitalContactProfile#minimum_elevation_degrees}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#tags OrbitalContactProfile#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileConfig.property.timeouts"></a>

```python
timeouts: OrbitalContactProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#timeouts OrbitalContactProfile#timeouts}

---

### OrbitalContactProfileLinks <a name="OrbitalContactProfileLinks" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinks(
  channels: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannels]],
  direction: str,
  name: str,
  polarization: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.channels">channels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]]</code> | channels block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#direction OrbitalContactProfile#direction}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.polarization">polarization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#polarization OrbitalContactProfile#polarization}. |

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.channels"></a>

```python
channels: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]]

channels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#channels OrbitalContactProfile#channels}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#direction OrbitalContactProfile#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks.property.polarization"></a>

```python
polarization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#polarization OrbitalContactProfile#polarization}.

---

### OrbitalContactProfileLinksChannels <a name="OrbitalContactProfileLinksChannels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksChannels(
  bandwidth_mhz: typing.Union[int, float],
  center_frequency_mhz: typing.Union[int, float],
  end_point: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannelsEndPoint]],
  name: str,
  demodulation_configuration: str = None,
  modulation_configuration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.bandwidthMhz">bandwidth_mhz</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#bandwidth_mhz OrbitalContactProfile#bandwidth_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.centerFrequencyMhz">center_frequency_mhz</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#center_frequency_mhz OrbitalContactProfile#center_frequency_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.endPoint">end_point</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]]</code> | end_point block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.demodulationConfiguration">demodulation_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#demodulation_configuration OrbitalContactProfile#demodulation_configuration}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.modulationConfiguration">modulation_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#modulation_configuration OrbitalContactProfile#modulation_configuration}. |

---

##### `bandwidth_mhz`<sup>Required</sup> <a name="bandwidth_mhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.bandwidthMhz"></a>

```python
bandwidth_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#bandwidth_mhz OrbitalContactProfile#bandwidth_mhz}.

---

##### `center_frequency_mhz`<sup>Required</sup> <a name="center_frequency_mhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.centerFrequencyMhz"></a>

```python
center_frequency_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#center_frequency_mhz OrbitalContactProfile#center_frequency_mhz}.

---

##### `end_point`<sup>Required</sup> <a name="end_point" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.endPoint"></a>

```python
end_point: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannelsEndPoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]]

end_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#end_point OrbitalContactProfile#end_point}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#name OrbitalContactProfile#name}.

---

##### `demodulation_configuration`<sup>Optional</sup> <a name="demodulation_configuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.demodulationConfiguration"></a>

```python
demodulation_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#demodulation_configuration OrbitalContactProfile#demodulation_configuration}.

---

##### `modulation_configuration`<sup>Optional</sup> <a name="modulation_configuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels.property.modulationConfiguration"></a>

```python
modulation_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#modulation_configuration OrbitalContactProfile#modulation_configuration}.

---

### OrbitalContactProfileLinksChannelsEndPoint <a name="OrbitalContactProfileLinksChannelsEndPoint" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint(
  end_point_name: str,
  port: str,
  protocol: str,
  ip_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.endPointName">end_point_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#end_point_name OrbitalContactProfile#end_point_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#port OrbitalContactProfile#port}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#protocol OrbitalContactProfile#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#ip_address OrbitalContactProfile#ip_address}. |

---

##### `end_point_name`<sup>Required</sup> <a name="end_point_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.endPointName"></a>

```python
end_point_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#end_point_name OrbitalContactProfile#end_point_name}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#port OrbitalContactProfile#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#protocol OrbitalContactProfile#protocol}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#ip_address OrbitalContactProfile#ip_address}.

---

### OrbitalContactProfileTimeouts <a name="OrbitalContactProfileTimeouts" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#create OrbitalContactProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#delete OrbitalContactProfile#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#read OrbitalContactProfile#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/orbital_contact_profile#update OrbitalContactProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrbitalContactProfileLinksChannelsEndPointList <a name="OrbitalContactProfileLinksChannelsEndPointList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrbitalContactProfileLinksChannelsEndPointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannelsEndPoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]]

---


### OrbitalContactProfileLinksChannelsEndPointOutputReference <a name="OrbitalContactProfileLinksChannelsEndPointOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointNameInput">end_point_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointName">end_point_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_point_name_input`<sup>Optional</sup> <a name="end_point_name_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointNameInput"></a>

```python
end_point_name_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `end_point_name`<sup>Required</sup> <a name="end_point_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.endPointName"></a>

```python
end_point_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrbitalContactProfileLinksChannelsEndPoint]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]

---


### OrbitalContactProfileLinksChannelsList <a name="OrbitalContactProfileLinksChannelsList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksChannelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrbitalContactProfileLinksChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]]

---


### OrbitalContactProfileLinksChannelsOutputReference <a name="OrbitalContactProfileLinksChannelsOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint">put_end_point</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetDemodulationConfiguration">reset_demodulation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetModulationConfiguration">reset_modulation_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_point` <a name="put_end_point" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint"></a>

```python
def put_end_point(
  value: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannelsEndPoint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.putEndPoint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]]

---

##### `reset_demodulation_configuration` <a name="reset_demodulation_configuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetDemodulationConfiguration"></a>

```python
def reset_demodulation_configuration() -> None
```

##### `reset_modulation_configuration` <a name="reset_modulation_configuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.resetModulationConfiguration"></a>

```python
def reset_modulation_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPoint">end_point</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList">OrbitalContactProfileLinksChannelsEndPointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhzInput">bandwidth_mhz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhzInput">center_frequency_mhz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfigurationInput">demodulation_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPointInput">end_point_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfigurationInput">modulation_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhz">bandwidth_mhz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhz">center_frequency_mhz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfiguration">demodulation_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfiguration">modulation_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_point`<sup>Required</sup> <a name="end_point" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPoint"></a>

```python
end_point: OrbitalContactProfileLinksChannelsEndPointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPointList">OrbitalContactProfileLinksChannelsEndPointList</a>

---

##### `bandwidth_mhz_input`<sup>Optional</sup> <a name="bandwidth_mhz_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhzInput"></a>

```python
bandwidth_mhz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `center_frequency_mhz_input`<sup>Optional</sup> <a name="center_frequency_mhz_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhzInput"></a>

```python
center_frequency_mhz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `demodulation_configuration_input`<sup>Optional</sup> <a name="demodulation_configuration_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfigurationInput"></a>

```python
demodulation_configuration_input: str
```

- *Type:* str

---

##### `end_point_input`<sup>Optional</sup> <a name="end_point_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.endPointInput"></a>

```python
end_point_input: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannelsEndPoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsEndPoint">OrbitalContactProfileLinksChannelsEndPoint</a>]]

---

##### `modulation_configuration_input`<sup>Optional</sup> <a name="modulation_configuration_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfigurationInput"></a>

```python
modulation_configuration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `bandwidth_mhz`<sup>Required</sup> <a name="bandwidth_mhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.bandwidthMhz"></a>

```python
bandwidth_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `center_frequency_mhz`<sup>Required</sup> <a name="center_frequency_mhz" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.centerFrequencyMhz"></a>

```python
center_frequency_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `demodulation_configuration`<sup>Required</sup> <a name="demodulation_configuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.demodulationConfiguration"></a>

```python
demodulation_configuration: str
```

- *Type:* str

---

##### `modulation_configuration`<sup>Required</sup> <a name="modulation_configuration" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.modulationConfiguration"></a>

```python
modulation_configuration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrbitalContactProfileLinksChannels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]

---


### OrbitalContactProfileLinksList <a name="OrbitalContactProfileLinksList" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrbitalContactProfileLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]]

---


### OrbitalContactProfileLinksOutputReference <a name="OrbitalContactProfileLinksOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels">put_channels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_channels` <a name="put_channels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels"></a>

```python
def put_channels(
  value: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.putChannels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channels">channels</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList">OrbitalContactProfileLinksChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channelsInput">channels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarizationInput">polarization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarization">polarization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channels"></a>

```python
channels: OrbitalContactProfileLinksChannelsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannelsList">OrbitalContactProfileLinksChannelsList</a>

---

##### `channels_input`<sup>Optional</sup> <a name="channels_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.channelsInput"></a>

```python
channels_input: typing.Union[IResolvable, typing.List[OrbitalContactProfileLinksChannels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksChannels">OrbitalContactProfileLinksChannels</a>]]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `polarization_input`<sup>Optional</sup> <a name="polarization_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarizationInput"></a>

```python
polarization_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.polarization"></a>

```python
polarization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrbitalContactProfileLinks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileLinks">OrbitalContactProfileLinks</a>]

---


### OrbitalContactProfileTimeoutsOutputReference <a name="OrbitalContactProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_contact_profile

orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrbitalContactProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalContactProfile.OrbitalContactProfileTimeouts">OrbitalContactProfileTimeouts</a>]

---



