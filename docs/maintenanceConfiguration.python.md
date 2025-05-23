# `maintenanceConfiguration` Submodule <a name="`maintenanceConfiguration` Submodule" id="@cdktf/provider-azurerm.maintenanceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceConfiguration <a name="MaintenanceConfiguration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration azurerm_maintenance_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfiguration(
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
  scope: str,
  id: str = None,
  in_guest_user_patch_mode: str = None,
  install_patches: MaintenanceConfigurationInstallPatches = None,
  properties: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MaintenanceConfigurationTimeouts = None,
  visibility: str = None,
  window: MaintenanceConfigurationWindow = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#location MaintenanceConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#name MaintenanceConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#scope MaintenanceConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#id MaintenanceConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.inGuestUserPatchMode">in_guest_user_patch_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.installPatches">install_patches</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | install_patches block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#properties MaintenanceConfiguration#properties}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#tags MaintenanceConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#visibility MaintenanceConfiguration#visibility}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.window">window</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | window block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#location MaintenanceConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#name MaintenanceConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#scope MaintenanceConfiguration#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#id MaintenanceConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_guest_user_patch_mode`<sup>Optional</sup> <a name="in_guest_user_patch_mode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.inGuestUserPatchMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}.

---

##### `install_patches`<sup>Optional</sup> <a name="install_patches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.installPatches"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

install_patches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#install_patches MaintenanceConfiguration#install_patches}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#properties MaintenanceConfiguration#properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#tags MaintenanceConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#timeouts MaintenanceConfiguration#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.visibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#visibility MaintenanceConfiguration#visibility}.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.Initializer.parameter.window"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#window MaintenanceConfiguration#window}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches">put_install_patches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow">put_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInGuestUserPatchMode">reset_in_guest_user_patch_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInstallPatches">reset_install_patches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetVisibility">reset_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetWindow">reset_window</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_install_patches` <a name="put_install_patches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches"></a>

```python
def put_install_patches(
  linux: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesLinux]] = None,
  reboot: str = None,
  windows: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesWindows]] = None
) -> None
```

###### `linux`<sup>Optional</sup> <a name="linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches.parameter.linux"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]

linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#linux MaintenanceConfiguration#linux}

---

###### `reboot`<sup>Optional</sup> <a name="reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches.parameter.reboot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#reboot MaintenanceConfiguration#reboot}.

---

###### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putInstallPatches.parameter.windows"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#windows MaintenanceConfiguration#windows}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#create MaintenanceConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#delete MaintenanceConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#read MaintenanceConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#update MaintenanceConfiguration#update}.

---

##### `put_window` <a name="put_window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow"></a>

```python
def put_window(
  start_date_time: str,
  time_zone: str,
  duration: str = None,
  expiration_date_time: str = None,
  recur_every: str = None
) -> None
```

###### `start_date_time`<sup>Required</sup> <a name="start_date_time" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow.parameter.startDateTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}.

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}.

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow.parameter.duration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#duration MaintenanceConfiguration#duration}.

---

###### `expiration_date_time`<sup>Optional</sup> <a name="expiration_date_time" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow.parameter.expirationDateTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}.

---

###### `recur_every`<sup>Optional</sup> <a name="recur_every" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.putWindow.parameter.recurEvery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in_guest_user_patch_mode` <a name="reset_in_guest_user_patch_mode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInGuestUserPatchMode"></a>

```python
def reset_in_guest_user_patch_mode() -> None
```

##### `reset_install_patches` <a name="reset_install_patches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetInstallPatches"></a>

```python
def reset_install_patches() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetVisibility"></a>

```python
def reset_visibility() -> None
```

##### `reset_window` <a name="reset_window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.resetWindow"></a>

```python
def reset_window() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MaintenanceConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MaintenanceConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MaintenanceConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MaintenanceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatches">install_patches</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference">MaintenanceConfigurationInstallPatchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference">MaintenanceConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.window">window</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference">MaintenanceConfigurationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchModeInput">in_guest_user_patch_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatchesInput">install_patches_input</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.windowInput">window_input</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchMode">in_guest_user_patch_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `install_patches`<sup>Required</sup> <a name="install_patches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatches"></a>

