# `sharedImageGallery` Submodule <a name="`sharedImageGallery` Submodule" id="@cdktf/provider-azurerm.sharedImageGallery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageGallery <a name="SharedImageGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery azurerm_shared_image_gallery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallery(
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
  description: str = None,
  id: str = None,
  sharing: SharedImageGallerySharing = None,
  tags: typing.Mapping[str] = None,
  timeouts: SharedImageGalleryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#location SharedImageGallery#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#name SharedImageGallery#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#resource_group_name SharedImageGallery#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#description SharedImageGallery#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#id SharedImageGallery#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.sharing">sharing</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a></code> | sharing block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#tags SharedImageGallery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#location SharedImageGallery#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#name SharedImageGallery#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#resource_group_name SharedImageGallery#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#description SharedImageGallery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#id SharedImageGallery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharing`<sup>Optional</sup> <a name="sharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.sharing"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

sharing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#sharing SharedImageGallery#sharing}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#tags SharedImageGallery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#timeouts SharedImageGallery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putSharing">put_sharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetSharing">reset_sharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sharing` <a name="put_sharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putSharing"></a>

```python
def put_sharing(
  permission: str,
  community_gallery: SharedImageGallerySharingCommunityGallery = None
) -> None
```

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putSharing.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#permission SharedImageGallery#permission}.

---

###### `community_gallery`<sup>Optional</sup> <a name="community_gallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putSharing.parameter.communityGallery"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

community_gallery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#community_gallery SharedImageGallery#community_gallery}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#create SharedImageGallery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#delete SharedImageGallery#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#read SharedImageGallery#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#update SharedImageGallery#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sharing` <a name="reset_sharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetSharing"></a>

```python
def reset_sharing() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SharedImageGallery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SharedImageGallery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SharedImageGallery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SharedImageGallery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SharedImageGallery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharing">sharing</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference">SharedImageGallerySharingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference">SharedImageGalleryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.uniqueName">unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharingInput">sharing_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sharing`<sup>Required</sup> <a name="sharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharing"></a>

```python
sharing: SharedImageGallerySharingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference">SharedImageGallerySharingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeouts"></a>

```python
timeouts: SharedImageGalleryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference">SharedImageGalleryTimeoutsOutputReference</a>

---

##### `unique_name`<sup>Required</sup> <a name="unique_name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.uniqueName"></a>

```python
unique_name: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sharing_input`<sup>Optional</sup> <a name="sharing_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.sharingInput"></a>

```python
sharing_input: SharedImageGallerySharing
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SharedImageGalleryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageGalleryConfig <a name="SharedImageGalleryConfig" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGalleryConfig(
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
  description: str = None,
  id: str = None,
  sharing: SharedImageGallerySharing = None,
  tags: typing.Mapping[str] = None,
  timeouts: SharedImageGalleryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#location SharedImageGallery#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#name SharedImageGallery#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#resource_group_name SharedImageGallery#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#description SharedImageGallery#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#id SharedImageGallery#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.sharing">sharing</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a></code> | sharing block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#tags SharedImageGallery#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#location SharedImageGallery#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#name SharedImageGallery#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#resource_group_name SharedImageGallery#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#description SharedImageGallery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#id SharedImageGallery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sharing`<sup>Optional</sup> <a name="sharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.sharing"></a>

```python
sharing: SharedImageGallerySharing
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

sharing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#sharing SharedImageGallery#sharing}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#tags SharedImageGallery#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryConfig.property.timeouts"></a>

```python
timeouts: SharedImageGalleryTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#timeouts SharedImageGallery#timeouts}

---

### SharedImageGallerySharing <a name="SharedImageGallerySharing" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallerySharing(
  permission: str,
  community_gallery: SharedImageGallerySharingCommunityGallery = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#permission SharedImageGallery#permission}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.communityGallery">community_gallery</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a></code> | community_gallery block. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#permission SharedImageGallery#permission}.

---

##### `community_gallery`<sup>Optional</sup> <a name="community_gallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing.property.communityGallery"></a>

