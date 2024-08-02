# `orbitalSpacecraft` Submodule <a name="`orbitalSpacecraft` Submodule" id="@cdktf/provider-azurerm.orbitalSpacecraft"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrbitalSpacecraft <a name="OrbitalSpacecraft" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft azurerm_orbital_spacecraft}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraft(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  links: typing.Union[IResolvable, typing.List[OrbitalSpacecraftLinks]],
  location: str,
  name: str,
  norad_id: str,
  resource_group_name: str,
  title_line: str,
  two_line_elements: typing.List[str],
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OrbitalSpacecraftTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.noradId">norad_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.titleLine">title_line</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.twoLineElements">two_line_elements</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.links"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#links OrbitalSpacecraft#links}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `norad_id`<sup>Required</sup> <a name="norad_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.noradId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}.

---

##### `title_line`<sup>Required</sup> <a name="title_line" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.titleLine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}.

---

##### `two_line_elements`<sup>Required</sup> <a name="two_line_elements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.twoLineElements"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#timeouts OrbitalSpacecraft#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks">put_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_links` <a name="put_links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks"></a>

```python
def put_links(
  value: typing.Union[IResolvable, typing.List[OrbitalSpacecraftLinks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrbitalSpacecraft resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraft.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraft.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraft.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraft.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrbitalSpacecraft resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrbitalSpacecraft to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrbitalSpacecraft that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrbitalSpacecraft to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links">links</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput">links_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput">norad_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput">title_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput">two_line_elements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId">norad_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine">title_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements">two_line_elements</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links"></a>

```python
links: OrbitalSpacecraftLinksList
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts"></a>

```python
timeouts: OrbitalSpacecraftTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `links_input`<sup>Optional</sup> <a name="links_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput"></a>

```python
links_input: typing.Union[IResolvable, typing.List[OrbitalSpacecraftLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `norad_id_input`<sup>Optional</sup> <a name="norad_id_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput"></a>

```python
norad_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OrbitalSpacecraftTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>]

---

##### `title_line_input`<sup>Optional</sup> <a name="title_line_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput"></a>

```python
title_line_input: str
```

- *Type:* str

---

##### `two_line_elements_input`<sup>Optional</sup> <a name="two_line_elements_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput"></a>

```python
two_line_elements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `norad_id`<sup>Required</sup> <a name="norad_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId"></a>

```python
norad_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `title_line`<sup>Required</sup> <a name="title_line" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine"></a>

```python
title_line: str
```

- *Type:* str

---

##### `two_line_elements`<sup>Required</sup> <a name="two_line_elements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements"></a>

```python
two_line_elements: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrbitalSpacecraftConfig <a name="OrbitalSpacecraftConfig" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraftConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  links: typing.Union[IResolvable, typing.List[OrbitalSpacecraftLinks]],
  location: str,
  name: str,
  norad_id: str,
  resource_group_name: str,
  title_line: str,
  two_line_elements: typing.List[str],
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OrbitalSpacecraftTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId">norad_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine">title_line</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements">two_line_elements</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links"></a>

```python
links: typing.Union[IResolvable, typing.List[OrbitalSpacecraftLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#links OrbitalSpacecraft#links}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `norad_id`<sup>Required</sup> <a name="norad_id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId"></a>

```python
norad_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}.

---

##### `title_line`<sup>Required</sup> <a name="title_line" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine"></a>

```python
title_line: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}.

---

##### `two_line_elements`<sup>Required</sup> <a name="two_line_elements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements"></a>

```python
two_line_elements: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts"></a>

```python
timeouts: OrbitalSpacecraftTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#timeouts OrbitalSpacecraft#timeouts}

---

### OrbitalSpacecraftLinks <a name="OrbitalSpacecraftLinks" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraftLinks(
  bandwidth_mhz: typing.Union[int, float],
  center_frequency_mhz: typing.Union[int, float],
  direction: str,
  name: str,
  polarization: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz">bandwidth_mhz</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz">center_frequency_mhz</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization">polarization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}. |

---

##### `bandwidth_mhz`<sup>Required</sup> <a name="bandwidth_mhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz"></a>

```python
bandwidth_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}.

---

##### `center_frequency_mhz`<sup>Required</sup> <a name="center_frequency_mhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz"></a>

```python
center_frequency_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization"></a>

```python
polarization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}.

---

### OrbitalSpacecraftTimeouts <a name="OrbitalSpacecraftTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraftTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrbitalSpacecraftLinksList <a name="OrbitalSpacecraftLinksList" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraftLinksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrbitalSpacecraftLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrbitalSpacecraftLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]]

---


### OrbitalSpacecraftLinksOutputReference <a name="OrbitalSpacecraftLinksOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput">bandwidth_mhz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput">center_frequency_mhz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput">polarization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz">bandwidth_mhz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz">center_frequency_mhz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization">polarization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_mhz_input`<sup>Optional</sup> <a name="bandwidth_mhz_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput"></a>

```python
bandwidth_mhz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `center_frequency_mhz_input`<sup>Optional</sup> <a name="center_frequency_mhz_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput"></a>

```python
center_frequency_mhz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `polarization_input`<sup>Optional</sup> <a name="polarization_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput"></a>

```python
polarization_input: str
```

- *Type:* str

---

##### `bandwidth_mhz`<sup>Required</sup> <a name="bandwidth_mhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz"></a>

```python
bandwidth_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `center_frequency_mhz`<sup>Required</sup> <a name="center_frequency_mhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz"></a>

```python
center_frequency_mhz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization"></a>

```python
polarization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrbitalSpacecraftLinks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks">OrbitalSpacecraftLinks</a>]

---


### OrbitalSpacecraftTimeoutsOutputReference <a name="OrbitalSpacecraftTimeoutsOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import orbital_spacecraft

orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrbitalSpacecraftTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>]

---