```python
install_patches: MaintenanceConfigurationInstallPatchesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference">MaintenanceConfigurationInstallPatchesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeouts"></a>

```python
timeouts: MaintenanceConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference">MaintenanceConfigurationTimeoutsOutputReference</a>

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.window"></a>

```python
window: MaintenanceConfigurationWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference">MaintenanceConfigurationWindowOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_guest_user_patch_mode_input`<sup>Optional</sup> <a name="in_guest_user_patch_mode_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchModeInput"></a>

```python
in_guest_user_patch_mode_input: str
```

- *Type:* str

---

##### `install_patches_input`<sup>Optional</sup> <a name="install_patches_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.installPatchesInput"></a>

```python
install_patches_input: MaintenanceConfigurationInstallPatches
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MaintenanceConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.windowInput"></a>

```python
window_input: MaintenanceConfigurationWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `in_guest_user_patch_mode`<sup>Required</sup> <a name="in_guest_user_patch_mode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.inGuestUserPatchMode"></a>

```python
in_guest_user_patch_mode: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceConfigurationConfig <a name="MaintenanceConfigurationConfig" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationConfig(
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
  scope: str,
  id: str = None,
  in_guest_user_patch_mode: str = None,
  install_patches: MaintenanceConfigurationInstallPatches = None,
  properties: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MaintenanceConfigurationTimeouts = None,
  visibility: str = None,
  window: MaintenanceConfigurationWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#location MaintenanceConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#name MaintenanceConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#scope MaintenanceConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#id MaintenanceConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.inGuestUserPatchMode">in_guest_user_patch_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.installPatches">install_patches</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | install_patches block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#properties MaintenanceConfiguration#properties}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#tags MaintenanceConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#visibility MaintenanceConfiguration#visibility}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.window">window</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | window block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#location MaintenanceConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#name MaintenanceConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#resource_group_name MaintenanceConfiguration#resource_group_name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#scope MaintenanceConfiguration#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#id MaintenanceConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_guest_user_patch_mode`<sup>Optional</sup> <a name="in_guest_user_patch_mode" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.inGuestUserPatchMode"></a>

```python
in_guest_user_patch_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#in_guest_user_patch_mode MaintenanceConfiguration#in_guest_user_patch_mode}.

---

##### `install_patches`<sup>Optional</sup> <a name="install_patches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.installPatches"></a>

```python
install_patches: MaintenanceConfigurationInstallPatches
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

install_patches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#install_patches MaintenanceConfiguration#install_patches}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#properties MaintenanceConfiguration#properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#tags MaintenanceConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.timeouts"></a>

```python
timeouts: MaintenanceConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#timeouts MaintenanceConfiguration#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#visibility MaintenanceConfiguration#visibility}.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationConfig.property.window"></a>

```python
window: MaintenanceConfigurationWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#window MaintenanceConfiguration#window}

---

### MaintenanceConfigurationInstallPatches <a name="MaintenanceConfigurationInstallPatches" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatches(
  linux: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesLinux]] = None,
  reboot: str = None,
  windows: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesWindows]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.linux">linux</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]</code> | linux block. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.reboot">reboot</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#reboot MaintenanceConfiguration#reboot}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.windows">windows</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]</code> | windows block. |

---

##### `linux`<sup>Optional</sup> <a name="linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.linux"></a>

```python
linux: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesLinux]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]

linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#linux MaintenanceConfiguration#linux}

---

##### `reboot`<sup>Optional</sup> <a name="reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.reboot"></a>

```python
reboot: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#reboot MaintenanceConfiguration#reboot}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches.property.windows"></a>

```python
windows: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesWindows]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]

windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#windows MaintenanceConfiguration#windows}

---

### MaintenanceConfigurationInstallPatchesLinux <a name="MaintenanceConfigurationInstallPatchesLinux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux(
  classifications_to_include: typing.List[str] = None,
  package_names_mask_to_exclude: typing.List[str] = None,
  package_names_mask_to_include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.classificationsToInclude">classifications_to_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToExclude">package_names_mask_to_exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#package_names_mask_to_exclude MaintenanceConfiguration#package_names_mask_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToInclude">package_names_mask_to_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#package_names_mask_to_include MaintenanceConfiguration#package_names_mask_to_include}. |

---

##### `classifications_to_include`<sup>Optional</sup> <a name="classifications_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.classificationsToInclude"></a>

```python
classifications_to_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}.