```python
community_gallery: SharedImageGallerySharingCommunityGallery
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

community_gallery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#community_gallery SharedImageGallery#community_gallery}

---

### SharedImageGallerySharingCommunityGallery <a name="SharedImageGallerySharingCommunityGallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallerySharingCommunityGallery(
  eula: str,
  prefix: str,
  publisher_email: str,
  publisher_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.eula">eula</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#eula SharedImageGallery#eula}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#prefix SharedImageGallery#prefix}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherEmail">publisher_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#publisher_email SharedImageGallery#publisher_email}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherUri">publisher_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#publisher_uri SharedImageGallery#publisher_uri}. |

---

##### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.eula"></a>

```python
eula: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#eula SharedImageGallery#eula}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#prefix SharedImageGallery#prefix}.

---

##### `publisher_email`<sup>Required</sup> <a name="publisher_email" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherEmail"></a>

```python
publisher_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#publisher_email SharedImageGallery#publisher_email}.

---

##### `publisher_uri`<sup>Required</sup> <a name="publisher_uri" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery.property.publisherUri"></a>

```python
publisher_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#publisher_uri SharedImageGallery#publisher_uri}.

---

### SharedImageGalleryTimeouts <a name="SharedImageGalleryTimeouts" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGalleryTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#create SharedImageGallery#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#delete SharedImageGallery#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#read SharedImageGallery#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#update SharedImageGallery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#create SharedImageGallery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#delete SharedImageGallery#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#read SharedImageGallery#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#update SharedImageGallery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageGallerySharingCommunityGalleryOutputReference <a name="SharedImageGallerySharingCommunityGalleryOutputReference" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eulaInput">eula_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmailInput">publisher_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUriInput">publisher_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eula">eula</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmail">publisher_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUri">publisher_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `eula_input`<sup>Optional</sup> <a name="eula_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eulaInput"></a>

```python
eula_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `publisher_email_input`<sup>Optional</sup> <a name="publisher_email_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmailInput"></a>

```python
publisher_email_input: str
```

- *Type:* str

---

##### `publisher_uri_input`<sup>Optional</sup> <a name="publisher_uri_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUriInput"></a>

```python
publisher_uri_input: str
```

- *Type:* str

---

##### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.eula"></a>

```python
eula: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `publisher_email`<sup>Required</sup> <a name="publisher_email" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherEmail"></a>

```python
publisher_email: str
```

- *Type:* str

---

##### `publisher_uri`<sup>Required</sup> <a name="publisher_uri" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.publisherUri"></a>

```python
publisher_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference.property.internalValue"></a>

```python
internal_value: SharedImageGallerySharingCommunityGallery
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

---


### SharedImageGallerySharingOutputReference <a name="SharedImageGallerySharingOutputReference" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGallerySharingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery">put_community_gallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resetCommunityGallery">reset_community_gallery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_community_gallery` <a name="put_community_gallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery"></a>

```python
def put_community_gallery(
  eula: str,
  prefix: str,
  publisher_email: str,
  publisher_uri: str
) -> None
```

###### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery.parameter.eula"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#eula SharedImageGallery#eula}.

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#prefix SharedImageGallery#prefix}.

---

###### `publisher_email`<sup>Required</sup> <a name="publisher_email" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery.parameter.publisherEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#publisher_email SharedImageGallery#publisher_email}.

---

###### `publisher_uri`<sup>Required</sup> <a name="publisher_uri" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.putCommunityGallery.parameter.publisherUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/shared_image_gallery#publisher_uri SharedImageGallery#publisher_uri}.

---

##### `reset_community_gallery` <a name="reset_community_gallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.resetCommunityGallery"></a>

```python
def reset_community_gallery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGallery">community_gallery</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference">SharedImageGallerySharingCommunityGalleryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGalleryInput">community_gallery_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `community_gallery`<sup>Required</sup> <a name="community_gallery" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGallery"></a>

```python
community_gallery: SharedImageGallerySharingCommunityGalleryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGalleryOutputReference">SharedImageGallerySharingCommunityGalleryOutputReference</a>

---

##### `community_gallery_input`<sup>Optional</sup> <a name="community_gallery_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.communityGalleryInput"></a>

```python
community_gallery_input: SharedImageGallerySharingCommunityGallery
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingCommunityGallery">SharedImageGallerySharingCommunityGallery</a>

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharingOutputReference.property.internalValue"></a>

```python
internal_value: SharedImageGallerySharing
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGallerySharing">SharedImageGallerySharing</a>

---


### SharedImageGalleryTimeoutsOutputReference <a name="SharedImageGalleryTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image_gallery

sharedImageGallery.SharedImageGalleryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharedImageGalleryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImageGallery.SharedImageGalleryTimeouts">SharedImageGalleryTimeouts</a>]

---