---

##### `package_names_mask_to_exclude`<sup>Optional</sup> <a name="package_names_mask_to_exclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToExclude"></a>

```python
package_names_mask_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#package_names_mask_to_exclude MaintenanceConfiguration#package_names_mask_to_exclude}.

---

##### `package_names_mask_to_include`<sup>Optional</sup> <a name="package_names_mask_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux.property.packageNamesMaskToInclude"></a>

```python
package_names_mask_to_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#package_names_mask_to_include MaintenanceConfiguration#package_names_mask_to_include}.

---

### MaintenanceConfigurationInstallPatchesWindows <a name="MaintenanceConfigurationInstallPatchesWindows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows(
  classifications_to_include: typing.List[str] = None,
  kb_numbers_to_exclude: typing.List[str] = None,
  kb_numbers_to_include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.classificationsToInclude">classifications_to_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToExclude">kb_numbers_to_exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#kb_numbers_to_exclude MaintenanceConfiguration#kb_numbers_to_exclude}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToInclude">kb_numbers_to_include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#kb_numbers_to_include MaintenanceConfiguration#kb_numbers_to_include}. |

---

##### `classifications_to_include`<sup>Optional</sup> <a name="classifications_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.classificationsToInclude"></a>

```python
classifications_to_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#classifications_to_include MaintenanceConfiguration#classifications_to_include}.

---

##### `kb_numbers_to_exclude`<sup>Optional</sup> <a name="kb_numbers_to_exclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToExclude"></a>

```python
kb_numbers_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#kb_numbers_to_exclude MaintenanceConfiguration#kb_numbers_to_exclude}.

---

##### `kb_numbers_to_include`<sup>Optional</sup> <a name="kb_numbers_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows.property.kbNumbersToInclude"></a>

```python
kb_numbers_to_include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#kb_numbers_to_include MaintenanceConfiguration#kb_numbers_to_include}.

---

### MaintenanceConfigurationTimeouts <a name="MaintenanceConfigurationTimeouts" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#create MaintenanceConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#delete MaintenanceConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#read MaintenanceConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#update MaintenanceConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#create MaintenanceConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#delete MaintenanceConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#read MaintenanceConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#update MaintenanceConfiguration#update}.

---

### MaintenanceConfigurationWindow <a name="MaintenanceConfigurationWindow" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationWindow(
  start_date_time: str,
  time_zone: str,
  duration: str = None,
  expiration_date_time: str = None,
  recur_every: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.startDateTime">start_date_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#duration MaintenanceConfiguration#duration}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.expirationDateTime">expiration_date_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.recurEvery">recur_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}. |

---

##### `start_date_time`<sup>Required</sup> <a name="start_date_time" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.startDateTime"></a>

```python
start_date_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#start_date_time MaintenanceConfiguration#start_date_time}.

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#time_zone MaintenanceConfiguration#time_zone}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#duration MaintenanceConfiguration#duration}.

---

##### `expiration_date_time`<sup>Optional</sup> <a name="expiration_date_time" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.expirationDateTime"></a>

```python
expiration_date_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#expiration_date_time MaintenanceConfiguration#expiration_date_time}.

---

##### `recur_every`<sup>Optional</sup> <a name="recur_every" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow.property.recurEvery"></a>

```python
recur_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/maintenance_configuration#recur_every MaintenanceConfiguration#recur_every}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaintenanceConfigurationInstallPatchesLinuxList <a name="MaintenanceConfigurationInstallPatchesLinuxList" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MaintenanceConfigurationInstallPatchesLinuxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesLinux]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]

---


### MaintenanceConfigurationInstallPatchesLinuxOutputReference <a name="MaintenanceConfigurationInstallPatchesLinuxOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetClassificationsToInclude">reset_classifications_to_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToExclude">reset_package_names_mask_to_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToInclude">reset_package_names_mask_to_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classifications_to_include` <a name="reset_classifications_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetClassificationsToInclude"></a>

```python
def reset_classifications_to_include() -> None
```

##### `reset_package_names_mask_to_exclude` <a name="reset_package_names_mask_to_exclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToExclude"></a>

```python
def reset_package_names_mask_to_exclude() -> None
```

##### `reset_package_names_mask_to_include` <a name="reset_package_names_mask_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.resetPackageNamesMaskToInclude"></a>

```python
def reset_package_names_mask_to_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToIncludeInput">classifications_to_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExcludeInput">package_names_mask_to_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToIncludeInput">package_names_mask_to_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude">classifications_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude">package_names_mask_to_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude">package_names_mask_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifications_to_include_input`<sup>Optional</sup> <a name="classifications_to_include_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToIncludeInput"></a>

```python
classifications_to_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_names_mask_to_exclude_input`<sup>Optional</sup> <a name="package_names_mask_to_exclude_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExcludeInput"></a>

```python
package_names_mask_to_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_names_mask_to_include_input`<sup>Optional</sup> <a name="package_names_mask_to_include_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToIncludeInput"></a>

```python
package_names_mask_to_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classifications_to_include`<sup>Required</sup> <a name="classifications_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude"></a>

```python
classifications_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_names_mask_to_exclude`<sup>Required</sup> <a name="package_names_mask_to_exclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude"></a>

```python
package_names_mask_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_names_mask_to_include`<sup>Required</sup> <a name="package_names_mask_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude"></a>

```python
package_names_mask_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MaintenanceConfigurationInstallPatchesLinux]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]

---


### MaintenanceConfigurationInstallPatchesOutputReference <a name="MaintenanceConfigurationInstallPatchesOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux">put_linux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows">put_windows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetLinux">reset_linux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetReboot">reset_reboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetWindows">reset_windows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_linux` <a name="put_linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux"></a>

```python
def put_linux(
  value: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesLinux]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putLinux.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]

---

##### `put_windows` <a name="put_windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows"></a>

```python
def put_windows(
  value: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesWindows]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.putWindows.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]

---

##### `reset_linux` <a name="reset_linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetLinux"></a>

```python
def reset_linux() -> None
```

##### `reset_reboot` <a name="reset_reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetReboot"></a>

```python
def reset_reboot() -> None
```

##### `reset_windows` <a name="reset_windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.resetWindows"></a>

```python
def reset_windows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linux">linux</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList">MaintenanceConfigurationInstallPatchesLinuxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList">MaintenanceConfigurationInstallPatchesWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linuxInput">linux_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.rebootInput">reboot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windowsInput">windows_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.reboot">reboot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linux"></a>

```python
linux: MaintenanceConfigurationInstallPatchesLinuxList
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinuxList">MaintenanceConfigurationInstallPatchesLinuxList</a>

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windows"></a>

```python
windows: MaintenanceConfigurationInstallPatchesWindowsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList">MaintenanceConfigurationInstallPatchesWindowsList</a>

---

##### `linux_input`<sup>Optional</sup> <a name="linux_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.linuxInput"></a>

```python
linux_input: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesLinux]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesLinux">MaintenanceConfigurationInstallPatchesLinux</a>]]

---

##### `reboot_input`<sup>Optional</sup> <a name="reboot_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.rebootInput"></a>

```python
reboot_input: str
```

- *Type:* str

---

##### `windows_input`<sup>Optional</sup> <a name="windows_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.windowsInput"></a>

```python
windows_input: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesWindows]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]

---

##### `reboot`<sup>Required</sup> <a name="reboot" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.reboot"></a>

```python
reboot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesOutputReference.property.internalValue"></a>

```python
internal_value: MaintenanceConfigurationInstallPatches
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatches">MaintenanceConfigurationInstallPatches</a>

---


### MaintenanceConfigurationInstallPatchesWindowsList <a name="MaintenanceConfigurationInstallPatchesWindowsList" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MaintenanceConfigurationInstallPatchesWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MaintenanceConfigurationInstallPatchesWindows]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]]

---


### MaintenanceConfigurationInstallPatchesWindowsOutputReference <a name="MaintenanceConfigurationInstallPatchesWindowsOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetClassificationsToInclude">reset_classifications_to_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToExclude">reset_kb_numbers_to_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToInclude">reset_kb_numbers_to_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classifications_to_include` <a name="reset_classifications_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetClassificationsToInclude"></a>

```python
def reset_classifications_to_include() -> None
```

##### `reset_kb_numbers_to_exclude` <a name="reset_kb_numbers_to_exclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToExclude"></a>

```python
def reset_kb_numbers_to_exclude() -> None
```

##### `reset_kb_numbers_to_include` <a name="reset_kb_numbers_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.resetKbNumbersToInclude"></a>

```python
def reset_kb_numbers_to_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToIncludeInput">classifications_to_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExcludeInput">kb_numbers_to_exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToIncludeInput">kb_numbers_to_include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude">classifications_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude">kb_numbers_to_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude">kb_numbers_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifications_to_include_input`<sup>Optional</sup> <a name="classifications_to_include_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToIncludeInput"></a>

```python
classifications_to_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kb_numbers_to_exclude_input`<sup>Optional</sup> <a name="kb_numbers_to_exclude_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExcludeInput"></a>

```python
kb_numbers_to_exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kb_numbers_to_include_input`<sup>Optional</sup> <a name="kb_numbers_to_include_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToIncludeInput"></a>

```python
kb_numbers_to_include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classifications_to_include`<sup>Required</sup> <a name="classifications_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude"></a>

```python
classifications_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kb_numbers_to_exclude`<sup>Required</sup> <a name="kb_numbers_to_exclude" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude"></a>

```python
kb_numbers_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kb_numbers_to_include`<sup>Required</sup> <a name="kb_numbers_to_include" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude"></a>

```python
kb_numbers_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MaintenanceConfigurationInstallPatchesWindows]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationInstallPatchesWindows">MaintenanceConfigurationInstallPatchesWindows</a>]

---


### MaintenanceConfigurationTimeoutsOutputReference <a name="MaintenanceConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MaintenanceConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationTimeouts">MaintenanceConfigurationTimeouts</a>]

---


### MaintenanceConfigurationWindowOutputReference <a name="MaintenanceConfigurationWindowOutputReference" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import maintenance_configuration

maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetExpirationDateTime">reset_expiration_date_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetRecurEvery">reset_recur_every</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_expiration_date_time` <a name="reset_expiration_date_time" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetExpirationDateTime"></a>

```python
def reset_expiration_date_time() -> None
```

##### `reset_recur_every` <a name="reset_recur_every" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.resetRecurEvery"></a>

```python
def reset_recur_every() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTimeInput">expiration_date_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEveryInput">recur_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTimeInput">start_date_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTime">expiration_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEvery">recur_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTime">start_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `expiration_date_time_input`<sup>Optional</sup> <a name="expiration_date_time_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTimeInput"></a>

```python
expiration_date_time_input: str
```

- *Type:* str

---

##### `recur_every_input`<sup>Optional</sup> <a name="recur_every_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEveryInput"></a>

```python
recur_every_input: str
```

- *Type:* str

---

##### `start_date_time_input`<sup>Optional</sup> <a name="start_date_time_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTimeInput"></a>

```python
start_date_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `expiration_date_time`<sup>Required</sup> <a name="expiration_date_time" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.expirationDateTime"></a>

```python
expiration_date_time: str
```

- *Type:* str

---

##### `recur_every`<sup>Required</sup> <a name="recur_every" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.recurEvery"></a>

```python
recur_every: str
```

- *Type:* str

---

##### `start_date_time`<sup>Required</sup> <a name="start_date_time" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.startDateTime"></a>

```python
start_date_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindowOutputReference.property.internalValue"></a>

```python
internal_value: MaintenanceConfigurationWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.maintenanceConfiguration.MaintenanceConfigurationWindow">MaintenanceConfigurationWindow</a>

---



